import Link from "next/link";
import { agent } from "@/lib/content";

export default function AuthorCard() {
  return (
    <section className="author-card" aria-label="About the author">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/alex-yu.jpg" alt="Alex Yu" width={640} height={800} loading="lazy" />
      <div>
        <h3>{agent.name}</h3>
        <p className="author-role">Real estate advisor</p>
        <p>
          My approach is simple: <strong>educate first, advise second</strong>. I&apos;ll give you an honest, block-by-block read on
          San Clemente so you can make the best-informed decision, whether you&apos;re buying, selling, or just exploring.
        </p>
        <p><Link className="link-arrow" href="/#contact">Connect with Alex →</Link></p>
      </div>
    </section>
  );
}
