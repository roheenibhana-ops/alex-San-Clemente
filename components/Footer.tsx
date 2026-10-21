import Link from "next/link";
import { agent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="footer-logo" src="/alex-yu-team-logo.png" alt="Alex Yu Team" height={56} loading="lazy" />
      <p>
        {agent.team} · {agent.brokerage} · CA DRE #{agent.dre}
      </p>
      <p className="footer-links">
        <Link href="/neighborhoods">Neighborhoods</Link>
        <Link href="/lifestyle">Lifestyle</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/home-value">Home value</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </p>
      <p className="fine">Equal Housing Opportunity. © {new Date().getFullYear()} {agent.team}. All rights reserved.</p>
    </footer>
  );
}
