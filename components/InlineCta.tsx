import Link from "next/link";

// A one-line call to action with a button. Pass an external href to open in a new tab.
export default function InlineCta({ text, href, label }: { text: string; href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <p className="inline-cta">
      <span>{text}</span>
      {external ? (
        <a className="btn btn-sm" href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      ) : (
        <Link className="btn btn-sm" href={href}>{label}</Link>
      )}
    </p>
  );
}
