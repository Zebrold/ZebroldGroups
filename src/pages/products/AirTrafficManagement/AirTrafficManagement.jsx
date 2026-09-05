import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SEO from '../../../components/SEO/SEO';
import Split from '../../../components/ProductSections/Split';
import ParallaxImage from '../../../components/ProductSections/ParallaxImage';
import ProductCTA from '../../../components/ProductSections/ProductCTA';
import ProductFooter from '../../../components/ProductSections/ProductFooter';
import '../../../components/ProductSections/ProductSections.css';
import './AirTrafficManagement.css';

// The 6 provided photos, assigned by subject and composition rather than
// filename order. The night control room is the strongest "airspace
// intelligence" image on offer, but its bright monitor row leaves no clean
// space for large hero type — so it anchors the cinematic break and closing
// section instead, where only a small captioned chip sits over it. The
// climb/departure shot has the only genuinely open sky in the set, so it
// carries the hero (and bookends the closing section, matching the
// hero-reuse pattern on the 777X and A350F pages). The two-aircraft cruise
// photo is the only one that actually shows a lead/following pair, so it
// anchors Wake Energy Retrieval.
import controlRoom from '../../../assets/products-atm/atm_hero_control_room.png';
import towerDaytime from '../../../assets/products-atm/atm_tower_daytime.jpeg';
import climbDeparture from '../../../assets/products-atm/atm_climb_departure.png';
import wakeFormation from '../../../assets/products-atm/atm_wake_energy_formation.png';
import finalApproach from '../../../assets/products-atm/atm_final_approach.png';
import futureConcept from '../../../assets/products-atm/atm_future_concept_aircraft.png';

const imagesATM = {
  hero: climbDeparture,
  connectedAirspace: controlRoom,
  flightOps: towerDaytime,
  wakeEnergy: wakeFormation,
  trajectory: finalApproach,
  future: futureConcept,
  closing: climbDeparture,
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
};

const imageReveal = {
  initial: { opacity: 0, scale: 1.03 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
};

const FLIGHT_PHASES = [
  {
    title: 'Takeoff',
    desc: 'The first minutes set the trajectory for everything that follows — precise routing here reduces both fuel burn and noise on departure.',
  },
  {
    title: 'Climb',
    desc: 'A continuous climb profile avoids the fuel penalty of levelling off early, reaching cruise altitude on a smoother, more direct path.',
  },
  {
    title: 'Cruise',
    desc: 'The longest phase of most flights, and the one with the most room to shorten — a more direct route through managed airspace.',
  },
  {
    title: 'Descent',
    desc: 'A continuous descent, rather than a stepped approach, lets an aircraft glide down with engines closer to idle.',
  },
  {
    title: 'Landing',
    desc: 'Coordinated sequencing onto the runway reduces holding time in the air and congestion on the ground.',
  },
];

const TRAJECTORY_POINTS = [
  { label: 'Latitude', value: 'φ' },
  { label: 'Longitude', value: 'λ' },
  { label: 'Altitude', value: 'FL' },
  { label: 'Time', value: 't' },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Air Traffic Management',
  description: 'Digital infrastructure for safer, more efficient airspace — connecting aircraft operations from takeoff to landing.',
  brand: { '@type': 'Organization', name: 'Airbus' },
  manufacturer: { '@type': 'Corporation', name: 'Zebrold International Holdings Limited' },
};

/** One flight-phase node — dims until it scrolls through the active band, then highlights. */
function FlightPhaseNode({ index, phase }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.7, margin: '-15% 0px -15% 0px' });

  return (
    <div ref={ref} className={`atm-timeline-node ${inView ? 'is-active' : ''}`}>
      <span className="atm-timeline-dot" aria-hidden="true" />
      <span className="atm-timeline-index">{String(index + 1).padStart(2, '0')}</span>
      <span className="atm-timeline-stage">{phase.title}</span>
      <p className="atm-timeline-desc">{phase.desc}</p>
    </div>
  );
}

/** Editorial horizontal timeline for the five phases of flight — thin line, no cards. */
function FlightPhaseTimeline({ phases }) {
  return (
    <div className="atm-timeline">
      <div className="atm-timeline-nodes">
        {phases.map((phase, i) => (
          <FlightPhaseNode key={phase.title} index={i} phase={phase} />
        ))}
      </div>
    </div>
  );
}

