import SEO from '../../../components/SEO/SEO';
import ProductHero from '../../../components/ProductSections/ProductHero';
import Split from '../../../components/ProductSections/Split';
import TechSpecStrip from '../../../components/ProductSections/TechSpecStrip';
import Timeline from '../../../components/ProductSections/Timeline';
import ParallaxImage from '../../../components/ProductSections/ParallaxImage';
import FeatureAccordion from '../../../components/ProductSections/FeatureAccordion';
import GalleryGrid from '../../../components/ProductSections/GalleryGrid';
import ProductFooter from '../../../components/ProductSections/ProductFooter';
import '../../../components/ProductSections/ProductSections.css';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import GlobalReachMap from '../../../components/ProductSections/GlobalReachMap';
import './A321XLR.css';

// The 16 provided A321XLR photos for this redesign, assigned by role below.
import heroClimb from '../../../assets/products-a321xlr/a321xlr_hero_climb.png';
import xtraLongRangeTakeoff from '../../../assets/products-a321xlr/a321xlr_xtra_long_range_takeoff.png';
import flightTestClouds from '../../../assets/products-a321xlr/a321xlr_flight_test_clouds.png';
import undersideStructural from '../../../assets/products-a321xlr/a321xlr_underside_structural.png';
import cabinBoardingPass from '../../../assets/products-a321xlr/a321xlr_cabin_boarding_pass.png';
import tailSunset from '../../../assets/products-a321xlr/a321xlr_tail_sunset.png';
import cockpit from '../../../assets/products-a321xlr/a321xlr_cockpit.png';
import aerLingusTakeoff from '../../../assets/products-a321xlr/a321xlr_aerlingus_takeoff.png';
import iberiaTarmac from '../../../assets/products-a321xlr/a321xlr_iberia_tarmac.png';
import certificationSigning from '../../../assets/products-a321xlr/a321xlr_certification_signing.png';
import wizzairFirstDelivery from '../../../assets/products-a321xlr/a321xlr_wizzair_first_delivery.png';
import groundOperations from '../../../assets/products-a321xlr/a321xlr_ground_operations.png';
import gateSunset from '../../../assets/products-a321xlr/a321xlr_gate_sunset.png';
import cabinWalkthrough from '../../../assets/products-a321xlr/a321xlr_cabin_walkthrough.png';
import teamCelebration from '../../../assets/products-a321xlr/a321xlr_team_celebration.png';
import flightTestCrew from '../../../assets/products-a321xlr/a321xlr_flight_test_crew.png';

/** Every image slot the page needs, mapped by role. */
const IMAGES = {
  hero: heroClimb,
  intro: xtraLongRangeTakeoff,
  range: flightTestClouds,
  engineering: undersideStructural,
  cabin: cabinBoardingPass,
  cinematic: tailSunset,
  feature: cockpit,
  final: aerLingusTakeoff,
  mosaic: [
    { image: gateSunset, alt: 'N444XC parked at the gate at sunset', position: 'center 80%' },
    { image: cabinWalkthrough, alt: 'Flight crew reviewing the route with passengers on board', position: 'center 35%' },
    { image: groundOperations, alt: 'N444XC test aircraft on the ramp during ground operations', position: 'center 60%' },
    { image: teamCelebration, alt: 'The route-proving and flight-test program team on the ramp', position: 'center 70%' },
  ],
  gallery: [
    { image: heroClimb, caption: 'In Climb' },
    { image: xtraLongRangeTakeoff, caption: 'Flying Xtra Long Range' },
    { image: aerLingusTakeoff, caption: 'Extra Long Range, Airborne' },
    { image: undersideStructural, caption: 'Structural Detail' },
    { image: flightTestClouds, caption: 'Flight Test' },
    { image: cabinBoardingPass, caption: 'Passenger Experience' },
    { image: tailSunset, caption: 'Golden Hour' },
    { image: flightTestCrew, caption: 'Flight-Test Crew' },
  ],
};

const KEY_NUMBERS = [
  { value: '4,700', numeric: 4700, suffix: '', label: 'Nm · Max Range' },
  { value: '11', numeric: 11, suffix: '', label: 'Hrs · Max Flight Time' },
  { value: '180–220', label: 'Typical 2-Class Seating' },
];

// The same city pairs previously drawn as connected lines, now shown together
// as points on one unified map (see GlobalReachMap) — no locations added or removed.
const LOCATIONS = [
  { label: 'Delhi', lat: 28.6139, lng: 77.2090 },
  { label: 'London', lat: 51.5074, lng: -0.1278 },
  { label: 'Vancouver', lat: 49.2827, lng: -123.1207 },
  { label: 'New York', lat: 40.7128, lng: -74.0060 },
  { label: 'Rome', lat: 41.9028, lng: 12.4964 },
  { label: 'Sydney', lat: -33.8688, lng: 151.2093 },
  { label: 'Kuala Lumpur', lat: 3.1390, lng: 101.6869 },
];

