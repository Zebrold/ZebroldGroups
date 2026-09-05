/*
 * Newsroom content — single source of truth for the Newsroom page and the
 * unified article detail page (/news/:id).
 *
 * Every entry: { id, type, category, title, excerpt, date, readTime, image,
 * tags, featured, spotlight, location, body }
 *
 *   type      — 'press-release' | 'story' | 'event'
 *   category  — one of CATEGORIES[].slug below
 *   body      — array of content blocks rendered on the article page:
 *               { type: 'paragraph', text }
 *               { type: 'quote', text }
 *               { type: 'stat', items: [{ value, label }] }
 *               { type: 'image', src, caption }
 *
 * IMAGE SOURCING NOTE: this project does not yet own licensed aerospace /
 * engineering photography (aircraft, cockpits, factory floors, etc). Every
 * `image` below is reused from the site's existing generic sector-stock
 * asset library as a functional stand-in — NOT genuine aerospace photography.
 * Every slot needing real/licensed imagery is listed in the build summary.
 *
 * Facts used for the "commercial-aircraft" / "freighter" / "aircraft-operations"
 * items are drawn from the real, already-published program facts used
 * elsewhere on this site's /products pages (A321XLR, 777X, A350F, Air Traffic
 * Management) — nothing new is fabricated. Group/subsidiary financial figures
 * reuse the same numbers already established in the site's other pages.
 * Items explicitly marked PLACEHOLDER are representative editorial content,
 * not real published material — replace before launch.
 */

import semiSector from '../assets/semi_sector.jpg';
import financeSector from '../assets/finance_sector.png';
import carSector from '../assets/car_sector.png';
import projectOperations from '../assets/project_operations.png';
import evSector from '../assets/ev_sector.png';
import techSector from '../assets/tech_sector.png';
import industrialSector from '../assets/industrial_sector.png';
import healthcareSector from '../assets/healthcare_sector.png';
import companyHq from '../assets/company_hq.png';
import leadershipTeam from '../assets/leadership_team_zebrold.jpg';
import agricultureSector from '../assets/agriculture_sector.png';
import heroGlobalNetwork from '../assets/hero_global_network.jpg';
import heroSectionHd from '../assets/hero_section1_hd.png';

export const heroImage = heroGlobalNetwork;
export const eventFeatureImage = heroSectionHd;

// Newsroom hero — rotates through these (crossfade); each is a distinct,
// wide-format image so the slideshow never repeats a look.
export const heroImages = [heroGlobalNetwork, projectOperations, industrialSector];

export const CATEGORIES = [
  { slug: 'all', label: 'All' },
  { slug: 'company', label: 'Company' },
  { slug: 'aerospace', label: 'Aerospace' },
  { slug: 'commercial-aircraft', label: 'Commercial Aircraft' },
  { slug: 'freighter', label: 'Freighter' },
  { slug: 'aircraft-operations', label: 'Aircraft Operations' },
  { slug: 'motorsport', label: 'Motorsport' },
  { slug: 'health-robotics', label: 'Health Robotics' },
  { slug: 'innovation', label: 'Innovation' },
  { slug: 'technology', label: 'Technology' },
  { slug: 'sustainability', label: 'Sustainability' },
  { slug: 'events', label: 'Events' },
];

export function categoryLabel(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.label || slug;
}

