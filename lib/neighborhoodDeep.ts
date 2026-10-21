// Extra depth for each neighborhood page. Facts stay general or sourced; Alex can add street-level detail.
export type Deep = {
  dayIn: { label: string; text: string }[];
  fit: string[];
  getting: string[];
  doNearby: [string, string][];
  checks: [string, string][];
  compare: { slug: string; text: string }[];
  extraFaqs: { q: string; a: string }[];
};

export const deep: Record<string, Deep> = {
  "downtown-pier-bowl": {
    dayIn: [
      { label: "Morning", text: "Start with coffee on or near Avenida Del Mar, then step onto the beach trail. Head north toward North Beach or south toward T-Street and Calafia, with the ocean on one side and the town climbing the hillside on the other. Early on, you'll see surfers checking the break and locals walking dogs." },
      { label: "Afternoon", text: "Lunch near the pier, a browse through Downtown's shops and galleries, or a visit to Casa Romantica, the 1927 bluff-top home built for founder Ole Hanson and now a cultural center. If it's summer, plan on company: this is the most visited part of town." },
      { label: "Evening", text: "Sunset is the main event. The pier is open roughly 4 a.m. to midnight, so you can walk out after dinner. Afterward, wander back through Downtown, or accept that on a summer weekend you may be circling for parking." },
    ],
    fit: [
      "You want to walk to coffee, dinner, and the sand",
      "You love vintage and Spanish-style character more than a big yard",
      "You're comfortable with summer crowds and tighter parking",
      "You value being close to train stations and the beach trail",
    ],
    getting: [
      "This is the most walkable part of San Clemente. Many everyday trips, including coffee, dinner, the pier, and the beach, can be done on foot, and the beach trail connects the shoreline for walking, running, and riding. The city's two train stations, San Clemente and San Clemente Pier, are served by the Amtrak Pacific Surfliner and Metrolink.",
      "Driving is easy to start and harder to finish. The I-5 is close, but parking near the pier fills up on summer evenings and weekends, so check driveway and garage options on any home you tour. Our [local tips guide](/lifestyle/local-tips) covers parking and train-crossing safety, and the [beach trail guide](/blog/san-clemente-beach-trail-guide) covers hours and stops.",
    ],
    doNearby: [
      ["San Clemente Pier", "Walks, dining, and sunsets; opened in 1928"],
      ["Avenida Del Mar", "Shops, cafes, and restaurants with a Spanish Colonial look"],
      ["Casa Romantica Cultural Center", "A 1927 bluff-top home turned arts center; confirm hours before you go"],
      ["San Clemente Beach Trail", "A coastal path linking North Beach, the pier, T-Street, and Calafia"],
      ["T-Street", "A local-favorite surf spot reached by a pedestrian overpass"],
    ],
    checks: [
      ["Parking", "Confirm driveway or garage parking and where guests would park"],
      ["Age of systems", "Older homes may need roof, plumbing, or electrical updates"],
      ["Permits", "Ask whether additions or remodels were permitted; coastal-zone work may need extra approvals"],
      ["Train and crowd noise", "Visit at different times, especially near the tracks and on summer weekends"],
      ["The view", "Check it from inside the house, at the time of day you'd use it"],
      ["Coastal wear", "Look for corrosion, drainage issues, and slope or retaining-wall condition"],
    ],
    compare: [
      { slug: "talega", text: "Walk to the beach and Downtown here; drive to everything in Talega, with newer homes and planned amenities." },
      { slug: "forster-ranch", text: "Smaller lots and character homes here; more room and a planned layout in Forster Ranch." },
      { slug: "sea-summit", text: "Vintage and mixed styles here; newer, Spanish-style construction in Sea Summit." },
    ],
    extraFaqs: [
      { q: "Is parking hard in the Pier Bowl?", a: "It can be, especially on summer evenings and weekends. Check the home's own parking and plan for guests." },
      { q: "Are there train stations nearby?", a: "Yes. San Clemente and San Clemente Pier stations are served by Amtrak and Metrolink. See [Pacific Surfliner](https://www.pacificsurfliner.com/) and [Metrolink](https://www.metrolinktrains.com/) for schedules." },
      { q: "Do I need coastal permits to remodel?", a: "Homes in the coastal zone may need a coastal development permit for certain work. Ask the city and see the [California Coastal Commission](https://www.coastal.ca.gov/)." },
    ],
  },
  "sea-summit": {
    dayIn: [
      { label: "Morning", text: "Lace up for the Sea Summit Trail, a cliffside route with ocean views and trailheads near Pico Park and North El Camino Real. Some local guides suggest January to March for spotting gray whales from elevated viewpoints." },
      { label: "Afternoon", text: "Errands and appointments are a short drive, and the neighborhood's planned streets and Spanish-style homes make an easy afternoon walk. Parks such as Canyon View Park, a small playground with ocean views near the trail, are close by." },
      { label: "Evening", text: "Views are the draw here. Depending on the lot, you may catch ocean light at sunset from your own windows or patio, which is why checking the exact view in person matters." },
    ],
    fit: [
      "You want newer construction with a coastal outlook",
      "You like Spanish-style architecture with tile roofs and arches",
      "You'd enjoy trail access without leaving the neighborhood",
      "You don't mind HOA rules in exchange for a planned, consistent community",
    ],
    getting: [
      "Sea Summit is a car-based neighborhood, with the beach trail, Downtown, and the freeway reached by a short drive. Ask Alex for door-to-sand and door-to-freeway times from specific streets, since distances vary within the community.",
      "For walking, the Sea Summit Trail offers a scenic loop and the neighborhood's planned streets are pleasant for strolling. See our [parks and trails guide](/lifestyle/parks-trails) for other options around town.",
    ],
    doNearby: [
      ["Sea Summit Trail", "A cliffside route with ocean views"],
      ["Canyon View Park", "A small playground with ocean views near the trail"],
      ["Pico Park", "Full-court basketball with lights; a starting point for the Sea Summit Trail"],
      ["Downtown and the pier", "A short drive for dining, shops, and the beach"],
    ],
    checks: [
      ["HOA dues and rules", "Ask what they cover, how often they change, and any exterior guidelines"],
      ["Special taxes or assessments", "Newer communities may carry them; request the full annual cost"],
      ["View by lot", "Views run from partial to wide open; verify in person"],
      ["Neighborhood tract", "Azure, Indigo, Aqua, and Sapphire differ in layout and lot"],
      ["Future changes", "Ask about planned development nearby and its effect on views"],
    ],
    compare: [
      { slug: "talega", text: "Both are planned, newer communities. Sea Summit is coastal with ocean views; Talega is inland, larger, and amenity-rich." },
      { slug: "downtown-pier-bowl", text: "Newer construction and a planned layout here; vintage character and walkability in the Pier Bowl." },
      { slug: "forster-ranch", text: "Coastal bluff setting here; a hillside planned community with more inland space in Forster Ranch." },
    ],
    extraFaqs: [
      { q: "What's the architecture like?", a: "Many homes are newer and Spanish-style, with tile roofs, stucco, and arched details that echo the rest of San Clemente." },
      { q: "Is there trail access?", a: "Yes. The Sea Summit Trail, a cliffside route, has trailheads near Pico Park and North El Camino Real." },
      { q: "Should I worry about future building?", a: "Ask the agent and the HOA about any planned development nearby, especially if the view is a big part of the value." },
    ],
  },
  "forster-ranch": {
    dayIn: [
      { label: "Morning", text: "Wake up to a calm, planned neighborhood. Take a walk or bike ride through the streets and open spaces, then drive to the coast for a swim, a surf check, or a beach-trail walk if you want salt air." },
      { label: "Afternoon", text: "Errands are a drive away, but the community's layout keeps things easy. A trip to one of the city's parks or sports fields is a short hop; see our [parks guide](/lifestyle/parks-trails) for what's where." },
      { label: "Evening", text: "Home is the destination. Patios, quiet streets, and the occasional ocean glimpse from elevated lots make for easy evenings, with Downtown dinners a drive away when you want a night out." },
    ],
    fit: [
      "You want more space than the coastal core usually offers",
      "You prefer consistent, planned streets and architecture",
      "You're happy to drive to the beach rather than walk",
      "You value a hillside setting with occasional ocean views",
    ],
    getting: [
      "Forster Ranch is car-dependent for daily errands, and Redfin's Walk Score is low. Parks and open space are part of the planned community, which supports recreational walks even if shopping isn't within walking distance.",
      "The coast and Downtown are a drive away, and the I-5 provides freeway access. Test your commute at rush hour before you commit, and ask Alex about drive times from specific streets.",
    ],
    doNearby: [
      ["City parks and sports fields", "See our parks guide for what's available near this area"],
      ["Beaches and the beach trail", "A drive to North Beach, the pier, T-Street, and Calafia"],
      ["Downtown and Avenida Del Mar", "Dining and shopping within a short drive"],
      ["Sea Summit Trail", "A cliffside trail for ocean views"],
    ],
    checks: [
      ["HOA or assessments", "Details vary by tract; request dues and any special taxes"],
      ["Hillside factors", "Check drainage, slopes, retaining walls, and irrigation"],
      ["View and orientation", "Verify glimpses of the ocean from inside the home"],
      ["Commute", "Drive to the freeway and your workplace at your actual hours"],
      ["Home age and systems", "Ask about roof, HVAC, and any renovations"],
    ],
    compare: [
      { slug: "downtown-pier-bowl", text: "More space and quiet here; walkability and vintage character in the Pier Bowl." },
      { slug: "talega", text: "Both are planned communities. Forster Ranch sits on a hillside near the coast; Talega is larger and further inland." },
      { slug: "rancho-san-clemente", text: "Both are hillside settings; Rancho San Clemente leans on elevation and views." },
    ],
    extraFaqs: [
      { q: "Is Forster Ranch near the beach?", a: "It's inland but still a short drive to the coast. Ask Alex for drive times from specific streets." },
      { q: "Is there an HOA?", a: "It varies by tract. Ask for dues, what they cover, and any special taxes before you make an offer." },
      { q: "What kinds of homes are there?", a: "Single-family homes on planned streets. See [Redfin's Forster Ranch page](https://www.redfin.com/neighborhood/111203/CA/San-Clemente/Forster-Ranch) for current listings." },
    ],
  },
  "shorecliffs": {
    dayIn: [
      { label: "Morning", text: "Head down to the neighborhood's beach club, which the club's history describes as a clubhouse with a private beach, picnic and recreation areas, showers and lockers, meeting rooms and paddle tennis courts. For residents, that's a short trip to the sand without hunting for public parking." },
      { label: "Afternoon", text: "A drive to Downtown or the pier, a walk around the terraced streets, or time at the club. The club's history notes it has long been the center of community life, with gatherings and events through the year." },
      { label: "Evening", text: "Ocean outlooks on many terraced lots make evenings a highlight, depending on the home's orientation. Check the view from inside, at sunset, before you decide." },
    ],
    fit: [
      "You want a coastal-side neighborhood with a strong sense of community",
      "You like the idea of a private beach club for residents",
      "You're comfortable with 1960s-era homes, whether original or remodeled",
      "You're happy driving to Downtown and the pier",
    ],
    getting: [
      "Shorecliffs is a driving neighborhood, with the I-5 close by and the beach club providing the closest sand for residents. Ask Alex for door-to-sand and door-to-freeway times from specific streets.",
      "Because the neighborhood has its own parking lot at the beach club, confirm how parking and guest access work for any home you consider.",
    ],
    doNearby: [
      ["Shorecliffs Beach Club", "Private resident club with a clubhouse, beach, paddle tennis and parking"],
      ["Shorecliffs Golf Club", "A separate public 18-hole course that shares the name"],
      ["Beach trail and pier", "A drive to the shoreline for walks and sunsets"],
      ["Downtown and Avenida Del Mar", "Dining and shopping a short drive away"],
    ],
    checks: [
      ["Beach club dues and assessments", "Ask for current dues, any special assessments and the rules for access"],
      ["Home age and condition", "1960s construction; ask about roof, plumbing, electrical and foundation"],
      ["Permits for remodels", "Confirm additions and rebuilds were permitted and approved"],
      ["Terrace and view", "Verify the outlook from the main rooms at different times of day"],
      ["Slope and drainage", "Terraced lots call for a close look at retaining walls and runoff"],
    ],
    compare: [
      { slug: "downtown-pier-bowl", text: "A private beach club and a mature residential feel here; walking to the pier and Downtown in the Pier Bowl." },
      { slug: "talega", text: "An established 504-home neighborhood here; a much larger, newer planned community in Talega." },
      { slug: "rancho-san-clemente", text: "Both are established settings; Shorecliffs adds a resident beach club, Rancho San Clemente leans on elevation." },
    ],
    extraFaqs: [
      { q: "When was the beach club remodeled?", a: "The club's history says a remodel began in February 2011, with neighbors volunteering labor, and reopened with a July 4, 2011 grand opening." },
      { q: "Does the club own its beach?", a: "According to the club's history, the beach was leased for about 55 years, and members voted in 2000 to buy the underlying land through a special assessment. Confirm the current arrangement with the club." },
      { q: "Is Shorecliffs near the golf course?", a: "The public Shorecliffs Golf Club shares the name but is a separate facility. Ask Alex how close any specific home is." },
    ],
  },
  "talega": {
    dayIn: [
      { label: "Morning", text: "A walk or bike ride along neighborhood paths and parks, a quick coffee, and groceries without a long drive. Talega's planned layout means most daily needs are close, even if the beach isn't." },
      { label: "Afternoon", text: "A round of golf at the community's golf club, an afternoon at one of the city parks such as Talega Park, Liberty Park, or Tierra Grande Park, or a trip to the coast about 3 miles away." },
      { label: "Evening", text: "Back to a quiet street, a patio, and a short drive to dinner. The shopping center nearby includes major retailers like Ralphs, Target, and Walmart, plus smaller spots." },
    ],
    fit: [
      "You want newer construction and planned amenities",
      "You like parks, trails, and golf within your community",
      "You'd rather have more space than beachfront walkability",
      "You value everyday shopping and services close to home",
    ],
    getting: [
      "Talega is built for cars, with garages and driveways standard and shopping close enough for quick errands. The community sits about 3 miles from the coast and about 2 miles east of the I-5, so freeway timing is a key question for commuters.",
      "Walking is pleasant inside the community, with parks and paths, but beach days involve a short drive. The [Orange County Transportation Authority](https://octa.net/) publishes bus routes if you'd like to use transit.",
    ],
    doNearby: [
      ["Talega Park, Liberty Park, Tierra Grande Park", "City parks in the Talega area"],
      ["Talega's golf club", "Golf within the community"],
      ["Talega shopping center", "Groceries and major retailers close to home"],
      ["The beach and pier", "About 3 miles to the coast"],
    ],
    checks: [
      ["HOA dues", "Ask what they cover and whether increases are planned"],
      ["Special taxes or assessments", "Request the full annual cost for the specific tract"],
      ["Architectural rules", "Understand guidelines for exteriors, landscaping, and changes"],
      ["Commute", "Test the drive to the I-5 and your workplace at rush hour"],
      ["Tract differences", "More than 30 neighborhoods vary in lot size, layout, and amenities"],
    ],
    compare: [
      { slug: "downtown-pier-bowl", text: "Planned amenities and newer homes here; walkability and character in the Pier Bowl." },
      { slug: "sea-summit", text: "Both newer and planned. Talega is inland and larger; Sea Summit is coastal with ocean views." },
      { slug: "shorecliffs", text: "Talega is a much larger, newer planned community; Shorecliffs is an established 504-home neighborhood with a private beach club." },
    ],
    extraFaqs: [
      { q: "How big is Talega?", a: "The specific plan covers about 3,510 acres, with more than 30 neighborhoods and about 3,500 residential units planned." },
      { q: "When was Talega built?", a: "Construction began in 1999, and the community has grown over the years." },
      { q: "What's the style?", a: "Predominantly Spanish-Tuscan, with a consistent look across neighborhoods." },
    ],
  },
  "rancho-san-clemente": {
    dayIn: [
      { label: "Morning", text: "Start on a hillside street with a view, take a walk, and enjoy the elevation. Mornings can be gray near the coast and sunnier higher up, which is part of why many people value the setting." },
      { label: "Afternoon", text: "Errands and appointments are a drive away. A trip to the coast or Downtown takes you from hillside to shoreline, and city parks offer places to play and unwind." },
      { label: "Evening", text: "Evenings are about the outlook. Depending on the home's orientation, you may have long views and good light, which is why a visit at sunset is worth the effort." },
    ],
    fit: [
      "You value elevation and the chance of long views",
      "You like Spanish-style architecture on hillside streets",
      "You prefer a residential setting with a drive to the coast",
      "You're willing to compare homes street by street",
    ],
    getting: [
      "Rancho San Clemente is a driving neighborhood on hillside streets. The coast, Downtown, and the freeway are a drive away, and hillside lots can mean slopes and stairs to consider.",
      "Because there are fewer sales in a sub-area like this, a neighborhood-wide average can mislead. Ask Alex for recent sales on the exact street and elevation band that interests you.",
    ],
    doNearby: [
      ["Beach and pier", "A drive to the coast for walks, surf, and sunsets"],
      ["Downtown and Avenida Del Mar", "Dining and shopping within a short drive"],
      ["City parks and trails", "See our parks guide for options around town"],
    ],
    checks: [
      ["Orientation and view", "Verify what you can see from inside, at different times of day"],
      ["Hillside factors", "Check drainage, retaining walls, and slope stability"],
      ["Lot and access", "Consider stairs, driveways, and parking"],
      ["Home age and systems", "Ask about roof, HVAC, and renovations"],
      ["Comparable sales", "Compare the same street or elevation band, not the whole area"],
    ],
    compare: [
      { slug: "forster-ranch", text: "Both are hillside settings; Rancho San Clemente leans on elevation and views." },
      { slug: "downtown-pier-bowl", text: "Elevation and a residential feel here; walking to the pier and Downtown in the Pier Bowl." },
      { slug: "talega", text: "Hillside views here; a larger, newer planned community with amenities in Talega." },
    ],
    extraFaqs: [
      { q: "Does every home have a view?", a: "No. Views depend on elevation and orientation, so check each home in person." },
      { q: "How should I price a home here?", a: "Compare recent sales on the same street or elevation band rather than the whole area." },
      { q: "Is there an HOA?", a: "It varies by tract. Ask for dues and any special taxes before you make an offer." },
    ],
  },
};
