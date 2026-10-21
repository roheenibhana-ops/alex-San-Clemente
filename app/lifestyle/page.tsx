import type { Metadata } from "next";
import Link from "next/link";
import { imageFor } from "@/lib/images";
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

const cardLinks: Record<string, string> = {
  "San Clemente Pier & Pier Bowl": "/neighborhoods/downtown-pier-bowl",
  "T-Street": "/lifestyle/beaches",
  "Calafia Beach Park": "/lifestyle/beaches",
  "Trestles": "/lifestyle/beaches",
  "San Clemente Beach Trail": "/blog/san-clemente-beach-trail-guide",
  "Neighborhood parks": "/lifestyle/parks-trails",
  "Hills and canyon trails": "/lifestyle/parks-trails",
  "Coffee & breakfast": "/lifestyle/food-drink/brunch",
  "Tacos & casual": "/lifestyle/food-drink",
  "Sunset dinners": "/lifestyle/food-drink/seafood-sunset",
  "Evening drinks & dessert": "/lifestyle/food-drink/dinner",
  "Downtown farmers market": "/lifestyle/local-tips",
  "Ocean Festival": "/lifestyle/local-tips",
  "Fourth of July parade": "/lifestyle/local-tips",
  "The 5 freeway": "/blog/moving-to-san-clemente-what-to-know",
  "Train service": "/blog/moving-to-san-clemente-what-to-know",
  "Walk and bike": "/blog/san-clemente-beach-trail-guide",
};

function InfoCard({ title, body, children }: { title: string; body: string; children?: React.ReactNode }) {
  const href = cardLinks[title];
  const inner = (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      {children}
      {href && <span className="link-arrow">Read more →</span>}
    </>
  );
  return href ? (
    <Link href={href} className="card card-link">{inner}</Link>
  ) : (
    <div className="card">{inner}</div>
  );
}

export default function Lifestyle() {
  return (
    <>
      <Header />
      <main>
        <section className={`page-hero ${imageFor("page:lifestyle") ? "has-img" : ""}`}>
          {imageFor("page:lifestyle") && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="page-hero-img" src={imageFor("page:lifestyle")!.src} alt={imageFor("page:lifestyle")!.alt} width={1600} height={1000} fetchPriority="high" />
          )}
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
            <h2>San Clemente local guides</h2>
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
              { href: "/neighborhoods", img: "hood:talega", tag: "Neighborhoods", title: "Find the Right San Clemente Neighborhood", body: "Compare Downtown, Talega, Sea Summit, Forster Ranch, Shorecliffs and Rancho San Clemente, with real numbers and local notes.", cta: "Compare neighborhoods →" },
              { href: "/blog", img: "post:buying-a-single-family-home-in-san-clemente", tag: "The blog", title: "San Clemente Real Estate Blog", body: "Market updates, subdivision deep dives like Sea Summit, Talega and Sea Pointe, and plain-English buying guides.", cta: "Read the blog →" },
            ].map((c, i) => (
              <Reveal key={c.href} delay={(guides.length + i) * 70}>
                <Link href={c.href} className="post-card">
                  <CardImage k={c.img} />
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
            <h2>San Clemente beaches &amp; surf spots</h2>
          </Reveal>
          <div className="grid2">
            {beaches.map((b, i) => (
              <Reveal key={b.name} delay={i * 80}>
                <InfoCard title={b.name} body={b.body} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="outdoors" className="section">
          <Reveal>
            <p className="eyebrow">Parks &amp; trails</p>
            <h2>San Clemente parks, trails &amp; outdoor activities</h2>
          </Reveal>
          <div className="grid4">
            {outdoors.map((o, i) => (
              <Reveal key={o.name} delay={i * 80}>
                <InfoCard title={o.name} body={o.body} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="eats" className="section tint">
          <Reveal>
            <p className="eyebrow">Eats &amp; drinks</p>
            <h2>Where locals eat in San Clemente</h2>
            <p className="sub">
              Want Alex&apos;s current favorites for any of these? <Link className="link-arrow" href="/#contact">Ask him →</Link>
            </p>
          </Reveal>
          <div className="grid2">
            {eats.map((e, i) => (
              <Reveal key={e.category} delay={i * 80}>
                <InfoCard title={e.category} body={e.blurb}>
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
                </InfoCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="schools" className="section">
          <Reveal>
            <p className="eyebrow">Schools</p>
            <h2>San Clemente schools &amp; education resources</h2>
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
            <h2>San Clemente events &amp; local traditions</h2>
          </Reveal>
          <div className="grid4">
            {events.map((e, i) => (
              <Reveal key={e.name} delay={i * 80}>
                <InfoCard title={e.name} body={e.body} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="getting-around" className="section">
          <Reveal>
            <p className="eyebrow">Getting around</p>
            <h2>How do you get around San Clemente?</h2>
          </Reveal>
          <div className="grid4">
            {gettingAround.map((g, i) => (
              <Reveal key={g.name} delay={i * 80}>
                <InfoCard title={g.name} body={g.body} />
              </Reveal>
            ))}
          </div>
        </section>

        {lifestyleHubExtra.sections.map((sec) => (
          <section key={sec.h} className="section prose">
            <Reveal>
              <GuideSection s={sec} />
              <h2>San Clemente lifestyle FAQ</h2>
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
