import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { featuredPlaces, getFeaturedPlace, getFoodCategory } from "@/lib/food";
import { getHood } from "@/lib/neighborhoods";
import { mapsUrl } from "@/lib/places";

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredPlaces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getFeaturedPlace(slug);
  if (!p) return {};
  const title = `${p.name} in San Clemente: A Local's Take`;
  return { title, description: p.tagline, alternates: { canonical: `/lifestyle/places/${p.slug}` } };
}

export default async function PlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getFeaturedPlace(slug);
  if (!p) notFound();
  const cat = getFoodCategory(p.category);
  const hood = p.hoodSlug ? getHood(p.hoodSlug) : undefined;

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
                { label: p.name, href: `/lifestyle/places/${p.slug}` },
              ]}
            />
            <p className="eyebrow">{cat?.eyebrow ?? "Local favorite"}</p>
            <h1>{p.name}</h1>
            <p className="lede">{p.tagline}</p>
          </Reveal>
        </section>
        <section className="section prose">
          <Reveal>
            <h2>Why does Alex like {p.name}?</h2>
            {p.whyAlexLikesIt.map((t) => <p key={t}>{t}</p>)}
            {p.whatToOrder.length > 0 && (
              <>
                <h2>What should you order at {p.name}?</h2>
                <ul>{p.whatToOrder.map((t) => <li key={t}>{t}</li>)}</ul>
              </>
            )}
            {p.parking && (
              <>
                <h2>Where do you park and when should you go?</h2>
                <p>{p.parking}</p>
              </>
            )}
            <p>
              <a className="link-arrow" href={mapsUrl(p.name)} target="_blank" rel="noopener noreferrer">View on map →</a>
              {p.website && <> · <a className="link-arrow" href={p.website} target="_blank" rel="noopener noreferrer">Visit their website →</a></>}
            </p>
            {hood && (
              <p>Closest neighborhood guide: <Link href={`/neighborhoods/${hood.slug}`}>{hood.name}</Link>.</p>
            )}
            {cat && <p>More like this: <Link href={`/lifestyle/food-drink/${cat.slug}`}>{cat.title}</Link>.</p>}
            <p className="fine">Last confirmed {p.updated}. Hours and menus change, so check with the restaurant.</p>
          </Reveal>
        </section>
        <section className="value">
          <Reveal>
            <h2>Want to live near it?</h2>
            <Link className="btn btn-light" href="/#contact">Talk to Alex</Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
