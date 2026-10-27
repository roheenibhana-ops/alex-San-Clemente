// Builds the "San Clemente Neighborhood Buyer's Guide" PDF from the same data the website uses,
// so a monthly refresh of the data refreshes the guide too.
// Usage: PWPATH=$(npm root -g)/playwright npx tsx scripts/build-guide.mts
import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";
import { createRequire } from "module";
import { hoods } from "../lib/neighborhoods";
import { deep } from "../lib/neighborhoodDeep";
import { hoodParks } from "../lib/hoodParks";
import { agent } from "../lib/content";
import { cityMarket, marketAsOf } from "../lib/market";

const root = resolve(process.cwd());
const { chromium } = createRequire(import.meta.url)(process.env.PWPATH ?? "playwright");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const md = (s: string) => esc(s).replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
const img = (p: string) => `file://${root}/public${p}`;
const photos: Record<string, string> = {
  "downtown-pier-bowl": "/images/neighborhoods/downtown-pier-bowl.jpg",
  "sea-summit": "/images/neighborhoods/sea-summit.jpg",
  "forster-ranch": "/images/neighborhoods/forster-ranch.jpg",
  shorecliffs: "/images/neighborhoods/shorecliffs.jpg",
  talega: "/images/neighborhoods/talega.jpg",
  "rancho-san-clemente": "/images/neighborhoods/rancho-san-clemente.jpg",
};
const site = "lifeinsanclemente.com";
const updated = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
const table = (rows: string[][], head?: string[]) =>
  `<table>${head ? `<thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>` : ""}<tbody>${rows
    .map((r) => `<tr>${r.map((c, i) => (i === 0 && !head ? `<th>${md(c)}</th>` : `<td>${md(c)}</td>`)).join("")}</tr>`)
    .join("")}</tbody></table>`;

const logo = img("/alex-yu-team-logo.png");
const brokerLogo = img("/serhant-logo.png");
const footer = `<div class="foot"><img class="flogo" src="${logo}" />${esc(agent.name)} | ${esc(agent.team)} | <img class="blogo" src="${brokerLogo}" /> | CA DRE #${esc(agent.dre)} | ${site}</div>`;

const css = `
@page { size: Letter; margin: 0; }
* { box-sizing: border-box; }
body { margin: 0; font-family: 'Inter', Helvetica, Arial, sans-serif; color: #0b2433; font-size: 10.5pt; line-height: 1.5; }
h1, h2, h3 { font-family: 'DejaVu Serif', Georgia, serif; font-weight: 500; line-height: 1.15; letter-spacing: -0.01em; margin: 0; }
.page { width: 8.5in; height: 11in; padding: 0.6in 0.75in 0.9in; position: relative; page-break-after: always; overflow: hidden; background: #f7f3ec; }
.page:last-child { page-break-after: auto; }
.eyebrow { text-transform: uppercase; letter-spacing: .16em; font-size: 8pt; font-weight: 700; color: #0a6c8c; margin: 0 0 8px; }
.rule { width: 46px; height: 3px; background: #f06a4d; margin: 12px 0 16px; }
h2 { font-size: 22pt; } h3 { font-size: 13pt; margin: 16px 0 6px; color: #07475d; }
p { margin: 0 0 9px; color: #2a4152; }
table { width: 100%; border-collapse: collapse; margin: 6px 0 10px; font-size: 9pt; }
th, td { text-align: left; padding: 4px 8px; vertical-align: top; border-bottom: 1px solid rgba(11,36,51,.12); }
thead th { background: #07475d; color: #fff; font-size: 8.5pt; letter-spacing: .04em; }
tbody th { width: 30%; color: #07475d; font-weight: 600; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
ul { margin: 4px 0 10px; padding-left: 18px; } li { margin-bottom: 3px; color: #2a4152; }
.hero { height: 2.05in; background-size: cover; background-position: center; border-radius: 14px; margin-bottom: 16px; }
.cover { background: linear-gradient(180deg, #cfe8e4, #f7f3ec 60%); padding: 0; }
.cover .photo { height: 5.4in; background-size: cover; background-position: center; }
.cover .txt { padding: 0.55in 0.75in; }
.cover h1 { font-size: 34pt; color: #0b2433; }
.cover .sub { font-size: 13pt; color: #2a4152; margin-top: 12px; }
.badge { display: inline-block; background: #f06a4d; color: #fff; font-weight: 700; font-size: 8.5pt; padding: 4px 10px; border-radius: 99px; letter-spacing: .06em; }
.flogo { position: absolute; right: 0; bottom: 4px; height: 0.34in; }
.blogo { height: 0.11in; vertical-align: middle; }
.coverlogo { position: absolute; left: 0.75in; top: 0.55in; background: rgba(255,255,255,.92); border-radius: 12px; padding: 10px 16px; }
.coverlogo img { height: 0.5in; display: block; }
.foot { position: absolute; left: .75in; right: .75in; bottom: .35in; font-size: 7.5pt; color: #5b7080; border-top: 1px solid rgba(11,36,51,.15); padding-top: 6px; }
.box { background: #fff; border-radius: 12px; padding: 12px 16px; border: 1px solid rgba(11,36,51,.1); margin: 8px 0 12px; }
.small { font-size: 8pt; color: #5b7080; }
.cta { background: #07475d; color: #fff; border-radius: 14px; padding: 18px 22px; margin-top: 14px; }
.cta p, .cta h3 { color: #fff; margin: 0 0 6px; }
`;

