import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { agent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use | Alex Yu Team",
  description: "Terms of use for the Alex Yu Team San Clemente real estate website, including disclaimers about market information.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" path="/terms" updated="October 21, 2026">
      <p>
        By using this website you agree to these terms. If you do not agree, please do not use the site.
      </p>
      <h2>Informational purposes only</h2>
      <p>
        Content on this site, including market statistics, neighborhood descriptions, local guides, and blog posts, is provided for
        general information. It is not legal, tax, financial, or investment advice, and it is not an offer or guarantee of any
        price or outcome. Real estate values and conditions change, so verify details before making decisions.
      </p>
      <h2>Accuracy of information</h2>
      <p>
        We try to keep information accurate and current, but we do not guarantee that it is complete or error-free. Market figures
        come from third-party sources and may differ from other reports. Business hours, menus, fees, rules, and events change, so
        confirm details directly before you go. Property information should be independently verified.
      </p>
      <h2>No agency relationship</h2>
      <p>
        Using this website or submitting a form does not create an agency, fiduciary, or other professional relationship. Any such
        relationship exists only under a written agreement.
      </p>
      <h2>Third-party links and content</h2>
      <p>
        This site links to third-party websites for convenience. We do not control or endorse them and are not responsible for
        their content, availability, or practices. Business names mentioned are for informational purposes and do not imply
        endorsement or affiliation.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The site&apos;s text, design, and logos belong to the {agent.team} or its licensors. You may not copy or reuse them without
        permission, except for personal, non-commercial use.
      </p>
      <h2>Fair housing</h2>
      <p>
        We are committed to equal housing opportunity for all. We do not discriminate on the basis of race, color, religion, sex,
        gender identity, sexual orientation, familial status, national origin, disability, or any other protected characteristic.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for damages arising from your use of this site or reliance on its
        content. The site is provided &ldquo;as is.&rdquo;
      </p>
      <h2>Changes and governing law</h2>
      <p>We may update these terms at any time. These terms are governed by the laws of the State of California.</p>
      <h2>Contact</h2>
      <p>
        {agent.team}, {agent.brokerage}, {agent.address}. <a href={`mailto:${agent.email}`}>{agent.email}</a>. California DRE #{agent.dre}.
      </p>
    </LegalPage>
  );
}
