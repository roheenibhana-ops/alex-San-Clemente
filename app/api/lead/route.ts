import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  email?: string;
  phone?: string;
  intent?: string;
  timeline?: string;
  message?: string;
  company?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  // TODO: forward to Alex's CRM / email provider (set LEAD_WEBHOOK_URL).
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, source: "san-clemente-microsite", at: new Date().toISOString() }),
      });
    } catch {
      return NextResponse.json({ ok: false, error: "Could not deliver message" }, { status: 502 });
    }
  } else {
    console.log("[lead]", { name, email, intent: body.intent, timeline: body.timeline });
  }

  return NextResponse.json({ ok: true });
}
