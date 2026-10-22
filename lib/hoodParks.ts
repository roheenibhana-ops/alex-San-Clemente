// Parks near each neighborhood, from the City of San Clemente's Parks & Sport Fields list
// (https://www.sanclemente.gov/190/Parks-Sport-Fields). Park-to-neighborhood matches use the park's
// name or street; we do not claim walking distances. Rows: [park, address, what's there].
export const parksSource = { label: "City of San Clemente: Parks & Sport Fields", href: "https://www.sanclemente.gov/190/Parks-Sport-Fields" };

export const hoodParks: Record<string, { intro: string; rows: string[][] }> = {
  "forster-ranch": {
    intro: "These city parks sit in or along the edge of Forster Ranch, one on its main boundary street, Avenida Vista Hermosa.",
    rows: [
      ["Forster Ranch Community Park", "3207 Camino Vera Cruz", "Play area, tennis and volleyball courts, baseball/softball and soccer fields, BBQs, restrooms"],
      ["Vista Hermosa Sports Park", "987 Avenida Vista Hermosa", "Play area, baseball/softball and soccer fields, synthetic turf, BBQs, restrooms"],
      ["Jim Johnson Memorial Sports Park", "450 W. Avenida Vista Hermosa", "Play area, basketball court, soccer field, synthetic turf, BBQs, restrooms"],
      ["Courtney's Sandcastle Universally Accessible Playground", "987 Avenida Vista Hermosa", "Universally accessible play area, picnic area, restrooms"],
    ],
  },
  talega: {
    intro: "The City lists these parks in Talega. HOA parks inside individual Talega tracts are separate, so ask about those too.",
    rows: [
      ["Talega Park", "179 Corte Cristianitos", "Play area, basketball courts, baseball/softball and soccer fields, BBQs, restrooms"],
      ["Liberty Park", "390 Calle Saluda", "Play area, basketball and tennis courts, baseball/softball and soccer fields, restrooms"],
      ["Tierra Grande Park", "399 Camino Tierra Grande", "Play area, basketball court, baseball/softball and soccer fields, restrooms"],
    ],
  },
  "rancho-san-clemente": {
    intro: "The City's park for this area is Rancho San Clemente Park, open 6 a.m. to 10 p.m. daily according to its facility page.",
    rows: [
      ["Rancho San Clemente Park", "150 Calle Aguila", "Children's play area, basketball and volleyball courts, walking loop and exercise course, BBQs, ocean and mountain views, dogs on leash"],
    ],
  },
  "sea-summit": {
    intro: "Sea Summit sits on the former Marblehead Coastal property. The City lists a park in the Marblehead area. Check on a map how far it is from the specific home.",
    rows: [
      ["Marblehead Park", "2400 Via Turqueza", "Play area, basketball and tennis courts, BBQs, restrooms"],
    ],
  },
  "downtown-pier-bowl": {
    intro: "These city parks are on or near the Downtown and Pier Bowl side of town.",
    rows: [
      ["Parque Del Mar", "622 Avenida Del Mar", "Picnic area, beach access, ocean view, metered parking"],
      ["Linda Lane Park", "400 Linda Lane", "Play area, picnic area, beach access, ocean view, metered parking"],
      ["Pico Park", "315 Avenida Pico", "Play area, basketball court, BBQs, restrooms, ocean view"],
    ],
  },
};
