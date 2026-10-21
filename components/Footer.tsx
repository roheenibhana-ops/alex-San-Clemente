import { agent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="footer-logo" src="/alex-yu-team-logo.png" alt="Alex Yu Team" height={56} loading="lazy" />
      <p>
        {agent.team} · {agent.brokerage} · CA DRE #{agent.dre}
      </p>
      <p className="fine">Equal Housing Opportunity. © {new Date().getFullYear()} {agent.team}. All rights reserved.</p>
    </footer>
  );
}