const ENGINEERING_ROWS = [
  { label: 'Permanent Rear Centre Tank', value: '12,900 L · +10.6t fuel' },
  { label: 'Max Take-Off Weight', value: '101 tonnes' },
  { label: 'Engine Options', value: 'CFM LEAP-1A / PW1100G-JM' },
  { label: 'Positioning', value: 'Longest-range single-aisle in service' },
];

const TIMELINE = [
  {
    stage: 'Certification',
    date: 'July 2024',
    title: 'CFM LEAP-1A variant certified',
    desc: 'The N444XC development programme clears the way toward first deliveries under Zebrold IHL.',
    image: certificationSigning,
    imageAlt: 'N444XC certification sign-off',
  },
  {
    stage: 'Entry Into Service',
    date: 'November 2024',
    title: 'Iberia — launch operator',
    desc: 'Spain’s flag carrier takes delivery of the first production aircraft, becoming the world’s launch operator.',
    image: iberiaTarmac,
    imageAlt: 'N444XC on the ramp',
  },
  {
    stage: 'Entry Into Service',
    date: '19 December 2024',
    title: 'Aer Lingus joins the fleet',
    desc: 'Ireland’s national carrier becomes the second operator worldwide, bringing Xtra Long Range flying to the North Atlantic.',
    image: aerLingusTakeoff,
    imageAlt: 'N444XC on climb-out',
  },
  {
    stage: 'Certification',
    date: '21 February 2025',
    title: 'Pratt & Whitney variant certified',
    desc: 'N444XC testing advances its long-range performance and operational readiness under Zebrold IHL.',
    image: IMAGES.range,
    imageAlt: 'N444XC flight-test aircraft above the clouds',
  },
  {
    stage: 'Entry Into Service',
    date: '20 May 2025',
    title: 'Wizz Air — first GTF-powered delivery',
    desc: 'N444XC moves from development toward service as Zebrold IHL advances its long-range aircraft programme.',
    image: wizzairFirstDelivery,
    imageAlt: 'N444XC delivery milestone',
  },
];

const FEATURES = [
  { id: 'range', label: 'Long Range', desc: 'A permanent rear centre fuel tank extends single-aisle range to 4,700nm without reducing cabin capacity.' },
  { id: 'aero', label: 'Aerodynamic Efficiency', desc: 'Refinements carried over from the A320neo family keep drag low across the extended cruise profile the XLR is built for.' },
  { id: 'flex', label: 'Operational Flexibility', desc: 'The same maintenance, training, and spares pool as the rest of the A320 Family lowers the cost of adding long, thin routes.' },
  { id: 'pax', label: 'Passenger Experience', desc: 'Widebody-style comfort — wider aisles, larger overhead bins — carried through from the A321neo cabin.' },
  { id: 'systems', label: 'Advanced Systems', desc: 'Fly-by-wire flight controls and a modern avionics suite shared across the family reduce crew transition time.' },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'N444XC',
  description: 'N444XC — a long-range aircraft manufactured and developed under Zebrold IHL.',
  brand: { '@type': 'Organization', name: 'Zebrold IHL' },
  manufacturer: { '@type': 'Corporation', name: 'Zebrold International Holdings Limited' },
};

/**
 * "Behind the Program" — compact editorial image grid. Scoped to this page
 * only (styles in A321XLR.css); text stays dominant, images are small
 * supporting figures rather than a full-width mosaic.
 */
