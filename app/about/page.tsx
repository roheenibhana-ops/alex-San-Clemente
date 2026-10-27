import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { hoods } from "@/lib/neighborhoods";
import { agent, stats, recognition, endorsement, credentials, seenOn, background, programs, howIWork } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Alex Yu | San Clemente Real Estate Agent",
  description:
    "Meet Alex Yu of the Alex Yu Team: $550M+ in sales, 600+ transactions, 510+ five-star reviews, and an educate-first approach to San Clemente real estate.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const serhantPhoto = recognition.find((r) => r.title.startsWith("Serhant"))?.img;
  return (
    <>
      <Header />
      <main>
        <section className="page-hero about-page-hero">
          <Reveal>
            <Breadcrumbs trail={[{ label: "About Alex Yu", href: "/about" }]} />
            <div className="about about-hero">
              <figure className="portrait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/alex-yu.jpg" alt="Alex Yu, San Clemente real estate agent" width={640} height={800} />
              </figure>
              <div>
                <p className="eyebrow">About Alex Yu</p>
                <h1>Educate first. Advise second.</h1>
                <p className="lede">
                  I&apos;ve been an Orange County resident my entire life, and I work with buyers and sellers across the county,
                  including San Clemente. I do it the same way every time: give you an honest, block-by-block read on the
                  neighborhood so you can make the best-informed decision for your family.
                </p>
                <p>Real-world experience in today&apos;s market, backed by over $550M in local sales.</p>
                <p><Link className="btn" href="/#contact">Talk to Alex</Link></p>
              </div>
            </div>
          </Reveal>
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
        <ul className="cred-row" aria-label="Recognition">
          {credentials.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <section className="section narrow prose">
          <Reveal>
            <h2>Born and raised in Orange County. Still here.</h2>
            <p>
              Orange County isn&apos;t a market I studied. It&apos;s where I grew up and where I live. That matters, because on this
              part of the coast the right answer changes block by block. Two homes a mile apart can differ in traffic, noise,
              resale patterns and day-to-day feel.
            </p>
            <p>
              That&apos;s why I lead with education. Before we talk about offers, pricing or timing, I want you to understand the
              neighborhood you&apos;re considering, what is driving values there and what trade-offs come with each option. Then
              I&apos;ll tell you what I&apos;d do in your position.
            </p>
            <p>
              Whether you&apos;re weighing a move to San Clemente or comparing it with other coastal cities, the right neighborhood
              changes everything. I&apos;m happy to help you map out the numbers.
            </p>
          </Reveal>
        </section>


        <section className="section recog tint" aria-labelledby="recog-h">
          <Reveal>
            <p className="eyebrow">Recognized and endorsed</p>
            <h2 id="recog-h">Endorsed by those you trust</h2>
          </Reveal>
          <Reveal>
            <div className="video-wrap video-center">
              <iframe
                src={`https://player.vimeo.com/video/${endorsement.vimeoId}?h=${endorsement.vimeoHash}&dnt=1&title=0&byline=0&portrait=0`}
                title={endorsement.videoTitle}
                loading="lazy"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="seen-on-img" src="/images/as-seen-on.png" alt={`As seen streaming on ${seenOn.join(", ")}`} width={1520} height={181} loading="lazy" />
        </section>

        <section className="section" aria-labelledby="bg-h">
          <Reveal>
            <p className="eyebrow">Background</p>
            <h2 id="bg-h">Who is behind the Alex Yu Team?</h2>
          </Reveal>
          <div className="grid3">
            {background.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="card"><h3>{c.title}</h3><p>{c.body}</p></div>
              </Reveal>
            ))}
          </div>
        </section>


        <section className="section tint" aria-labelledby="corcoran-h">
          <div className="recog-split">
            {endorsement.photos.length > 0 && (
              <div className="recog-photos">
                {endorsement.photos.map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt="Alex Yu with Barbara Corcoran" loading="lazy" />
                ))}
              </div>
            )}
            <div>
              <h2 id="corcoran-h">{endorsement.heading}</h2>
              <p>{endorsement.body}</p>
              <p>{endorsement.quote}</p>
              <p><a className="link-arrow" href={endorsement.profileHref} target="_blank" rel="noopener noreferrer">See Alex on Barbara Corcoran&apos;s Top Agents directory →</a></p>
              <a className="btn" href="#contact">Talk to Alex</a>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="prog-h">
          <Reveal>
            <p className="eyebrow">Programs built around you</p>
            <h2 id="prog-h">Signature programs for buyers and sellers</h2>
            <p className="sub">The Alex Yu Team pioneered two signature programs to take the risk out of buying and selling.</p>
          </Reveal>
          <div className="grid2">
            {programs.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="card"><h3>{c.title}</h3><p>{c.body}</p></div>
              </Reveal>
            ))}
          </div>
          <p className="fine">Program terms and conditions apply. Ask Alex for details.</p>
        </section>


        <section className="section tint" aria-labelledby="how-h">
          <Reveal>
            <p className="eyebrow">How I work</p>
            <h2 id="how-h">How does Alex work with clients?</h2>
          </Reveal>
          <div className="grid3">
            {howIWork.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="card"><h3>{c.title}</h3><p>{c.body}</p></div>
              </Reveal>
            ))}
          </div>
        </section>


        <section className="section" aria-labelledby="awards-h">
          <div className="awards">
            {serhantPhoto && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="awards-photo" src={serhantPhoto} alt="Alex Yu with Ryan Serhant" loading="lazy" />
            )}
            <div className="awards-copy">
              <h2 id="awards-h">Recognized by the industry</h2>
              <p>
                Over 600 transactions and more than $550M in sales have earned the Alex Yu Team recognition from some of the biggest
                names in real estate.
              </p>
              <ul>
                {recognition.map((r) => (
                  <li key={r.title}>
                    <div>
                      <strong>{r.title}</strong>
                      <span>{r.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        <section className="section narrow prose" aria-labelledby="serhant-h">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="about-serhant" src="/serhant-logo.png" alt="SERHANT." loading="lazy" />
            <p className="eyebrow">A new chapter</p>
            <h2 id="serhant-h">The Alex Yu Team and SERHANT.</h2>
            <p>
              The Alex Yu Team now works with SERHANT., one of the most recognized names in real estate. Alex has long been part
              of the SERHANT. world as a PRO Coach with SERHANT. Sell It, so this move builds on a relationship that was already
              there.
            </p>
            <p>
              Your experience stays personal and local. Alex and the team still price homes with real numbers, explain what each
              San Clemente neighborhood is actually like, and stay with you from first conversation to closing, now with the
              SERHANT. brand behind the work.
            </p>
            <Link className="btn" href="/#contact">Talk to Alex</Link>
          </Reveal>
        </section>

        <section className="section narrow prose tint" aria-labelledby="give-h">
          <Reveal>
            <h2 id="give-h">Giving back</h2>
            <p>
              Real estate success is only part of the picture. Alex and his team donate a portion of their profit to local
              charities that combat animal abuse and support victims of domestic violence.
            </p>
          </Reveal>
        </section>

        <section className="section" aria-labelledby="where-h">
          <Reveal>
            <p className="eyebrow">Where I work</p>
            <h2 id="where-h">San Clemente neighborhoods Alex serves</h2>
            <p className="sub">Local knowledge across the coast, from the Pier Bowl to Talega.</p>
          </Reveal>
          <div className="grid3">
            {hoods.map((h, i) => (
              <Reveal key={h.slug} delay={i * 60}>
                <Link href={`/neighborhoods/${h.slug}`} className="card card-link">
                  <h3>{h.name}</h3>
                  <p>{h.short}</p>
                  <span className="link-arrow">Explore {h.name} →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="value">
          <Reveal>
            <h2>Let&apos;s map out your next move.</h2>
            <p>Thinking about buying, selling or just getting a clear read on a neighborhood? Reach out and I&apos;ll help you map out the numbers.</p>
            <Link className="btn" href="/#contact">Talk to Alex</Link>
            <p className="fine-light">{agent.name} | {agent.team} | {agent.brokerage}</p>
          </Reveal>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Alex Yu",
          url: `${SITE_URL}/about`,
          mainEntity: {
            "@type": "Person",
            name: agent.name,
            jobTitle: "Real Estate Advisor",
            alumniOf: { "@type": "CollegeOrUniversity", name: "Chapman University" },
            worksFor: { "@type": "Organization", name: agent.brokerage },
            sameAs: [endorsement.profileHref, agent.mainSite],
          },
        }}
      />
    </>
  );
}
