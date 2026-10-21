import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

export default function LegalPage({ title, path, updated, children }: { title: string; path: string; updated: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Breadcrumbs trail={[{ label: title, href: path }]} />
          <h1>{title}</h1>
          <p className="meta">Last updated {updated}</p>
        </section>
        <article className="section prose legal">{children}</article>
      </main>
      <Footer />
    </>
  );
}
