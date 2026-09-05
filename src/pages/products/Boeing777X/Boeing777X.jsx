import { motion } from 'framer-motion';
import SEO from '../../../components/SEO/SEO';
import StatRow from '../../../components/ProductSections/StatRow';
import Split from '../../../components/ProductSections/Split';
import BulletList from '../../../components/ProductSections/BulletList';
import ColumnGrid from '../../../components/ProductSections/ColumnGrid';
import ProductTabs from '../../../components/ProductSections/ProductTabs';
import StickyStory from '../../../components/ProductSections/StickyStory';
import ParallaxImage from '../../../components/ProductSections/ParallaxImage';
import ProductFooter from '../../../components/ProductSections/ProductFooter';
import GlobalReachMap from './GlobalReachMap';
import '../../../components/ProductSections/ProductSections.css';
import './Boeing777X.css';

/*
 * IMAGE MAP — every distinct photo supplied for this page, assigned once to
 * its most relevant section. See the build summary for the full audit of
 * which supplied photos were intentionally not used (branded infographics,
 * a mislabeled cabin photo) and why.
 */
import flightCruise from '../../../assets/products-777x/777x_flight_cruise.png';
import climbEnginesWing from '../../../assets/products-777x/777x_climb_engines_wing.png';
import flightDeckPhoto from '../../../assets/products-777x/777x_flight_deck.png';
import cabinInterior from '../../../assets/products-777x/777x_cabin_interior.png';
import wingWindowDusk from '../../../assets/products-777x/777x_wing_window_dusk.png';
import cabinWideBoeing from '../../../assets/products-777x/777x_cabin_wide_boeing.png';
import noseEngineBank from '../../../assets/products-777x/777x_nose_engine_bank.png';

