import { cityMarket, peerCities, marketSource } from "./market";

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "callout"; title: string; text: string }
  | { t: "table"; caption: string; head: string[]; rows: string[][]; source?: { label: string; href: string } };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string; // ISO
  category: string;
  excerpt: string;
  blocks: Block[];
  links: { label: string; href: string }[];
};

export const posts: Post[] = [
  {
    slug: "san-clemente-housing-market-update-october-2026",
    title: "San Clemente Housing Market Update: October 2026",
    metaTitle: "San Clemente Housing Market Update, October 2026",
    description:
      "San Clemente's single-family median hit $2.225M in September 2026. See prices, inventory, days to sell, and what it means for buyers and sellers.",
    date: "2026-10-21",
    category: "Market update",
    excerpt: "Single-family prices are up year over year, inventory is tighter, and homes are selling faster. Here's the breakdown.",
    blocks: [
      { t: "p", text: "If you've been watching San Clemente prices, September gave you something to talk about. The median sale price for single-family homes climbed to $2,225,000, up from $2,085,000 a year earlier." },
      { t: "p", text: "Here's what the numbers say, and what I'd do with them depending on which side of the deal you're on." },
      { t: "h2", text: "The numbers at a glance" },
      {
        t: "table",
        caption: "San Clemente single-family market, September 2026 vs. last year",
        head: ["Metric", "Now", "A year ago", "Note"],
        rows: cityMarket.map((r) => [r.metric, r.now, r.then, r.note]),
        source: marketSource,
      },
      { t: "h2", text: "What stands out" },
      {
        t: "ul",
        items: [
          "Prices rose about 6.7% year over year, to a $2.225M median on 43 single-family sales.",
          "Active single-family listings fell from 130 to 105, so buyers have fewer homes to choose from.",
          "Months of supply dipped from 3.2 to 2.9, which points to a market that favors sellers slightly more than last fall.",
          "Expected time to sell is 84 days, down from 109 days in October 2025.",
          "Homes closed at about 100% of list price in September, so well-priced homes aren't taking big discounts.",
        ],
      },
      { t: "callout", title: "One caution", text: "Monthly medians swing, especially in a city with a few dozen sales a month. June and July both ran near $1.88M, so don't read one month as a trend." },
      { t: "h2", text: "If you're buying" },
      { t: "p", text: "Heading into the fall market, you still have room to negotiate on homes that have lingered. Roughly 43% of listings carry a price cut, so ask about the history on any home that's been sitting. Come in with a clear budget, pre-approval, and an agent who knows which streets are priced fairly." },
      { t: "h2", text: "If you're selling" },
      { t: "p", text: "Tighter inventory helps, but only for homes priced right. The 100% sale-to-list ratio tells you buyers are paying near asking for homes that fit the market, and the 43% price-cut figure tells you overpriced homes get punished. Start with an honest valuation of your exact address and recent comparable sales." },
      { t: "h2", text: "Get numbers for your street" },
      { t: "p", text: "Citywide figures are a starting point. Pricing depends on your block, your lot, your view, and your home. Ask for a free valuation and I'll build it from recent nearby sales." },
    ],
    links: [
      { label: "San Clemente market report (source)", href: marketSource.href },
      { label: "City of San Clemente", href: "https://www.sanclemente.gov/" },
    ],
  },
  {
    slug: "san-clemente-vs-dana-point-vs-san-juan-capistrano",
    title: "San Clemente vs. Dana Point vs. San Juan Capistrano: How the Markets Compare",
    metaTitle: "San Clemente vs Dana Point vs San Juan Capistrano",
    description:
      "Compare San Clemente, Dana Point, San Juan Capistrano, Newport Beach, and Laguna Beach on time to sell, price cuts, and sale-to-list. October 2026 data.",
    date: "2026-10-21",
    category: "Compare",
    excerpt: "South Orange County coastal cities look alike from the freeway. The market data says otherwise.",
    blocks: [
      { t: "p", text: "Driving the 5 through South Orange County, the coastal cities blur together. But the market in each one behaves differently, and that matters if you're deciding where to buy or when to sell." },
      { t: "h2", text: "Side-by-side, October 2026" },
      {
        t: "table",
        caption: "Coastal Orange County markets, homes under $5M",
        head: ["City", "Expected time to sell", "Listings with price cuts", "Sale vs. list", "10-year value growth"],
        rows: peerCities.map((c) => [c.city, c.time, c.cuts, c.ratio, c.growth]),
        source: marketSource,
      },
      { t: "h2", text: "What I notice" },
      {
        t: "ul",
        items: [
          "San Clemente sells fastest in the group, at about 84 days expected time to sell.",
          "San Clemente and San Juan Capistrano both close at about 100% of list, while Laguna Beach shows 95.0%.",
          "Value growth over ten years is strong across all six, from +92% to +133%.",
          "Price cuts are common everywhere: 31% to 45% of listings.",
        ],
      },
      { t: "callout", title: "How to read this", text: "These are market-wide indicators, not predictions for one house. Your block, your view, and your price point matter more than the city average." },
      { t: "p", text: "If you want a comparison for a specific home or budget, tell me what you're weighing and I'll put real recent sales side by side." },
    ],
    links: [
      { label: "Market report source", href: marketSource.href },
      { label: "San Clemente (Wikipedia)", href: "https://en.wikipedia.org/wiki/San_Clemente,_California" },
    ],
  },
  {
    slug: "moving-to-san-clemente-what-to-know",
    title: "Moving to San Clemente: What Locals Wish You Knew",
    metaTitle: "Moving to San Clemente, CA: What to Know First",
    description:
      "Thinking of moving to San Clemente, CA? Honest notes on weather, commuting, beaches, costs, and neighborhoods, with sources and a local checklist.",
    date: "2026-10-21",
    category: "Relocation",
    excerpt: "The sunsets are real. So are the traffic on the 5 and the summer beach parking. An honest checklist before you move.",
    blocks: [
      { t: "p", text: "San Clemente sells itself in photos: red-tile roofs, a pier, surf, sunsets. It's all true. But a good move is built on the full picture, including the parts that don't make the postcard." },
      { t: "h2", text: "The quick facts" },
      {
        t: "table",
        caption: "San Clemente at a glance",
        head: ["Fact", "Detail"],
        rows: [
          ["Population", "64,293 (2020 Census)"],
          ["Median household income", "$134,735 (2023 estimate)"],
          ["Climate", "Mediterranean; August highs average around 79°F, December around 64°F"],
          ["Beach trail", "2.6 miles from North Beach to Calafia"],
          ["Train service", "Amtrak Pacific Surfliner and Metrolink, with two stations"],
          ["Single-family share of inventory", "About 70%"],
          ["Median price", "Around $2M"],
        ],
        source: { label: "San Clemente, California (Wikipedia)", href: "https://en.wikipedia.org/wiki/San_Clemente,_California" },
      },
      { t: "h2", text: "Things to love" },
      { t: "ul", items: ["A walkable Downtown and pier with a Spanish Colonial look", "Beaches and surf at your doorstep, plus the beach trail", "Trails, parks, and a golf course or two", "Train stations in town and the 5 freeway for getting up and down the coast"] },
      { t: "h2", text: "Things to plan for" },
      { t: "ul", items: ["The 5 freeway can slow down at rush hour, so test your commute at the hours you'll drive it", "Coastal mornings can be gray before the sun burns through, especially late spring and early summer", "Beach parking gets tight on summer weekends", "Master-planned areas often carry HOA dues, so compare total monthly cost, not just price"] },
      { t: "h2", text: "Pick a neighborhood that matches how you live" },
      { t: "p", text: "Want to walk to the beach? Look at Downtown and the Pier Bowl. Want newer construction and everyday shopping close by? Look at Talega. Want a golf-course setting? Shorecliffs. I've put short guides to each on this site." },
      { t: "h2", text: "A simple move-in checklist" },
      { t: "ul", items: ["Visit twice: once on a weekday morning and once on a summer weekend", "Drive your real commute during rush hour", "Ask for HOA dues and any special assessments", "Check the view in person at the time of day you'll use it", "Get pre-approved before you tour"] },
    ],
    links: [
      { label: "City of San Clemente", href: "https://www.sanclemente.gov/" },
      { label: "San Clemente Times", href: "https://www.sanclementetimes.com/" },
    ],
  },
  {
    slug: "buying-a-single-family-home-in-san-clemente",
    title: "Buying a Single-Family Home in San Clemente: A Step-by-Step Guide",
    metaTitle: "Buying a Single-Family Home in San Clemente, CA",
    description:
      "A step-by-step guide to buying a single-family home in San Clemente, CA: budget, pre-approval, neighborhoods, offers, inspections, and closing.",
    date: "2026-10-21",
    category: "Buying",
    excerpt: "From budget to keys, here's how buying a house on the San Clemente coast actually works.",
    blocks: [
      { t: "p", text: "With a median price around $2M and about 70% of inventory made up of single-family homes, houses are the heart of the San Clemente market. Here's the process, step by step." },
      { t: "h2", text: "1. Know your real budget" },
      { t: "p", text: "Start with the monthly payment you're comfortable with, then work backward. Include property taxes, insurance, and HOA dues if the home has them. A lender can pre-approve you, and a pre-approval letter makes your offers credible." },
      { t: "h2", text: "2. Pick your neighborhood" },
      { t: "p", text: "San Clemente isn't one market. Downtown and the Pier Bowl are walkable and full of character. Talega is a large master-planned community. Shorecliffs wraps around a golf course. Read the neighborhood guides on this site, then tour in person." },
      { t: "h2", text: "3. Tour smart" },
      { t: "ul", items: ["See homes at different times of day to check light, noise, and parking", "Check the view from inside the house, not just the yard", "Note the age of the roof, HVAC, and water heater", "Ask what's included in the sale"] },
      { t: "h2", text: "4. Make a competitive offer" },
      { t: "p", text: "Recent data shows homes closing near 100% of list price, so well-priced homes don't leave much room. Your agent will pull recent comparable sales so your offer reflects the market, not just the asking price." },
      { t: "h2", text: "5. Inspections and appraisal" },
      { t: "p", text: "Inspections tell you what you're buying: foundation, roof, plumbing, electrical, and more. Coastal homes also deserve a look at corrosion and drainage. Your lender will order an appraisal to confirm value." },
      { t: "h2", text: "6. Close and get the keys" },
      { t: "p", text: "Escrow handles the paperwork and funds. Plan for closing costs, a final walkthrough, and moving day." },
      { t: "callout", title: "Want a plan for your budget?", text: "Tell Alex what you're looking for and he'll walk you through the neighborhoods and recent sales that fit." },
    ],
    links: [
      { label: "City of San Clemente", href: "https://www.sanclemente.gov/" },
      { label: "San Clemente, California (Wikipedia)", href: "https://en.wikipedia.org/wiki/San_Clemente,_California" },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
