import { readdirSync, readFileSync } from "fs";
import { resolve } from "path";
const dir = resolve(process.cwd(), "lib/posts") + "/";
for (const f of readdirSync(dir).filter((x) => x.endsWith(".ts") && !["types.ts","index.ts"].includes(x))) {
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
