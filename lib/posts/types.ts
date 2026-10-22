export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "callout"; title: string; text: string }
  | { t: "story"; title: string; paragraphs: string[] }
  | { t: "cta"; text: string; href: string; label: string }
  | { t: "ctaCard"; text: string }
  | { t: "img"; src: string; alt: string; caption?: string }
  | { t: "table"; caption: string; head: string[]; rows: string[][]; source?: { label: string; href: string } };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string; // ISO
  updated?: string; // ISO, set when a post is refreshed
  category: string;
  excerpt: string;
  takeaways: string[];
  blocks: Block[];
  faqs: { q: string; a: string }[];
  links: { label: string; href: string }[];
};
