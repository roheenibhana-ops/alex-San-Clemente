"use client";

import { useEffect, useState } from "react";
import { agent } from "@/lib/content";

const links = [
  ["Lifestyle", "#lifestyle"],
  ["Neighborhoods", "#neighborhoods"],
  ["Services", "#services"],
  ["About", "#about"],
  ["FAQ", "#faq"],
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
      <a href="#top" className="brand" aria-label="San Clemente home">
        <span className="brand-mark" aria-hidden />
        <span>
          San Clemente
          <small>with {agent.name}</small>
        </span>
      </a>
      <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#contact" className="btn btn-sm" onClick={() => setOpen(false)}>
          Talk to Alex
        </a>
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
