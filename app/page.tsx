import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Neighborhoods from "@/components/Neighborhoods";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CardImage from "@/components/CardImage";
import { reviews, reviewsLink, reviewStats } from "@/lib/reviews";
import GoogleBadge, { GoogleG } from "@/components/GoogleBadge";
import { guides } from "@/lib/places";
import Link from "next/link";
import { agent, market, stats, lifestyle, services, faqs } from "@/lib/content";

export const metadata = { alternates: { canonical: "/" } };

function Icon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden {...p}>
      {name === "wave" && <path d="M2 20c3-4 6-4 9 0s6 4 9 0 6-4 10 0M2 12c3-4 6-4 9 0s6 4 9 0 6-4 10 0" />}
      {name === "trail" && <path d="M4 27c8-2 4-8 12-9s4-8 12-14M20 27h8" />}
      {name === "roof" && <path d="M3 16 16 5l13 11M7 14v13h18V14M13 27v-8h6v8" />}
      {name === "road" && <path d="M10 3 6 29M22 3l4 26M16 5v4M16 14v4M16 23v4" />}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-img"
            src="/san-clemente-beach-homes.jpg"
            alt="Aerial view of oceanfront single-family homes along the beach in San Clemente, California"
            width={1274}
            height={673}
            fetchPriority="high"
          />
          <div className="hero-scrim" aria-hidden />
          <div className="hero-inner">
            <p className="eyebrow">San Clemente, California · Alex Yu Team</p>
            <h1>
              San Clemente <em>Homes for Sale</em>
              <span className="h1-sub">Single-family beach homes &amp; neighborhood experts</span>
            </h1>
            <p className="lede">
              Browse single-family homes in San Clemente, CA, from walkable Downtown cottages to Talega estates. Median price
              around $2M. {agent.name} helps buyers and sellers win on the Orange County coast.
            </p>
          <div className="cta-row">
              <Link className="btn" href="/home-value">See what my house is worth</Link>
              <a className="btn btn-ghost" href="#neighborhoods">Explore neighborhoods</a>
            </div>
            <div className="hero-proof"><GoogleBadge /></div>
          </div>
          <svg className="waves" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden>
            <path className="w1" d="M0 120c120-50 240-50 360 0s240 50 360 0 240-50 360 0 240 50 360 0V220H0Z" />
            <path className="w2" d="M0 150c120-40 240-40 360 0s240 40 360 0 240-40 360 0 240 40 360 0V220H0Z" />
            <path className="w3" d="M0 180c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0V220H0Z" />
          </svg>
        </section>

        <section className="stats" aria-label="Track record">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </Reveal>
          ))}
        </section>

        {reviews.length > 0 && (
          <section id="reviews" className="reviews-band">
            <Reveal>
              <div className="reviews-head">
                <GoogleG size={44} />
                <div>
                  <p className="eyebrow">Trusted by clients</p>
                  <h2>Rated {reviewStats.rating} on Google</h2>
                  <p className="stars-big" aria-hidden>★★★★★</p>
                  <p className="sub">{reviewStats.count} {reviewStats.label}</p>
                </div>
              </div>
            </Reveal>
            <div className="reviews">
              {reviews.map((r, i) => (
                <Reveal key={r.name + r.quote.slice(0, 12)} delay={i * 90}>
                  <figure className="review">
                    <span className="quote-mark" aria-hidden>&ldquo;</span>
                    <p className="stars-sm" aria-hidden>★★★★★</p>
                    <blockquote>{r.quote}</blockquote>
                    <figcaption>
                      <strong>{r.name}</strong>
                      <span>{r.context} · <GoogleG size={14} /> Google review</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            {reviewsLink && (
              <Reveal>
                <p className="reviews-cta"><a className="btn btn-light" href={reviewsLink} target="_blank" rel="noopener noreferrer">Read all reviews on Google</a></p>
              </Reveal>
            )}
          </section>
        )}

        <section id="market" className="section market">
          <Reveal>
            <p className="eyebrow">Market snapshot</p>
            <h2>A single-family market, around $2M</h2>
          </Reveal>
          <div className="grid2">
            {market.map((m, i) => (
              <Reveal key={m.label} delay={i * 100}>
                <div className="card big">
                  <strong>{m.value}</strong>
                  <h3>{m.label}</h3>
                  <p>{m.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="lifestyle" className="section">
          <Reveal>
            <p className="eyebrow">Why San Clemente</p>
            <h2>The Spanish Village by the Sea</h2>
          </Reveal>
          <div className="grid4">
            {lifestyle.map((l, i) => (
              <Reveal key={l.title} delay={i * 90}>
                <div className="card">
                  <div className="ico"><Icon name={l.icon} /></div>
                  <h3>{l.title}</h3>
                  <p>{l.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="neighborhoods" className="section tint">
          <Reveal>
            <p className="eyebrow">Neighborhood guide</p>
            <h2>Find the block that fits your life</h2>
          </Reveal>
          <Reveal delay={100}>
            <Neighborhoods />
          </Reveal>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">Live like a local</p>
            <h2>Explore San Clemente</h2>
          </Reveal>
          <div className="guide-links">
            {guides.map((g) => (
              <Link key={g.slug} href={`/lifestyle/${g.slug}`} className="post-card">
                <CardImage k={`guide:${g.slug}`} />
                <span className="tile-tag">{g.eyebrow}</span>
                <h3>{g.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="value">
          <Reveal>
            <h2>What&apos;s your San Clemente home worth?</h2>
            <p>A free valuation built from your actual address and recent nearby sales, not just an algorithm.</p>
            <Link className="btn btn-light" href="/home-value">Request my valuation</Link>
          </Reveal>
        </section>

        <section id="services" className="section">
          <Reveal>
            <p className="eyebrow">How Alex helps</p>
            <h2>Educate first, advise second</h2>
          </Reveal>
          <div className="grid3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card service">
                  <span className="num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <Link className="link-arrow" href={s.href}>{s.label} →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="section tint">
          <div className="about">
            <Reveal>
              <figure className="portrait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/alex-yu.jpg" alt="Alex Yu, San Clemente realtor" width={640} height={800} loading="lazy" />
                <figcaption>Alex Yu</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Meet your agent</p>
              <h2>{agent.name}</h2>
              <p>
                Alex leads the {agent.team} at {agent.brokerage}, serving homeowners and buyers across Orange County. With
                over a decade in the market and 600+ transactions, the approach is simple: give you an honest, block-by-block
                read of the market so every decision is an informed one.
              </p>
              <a className="link-arrow" href={agent.mainSite} target="_blank" rel="noopener noreferrer">
                Visit Alex&apos;s main site →
              </a>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="section narrow">
          <Reveal>
            <p className="eyebrow">Good to know</p>
            <h2>Frequently asked questions</h2>
          </Reveal>
          {faqs.map((f) => (
            <Reveal key={f.q}>
              <details className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </section>

        <section id="contact" className="section contact">
          <Reveal>
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Start your San Clemente move</h2>
            <p>Tell Alex a little about your plans. No pressure, no obligation.</p>
            <ul className="contact-list">
              <li><a href={agent.phoneHref}>{agent.phone}</a></li>
              <li><a href={`mailto:${agent.email}`}>{agent.email}</a></li>
              <li>{agent.address}</li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
