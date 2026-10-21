import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "San Clemente Real Estate Blog | Market Updates & Guides",
  description:
    "San Clemente market updates, neighborhood comparisons, and buying guides from Alex Yu. Real numbers, plain English, no fluff.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return <BlogIndex page={1} />;
}
