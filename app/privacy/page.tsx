import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { agent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Alex Yu Team",
  description: "How the Alex Yu Team collects, uses, and protects information submitted through this San Clemente real estate website.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated="October 21, 2026">
      <p>
        This Privacy Policy explains how the {agent.team} at {agent.brokerage} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) collects,
        uses, and shares information when you visit this website. By using the site, you agree to the practices described here.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li><strong>Information you give us:</strong> your name, email address, phone number, property address, preferences (such as whether you are buying or selling and your timeline), and any message you submit through our forms.</li>
        <li><strong>Information collected automatically:</strong> device and browser type, pages viewed, referring page, approximate location, and similar usage data, collected through cookies and analytics tools.</li>
      </ul>
      <h2>How we use information</h2>
      <ul>
        <li>To respond to your inquiries and provide real estate services, including home valuations and market information.</li>
        <li>To contact you by phone, text, or email about your inquiry, as you have consented. Consent is not a condition of any purchase.</li>
        <li>To improve this website and understand how it is used.</li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>
      <h2>How we share information</h2>
      <p>
        We do not sell your personal information. We may share it with our brokerage, with service providers that help us operate
        our business (such as customer relationship management, email, text messaging, and analytics providers), with other
        parties involved in a transaction you ask us to help with, and when required by law.
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        We may use cookies and similar technologies, including analytics tools, to understand site usage. You can control cookies
        through your browser settings. Third-party sites we link to have their own privacy practices.
      </p>
      <h2>Your California privacy rights</h2>
      <p>
        If you are a California resident, you may have the right to know what personal information we collect and how we use it,
        to request access to or deletion of your personal information, to correct inaccurate information, and not to be
        discriminated against for exercising these rights. To make a request, contact us at the email below. We may need to verify
        your identity before responding.
      </p>
      <h2>Communications</h2>
      <p>
        You can opt out of marketing emails using the unsubscribe link, and of text messages by replying STOP. Standard message and
        data rates may apply.
      </p>
      <h2>Data security and retention</h2>
      <p>
        We use reasonable measures to protect information, but no method of transmission or storage is completely secure. We keep
        information as long as needed for the purposes described here or as required by law.
      </p>
      <h2>Children</h2>
      <p>This website is not directed to children under 13, and we do not knowingly collect their information.</p>
      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>
      <h2>Contact us</h2>
      <p>
        {agent.team}, {agent.brokerage}<br />
        {agent.address}<br />
        <a href={`mailto:${agent.email}`}>{agent.email}</a> &middot; <a href={agent.phoneHref}>{agent.phone}</a><br />
        California DRE #{agent.dre}
      </p>
    </LegalPage>
  );
}
