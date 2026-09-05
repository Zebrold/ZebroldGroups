/**
 * Products mega-menu structure + product detail data.
 *
 * IMAGE SOURCING NOTE: every `image` path below is a placeholder. None of
 * these files exist in /public yet — do not scrape or hotlink imagery from
 * boeing.com / airbus.com (copyright + hotlinking restrictions). Source or
 * license real photography at these paths before launch. See the full list
 * in the PR description / build summary.
 */

export const productCategories = [
  {
    id: 'commercial-aircrafts',
    label: 'Commercial Aircrafts',
    sublabel: 'Passenger',
    items: ['a321xlr', '777x'],
  },
  {
    id: 'freighter-aircrafts',
    label: 'Freighter Aircrafts',
    items: ['a350f'],
  },
  {
    id: 'aircraft-operations',
    label: 'Aircraft Operations',
    items: ['air-traffic-management'],
  },
  {
    id: 'motorsport',
    label: 'Motorsport',
    items: [],
  },
  {
    id: 'health-robotics',
    label: 'Health Robotics',
    items: [],
  },
];

export const products = {
  a321xlr: {
    slug: 'a321xlr',
    manufacturer: 'Airbus',
    name: 'Airbus A321XLR',
    category: 'Commercial Aircrafts',
    categoryId: 'commercial-aircrafts',
    tagline: 'The longest range of any single-aisle airliner.',
    image: '/images/products/a321xlr/hero.jpg',
    specs: [
      { label: 'Range', value: 'Up to 4,700 nm (8,700 km)' },
      { label: 'Max Take-Off Weight', value: '101 tonnes' },
      { label: 'Typical Seating', value: '180–220 passengers (two-class)' },
      { label: 'Rear Centre Tank', value: '12,900 L · +10.6t extra fuel' },
      { label: 'Engines', value: 'CFM LEAP-1A or Pratt & Whitney PW1100G' },
      { label: 'Positioning', value: "Longest range of any single-aisle airliner" },
    ],
    features: [
      {
        icon: 'route',
        title: 'Longest Single-Aisle Range',
        desc: 'Opens long-haul routes previously only viable with widebody aircraft.',
      },
      {
        icon: 'fuel',
        title: 'Permanent Rear Centre Tank',
        desc: 'A 12,900-litre RCT adds roughly 10.6 tonnes of extra fuel capacity.',
      },
      {
        icon: 'seat',
        title: 'Widebody Comfort, Narrowbody Economics',
        desc: 'Seats 180–220 passengers with the lower operating cost of a single-aisle jet.',
      },
      {
        icon: 'engine',
        title: 'Modern Engine Choice',
        desc: 'Powered by CFM LEAP-1A or Pratt & Whitney PW1100G engines.',
      },
    ],
  },

  '777x': {
    slug: '777x',
    manufacturer: 'Boeing',
    name: 'Boeing 777X',
    category: 'Commercial Aircrafts',
    categoryId: 'commercial-aircrafts',
    tagline: 'The largest, most efficient twin-engine jet ever built.',
    image: '/images/products/777x/hero.jpg',
    specs: [
      { label: 'Wingspan (in flight)', value: '71.8 m — folding wingtips for gate compatibility' },
      { label: 'Fuel & Emissions', value: '~20% lower vs. the aircraft it replaces' },
      { label: 'Operating Cost', value: '~10% lower than the competition' },
      { label: 'Noise Footprint', value: '~40% smaller' },
      { label: 'Engines', value: 'GE9X — 134-inch fan diameter' },
      { label: 'Wing', value: 'New composite carbon-fibre wing — largest ever on a Boeing airliner' },
    ],
    features: [
      {
        icon: 'wing',
        title: 'Folding Composite Wing',
        desc: 'A new carbon-fibre wing — the largest ever fitted to a Boeing airliner — with folding tips for gate compatibility.',
      },
      {
        icon: 'engine',
        title: 'GE9X Engines',
        desc: 'The largest, most advanced commercial turbofan ever certified, at 134 inches in fan diameter.',
      },
      {
        icon: 'leaf',
        title: '~20% Lower Fuel & Emissions',
        desc: 'Roughly 20% lower fuel use and emissions, and ~10% lower operating costs than the competition.',
      },
      {
        icon: 'cabin',
        title: 'New Sky Interior',
        desc: 'A wider 5.97 m fuselage, larger windows set higher, bigger overhead bins, and a lower cabin altitude for comfort.',
      },
    ],
  },

  a350f: {
    slug: 'a350f',
    manufacturer: 'Airbus',
    name: 'Airbus A350F',
    category: 'Freighter Aircrafts',
    categoryId: 'freighter-aircrafts',
    tagline: 'A next-generation freighter, built for the standards of tomorrow.',
    image: '/images/products/a350f/hero.jpg',
    specs: [
      { label: 'Payload', value: 'Up to 111 tonnes' },
      { label: 'Range', value: 'Up to 4,700 nm (8,700 km) at full payload' },
      { label: 'Platform', value: 'Based on the A350-1000 — Rolls-Royce Trent XWB-97 engines' },
      { label: 'Main-Deck Cargo', value: '30 pallets (96×125") — largest main-deck door in class' },
      { label: 'Lower-Deck Cargo', value: '12 pallets + LD3 containers' },
      { label: 'Climate Control', value: '4°C–26°C per compartment — livestock & pharma capable' },
    ],
    features: [
      {
        icon: 'door',
        title: 'Largest Main-Deck Cargo Door',
        desc: 'The largest main-deck cargo door in its class, holding 30 pallets on the main deck alone.',
      },
      {
        icon: 'leaf',
        title: 'Lightweight, Efficient Airframe',
        desc: 'Over 70% advanced lightweight materials — roughly 30 tonnes lighter take-off weight than direct competitors.',
      },
      {
        icon: 'shield',
        title: 'First to Meet ICAO 2027 Standards',
        desc: "The first freighter built to meet ICAO's 2027 CO2 emissions standard.",
      },
      {
        icon: 'thermometer',
        title: 'Precision Climate Control',
        desc: 'Fine temperature control from 4°C to 26°C per compartment, supporting livestock and pharma transport.',
      },
    ],
  },

  'air-traffic-management': {
    slug: 'air-traffic-management',
    manufacturer: 'Airbus',
    name: 'Air Traffic Management',
    category: 'Aircraft Operations',
    categoryId: 'aircraft-operations',
    tagline: 'Digital infrastructure for safer, more efficient airspace.',
    image: '/images/products/air-traffic-management/hero.jpg',
    specs: [
      { label: 'Focus', value: 'Optimised flight trajectories & unmanned traffic integration' },
      { label: 'Core Aim', value: 'Reduce CO2, NOx, contrails, and noise pollution' },
      { label: 'Key Initiative', value: 'Airbus UTM — Unmanned Traffic Management' },
      { label: 'Technology', value: 'Digital-twin simulation environments for concept validation' },
      { label: 'Positioning', value: 'Part of a broader "sustainable aerospace" strategy' },
    ],
    features: [
      {
        icon: 'route',
        title: 'Optimised Flight Trajectories',
        desc: 'Digital solutions that make every flight more efficient, from planning through descent.',
      },
      {
        icon: 'drone',
        title: 'Airbus UTM',
        desc: 'Digital infrastructure enabling safe, scalable airspace sharing between crewed aircraft and drones or eVTOLs.',
      },
      {
        icon: 'twin',
        title: 'Digital-Twin Simulation',
        desc: 'Operational concepts are tested and validated in simulation before real-world deployment.',
      },
      {
        icon: 'leaf',
        title: 'Sustainable Aerospace',
        desc: 'Reduces CO2, NOx, contrails, and noise pollution through smarter flight operations.',
      },
    ],
  },
};

export function getProduct(slug) {
  return products[slug];
}
