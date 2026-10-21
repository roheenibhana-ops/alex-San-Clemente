import type { Section, Faq } from "./places";

type Extra = { sections: Section[]; faqs: Faq[] };

// Extra depth for the local guides. Facts stay sourced or clearly general.
export const guideExtras: Record<string, Extra> = {
  beaches: {
    sections: [
      {
        h: "How to choose in 30 seconds",
        text: "Not sure where to head? Match the day you want to the beach that fits it.",
        table: {
          caption: "Pick a beach by the kind of day you want",
          head: ["If you want...", "Go to", "Why"],
          rows: [
            ["Dinner, people-watching, and a sunset", "San Clemente Pier", "Restaurants and an oyster bar on or near the pier"],
            ["Room to spread out and tide pools", "Calafia Beach Park", "Large metered lot, restrooms, showers, and seasonal food"],
            ["A local surf scene close to town", "T-Street", "Easy overpass access; check summer surf-hour rules"],
            ["A car-free day by train", "North Beach", "Near the station, with ADA access and metered parking"],
            ["Camping and bluff-top trails", "San Clemente State Beach", "State park with trails down to the sand"],
            ["A world-famous surf break", "Trestles", "A walk of a mile or more each way"],
          ],
        },
      },
      {
        h: "A parking game plan",
        paras: [
          "Parking is the thing that most often decides how a San Clemente beach day goes. Summer weekends fill lots early, so a little planning pays off.",
        ],
        list: [
          "**Arrive early.** On warm weekends, get there well before the crowd.",
          "**Park up the hill.** Free street parking can be a short walk from some beaches, such as up from Calafia.",
          "**Take the train.** San Clemente's stations are served by Amtrak and Metrolink, which makes a car-free day easy. See [Pacific Surfliner](https://www.pacificsurfliner.com/) and [Metrolink](https://www.metrolinktrains.com/).",
          "**Walk from Downtown.** If you're near Avenida Del Mar, you can often walk to the pier and the [beach trail](/blog/san-clemente-beach-trail-guide).",
          "**Bring coins or an app.** Most lots are metered, so check the signs.",
        ],
      },
      {
        h: "Safety and etiquette",
        paras: [
          "The Pacific is beautiful and powerful. Look before you go in, respect posted warnings, and give surfers room. The railroad runs beside several beaches, so cross only at marked crossings. For a longer list, see [how to pick your beach](/blog/how-to-choose-a-san-clemente-beach) and our [local tips](/lifestyle/local-tips).",
          "Check tide predictions on the [NOAA Tides & Currents site](https://tidesandcurrents.noaa.gov/) and the city's [beach camera and surf conditions page](https://www.sanclemente.gov/322) before you head out, especially if you want tide pools or plan to walk along the base of the bluffs.",
        ],
      },
      {
        h: "Living near the beaches",
        paras: [
          "If the coast is why you're here, the neighborhoods closest to the sand are [Downtown and the Pier Bowl](/neighborhoods/downtown-pier-bowl), where you can walk to the pier and the trail. Inland areas such as [Forster Ranch](/neighborhoods/forster-ranch) and [Talega](/neighborhoods/talega) offer more space with a short drive to the coast. [Compare all six neighborhoods](/neighborhoods) to see which fits.",
        ],
      },
    ],
    faqs: [
      { q: "Which San Clemente beach is best for a first visit?", a: "The San Clemente Pier is the classic first stop for dining and sunset, and Calafia Beach Park is a good choice if you want more room and easy facilities." },
      { q: "Where can I park near the beach?", a: "North Beach, T-Street, and Calafia Beach Park all have metered parking, and some free street parking exists up the hill from Calafia. Arrive early on summer weekends." },
      { q: "Can I surf at T-Street year-round?", a: "Surfing hours are restricted in summer, so check posted rules and the city's website before you paddle out." },
      { q: "Is Trestles in San Clemente?", a: "Trestles is in San Onofre State Beach, just south of town, and is reached by a walk of a mile or more down a trail." },
      { q: "Can I get to the beach by train?", a: "Yes. San Clemente has two stations served by Amtrak and Metrolink, and North Beach and the pier are both close to a station." },
    ],
  },
  "parks-trails": {
    sections: [
      {
        h: "Which trail for which mood",
        table: {
          caption: "Choosing a trail",
          head: ["You want...", "Try", "What to expect"],
          rows: [
            ["A flat, scenic walk or run", "San Clemente Beach Trail", "Ocean views the whole way; about 2.3 to 2.6 miles North Beach to Calafia"],
            ["Cliffside views and a bit of climbing", "Sea Summit Trail", "Trailheads near Pico Park and North El Camino Real"],
            ["An adventure to a famous surf break", "Trestles Trail", "A walk of a mile or more down, and back up"],
            ["A short stroll with a view", "Canyon View Park", "A small playground with ocean views near the Sea Summit Trail"],
          ],
        },
      },
      {
        h: "Parks for sports and play",
        paras: [
          "San Clemente's park system includes a large sports park, neighborhood parks, and school-adjacent fields. The city's park inventory lists Vista Hermosa Sports Park at about 77 acres, with ballfields, tennis courts, and a skate area, and smaller parks such as Bonito Canyon Park, Pico Park, Verde Park, Vista Bahia Park, Vista Del Sol Park, and Linda Lane Park. Talega has its own city parks, including Talega Park, Liberty Park, and Tierra Grande Park.",
          "For amenities, hours, and reservations, use the [City of San Clemente's parks page](https://www.sanclemente.gov/186/Beaches-Parks-Recreation). It's also where to look for classes and programs.",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "**Mind the tracks.** The beach trail runs beside an active railroad, and trains can reach about 50 mph. Cross only at marked crossings.",
          "**Check hours.** The beach trail is open about 4 a.m. to midnight, with the T-Street to Calafia stretch about 6 a.m. to 10 p.m.",
          "**Time your visit.** Early mornings are cooler and quieter, especially in summer.",
          "**Look for whales.** Some local guides suggest January to March for gray whale spotting from elevated viewpoints.",
          "**Bring water.** Especially for Trestles and any longer walk.",
        ],
        paras: ["For the full walk-through of the shoreline route, see our [beach trail guide](/blog/san-clemente-beach-trail-guide)."],
      },
      {
        h: "Living near parks and trails",
        paras: [
          "If daily time outdoors is the goal, the right neighborhood depends on the kind of outdoors. [Sea Summit](/neighborhoods/sea-summit) puts a cliffside trail nearby, [Talega](/neighborhoods/talega) has parks and a golf club in the community, and [Shorecliffs](/neighborhoods/shorecliffs) has its own private resident beach club. [Compare the neighborhoods](/neighborhoods) to see what's closest to what you love.",
        ],
      },
    ],
    faqs: [
      { q: "How long is the San Clemente Beach Trail?", a: "About 2.3 to 2.6 miles from North Beach to Calafia, depending on the source." },
      { q: "Are there good hiking trails in San Clemente?", a: "The Sea Summit Trail offers cliffside ocean views, and the Trestles trail leads down to San Onofre State Beach. Our trail table above compares them." },
      { q: "Where are the sports fields?", a: "Vista Hermosa Sports Park is the city's large sports park, with ballfields, tennis courts, and a skate area. Check the city's parks page for current details." },
      { q: "Are dogs allowed on the trails?", a: "Rules vary by location. Check posted signs and the city's website, and keep dogs on a leash where required." },
    ],
  },
  "food-drink": {
    sections: [
      {
        h: "A day of eating and drinking",
        text: "Here's one way to string the pick-ups together into a full day around the pier and Downtown.",
        table: {
          caption: "A sample San Clemente eating day",
          head: ["When", "What", "Start with"],
          rows: [
            ["Early morning", "Coffee before the beach trail", "[Coffee picks](/lifestyle/food-drink/coffee)"],
            ["Late morning", "A big breakfast or brunch", "[Brunch picks](/lifestyle/food-drink/brunch)"],
            ["Afternoon", "A beach or trail break, then a casual bite", "[Seafood and sunset picks](/lifestyle/food-drink/seafood-sunset)"],
            ["Evening", "Dinner in Downtown or the Pier Bowl", "[Dinner and date-night picks](/lifestyle/food-drink/dinner)"],
          ],
        },
      },
      {
        h: "Tips for eating near the pier",
        list: [
          "**Reserve ahead** for weekends and summer evenings where reservations are offered.",
          "**Park once.** Leave the car and walk between Downtown, the pier, and dinner.",
          "**Expect crowds** on summer weekends, and ask about wait times.",
          "**Check hours.** Menus and hours change, so confirm before you go.",
          "**Pair it with a walk.** The [beach trail](/blog/san-clemente-beach-trail-guide) is a natural way to work up an appetite.",
        ],
      },
      {
        h: "Live near the places you love",
        paras: [
          "Many of these places cluster around Downtown and the Pier Bowl. If walking to coffee and dinner sounds like your ideal week, read the [Downtown and Pier Bowl guide](/neighborhoods/downtown-pier-bowl). If you'd rather have more space and drive to eat, [Talega](/neighborhoods/talega) and [Forster Ranch](/neighborhoods/forster-ranch) are worth a look.",
        ],
      },
    ],
    faqs: [
      { q: "What are the best restaurants near the San Clemente Pier?", a: "Local guides point to Nick's San Clemente, South of Nick's, Zov's, The Vine, The Cellar, and Fisherman's Restaurant & Bar on the pier, among others." },
      { q: "Where can I get breakfast?", a: "Antoine's Café, West Toast Cafe, Pipes Cafe, and The Original Pancake House come up often. See the brunch page for details." },
      { q: "Is there good coffee in San Clemente?", a: "Yes, from Downtown cafes like Sur Coffee and Kuli Coffee to pier-area spots and local roasters such as Rapport." },
      { q: "Do I need reservations?", a: "Often yes on weekends and in summer. Confirm with each restaurant." },
    ],
  },
  "local-tips": {
    sections: [
      {
        h: "The year in San Clemente",
        table: {
          caption: "A seasonal rhythm",
          head: ["Season", "What to expect"],
          rows: [
            ["Winter", "Cooler and quieter; some guides suggest January to March for gray whale spotting"],
            ["Spring", "Pleasant temperatures and fewer crowds; coastal mornings can be gray"],
            ["Summer", "Warmest and busiest; Ocean Festival in July; beach parking fills early"],
            ["Fall", "Often calm and warm, with thinner crowds after summer"],
          ],
        },
      },
      {
        h: "Getting around without a car",
        paras: [
          "San Clemente is easier to navigate without a car than most Southern California cities. The Amtrak Pacific Surfliner and Metrolink both serve the city with stations in town; check [Pacific Surfliner](https://www.pacificsurfliner.com/) and [Metrolink](https://www.metrolinktrains.com/) for schedules. Local buses run through the [Orange County Transportation Authority](https://octa.net/), and the city has offered a free trolley service since 2016 per public sources, so confirm current routes with the city.",
          "Downtown and the Pier Bowl are the most walkable areas, and the beach trail links several of the best spots. See our [Downtown and Pier Bowl guide](/neighborhoods/downtown-pier-bowl) for what that looks like day to day.",
        ],
      },
      {
        h: "Tips for visitors and newcomers",
        list: [
          "**Visit twice.** Once on a weekday morning and once on a summer weekend, so you see both sides of town.",
          "**Dress in layers.** Coastal mornings and evenings can be cool even on warm days.",
          "**Learn the quiet hours.** Early mornings and weekdays are calmer at the pier and Downtown.",
          "**Respect local rules.** Surf hours, fire rings, and dog rules vary by beach.",
          "**Check the city calendar.** Events, closures, and programs are listed on [sanclemente.gov](https://www.sanclemente.gov/).",
        ],
      },
      {
        h: "Thinking of moving here?",
        paras: [
          "These small details are what daily life is made of. Our [moving guide](/blog/moving-to-san-clemente-what-to-know) goes deeper on costs, weather, and neighborhoods, and the [neighborhood comparison](/neighborhoods) shows which area fits the way you live.",
        ],
      },
    ],
    faqs: [
      { q: "Is San Clemente walkable?", a: "Downtown and the Pier Bowl are very walkable. Other areas are more car-based, though many have parks and trails." },
      { q: "When is the Ocean Festival?", a: "It's held each July at the pier. The 2026 edition was listed for July 18 to 19, but confirm dates each year on the official site." },
      { q: "Can I take the train to San Clemente?", a: "Yes. Amtrak's Pacific Surfliner and Metrolink both stop in town." },
      { q: "When is the best time to visit?", a: "Spring and fall are often calm and pleasant, while summer is lively and busy." },
    ],
  },
};

