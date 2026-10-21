import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { hoods } from "@/lib/neighborhoods";
import { posts } from "@/lib/posts";
import { totalPages } from "@/components/BlogIndex";
import { guides } from "@/lib/places";
import { foodCategories, featuredPlaces } from "@/lib/food";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/neighborhoods`, lastModified: now, priority: 0.9 },
    ...hoods.map((h) => ({ url: `${SITE_URL}/neighborhoods/${h.slug}`, lastModified: now, priority: 0.8 })),
    { url: `${SITE_URL}/lifestyle`, lastModified: now, priority: 0.7 },
    ...guides.map((g) => ({ url: `${SITE_URL}/lifestyle/${g.slug}`, lastModified: now, priority: 0.7 })),
    ...foodCategories.map((c) => ({ url: `${SITE_URL}/lifestyle/food-drink/${c.slug}`, lastModified: now, priority: 0.6 })),
    ...featuredPlaces.map((p) => ({ url: `${SITE_URL}/lifestyle/places/${p.slug}`, lastModified: new Date(p.updated), priority: 0.5 })),
    { url: `${SITE_URL}/privacy`, lastModified: now, priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, priority: 0.2 },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/home-value`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, priority: 0.7 },
    ...Array.from({ length: totalPages - 1 }, (_, i) => ({ url: `${SITE_URL}/blog/page/${i + 2}`, lastModified: now, priority: 0.4 })),
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
