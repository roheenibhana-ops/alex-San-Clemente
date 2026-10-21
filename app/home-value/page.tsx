import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { cityMarket, marketSource } from "@/lib/market";
import DataTable from "@/components/DataTable";
import { homeValueExtra } from "@/lib/extras";
import GuideSection from "@/components/GuideSection";
import Inline from "@/components/Inline";

export const metadata: Metadata = {
  title: "Free San Clemente Home Value | What's My House Worth?",
  description:
    "Find out what your San Clemente home is worth. Alex Yu builds a free valuation from your address and recent nearby sales, not just an algorithm.",
  alternates: { canonical: "/home-value" },
};

const steps = [
  ["Tell Alex your address", "Share the property address and a few details about the home."],
  ["Alex reviews recent sales", "He compares your home with recent nearby sales, plus condition, lot, and view."],
  ["You get a clear number and plan", "A straight read on value, timing, and what would move the price."],
];

const faqs = [
  { q: "Is the valuation really free?", a: "Yes. There's no cost and no obligation." },
  { q: "How is this different from an online estimate?", a: "Online tools use algorithms. Alex adds context an algorithm can't see: the view, condition, upgrades, and the specific street." },
  { q: "How long does it take?", a: "Alex will follow up after you submit your address. Ask about timing if you're on a deadline." },
  { q: "Do I have to be ready to sell?", a: "No. Plenty of owners ask just to know where they stand." },
];

export default function HomeValue() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Reveal>
            <Breadcrumbs trail={[{ label: "Home value", href: "/home-value" }]} />
            <p className="eyebrow">Free home valuation</p>
            <h1>What&apos;s Your San Clemente Home Worth?</h1>
            <p className="lede">
              Get a valuation built from your actual address and recent nearby sales, not just an algorithm. With the median
              near $2M, getting the number right matters.
            </p>
          </Reveal>
        </section>

        <section className="section contact">
          <Reveal>
            <h2>How do you request a free home valuation?</h2>
            <p className="sub">Takes about a minute. No obligation.</p>
            <ol className="steps">
              {steps.map(([t, d], i) => (
                <li key={t}><span>{i + 1}</span><div><strong>{t}</strong><p>{d}</p></div></li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm showAddress defaultIntent="Selling" />
          </Reveal>
        </section>

        <section className="section tint prose">
          <Reveal>
            <h2>Where does the San Clemente market stand?</h2>
            <p>A snapshot of the single-family market, so you know the backdrop for your valuation.</p>
            <DataTable
              caption="San Clemente single-family market, September 2026"
              head={["Metric", "Now", "A year ago", "Note"]}
              rows={cityMarket.map((r) => [r.metric, r.now, r.then, r.note])}
              source={marketSource}
            />
          </Reveal>
        </section>

        {homeValueExtra.sections.map((sec, i) => (
          <section key={sec.h} className={`section prose ${i % 2 ? "tint" : ""}`}>
            <Reveal>
              <GuideSection s={sec} />
            </Reveal>
          </section>
        ))}

        <section className="section narrow">
          <Reveal>
            <h2>Home valuation questions, answered</h2>
            {[...faqs, ...homeValueExtra.faqs].map((f) => (
              <details className="faq" key={f.q}>
                <summary>{f.q}</summary>
                <p><Inline text={f.a} /></p>
              </details>
            ))}
            <p><Link className="link-arrow" href="/neighborhoods">Browse neighborhood guides →</Link></p>
          </Reveal>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [...faqs, ...homeValueExtra.faqs].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </>
  );
}
