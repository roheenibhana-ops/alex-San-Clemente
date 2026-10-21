import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero notfound">
          <p className="eyebrow">Error 404</p>
          <h1>That page drifted out to sea.</h1>
          <p className="lede">The page you&apos;re looking for moved or never existed. Here are some good places to start instead.</p>
          <div className="cta-row">
            <Link className="btn" href="/">Back to home</Link>
            <Link className="btn btn-ghost" href="/neighborhoods">Explore neighborhoods</Link>
            <Link className="btn btn-ghost" href="/blog">Read the blog</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