/** Minimal wake-energy diagram: lead aircraft, its wake, and a following aircraft riding it. */
function WakeEnergyGraphic() {
  return (
    <div className="atm-wake-graphic">
      <svg
        className="atm-wake-svg"
        viewBox="0 0 900 220"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Diagram showing a following aircraft positioned within the wake of a lead aircraft, both flying the same direction"
      >
        {/* Wake label, centred over the trailing-vortex band it describes */}
        <text x="540" y="60" textAnchor="middle">Wake</text>

        {/* Trailing vortex pair, running from behind the lead aircraft back to the follower */}
        <g className="atm-wake-lines">
          <line x1="300" y1="94" x2="770" y2="94" />
          <line x1="300" y1="146" x2="770" y2="146" />
        </g>

        {/* Following aircraft — riding inside the wake band; nudges toward the lead on hover/focus */}
        <g className="atm-wake-follow" transform="translate(150,120)">
          <path className="atm-wake-aircraft" d="M0,-4 L34,0 L0,4 L8,0 Z" />
          <text x="17" y="34" textAnchor="middle">Following aircraft</text>
        </g>

        {/* Lead aircraft, ahead and generating the wake */}
        <g transform="translate(760,120)">
          <path className="atm-wake-aircraft" d="M0,-4 L34,0 L0,4 L8,0 Z" />
          <text x="17" y="-16" textAnchor="middle">Lead aircraft</text>
        </g>
      </svg>
    </div>
  );
}

