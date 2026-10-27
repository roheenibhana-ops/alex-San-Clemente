"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { agent } from "@/lib/content";

const links = [
  ["Neighborhoods", "/neighborhoods"],
  ["Lifestyle", "/lifestyle"],
  ["Blog", "/blog"],
  ["Home value", "/home-value"],
  ["About", "/about"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="brand" aria-label="Alex Yu Team, San Clemente home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/alex-yu-team-logo.png" alt="Alex Yu Team, Changing Lives for Good" height={46} />
        <span className="brand-div" aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-serhant" src="/serhant-logo.png" alt="SERHANT." height={16} />
      </Link>
      <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary">
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="/#contact" className="btn btn-sm" onClick={() => setOpen(false)}>
          Talk to Alex
        </Link>
      </nav>
      <button
        className="menu-btn"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
