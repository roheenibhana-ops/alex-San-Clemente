import Link from "next/link";
import Inline from "./Inline";
import { agent } from "@/lib/content";

export default function CtaCard({ text }: { text: string }) {
  return (
    <div className="cta-card">
      <p><Inline text={text} /></p>
      <div className="cta-card-buttons">
        <a className="btn" href={agent.listingsUrl} target="_blank" rel="noopener noreferrer">Browse San Clemente Listings</a>
        <Link className="btn btn-blue" href="/neighborhoods">Compare Neighborhoods</Link>
        <Link className="btn btn-outline" href="/#contact">Talk to Alex Yu</Link>
      </div>
    </div>
  );
}
