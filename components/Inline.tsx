import Link from "next/link";
import type { ReactNode } from "react";

// Renders [label](url) links and **bold** inside plain strings.
export default function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean);
  const out: ReactNode[] = parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return href.startsWith("/") ? (
        <Link key={i} href={href}>{label}</Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    return <span key={i}>{part}</span>;
  });
  return <>{out}</>;
}
