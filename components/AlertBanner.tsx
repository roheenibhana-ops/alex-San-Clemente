import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="alert-banner">
      <p>
        <strong>Want instant updates?</strong> <Link href="/#contact">Ask Alex to set up a free listing alert</Link> so you hear
        about new <strong>San Clemente</strong> homes as they hit the market.
      </p>
    </div>
  );
}
