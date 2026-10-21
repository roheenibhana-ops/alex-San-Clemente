"use client";

import { useState } from "react";
import Link from "next/link";
import { hoods } from "@/lib/neighborhoods";

export default function Neighborhoods() {
  const [active, setActive] = useState(hoods[0].slug);
  const current = hoods.find((n) => n.slug === active)!;

  return (
    <div className="hoods">
      <div className="hood-tabs" role="tablist" aria-label="San Clemente neighborhoods">
        {hoods.map((n) => (
          <button
            key={n.slug}
            role="tab"
            aria-selected={n.slug === active}
            className={n.slug === active ? "active" : ""}
            onClick={() => setActive(n.slug)}
          >
            {n.name}
          </button>
        ))}
      </div>
      <article key={current.slug} className="hood-card" style={{ ["--h" as string]: current.hue }} role="tabpanel">
        <div className="hood-art" aria-hidden>
          <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="hsl(var(--h) 80% 88%)" />
                <stop offset="1" stopColor="hsl(calc(var(--h) - 140) 90% 90%)" />
              </linearGradient>
            </defs>
            <rect width="400" height="260" fill="url(#sky)" />
            <circle cx="300" cy="80" r="34" fill="#fff" opacity=".85" />
            <path d="M0 170 Q100 130 200 165 T400 150 V260 H0Z" fill="hsl(var(--h) 55% 45%)" opacity=".55" />
            <path d="M0 200 Q120 170 220 200 T400 190 V260 H0Z" fill="hsl(var(--h) 60% 32%)" opacity=".8" />
            <path d="M0 232 Q100 214 200 232 T400 226 V260 H0Z" fill="hsl(var(--h) 65% 20%)" />
          </svg>
          <span className="hood-tag">{current.tag}</span>
        </div>
        <div className="hood-body">
          <h3>{current.name}</h3>
          <p>{current.short}</p>
          <Link href={`/neighborhoods/${current.slug}`} className="link-arrow">
            Read the {current.name} guide →
          </Link>
        </div>
      </article>
      <p className="hood-all"><Link href="/neighborhoods" className="link-arrow">Compare all neighborhoods →</Link></p>
    </div>
  );
}
