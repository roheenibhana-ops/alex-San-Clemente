import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CardImage from "@/components/CardImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts } from "@/lib/posts";
import DataTable from "@/components/DataTable";

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
        <section className="section tint prose">
          <Reveal>
            <h2>What you&apos;ll find on this blog</h2>
            <p>
              Every post is written for people who are thinking about buying, selling, or simply understanding San Clemente. We focus on
              single-family homes, real numbers with their sources, and plain English, then link you to the neighborhood and lifestyle
              guides that go deeper.
            </p>
            <DataTable
              caption="Start with the topic that fits you"
              head={["If you're...", "Start here", "What it covers"]}
              rows={[
                ["Watching prices", "[Market update, October 2026](/blog/san-clemente-housing-market-update-october-2026)", "Median price, inventory, time to sell, and what it means"],
                ["Comparing coastal cities", "[San Clemente vs. Dana Point vs. San Juan Capistrano](/blog/san-clemente-vs-dana-point-vs-san-juan-capistrano)", "How coastal Orange County markets behave side by side"],
                ["Planning a move", "[Moving to San Clemente](/blog/moving-to-san-clemente-what-to-know)", "Weather, commuting, costs, and a relocation checklist"],
                ["Ready to buy", "[Buying a single-family home](/blog/buying-a-single-family-home-in-san-clemente)", "Budget, offers, inspections, and closing, step by step"],
                ["Choosing an area", "[Pier Bowl vs. Talega](/blog/pier-bowl-vs-talega)", "Two very different ways to live in San Clemente"],
                ["Eyeing Sea Summit", "[Azure, Aqua, Sapphire and Indigo compared](/blog/sea-summit-azure-aqua-sapphire-indigo-compared)", "How the four tracts differ, plus HOA and Mello-Roos"],
                ["Weighing Talega costs", "[Talega HOA dues and Mello-Roos](/blog/talega-hoa-dues-mello-roos-what-they-cover)", "What the layers of cost pay for and what to ask"],
                ["Curious about Shorecliffs", "[The 504-home neighborhood with its own beach club](/blog/shorecliffs-beach-club-neighborhood-guide)", "History, club membership, and the golf club mix-up"],
                ["Considering a gated community", "[Sea Pointe Estates](/blog/sea-pointe-estates-gated-community-san-clemente)", "Guard gate, amenities, HOA dues, and what to verify"],
                ["Love the outdoors", "[Beach trail guide](/blog/san-clemente-beach-trail-guide) and [how to pick a beach](/blog/how-to-choose-a-san-clemente-beach)", "Hours, safety, parking, and where to go"],
              ]}
            />
            <p>
              New to the area? Browse the <Link href="/neighborhoods">neighborhood guides</Link>, the <Link href="/lifestyle">local guides</Link>,
              or request a <Link href="/home-value">free home valuation</Link>. Have a question you&apos;d like answered in a future post?{" "}
              <Link href="/#contact">Ask Alex</Link>.
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
