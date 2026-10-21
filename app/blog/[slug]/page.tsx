import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import DataTable from "@/components/DataTable";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { posts, getPost, type Block } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";
import { agent } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { title: p.metaTitle, description: p.description, type: "article", publishedTime: p.date, images: ["/san-clemente-beach-homes.jpg"] },
  };
}

const fmt = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

function words(blocks: Block[]) {
  return blocks.reduce((n, b) => {
    if (b.t === "p" || b.t === "h2") return n + b.text.split(/\s+/).length;
    if (b.t === "ul") return n + b.items.join(" ").split(/\s+/).length;
    if (b.t === "callout") return n + b.text.split(/\s+/).length;
    return n + 40;
  }, 0);
}

function Render({ b }: { b: Block }) {
  switch (b.t) {
    case "p": return <p>{b.text}</p>;
    case "h2": return <h2>{b.text}</h2>;
    case "ul": return <ul>{b.items.map((i) => <li key={i}>{i}</li>)}</ul>;
    case "callout": return <aside className="callout"><strong>{b.title}</strong><p>{b.text}</p></aside>;
    case "table": return <DataTable caption={b.caption} head={b.head} rows={b.rows} source={b.source} />;
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const mins = Math.max(2, Math.round(words(p.blocks) / 200));
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Reveal>
            <Breadcrumbs trail={[{ label: "Blog", href: "/blog" }, { label: p.title, href: `/blog/${p.slug}` }]} />
            <p className="eyebrow">{p.category}</p>
            <h1>{p.title}</h1>
            <p className="meta">By {agent.name} · {fmt(p.date)} · {mins} min read</p>
          </Reveal>
        </section>
        <article className="section prose post">
          {p.blocks.map((b, i) => (
            <Render key={i} b={b} />
          ))}
          {p.links.length > 0 && (
            <>
              <h2>Further reading</h2>
              <ul>
                {p.links.map((l) => (
                  <li key={l.href}>
                    {l.href.startsWith("/") ? (
                      <Link href={l.href}>{l.label}</Link>
                    ) : (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="fine">Figures are from the cited sources and change over time. Confirm current details with Alex or the MLS before making decisions.</p>
        </article>
        <section className="section tint">
          <Reveal>
            <h2>Keep reading</h2>
            <div className="post-grid">
              {more.map((m) => (
                <Link key={m.slug} href={`/blog/${m.slug}`} className="post-card">
                  <span className="tile-tag">{m.category}</span>
                  <h3>{m.title}</h3>
                  <p>{m.excerpt}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
        <section className="value">
          <Reveal>
            <h2>Want numbers for your street?</h2>
            <p>Ask Alex for a free valuation or a look at recent nearby sales.</p>
            <Link className="btn btn-light" href="/#contact">Talk to Alex</Link>
          </Reveal>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          dateModified: p.date,
          author: { "@type": "Person", name: agent.name },
          publisher: { "@type": "Organization", name: agent.team },
          mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
          image: `${SITE_URL}/san-clemente-beach-homes.jpg`,
        }}
      />
    </>
  );
}
