import type { Source } from "./market";

export type Hood = {
  slug: string;
  name: string;
  short: string; // card blurb
  tag: string;
  hue: number;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  glance: [string, string][];
  feels: string[];
  homes: string[];
  love: string[];
  tradeoffs: string[];
  nearby: { label: string; href: string; note: string }[];
  faqs: { q: string; a: string }[];
  priceNote?: string;
  liveData?: Source;
  sources: Source[];
};

const wiki: Source = { label: "San Clemente, California (Wikipedia)", href: "https://en.wikipedia.org/wiki/San_Clemente,_California" };
const city: Source = { label: "City of San Clemente", href: "https://www.sanclemente.gov/" };

export const hoods: Hood[] = [
  {
    slug: "downtown-pier-bowl",
    name: "Downtown & Pier Bowl",
    short: "Spanish Colonial storefronts, the pier, and sand a short walk from the front door.",
    tag: "Walk to the beach",
    hue: 196,
    metaTitle: "Downtown & Pier Bowl San Clemente Homes for Sale",
    metaDescription:
      "Explore Downtown and Pier Bowl San Clemente: walkable Avenida Del Mar, the pier, ocean-view homes, and what living there is like. Local guide by Alex Yu.",
    intro: [
      "If you picture San Clemente as a Spanish village by the sea, this is the postcard. Avenida Del Mar runs through Downtown with red-tile rooflines and white stucco storefronts, and the Pier Bowl sits just below it, where the pier meets the sand.",
      "It's the part of town where you can leave the car in the driveway for a surprising amount of your week: coffee, dinner, the farmers market, then a barefoot walk to the water.",
    ],
    glance: [
      ["Setting", "Coastal, hillside, and walkable"],
      ["Signature spots", "San Clemente Pier, Avenida Del Mar, Casa Romantica"],
      ["Pier history", "Opened 1928, rebuilt in 1939 and 1983"],
      ["Beach trail", "About 2.3 to 2.6 miles from North Beach to Calafia (sources differ)"],
      ["Getting around", "San Clemente and San Clemente Pier train stations; I-5 nearby"],
      ["Typical home style", "Spanish Colonial Revival cottages, older bungalows, and newer coastal builds"],
    ],
    feels: [
      "Mornings here smell like coffee and salt. By late afternoon the Pier Bowl fills with surfers drying off, walkers heading for sunset, and people lining up for tacos.",
      "Homes sit tight together on small lots, and the streets climb the hillside, so many properties trade yard space for a view. If you want an ocean peek from your kitchen window, this is where that search usually starts.",
    ],
    homes: [
      "Single-family homes make up roughly 70% of San Clemente's inventory, and Downtown and the Pier Bowl are where the character homes are: vintage cottages, remodeled Spanish-style houses, and modern builds that borrow the same look.",
      "Expect small to mid-size lots, parking that's more limited than inland, and big differences in price from one block to the next depending on view and distance from the sand.",
    ],
    love: [
      "Walk to the pier, the beach, restaurants, and the Sunday farmers market",
      "Real architectural character along Avenida Del Mar",
      "Train stations in town for easy trips up or down the coast",
      "Sunset views that don't need a plane ticket",
    ],
    tradeoffs: [
      "Summer weekends bring crowds, and beach parking gets tight",
      "Smaller lots and older homes can mean more maintenance",
      "Views and proximity to the water drive big price swings between streets",
    ],
    nearby: [
      { label: "Casa Romantica Cultural Center", href: "https://www.casaromantica.org/", note: "A 1927 bluff-top home built for founder Ole Hanson, now an arts center" },
      { label: "Downtown San Clemente events and info", href: "https://www.sanclemente.gov/", note: "City calendar, beach cams, and surf conditions" },
      { label: "San Clemente Times", href: "https://www.sanclementetimes.com/", note: "Local news and community happenings" },
    ],
    faqs: [
      { q: "Is Downtown San Clemente walkable?", a: "Yes. Downtown and the Pier Bowl are the most walkable parts of town, with shops, restaurants, the pier, and the beach trail within a short walk of many homes." },
      { q: "What kinds of homes are in the Pier Bowl and Downtown?", a: "A mix of older Spanish Colonial Revival cottages, remodeled bungalows, and newer coastal homes, along with some condos and townhomes. Alex focuses on single-family homes." },
      { q: "How do I find current prices here?", a: "Neighborhood medians swing a lot because there are relatively few sales. Ask Alex for an MLS-based pull of recent Downtown and Pier Bowl sales." },
    ],
    liveData: { label: "San Clemente homes for sale (Alex's listing search)", href: "https://www.besthomesorangecounty.com/san-clemente/" },
    sources: [wiki, city, { label: "San Clemente history and the pier (OCTA)", href: "https://octa.net/getting-around/rail/metrolink/metrolink-weekends/overview/san-clemente-pier-daycation/san-clemente-history" }],
  },
  {
    slug: "sea-summit",
    liveData: { label: "San Clemente homes for sale (Alex's listing search)", href: "https://www.besthomesorangecounty.com/san-clemente/" },
    name: "Sea Summit",
    short: "A newer, master-planned community on the former Marblehead Coastal property.",
    tag: "Newer coastal community",
    hue: 208,
    metaTitle: "Sea Summit San Clemente Homes for Sale | Marblehead",
    metaDescription:
      "Sea Summit at Marblehead in San Clemente: newer single-family homes, ocean-view lots, trails, and what to know before you buy. A local guide from Alex Yu.",
    intro: [
      "Sea Summit sits on what locals know as Marblehead Coastal, one of the last big coastal parcels in Orange County to be built out. Instead of 1920s charm, you get modern floor plans, newer systems, and a planned layout.",
      "It was developed as four neighborhoods named Azure, Indigo, Aqua, and Sapphire, with roughly 309 homes in total, based on the project's announcements.",
    ],
    glance: [
      ["Setting", "Coastal bluff, master-planned"],
      ["Built as", "Four neighborhoods: Azure, Indigo, Aqua, Sapphire"],
      ["Size", "About 309 homes, per development announcements"],
      ["Trail access", "Sea Summit Trail runs along the cliffs"],
      ["Typical home style", "Newer single-family homes, many in a Spanish-style design with tile roofs"],
      ["Ocean views", "Vary lot by lot, from partial to wide-open"],
    ],
    feels: [
      "It feels different from Downtown. Streets are planned, landscaping is fresh, and homes were built in the same era, so you'll see a consistent look rather than a mix of decades.",
      "Views are the big variable. Two homes a street apart can have very different outlooks, so the right move is to stand in the actual house at the time of day you'll use it.",
    ],
    homes: [
      "Mostly newer single-family construction in a Spanish-style design, with tile roofs, stucco, and arched details that echo the rest of town. That usually means open floor plans, modern kitchens, and fewer surprises than a 1950s bungalow.",
      "Ask about HOA dues and any special assessments up front. Newer master-planned communities often have them, and they belong in your monthly cost calculation.",
    ],
    love: [
      "Newer construction with Spanish-style design and modern layouts",
      "Cliffside trail access right nearby",
      "A planned community with consistent design",
      "Ocean views on many lots",
    ],
    tradeoffs: [
      "HOA dues and community rules come with the territory",
      "View quality varies a lot between lots",
      "Less of the vintage character you find Downtown",
    ],
    nearby: [
      { label: "Sea Summit Trail", href: "https://www.lotsafunmaps.com/Orange_County_CA/Sea_Summit_Trail_Pico_Park_San_Clemente.html", note: "A cliffside route with trailheads near Pico Park and North El Camino Real" },
      { label: "City of San Clemente parks", href: "https://www.sanclemente.gov/", note: "Parks, trails, and beach access" },
    ],
    faqs: [
      { q: "What is Sea Summit?", a: "A master-planned community built on the former Marblehead Coastal property, developed as four neighborhoods: Azure, Indigo, Aqua, and Sapphire." },
      { q: "Do all Sea Summit homes have ocean views?", a: "No. Views range from partial to wide open depending on the lot, so confirm the view in person." },
      { q: "Are there HOA fees?", a: "Master-planned communities like this typically have an HOA. Ask for the current dues and any assessments before you make an offer." },
    ],
    sources: [wiki, city, { label: "Canyon View Park and Sea Summit (Fun Orange County Parks)", href: "https://funorangecountyparks.com/canyon-view-park-sea-summit-san-clemente.html" }],
  },
  {
    slug: "forster-ranch",
    name: "Forster Ranch",
    short: "A hillside, master-planned community set back from the sand, with room to spread out.",
    tag: "Hillside, master-planned",
    hue: 172,
    metaTitle: "Forster Ranch San Clemente Homes for Sale & Guide",
    metaDescription:
      "Forster Ranch in San Clemente: hillside single-family homes, trails, parks, what it's like to live there, and how prices compare. Local guide by Alex Yu.",
    intro: [
      "Forster Ranch is the kind of neighborhood people mean when they say they want a yard and a view without giving up the coast. It's a master-planned hillside community on the inland side of town, with winding streets and a lot of open space.",
      "You'll drive to the beach, but you won't drive far, and you'll usually trade a bit of walkability for more room.",
    ],
    glance: [
      ["Setting", "Hillside, master-planned"],
      ["Walkability", "Car-dependent (Redfin Walk Score about 11)"],
      ["Population", "Roughly 13,500 residents, per Redfin"],
      ["Typical home style", "Single-family homes on planned streets"],
      ["Earlier price reference", "Redfin: median near $1.7M in Oct. 2025"],
      ["Current prices", "Ask Alex for a fresh MLS pull"],
    ],
    feels: [
      "Evenings here are calm and the pace is easy. Parks and open space are part of the plan, so a walk can mean a loop through the neighborhood rather than a trip to a main street.",
      "Because it's set back from the water, you can often find more square footage and a bit more privacy than the same budget buys near the pier.",
    ],
    homes: [
      "Single-family homes dominate, with planned lot sizes and consistent architecture. That makes comparing homes easier than in older, more varied areas.",
      "Some streets pick up ocean glimpses from elevated lots. Check the view and the afternoon light in person.",
    ],
    love: [
      "More space and privacy than the coastal core",
      "Parks and open space built into the community plan",
      "Consistent, planned streets and architecture",
      "A short drive to the beach and Downtown",
    ],
    tradeoffs: [
      "You'll drive for most errands and the beach",
      "HOA or assessment details vary by tract, so ask early",
      "Fewer vintage, one-of-a-kind homes than Downtown",
    ],
    nearby: [
      { label: "Forster Ranch on Redfin (live data)", href: "https://www.redfin.com/neighborhood/111203/CA/San-Clemente/Forster-Ranch", note: "Current listings and recent sales" },
      { label: "City of San Clemente parks and trails", href: "https://www.sanclemente.gov/", note: "Park locations and programs" },
    ],
    faqs: [
      { q: "Is Forster Ranch walkable?", a: "Not for daily errands. Redfin's Walk Score is low, so most residents drive, though the community has parks and trails for recreation." },
      { q: "How far is Forster Ranch from the beach?", a: "It's inland, but still a short drive to the coast. Ask Alex for door-to-sand times from specific streets." },
      { q: "What do homes in Forster Ranch cost?", a: "Redfin showed a median near $1.7M in October 2025, but prices move, so request current MLS sales." },
    ],
    liveData: { label: "San Clemente homes for sale (Alex's listing search)", href: "https://www.besthomesorangecounty.com/san-clemente/" },
    sources: [wiki, city, { label: "Forster Ranch housing market (Redfin)", href: "https://www.redfin.com/neighborhood/111203/CA/San-Clemente/Forster-Ranch/housing-market" }],
  },
  {
    slug: "shorecliffs",
    liveData: { label: "San Clemente homes for sale (Alex's listing search)", href: "https://www.besthomesorangecounty.com/san-clemente/" },
    name: "Shorecliffs",
    short: "A 504-home coastal-side neighborhood, developed from 1960, with its own private resident beach club.",
    tag: "Beach club neighborhood",
    hue: 160,
    metaTitle: "Shorecliffs San Clemente Homes for Sale & Beach Club",
    metaDescription:
      "Shorecliffs in San Clemente: a 504-home neighborhood developed from 1960 with a private resident beach club. History, homes, and what to know before you buy.",
    intro: [
      "Shorecliffs is one of San Clemente's established neighborhoods: 504 homes developed by Pacesetter Homes starting around 1960, originally single-level houses on terraced, ocean-view lots. It sits on the coastal side of the I-5, according to a local brokerage blog.",
      "What makes it unusual is the Shorecliffs Beach Club, a private resident club with a clubhouse, a private beach, paddle tennis courts and its own parking lot, built as an amenity for the neighborhood and still run by its residents. It's easy to confuse with the public Shorecliffs Golf Club, which shares the name but is a separate facility.",
    ],
    glance: [
      ["Setting", "Established coastal-side neighborhood"],
      ["Homes", "504, per the beach club's own history"],
      ["Developer", "Pacesetter Homes, from about 1960"],
      ["Original homes", "Single-level houses on terraced, ocean-view lots"],
      ["Signature amenity", "The private Shorecliffs Beach Club, for residents"],
      ["Not the same as", "Shorecliffs Golf Club, a separate public course that shares the name"],
      ["Current prices", "Ask Alex for an MLS-based pull"],
    ],
    feels: [
      "Shorecliffs feels like a mature neighborhood with a shared identity. The beach club has been a community hub for decades, hosting the kinds of gatherings that turn neighbors into friends, and it gives residents a private path to the sand that most coastal-side homes don't have.",
      "Because the homes were built in the 1960s and have been renovated, expanded and rebuilt over the years, the streets are a mix of original single-level houses and modern remodels, often taking advantage of the terraced lots and the ocean outlook.",
    ],
    homes: [
      "Single-family homes that began as single-level houses on terraced lots. Many have been updated or expanded, so condition, permits and view orientation matter more than the neighborhood name.",
      "Ask how each home relates to the beach club: whether the property comes with membership, what the dues and any assessments are, and how the rules work. The club's special assessment history is part of the story, so request the current documents.",
    ],
    love: [
      "A private beach club with a clubhouse and paddle tennis for residents",
      "Terraced lots with ocean outlooks on many streets",
      "A close-knit neighborhood identity built around the club",
      "A mature setting with a mix of original and remodeled homes",
    ],
    tradeoffs: [
      "Homes are from the 1960s, so age, permits and systems deserve attention",
      "Club dues and any special assessments add to monthly costs",
      "View quality varies by terrace and orientation",
    ],
    nearby: [
      { label: "Shorecliffs Beach Club history", href: "https://www.shorecliffsbeachclub.com/history", note: "How the neighborhood and its beach club came to be" },
      { label: "Shorecliffs Golf Club reopening (San Clemente Times)", href: "https://www.picketfencemedia.com/sanclementetimes/eye-on-sc/community-celebrates-shorecliffs-golf-club-s-grand-reopening/article_18302a0d-809a-5b57-bdab-0fc63067dc7f.html", note: "The separate public golf course reopened in 2024 after renovation" },
    ],
    faqs: [
      { q: "How many homes are in Shorecliffs?", a: "The Shorecliffs Beach Club's history cites 504 homes, developed by Pacesetter Homes starting around 1960." },
      { q: "Is Shorecliffs the same as Shorecliffs Golf Club?", a: "No. The Shorecliffs neighborhood and its private beach club are separate from Shorecliffs Golf Club, a public 18-hole course that shares the name." },
      { q: "Who can use the Shorecliffs Beach Club?", a: "It was built for the exclusive use of Shorecliffs residents. Ask for the current membership rules and dues for any home." },
    ],
    sources: [wiki, city, { label: "Shorecliffs Beach Club history", href: "https://www.shorecliffsbeachclub.com/history" }],
  },
  {
    slug: "talega",
    name: "Talega",
    short: "A big master-planned community with parks, trails, a golf club, and everyday shopping close by.",
    tag: "Master-planned, resort-style",
    hue: 150,
    metaTitle: "Talega San Clemente Homes for Sale & Neighborhood Guide",
    metaDescription:
      "Talega in San Clemente: master-planned single-family homes, parks, trails, golf, HOA basics, and how it compares. A local guide with sources by Alex Yu.",
    intro: [
      "Talega is a different San Clemente. It's a large planned community in the northeast part of the city, built from 1999 onward, with more than 30 neighborhoods, a golf club, and its own shopping and parks.",
      "It works like a town within the town, and that's the appeal: nearly everything you need is a short hop from the front door, and the beach is a drive away.",
    ],
    glance: [
      ["Setting", "Inland, master-planned"],
      ["Construction began", "1999"],
      ["Planned size", "About 3,500 residential units, across 3,510 acres in the specific plan"],
      ["Neighborhoods", "More than 30"],
      ["Distance to coast", "About 3 miles; about 2 miles east of I-5"],
      ["Architecture", "Predominantly Spanish-Tuscan style"],
      ["Everyday shopping", "Includes Ralphs, Target, and Walmart"],
      ["City parks", "Talega Park, Liberty Park, Tierra Grande Park"],
    ],
    feels: [
      "The streets are planned, and the architecture has a consistent Spanish-Tuscan look. Community and city parks are spread through the area, so a walk or bike ride is easy to start.",
      "Because it's inland, you'll drive to the beach, but you'll have more room and newer construction than you would for the same budget close to the water.",
    ],
    homes: [
      "Mostly tract single-family homes (the community has no full-custom homes, per public descriptions), with more variety among the 30-plus neighborhoods than the overall look suggests.",
      "Many master-planned communities carry HOA dues, and some include additional assessments. Always ask for the total monthly cost of ownership before you compare listings.",
    ],
    love: [
      "Parks, trails, and a golf club inside the community",
      "Newer construction than the coastal core",
      "Shopping, groceries, and services close by",
      "More space for the money than the beachfront blocks",
    ],
    tradeoffs: [
      "About 3 miles from the coast, so beach days mean a drive",
      "HOA dues and possible extra assessments",
      "Commute times depend on I-5 traffic, so test your route at rush hour",
    ],
    nearby: [
      { label: "Talega on Redfin (live data)", href: "https://www.redfin.com/neighborhood/65361/CA/San-Clemente/Talega", note: "Current listings and recent sales" },
      { label: "Talega (Wikipedia)", href: "https://en.wikipedia.org/wiki/Talega,_San_Clemente,_California", note: "Background and planning details" },
      { label: "City of San Clemente", href: "https://www.sanclemente.gov/", note: "Parks, trails, and services" },
    ],
    faqs: [
      { q: "How far is Talega from the beach?", a: "About 3 miles from the coast and about 2 miles east of I-5, according to public descriptions. Expect a short drive, not a walk." },
      { q: "What styles of home are in Talega?", a: "Mostly tract single-family homes in a Spanish-Tuscan style across more than 30 neighborhoods." },
      { q: "Are there HOA fees in Talega?", a: "Planned communities like Talega commonly have HOA dues, and some tracts have additional assessments. Ask for the specifics on any home you're considering." },
      { q: "What are Talega home prices?", a: "Prices vary by neighborhood, size, and lot. Ask Alex for an MLS-based pull of recent Talega sales." },
    ],
    liveData: { label: "San Clemente homes for sale (Alex's listing search)", href: "https://www.besthomesorangecounty.com/san-clemente/" },
    sources: [
      { label: "Talega (Wikipedia)", href: "https://en.wikipedia.org/wiki/Talega,_San_Clemente,_California" },
      wiki,
      city,
    ],
  },
  {
    slug: "rancho-san-clemente",
    name: "Rancho San Clemente",
    short: "An elevated, master-planned hillside community with Spanish-style homes and big-sky views.",
    tag: "Elevated hillside",
    hue: 30,
    metaTitle: "Rancho San Clemente Homes for Sale | Local Guide",
    metaDescription:
      "Rancho San Clemente homes: hillside single-family houses, views, what it's like to live there, and how to find current prices. A local guide by Alex Yu.",
    intro: [
      "Rancho San Clemente climbs up the hillside in tiers, which is why views are such a big part of the conversation here. It's a master-planned community developed later than the historic core, with Spanish-style architecture that echoes the town's roots.",
    ],
    glance: [
      ["Setting", "Elevated, hillside, master-planned"],
      ["Development era", "Later than the historic core, per local descriptions"],
      ["Typical home style", "Spanish-style single-family homes"],
      ["Views", "Vary by elevation and orientation"],
      ["Current prices", "Ask Alex for a fresh MLS pull"],
    ],
    feels: [
      "Streets climb the hillside, so a good view often comes down to a few feet of elevation and the angle of the house. It's worth visiting at different times of day.",
      "It's quieter and more residential than the Pier Bowl, with a drive to Downtown and the beach.",
    ],
    homes: [
      "Mostly single-family homes in a Spanish-style design. Orientation, lot slope, and view are the big value drivers, so each property deserves its own comparison.",
      "Because this is a sub-area with a smaller number of sales, neighborhood-wide averages can mislead. A street-by-street comparison is the reliable way to price a home here.",
    ],
    love: [
      "Elevation and views",
      "Spanish-style design that fits the town",
      "A residential feel with a short drive to the coast",
      "Hillside streets with room to breathe",
    ],
    tradeoffs: [
      "Views and prices vary widely by exact lot",
      "Hillside lots can mean slopes and stairs",
      "You'll drive to the beach and Downtown",
    ],
    nearby: [
      { label: "Rancho San Clemente on Redfin (live data)", href: "https://www.redfin.com/neighborhood/119949/CA/San-Clemente/Rancho-San-Clemente", note: "Current listings and recent sales" },
      { label: "About San Clemente (City)", href: "https://www.sanclemente.gov/315", note: "City background and services" },
    ],
    faqs: [
      { q: "What is Rancho San Clemente known for?", a: "Its hillside setting and views, along with Spanish-style architecture that matches the rest of San Clemente." },
      { q: "How do I price a home here?", a: "Compare recent sales on the same street or elevation band rather than relying on a neighborhood-wide median." },
    ],
    liveData: { label: "San Clemente homes for sale (Alex's listing search)", href: "https://www.besthomesorangecounty.com/san-clemente/" },
    sources: [wiki, city],
  },
];

export function getHood(slug: string) {
  return hoods.find((h) => h.slug === slug);
}
