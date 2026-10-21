import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CardImage from "@/components/CardImage";
import DataTable from "@/components/DataTable";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Inline from "@/components/Inline";
import GoogleBadge from "@/components/GoogleBadge";
import CtaCard from "@/components/CtaCard";
import AlertBanner from "@/components/AlertBanner";
import AuthorCard from "@/components/AuthorCard";
import { imageFor } from "@/lib/images";
import { posts, getPost } from "@/lib/posts";
import type { Block } from "@/lib/posts/types";
import { hoods } from "@/lib/neighborhoods";
import { guides } from "@/lib/places";
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
    openGraph: { title: p.metaTitle, description: p.description, type: "article", publishedTime: p.date, images: ["/og.jpg"] },
  };
}

const fmt = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

const anchor = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function words(blocks: Block[]) {
  return blocks.reduce((n, b) => {
    if (b.t === "p" || b.t === "h2" || b.t === "h3") return n + b.text.split(/\s+/).length;
    if (b.t === "ul" || b.t === "ol") return n + b.items.join(" ").split(/\s+/).length;
    if (b.t === "callout") return n + b.text.split(/\s+/).length;
    if (b.t === "story") return n + b.paragraphs.join(" ").split(/\s+/).length;
    return n + 40;
  }, 0);
}

function Render({ b }: { b: Block }) {
  switch (b.t) {
    case "p": return <p><Inline text={b.text} /></p>;
    case "h2": return <h2 id={anchor(b.text)}>{b.text}</h2>;
    case "h3": return <h3>{b.text}</h3>;
    case "ul": return <ul>{b.items.map((i) => <li key={i}><Inline text={i} /></li>)}</ul>;
    case "ol": return <ol>{b.items.map((i) => <li key={i}><Inline text={i} /></li>)}</ol>;
    case "callout": return <aside className="callout"><strong>{b.title}</strong><p><Inline text={b.text} /></p></aside>;
    case "story":
      return (
        <aside className="story">
          <span className="story-tag">Illustrative scenario, not a specific client</span>
          <h3>{b.title}</h3>
          {b.paragraphs.map((t) => <p key={t}><Inline text={t} /></p>)}
        </aside>
      );
    case "cta": return <p className="inline-cta"><Inline text={b.text} /> <Link className="btn btn-sm" href={b.href}>{b.label}</Link></p>;
    case "ctaCard": return <CtaCard text={b.text} />;
    case "img":
      return (
        <figure className="post-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.src} alt={b.alt} loading="lazy" width={1600} height={1000} />
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      );
    case "table": return <DataTable caption={b.caption} head={b.head} rows={b.rows} source={b.source} />;
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const mins = Math.max(2, Math.round((words(p.blocks) + p.faqs.length * 60) / 220));
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 4);
  const h2s = p.blocks.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2");

  return (
    <>
      <Header />
      <main>
        <section className="page-hero post-top">
          <Reveal>
            <Breadcrumbs trail={[{ label: "Blog", href: "/blog" }, { label: p.title, href: `/blog/${p.slug}` }]} />
            <p className="eyebrow">{p.category}</p>
            <h1>{p.title}</h1>
            <p className="meta">By {agent.name} · {fmt(p.date)} · {mins} min read</p>
          </Reveal>
        </section>
        {imageFor(`post:${p.slug}`) && (
          <figure className="post-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageFor(`post:${p.slug}`)!.src} alt={imageFor(`post:${p.slug}`)!.alt} width={1600} height={1000} fetchPriority="high" />
          </figure>
        )}

        <div className="post-wrap">
          <article className="prose post">
            <aside className="takeaways">
              <strong>Key takeaways</strong>
              <ul>{p.takeaways.map((t) => <li key={t}><Inline text={t} /></li>)}</ul>
            </aside>

            <nav className="guide-toc" aria-label="In this guide">
              <strong>In This Guide</strong>
              <ul>
                {h2s.map((b) => (
                  <li key={b.text}><a href={`#${anchor(b.text)}`}>{b.text}</a></li>
                ))}
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </nav>

            {p.blocks.map((b, i) => (
              <Render key={i} b={b} />
            ))}

            <h2 id="faq">Frequently asked questions about this topic</h2>
            {p.faqs.map((f) => (
              <details className="faq" key={f.q}>
                <summary>{f.q}</summary>
                <p><Inline text={f.a} /></p>
              </details>
            ))}

            <CtaCard text="Want a current San Clemente listing search, recent sales for your street, and a full carrying-cost comparison at your budget?" />

            <AlertBanner />

            <AuthorCard />

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

          <aside className="post-side" aria-label="Featured communities and guides">
            <div className="side-card">
              <h3 className="side-title">Featured communities</h3>
              <ul className="side-list">
                {hoods.map((h) => (
                  <li key={h.slug}><Link href={`/neighborhoods/${h.slug}`}>{h.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="side-card">
              <h3 className="side-title">Local guides</h3>
              <ul className="side-list">
                {guides.map((g) => (
                  <li key={g.slug}><Link href={`/lifestyle/${g.slug}`}>{g.title}</Link></li>
                ))}
              </ul>
            </div>
            <div className="side-card side-cta">
              <GoogleBadge size="side" />
              <p>Thinking about a move? Get a straight answer on pricing and neighborhoods.</p>
              <Link className="btn btn-sm" href="/home-value">Free home valuation</Link>
              <Link className="btn btn-sm btn-outline" href="/#contact">Talk to Alex</Link>
            </div>
          </aside>
        </div>

        <section className="section tint">
          <Reveal>
            <h2>More San Clemente Guides</h2>
            <div className="more-guides">
              {more.map((m) => (
                <Link key={m.slug} href={`/blog/${m.slug}`} className="more-card">
                  <CardImage k={`post:${m.slug}`} />
                  <span>{m.title} →</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") } })),
        }}
      />
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
          image: `${SITE_URL}/og.jpg`,
        }}
      />
    </>
  );
}
