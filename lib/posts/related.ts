import { posts } from "./index";
import type { Post } from "./types";

// Related posts by shared topic tags. Ties go to the newest post, so a new post shows up on the
// older posts it relates to as soon as it is registered, with no manual editing.
export function relatedPosts(p: Post, n = 4): Post[] {
  return posts
    .map((x, i) => ({ x, i, score: x.slug === p.slug ? -1 : x.tags.filter((t) => p.tags.includes(t)).length }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .slice(0, n)
    .map((r) => r.x);
}