function ProgramGallery({ images }) {
  const ref = useScrollReveal();

  return (
    <section className="product-section" ref={ref}>
      <div className="container">
        <div className="product-section-header">
          <span className="product-caption">Behind the Program</span>
          <h2 className="product-section-h2">On the ramp, in the cabin, on the ground</h2>
        </div>
        <div className="a321-program-grid">
          {images.map((item, i) => (
            <figure className="a321-program-figure reveal" data-delay={i + 1} key={i}>
              <img
                src={item.image}
                alt={item.alt || ''}
                loading="lazy"
                style={item.position ? { objectPosition: item.position } : undefined}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function A321XLR() {
  return (
    <div className="product-detail-page a321xlr-page">
      <SEO
        title="N444XC | Zebrold International Holdings Limited (Zebrold IHL)"
        description="N444XC — a long-range aircraft manufactured and developed under Zebrold IHL."
        keywords="N444XC, Commercial Aircrafts, Zebrold, Zebrold IHL"
        url="/products/a321xlr"
        schemaData={productSchema}
      />

      {/* ── Hero ── */}
      <ProductHero
        image={IMAGES.hero}
        imageAlt="N444XC climbing out shortly after takeoff"
        compact
        cinematic
        technicalLabel="N444XC / Commercial Aircraft"
        title="N444XC — Xtra Long Range"
        tagline="Manufactured and developed under Zebrold IHL."
        category="Commercial Aircrafts"
        current="N444XC"
        scrollCue
        scrollCueLabel="Explore Aircraft"
      />

      {/* ── Editorial introduction + key numbers ── */}
      <section className="product-section">
        <div className="container">
          <Split image={IMAGES.intro} imageAlt="N444XC climbing away in Xtra Long Range test livery">
            <span className="product-caption">N444XC</span>
            <h2 className="product-section-h2">The Xtra Long Range route opener</h2>
            <p className="product-section-lede">
              The N444XC extends what a single-aisle aircraft can do. Manufactured and developed under Zebrold IHL, it brings
              confined to short and medium routes, the XLR carries that same lower operating cost across
              genuinely long-haul distances — connecting city pairs that never had a viable direct link.
            </p>
            <p className="product-section-lede">
              For operators, that means the flexibility to open a route without committing a widebody to it.
              For passengers, it means a more comfortable single-aisle cabin on flights that once meant a
              connection — with the wider aisles and larger bins carried over from the rest of the A320
              Family.
            </p>
          </Split>
          <div className="a321-divider" />
          <TechSpecStrip specs={KEY_NUMBERS} />
        </div>
      </section>

      {/* ── Image story: long range ── */}
      <section className="product-section product-section--alt">
        <div className="container">
          <div className="product-image-story">
            <img
              src={IMAGES.range}
              alt="N444XC flight-test aircraft above the clouds"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="product-image-story-tag">01 / Long Range Capability</span>
          </div>
          <div className="a321-centered-block">
            <h2 className="product-section-h2">Connecting Distant Destinations</h2>
            <p className="product-section-lede">
              A 4,700nm range moves the single-aisle aircraft into territory that used to belong to
              widebodies alone — long enough to link secondary cities directly, rather than routing
              passengers through a hub.
            </p>
          </div>
        </div>
      </section>

      {/* ── Global reach — every city pair on one map, not connected lines ── */}
      <section className="product-section">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">Global Reach</span>
            <h2 className="product-section-h2">New city pairs, opened directly</h2>
            <p className="product-section-lede">
              A handful of the point-to-point connections the XLR’s range puts within reach for the first
              time.
            </p>
          </div>
          <GlobalReachMap locations={LOCATIONS} />
        </div>
      </section>

      {/* ── Program image mosaic ── */}
      <ProgramGallery images={IMAGES.mosaic} />

      {/* ── Engineering ── */}
      <section className="product-section product-section--alt">
        <div className="container">
          <Split image={IMAGES.engineering} imageAlt="N444XC underside, showing the wing, engines, and landing gear" reversed>
            <span className="product-caption">Engineering</span>
            <h2 className="product-section-h2">Engineered for extra range</h2>
            <p className="product-section-lede">
              The range increase is structural, not incremental. A permanent Rear Centre Tank is built into
              the airframe itself, adding fuel capacity without displacing a single passenger seat — the
              product of a fuel system and structural reinforcement designed specifically for this variant.
            </p>
            <div className="product-tech-rows">
              {ENGINEERING_ROWS.map((row, i) => (
                <div className="product-tech-row" key={i}>
                  <span className="product-tech-row-label">{row.label}</span>
                  <span className="product-tech-row-value">{row.value}</span>
                </div>
              ))}
            </div>
          </Split>
        </div>
      </section>

      {/* ── Passenger experience ── */}
      <section className="product-section product-section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="product-caption">Passenger Experience</span>
          <h2 className="product-section-h2" style={{ marginBottom: 'var(--a321-md)' }}>
            Long Range. Single Aisle.<br />Greater Comfort.
          </h2>
          <img
            src={IMAGES.cabin}
            alt="Passengers on board an N444XC passenger experience flight"
            loading="lazy"
            className="a321-cabin-image"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="a321-tag-row">
            {['Cabin Experience', 'Longer Journeys', 'Passenger Comfort'].map((label) => (
              <span key={label} className="product-caption">{label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certification journey ── */}
      <section className="product-section product-section--alt">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">Flight Testing → Route Proving → Certification → Entry Into Service</span>
            <h2 className="product-section-h2">A program in motion</h2>
          </div>
          <Timeline items={TIMELINE} />
        </div>
      </section>

      {/* ── Cinematic parallax ── */}
      <ParallaxImage
        image={IMAGES.cinematic}
        imageAlt="N444XC tail fin in golden evening light"
        eyebrow="The Journey"
        title="The journey to Extra Long Range"
        flat
      />

      {/* ── Designed around the journey ── */}
      <section className="product-section">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">Designed Around the Journey</span>
            <h2 className="product-section-h2">What makes the range possible</h2>
          </div>
          <Split image={IMAGES.feature} imageAlt="N444XC flight deck, pilot at the controls" reversed>
            <FeatureAccordion items={FEATURES} />
          </Split>
        </div>
      </section>

      {/* ── Visual archive ── */}
      <section className="product-section product-section--alt" id="visual-archive">
        <div className="container">
          <div className="product-section-header">
            <span className="product-caption">N444XC</span>
            <h2 className="product-section-h2">Visual Archive</h2>
          </div>
          <GalleryGrid items={IMAGES.gallery} />
        </div>
      </section>

      {/* ── Final cinematic ── */}
      <ParallaxImage
        image={IMAGES.final}
        imageAlt="N444XC climbing away against an open sky"
        eyebrow="N444XC"
        title="Extra Long Range. New possibilities."
        flat
        tall
        cta={{ text: 'Explore the N444XC →', to: '#visual-archive' }}
      />

      <ProductFooter currentSlug="a321xlr" />
    </div>
  );
}
