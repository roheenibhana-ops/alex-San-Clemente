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
    alt: "Aerial view of coastal homes with ocean views in San Clemente",
  },
  "hood:forster-ranch": {
    src: "/images/neighborhoods/forster-ranch.jpg",
    alt: "Aerial view of homes along a curving street with rolling hills behind, San Clemente",
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
  // "hood:talega": { src: "/images/neighborhoods/talega.jpg", alt: "..." },
};

export const imageFor = (key: string): Img | undefined => images[key];
