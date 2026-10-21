// Market figures. Replace with Alex's own MLS pulls as they're available; every table reads from here.
export type Source = { label: string; href: string };

export const marketAsOf = "September 2026";
export const marketSource: Source = {
  label: "San Clemente market report, Adam Boehrer (MLS-based), Oct. 2026",
  href: "https://adamboehrer.com/san-clemente-housing-market/",
};

// Single-family, citywide.
export const cityMarket = [
  { metric: "Median sale price", now: "$2,225,000", then: "$2,085,000", note: "Sept 2026 vs. Sept 2025 (+6.7%)" },
  { metric: "Single-family closings", now: "43", then: "n/a", note: "Sept 2026 (55 across all home types)" },
  { metric: "Active single-family listings", now: "105", then: "130", note: "Sept 2026 vs. Sept 2025" },
  { metric: "Months of supply", now: "2.9", then: "3.2", note: "Sept 2026 vs. Sept 2025" },
  { metric: "Expected time to sell", now: "84 days", then: "109 days", note: "As of Oct. 1, 2026 vs. Oct. 2025" },
  { metric: "Sale price vs. list price", now: "100.0%", then: "n/a", note: "All 55 closings in Sept 2026" },
  { metric: "Listings with a price cut", now: "43%", then: "n/a", note: "Oct. 2026 snapshot, all price points" },
];

export const peerCities = [
  { city: "San Clemente", time: "84 days", cuts: "43%", ratio: "100.0%", growth: "+118%" },
  { city: "San Juan Capistrano", time: "117 days", cuts: "45%", ratio: "100.3%", growth: "+98%" },
  { city: "Dana Point", time: "173 days", cuts: "33%", ratio: "98.1%", growth: "+116%" },
  { city: "Newport Beach", time: "197 days", cuts: "38%", ratio: "98.0%", growth: "+123%" },
  { city: "Laguna Beach", time: "213 days", cuts: "41%", ratio: "95.0%", growth: "+92%" },
  { city: "Newport Coast", time: "223 days", cuts: "31%", ratio: "96.6%", growth: "+133%" },
];

export const cityFacts = [
  ["Population (2020 Census)", "64,293"],
  ["Median household income (2023 estimate)", "$134,735"],
  ["Land and water area", "19.1 sq mi"],
  ["Average August high / December high", "about 79°F / 64°F"],
  ["Beach trail", "2.6 miles, North Beach to Calafia"],
  ["Median price, local view", "around $2M; about 70% of inventory is single-family"],
];

export const cityFactsSources: Source[] = [
  { label: "San Clemente, California (Wikipedia)", href: "https://en.wikipedia.org/wiki/San_Clemente,_California" },
  { label: "City of San Clemente", href: "https://www.sanclemente.gov/" },
];
