// Image slots. Add an entry when a photo is dropped into /public/images, and the matching card,
// hero, or tab picks it up automatically. Anything without an entry keeps its gradient look.
// Keys: "page:<name>", "hood:<slug>", "guide:<slug>", "post:<slug>", "food:<slug>".
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
  "hood:rancho-san-clemente": {
    src: "/images/neighborhoods/rancho-san-clemente.jpg",
    alt: "Aerial view of hillside homes with the Pacific Ocean stretching out below under a bright sky in San Clemente",
  },
  "post:sea-pointe-estates-gated-community-san-clemente": {
    src: "/images/blog/sea-pointe-estates-gated-community-san-clemente.jpg",
    alt: "Aerial view of a community clubhouse, pool and tennis courts among hillside homes",
  },
  "post:how-to-choose-a-san-clemente-beach": {
    src: "/images/blog/how-to-choose-a-san-clemente-beach.jpg",
    alt: "Sunset over the Pacific Ocean beside oceanfront buildings with red tile roofs and palm trees in San Clemente",
  },
  "post:san-clemente-beach-trail-guide": {
    src: "/images/blog/san-clemente-beach-trail-guide.jpg",
    alt: "Aerial view of the San Clemente Pier stretching into blue water beside the beach and palm trees",
  },
  "post:san-clemente-vs-dana-point-vs-san-juan-capistrano": {
    src: "/images/blog/san-clemente-vs-dana-point-vs-san-juan-capistrano.jpg",
    alt: "Terracotta-colored coastal condominium building with balconies and palm trees on a San Clemente street",
  },
  "page:neighborhoods": {
    src: "/images/neighborhoods/hub-sunset-coast.jpg",
    alt: "Sunset over the Pacific Ocean beside oceanfront buildings with red tile roofs and palm trees in San Clemente",
  },
  "post:san-clemente-housing-market-update-october-2026": {
    src: "/images/blog/san-clemente-housing-market-update-october-2026.jpg",
    alt: "Aerial view of tile-roof homes along curving streets with hills behind at dusk in San Clemente",
  },
  "page:lifestyle": {
    src: "/images/pages/lifestyle.jpg",
    alt: "Aerial view of the San Clemente Pier, beach and shoreline",
  },
  "page:blog": {
    src: "/images/pages/blog.jpg",
    alt: "Tile-roof homes on a quiet San Clemente street at golden hour",
  },
  "page:home-value": {
    src: "/images/pages/home-value.jpg",
    alt: "Single-story tile-roof home with a lawn and palm trees on a corner lot in San Clemente",
  },
  "food:coffee": {
    src: "/images/food/coffee.jpg",
    alt: "Cups of latte with heart-shaped latte art on saucers on a wooden table beside potted plants",
  },
  "food:brunch": {
    src: "/images/food/brunch.jpg",
    alt: "Brunch table spread with waffles topped with berries, avocado toast with fried eggs, orange juice and coffee",
  },
  "food:dinner": {
    src: "/images/food/dinner.jpg",
    alt: "Long dinner table set with white plates, napkins, glassware and lit candles",
  },
  "post:san-clemente-halloween-events-2026": {
    src: "/images/blog/san-clemente-halloween-events-2026.jpg",
    alt: "Giant jack-o-lantern pumpkin beside large purple BIG JACK letters and hay bales at the Outlets at San Clemente",
  },
  "post:san-clemente-christmas-lights-holiday-events-2026": {
    src: "/images/blog/san-clemente-christmas-lights-holiday-events-2026.jpg",
    alt: "Lit Christmas tree decorated with shells and ornaments on a beach at sunset",
  },
  "post:forster-ranch-tracts-reserves-cantomar-naples-compared": {
    src: "/images/blog/forster-ranch-tracts-reserves-cantomar-naples-compared.jpg",
    alt: "Forster Highlands Neighborhood Park sign beside a playground and lawn in Forster Ranch, San Clemente",
  },
  "post:san-clemente-thanksgiving-2026-turkey-trots-dinner-giving-back": {
    src: "/images/blog/san-clemente-thanksgiving-2026-turkey-trots-dinner-giving-back.jpg",
    alt: "Orange and white pumpkins and wheat stalks in a wicker basket, an autumn harvest display",
  },
  "post:shorecliffs-beach-club-neighborhood-guide": {
    src: "/images/neighborhoods/shorecliffs-ocean-view-homes.jpg",
    alt: "Aerial view of ocean-view homes and a private community in Shorecliffs, San Clemente",
  },
  "hood:talega": {
    src: "/images/neighborhoods/talega.jpg",
    alt: "Aerial view of a row of two-story homes in Talega, San Clemente, with a golf course and rolling hills behind",
  },
  "post:san-clemente-veterans-day-2026-park-semper-fi-marine-corps-birthday": {
    src: "/images/blog/san-clemente-veterans-day-2026-park-semper-fi-marine-corps-birthday.jpg",
    alt: "Aerial view of the San Clemente pier stretching into blue ocean, with the beach and shoreline beside it",
  },
  "post:whats-being-built-in-san-clemente-hotels-housing-projects": {
    src: "/images/blog/whats-being-built-in-san-clemente-hotels-housing-projects.jpg",
    alt: "Aerial view of the San Clemente pier extending into blue ocean, with the beach, palm trees and the railroad along the shore",
  },
  "post:san-clemente-2028-olympics-lower-trestles-surfing": {
    src: "/images/blog/san-clemente-2028-olympics-lower-trestles-surfing.jpg",
    alt: "Surfer in a yellow competition jersey carving off the top of a green wave with a plume of spray behind",
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
