import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex, { totalPages } from "@/components/BlogIndex";

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const { n } = await params;
  return {
    title: `San Clemente Real Estate Blog, Page ${n}`,
    description: "More San Clemente market updates, neighborhood comparisons, and buying guides from Alex Yu.",
    alternates: { canonical: `/blog/page/${n}` },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const page = Number(n);
  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound();
  return <BlogIndex page={page} />;
}
