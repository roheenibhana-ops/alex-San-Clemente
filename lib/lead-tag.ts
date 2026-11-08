import { posts } from "@/lib/posts";

// Turns the page a form was submitted from into a CRM tag, e.g. "Post: Selling a House in San Clemente..."
// Blog posts get the post title; every other page gets its path. Tags are capped so the CRM accepts them.
export function pageTag(page?: string): string | null {
  if (!page) return null;
  const path = page.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  if (!path.startsWith("/") || path.length > 200) return null;
  const m = path.match(/^\/blog\/([a-z0-9-]+)$/);
  if (m) {
    const post = posts.find((p) => p.slug === m[1]);
    const label = (post?.metaTitle ?? post?.title ?? m[1]).replace(/\s+/g, " ").trim();
    return ("Post: " + label).slice(0, 80);
  }
  return ("Page: " + path).slice(0, 80);
}
