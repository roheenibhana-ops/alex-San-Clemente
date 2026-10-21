import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CardImage from "@/components/CardImage";
import { guides } from "@/lib/places";
import { lifestyleHubExtra } from "@/lib/extras";
import GuideSection from "@/components/GuideSection";
import Inline from "@/components/Inline";
import JsonLd from "@/components/JsonLd";
import { beaches, outdoors, eats, schoolLinks, events, gettingAround } from "@/lib/lifestyle";

export const metadata: Metadata = {
  title: "Living in San Clemente, CA | Beaches, Trails, Eats & Schools",
  description:
    "What it's like to live in San Clemente, CA: beaches and surf, trails, local eats, school district info, events, and getting around. A local guide from Alex Yu.",
  alternates: { canonical: "/lifestyle" },
};

export default function Lifestyle() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Reveal>
            <p className="eyebrow">Lifestyle guide</p>
            <h1>Living in San Clemente, CA</h1>
            <p className="lede">
              Surf, trails, a walkable Downtown, and a small-town feel on the Orange County coast. Here&apos;s what daily life
              looks like.
            </p>
          </Reveal>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">Local guides</p>
            <h2>Go deeper</h2>
          </Reveal>
          <div className="post-grid">
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 70}>
                <Link href={`/lifestyle/${g.slug}`} className="post-card">
                  <CardImage k={`guide:${g.slug}`} />
                  <span className="tile-tag">{g.eyebrow}</span>
                  <h3>{g.title}</h3>
                  <p>{g.description}</p>
                  <span className="link-arrow">Read the guide →</span>
                </Link>
              </Reveal>
            ))}
            {[
              { href: "/neighborhoods", tag: "Neighborhoods", title: "Find the Right San Clemente Neighborhood", body: "Compare Downtown, Talega, Sea Summit, Forster Ranch, Shorecliffs and Rancho San Clemente, with real numbers and local notes.", cta: "Compare neighborhoods →" },
              { href: "/blog", tag: "The blog", title: "San Clemente Real Estate Blog", body: "Market updates, subdivision deep dives like Sea Summit, Talega and Sea Pointe, and plain-English buying guides.", cta: "Read the blog →" },
            ].map((c, i) => (
              <Reveal key={c.href} delay={(guides.length + i) * 70}>
                <Link href={c.href} className="post-card">
                  <span className="tile-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <span className="link-arrow">{c.cta}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="beaches" className="section tint">
          <Reveal>
            <p className="eyebrow">Beaches &amp; surf</p>
            <h2>Sand, surf, and sunsets</h2>
          </Reveal>
          <div className="grid2">
            {beaches.map((b, i) => (
              <Reveal key={b.name} delay={i * 80}>
                <div className="card">
                  <h3>{b.name}</h3>
                  <p>{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="outdoors" className="section">
          <Reveal>
            <p className="eyebrow">Parks &amp; trails</p>
            <h2>Outdoors, every day</h2>
          </Reveal>
          <div className="grid4">
            {outdoors.map((o, i) => (
              <Reveal key={o.name} delay={i * 80}>
                <div className="card">
                  <h3>{o.name}</h3>
                  <p>{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="eats" className="section tint">
          <Reveal>
            <p className="eyebrow">Eats &amp; drinks</p>
            <h2>Where locals eat</h2>
            <p className="sub">
              Want Alex&apos;s current favorites for any of these? <Link className="link-arrow" href="/#contact">Ask him →</Link>
            </p>
          </Reveal>
          <div className="grid2">
            {eats.map((e, i) => (
              <Reveal key={e.category} delay={i * 80}>
                <div className="card">
                  <h3>{e.category}</h3>
                  <p>{e.blurb}</p>
                  {e.picks.length > 0 && (
                    <ul className="picks">
                      {e.picks.map((p) => (
                        <li key={p.name}>
                          {p.mapUrl ? (
                            <a href={p.mapUrl} target="_blank" rel="noopener noreferrer">{p.name}</a>
                          ) : (
                            <strong>{p.name}</strong>
                          )}
                          <span>{p.note}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="schools" className="section">
          <Reveal>
            <p className="eyebrow">Schools</p>
            <h2>Schools &amp; education</h2>
            <p className="sub">
              San Clemente is served by the Capistrano Unified School District. Enrollment boundaries and programs can change,
              so please confirm the school assignment for any address directly with the district. For official information, use
              these resources:
            </p>
            <ul className="links">
              {schoolLinks.map((l) => (
                <li key={l.href}>
                  <a className="link-arrow" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} →</a>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section id="events" className="section tint">
          <Reveal>
            <p className="eyebrow">Community</p>
            <h2>Events &amp; traditions</h2>
          </Reveal>
          <div className="grid4">
            {events.map((e, i) => (
              <Reveal key={e.name} delay={i * 80}>
                <div className="card">
                  <h3>{e.name}</h3>
                  <p>{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="getting-around" className="section">
          <Reveal>
            <p className="eyebrow">Getting around</p>
            <h2>Easy to get to, easy to get around</h2>
          </Reveal>
          <div className="grid4">
            {gettingAround.map((g, i) => (
              <Reveal key={g.name} delay={i * 80}>
                <div className="card">
                  <h3>{g.name}</h3>
                  <p>{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {lifestyleHubExtra.sections.map((sec) => (
          <section key={sec.h} className="section prose">
            <Reveal>
              <GuideSection s={sec} />
              <h2>Lifestyle questions</h2>
              {lifestyleHubExtra.faqs.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p><Inline text={f.a} /></p>
                </details>
              ))}
            </Reveal>
          </section>
        ))}

        <section className="value">
          <Reveal>
            <h2>Ready to make San Clemente home?</h2>
            <p>Talk to Alex about single-family homes on the coast, from Downtown cottages to Talega estates.</p>
            <Link className="btn btn-light" href="/#contact">Talk to Alex</Link>
          </Reveal>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: lifestyleHubExtra.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") } })),
        }}
      />
    </>
  );
}
