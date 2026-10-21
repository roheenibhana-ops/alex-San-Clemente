// Image slots. Add an entry when a photo is dropped into /public/images, and the matching card,
// hero, or tab picks it up automatically. Anything without an entry keeps its gradient look.
// Keys: "hood:<slug>", "guide:<slug>", "post:<slug>", "food:<slug>".
export type Img = { src: string; alt: string };

export const images: Record<string, Img> = {
  // "hood:talega": { src: "/images/neighborhoods/talega.jpg", alt: "..." },
};

export const imageFor = (key: string): Img | undefined => images[key];
