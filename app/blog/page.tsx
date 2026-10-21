import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CardImage from "@/components/CardImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "San Clemente Real Estate Blog | Market Updates & Guides",
  description:
    "San Clemente market updates, neighborhood comparisons, and buying guides from Alex Yu. Real numbers, plain English, no fluff.",
  alternates: { canonical: "/blog" },
};

const fmt = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Reveal>
            <Breadcrumbs trail={[{ label: "Blog", href: "/blog" }]} />
            <p className="eyebrow">The San Clemente blog</p>
            <h1>San Clemente Real Estate Blog</h1>
            <p className="lede">Market updates, neighborhood comparisons, and buying guides. Real numbers, plain English.</p>
          </Reveal>
        </section>
        <section className="section">
          <div className="post-grid">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link href={`/blog/${p.slug}`} className="post-card">
                  <CardImage k={`post:${p.slug}`} />
                  <span className="tile-tag">{p.category}</span>
                  <h2>{p.title}</h2>
                  <p>{p.excerpt}</p>
                  <span className="meta">{fmt(p.date)}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
