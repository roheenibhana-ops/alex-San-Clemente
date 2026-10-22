import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "San Clemente Blog | Local Events, Guides & Real Estate",
  description:
    "San Clemente local events, neighborhood guides, market updates and buying advice from Alex Yu. Real numbers, checked sources, plain English.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return <BlogIndex page={1} />;
}
