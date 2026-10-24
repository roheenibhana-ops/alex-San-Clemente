// Usage: node scripts/check-links.mjs
// Finds every external URL in lib/, app/ and components/ and reports the HTTP status of each.
// Some sites block bots (403/429): treat those as "unverified", not broken. 404/410 and connection errors are real problems.
import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

const roots = ["lib", "app", "components"];
const files = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(f)) files.push(p);
  }
};
roots.forEach(walk);

const urls = new Map();
for (const f of files) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/https?:\/\/[^\s"'`)<>\]\\]+/g)) {
    const u = m[0].replace(/[.,;]+$/, "");
    if (/localhost|workers\.dev|schema\.org|w3\.org|lifeinsanclemente\.com|\$\{|leadconnectorhq|followupboss/.test(u)) continue;
    if (!urls.has(u)) urls.set(u, new Set());
    urls.get(u).add(f);
  }
}

const ok = [], blocked = [], broken = [];
const list = [...urls.keys()];
const run = async (u) => {
  try {
    const r = await fetch(u, { redirect: "follow", headers: { "user-agent": "Mozilla/5.0" }, signal: AbortSignal.timeout(20000) });
    if (r.status < 400) ok.push(u);
    else if ([401, 403, 405, 429].includes(r.status)) blocked.push([u, r.status]);
    else broken.push([u, r.status]);
  } catch (e) {
    broken.push([u, String(e.cause?.code ?? e.name)]);
  }
};
const queue = [...list];
await Promise.all(Array.from({ length: 8 }, async () => { while (queue.length) await run(queue.shift()); }));

console.log(`checked ${list.length} urls: ${ok.length} ok, ${blocked.length} blocked/unverified, ${broken.length} broken`);
for (const [u, s] of broken) console.log("BROKEN", s, u, "\n   in:", [...urls.get(u)].join(", "));
for (const [u, s] of blocked) console.log("BLOCKED", s, u);
