import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CtaCard from "@/components/CtaCard";
import InlineCta from "@/components/InlineCta";
import AlertBanner from "@/components/AlertBanner";
import AuthorCard from "@/components/AuthorCard";
import CardImage from "@/components/CardImage";
import { imageFor, galleries } from "@/lib/images";
import DataTable from "@/components/DataTable";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { hoods, getHood } from "@/lib/neighborhoods";
import { guides } from "@/lib/places";
import { posts } from "@/lib/posts";
import { deep } from "@/lib/neighborhoodDeep";
import Inline from "@/components/Inline";
import { cityMarket, marketSource } from "@/lib/market";
import { SITE_URL } from "@/lib/site";
import { agent } from "@/lib/content";

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
    openGraph: { title: h.metaTitle, description: h.metaDescription, type: "article", images: ["/og.jpg"] },
  };
}

export default async function HoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = getHood(slug);
  if (!h) notFound();
  const others = hoods.filter((x) => x.slug !== h.slug).slice(0, 3);
  const d = deep[h.slug];
  const relatedMap: Record<string, string[]> = {
    "sea-summit": ["sea-summit-azure-aqua-sapphire-indigo-compared", "talega-hoa-dues-mello-roos-what-they-cover", "pier-bowl-vs-talega"],
    talega: ["san-clemente-christmas-lights-holiday-events-2026", "talega-hoa-dues-mello-roos-what-they-cover", "sea-summit-azure-aqua-sapphire-indigo-compared", "pier-bowl-vs-talega"],
    "downtown-pier-bowl": ["san-clemente-thanksgiving-2026-turkey-trots-dinner-giving-back", "san-clemente-halloween-events-2026", "pier-bowl-vs-talega", "san-clemente-beach-trail-guide", "how-to-choose-a-san-clemente-beach"],
    "forster-ranch": ["forster-ranch-tracts-reserves-cantomar-naples-compared", "moving-to-san-clemente-what-to-know", "pier-bowl-vs-talega", "buying-a-single-family-home-in-san-clemente"],
    shorecliffs: ["shorecliffs-beach-club-neighborhood-guide", "moving-to-san-clemente-what-to-know", "buying-a-single-family-home-in-san-clemente", "san-clemente-housing-market-update-october-2026"],
    "rancho-san-clemente": ["sea-pointe-estates-gated-community-san-clemente", "moving-to-san-clemente-what-to-know", "buying-a-single-family-home-in-san-clemente", "san-clemente-housing-market-update-october-2026"],
  };
  const related = (relatedMap[h.slug] ?? []).map((sl) => posts.find((p) => p.slug === sl)).filter(Boolean) as typeof posts;
  const allFaqs = [...h.faqs, ...(d?.extraFaqs ?? [])];

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
          {d && <a href="#day">A day here</a>}
          <a href="#homes">The homes</a>
          {d && <a href="#getting">Getting around</a>}
          {d && <a href="#before-you-buy">Before you buy</a>}
          {d && <a href="#compare">Compare</a>}
          <a href="#market">Market</a>
          <a href="#faq">FAQ</a>
        </nav>

        <section id="overview" className="section prose">
          <Reveal>
            <h2>What is it like living in {h.name}?</h2>
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
            <InlineCta text={`Curious how ${h.name} fits your plans? Talk it through with Alex.`} href="/#contact" label="Talk to Alex" />
          </Reveal>
        </section>

        <section id="feel" className="section prose">
          <Reveal>
            <h2>What {h.name} actually feels like</h2>
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
            <InlineCta text={`See ${h.name} for yourself. Alex will show you the streets worth your time.`} href="/#contact" label="Book a tour" />
          </Reveal>
        </section>

        {galleries[h.slug] && (
          <section className="section gallery-band" aria-label={`${h.name} photos`}>
            <div className="gallery">
              {galleries[h.slug].map((g) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={g.src} src={g.src} alt={g.alt} loading="lazy" />
              ))}
            </div>
          </section>
        )}

        {d && (
          <section id="day" className="section tint prose">
            <Reveal>
              <h2>A day in {h.name}</h2>
              <div className="day-grid">
                {d.dayIn.map((x) => (
                  <div className="day-card" key={x.label}>
                    <h3>{x.label}</h3>
                    <p><Inline text={x.text} /></p>
                  </div>
                ))}
              </div>
              <div className="fit-list">
                <h3>A good fit if you...</h3>
                <ul>{d.fit.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
              <InlineCta text={`Like the sound of a day in ${h.name}? See what is on the market right now.`} href={agent.listingsUrl} label="Browse listings" />
            </Reveal>
          </section>
        )}

        <section className="section narrow">
          <Reveal>
            <CtaCard text={`Ready to see ${h.name} in person? Browse current listings, compare areas, or have Alex set up a tour.`} />
          </Reveal>
        </section>

        <section id="homes" className="section prose">
          <Reveal>
            <h2>Single-family homes in {h.name}</h2>
            {h.homes.map((t) => <p key={t}>{t}</p>)}
            {h.priceNote && <p className="callout">{h.priceNote}</p>}
            <InlineCta text={`Want recent ${h.name} sales and a pricing read? Alex will pull them for you.`} href="/#contact" label="Get recent sales" />
          </Reveal>
        </section>

        {d && (
          <>
            <section id="getting" className="section tint prose">
              <Reveal>
                <h2>Getting around {h.name}</h2>
                {d.getting.map((t) => <p key={t}><Inline text={t} /></p>)}
                <DataTable caption={`Things to do near ${h.name}`} head={["Place", "Why go"]} rows={d.doNearby} />
                <InlineCta text={`Wondering how the drive or walk works from a specific ${h.name} street? Ask Alex.`} href="/#contact" label="Ask Alex" />
              </Reveal>
            </section>

            <section id="before-you-buy" className="section prose">
              <Reveal>
                <h2>What should you check before you buy in {h.name}?</h2>
                <p>Every home is different, but these are the questions worth asking on any tour here. Bring the list, and ask Alex to help you chase down the answers.</p>
                <DataTable caption={`Pre-offer checklist for ${h.name}`} head={["Check", "Why it matters"]} rows={d.checks} />
                <InlineCta text={`Want Alex to chase down the HOA, tax, and permit answers on a ${h.name} home you like?`} href="/#contact" label="Get the answers" />
              </Reveal>
            </section>

            <section id="compare" className="section tint prose">
              <Reveal>
                <h2>How {h.name} compares with other San Clemente neighborhoods</h2>
                <DataTable
                  caption={`${h.name} compared with other San Clemente areas`}
                  head={["Compared with", "The difference"]}
                  rows={d.compare.map((c) => [`[${hoods.find((x) => x.slug === c.slug)?.name ?? c.slug}](/neighborhoods/${c.slug})`, c.text])}
                />
                <p><Link className="link-arrow" href="/neighborhoods">Compare all six neighborhoods →</Link></p>
                <InlineCta text="Still deciding between areas? Compare all six neighborhoods side by side." href="/neighborhoods" label="Compare neighborhoods" />
              </Reveal>
            </section>
          </>
        )}

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
            <InlineCta text={`Own a home in ${h.name}? Find out what it could sell for in today's market.`} href="/home-value" label="Free valuation" />
          </Reveal>
        </section>

        <section className="section narrow">
          <Reveal>
            <CtaCard text={`Want current ${h.name} listings, recent sales, and a cost comparison at your budget?`} />
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

        {related.length > 0 && (
          <section className="section tint">
            <Reveal>
              <h2>Read next about {h.name}</h2>
              <div className="post-grid">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="post-card">
                    <span className="tile-tag">{r.category}</span>
                    <h3>{r.title}</h3>
                    <p>{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </section>
        )}

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
            {allFaqs.map((f) => (
              <details className="faq" key={f.q}>
                <summary>{f.q}</summary>
                <p><Inline text={f.a} /></p>
              </details>
            ))}
          </Reveal>
        </section>

        <section className="section tint">
          <Reveal>
            <h2>Explore other San Clemente neighborhoods</h2>
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

        <section className="section narrow">
          <Reveal>
            <AlertBanner />
            <AuthorCard />
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
          mainEntity: allFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
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