// Extra depth for the four food roundups.
export const foodExtras: Record<string, Extra> = {
  coffee: {
    sections: [
      {
        h: "Where to go by situation",
        table: {
          caption: "Pick your coffee stop",
          head: ["If you want...", "Try", "Why"],
          rows: [
            ["A cup before or after the beach", "Bear Coast Coffee, Happy Coffee Club", "Both are mentioned as pier-area options"],
            ["A walkable Downtown stroll", "Sur Coffee, Kuli Coffee, The Picnic Cafe", "All are close to Avenida Del Mar"],
            ["Beans from a local roaster", "Rapport", "A roaster on the Camino De Los Mares side of town"],
            ["Where the beach crowd goes", "High Tide", "A name that comes up for the beach scene"],
          ],
        },
      },
      {
        h: "Make a morning of it",
        paras: [
          "Grab a coffee near the pier, then follow the [beach trail](/blog/san-clemente-beach-trail-guide) toward T-Street or Calafia, with the ocean beside you. If you'd rather wander, Downtown's shops and Casa Romantica are a short walk from several of these cafes. Casa Romantica is a 1927 bluff-top cultural center, so confirm hours at [casaromantica.org](https://www.casaromantica.org/).",
          "Living within walking distance of your morning coffee is a big part of the appeal of the [Downtown and Pier Bowl](/neighborhoods/downtown-pier-bowl). If that sounds like your ideal week, it's worth a look.",
        ],
      },
      {
        h: "Before you go",
        list: [
          "**Check hours and menus.** They change, so confirm directly with the place.",
          "**Plan parking.** Downtown and the pier fill up on weekends and summer evenings, so park once and walk.",
          "**Ask about dietary needs.** Most places can explain what they can accommodate if you call ahead.",
          "**Allow extra time on weekends.** Popular spots can have a wait.",
          "**Beans to take home.** Local roasters like Rapport are worth asking about.",
        ],
        paras: ["Want more ideas? Browse the rest of our [food and drink picks](/lifestyle/food-drink), or see our [local tips](/lifestyle/local-tips) for parking, trains, and crowds."],
      },
    ],
    faqs: [{ q: "Which cafes are closest to the beach?", a: "Local guides point to Bear Coast Coffee and Happy Coffee Club near the pier. Confirm current locations before you go." },
      { q: "Are the cafes open early?", a: "Hours vary by cafe, so check each one. Many locals start with coffee before a walk on the beach trail." },
      { q: "Is there a local roaster in San Clemente?", a: "Rapport is one local roaster mentioned by coffee guides, on the Camino De Los Mares side of town." },
    ],
  },
  brunch: {
    sections: [
      {
        h: "Where to go by craving",
        table: {
          caption: "Pick your breakfast spot",
          head: ["If you want...", "Try", "Why"],
          rows: [
            ["A classic big brunch", "Antoine's Café", "A long-running favorite with generous portions"],
            ["Toast and coffee", "West Toast Cafe", "Known for toast and coffee"],
            ["A hearty local breakfast", "Pipes Cafe", "A loyal local following"],
            ["Diner-style pancakes", "The Original Pancake House", "Classic pancakes"],
          ],
        },
      },
      {
        h: "Plan your weekend morning",
        paras: [
          "Weekend brunch can mean a wait, so go early or pick a weekday. Parking near Downtown can be tight, so give yourself a few extra minutes, and consider walking from nearby streets. After brunch, the [beach trail](/blog/san-clemente-beach-trail-guide) is a natural next stop, and our [local tips guide](/lifestyle/local-tips) covers parking and crowds.",
          "If starting your weekends with a short walk to breakfast is the goal, read the [Downtown and Pier Bowl guide](/neighborhoods/downtown-pier-bowl), and compare other areas on the [neighborhoods page](/neighborhoods).",
        ],
      },
      {
        h: "Before you go",
        list: [
          "**Check hours and menus.** They change, so confirm directly with the place.",
          "**Plan parking.** Downtown and the pier fill up on weekends and summer evenings, so park once and walk.",
          "**Ask about dietary needs.** Most places can explain what they can accommodate if you call ahead.",
          "**Allow extra time on weekends.** Popular spots can have a wait.",
          "**Know the weekend rhythm.** Brunch lines tend to peak mid-morning on Saturdays and Sundays.",
        ],
        paras: ["Want more ideas? Browse the rest of our [food and drink picks](/lifestyle/food-drink), or see our [local tips](/lifestyle/local-tips) for parking, trains, and crowds."],
      },
    ],
    faqs: [{ q: "Which spots are good for a big group?", a: "Confirm directly with the restaurant. Group policies and reservations vary, especially on weekends." },
      { q: "Which spot is best for pancakes?", a: "The Original Pancake House is known for diner-style pancakes." },
      { q: "Where can I get a quick coffee and toast?", a: "West Toast Cafe is known for toast and coffee." },
    ],
  },
  dinner: {
    sections: [
      {
        h: "Where to go by occasion",
        table: {
          caption: "Pick your dinner",
          head: ["For...", "Try", "Why"],
          rows: [
            ["A dependable local classic", "Nick's San Clemente", "Appears on nearly every local list"],
            ["Elevated Mexican", "South of Nick's", "A Pier Bowl-area favorite"],
            ["Dinner before a pier walk", "The Vine", "A local suggestion for an easy evening"],
            ["Wine and dinner", "The Cellar", "A Downtown dinner and wine spot"],
            ["Sushi", "Dark Magic Sushi", "A sushi option locals mention"],
            ["A name that comes up often", "Zov's, Rare Society", "Both are Downtown dinner names"],
          ],
        },
      },
      {
        h: "Plan the evening",
        paras: [
          "Reserve ahead for weekends and summer evenings, park once, and walk. A common local plan is dinner in Downtown, then a stroll to the pier for the last of the light. See the [seafood and sunset picks](/lifestyle/food-drink/seafood-sunset) if you'd like the sunset to be part of dinner.",
          "Dinner out is one of the best arguments for living in the [Pier Bowl or Downtown](/neighborhoods/downtown-pier-bowl), where many of these places are within walking distance. For a more space-focused alternative, compare [Talega](/neighborhoods/talega) and [Forster Ranch](/neighborhoods/forster-ranch).",
        ],
      },
      {
        h: "Before you go",
        list: [
          "**Check hours and menus.** They change, so confirm directly with the place.",
          "**Plan parking.** Downtown and the pier fill up on weekends and summer evenings, so park once and walk.",
          "**Ask about dietary needs.** Most places can explain what they can accommodate if you call ahead.",
          "**Allow extra time on weekends.** Popular spots can have a wait.",
          "**Reserve for weekends.** Summer evenings book up, so call or book ahead where possible.",
        ],
        paras: ["Want more ideas? Browse the rest of our [food and drink picks](/lifestyle/food-drink), or see our [local tips](/lifestyle/local-tips) for parking, trains, and crowds."],
      },
    ],
    faqs: [{ q: "Where can I park for Downtown dinners?", a: "Parking varies and can be tight on weekends. Plan to park once and walk, and check current parking rules." },
      { q: "What's a good spot before a walk on the pier?", a: "Locals suggest The Vine for dinner before walking down to the pier." },
      { q: "Is there good sushi?", a: "Dark Magic Sushi is a sushi option locals mention." },
    ],
  },
  "seafood-sunset": {
    sections: [
      {
        h: "Where to go by plan",
        table: {
          caption: "Pick your seafood or sunset spot",
          head: ["If you want...", "Try", "Why"],
          rows: [
            ["A table with a sunset view", "Fisherman's Restaurant & Bar", "On the pier deck; people go for the setting"],
            ["Casual fish near the beach", "Seasurf Fish", "A casual seafood spot that locals mention"],
            ["The sunset without a reservation", "The San Clemente Pier", "Open about 4 a.m. to midnight; walk out at dusk"],
            ["More space and a quieter view", "Calafia Beach Park", "Open sand and room to spread out"],
          ],
        },
      },
      {
        h: "Timing your sunset",
        paras: [
          "Sunset over the Pacific is the headline event in San Clemente, so check the sunset time for your day and plan to arrive early, since the best seats and parking fill up. Bring a layer, because the pier can be breezy after the sun goes down, and consider a short walk on the [beach trail](/blog/san-clemente-beach-trail-guide) beforehand.",
          "If you don't want a restaurant, simply walking to the end of the pier or sitting on the sand at Calafia is a classic way to end the day. Our [beaches guide](/lifestyle/beaches) covers access and parking, and [how to pick your beach](/blog/how-to-choose-a-san-clemente-beach) helps you match a beach to your plan.",
        ],
      },
      {
        h: "Living near the water",
        paras: [
          "If sunsets and seafood are part of your ideal evening, the [Downtown and Pier Bowl](/neighborhoods/downtown-pier-bowl) area puts you steps from the pier. Compare it with the other five [neighborhoods](/neighborhoods) to see what fits.",
        ],
      },
      {
        h: "Before you go",
        list: [
          "**Check hours and menus.** They change, so confirm directly with the place.",
          "**Plan parking.** Downtown and the pier fill up on weekends and summer evenings, so park once and walk.",
          "**Ask about dietary needs.** Most places can explain what they can accommodate if you call ahead.",
          "**Allow extra time on weekends.** Popular spots can have a wait.",
          "**Bring a layer.** The pier and beaches can be breezy after sunset.",
        ],
        paras: ["Want more ideas? Browse the rest of our [food and drink picks](/lifestyle/food-drink), or see our [local tips](/lifestyle/local-tips) for parking, trains, and crowds."],
      },
    ],
    faqs: [
      { q: "Can I walk on the pier after dinner?", a: "Yes. The pier is open roughly 4 a.m. to midnight, so you can walk out after a meal." },
      { q: "Is there seafood on the pier?", a: "Travel guides mention a seafood restaurant on the pier's south side and an oyster bar on its north side. Fisherman's Restaurant & Bar is on the pier." },
          { q: "What's the best time to arrive for sunset?", a: "Arrive early, since seats and parking with a view fill up. Check the sunset time for your day." },
    ],
  },
};

