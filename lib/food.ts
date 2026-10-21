import type { Place } from "./places";

export type FoodCategory = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string[];
  picks: Place[];
  tips: string[];
  pairWith: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
};

export const foodCategories: FoodCategory[] = [
  {
    slug: "coffee",
    title: "Best Coffee in San Clemente",
    metaTitle: "Best Coffee in San Clemente, CA: Local Guide",
    description:
      "Where to get coffee in San Clemente: Downtown cafes, pier-area favorites, and local roasters, with map links and tips for pairing with a beach walk.",
    eyebrow: "Coffee",
    intro: [
      "Coffee in San Clemente is a ritual as much as a drink. It's the cup you carry down to the sand, the stop on a Downtown stroll, and the thing you hold while you check the surf. The town has everything from walkable cafes on Avenida Del Mar to local roasters on the inland side.",
      "This list comes from local coffee guides and community picks. Menus, hours, and ownership change, so check each place's current details before you go, and tell us your favorites so we can keep the list honest.",
    ],
    picks: [
      { name: "Sur Coffee", note: "A Downtown anchor with an artsy feel." },
      { name: "Kuli Coffee", note: "Walkable from Avenida Del Mar." },
      { name: "The Picnic Cafe", note: "An easy stop on a Downtown walk." },
      { name: "Bear Coast Coffee", note: "Near the pier for a pre- or post-beach cup." },
      { name: "Happy Coffee Club", note: "Another pier-area option." },
      { name: "Rapport", note: "A local roaster on the Camino De Los Mares side of town." },
      { name: "High Tide", note: "A name that comes up for the beach crowd." },
    ],
    tips: [
      "Go early on summer weekends, when pier-area lines and parking fill up.",
      "Pair your cup with the beach trail: grab coffee near the pier and walk toward T-Street or Calafia.",
      "If you want a quieter morning, try the Downtown spots on a weekday.",
      "Ask what's roasted locally. San Clemente has several small roasters.",
    ],
    pairWith: [
      { label: "San Clemente Beach Trail guide", href: "/blog/san-clemente-beach-trail-guide" },
      { label: "Downtown & Pier Bowl neighborhood", href: "/neighborhoods/downtown-pier-bowl" },
    ],
    faqs: [
      { q: "Where can I get coffee near the San Clemente Pier?", a: "Local guides point to Bear Coast Coffee and Happy Coffee Club near the pier, with Sur Coffee, Kuli Coffee, and The Picnic Cafe in the Downtown area." },
      { q: "Are there local coffee roasters in San Clemente?", a: "Yes. Rapport is one local roaster mentioned by coffee guides, and several others operate around town." },
      { q: "What's the best time to go?", a: "Weekday mornings are calm. Summer weekend mornings near the pier get busy, so arrive early." },
    ],
  },
  {
    slug: "brunch",
    title: "Best Brunch & Breakfast in San Clemente",
    metaTitle: "Best Brunch & Breakfast in San Clemente, CA",
    description:
      "Where locals go for breakfast and brunch in San Clemente: long-time favorites, classic diners, and toast-and-coffee spots, with map links and tips.",
    eyebrow: "Brunch & breakfast",
    intro: [
      "A San Clemente morning can start with a surf check, a trail walk, or a slow table with eggs and strong coffee. The town has a handful of long-running breakfast spots that locals return to again and again, and a few newer places worth a look.",
      "These are picks that come up repeatedly in local guides and restaurant lists. Because hours and menus change, treat this as a starting point and confirm details with the restaurant.",
    ],
    picks: [
      { name: "Antoine's Café", note: "A long-running brunch favorite with generous portions." },
      { name: "West Toast Cafe", note: "Known for toast and coffee." },
      { name: "Pipes Cafe", note: "A loyal local following for hearty breakfasts." },
      { name: "The Original Pancake House", note: "Classic diner-style pancakes." },
    ],
    tips: [
      "Weekend brunch can mean a wait, so go early or on a weekday.",
      "Check whether the restaurant takes reservations before you plan a group meal.",
      "Pair brunch with a walk on the beach trail to burn it off.",
      "Parking near Downtown can be tight on weekends, so plan a few extra minutes.",
    ],
    pairWith: [
      { label: "Beach Trail guide", href: "/blog/san-clemente-beach-trail-guide" },
      { label: "Local tips: parking and crowds", href: "/lifestyle/local-tips" },
    ],
    faqs: [
      { q: "Where can I get breakfast in San Clemente?", a: "Local guides mention Antoine's Café, West Toast Cafe, Pipes Cafe, and The Original Pancake House, among others." },
      { q: "Do I need a reservation for brunch?", a: "Policies vary by restaurant. Check each place's website or call ahead, especially for weekends and groups." },
      { q: "Is there parking near these spots?", a: "It varies. Downtown spots can have tight parking on weekends, so allow extra time." },
    ],
  },
  {
    slug: "dinner",
    title: "Best Dinner & Date Night in San Clemente",
    metaTitle: "Best Dinner & Date Night in San Clemente, CA",
    description:
      "Where to eat dinner in San Clemente: Downtown and Pier Bowl restaurants locals recommend for date night, with map links and planning tips.",
    eyebrow: "Dinner & date night",
    intro: [
      "Evening in San Clemente has a particular rhythm. People walk Avenida Del Mar, drift toward the pier for sunset, and end up at a table somewhere nearby. A cluster of dinner spots in the Downtown and Pier Bowl area makes it easy to plan a night around a walk.",
      "These picks come from local dining guides and recurring mentions. Menus, hours, and reservations change often, so confirm details directly with the restaurant.",
    ],
    picks: [
      { name: "Nick's San Clemente", note: "Appears on nearly every local list; the prime rib dip gets mentions." },
      { name: "South of Nick's", note: "Elevated Mexican in the Pier Bowl area." },
      { name: "Zov's", note: "A Downtown dinner pick." },
      { name: "The Vine", note: "Local suggestion for dinner before a walk to the pier." },
      { name: "The Cellar", note: "Another Downtown dinner and wine spot." },
      { name: "Rare Society", note: "A Downtown name that comes up often." },
      { name: "Dark Magic Sushi", note: "A sushi option that locals mention." },
    ],
    tips: [
      "Reserve ahead for weekends and summer evenings.",
      "Plan to walk: park once, dine, then stroll to the pier for sunset.",
      "Check dress and noise level if you're planning a quiet date.",
      "Ask about outdoor seating if you want a view or a breeze.",
    ],
    pairWith: [
      { label: "Sunset and seafood picks", href: "/lifestyle/food-drink/seafood-sunset" },
      { label: "Where to live near Downtown", href: "/neighborhoods/downtown-pier-bowl" },
    ],
    faqs: [
      { q: "What are good dinner spots near the pier?", a: "Local guides point to Nick's San Clemente, South of Nick's, Zov's, The Vine, The Cellar, and Rare Society, among others." },
      { q: "Do I need reservations?", a: "Often yes on weekends and in summer. Confirm with each restaurant." },
      { q: "Where should I park?", a: "Park once in Downtown and walk. Check current parking rules and fees." },
    ],
  },
  {
    slug: "seafood-sunset",
    title: "Best Seafood & Sunset Dining in San Clemente",
    metaTitle: "Best Seafood & Sunset Dining in San Clemente, CA",
    description:
      "Where to eat seafood and watch the sunset in San Clemente: pier-deck dining and casual fish near the beach, with map links and local tips.",
    eyebrow: "Seafood & sunset",
    intro: [
      "San Clemente faces the open Pacific, so sunset is the main event and seafood is the natural match. The pier puts you right over the water, and a few casual spots near the beach serve fish without any fuss.",
      "Here are the places locals and guides mention most. As with any restaurant, hours, menus, and reservations change, so confirm before you go.",
    ],
    picks: [
      { name: "Fisherman's Restaurant & Bar", note: "On the pier deck; people go for the setting and the sunset." },
      { name: "Seasurf Fish", note: "Casual seafood near the beach." },
    ],
    tips: [
      "Check sunset time for your date and plan to arrive early, since seats with a view fill up.",
      "Bring a layer, because the pier can be breezy after the sun goes down.",
      "Pair dinner with a walk on the beach trail before or after.",
      "The pier is open roughly 4 a.m. to midnight, so you can walk out after dinner.",
    ],
    pairWith: [
      { label: "Beaches guide", href: "/lifestyle/beaches" },
      { label: "Dinner and date-night picks", href: "/lifestyle/food-drink/dinner" },
    ],
    faqs: [
      { q: "Where can I eat on the San Clemente Pier?", a: "Fisherman's Restaurant & Bar is on the pier and is known more for its setting and sunset views than for cutting-edge food." },
      { q: "Where's a casual seafood option?", a: "Seasurf Fish is a casual seafood spot near the beach that locals mention." },
      { q: "When is the best time to go?", a: "Around sunset, with a reservation if possible, especially in summer." },
    ],
  },
];

export const getFoodCategory = (slug: string) => foodCategories.find((c) => c.slug === slug);

// Individual place pages. Only places with first-hand notes from Alex should be added here;
// each entry here generates a page at /lifestyle/places/[slug].
export type FeaturedPlace = {
  slug: string;
  name: string;
  category: string; // one of the foodCategories slugs
  tagline: string;
  whyAlexLikesIt: string[];
  whatToOrder: string[];
  parking?: string;
  hoodSlug?: string; // nearest neighborhood guide
  website?: string;
  updated: string; // ISO date the info was last confirmed
};

export const featuredPlaces: FeaturedPlace[] = [];
export const getFeaturedPlace = (slug: string) => featuredPlaces.find((p) => p.slug === slug);
