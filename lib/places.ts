import type { Source } from "./market";

export type Place = { name: string; note: string };
export type Section = {
  h: string;
  text?: string;
  table?: { caption: string; head: string[]; rows: string[][] };
  places?: Place[];
};
export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: Section[];
  links: Source[];
};

export const mapsUrl = (name: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + " San Clemente CA")}`;

const city: Source = { label: "City of San Clemente: Beaches, Parks & Recreation", href: "https://www.sanclemente.gov/186/Beaches-Parks-Recreation" };
const wiki: Source = { label: "San Clemente, California (Wikipedia)", href: "https://en.wikipedia.org/wiki/San_Clemente,_California" };
const times: Source = { label: "San Clemente Times: local beaches", href: "https://www.picketfencemedia.com/sanclementetimes/sc-living/local-beaches/article_9f2ae5cb-b5ab-5762-a13d-286e8c1bd58f.html" };

export const guides: Guide[] = [
  {
    slug: "beaches",
    title: "Best Beaches in San Clemente",
    metaTitle: "Best Beaches in San Clemente, CA: Local Guide",
    description:
      "A local guide to San Clemente's beaches: North Beach, the Pier, T-Street, Lasuen, Calafia, State Beach, and Trestles, with parking and access notes.",
    eyebrow: "Beaches & surf",
    intro:
      "San Clemente has a beach for almost every mood, from a pier-side scene you can walk to from Downtown to a long trail down to Trestles. Here's how each one works, including the parking and access details people usually learn the hard way.",
    sections: [
      {
        h: "Beach-by-beach at a glance",
        text: "Details come from the city, state, and local sources and can change, so confirm parking and rules before you go.",
        table: {
          caption: "San Clemente beaches: access, parking, and amenities",
          head: ["Beach", "Access & parking", "Good to know"],
          rows: [
            ["North Beach", "ADA access, metered parking shared with the train station area, restrooms", "Northern end of the beach trail"],
            ["San Clemente Pier", "Pier open about 4 a.m. to midnight; Downtown parking and walking access", "Opened in 1928; restaurants and an oyster bar on the pier"],
            ["T-Street", "Pedestrian overpass across the tracks; about 30 metered spaces plus nearby street parking", "Stairs, restrooms, fire rings, and concessions; summer surfing hours are restricted, so check posted rules"],
            ["Lasuen (Lost Winds)", "Reached from Calle De Los Alamos by a long stairwell and trail over the tracks", "Known for surfing and volleyball"],
            ["Calafia Beach Park", "Roughly 150 to 190 metered spaces (sources differ) plus free street parking up the hill", "Restrooms, showers, and seasonal food; park hours about 6 a.m. to 10 p.m."],
            ["San Clemente State Beach", "Off Avenida Calafia near I-5; trails lead from the bluff-top park to the sand", "State park with camping; check California State Parks for fees and reservations"],
            ["Trestles (San Onofre State Beach)", "A walk of a mile or more down the trail from the parking area", "Internationally known surf break just south of town"],
          ],
        },
      },
      {
        h: "Which beach for which day",
        places: [
          { name: "San Clemente Pier", note: "Dinner, sunset, people-watching, and a walk to the end of the pier." },
          { name: "T-Street", note: "A local-favorite surf spot with easy access from the nearby streets." },
          { name: "Calafia Beach Park", note: "Tide pools, picnic areas, and more room to spread out." },
          { name: "Trestles", note: "Worth the walk for surf-watching, even if you're not in the water." },
        ],
      },
    ],
    links: [
      { label: "City of San Clemente beach information", href: "https://www.sanclemente.gov/194" },
      { label: "San Clemente State Beach brochure (California State Parks, PDF)", href: "https://www.parks.ca.gov/pages/646/files/SanClementeSBFinalWebLayout011916.pdf" },
      times,
      wiki,
    ],
  },
  {
    slug: "parks-trails",
    title: "Parks & Trails in San Clemente",
    metaTitle: "San Clemente Parks & Trails: Local Guide",
    description:
      "Guide to San Clemente parks and trails: Vista Hermosa Sports Park, Bonito Canyon, Sea Summit Trail, the Beach Trail, and more, with what's at each.",
    eyebrow: "Parks & trails",
    intro:
      "Between the coastal trail, the cliffside Sea Summit Trail, and a long list of neighborhood parks, you can spend most days outdoors without going far. Here's where to find what.",
    sections: [
      {
        h: "Trails",
        table: {
          caption: "San Clemente trails",
          head: ["Trail", "What it is", "Good to know"],
          rows: [
            ["San Clemente Beach Trail", "A coastal trail linking North Beach to Calafia, passing the pier and T-Street (about 2.3 to 2.6 miles, depending on the source)", "Hours are about 4 a.m. to midnight, with the T-Street to Calafia stretch about 6 a.m. to 10 p.m. Trains run alongside, so use marked crossings only."],
            ["Sea Summit Trail", "A cliffside route with trailheads near Pico Park and North El Camino Real", "Popular for ocean views; some guides suggest January to March for gray whale spotting"],
            ["Trestles Trail", "A walking trail of a mile or more down to the Trestles beaches", "Bring water and plan for the walk back up"],
          ],
        },
      },
      {
        h: "Parks and what's in them",
        text: "A selection from the city's park system. For the full list, hours, and reservations, use the city's parks page.",
        table: {
          caption: "San Clemente parks",
          head: ["Park", "What's there"],
          rows: [
            ["Vista Hermosa Sports Park", "Large sports park (about 77 acres per the city inventory) with ballfields, tennis courts, and a skate area"],
            ["Bonito Canyon Park", "Tennis courts, a baseball field, half-court basketball, and its own parking lot off Calle Valle"],
            ["Canyon View Park", "A small playground with ocean views, near the Sea Summit Trail"],
            ["Pico Park", "Full-court basketball with lights; also a starting point for the Sea Summit Trail"],
            ["Talega Park, Liberty Park, Tierra Grande Park", "City parks in the Talega area"],
            ["Verde Park, Vista Bahia Park, Vista Del Sol Park, Linda Lane Park", "Neighborhood parks listed in the city's park inventory; see the city page for amenities"],
          ],
        },
      },
      {
        h: "Golf",
        places: [
          { name: "Shorecliffs Golf Club", note: "Public 18-hole course that opened in 1964; renovated course and clubhouse reopened in 2024." },
          { name: "San Clemente Municipal Golf Course", note: "City-run public course; see the city's golf page for details." },
        ],
      },
    ],
    links: [
      city,
      { label: "City park and facility assessment (PDF)", href: "https://www.sanclemente.gov/DocumentCenter/View/188/Park-and-Facility-Site-Assessments-PDF" },
      { label: "Sea Summit Trail map", href: "https://www.lotsafunmaps.com/Orange_County_CA/Sea_Summit_Trail_Pico_Park_San_Clemente.html" },
      { label: "Bonito Canyon Park", href: "https://funorangecountyparks.com/bonito-canyon-park-san-clemente.html" },
    ],
  },
  {
    slug: "food-drink",
    title: "Where to Eat & Drink in San Clemente",
    metaTitle: "Best Restaurants & Coffee in San Clemente, CA",
    description:
      "Where to eat in San Clemente: brunch, coffee, tacos, seafood, and date-night dinners near the pier and Downtown, with map links for each.",
    eyebrow: "Eats & drinks",
    intro:
      "From a pier-deck sunset dinner to a no-fuss morning coffee, here are the places that come up again and again when locals talk about where to eat. Hours and menus change, so check before you go.",
    sections: [
      {
        h: "Brunch & breakfast",
        places: [
          { name: "Antoine's Café", note: "A long-running brunch favorite with generous portions." },
          { name: "West Toast Cafe", note: "Known for toast and coffee." },
          { name: "Pipes Cafe", note: "A loyal local following for hearty breakfasts." },
          { name: "The Original Pancake House", note: "Classic diner-style pancakes." },
        ],
      },
      {
        h: "Coffee",
        places: [
          { name: "Sur Coffee", note: "A Downtown anchor with an artsy feel." },
          { name: "Kuli Coffee", note: "Walkable from Avenida Del Mar." },
          { name: "The Picnic Cafe", note: "Easy stop on a Downtown walk." },
          { name: "Bear Coast Coffee", note: "Near the pier for a pre- or post-beach cup." },
          { name: "Happy Coffee Club", note: "Another pier-area option." },
          { name: "Rapport", note: "A local roaster on the Camino De Los Mares side of town." },
        ],
      },
      {
        h: "Dinner & date night",
        places: [
          { name: "Nick's San Clemente", note: "Appears on nearly every local list; the prime rib dip gets mentions." },
          { name: "South of Nick's", note: "Elevated Mexican in the Pier Bowl area." },
          { name: "Zov's", note: "A Downtown dinner pick." },
          { name: "The Vine", note: "Local suggestion for dinner before a walk to the pier." },
          { name: "The Cellar", note: "Another Downtown dinner and wine spot." },
          { name: "Rare Society", note: "A Downtown name that comes up often." },
        ],
      },
      {
        h: "Seafood & sunset",
        places: [
          { name: "Fisherman's Restaurant & Bar", note: "On the pier deck; people go for the setting and the sunset." },
          { name: "Seasurf Fish", note: "Casual seafood near the beach." },
        ],
      },
    ],
    links: [
      { label: "Local dining guide (Ryan Schram)", href: "https://www.ryanschrammre.com/blog/best-restaurants-in-san-clemente-a-locals-honest-guide/" },
      { label: "San Clemente coffee guide (My Coffee Explorer)", href: "https://mycoffeeexplorer.com/guides/san-clemente-ca" },
      { label: "Restaurants near the pier (Tripadvisor)", href: "https://www.tripadvisor.com/RestaurantsNear-g33012-d1229427-San_Clemente_Pier-San_Clemente_California.html" },
    ],
  },
  {
    slug: "local-tips",
    title: "San Clemente Local Tips & Insider Notes",
    metaTitle: "San Clemente Local Tips: Parking, Trains & Events",
    description:
      "Insider notes for San Clemente: parking, train crossings, surf rules, Ocean Festival, farmers market, Casa Romantica, and more. A quick local guide.",
    eyebrow: "Hyper-local",
    intro:
      "The small stuff that makes a day easier, and the things you only learn by living here. Rules and hours change, so treat this as a starting point.",
    sections: [
      {
        h: "Know before you go",
        table: {
          caption: "San Clemente local tips",
          head: ["Topic", "What to know"],
          rows: [
            ["Train tracks", "Trains run right beside the beach trail, at speeds up to about 50 mph per local guidance. Cross only at marked crossings."],
            ["Surf rules at T-Street", "Surfing hours are restricted in summer (about 10 a.m. to 6 p.m.), so check the posted rules."],
            ["Trestles", "Plan a walk of a mile or more each way and bring water. It's in San Onofre State Beach just south of town."],
            ["Pier hours", "The pier is open roughly 4 a.m. to midnight."],
            ["Beach trail hours", "About 4 a.m. to midnight, with the T-Street to Calafia section about 6 a.m. to 10 p.m."],
            ["Beach parking", "Summer weekends fill up fast. Arrive early, or park up the hill and walk down."],
            ["Whale watching", "Some local guides suggest January to March from the Sea Summit Trail."],
            ["Casa Romantica", "A 1927 bluff-top cultural center built for founder Ole Hanson; a listing shows $5 admission and Tuesday to Sunday hours, so confirm before visiting."],
            ["Farmers market", "A weekly Sunday market near Downtown; check the city calendar for the current location and hours."],
            ["Ocean Festival", "An annual July event at the pier with races, lifeguard competitions, and a woodies display. The 2026 edition was listed for July 18 to 19; confirm each year's dates."],
          ],
        },
      },
    ],
    links: [
      { label: "City of San Clemente calendar", href: "https://www.sanclemente.gov/" },
      { label: "Ocean Festival 2026 (OCTA)", href: "https://octa.net/getting-around/rail/metrolink/metrolink-weekends/promotions/ocean-festival-2026" },
      { label: "Casa Romantica Cultural Center", href: "https://www.casaromantica.org/" },
      { label: "Community events guide", href: "https://www.malakaisparks.com/must-know-community-events-in-san-clemente/" },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