// Neighborhoods hub extras
export const hubExtra: Extra = {
  sections: [
    {
      h: "How to choose a San Clemente neighborhood",
      text: "Start with how you want a normal week to feel, then match the area.",
      table: {
        caption: "Choose by what matters most",
        head: ["If you care most about...", "Start with", "Why"],
        rows: [
          ["Walking to the pier, beach, and dinner", "[Downtown & Pier Bowl](/neighborhoods/downtown-pier-bowl)", "The most walkable part of town"],
          ["Newer construction near a trail", "[Sea Summit](/neighborhoods/sea-summit)", "A master-planned community with Spanish-style homes"],
          ["More space, a short drive from the coast", "[Forster Ranch](/neighborhoods/forster-ranch)", "A hillside planned community"],
          ["A resident beach club and ocean-view lots", "[Shorecliffs](/neighborhoods/shorecliffs)", "A 504-home neighborhood developed from 1960"],
          ["Parks, shopping, and amenities close by", "[Talega](/neighborhoods/talega)", "A large master-planned community of 30+ neighborhoods"],
          ["Elevation and views", "[Rancho San Clemente](/neighborhoods/rancho-san-clemente)", "An elevated hillside setting"],
        ],
      },
    },
    {
      h: "What each guide covers",
      paras: [
        "Every neighborhood guide follows the same structure so you can compare areas side by side: an at-a-glance table, what daily life feels like, the homes, how to get around, a pre-offer checklist, and a comparison with the other areas. Each one also links to live listings and the local guides that matter for that part of town.",
        "Because neighborhood-level prices swing with only a handful of sales a month, the guides pair citywide market data with a direct way to request recent sales for the streets you like. Read our latest [market update](/blog/san-clemente-housing-market-update-october-2026), then ask for numbers on your exact street.",
      ],
    },
    {
      h: "Go deeper",
      list: [
        "[Pier Bowl vs. Talega](/blog/pier-bowl-vs-talega): a head-to-head of two very different ways to live here",
        "[Moving to San Clemente](/blog/moving-to-san-clemente-what-to-know): an honest checklist before you commit",
        "[Buying a single-family home](/blog/buying-a-single-family-home-in-san-clemente): the step-by-step process",
        "[Local guides](/lifestyle): beaches, parks, food, and insider tips",
      ],
    },
  ],
  faqs: [
    { q: "How many neighborhoods are in San Clemente?", a: "We profile six main areas here: Downtown & Pier Bowl, Sea Summit, Forster Ranch, Shorecliffs, Talega, and Rancho San Clemente. Talega itself contains more than 30 neighborhoods." },
    { q: "Which neighborhood is closest to the beach?", a: "Downtown and the Pier Bowl, where many homes are within walking distance of the pier and the beach trail." },
    { q: "Which area has the newest homes?", a: "Sea Summit and Talega have newer construction than the coastal core." },
    { q: "How do I get prices for a specific area?", a: "Neighborhood medians swing a lot, so ask Alex for recent sales on the exact street. See the [contact form](/#contact)." },
    { q: "Where can I see live listings?", a: "Each neighborhood guide links to live listings. You can also compare areas side by side here." },
  ],
};