const pages: string[] = [];
// Optional monthly data from Alex's MLS export: assets/guides/data/recent-sales.json
// { "asOf": "September 2026", "source": "CRMLS via Alex Yu Team", "areas": { "<slug>": { "closed": 12, "median": "$1,950,000", "medianDom": 35, "sales": [["Sep 12", "123 Example St", "$2,010,000", "4/3", "2,450"]] } } }
let sales: any = null;
try { sales = JSON.parse(readFileSync(resolve(root, "assets/guides/data/recent-sales.json"), "utf8")); } catch {}

pages.push(`<div class="page cover"><div class="coverlogo"><img src="${logo}" /></div><div class="photo" style="background-image:url('${img(photos["downtown-pier-bowl"])}')"></div>
<div class="txt">${process.env.DRAFT ? `<span class="badge">DRAFT FOR ALEX'S REVIEW</span>` : ""}<p class="eyebrow" style="margin-top:${process.env.DRAFT ? 14 : 0}px">Updated ${updated}</p>
<h1>The San Clemente<br/>Neighborhood Buyer's Guide</h1><div class="rule"></div>
<p class="sub">Six areas, side by side: what they are like, what to check and what to ask before you make an offer.</p>
<p class="small">Prepared by ${esc(agent.name)} of the ${esc(agent.team)} · ${esc(agent.brokerage)} · ${site}</p></div></div>`);

pages.push(`<div class="page"><p class="eyebrow">Start here</p><h2>How to use this guide</h2><div class="rule"></div>
<p>San Clemente is not one market. A short drive can take you from a walkable coastal village to a gated hilltop community to a large master-planned neighborhood, and the right answer changes by street. This guide puts the six main areas side by side, then gives you a short list of costs to price in and questions to ask on any home.</p>
<p>Everything here comes from public sources, listed on each neighborhood page at <strong>${site}/neighborhoods</strong>. Figures change, so treat them as a starting point and confirm them for the exact home.</p>
<h3>The six areas at a glance</h3>
${table(
  hoods.map((h) => [h.name, h.tag, (h.glance.find((g) => /style|Architecture|Typical/i.test(g[0])) ?? h.glance[1] ?? ["", ""])[1], (h.glance.find((g) => /coast|Walk|beach/i.test(g[0])) ?? h.glance.find((g) => /Setting/i.test(g[0])) ?? ["", "See page"])[1]]),
  ["Area", "Character", "Typical homes", "Coast and walkability"]
)}
<div class="box"><strong>Our focus.</strong> Single-family homes make up about 70% of San Clemente's inventory, and the median price is around $2 million. This guide is built around them.</div>${footer}</div>`);

for (const h of hoods) {
  const d = deep[h.slug];
  const parks = hoodParks[h.slug];
  pages.push(`<div class="page"><div class="hero" style="background-image:url('${img(photos[h.slug])}')"></div>
<p class="eyebrow">${esc(h.tag)}</p><h2>${esc(h.name)}</h2><div class="rule"></div>
<p style="font-size:10pt">${md(h.intro[0])}</p>
<div class="two"><div>${table(h.glance.slice(0, 6))}</div>
<div><h3 style="margin-top:6px">What people like</h3><ul>${h.love.slice(0, 4).map((x) => `<li>${md(x)}</li>`).join("")}</ul>
<h3>Worth knowing</h3><ul>${h.tradeoffs.slice(0, 4).map((x) => `<li>${md(x)}</li>`).join("")}</ul></div></div>
${parks ? `<h3>City parks nearby</h3><p class="small">${md(parks.intro)}</p><p>${parks.rows.map((r) => `<strong>${esc(r[0])}</strong> (${esc(r[1])})`).join(" · ")}</p>` : ""}
${d ? `<div class="box"><strong>Before you buy here, check:</strong> ${d.checks.slice(0, 3).map((c) => md(c[0])).join("; ")}.</div>` : ""}
<p class="small">Full guide: ${site}/neighborhoods/${h.slug}</p>${footer}</div>`);
}

if (sales) {
  const rows = hoods.filter((h) => sales.areas?.[h.slug]).map((h) => { const a = sales.areas[h.slug]; return [h.name, String(a.closed), a.median, String(a.medianDom) + " days"]; });
  const detail = hoods.filter((h) => sales.areas?.[h.slug]?.sales?.length).map((h) => `<h3>${esc(h.name)}: recent closed sales</h3>${table(sales.areas[h.slug].sales.slice(0, 6), ["Closed", "Address", "Sold price", "Bed/bath", "Sq ft"])}`).join("");
  pages.push(`<div class="page"><p class="eyebrow">Recent sales</p><h2>What homes actually sold for</h2><div class="rule"></div><p>Closed single-family sales as of ${esc(sales.asOf)}. Source: ${esc(sales.source)}. Past sales do not predict future prices; ask Alex for the comparables closest to a specific home.</p>${table(rows, ["Area", "Closed sales", "Median sold price", "Median days on market"])}${detail}${footer}</div>`);
}
pages.push(`<div class="page"><p class="eyebrow">Know the real cost</p><h2>The costs beyond the price</h2><div class="rule"></div>
<p>Two homes with the same price can cost very different amounts each month. Ask for every layer in writing before you compare.</p>
${table(
  [
    ["Master HOA", "Shared amenities and common areas. Dues vary widely by community"],
    ["Neighborhood or sub-association", "An extra HOA in some tracts, sometimes with gates or shared landscaping"],
    ["Mello-Roos special tax", "A separate annual tax in some communities, billed with property taxes. Ask for the amount and the end date"],
    ["Property tax", "Based on the purchase price, plus any local charges on the bill"],
    ["Homeowners insurance", "Get quotes before you remove contingencies. Coastal and hillside homes can differ"],
    ["Maintenance", "Roof, systems, landscaping and slopes, especially on older or larger homes"],
  ],
  ["Layer", "What to know"]
)}
<h3>Figures we have seen (from public sources, undated, confirm for the exact home)</h3>
<ul><li><strong>Talega:</strong> one local guide lists a master assessment of about $267 a month, with sub-association charges bringing totals into the low-to-mid $300s, plus a separate Mello-Roos tax.</li>
<li><strong>Sea Summit:</strong> recent listings show HOA dues around $330 to $340 a month, plus Mello-Roos.</li>
<li><strong>Sea Pointe Estates:</strong> listings show roughly $425 to $480 a month for a guard-gated community.</li>
<li><strong>Shorecliffs:</strong> the private beach club's dues are not published, so ask.</li></ul>
<div class="box small">These come from listing copy and local guides, not association documents. Always request the current budget, reserve study and any assessments.</div>${footer}</div>`);

pages.push(`<div class="page"><p class="eyebrow">Before you offer</p><h2>Your pre-offer checklist</h2><div class="rule"></div>
<div class="two"><div><h3 style="margin-top:0">Documents to request</h3><ul>
<li>HOA budget and the latest reserve study</li><li>CC&Rs, bylaws and rules, including architectural review</li><li>Recent board minutes</li><li>Any pending or recent special assessments</li><li>Mello-Roos status, annual amount and end date</li><li>Permit history for additions, pools and major work</li><li>Preliminary title report</li></ul>
<h3>Inspect</h3><ul><li>Roof, electrical, plumbing and a sewer-line camera on older homes</li><li>Slopes, retaining walls and drainage on hillside lots</li><li>Salt-air wear on windows, doors and metal near the coast</li></ul></div>
<div><h3 style="margin-top:0">Questions to ask</h3><ul>
<li>What is the total monthly cost, with every association included?</li><li>What do the dues cover and what do they not?</li><li>What rules affect the remodel I am planning?</li><li>How long have comparable homes taken to sell, and at what discount?</li><li>What could be built nearby that would change the view?</li><li>How does the drive to work and the beach feel at the hours I would use it?</li></ul>
<h3>Try it yourself</h3><ul><li>Visit at different times of day and on a weekend</li><li>Park, walk and listen</li><li>Look at the street in the evening</li></ul></div></div>
<div class="box"><strong>Schools: check them yourself.</strong> Attendance boundaries change and we do not rate or rank schools. Use the district's My School Locator with the exact address (capousd.org, Capistrano Unified School District), look up official results on the California School Dashboard (caschooldashboard.org) and confirm enrollment details with the district. Alex can pull the address list for any area you are considering.</div>
<h3>San Clemente market snapshot (${esc(marketAsOf)}, single-family)</h3>
${table(cityMarket.slice(0, 5).map((m) => [m.metric, m.now, m.then, m.note]), ["Measure", "Now", "A year ago", "Note"])}${footer}</div>`);

pages.push(`<div class="page"><p class="eyebrow">Next steps</p><h2>Let's narrow it down</h2><div class="rule"></div>
<p>Pick two or three areas from this guide, and Alex will walk you through current homes in each, with the HOA documents, recent sales and costs side by side. No pressure, no obligation.</p>
<div class="cta"><h3>Talk to ${esc(agent.name)}</h3><p>${esc(agent.phone)} · ${esc(agent.email)}</p><p>${site}</p></div>
<h3>More local guides</h3><ul><li>Neighborhood pages with sources: ${site}/neighborhoods</li><li>The San Clemente blog: ${site}/blog</li><li>Free home valuation: ${site}/home-value</li></ul>
<div class="box small"><strong>Important.</strong> This guide is general information compiled from public sources and is not legal, tax or financial advice. Figures and descriptions change and are not guaranteed. Always verify details for the specific property, including HOA, Mello-Roos, permits and flood or hazard disclosures, before you rely on them. Equal Housing Opportunity.</div>
<p class="small">${esc(agent.name)} · ${esc(agent.team)} · ${esc(agent.brokerage)} · CA DRE #${esc(agent.dre)}${agent.address ? " · " + esc(agent.address) : ""}</p>${footer}</div>`);

const html = `<!doctype html><html><head><meta charset="utf-8"><title>San Clemente Neighborhood Buyer's Guide</title><style>${css}</style></head><body>${pages.join("\n")}</body></html>`;
writeFileSync(resolve(root, "assets/guides/san-clemente-neighborhood-buyers-guide.html"), html);
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const page = await browser.newPage();
await page.goto("file://" + resolve(root, "assets/guides/san-clemente-neighborhood-buyers-guide.html"), { waitUntil: "load" });
await page.pdf({ path: resolve(root, "assets/guides/san-clemente-neighborhood-buyers-guide.pdf"), format: "Letter", printBackground: true, preferCSSPageSize: true });
await browser.close();
import { copyFileSync } from "fs";
copyFileSync(resolve(root, "assets/guides/san-clemente-neighborhood-buyers-guide.pdf"), resolve(root, "public/guides/san-clemente-neighborhood-buyers-guide.pdf"));
console.log("built", pages.length, "pages");
