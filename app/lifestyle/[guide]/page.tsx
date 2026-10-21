import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { imageFor } from "@/lib/images";
import CtaCard from "@/components/CtaCard";
import AlertBanner from "@/components/AlertBanner";
import AuthorCard from "@/components/AuthorCard";
import CardImage from "@/components/CardImage";
import Inline from "@/components/Inline";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { guides, getGuide } from "@/lib/places";
import { guideExtras } from "@/lib/extras";
import GuideSection from "@/components/GuideSection";
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
  const extra = guideExtras[g.slug];
  const allSections = [...g.sections, ...(extra?.sections ?? [])];
  const allFaqs = extra?.faqs ?? [];

  return (
    <>
      <Header />
      <main>
        <section className={`page-hero ${imageFor(`guide:${g.slug}`) ? "has-img" : ""}`}>
          {imageFor(`guide:${g.slug}`) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="page-hero-img" src={imageFor(`guide:${g.slug}`)!.src} alt={imageFor(`guide:${g.slug}`)!.alt} width={1600} height={1000} fetchPriority="high" />
          )}
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

        {allSections.map((s, i) => (
          <section key={s.h} className={`section prose ${i % 2 ? "tint" : ""}`}>
            <Reveal>
              <GuideSection s={s} />
            </Reveal>
          </section>
        ))}

        <section className="section prose">
          <Reveal>
            <h2>{g.title}: your questions answered</h2>
            {allFaqs.map((f) => (
              <details className="faq" key={f.q}>
                <summary>{f.q}</summary>
                <p><Inline text={f.a} /></p>
              </details>
            ))}
          </Reveal>
        </section>

        <section className="section narrow">
          <Reveal>
            <CtaCard text="Want to live near the places you just read about? Get current listings, neighborhoods, and recent sales." />
          </Reveal>
        </section>

        <section className="section prose">
          <Reveal>
            <h2>Official sources and further reading</h2>
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
                <CardImage k="hood:talega" />
                <span className="tile-tag">Neighborhoods</span>
                <h3>Compare San Clemente neighborhoods</h3>
              </Link>
            </div>
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
            <h2>Thinking about living here?</h2>
            <p>Alex can point you to the neighborhoods closest to the beaches, trails, and spots you&apos;ll actually use.</p>
            <Link className="btn btn-light" href="/#contact">Talk to Alex</Link>
          </Reveal>
        </section>
      </main>
      <Footer />
      {allFaqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") } })),
          }}
        />
      )}
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
