import { readdirSync, readFileSync } from "fs";
import { resolve } from "path";
const dir = resolve(process.cwd(), "lib/posts") + "/";
for (const f of readdirSync(dir).filter((x) => x.endsWith(".ts") && !["types.ts","index.ts","related.ts"].includes(x))) {
  const src = readFileSync(dir + f, "utf8");
  const links = [...src.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]);
  const internal = links.filter((l) => l.startsWith("/"));
  const external = links.filter((l) => l.startsWith("http"));
  const { post } = await import(dir + f);
  let n = 0;
  for (const b of post.blocks) {
    if (b.t === "p" || b.t === "h2" || b.t === "h3" || b.t === "callout") n += b.text.split(/\s+/).length;
    else if (b.t === "ul" || b.t === "ol") n += b.items.join(" ").split(/\s+/).length;
    else if (b.t === "story") n += b.paragraphs.join(" ").split(/\s+/).length;
  }
  n += post.takeaways.join(" ").split(/\s+/).length + post.faqs.map((q: any) => q.q + " " + q.a).join(" ").split(/\s+/).length;
  console.log(f.padEnd(26), "prose:", n, "| internal:", internal.length, "(unique", new Set(internal).size + ")", "| external:", external.length, "(unique", new Set(external).size + ")");
}

// Link graph: every post needs at least 3 related posts (via tags) and at least 3 body links
// to other posts. Warn so a new post is cross-linked both ways before it is published.
{
  const { posts } = await import(dir + "index.ts");
  const { relatedPosts } = await import(dir + "related.ts");
  const slugs: string[] = posts.map((p: any) => p.slug);
  const inbound: Record<string, number> = Object.fromEntries(slugs.map((s) => [s, 0]));
  const outbound: Record<string, number> = Object.fromEntries(slugs.map((s) => [s, 0]));
  for (const p of posts) {
    const txt = JSON.stringify(p.blocks) + JSON.stringify(p.faqs);
    for (const s of slugs) if (s !== p.slug && txt.includes("/blog/" + s)) { outbound[p.slug]++; inbound[s]++; }
  }
  console.log("\nLink graph (body links to other posts):");
  for (const p of posts) {
    const flags = [];
    if (!p.tags?.length) flags.push("NO TAGS");
    if (relatedPosts(p).length < 3) flags.push("FEWER THAN 3 RELATED");
    if (outbound[p.slug] < 3) flags.push("LINKS OUT TO FEWER THAN 3 POSTS");
    if (inbound[p.slug] < 3) flags.push("LINKED FROM FEWER THAN 3 POSTS");
    console.log(p.slug.slice(0, 52).padEnd(52), "out", outbound[p.slug], "in", inbound[p.slug], flags.length ? "<-- " + flags.join(", ") : "ok");
  }
}
