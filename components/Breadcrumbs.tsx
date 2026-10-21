import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/site";

export default function Breadcrumbs({ trail }: { trail: { label: string; href: string }[] }) {
  const all = [{ label: "Home", href: "/" }, ...trail];
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        {all.map((c, i) => (
          <span key={c.href}>
            {i < all.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            {i < all.length - 1 && <i aria-hidden> / </i>}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: `${SITE_URL}${c.href}`,
          })),
        }}
      />
    </>
  );
}
