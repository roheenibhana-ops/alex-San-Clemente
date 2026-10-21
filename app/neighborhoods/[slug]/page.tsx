import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CardImage from "@/components/CardImage";
import { imageFor } from "@/lib/images";
import DataTable from "@/components/DataTable";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { hoods, getHood } from "@/lib/neighborhoods";
import { guides } from "@/lib/places";
import { cityMarket, marketSource } from "@/lib/market";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return hoods.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const h = getHood(slug);
  if (!h) return {};
  return {
    title: h.metaTitle,
    description: h.metaDescription,
    alternates: { canonical: `/neighborhoods/${h.slug}` },
    openGraph: { title: h.metaTitle, description: h.metaDescription, type: "article", images: ["/san-clemente-beach-homes.jpg"] },
  };
}

export default async function HoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = getHood(slug);
  if (!h) notFound();
  const others = hoods.filter((x) => x.slug !== h.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <section className={`hood-hero ${imageFor(`hood:${h.slug}`) ? "has-img" : ""}`} style={{ ["--h" as string]: h.hue }}>
          {imageFor(`hood:${h.slug}`) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="hood-hero-img" src={imageFor(`hood:${h.slug}`)!.src} alt={imageFor(`hood:${h.slug}`)!.alt} width={1600} height={1000} fetchPriority="high" />
          )}
          <div className="hood-hero-inner">
            <Breadcrumbs
              trail={[
                { label: "Neighborhoods", href: "/neighborhoods" },
                { label: h.name, href: `/neighborhoods/${h.slug}` },
              ]}
            />
            <p className="eyebrow">{h.tag}</p>
            <h1>{h.name} Homes for Sale in San Clemente, CA</h1>
            <p className="lede">{h.short}</p>
            <div className="cta-row">
              <Link className="btn" href="/#contact">Get current {h.name} numbers</Link>
              {h.liveData && (
                <a className="btn btn-ghost" href={h.liveData.href} target="_blank" rel="noopener noreferrer">View live listings</a>
              )}
            </div>
          </div>
          <svg className="waves" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden>
            <path className="w1" d="M0 120c120-50 240-50 360 0s240 50 360 0 240-50 360 0 240 50 360 0V220H0Z" />
            <path className="w2" d="M0 150c120-40 240-40 360 0s240 40 360 0 240-40 360 0 240 40 360 0V220H0Z" />
            <path className="w3" d="M0 180c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0V220H0Z" />
          </svg>
        </section>

        <nav className="toc" aria-label="On this page">
          <a href="#overview">Overview</a>
          <a href="#glance">At a glance</a>
          <a href="#feel">What it feels like</a>
          <a href="#homes">The homes</a>
          <a href="#market">Market</a>
          <a href="#faq">FAQ</a>
        </nav>

        <section id="overview" className="section prose">
          <Reveal>
            <h2>Living in {h.name}</h2>
            {h.intro.map((t) => <p key={t}>{t}</p>)}
          </Reveal>
        </section>

        <section id="glance" className="section tint">
          <Reveal>
            <h2>{h.name} at a glance</h2>
            <DataTable
              caption={`${h.name} quick facts`}
              head={["Detail", "What to know"]}
              rows={h.glance}
              source={h.sources[0]}
            />
          </Reveal>
        </section>

        <section id="feel" className="section prose">
          <Reveal>
            <h2>What it actually feels like</h2>
            {h.feels.map((t) => <p key={t}>{t}</p>)}
            <div className="proscons">
              <div>
                <h3>What people like</h3>
                <ul>{h.love.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
              <div>
                <h3>Worth knowing</h3>
                <ul>{h.tradeoffs.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="homes" className="section tint prose">
          <Reveal>
            <h2>Single-family homes in {h.name}</h2>
            {h.homes.map((t) => <p key={t}>{t}</p>)}
            {h.priceNote && <p className="callout">{h.priceNote}</p>}
          </Reveal>
        </section>

        <section id="market" className="section">
          <Reveal>
            <h2>San Clemente market context</h2>
            <p className="sub">
              Neighborhood medians swing month to month because there are only a few sales at a time, so here&apos;s the
              citywide single-family picture, plus a way to get exact {h.name} numbers.
            </p>
            <DataTable
              caption="San Clemente single-family market, September 2026"
              head={["Metric", "Now", "A year ago", "Note"]}
              rows={cityMarket.map((r) => [r.metric, r.now, r.then, r.note])}
              source={marketSource}
            />
            <div className="cta-row">
              <Link className="btn" href="/#contact">Get recent {h.name} sales</Link>
              {h.liveData && (
                <a className="btn btn-ghost" href={h.liveData.href} target="_blank" rel="noopener noreferrer">{h.liveData.label}</a>
              )}
            </div>
          </Reveal>
        </section>

        <section className="section tint">
          <Reveal>
            <h2>Nearby and worth a look</h2>
            <ul className="linklist">
              {h.nearby.map((n) => (
                <li key={n.href + n.label}>
                  <a className="link-arrow" href={n.href} target="_blank" rel="noopener noreferrer">{n.label} →</a>
                  <span>{n.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="section">
          <Reveal>
            <h2>Local guides to pair with {h.name}</h2>
            <div className="post-grid">
              {guides.map((g) => (
                <Link key={g.slug} href={`/lifestyle/${g.slug}`} className="post-card">
                  <CardImage k={`guide:${g.slug}`} />
                  <span className="tile-tag">{g.eyebrow}</span>
                  <h3>{g.title}</h3>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="faq" className="section narrow">
          <Reveal>
            <h2>{h.name} FAQ</h2>
            {h.faqs.map((f) => (
              <details className="faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
        </section>

        <section className="section tint">
          <Reveal>
            <h2>Explore other neighborhoods</h2>
            <div className="hood-grid">
              {others.map((o) => (
                <Link key={o.slug} href={`/neighborhoods/${o.slug}`} className="hood-tile" style={{ ["--h" as string]: o.hue }}>
                  <CardImage k={`hood:${o.slug}`} />
                  <span className="tile-tag">{o.tag}</span>
                  <h3>{o.name}</h3>
                  <p>{o.short}</p>
                </Link>
              ))}
            </div>
            <p className="sources">
              Sources:{" "}
              {h.sources.map((s, i) => (
                <span key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                  {i < h.sources.length - 1 ? " · " : ""}
                </span>
              ))}
              . Figures change; confirm current details with Alex or the MLS before you decide.
            </p>
          </Reveal>
        </section>

        <section className="value">
          <Reveal>
            <h2>Thinking about {h.name}?</h2>
            <p>Alex will pull the recent sales, point out the streets worth touring, and give you an honest read.</p>
            <Link className="btn btn-light" href="/#contact">Talk to Alex</Link>
          </Reveal>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: h.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: h.metaTitle,
          description: h.metaDescription,
          url: `${SITE_URL}/neighborhoods/${h.slug}`,
          about: { "@type": "Place", name: `${h.name}, San Clemente, CA` },
        }}
      />
    </>
  );
}