// Home value extras
export const homeValueExtra: Extra = {
  sections: [
    {
      h: "What affects your home's value",
      table: {
        caption: "Factors that move a San Clemente home's value",
        head: ["Factor", "Why it matters"],
        rows: [
          ["Location and street", "Walkability, proximity to the coast, and the surrounding area change value block to block"],
          ["View and orientation", "Ocean views and light vary lot by lot and can swing value significantly"],
          ["Condition and updates", "Roof, kitchens, baths, and systems influence buyers' offers"],
          ["Lot and layout", "Lot size, parking, and floor plan matter, especially for single-family homes"],
          ["Recent nearby sales", "Comparable closed sales are the strongest guide to price"],
          ["Market timing", "Inventory, time to sell, and sale-to-list ratio shape pricing power"],
        ],
      },
    },
    {
      h: "How to prepare for a valuation",
      list: [
        "**Gather basics:** the address, year built, square footage, and any recent upgrades.",
        "**Note what's changed:** remodels, new roofs, solar, or other improvements.",
        "**Be honest about condition:** it helps produce a number you can trust.",
        "**Think about timing:** if you're planning to sell, ask about how the market looks now. See our [market update](/blog/san-clemente-housing-market-update-october-2026).",
      ],
    },
    {
      h: "What happens next",
      paras: [
        "Alex reviews recent sales near your home and compares them with your property's location, condition, lot, and view. You'll get a clear read on value and what could move it. If you decide to sell, you can start with a pricing strategy and a plan; if you're just curious, there's no obligation. If you're also exploring a purchase, compare [neighborhoods](/neighborhoods) or read our [buying guide](/blog/buying-a-single-family-home-in-san-clemente).",
      ],
    },
  ],
  faqs: [
    { q: "What do I need to provide?", a: "Your property address and a few details about the home. Photos and a list of upgrades help." },
    { q: "Does a valuation replace an appraisal?", a: "No. An appraisal is a formal valuation, often ordered by a lender. A valuation from Alex is an informed pricing read based on comparable sales." },
    { q: "Will you list my home if I ask for a valuation?", a: "Only if you want to. A valuation carries no obligation." },
  ],
};