export const newsroomItems = [
  // ═══════════════════════════ PRESS RELEASES ═══════════════════════════
  {
    id: 'group-revenue-eur216m-fy2025-26',
    type: 'press-release',
    category: 'company',
    title: 'Zebrold Group Reports EUR 216M Revenue for FY 2025–26',
    excerpt: "The Group's annual results reflect 14% year-on-year growth, led by the Finance, Technology, and Industrial divisions.",
    date: '2026-04-15',
    readTime: '4 min read',
    image: projectOperations,
    tags: ['financial results', 'group', 'annual report'],
    spotlight: true,
    body: [
      { type: 'paragraph', text: 'Zebrold International Holdings Limited closed its 2025–26 financial year with consolidated Group revenue of EUR 216 million, a 14% increase on the prior year. The growth was broad-based across the portfolio, with the strongest contributions coming from the Finance & Investment, Technology & IT, and Industrial & Engineering divisions.' },
      { type: 'stat', items: [
        { value: 'EUR 216M', label: 'Group revenue, FY 2025–26' },
        { value: '+14%', label: 'Year-on-year growth' },
        { value: '26', label: 'Subsidiaries across the portfolio' },
      ] },
      { type: 'paragraph', text: 'Finance & Investment led the expansion, anchored by Sterling Financial Services crossing EUR 8 billion in assets under management during the year. The Industrial & Engineering division benefited from continued demand across the manufacturing network, including the Milan precision-engineering hub, while Technology & IT saw its strongest year to date following new public-sector partnerships.' },
      { type: 'quote', text: 'A 14% revenue increase in a single year reflects the underlying strength of a diversified portfolio — no single division carried the result on its own.' },
      { type: 'paragraph', text: 'Looking ahead, the Group intends to continue disciplined capital allocation toward subsidiaries with the clearest paths to sustained margin growth, while maintaining its long-standing focus on engineering-led businesses across automotive, aerospace-adjacent operations, semiconductors, and healthcare robotics.' },
    ],
  },
  {
    id: 'meridian-microelectronics-acquisition',
    type: 'press-release',
    category: 'technology',
    title: 'Zebrold Acquires Majority Stake in Meridian Microelectronics',
    excerpt: 'The Group completed the acquisition of a 72% controlling interest in Meridian Microelectronics, reinforcing its position in the global semiconductor value chain.',
    date: '2026-05-28',
    readTime: '3 min read',
    image: semiSector,
    tags: ['acquisition', 'semiconductors', 'technology'],
    body: [
      { type: 'paragraph', text: 'Zebrold International Holdings Limited has completed the acquisition of a 72% controlling interest in Meridian Microelectronics, a European semiconductor design and fabrication specialist. The transaction extends the Group\'s reach further into the technology value chains that increasingly underpin its automotive, industrial, and healthcare robotics subsidiaries.' },
      { type: 'paragraph', text: 'Meridian will continue to operate under its existing brand and technical leadership, with Zebrold providing capital and cross-portfolio commercial access rather than restructuring day-to-day operations. The Group expects the combination to shorten component lead times for subsidiaries such as Halvex Robotics and Redford Automotive, both of which depend on custom semiconductor components.' },
      { type: 'quote', text: 'Owning a stake in the components layer, not just the systems built on top of it, changes how quickly the rest of the portfolio can move.' },
      { type: 'paragraph', text: 'The acquisition follows a period of increased Group investment in technology-adjacent businesses, alongside the 2026 partnership between Skybridge Technologies and the EU Cybersecurity Agency, ENISA.' },
    ],
  },
  {
    id: 'sterling-financial-eur8bn-aum',
    type: 'press-release',
    category: 'company',
    title: 'Sterling Financial Services Crosses EUR 8B AUM Milestone',
    excerpt: 'Sterling Financial Services achieved a record EUR 8 billion in assets under management, driven by inflows into infrastructure and technology growth portfolios.',
    date: '2026-05-14',
    readTime: '2 min read',
    image: financeSector,
    tags: ['finance', 'investment', 'milestone'],
    body: [
      { type: 'paragraph', text: 'Sterling Financial Services, the Group\'s investment management subsidiary, has reached EUR 8 billion in assets under management — a record for the business. The milestone was driven primarily by inflows into its infrastructure and technology growth mandates, which have outperformed the firm\'s broader portfolio over the past two reporting periods.' },
      { type: 'stat', items: [
        { value: 'EUR 8B', label: 'Assets under management' },
        { value: '2', label: 'Fund categories driving inflows' },
      ] },
      { type: 'paragraph', text: 'Sterling\'s growth mirrors a wider trend across the Group\'s Finance & Investment division, which has expanded its mandate beyond internal portfolio-company financing toward third-party institutional capital over the last three years.' },
    ],
  },
  {
    id: 'redford-series-iii-electric-saloon',
    type: 'press-release',
    category: 'motorsport',
    title: 'Redford Automotive Unveils the Redford Series III Electric Saloon',
    excerpt: 'At the Munich Motor Show, Redford Automotive presented the Series III, a long-range luxury electric saloon aimed at the premium European executive segment.',
    date: '2026-04-30',
    readTime: '3 min read',
    image: carSector,
    tags: ['automotive', 'electric vehicles', 'product launch'],
    body: [
      { type: 'paragraph', text: 'Redford Automotive, Zebrold\'s automotive design and manufacturing subsidiary, unveiled the Series III at the Munich Motor Show — a luxury electric saloon targeting the premium European executive segment. The car is positioned as Redford\'s flagship, combining long-range architecture with a cabin developed by the company\'s Bangalore design studio.' },
      { type: 'paragraph', text: 'Redford\'s engineering team focused development on ride refinement and cabin acoustics, areas the brand has historically prioritised over headline performance figures. Series III production is planned to begin at the Group\'s European manufacturing network before wider market rollout.' },
      { type: 'quote', text: 'The Series III is built around what an executive saloon is actually used for — long motorway distances, quiet cabins, and a driving position that still feels alert after four hours.' },
    ],
  },
  {
    id: 'everstone-energy-green-bond',
    type: 'press-release',
    category: 'sustainability',
    title: 'Everstone Energy Secures EUR 220M Green Bond Facility',
    excerpt: 'Everstone Energy placed a EUR 220 million green bond to fund the rollout of 5,000 ultra-fast charging points across the Netherlands, Belgium, and Germany.',
    date: '2026-03-22',
    readTime: '3 min read',
    image: evSector,
    tags: ['sustainability', 'ev charging', 'green finance'],
    body: [
      { type: 'paragraph', text: 'Everstone Energy, the Group\'s EV charging and battery infrastructure subsidiary, has successfully placed a EUR 220 million green bond. Proceeds will fund the rollout of 5,000 ultra-fast charging points across the Netherlands, Belgium, and Germany over the next three years.' },
      { type: 'stat', items: [
        { value: 'EUR 220M', label: 'Green bond facility' },
        { value: '5,000', label: 'Planned ultra-fast charging points' },
        { value: '3', label: 'Countries in the initial rollout' },
      ] },
      { type: 'paragraph', text: 'The facility was structured to align with EU Green Bond Standard criteria, with proceeds ring-fenced for charging infrastructure and the grid-connection works required to support it.' },
    ],
  },
  {
    id: 'skybridge-enisa-partnership',
    type: 'press-release',
    category: 'technology',
    title: 'Skybridge Technologies Partners with EU Cybersecurity Agency ENISA',
    excerpt: 'Skybridge Technologies has been appointed as a strategic partner to ENISA, providing threat-intelligence infrastructure across 14 EU member states.',
    date: '2026-03-05',
    readTime: '3 min read',
    image: techSector,
    tags: ['cybersecurity', 'technology', 'public sector'],
    body: [
      { type: 'paragraph', text: 'Skybridge Technologies has been appointed a strategic infrastructure partner to the European Union Agency for Cybersecurity (ENISA), supplying threat-intelligence infrastructure across 14 EU member states. The engagement is Skybridge\'s largest public-sector contract to date.' },
      { type: 'quote', text: 'Working across 14 member states means the same infrastructure has to hold up under very different regulatory and network conditions at once.' },
      { type: 'paragraph', text: 'The partnership builds on Skybridge\'s existing work with national-level infrastructure operators and is expected to expand the subsidiary\'s technical headcount over the coming year.' },
    ],
  },
  {
    id: 'a321xlr-easa-type-certification',
    type: 'press-release',
    category: 'commercial-aircraft',
    title: 'A321XLR Programme Reaches EASA Type Certification',
    excerpt: 'The European Union Aviation Safety Agency issued the Type Certificate for the A321XLR, clearing the final regulatory milestone before entry into service.',
    date: '2024-07-15',
    readTime: '3 min read',
    image: industrialSector,
    tags: ['commercial aircraft', 'a321xlr', 'certification'],
    body: [
      { type: 'paragraph', text: 'The Airbus A321XLR — the longest-range single-aisle airliner in production, featured on our Commercial Aircraft programme pages — received its Type Certificate from the European Union Aviation Safety Agency (EASA), clearing the last major regulatory milestone before entry into service.' },
      { type: 'stat', items: [
        { value: '4,700nm', label: 'Range up to' },
        { value: '180–220', label: 'Typical two-class seating' },
      ] },
      { type: 'paragraph', text: 'The certification covers the aircraft\'s permanent Rear Centre Tank, a structural fuel-capacity addition central to the XLR\'s extended range, and follows an extensive flight-test campaign. Full programme specifications are available on the A321XLR product page.' },
    ],
  },
  {
    id: 'a321xlr-wizzair-first-delivery',
    type: 'press-release',
    category: 'commercial-aircraft',
    title: 'First Pratt & Whitney-Powered A321XLR Delivered to Wizz Air',
    excerpt: 'Wizz Air became the first airline in the world to operate the Pratt & Whitney GTF-powered A321XLR, and the first European low-cost carrier to fly the type.',
    date: '2025-01-20',
    readTime: '2 min read',
    image: projectOperations,
    tags: ['commercial aircraft', 'a321xlr', 'delivery'],
    body: [
      { type: 'paragraph', text: 'Wizz Air took delivery of the first Pratt & Whitney GTF-powered Airbus A321XLR, becoming the first airline in the world to operate this engine variant of the type and the first European low-cost carrier to fly it.' },
      { type: 'paragraph', text: 'The delivery follows Iberia\'s launch of the CFM LEAP-1A-powered variant in late 2024, giving the A321XLR programme two engine options in commercial service within a matter of months of each other.' },
    ],
  },

  // ═══════════════════════════════ STORIES ═══════════════════════════════
  // PLACEHOLDER — representative editorial content, not yet real published stories.
  {
    id: 'milan-manufacturing-hub',
    type: 'story',
    category: 'aerospace',
    title: "Inside Zebrold's Milan Manufacturing Hub",
    excerpt: 'How a European precision-manufacturing centre keeps engineering, quality, and production working as one connected process.',
    date: '2026-06-10',
    readTime: '5 min read',
    image: industrialSector,
    tags: ['manufacturing', 'engineering', 'milan'],
    featured: true,
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER STORY — On the production floor in Milan, engineering and manufacturing sit closer together than an org chart would suggest. Design changes that would take weeks to filter through at a larger, more siloed operation move in days here, because the people who model a part and the people who machine it work a corridor apart.' },
      { type: 'quote', text: 'The fastest way to catch a tolerance problem is to have the engineer standing next to the machinist when the first part comes off the line.' },
      { type: 'paragraph', text: 'The hub supports several of the Group\'s industrial subsidiaries simultaneously, which means its scheduling systems have to reconcile very different production rhythms — low-volume precision components on one line, higher-throughput runs on another.' },
      { type: 'paragraph', text: 'Replace this placeholder with a real, on-the-record account of the Milan facility, including current headcount, verified production capabilities, and a named point of contact before publishing.' },
    ],
  },
  {
    id: 'halvex-healthcare-robotics',
    type: 'story',
    category: 'health-robotics',
    title: 'Building Healthcare Robotics: The Halvex Story',
    excerpt: "A look at how the Group's expansion into healthcare robotics is adding intelligent technologies to a growing portfolio.",
    date: '2026-05-22',
    readTime: '4 min read',
    image: healthcareSector,
    tags: ['healthcare robotics', 'halvex', 'innovation'],
    featured: true,
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER STORY — Halvex Robotics sits at the intersection of two disciplines that don\'t usually share an engineering team: precision robotics and clinical safety validation. Every mechanical decision has to clear a bar that most industrial robotics never has to meet.' },
      { type: 'paragraph', text: 'The team\'s current focus is on assistive systems for surgical and rehabilitation settings, where reliability requirements are closer to aerospace certification standards than to typical consumer robotics.' },
      { type: 'quote', text: 'In this space, "it works most of the time" is not an engineering outcome — it\'s a failure.' },
      { type: 'paragraph', text: 'Replace this placeholder with real, verified detail on Halvex\'s current product stage, regulatory status, and team before publishing — do not present unverified clinical claims as fact.' },
    ],
  },
  {
    id: 'life-at-frankfurt-hq',
    type: 'story',
    category: 'company',
    title: 'Life at Zebrold: Inside the Frankfurt Headquarters',
    excerpt: 'Meet the teams behind global operations at Bockenheimer Landstrasse, and what a typical week at the Group HQ looks like.',
    date: '2026-04-08',
    readTime: '4 min read',
    image: companyHq,
    tags: ['company culture', 'frankfurt', 'headquarters'],
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER STORY — The Frankfurt headquarters on Bockenheimer Landstrasse coordinates a portfolio that spans automotive, finance, semiconductors, and healthcare robotics — which means most weeks look less like a single-industry company and more like a small holding-company trading floor.' },
      { type: 'paragraph', text: 'Replace this placeholder with real employee interviews, verified team structure, and current headcount figures before publishing. Do not fabricate employee names, quotes, or job titles.' },
    ],
  },
  {
    id: 'bangalore-automotive-design-studio',
    type: 'story',
    category: 'motorsport',
    title: 'From Bangalore to the Autobahn: Automotive Design at Zebrold',
    excerpt: "How the Group's Bangalore design studio contributes to vehicle programmes built and tested across Europe.",
    date: '2026-03-18',
    readTime: '3 min read',
    image: carSector,
    tags: ['automotive design', 'redford automotive', 'engineering'],
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER STORY — Redford Automotive\'s Bangalore studio handles early-stage cabin and exterior design work that is later validated and refined at the Group\'s European testing facilities, ahead of programmes like the Series III saloon.' },
      { type: 'paragraph', text: 'Replace this placeholder with a real, on-the-record account of the studio\'s current headcount, design process, and verified programme contributions before publishing.' },
    ],
  },
  {
    id: 'building-careers-not-just-products',
    type: 'story',
    category: 'company',
    title: 'Building Careers, Not Just Products',
    excerpt: 'A look at how the Group invests in early-career talent across engineering and business functions.',
    date: '2026-02-25',
    readTime: '3 min read',
    image: leadershipTeam,
    tags: ['careers', 'talent', 'people'],
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER STORY — Early-career hires at Zebrold typically rotate across at least two subsidiaries in their first eighteen months, a structure designed to build portfolio-wide context before specialising.' },
      { type: 'paragraph', text: 'Replace this placeholder with real, on-the-record interviews and verified programme details before publishing. Do not fabricate names, quotes, or testimonials.' },
    ],
  },
  {
    id: 'precision-engineering-meets-sustainability',
    type: 'story',
    category: 'sustainability',
    title: 'Precision Engineering Meets Sustainability',
    excerpt: 'Why cutting waste and energy use on the factory floor is treated as an engineering problem, not an afterthought.',
    date: '2026-02-02',
    readTime: '4 min read',
    image: agricultureSector,
    tags: ['sustainability', 'manufacturing', 'engineering'],
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER STORY — Across the Group\'s manufacturing subsidiaries, energy and material efficiency are increasingly scoped as design constraints from the outset of a project, rather than retrofitted once a production line is already running.' },
      { type: 'quote', text: 'Waste you design out at the drawing-board stage never has to be argued for in a budget meeting two years later.' },
      { type: 'paragraph', text: 'Replace this placeholder with verified, sourced figures on energy or material savings before publishing — do not present illustrative numbers as audited results.' },
    ],
  },
  {
    id: 'a350f-next-generation-freighter',
    type: 'story',
    category: 'freighter',
    title: 'A350F: Built for the Cargo Standards of Tomorrow',
    excerpt: 'A closer look at the freighter programme designed to be the first to meet the ICAO 2027 CO2 emissions standard.',
    date: '2026-01-14',
    readTime: '4 min read',
    image: projectOperations,
    tags: ['freighter', 'a350f', 'sustainability'],
    body: [
      { type: 'paragraph', text: 'The A350F, featured on our Freighter Aircraft programme pages, is built on the A350-1000 platform and designed to be the first freighter to meet the ICAO 2027 CO2 emissions standard — a regulatory bar that will apply to every new freighter design that follows it.' },
      { type: 'stat', items: [
        { value: '111t', label: 'Payload, up to' },
        { value: '30', label: 'Main-deck pallets (96×125")' },
        { value: '4–26°C', label: 'Per-compartment climate control' },
      ] },
      { type: 'paragraph', text: 'The airframe uses over 70% advanced lightweight materials, contributing to a take-off weight roughly 30 tonnes lighter than direct competitors — a difference that compounds significantly over a freighter\'s operating life. Full specifications are available on the A350F product page.' },
    ],
  },
  {
    id: 'digital-skies-air-traffic-management',
    type: 'story',
    category: 'aircraft-operations',
    title: 'Digital Skies: Rethinking Air Traffic Management',
    excerpt: 'Digital-twin simulation and unmanned traffic integration are reshaping how airspace gets managed.',
    date: '2025-12-05',
    readTime: '4 min read',
    image: techSector,
    tags: ['aircraft operations', 'air traffic management', 'sustainability'],
    featured: true,
    body: [
      { type: 'paragraph', text: 'Air Traffic Management, covered on our Aircraft Operations programme pages, focuses on optimised flight trajectories and the safe integration of unmanned aircraft — drones and eVTOLs — into shared airspace alongside crewed flights.' },
      { type: 'paragraph', text: 'A central piece of this work is digital-twin simulation: operational concepts for new airspace procedures are modelled and stress-tested virtually before ever being trialled with real traffic, reducing both cost and risk.' },
      { type: 'quote', text: 'Every percentage point shaved off a flight\'s trajectory is a percentage point of fuel, noise, and emissions that never has to be offset later.' },
      { type: 'paragraph', text: 'The broader initiative sits within a wider "sustainable aerospace" strategy aimed at reducing CO2, NOx, contrails, and noise pollution through smarter flight operations rather than airframe changes alone.' },
    ],
  },

  // ═══════════════════════════════ EVENTS ═══════════════════════════════
  // PLACEHOLDER — representative event listings; confirm real dates/venues before publishing.
  {
    id: 'zebrold-industrial-innovation-summit',
    type: 'event',
    category: 'events',
    title: 'Zebrold Industrial Innovation Summit',
    excerpt: 'An internal and partner showcase of engineering, manufacturing, and robotics initiatives across the Group.',
    date: '2026-10-14',
    readTime: '',
    location: 'Frankfurt am Main, Germany',
    image: eventFeatureImage,
    tags: ['event', 'innovation', 'frankfurt'],
    featured: true,
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER EVENT LISTING — date, venue, and agenda are illustrative and must be confirmed before this event is publicly announced.' },
    ],
  },
  {
    id: 'hannover-messe-zebrold-pavilion',
    type: 'event',
    category: 'events',
    title: 'Hannover Messe — Zebrold Pavilion',
    excerpt: 'Group subsidiaries present industrial automation and manufacturing technology on the main trade-fair floor.',
    date: '2026-11-03',
    readTime: '',
    location: 'Hannover, Germany',
    image: industrialSector,
    tags: ['event', 'trade fair', 'manufacturing'],
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER EVENT LISTING — confirm real participation and stand details before publishing.' },
    ],
  },
  {
    id: 'munich-motor-show-redford-automotive',
    type: 'event',
    category: 'events',
    title: 'Munich Motor Show — Redford Automotive',
    excerpt: 'Redford Automotive returns with a Series III showcase and live product demonstrations.',
    date: '2026-11-20',
    readTime: '',
    location: 'Munich, Germany',
    image: carSector,
    tags: ['event', 'automotive', 'motor show'],
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER EVENT LISTING — confirm real participation and stand details before publishing.' },
    ],
  },
  {
    id: 'healthcare-robotics-open-day',
    type: 'event',
    category: 'events',
    title: 'Healthcare Robotics Open Day',
    excerpt: 'A guided look at healthcare robotics development, hosted in partnership with the Halvex Robotics team.',
    date: '2027-01-15',
    readTime: '',
    location: 'Milan, Italy',
    image: healthcareSector,
    tags: ['event', 'health robotics', 'halvex'],
    body: [
      { type: 'paragraph', text: 'PLACEHOLDER EVENT LISTING — confirm real date, venue, and access details before publishing.' },
    ],
  },
];

