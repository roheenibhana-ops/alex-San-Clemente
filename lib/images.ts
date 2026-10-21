// Image slots. Add an entry when a photo is dropped into /public/images, and the matching card,
// hero, or tab picks it up automatically. Anything without an entry keeps its gradient look.
// Keys: "hood:<slug>", "guide:<slug>", "post:<slug>", "food:<slug>".
export type Img = { src: string; alt: string };

export const images: Record<string, Img> = {
  "hood:sea-summit": {
    src: "/images/neighborhoods/sea-summit.jpg",
    alt: "Spanish-style homes with red tile roofs in Sea Summit, San Clemente, with the Pacific Ocean on the horizon",
  },
  "hood:downtown-pier-bowl": {
    src: "/images/neighborhoods/downtown-pier-bowl.jpg",
    alt: "Aerial view of the San Clemente Pier, beach and Pier Bowl shoreline",
  },
  "hood:shorecliffs": {
    src: "/images/neighborhoods/shorecliffs.jpg",
    alt: "Aerial view of an ocean-view home and neighboring rooftops above the Pacific in Shorecliffs, San Clemente",
  },
  "hood:forster-ranch": {
    src: "/images/neighborhoods/forster-ranch.jpg",
    alt: "Forster Ranch entrance monument sign surrounded by landscaping and palm trees in San Clemente",
  },
  "guide:beaches": {
    src: "/images/lifestyle/beaches.jpg",
    alt: "San Clemente Pier welcome sign with the Pacific Ocean and surfers beyond",
  },
  "guide:parks-trails": {
    src: "/images/lifestyle/parks-trails.jpg",
    alt: "Neighborhood park in San Clemente with mature trees, a walking path and a playground",
  },
  "post:buying-a-single-family-home-in-san-clemente": {
    src: "/images/blog/buying-a-single-family-home-in-san-clemente.jpg",
    alt: "Two-story single-family home with a tile roof and landscaped entry in San Clemente",
  },
  "post:moving-to-san-clemente-what-to-know": {
    src: "/images/blog/moving-to-san-clemente-what-to-know.jpg",
    alt: "Aerial view of homes along a curving street with rolling hills behind, San Clemente",
  },
  "guide:food-drink": {
    src: "/images/lifestyle/food-drink.jpg",
    alt: "Oceanfront pier restaurant deck with blue umbrellas above the surf in San Clemente",
  },
  "guide:local-tips": {
    src: "/images/lifestyle/local-tips.jpg",
    alt: "Train passing the San Clemente station sign beside palm trees and the tracks",
  },

  "post:pier-bowl-vs-talega": {
    src: "/images/blog/pier-bowl-vs-talega.jpg",
    alt: "Aerial view of a San Clemente golf course with the Pacific Ocean beyond",
  },
  "post:talega-hoa-dues-mello-roos-what-they-cover": {
    src: "/images/blog/talega-hoa-dues-mello-roos-what-they-cover.jpg",
    alt: "Entrance to the Talega Swim & Athletic Club with a stone archway, tile roof and iron gates",
  },
  "post:sea-summit-azure-aqua-sapphire-indigo-compared": {
    src: "/images/blog/sea-summit-azure-aqua-sapphire-indigo-compared.jpg",
    alt: "Aerial view of a community pool, spa and Spanish-style cabanas with blue umbrellas beside hillside homes",
  },
  "food:seafood-sunset": {
    src: "/images/food/seafood-sunset.jpg",
    alt: "Aerial view of the San Clemente Pier restaurants with blue umbrella decks over the sand and surf",
  },
  "post:shorecliffs-beach-club-neighborhood-guide": {
    src: "/images/neighborhoods/shorecliffs-ocean-view-homes.jpg",
    alt: "Aerial view of ocean-view homes and a private community in Shorecliffs, San Clemente",
  },
  "hood:talega": {
    src: "/images/neighborhoods/talega.jpg",
    alt: "Aerial view of a row of two-story homes in Talega, San Clemente, with a golf course and rolling hills behind",
  },
};

// Extra photos shown in a strip on a neighborhood page, keyed by neighborhood slug.
export const galleries: Record<string, Img[]> = {
  "forster-ranch": [
    { src: "/images/neighborhoods/forster-ranch-highlands-park.jpg", alt: "Forster Highlands Neighborhood Park sign beside a playground and lawn in Forster Ranch, San Clemente" },
  ],
  talega: [
    { src: "/images/neighborhoods/talega-hillside-homes.jpg", alt: "Aerial view of two-story homes with solar panels and open hillside behind in Talega, San Clemente" },
    { src: "/images/neighborhoods/talega-swim-athletic-club.jpg", alt: "Entrance to the Talega Swim & Athletic Club with a stone archway and tile roof" },
  ],
  shorecliffs: [
    { src: "/images/neighborhoods/shorecliffs-coastline.jpg", alt: "Aerial view of coastal homes above the shoreline and beach in Shorecliffs, San Clemente" },
    { src: "/images/neighborhoods/shorecliffs-ocean-deck.jpg", alt: "Deck with outdoor seating and a pool overlooking the Pacific Ocean and beach in Shorecliffs" },
  ],
};

export const imageFor = (key: string): Img | undefined => images[key];
