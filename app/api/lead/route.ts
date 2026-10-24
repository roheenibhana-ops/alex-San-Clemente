import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  intent?: string;
  timeline?: string;
  message?: string;
  address?: string;
  page?: string;
  company?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SOURCE = "San Clemente Microsite";

function splitName(full: string) {
  const parts = full.trim().split(/\s+/);
  return { firstName: parts[0] ?? "", lastName: parts.slice(1).join(" ") };
}

function summary(l: Lead) {
  return [
    l.intent && (l.intent.startsWith("Guide:") ? `Downloaded: ${l.intent.slice(6).trim()}` : `I am: ${l.intent}`),
    l.timeline && `Timeline: ${l.timeline}`,
    l.address && `Property address: ${l.address}`,
    l.message && `Message: ${l.message}`,
    l.page && `Submitted from: ${l.page}`,
  ]
    .filter(Boolean)
    .join("\n");
}

// Follow Up Boss: https://docs.followupboss.com (Events API)
async function sendToFub(l: Lead) {
  const key = process.env.FUB_API_KEY;
  if (!key) throw new Error("FUB_API_KEY missing");
  const { firstName, lastName } = splitName(l.name ?? "");
  const res = await fetch("https://api.followupboss.com/v1/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(key + ":"),
      "X-System": process.env.FUB_SYSTEM ?? "AlexYuTeamMicrosite",
      ...(process.env.FUB_SYSTEM_KEY ? { "X-System-Key": process.env.FUB_SYSTEM_KEY } : {}),
    },
    body: JSON.stringify({
      source: SOURCE,
      system: process.env.FUB_SYSTEM ?? "AlexYuTeamMicrosite",
      type: l.intent === "Selling" ? "Seller Inquiry" : "General Inquiry",
      message: summary(l),
      person: {
        firstName,
        lastName,
        emails: [{ value: l.email }],
        ...(l.phone ? { phones: [{ value: l.phone }] } : {}),
        tags: ["San Clemente Microsite", ...(l.intent ? [l.intent] : [])],
      },
      ...(l.address ? { property: { street: l.address } } : {}),
    }),
  });
  if (!res.ok) throw new Error("FUB responded " + res.status);
}

// GoHighLevel: inbound webhook URL (workflow trigger) or the Contacts API
async function sendToGhl(l: Lead) {
  const { firstName, lastName } = splitName(l.name ?? "");
  const base = {
    firstName,
    lastName,
    email: l.email,
    phone: l.phone,
    source: SOURCE,
    tags: ["San Clemente Microsite", ...(l.intent ? [l.intent] : [])],
    address1: l.address,
  };
  const hook = process.env.GHL_WEBHOOK_URL;
  if (hook) {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...base, intent: l.intent, timeline: l.timeline, message: l.message, page: l.page }),
    });
    if (!res.ok) throw new Error("GHL webhook responded " + res.status);
    return;
  }
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) throw new Error("GHL credentials missing");
  const res = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + token, Version: "2021-07-28" },
    body: JSON.stringify({ ...base, locationId }),
  });
  if (!res.ok) throw new Error("GHL API responded " + res.status);
}

async function sendToWebhook(l: Lead) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    console.log("[lead]", { name: l.name, email: l.email, intent: l.intent });
    return;
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...l, source: SOURCE, at: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error("Webhook responded " + res.status);
}

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in.
  if (body.company) return NextResponse.json({ ok: true });

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  if (name.length < 2 || !emailRe.test(email)) {
    return NextResponse.json({ ok: false, error: "Name and a valid email are required" }, { status: 422 });
  }
  const lead: Lead = { ...body, name, email };

  try {
    // LEAD_DESTINATION: "fub" | "ghl" | "webhook" (default)
    const dest = (process.env.LEAD_DESTINATION ?? "webhook").toLowerCase();
    if (dest === "fub") await sendToFub(lead);
    else if (dest === "ghl") await sendToGhl(lead);
    else await sendToWebhook(lead);
  } catch (err) {
    console.error("[lead] delivery failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: "We couldn't send your message. Please call or email instead." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
