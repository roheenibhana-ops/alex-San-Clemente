import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { hoods } from "@/lib/neighborhoods";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/neighborhoods`, lastModified: now, priority: 0.9 },
    ...hoods.map((h) => ({ url: `${SITE_URL}/neighborhoods/${h.slug}`, lastModified: now, priority: 0.8 })),
    { url: `${SITE_URL}/lifestyle`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, priority: 0.7 },
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