// Lifestyle hub extras
export const lifestyleHubExtra: Extra = {
  sections: [
    {
      h: "How to use this guide",
      paras: [
        "San Clemente is easy to love and easier to enjoy when you know a few local details. This section of the site collects those details: where the beaches are and how to park, which trails fit which mood, where locals eat, and the insider notes that make a day smoother. Each guide links to maps, official sources, and the neighborhoods closest to what you're reading about.",
        "If you're visiting, start with the [beaches](/lifestyle/beaches) and [food and drink](/lifestyle/food-drink) guides. If you're thinking of moving, pair these with our [neighborhood guides](/neighborhoods) and our honest [moving checklist](/blog/moving-to-san-clemente-what-to-know).",
      ],
    },
  ],
  faqs: [
    { q: "Is San Clemente good for outdoor activities?", a: "Yes. The beaches, the beach trail, the cliffside Sea Summit Trail, and neighborhood parks give you plenty of options. See the [parks and trails guide](/lifestyle/parks-trails)." },
    { q: "What's the best way to explore?", a: "Start at the pier, walk the [beach trail](/blog/san-clemente-beach-trail-guide), and eat Downtown. The train makes a car-free day easy." },
    { q: "Where do I find restaurant and coffee picks?", a: "See the [food and drink guide](/lifestyle/food-drink) and its coffee, brunch, dinner, and sunset pages." },
    { q: "How does this connect to buying a home?", a: "The neighborhoods you choose shape daily life. Each [neighborhood guide](/neighborhoods) links to the beaches, parks, and eats closest to it." },
  ],
};
