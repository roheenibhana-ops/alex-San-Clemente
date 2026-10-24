import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const hidden = SITE_URL.includes("workers.dev");
  return {
    rules: hidden ? { userAgent: "*", disallow: "/" } : { userAgent: "*", allow: "/", disallow: ["/api/", "/guides/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
