"use client";

import { useState, type FormEvent } from "react";

const intents = ["Buying", "Selling", "Both", "Investing", "Relocating", "Just curious"];
const timelines = ["Immediately", "1–3 months", "3–6 months", "6–12 months", "Just exploring"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-done" role="status">
        <div className="check" aria-hidden>✓</div>
        <h3>Message sent</h3>
        <p>Thanks! Alex will be in touch shortly, usually the same day.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row">
        <label>
          Name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="row">
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          I&apos;m
          <select name="intent" defaultValue="Buying">
            {intents.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Timeline
        <select name="timeline" defaultValue="1–3 months">
          {timelines.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label>
        How can Alex help?
        <textarea name="message" rows={4} />
      </label>
      <input name="company" tabIndex={-1} autoComplete="off" className="hp" aria-hidden />
      <button className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && <p className="form-error" role="alert">{error}</p>}
      <p className="fine">
        By submitting, you agree to be contacted by call, text, or email. Consent is not a condition of any purchase.
      </p>
    </form>
  );
}
