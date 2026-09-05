import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../../components/SEO/SEO';
import StatRow from '../../../components/ProductSections/StatRow';
import Split from '../../../components/ProductSections/Split';
import RouteMap from '../../../components/ProductSections/RouteMap';
import ParallaxImage from '../../../components/ProductSections/ParallaxImage';
import ProductCTA from '../../../components/ProductSections/ProductCTA';
import ProductFooter from '../../../components/ProductSections/ProductFooter';
import '../../../components/ProductSections/ProductSections.css';
import './A350F.css';

// The 4 provided A350F photos. The hero photo is reused for the mid-page
// cinematic break and the closing cinematic section (the same bookending
// pattern used on the 777X page), each cropped differently.
import heroFlight from '../../../assets/products-a350f/a350f_hero_flight.png';
import cargoHoldInterior from '../../../assets/products-a350f/a350f_cargo_hold_interior.png';
import engineeringWireframe from '../../../assets/products-a350f/a350f_engineering_wireframe.png';
import xlCargoDoor from '../../../assets/products-a350f/a350f_xl_cargo_door.png';

const imagesA350F = {
  hero: heroFlight,
  cargoOps: cargoHoldInterior,
  cargoDoor: xlCargoDoor,
  engineering: engineeringWireframe,
  cinematicBreak: heroFlight,
  closing: heroFlight,
};

const INTRO_METRICS = [
  { numeric: 40, suffix: '%', label: 'Lower fuel burn + CO₂ emissions' },
  { numeric: 78, suffix: ' t', label: 'Lighter MTOW' },
  { value: '99.5%', label: 'Operability / reliability' },
  { value: 'Up to 50%', label: 'SAF at entry into service' },
];

const INNOVATION_STATS = [
  { value: '+11%', label: 'More volume' },
  { value: 'Up to 111 t', label: 'Payload' },
];

const DOOR_STATS = [
  { value: '169.5 in', label: 'Clear opening' },
  { numeric: 4445, suffix: ' mm', label: 'Cut-out' },
  { numeric: 4305, suffix: ' mm', label: 'Clear opening' },
];

const CARGO_TYPES = [
  { title: 'Heavy cargo', desc: 'Dense, high-weight freight carried within a wide main-deck cross-section.' },
  { title: 'Oversized cargo', desc: 'Loads too large for a standard main-deck door, cleared through the XL opening.' },
  { title: 'Engines', desc: 'Large aircraft engines moved directly, without unnecessary disassembly.' },
  { title: 'Express freight', desc: 'Fast, predictable turnarounds for time-critical express networks.' },
  { title: 'General cargo', desc: 'Palletised freight, flexibly configured across the main and lower decks.' },
];

const COCKPIT_ROWS = [
  { title: 'Large displays', desc: 'Six large LCD displays share one uncluttered instrument panel across the A350 family.' },
  { title: 'Touch interaction', desc: 'Direct touch input speeds up routine tasks without adding physical switches.' },
  { title: 'EFB integration', desc: 'Charts, manuals and performance data live in one integrated digital workspace.' },
  { title: 'A350 commonality', desc: 'The same flight-deck architecture and philosophy across the entire A350 family.' },
];

const FOUNDATION_STATS = [
  { numeric: 100, suffix: '%', label: 'Engine spares & tooling commonality' },
  { numeric: 99, suffix: '%', label: 'Airframe tool commonality' },
  { numeric: 98, suffix: '%', label: 'Spares commonality' },
  { value: '99.5%', label: '2024 A350 family operability' },
];

const KEY_FIGURES = [
  { label: 'Payload', value: '111 tonnes' },
  { label: 'Main deck', value: '30 containers' },
  { label: 'Lower deck', value: '40 LD3' },
  { label: 'Overall length', value: '70.80 m' },
  { label: 'Wingspan', value: '64.75 m' },
  { label: 'Overall height', value: '17.08 m' },
  { label: 'Range', value: '4,700 NM' },
];

