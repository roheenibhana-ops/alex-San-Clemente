export const beaches = [
  {
    name: "San Clemente Pier & Pier Bowl",
    body: "The town's front porch: a historic pier, a classic beach break, and a walkable strip of shops and restaurants just up the hill.",
  },
  {
    name: "T-Street",
    body: "A local-favorite surf spot with easy access from the neighborhoods above it.",
  },
  {
    name: "Calafia Beach Park",
    body: "A beach park on the north end of town with tide pools, picnic areas, and open sand.",
  },
  {
    name: "Trestles",
    body: "World-famous surf breaks just south of town in San Onofre State Beach, reached by a short trail.",
  },
];

export const outdoors = [
  {
    name: "San Clemente Beach Trail",
    body: "A coastal trail along the shoreline for walks, runs, and bike rides with ocean views the whole way.",
  },
  {
    name: "Neighborhood parks",
    body: "Community parks and sports fields are woven through areas like Forster Ranch and Talega.",
  },
  {
    name: "Hills and canyon trails",
    body: "Inland trail networks give hikers and mountain bikers a break from the coast.",
  },
];

// Alex's picks go here as he sends them: { name, note, mapUrl }.
export const eats = [
  { category: "Coffee & breakfast", blurb: "Morning spots in and around Downtown where locals start the day.", picks: [] as { name: string; note: string; mapUrl?: string }[] },
  { category: "Tacos & casual", blurb: "Quick, easy, flip-flops-welcome places near the beach.", picks: [] },
  { category: "Sunset dinners", blurb: "Tables with a view, from the Pier Bowl to the north end of town.", picks: [] },
  { category: "Evening drinks & dessert", blurb: "Easy wind-down spots along Del Mar and the Pier Bowl.", picks: [] },
];

export const schoolLinks = [
  { label: "Capistrano Unified School District", href: "https://www.capousd.org/" },
  { label: "California School Dashboard (official state data)", href: "https://www.caschooldashboard.org/" },
];

export const events = [
  { name: "Downtown farmers market", body: "A weekly market in the heart of Downtown." },
  { name: "Ocean Festival", body: "A summer celebration of the beach, surf, and community." },
  { name: "Fourth of July parade", body: "A long-running small-town tradition through Downtown." },
];

export const gettingAround = [
  { name: "The 5 freeway", body: "Direct access north to Orange County and south to San Diego." },
  { name: "Train service", body: "Metrolink and Amtrak Pacific Surfliner serve San Clemente, with the Pier station steps from the beach." },
  { name: "Walk and bike", body: "Downtown, the Pier Bowl, and the beach trail are easy to get around without a car." },
];