// ── Derived selectors ──

export function getItem(id) {
  return newsroomItems.find((i) => i.id === id);
}

export function getSpotlight() {
  return newsroomItems.find((i) => i.spotlight) || newsroomItems[0];
}

export function getFeaturedGrid() {
  const spotlightId = getSpotlight()?.id;
  return newsroomItems
    .filter((i) => i.featured && i.type !== 'event' && i.id !== spotlightId)
    .slice(0, 3);
}

export function getLatestNews(limit = 20) {
  return [...newsroomItems]
    .filter((i) => i.type !== 'event')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export function getPressReleases() {
  return newsroomItems
    .filter((i) => i.type === 'press-release')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getStories() {
  return newsroomItems
    .filter((i) => i.type === 'story')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getEvents() {
  return newsroomItems
    .filter((i) => i.type === 'event')
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

export function getFeaturedEvent() {
  return getEvents().find((e) => e.featured) || getEvents()[0];
}

export function getUpcomingEvents() {
  const featuredId = getFeaturedEvent()?.id;
  return getEvents().filter((e) => e.id !== featuredId);
}

export function getRelated(item, count = 3) {
  if (!item) return [];
  const sameCategory = newsroomItems.filter(
    (i) => i.id !== item.id && i.type !== 'event' && i.category === item.category
  );
  const rest = newsroomItems.filter(
    (i) => i.id !== item.id && i.type !== 'event' && i.category !== item.category
  );
  return [...sameCategory, ...rest].slice(0, count);
}

export function searchNewsroom(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return newsroomItems.filter((i) => {
    const haystack = [
      i.title,
      i.category,
      i.excerpt,
      ...(i.tags || []),
      i.date,
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

// ── Media Centre (flat tiles, no fabricated asset library) ──
export const mediaCentreTiles = [
  { id: 'photos', images: [industrialSector, techSector, healthcareSector] },
];

// ── Key Documents — none of these files exist yet; every row renders as
//    "Coming soon" rather than a broken/fake download link. ──
export const keyDocuments = [
  { id: 'doc-corporate-presentation', type: 'Corporate Presentation', name: 'Zebrold Group — FY 2025–26 Overview', desc: 'A summary of Group structure, portfolio, and annual performance.', available: false },
  { id: 'doc-product-factsheets', type: 'Product Fact Sheets', name: 'Commercial Aircraft & Freighter Programmes', desc: 'Specification sheets for A321XLR, 777X, A350F, and Air Traffic Management.', available: false },
  { id: 'doc-company-overview', type: 'Company Overview', name: 'Zebrold International Holdings — Backgrounder', desc: 'A short-form introduction to the Group for press and partners.', available: false },
  { id: 'doc-sustainability-report', type: 'Sustainability Report', name: 'FY 2025–26 Sustainability Summary', desc: 'Group-wide environmental and governance disclosures.', available: false },
];

// Back-compat named exports (kept for any other importer of the previous shape)
export const pressReleases = getPressReleases();
export const stories = getStories();
export const events = getEvents();
export const latestNews = getLatestNews(6);
export const stayConnectedImage = heroGlobalNetwork;