const images777x = {
  heroLeft: flightCruise,          // wide cruise shot, full aircraft
  heroRight: climbEnginesWing,     // climb-out, full wingspan + both engines
  fullBleed: climbEnginesWing,     // mid-page cinematic break
  engine: noseEngineBank,          // nose + single GE9X nacelle close-up
  flightDeck: flightDeckPhoto,     // cockpit, pilot hands on the touchscreen displays
  wing: wingWindowDusk,            // wing-only window view
  wingtip: climbEnginesWing,       // full wingspan visible on climb
  nacelle: noseEngineBank,         // nacelle clearly visible
  passengerCabin: cabinWideBoeing, // wide immersive cabin, Boeing-branded
  cabin: cabinInterior,            // single business-class seat/window
  final: wingWindowDusk,           // quiet wing/horizon shot for the closing section
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const HERO_STATS = [
  { value: '20%', numeric: 20, suffix: '%', label: 'Lower fuel use & emissions vs. the aircraft it replaces' },
  { value: '134in', numeric: 134, suffix: 'in', label: 'GE9X fan diameter — the largest ever certified' },
  { value: '8,745nm', numeric: 8745, suffix: 'nm', label: 'Maximum range' },
];

const PERFORMANCE_STATS = [
  { value: '20%', numeric: 20, suffix: '%', label: 'Lower fuel use and emissions' },
  { value: '40%', numeric: 40, suffix: '%', label: 'Smaller noise footprint' },
  { value: '10%', numeric: 10, suffix: '%', label: 'Lower operating costs than the competition' },
];

const JOURNEY = [
  {
    number: '01',
    title: 'Aerodynamics',
    desc: 'A longer, high-span composite wing with folding tips delivers roughly 5% better aerodynamic efficiency than a conventional design would allow within the same gate footprint.',
    image: images777x.wing,
    imageAlt: '777X wing viewed from the cabin window at dusk',
  },
  {
    number: '02',
    title: 'Engine',
    desc: 'The GE9X — the largest, most advanced commercial turbofan ever certified — anchors roughly 20% of the aircraft’s total efficiency gain.',
    image: images777x.engine,
    imageAlt: '777X nose and GE9X engine, banking in flight',
  },
  {
    number: '03',
    title: 'Wing',
    desc: 'A clean-sheet carbon-fibre wing, the largest ever fitted to a Boeing airliner, folds at the tip for taxiway and gate compatibility.',
    image: images777x.wingtip,
    imageAlt: '777X full wingspan on climb-out',
  },
  {
    number: '04',
    title: 'Flight Deck',
    desc: 'A touchscreen flight deck shares its architecture with today’s 777 and 787, reducing crew training time across fleets.',
    image: images777x.flightDeck,
    imageAlt: '777X touchscreen flight deck',
  },
  {
    number: '05',
    title: 'Cabin',
    desc: 'A cabin up to 40cm wider than comparable widebody competitors, with immersive lighting and the largest windows in its class.',
    image: images777x.passengerCabin,
    imageAlt: '777X cabin interior, wide view',
  },
];

const PERFORMANCE_BULLETS = [
  { icon: 'chart', title: 'Greater airline revenue', text: 'More seats and cargo capacity per trip, unlocked by the widest fuselage cross-section in its class.' },
  { icon: 'network', title: 'Expanded network capability', text: 'Reaches farther, opening routes previously unviable for twin-aisle operations.' },
  { icon: 'cabin', title: 'All-new passenger experience', text: 'A cabin engineered from a clean sheet, not adapted from an earlier generation.' },
  { icon: 'shield', title: 'Best-in-class reliability', text: 'Builds on the proven dispatch reliability of the 777-300ER.' },
];

const GE9X_BULLETS = [
  { icon: 'leaf', text: '5% lower specific fuel consumption than the competing engine' },
  { icon: 'fuel', text: '10% lower specific fuel consumption vs. the GE90-115B' },
  { icon: 'bell', text: '8dB margin to Stage 5 noise limits' },
  { icon: 'wind', text: '55% emissions margin within CAEP/8 limits' },
  { icon: 'shield', text: 'World-class reliability and durability' },
];

const DESIGN_COLUMNS = [
  {
    title: '01 — 787 Technologies',
    items: [
      'Laminar flow nacelles',
      'Advanced flight controls',
      'Flight deck displays',
      'Computing & network architecture',
    ],
  },
  {
    title: '02 — 777 Technologies',
    items: [
      'Highly reliable systems architecture',
      'Composite floor beams and empennage',
    ],
  },
  {
    title: '03 — New Technologies',
    items: [
      'High-span composite wing with folding tip',
      'Clean-sheet engine design',
      'Exceptional passenger experience',
    ],
  },
];

const FLIGHT_DECK_ROWS = [
  { number: '01', title: 'Easy', desc: 'Familiar, simple touchscreens reduce crew training time.' },
  { number: '02', title: 'Interactive', desc: 'Multiple touch points give crews faster access to key systems.' },
  { number: '03', title: 'Efficient', desc: 'Digital displays reduce the number of physical airplane parts.' },
  { number: '04', title: 'Common', desc: 'A shared architecture with today’s 777 and 787 flight decks.' },
];

const AERO_TABS = [
  {
    id: 'unconstrained-wing',
    label: '01 — Unconstrained Wing',
    title: 'Unconstrained wing',
    desc: 'A longer wingspan results in materially better aerodynamic efficiency across the cruise envelope — the single biggest lever behind the aircraft\'s efficiency gains.',
    image: images777x.wing,
    imageAlt: '777X wing viewed from the cabin window',
  },
  {
    id: 'folding-wingtip',
    label: '02 — Folding Wingtip',
    title: 'Folding wingtip',
    desc: 'Folding wingtips let the aircraft carry a longer, more efficient span in the air while still fitting existing gates and taxiways on the ground.',
    image: images777x.wingtip,
    imageAlt: '777X full wingspan and wingtip on climb-out',
  },
  {
    id: 'laminar-nacelles',
    label: '03 — Laminar Flow Nacelles',
    title: 'Laminar flow nacelles',
    desc: 'Smoother airflow over the engine nacelles reduces drag across the flight envelope, a refinement that compounds across every hour the aircraft is in the air.',
    image: images777x.nacelle,
    imageAlt: '777X GE9X nacelle close-up, banking in flight',
  },
];

const PASSENGER_ROWS = [
  { number: '01', title: 'Spacious architecture', desc: 'A cabin cross-section engineered from a clean sheet, not adapted from an earlier generation.' },
  { number: '02', title: 'Immersive LED lighting', desc: 'Programmable lighting scenes ease the transition across time zones on long-range routes.' },
  { number: '03', title: 'Bigger overhead bins', desc: 'More room per passenger for carry-on baggage, with faster boarding as a result.' },
  { number: '04', title: 'Larger windows', desc: 'Larger than on the aircraft it replaces, bringing more daylight into every row.' },
];

const ENVIRONMENT_BULLETS = [
  { icon: 'bell', text: 'Quieter cabin' },
  { icon: 'wind', text: 'Lower cabin altitude' },
  { icon: 'drop', text: 'Improved humidity' },
  { icon: 'sparkle', text: 'Cleaner air' },
  { icon: 'route', text: 'Smooth ride technology' },
];

// Every 777X destination previously split across route-map tabs, now shown
// together as points on one unified map — same idea as the A321XLR page's
// GlobalReachMap, no city added or removed.
const LOCATIONS = [
  { label: 'New York', lat: 40.7128, lng: -74.0060 },
  { label: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
  { label: 'London', lat: 51.5074, lng: -0.1278 },
  { label: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { label: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Boeing 777X',
  description: 'The largest, most efficient twin-engine jet ever built.',
  brand: { '@type': 'Organization', name: 'Boeing' },
  manufacturer: { '@type': 'Corporation', name: 'Zebrold International Holdings Limited' },
};

export default function Boeing777X() {
  return (
    <div className="product-detail-page x777-by-design">
      <SEO
        title="Boeing 777X | Zebrold International Holdings Limited (Zebrold IHL)"
        description="Discover what goes into creating the industry-leading technology of the 777X family."
        keywords="777X, Boeing, Commercial Aircrafts, GE9X, Zebrold, Zebrold IHL"
        url="/products/777x"
        schemaData={productSchema}
      />

      {/* ── Hero — image / text / image, white background ── */}
      <section className="x777-hero">
        <div className="container x777-hero-grid">
          <div className="x777-hero-imgwrap x777-hero-imgwrap--left">
            <img src={images777x.heroLeft} alt="777X in cruise flight over mountains" loading="eager" />
          </div>
          <motion.div className="x777-hero-text" {...fadeUp}>
            <span className="x777-hero-label">777X Family</span>
            <h1 className="x777-hero-statement">Unrivaled performance.<br />Impressive potential.</h1>
            <p className="x777-hero-copy">
              Every decision behind the 777X — the wing, the engine, the cabin — is weighed against the same
              question: does it make the aircraft more capable to fly, and more efficient to operate. The
              result is a twin-engine widebody built for the routes today's aircraft can't yet reach.
            </p>
          </motion.div>
          <div className="x777-hero-imgwrap x777-hero-imgwrap--right">
            <img src={images777x.heroRight} alt="777X climbing out, full wingspan and engines visible" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── By the numbers — brown ── */}
      <section className="product-section x777-brown">
        <div className="container">
          <StatRow stats={HERO_STATS} columns={3} />
        </div>
      </section>

      {/* ── Full-width aircraft image — content-sized, not viewport-forced ── */}
      <motion.section
        className="x777-full-bleed"
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={images777x.fullBleed} alt="777X climbing out, full wingspan and engines visible" loading="lazy" />
        <span className="x777-full-bleed-caption">777X — engineered for the next generation of long-haul travel</span>
      </motion.section>

      {/* ── Performance, by the numbers — white ── */}
      <section className="product-section">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">Performance, by the Numbers</span>
            <h2 className="product-section-h2">More capability, less to compromise</h2>
          </div>
          <StatRow stats={PERFORMANCE_STATS} columns={3} />
          <div className="x777-performance-bullets">
            <BulletList items={PERFORMANCE_BULLETS} />
          </div>
        </div>
      </section>

      {/* ── Engineering journey (sticky story) — brown ── */}
      <section className="product-section x777-brown">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">By Design</span>
            <h2 className="product-section-h2">Five decisions behind the 777X</h2>
          </div>
          <StickyStory items={JOURNEY} />
        </div>
      </section>

      {/* ── GE9X technology — white ── */}
      <section className="product-section">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">GE9X Technology</span>
            <h2 className="product-section-h2">Power without compromise</h2>
          </div>
          <Split image={images777x.engine} imageAlt="777X nose and GE9X engine, banking in flight" reversed>
            <BulletList items={GE9X_BULLETS} />
            <p className="product-section-lede" style={{ fontWeight: 600 }}>
              At 134 inches in fan diameter, the GE9X is the largest and most advanced commercial turbofan
              ever certified.
            </p>
          </Split>
        </div>
      </section>

      {/* ── A balanced design approach — brown ── */}
      <section className="product-section x777-brown">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">A Balanced Design Approach</span>
            <h2 className="product-section-h2">Proven technology. New thinking.</h2>
          </div>
          <ColumnGrid columns={DESIGN_COLUMNS} />
        </div>
      </section>

      {/* ── Touchscreen flight deck — white ── */}
      <section className="product-section">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">Flight Deck</span>
            <h2 className="product-section-h2">The next-generation flight deck</h2>
          </div>
          <Split image={images777x.flightDeck} imageAlt="777X touchscreen flight deck displays">
            <div className="x777-row-list">
              {FLIGHT_DECK_ROWS.map((row) => (
                <div className="x777-row" key={row.number}>
                  <span className="x777-row-number">{row.number}</span>
                  <div className="x777-row-body">
                    <span className="x777-row-title">{row.title}</span>
                    <span className="x777-row-desc">{row.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Split>
        </div>
      </section>

      {/* ── Aerodynamics + folding wingtip + laminar nacelles — brown ── */}
      <section className="product-section x777-brown">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">5% Better Aerodynamics than the A350-1000</span>
            <h2 className="product-section-h2">A generational leap in aerodynamics</h2>
          </div>
          <ProductTabs tabs={AERO_TABS} />
        </div>
      </section>

      {/* ── Passenger experience — white ── */}
      <section className="product-section">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">Passenger Experience</span>
            <h2 className="product-section-h2">A cabin built around the passenger</h2>
          </div>
          <div className="x777-passenger-grid">
            <div className="x777-passenger-imgwrap">
              <img src={images777x.passengerCabin} alt="777X cabin interior, wide view" loading="lazy" />
            </div>
            <div className="x777-row-list">
              {PASSENGER_ROWS.map((row) => (
                <div className="x777-row" key={row.number}>
                  <span className="x777-row-number">{row.number}</span>
                  <div className="x777-row-body">
                    <span className="x777-row-title">{row.title}</span>
                    <span className="x777-row-desc">{row.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cabin — brown ── */}
      <section className="product-section x777-brown">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">Cabin</span>
            <h2 className="product-section-h2">Comfort engineered into every system</h2>
          </div>
          <Split image={images777x.cabin} imageAlt="777X business-class cabin seat and window" reversed>
            <BulletList items={ENVIRONMENT_BULLETS} light />
          </Split>
        </div>
      </section>

      {/* ── Operating economics — white ── */}
      <section className="product-section">
        <div className="container x777-economics-grid">
          <motion.div {...fadeUp}>
            <span className="x777-economics-value">10%</span>
            <span className="product-caption">Lower Operating Costs than the A350-1000</span>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <span className="x777-economics-value">40cm</span>
            <span className="product-caption">Wider Cabin than the A350 (16in)</span>
          </motion.div>
        </div>
        <div className="container">
          <motion.p className="x777-economics-sub" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            Better aerodynamics. Better engine. Better economics — the two compound each other rather than
            trading off, which is what turns an efficiency gain on paper into a lower cost per seat and a
            wider, more comfortable cabin in service.
          </motion.p>
        </div>
      </section>

      {/* ── Global presence — every destination on one unified map — brown ── */}
      <section className="product-section x777-brown">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">Global Presence</span>
            <h2 className="product-section-h2">Built for the world</h2>
            <p className="product-section-lede">777-9: range up to 8,000nm · 777-8: range up to 9,500nm.</p>
          </div>
          <GlobalReachMap locations={LOCATIONS} />
        </div>
      </section>

      {/* ── Cinematic closing — flat (no gradient), no button/link ── */}
      <ParallaxImage
        image={images777x.final}
        imageAlt="777X wing viewed from the cabin window at dusk"
        eyebrow="777X"
        title="Engineered for what comes next."
        flat
        tall
      />

      <ProductFooter currentSlug="777x" />
    </div>
  );
}
