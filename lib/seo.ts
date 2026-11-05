import { imageFor } from "./images";
import { SITE_URL } from "./site";

// Share/preview image for a page: its own hero from lib/images.ts when it has one, else the site default.
// Search results, link previews and Search Console thumbnails use this, so each page shows its own photo.
export function shareImage(key: string) {
  const img = imageFor(key);
  if (!img) return { url: `${SITE_URL}/og.jpg`, alt: "San Clemente beach homes" };
  return { url: img.src.startsWith("http") ? img.src : `${SITE_URL}${img.src}`, alt: img.alt };
}

export function shareMeta(key: string) {
  const { url, alt } = shareImage(key);
  return {
    openGraph: { images: [{ url, alt }] },
    twitter: { card: "summary_large_image" as const, images: [url] },
  };
}