/** Abstract 4D-trajectory diagram — a flight path with four labelled data points. No real geography implied. */
function TrajectorySVG() {
  return (
    <div className="atm-trajectory-svg-wrap">
      <svg
        className="atm-trajectory-svg"
        viewBox="0 0 900 220"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Abstract diagram of a flight trajectory with four data points: latitude, longitude, altitude and time"
      >
        <path
          className="atm-trajectory-path"
          d="M40,190 C 180,190 220,40 360,40 S 620,190 860,190"
        />
        {[
          { x: 130, y: 154, label: 'Latitude' },
          { x: 330, y: 62, label: 'Longitude' },
          { x: 520, y: 62, label: 'Altitude' },
          { x: 760, y: 148, label: 'Time' },
        ].map((p) => (
          <g key={p.label}>
            <line className="atm-trajectory-tick" x1={p.x} y1={p.y} x2={p.x} y2={p.y - 40} />
            <circle cx={p.x} cy={p.y} r="3.5" />
            <text x={p.x} y={p.y - 48} textAnchor="middle">{p.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function AirTrafficManagement() {
  return (
    <div className="product-detail-page atm-page">
      <SEO
        title="Air Traffic Management | Zebrold International Holdings Limited (Zebrold IHL)"
        description="Air Traffic Management — digital infrastructure connecting every phase of flight, from optimised trajectories to unmanned airspace integration."
        keywords="Air Traffic Management, Aircraft Operations, UTM, Trajectory-Based Operations, Zebrold, Zebrold IHL"
        url="/products/air-traffic-management"
        schemaData={productSchema}
      />

      {/* ═══ HERO ═══ */}
      <section className="atm-hero">
        <div className="atm-hero-media">
          <motion.img
            src={imagesATM.hero}
            alt="Aircraft climbing steeply into open sky shortly after departure"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            loading="eager"
          />
        </div>
        <div className="atm-hero-body">
          <motion.span className="atm-eyebrow" {...fadeUp}>Air Traffic Management</motion.span>
          <motion.h1 className="atm-hero-title" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <span>Rethinking</span>
            <span>Air Traffic</span>
            <span>Operations</span>
          </motion.h1>
          <motion.p className="atm-hero-lede" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.22 }}>
            Digital infrastructure for safer, more efficient airspace.
          </motion.p>
          <div className="atm-scroll-cue" aria-hidden="true">
            <span className="atm-scroll-cue-label">Scroll to explore</span>
            <span className="atm-scroll-cue-line" />
            <span className="atm-scroll-cue-arrow">↓</span>
          </div>
        </div>
      </section>

      {/* ═══ 01 / RETHINKING OPERATIONS ═══ */}
      <section className="atm-major">
        <div className="container">
          <div className="atm-intro-grid">
            <motion.span className="atm-eyebrow" {...fadeUp}>01 / Rethinking Operations</motion.span>
            <div>
              <motion.h2 className="atm-heading" {...fadeUp}>
                Optimising flight.<br />Rethinking operations.
              </motion.h2>
              <motion.div className="atm-intro-copy" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
                <p className="atm-body">
                  Air traffic management has traditionally treated each flight — and each phase
                  of a flight — as a separate problem to solve. We&rsquo;re working toward
                  something more continuous: a single, coordinated view of aircraft operations
                  that runs from pre-flight planning through climb, cruise, descent and landing,
                  and extends beyond crewed aircraft altogether.
                </p>
                <p className="atm-body">
                  Through Unmanned Traffic Management (UTM), digital-twin simulation and
                  optimised trajectory planning, we&rsquo;re building the digital infrastructure
                  that lets crewed aircraft, drones and air taxis share the same sky safely —
                  and lets every flight fly a shorter, more efficient path through it.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT — large qualitative statement, no card ═══ */}
      <section className="atm-impact">
        <div className="container">
          <div className="atm-divider" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }} />
          <motion.div className="atm-impact-inner" {...fadeUp}>
            <p className="atm-impact-words">
              Less CO&#8322;. Less noise.<br />Less wasted fuel.
            </p>
            <p className="atm-impact-sub">
              Smarter coordination in the air translates directly into fewer emissions,
              quieter skies and shorter, more predictable flights — without changing a
              single aircraft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CINEMATIC — connected airspace ═══ */}
      <div className="atm-cinematic">
        <motion.div className="atm-cinematic-frame" {...imageReveal}>
          <img
            src={imagesATM.connectedAirspace}
            alt="Air traffic controllers monitoring radar and flight-data displays overlooking an airport at night"
            loading="lazy"
          />
          <span className="atm-cinematic-caption">Connected airspace — from takeoff to landing</span>
        </motion.div>
      </div>

      {/* ═══ 02 / FLIGHT OPERATIONS ═══ */}
      <section className="atm-major product-section--alt">
        <div className="container">
          <motion.span className="atm-eyebrow" {...fadeUp}>02 / Flight Operations</motion.span>
          <motion.h2 className="atm-heading" {...fadeUp} style={{ marginTop: '0.75rem' }}>
            Making every phase<br />of flight more efficient
          </motion.h2>
          <motion.p
            className="atm-body atm-timeline-intro"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            No two phases of flight behave the same way — and none of them exist in isolation.
            Optimising the full trajectory, rather than each stage on its own, is where the
            largest efficiency gains are found.
          </motion.p>
          <FlightPhaseTimeline phases={FLIGHT_PHASES} />
        </div>
      </section>

      {/* ═══ FLIGHT OPS SPLIT — image-dominant ═══ */}
      <section className="atm-major atm-split-wide">
        <div className="container">
          <Split image={imagesATM.flightOps} imageAlt="Air traffic controller in a tower overlooking a busy airport apron with aircraft from multiple airlines">
            <span className="atm-subheading">One continuous trajectory</span>
            <p className="atm-body" style={{ marginTop: '1.25rem' }}>
              Instead of a series of separate clearances, an aircraft flies a single planned
              path from gate to gate. Small inefficiencies that once compounded across a route
              network — a longer-than-necessary climb, a delayed descent — are designed out
              from the start.
            </p>
          </Split>
        </div>
      </section>

      {/* ═══ 03 / WAKE ENERGY RETRIEVAL ═══ */}
      <section className="atm-technical">
        <div className="container">
          <motion.span className="atm-eyebrow" {...fadeUp}>03 / Wake Energy Retrieval</motion.span>
          <motion.h2 className="atm-heading" {...fadeUp} style={{ marginTop: '0.75rem' }}>
            Turning aerodynamic<br />energy into efficiency
          </motion.h2>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)', maxWidth: '42rem' }}>
            <p className="atm-body">
              Every aircraft leaves a wake — a pair of rotating vortices trailing from its
              wingtips. Positioned correctly within that wake, a second aircraft can ride the
              rising air it creates, trimming the power needed to hold altitude and speed.
            </p>
            <p className="atm-body">
              It&rsquo;s a behaviour long used by migrating birds, applied deliberately and
              safely between two aircraft flying the same route a short distance apart.
            </p>
          </motion.div>
          <WakeEnergyGraphic />
        </div>
      </section>

      <div className="container">
        <motion.div className="atm-wake-image" {...imageReveal}>
          <img
            src={imagesATM.wakeEnergy}
            alt="Two aircraft in cruise flight, one following the other at a distance, high above a hazy mountain landscape"
            loading="lazy"
          />
          <span className="atm-cinematic-caption">Two aircraft, one flight path</span>
        </motion.div>
      </div>

      {/* ═══ 04 / TRAJECTORY-BASED OPERATIONS ═══ */}
      <section className="atm-major product-section--alt">
        <div className="container">
          <motion.span className="atm-eyebrow" {...fadeUp}>04 / Trajectory-Based Operations</motion.span>
          <motion.h2 className="atm-heading" {...fadeUp} style={{ marginTop: '0.75rem' }}>
            Every flight.<br />One intelligent trajectory.
          </motion.h2>
          <motion.p
            className="atm-body"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)', maxWidth: '42rem' }}
          >
            Traditional air traffic control clears aircraft laterally, point to point. A
            four-dimensional trajectory adds the fourth dimension — not just where an aircraft
            will be, but exactly when — planned before departure and held to throughout
            the flight.
          </motion.p>

          <div className="atm-datapoints">
            {TRAJECTORY_POINTS.map((p) => (
              <div key={p.label}>
                <span className="atm-datapoint-value">{p.value}</span>
                <span className="atm-datapoint-label">{p.label}</span>
              </div>
            ))}
          </div>

          <TrajectorySVG />

          <motion.div className="atm-trajectory-image" {...imageReveal}>
            <img
              src={imagesATM.trajectory}
              alt="Aircraft on short final approach, descending toward a marked runway"
              loading="lazy"
            />
            <span className="atm-cinematic-caption">A precise path, planned in advance</span>
          </motion.div>
        </div>
      </section>

      {/* ═══ 05 / FUTURE OF FLIGHT ═══ */}
      <section className="atm-technical atm-future-split">
        <div className="container">
          <motion.span className="atm-eyebrow" {...fadeUp}>05 / Future Operations</motion.span>
          <motion.h2 className="atm-heading" {...fadeUp} style={{ marginTop: '0.75rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            The next generation<br />of efficient flight
          </motion.h2>
          <Split image={imagesATM.future} imageAlt="Concept aircraft with distributed propeller propulsion flying above clouds" reversed>
            <p className="atm-body">
              The aircraft entering service over the next decade won&rsquo;t be optimised in
              isolation either. New airframes, propulsion systems and unmanned vehicle types
              are being designed alongside the airspace systems that will manage them — so
              efficiency gains at the aircraft, and gains in how it&rsquo;s flown, arrive
              together, not years apart.
            </p>
          </Split>
        </div>
      </section>

      {/* ═══ FINAL TECHNICAL STATEMENT ═══ */}
      <section className="atm-major">
        <div className="container">
          <motion.div className="atm-final-statement" {...fadeUp}>
            <h2 className="atm-heading">
              The future of flight<br />depends on more<br />than the aircraft.
            </h2>
            <p className="atm-body">
              It depends on the airspace around it — connected, coordinated and intelligent
              enough to make every flight more efficient than the one before it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ FINAL CINEMATIC ═══ */}
      <ParallaxImage
        image={imagesATM.closing}
        imageAlt="Aircraft climbing into open sky over distant mountains"
        eyebrow="Air Traffic Management"
        title="Connected. Intelligent. Ready for what's next."
        flat
        tall
      />

      <ProductCTA
        title="Interested in Air Traffic Management?"
        desc="Get in touch with our team to discuss partnership, supply, or integration opportunities."
        primary={{ text: 'Learn More →', to: '/sectors' }}
        secondary={{ text: 'Contact Us →', to: '/contact' }}
      />

      <ProductFooter currentSlug="air-traffic-management" />
    </div>
  );
}
