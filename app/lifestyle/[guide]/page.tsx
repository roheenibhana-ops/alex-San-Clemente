import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CardImage from "@/components/CardImage";
import Inline from "@/components/Inline";
import DataTable from "@/components/DataTable";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { guides, getGuide, mapsUrl } from "@/lib/places";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ guide: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ guide: string }> }): Promise<Metadata> {
  const { guide } = await params;
  const g = getGuide(guide);
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.description,
    alternates: { canonical: `/lifestyle/${g.slug}` },
    openGraph: { title: g.metaTitle, description: g.description, type: "article", images: ["/og.jpg"] },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ guide: string }> }) {
  const { guide } = await params;
  const g = getGuide(guide);
  if (!g) notFound();
  const others = guides.filter((x) => x.slug !== g.slug);

  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Reveal>
            <Breadcrumbs
              trail={[
                { label: "Lifestyle", href: "/lifestyle" },
                { label: g.title, href: `/lifestyle/${g.slug}` },
              ]}
            />
            <p className="eyebrow">{g.eyebrow}</p>
            <h1>{g.title}</h1>
            <p className="lede"><Inline text={g.intro} /></p>
          </Reveal>
        </section>

        {g.sections.map((s, i) => (
          <section key={s.h} className={`section prose ${i % 2 ? "tint" : ""}`}>
            <Reveal>
              <h2>{s.h}</h2>
              {s.text && <p>{s.text}</p>}
              {s.table && <DataTable caption={s.table.caption} head={s.table.head} rows={s.table.rows} />}
              {s.places && (
                <div className="place-grid">
                  {s.places.map((p) => (
                    <div className="place" key={p.name}>
                      <h3>{p.name}</h3>
                      <p>{p.note}</p>
                      <a className="link-arrow" href={mapsUrl(p.name)} target="_blank" rel="noopener noreferrer">View on map →</a>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </section>
        ))}

        <section className="section prose">
          <Reveal>
            <h2>Sources and further reading</h2>
            <ul>
              {g.links.map((l) => (
                <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
              ))}
            </ul>
            <p className="fine">Hours, fees, menus, and rules change. Confirm with the venue, the City, or State Parks before you go.</p>
          </Reveal>
        </section>

        <section className="section tint">
          <Reveal>
            <h2>More local guides</h2>
            <div className="post-grid">
              {others.map((o) => (
                <Link key={o.slug} href={`/lifestyle/${o.slug}`} className="post-card">
                  <CardImage k={`guide:${o.slug}`} />
                  <span className="tile-tag">{o.eyebrow}</span>
                  <h3>{o.title}</h3>
                </Link>
              ))}
              <Link href="/neighborhoods" className="post-card">
                <span className="tile-tag">Neighborhoods</span>
                <h3>Compare San Clemente neighborhoods</h3>
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="value">
          <Reveal>
            <h2>Thinking about living here?</h2>
            <p>Alex can point you to the neighborhoods closest to the beaches, trails, and spots you&apos;ll actually use.</p>
            <Link className="btn btn-light" href="/#contact">Talk to Alex</Link>
          </Reveal>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.title,
          description: g.description,
          author: { "@type": "Organization", name: "Alex Yu Team" },
          mainEntityOfPage: `${SITE_URL}/lifestyle/${g.slug}`,
          image: `${SITE_URL}/san-clemente-beach-homes.jpg`,
        }}
      />
    </>
  );
}
