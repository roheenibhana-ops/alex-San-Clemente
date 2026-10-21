import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CardImage from "@/components/CardImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { foodCategories, getFoodCategory, featuredPlaces } from "@/lib/food";
import { mapsUrl } from "@/lib/places";
import { foodExtras } from "@/lib/extras";
import GuideSection from "@/components/GuideSection";
import Inline from "@/components/Inline";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return foodCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const c = getFoodCategory(category);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: { canonical: `/lifestyle/food-drink/${c.slug}` },
    openGraph: { title: c.metaTitle, description: c.description, type: "article", images: ["/og.jpg"] },
  };
}

export default async function FoodCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = getFoodCategory(category);
  if (!c) notFound();
  const featured = new Map(featuredPlaces.filter((p) => p.category === c.slug).map((p) => [p.name, p.slug]));
  const others = foodCategories.filter((x) => x.slug !== c.slug);
  const extra = foodExtras[c.slug];
  const allFaqs = [...c.faqs, ...(extra?.faqs ?? [])];

  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Reveal>
            <Breadcrumbs
              trail={[
                { label: "Lifestyle", href: "/lifestyle" },
                { label: "Food & drink", href: "/lifestyle/food-drink" },
                { label: c.title, href: `/lifestyle/food-drink/${c.slug}` },
              ]}
            />
            <p className="eyebrow">{c.eyebrow}</p>
            <h1>{c.title}</h1>
            {c.intro.map((t) => <p className="lede" key={t}>{t}</p>)}
          </Reveal>
        </section>

        <section className="section prose">
          <Reveal>
            <h2>{c.title}: what are the top picks?</h2>
            <div className="place-grid">
              {c.picks.map((p) => (
                <div className="place" key={p.name}>
                  <h3>{p.name}</h3>
                  <p>{p.note}</p>
                  {featured.has(p.name) && (
                    <Link className="link-arrow" href={`/lifestyle/places/${featured.get(p.name)}`}>Alex&apos;s take →</Link>
                  )}
                  <a className="link-arrow" href={mapsUrl(p.name)} target="_blank" rel="noopener noreferrer">View on map →</a>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {extra?.sections.map((sec, i) => (
          <section key={sec.h} className={`section prose ${i % 2 ? "tint" : ""}`}>
            <Reveal>
              <GuideSection s={sec} />
            </Reveal>
          </section>
        ))}

        <section className="section tint prose">
          <Reveal>
            <h2>What are the local tips?</h2>
            <ul>{c.tips.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="fine">Hours, menus, and reservations change. Confirm with the restaurant before you go.</p>
          </Reveal>
        </section>

        <section className="section prose">
          <Reveal>
            <h2>What pairs well with this guide?</h2>
            <ul>
              {c.pairWith.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
              <li><Link href="/lifestyle/food-drink">All food and drink picks</Link></li>
            </ul>
            <h2>Your questions answered</h2>
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
            <h2>Where else can you eat in San Clemente?</h2>
            <div className="post-grid">
              {others.map((o) => (
                <Link key={o.slug} href={`/lifestyle/food-drink/${o.slug}`} className="post-card">
                  <CardImage k={`food:${o.slug}`} />
                  <span className="tile-tag">{o.eyebrow}</span>
                  <h3>{o.title}</h3>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="value">
          <Reveal>
            <h2>Want to live near your favorite spots?</h2>
            <p>Tell Alex where you love to eat and he&apos;ll point you to the streets within walking distance.</p>
            <Link className="btn btn-light" href="/#contact">Talk to Alex</Link>
          </Reveal>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") } })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: c.title,
          url: `${SITE_URL}/lifestyle/food-drink/${c.slug}`,
          itemListElement: c.picks.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name })),
        }}
      />
    </>
  );
}
