"use client";

import { useState, type FormEvent } from "react";
import { guide } from "@/lib/guide";

// Inline "get the free guide" card (no popup). Posts to /api/lead like the other forms, then reveals the download.
export default function GuideForm({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = { ...Object.fromEntries(new FormData(e.currentTarget)), intent: guide.intent, page: window.location.pathname + window.location.search };
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");
      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      gtag?.("event", "generate_lead", { lead_type: "guide" });
      gtag?.("event", "guide_download", { guide_name: guide.title });
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <aside className={`guide-card ${className}`} aria-label="Free neighborhood guide">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="guide-cover" src={guide.cover} alt={`Cover of ${guide.title}`} width={340} height={440} loading="lazy" />
      <div className="guide-body">
        <p className="eyebrow">Free download</p>
        <h3>{guide.title}</h3>
        <p>{guide.blurb}</p>
        {status === "done" ? (
          <div className="guide-done" role="status">
            <p><strong>Thanks! Your guide is ready.</strong> Alex may follow up with a quick note, and you can reply any time.</p>
            <a className="btn" href={guide.pdf} download>Download the guide (PDF)</a>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="guide-form">
            <div className="row">
              <label>Name<input name="name" required autoComplete="name" /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            </div>
            <input name="company" tabIndex={-1} autoComplete="off" className="hp" aria-hidden />
            <button className="btn" disabled={status === "sending"}>{status === "sending" ? "One moment…" : "Send me the guide"}</button>
            {status === "error" && <p className="form-error" role="alert">{error}</p>}
            <p className="fine">By submitting, you agree to be contacted by call, text, or email. Consent is not a condition of any purchase. See our <a href="/privacy">Privacy Policy</a>.</p>
          </form>
        )}
      </div>
    </aside>
  );
}
