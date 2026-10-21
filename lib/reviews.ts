// Real client reviews, as published on Alex's other site (findyourhomeorangecounty.com). Confirm permission before launch.
export type Review = { quote: string; name: string; context: string };
export const reviews: Review[] = [
  { quote: "Working with the Alex Yu Real Estate Team was a great experience for me as a teacher buying my first home.", name: "Jon F.", context: "First-time buyer" },
  { quote: "Alex and his team were patient and adhered to our priorities despite the complexity of two transactions at the same time.", name: "Russ H.", context: "Seller and buyer" },
  { quote: "Even from a first conversation, it was entirely evident how extensive his knowledge of the local market is.", name: "Elia R.", context: "Seller and buyer" },
];
export const reviewsLink = "https://maps.app.goo.gl/WmK1mKVLuktWqEMo7";
// Headline figures as published on Alex's other site. Update if the Google profile changes.
export const reviewStats = { rating: "5.0", count: "200+", label: "five-star Google reviews" };