const ENVIRONMENT_STATS = [
  { numeric: 40, prefix: 'Up to ', suffix: '%', label: 'Lower fuel burn + CO₂ emissions' },
  { value: 'Up to 50%', label: 'SAF at entry into service' },
];

const FINAL_STATS = [
  { value: 'Up to 111 t', label: 'Payload' },
  { value: '4,700 NM', label: 'Range' },
  { value: '175 in', label: 'Cargo door' },
  { value: '99.5%', label: 'A350 family operability' },
];

const ROUTE_CITIES = [
  {
    id: 'miami',
    label: 'Miami',
    origin: { x: 180, y: 270, label: 'Miami' },
    destinations: [
      { x: 520, y: 150, label: 'Leipzig' },
      { x: 850, y: 190, label: 'Beijing' },
    ],
    rangeStat: '4,700 NM',
    rangeLabel: 'Range at full payload',
  },
  {
    id: 'leipzig',
    label: 'Leipzig',
    origin: { x: 520, y: 150, label: 'Leipzig' },
    destinations: [
      { x: 180, y: 270, label: 'Miami' },
      { x: 850, y: 190, label: 'Beijing' },
    ],
    rangeStat: '4,700 NM',
    rangeLabel: 'Range at full payload',
  },
  {
    id: 'beijing',
    label: 'Beijing',
    origin: { x: 850, y: 190, label: 'Beijing' },
    destinations: [
      { x: 180, y: 270, label: 'Miami' },
      { x: 520, y: 150, label: 'Leipzig' },
    ],
    rangeStat: '4,700 NM',
    rangeLabel: 'Range at full payload',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Airbus A350F',
  description: 'A next-generation freighter engineered to move more cargo, farther, with greater efficiency and operational flexibility.',
  brand: { '@type': 'Organization', name: 'Airbus' },
  manufacturer: { '@type': 'Corporation', name: 'Zebrold International Holdings Limited' },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const imageReveal = {
  initial: { opacity: 0, scale: 1.03 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
};

/** Editorial cargo-capability list — text rows with a shared image panel that
    responds subtly on hover (only one supporting photo exists for this page,
    so the list itself, not five separate images, carries the visual variety). */
function CargoCapabilityList({ items, image }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = items[activeIndex ?? 0];

  return (
    <div className="a350f-cargo-list-wrap">
      <div className="a350f-cargo-list">
        {items.map((item, i) => (
          <button
            type="button"
            key={item.title}
            className={`a350f-cargo-row ${activeIndex === i ? 'is-active' : ''}`}
            onMouseEnter={() => setActiveIndex(i)}
            onFocus={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onBlur={() => setActiveIndex(null)}
          >
            <span className="a350f-cargo-row-title">{item.title}</span>
            <span className="a350f-cargo-row-desc">{item.desc}</span>
          </button>
        ))}
      </div>
      <div className={`a350f-cargo-image ${activeIndex !== null ? 'is-hovered' : ''}`}>
        <img src={image} alt={active.title} loading="lazy" />
      </div>
    </div>
  );
}

export default function A350F() {
  return (
    <div className="product-detail-page a350f-page">
      <SEO
        title="A350F | Zebrold International Holdings Limited (Zebrold IHL)"
        description="A350F — a next-generation freighter engineered to move more cargo, farther, with greater efficiency and operational flexibility."
        keywords="A350F, Airbus, Freighter Aircrafts, cargo door, Zebrold, Zebrold IHL"
        url="/products/a350f"
        schemaData={productSchema}
      />

      {/* ═══ HERO ═══ */}
      <section className="a350f-hero">
        <div className="a350f-hero-media">
          <motion.img
            src={imagesA350F.hero}
            alt="A350F freighter in cruise flight over islands"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            loading="eager"
          />
          <span className="a350f-hero-tag">A350F / FREIGHTER</span>
        </div>
        <div className="a350f-hero-body">
          <motion.span className="a350f-eyebrow" {...fadeUp}>A350F</motion.span>
          <motion.h1 className="a350f-hero-title" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <span>The New</span>
            <span>Generation</span>
            <span>Freighter</span>
          </motion.h1>
          <motion.p className="a350f-hero-lede" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.22 }}>
            A next-generation freighter engineered to move more cargo, farther, with greater
            efficiency and operational flexibility.
          </motion.p>
          <div className="a350f-scroll-cue" aria-hidden="true">
            <span className="a350f-scroll-cue-label">Scroll to explore</span>
            <span className="a350f-scroll-cue-line" />
            <span className="a350f-scroll-cue-arrow">↓</span>
          </div>
        </div>
      </section>

      {/* ═══ SHAPING THE FUTURE OF AIRFREIGHT ═══ */}
      <section className="a350f-major">
        <div className="container">
          <div className="a350f-intro-grid">
            <motion.span className="a350f-eyebrow" {...fadeUp}>A350F</motion.span>
            <div>
              <motion.h2 className="a350f-heading" {...fadeUp}>
                Shaping the future of airfreight
              </motion.h2>
              <motion.p className="a350f-body a350f-intro-copy" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
                The A350F opens a new chapter for large freighters — pairing long-range reach with
                a heavy payload and a step change in operating efficiency. Built on the proven A350
                platform, it carries forward that aircraft&rsquo;s advanced aerodynamics, lightweight
                composite structure and modern propulsion into a purpose-built cargo design,
                engineered for the demands of global logistics today.
              </motion.p>
            </div>
          </div>
          <div className="a350f-divider" />
          <StatRow stats={INTRO_METRICS} columns={4} />
        </div>
      </section>

      {/* ═══ FULL-WIDTH CINEMATIC BREAK ═══ */}
      <div className="container a350f-cinematic">
        <motion.div className="a350f-cinematic-frame" {...imageReveal}>
          <img src={imagesA350F.cinematicBreak} alt="A350F freighter airframe in flight" loading="lazy" />
          <span className="a350f-cinematic-caption">A350F — built on the A350 platform</span>
        </motion.div>
      </div>

      {/* ═══ INNOVATION MEETING OPERATORS' NEEDS ═══ */}
      <section className="a350f-major product-section--alt a350f-split-40-60">
        <div className="container">
          <span className="a350f-eyebrow">01 / Cargo Operations</span>
          <h2 className="a350f-heading" style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
            Innovation meeting the demands of modern airfreight
          </h2>
          <Split image={imagesA350F.cargoOps} imageAlt="A350F main-deck cargo hold, loaded with pallets" reversed>
            <StatRow stats={INNOVATION_STATS} columns={2} />
            <p className="a350f-body" style={{ marginTop: '1.5rem' }}>
              The A350F is built around how cargo actually moves — high-volume freight, heavy and
              oversized loads, express parcels and industrial equipment. Flexible pallet loading
              across the main and lower decks, paired with precise centre-of-gravity management,
              keeps ground operations fast without compromising balance.
            </p>
          </Split>
        </div>
      </section>

      {/* ═══ THE XL CARGO DOOR ═══ */}
      <section className="a350f-major">
        <div className="container">
          <span className="a350f-eyebrow">XL Cargo Door</span>
          <h2 className="a350f-heading" style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
            Built to load faster, and load more
          </h2>
          <Split image={imagesA350F.cargoDoor} imageAlt="A350F main-deck cargo door, open" reversed>
            <p className="a350f-body">
              The A350F carries an exceptionally large main-deck cargo door, sized to move large
              and heavy items quickly and without unnecessary disassembly. The opening is wide
              enough to accommodate oversized freight and large aircraft engines directly, cutting
              time out of every turnaround.
            </p>
          </Split>

          <div className="a350f-door-figure-block">
            <span className="a350f-door-number">175&Prime;</span>
            <span className="a350f-door-number-label">Cargo door cut-out</span>
            <p className="a350f-door-secondary">
              <strong>4,445 mm</strong> cut-out width — with a <strong>169.5 in / 4,305 mm</strong> clear
              opening for loaded cargo.
            </p>
            <div style={{ maxWidth: '26rem', marginTop: '2rem' }}>
              <StatRow stats={DOOR_STATS} columns={3} />
            </div>
          </div>

          <div className="a350f-door-graphic">
            <svg className="a350f-door-svg" viewBox="0 0 900 170" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Cargo door dimension diagram: 175 inch cut-out width, 169.5 inch clear opening">
              <line x1="40" y1="40" x2="860" y2="40" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="26" x2="40" y2="54" stroke="currentColor" strokeWidth="1" />
              <line x1="860" y1="26" x2="860" y2="54" stroke="currentColor" strokeWidth="1" />
              <text x="450" y="22" textAnchor="middle" className="a350f-door-label">Cut-out width</text>
              <text x="450" y="66" textAnchor="middle" className="a350f-door-svg-figure">175 in · 4,445 mm</text>

              <line x1="130" y1="130" x2="770" y2="130" stroke="currentColor" strokeWidth="1" />
              <line x1="130" y1="116" x2="130" y2="144" stroke="currentColor" strokeWidth="1" />
              <line x1="770" y1="116" x2="770" y2="144" stroke="currentColor" strokeWidth="1" />
              <text x="450" y="112" textAnchor="middle" className="a350f-door-label">Clear opening</text>
              <text x="450" y="156" textAnchor="middle" className="a350f-door-svg-figure">169.5 in · 4,305 mm</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ CARGO CAPABILITY ═══ */}
      <section className="a350f-support product-section--alt">
        <div className="container">
          <span className="a350f-eyebrow">Cargo Capability</span>
          <h2 className="a350f-heading" style={{ marginTop: '0.75rem' }}>
            Built for what matters
          </h2>
          <p className="a350f-body" style={{ marginTop: '1rem', maxWidth: '42rem' }}>
            From outsized industrial freight to time-critical express shipments, the A350F is built
            to carry cargo that most freighters can&rsquo;t — and to move it reliably from origin to
            destination.
          </p>
          <CargoCapabilityList items={CARGO_TYPES} image={imagesA350F.cargoOps} />
        </div>
      </section>

      {/* ═══ POWERED FOR THE FUTURE ═══ */}
      <section className="a350f-major a350f-split-divider">
        <div className="container">
          <span className="a350f-eyebrow">Propulsion</span>
          <h2 className="a350f-heading" style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
            Powering the next generation of freight
          </h2>
          <Split image={imagesA350F.engineering} imageAlt="A350F engineering render">
            <span className="a350f-engine-label">Trent XWB-97</span>
            <p className="a350f-body">
              Rolls-Royce&rsquo;s latest widebody turbofan is purpose-matched to the A350 airframe,
              built on a mature engine family with an established dispatch-reliability record
              across the fleet. Power delivery is tuned to hold its fuel-burn and emissions
              advantage across long sectors at full payload, sustaining cruise performance over
              intercontinental distances.
            </p>
          </Split>
        </div>
      </section>

      {/* ═══ THE A350 COCKPIT ═══ */}
      <section className="a350f-major product-section--alt a350f-split-divider">
        <div className="container">
          <span className="a350f-eyebrow">Flight Deck</span>
          <h2 className="a350f-heading" style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
            Designed around the pilot
          </h2>
          <Split image={imagesA350F.engineering} imageAlt="A350 flight deck engineering, technology reference" reversed>
            <p className="a350f-body" style={{ marginBottom: '1.5rem' }}>
              Airbus&rsquo;s cockpit philosophy puts the crew at the centre of every display and
              control, organising information for how a flight deck actually works a long sector —
              not around the airframe beneath it.
            </p>
            <div className="a350f-numbered-rows">
              {COCKPIT_ROWS.map((row, i) => (
                <div className="a350f-numbered-row" key={row.title}>
                  <span className="a350f-numbered-row-index">{String(i + 1).padStart(2, '0')}</span>
                  <div className="a350f-numbered-row-body">
                    <span className="a350f-numbered-row-title">{row.title}</span>
                    <p className="a350f-numbered-row-desc">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Split>
        </div>
      </section>

      {/* ═══ RANGE ═══ */}
      <section className="a350f-major" style={{ paddingTop: 'clamp(110px, 13vw, 200px)', paddingBottom: 'clamp(110px, 13vw, 200px)' }}>
        <div className="container">
          <span className="a350f-eyebrow">Range</span>
          <h2 className="a350f-heading" style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
            Global range
          </h2>
          <div className="a350f-range-headline">
            <span className="a350f-range-main">4,700 NM</span>
            <span className="a350f-range-sub">Up to 111 t payload</span>
          </div>
          <RouteMap cities={ROUTE_CITIES} />
        </div>
      </section>

      {/* ═══ PROVEN A350 FOUNDATION ═══ */}
      <section className="a350f-technical product-section--alt">
        <div className="container">
          <span className="a350f-eyebrow">Fleet Commonality</span>
          <h2 className="a350f-heading" style={{ marginTop: '0.75rem' }}>
            Built on a proven foundation
          </h2>
          <p className="a350f-body" style={{ marginTop: '1rem', marginBottom: '2.5rem', maxWidth: '42rem' }}>
            The A350F builds directly on the established A350 family architecture, carrying forward
            deep commonality in flight-crew training, maintenance, tooling, spares and fleet
            management for operators already flying the A350.
          </p>
          <StatRow stats={FOUNDATION_STATS} columns={4} />
        </div>
      </section>

      {/* ═══ KEY FIGURES ═══ */}
      <section className="a350f-major">
        <div className="container">
          <span className="a350f-eyebrow">Technical Specifications</span>
          <h2 className="a350f-heading" style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
            A350F / Key figures
          </h2>
          <div className="a350f-spec-table">
            {KEY_FIGURES.map((spec) => (
              <div className="a350f-spec-row" key={spec.label}>
                <span className="a350f-spec-label">{spec.label}</span>
                <span className="a350f-spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EFFICIENCY FOR THE NEXT GENERATION ═══ */}
      <section className="a350f-technical product-section--alt">
        <div className="container">
          <span className="a350f-eyebrow">Environmental Performance</span>
          <h2 className="a350f-heading" style={{ marginTop: '0.75rem' }}>
            Efficiency for the next generation
          </h2>
          <p className="a350f-body" style={{ marginTop: '1rem', marginBottom: '2.5rem', maxWidth: '42rem' }}>
            The A350F is designed around lower fuel consumption and lower CO₂ emissions, while
            preparing operators for increasingly demanding environmental standards across the cargo
            network.
          </p>
          <StatRow stats={ENVIRONMENT_STATS} columns={2} />
        </div>
      </section>

      {/* ═══ FINAL CINEMATIC ═══ */}
      <ParallaxImage
        image={imagesA350F.closing}
        imageAlt="A350F freighter in flight, wide cinematic view"
        eyebrow="A350F"
        title="Built for what moves the world."
        tall
      />

      {/* ═══ FINAL TECHNICAL CTA ═══ */}
      <section className="a350f-major a350f-final-cta">
        <div className="container">
          <span className="a350f-final-cta-eyebrow">A350F</span>
          <h2 className="a350f-final-cta-title">New generation freighter</h2>
          <div className="a350f-final-cta-stats">
            {FINAL_STATS.map((s) => (
              <div className="a350f-final-cta-stat" key={s.label}>
                <span className="a350f-final-cta-stat-value">{s.value}</span>
                <span className="a350f-final-cta-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <Link to="/products" className="a350f-final-cta-link">
            Explore the freighter family <span className="a350f-final-cta-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ProductCTA
        title="Interested in the A350F program?"
        desc="Get in touch with our team to discuss partnership, supply, or integration opportunities."
        primary={{ text: 'Learn More →', to: '/sectors' }}
        secondary={{ text: 'Contact Us →', to: '/contact' }}
      />

      <ProductFooter currentSlug="a350f" />
    </div>
  );
}
