import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CardImage from "@/components/CardImage";
import DataTable from "@/components/DataTable";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { hoods } from "@/lib/neighborhoods";
import { cityMarket, marketSource, cityFacts, cityFactsSources } from "@/lib/market";
import { SITE_URL } from "@/lib/site";
import { hubExtra } from "@/lib/extras";
import GuideSection from "@/components/GuideSection";
import Inline from "@/components/Inline";

export const metadata: Metadata = {
  title: "San Clemente Neighborhoods: Compare Areas & Home Prices",
  description:
    "Compare San Clemente neighborhoods: Downtown & Pier Bowl, Sea Summit, Forster Ranch, Shorecliffs, Talega, and Rancho San Clemente. Market data and local guides.",
  alternates: { canonical: "/neighborhoods" },
};

export default function NeighborhoodsHub() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Reveal>
            <Breadcrumbs trail={[{ label: "Neighborhoods", href: "/neighborhoods" }]} />
            <p className="eyebrow">Neighborhood guide</p>
            <h1>San Clemente Neighborhoods</h1>
            <p className="lede">
              Six areas, six different ways to live on the coast. Here&apos;s how they compare, with real market numbers and
              honest notes on what each one feels like.
            </p>
          </Reveal>
        </section>

        <section className="section">
          <div className="hood-grid">
            {hoods.map((h, i) => (
              <Reveal key={h.slug} delay={i * 70}>
                <Link href={`/neighborhoods/${h.slug}`} className="hood-tile" style={{ ["--h" as string]: h.hue }}>
                  <CardImage k={`hood:${h.slug}`} />
                  <span className="tile-tag">{h.tag}</span>
                  <h2>{h.name}</h2>
                  <p>{h.short}</p>
                  <span className="link-arrow">Read the guide →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section tint">
          <Reveal>
            <p className="eyebrow">Side by side</p>
            <h2>San Clemente neighborhoods compared side by side</h2>
            <DataTable
              caption="San Clemente neighborhoods at a glance"
              head={["Neighborhood", "Setting", "Best if you want", "Typical homes"]}
              rows={[
                ["Downtown & Pier Bowl", "Coastal, walkable", "To walk to the pier and restaurants", "Vintage cottages, Spanish-style, newer coastal"],
                ["Sea Summit", "Coastal bluff, master-planned", "Newer construction near trails", "Modern single-family homes"],
                ["Forster Ranch", "Hillside, master-planned", "More space, a short drive to the beach", "Planned single-family streets"],
                ["Shorecliffs", "Established, with a private resident beach club", "A close-knit neighborhood and ocean-view lots", "Single-family homes, originally single-level on terraced lots"],
                ["Talega", "Inland, master-planned", "Parks, golf, and shopping close by", "Spanish-Tuscan tract single-family"],
                ["Rancho San Clemente", "Elevated hillside", "Views and a residential feel", "Spanish-style single-family"],
              ]}
            />
          </Reveal>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">Market snapshot</p>
            <h2>The San Clemente single-family market</h2>
            <p className="sub">Citywide figures, the most reliable data available. For a specific neighborhood or street, Alex can pull fresh MLS sales for you.</p>
            <DataTable
              caption="Single-family market, September 2026"
              head={["Metric", "Now", "A year ago", "Note"]}
              rows={cityMarket.map((r) => [r.metric, r.now, r.then, r.note])}
              source={marketSource}
            />
            <DataTable
              caption="San Clemente city facts"
              head={["Fact", "Detail"]}
              rows={cityFacts}
              source={cityFactsSources[0]}
            />
            <Link className="btn" href="/#contact">Get current numbers for my neighborhood</Link>
          </Reveal>
        </section>

        {hubExtra.sections.map((sec, i) => (
          <section key={sec.h} className={`section prose ${i % 2 === 0 ? "tint" : ""}`}>
            <Reveal>
              <GuideSection s={sec} />
            </Reveal>
          </section>
        ))}

        <section className="section prose">
          <Reveal>
            <h2>San Clemente neighborhood FAQ</h2>
            {hubExtra.faqs.map((f) => (
              <details className="faq" key={f.q}>
                <summary>{f.q}</summary>
                <p><Inline text={f.a} /></p>
              </details>
            ))}
          </Reveal>
        </section>

        <section className="value">
          <Reveal>
            <h2>Not sure which neighborhood fits?</h2>
            <p>Tell Alex how you live and he&apos;ll point you to the streets worth touring.</p>
            <Link className="btn btn-light" href="/#contact">Talk to Alex</Link>
          </Reveal>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: hubExtra.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") } })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "San Clemente neighborhoods",
          itemListElement: hoods.map((h, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: h.name,
            url: `${SITE_URL}/neighborhoods/${h.slug}`,
          })),
        }}
      />
    </>
  );
}
