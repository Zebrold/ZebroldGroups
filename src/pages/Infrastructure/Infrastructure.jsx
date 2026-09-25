import SEO from '../../components/SEO/SEO';
import '../RollingStock/RailShowcase.css';
import ifHero from '../../assets/production_line_noses.jpg';
import ifSlab from '../../assets/rail_catenary_corridor.jpg';
import ifCatenary from '../../assets/highspeed_in_service.jpg';
import ifDepot from '../../assets/depot_maintenance_bay.webp';
import ifPortal from '../../assets/station_trainshed.jpg';

export default function Infrastructure() {
  const seoData = {
    title: 'Zebrold IHL | Fixed Rail Infrastructure & Energy Systems',
    description:
      'High-Velocity Fixed Rail Infrastructure. Monolithic Slab Track & Autonomous Power Systems. Uniting German geotechnical precision casting with Indian telemetric algorithmic processing.',
    keywords:
      'Zebrold, Scolome, rail infrastructure, slab trackbed, RHEDA-2000, 25 kV catenary, robotic inspection depot, sonic wave portal, EN 16432, IEC 60913',
    url: '/infrastructure',
  };

  return (
    <div className="rail-page">
      <SEO {...seoData} />

      <main className="w-full">
        {/* ══ HERO SECTION ══ */}
        <section className="rail-container rail-hero-section">
          {/* Headline & Editorial Intro Grid */}
          <div className="rail-hero-grid">
            <div>
              <div className="rail-hero-subhead" style={{ marginBottom: '1rem', color: '#852221' }}>
                FIXED RAIL INFRASTRUCTURE &amp; CORRIDOR ELECTRIFICATION
              </div>
              <h1 className="rail-hero-title">
                High-Velocity Fixed Rail Infrastructure <br />
                <em>Monolithic Slab Track &amp; Autonomous Power Systems</em>
              </h1>
            </div>
          </div>

          {/* Hero Image Container with Overlaid Telemetry Stats */}
          <div className="rail-showcase-box">
            <img
              alt="Wide railway assembly and proving hall with trainsets under construction"
              className="rail-showcase-img"
              src={ifHero}
              loading="eager"
            />
            {/* Editorial Overlay Metadata Badge */}
            <div className="rail-showcase-overlay">
              <div className="rail-showcase-text">
                <span className="rail-showcase-text-tag">
                  PROVING DEPOT KASSEL-WEST // BENGALURU INTEGRATED SYSTEMS VALIDATION
                </span>
                <h3 className="rail-showcase-title">
                  Autonomous Turnaround &amp; Precision In-Motion Diagnostics
                </h3>
                <p className="rail-showcase-desc">
                  Trackside multi-axis robotic scanners inspect underfloor running gear and wheel profiles at roll-by velocities, streaming continuous acoustic and laser telemetry directly into corridor dispatch.
                </p>
              </div>

              <div className="rail-showcase-metrics">
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">DESIGN LIFESPAN</div>
                  <div className="rail-showcase-metric-val">60+ Years</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">TRACKBED MTBF</div>
                  <div className="rail-showcase-metric-val is-coral">&gt; 250k Hrs</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">LASER ACCURACY</div>
                  <div className="rail-showcase-metric-val is-coral">±0.05 mm</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: TRANSNATIONAL GEOTECHNICAL RIGOR & DISTRIBUTED SENSING (Deep Burgundy) ══ */}
        <section className="rail-mandate-section">
          <div className="rail-container">
            <div className="rail-mandate-grid">
              <div className="rail-mandate-lead">
                <div className="rail-mandate-badge">
                  <span className="rail-mandate-badge-dot" />
                  <span className="rail-mandate-badge-text">
                    BI-NATIONAL ENGINEERING INTEGRATION
                  </span>
                </div>

                <h2 className="rail-mandate-heading">
                  Bi-National Geotechnical Rigor &amp; Distributed Sensing
                </h2>

                <p className="rail-mandate-body">
                  Fixed rail infrastructure achieves true sovereign permanence only when civil rigidity is synchronized with continuous sensor observation. Zebrold IHL unites German geotechnical casting rigor with Indian telemetric algorithmic processing to produce resilient, self-reporting railway corridors.
                </p>

                <div className="rail-mandate-note">
                  <div className="rail-mandate-note-label">CORRIDOR RECOGNITION LEDGER</div>
                  <p className="rail-mandate-note-text">
                    Frankfurt-Kassel Heavy Structure Bureau &amp; Bengaluru CBTC/Telematics Lab. Fully verified under TSI INF Category 1, TSI ENE high-speed directives, and RDSO trans-continental guidelines.
                  </p>
                </div>
              </div>

              {/* Structural Columns */}
              <div className="rail-mandate-pillars">
                {/* Column 01: Geotechnical & Structural Permanence */}
                <div className="rail-pillar">
                  <div className="rail-pillar-label">
                    DIVISION 01 • KASSEL &amp; FRANKFURT
                  </div>
                  <h3 className="rail-pillar-title">
                    Geotechnical &amp; Structural Permanence
                  </h3>
                  <p className="rail-pillar-text">
                    Engineered in Germany, slab track modules utilize proprietary low-shrinkage self-compacting concrete formulations (SCC C50/60) certified under EN 13374. Designed to withstand ten million dynamic axle cycles across severe thermal ranges from -30°C to +55°C without micro-fracturing.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• Monolithic C50/60 EN 206-1 Certified Casting</li>
                    <li>• Fastener Lateral Resistance Exceeding 65 kN</li>
                    <li>• Zero Tamping Required Over 60-Year Design Life</li>
                  </ul>
                </div>

                {/* Column 02: Fiber-Optic Bragg Grating Sensor Network */}
                <div className="rail-pillar">
                  <div className="rail-pillar-label">
                    DIVISION 02 • BENGALURU &amp; HYDERABAD
                  </div>
                  <h3 className="rail-pillar-title">
                    Fiber-Optic Bragg Grating Sensor Network
                  </h3>
                  <p className="rail-pillar-text">
                    Developed in India, embedded fiber-optic Bragg grating sensors (FBG) line the rail web, sub-slab elastomer boots, and catenary tension masts. High-frequency telemetry nodes process over 10,000 strain and temperature packets per second to predict millimeter track shifts well before vehicle impact.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• 10,000 Real-Time Telemetry Packets Per Second</li>
                    <li>• Sub-350 ms Automated Substation Reclosers</li>
                    <li>• Hard Real-Time Predictive Deflection Telematics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: INFRASTRUCTURE SUBSYSTEMS SHOWCASE ══ */}
        <section className="rail-container rail-narrative-section">
          <div className="rail-narrative-head">
            <div>
              <div className="rail-narrative-head-tag" style={{ color: '#852221' }}>
                SUBSYSTEM PORTFOLIO &amp; OPERATIONAL CRITERIA
              </div>
              <h2 className="rail-narrative-head-title">
                Fixed Infrastructure Engineering Subsystems
              </h2>
            </div>
            <p className="rail-narrative-head-blurb">
              Four sovereign civil, electrical, and mechatronic systems engineered for high-frequency trans-continental corridors.
            </p>
          </div>

          {/* System 01: Monolithic Slab Trackbed */}
          <article className="rail-article">
            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">SYSTEM 01 • TRACKWORK ARCHITECTURE</span>
                <span className="rail-badge-outline">TSI INF / EN 16432</span>
              </div>

              <h3 className="rail-article-title">
                Monolithic Slab Trackbed
                <span>Continuous Ballastless Dynamics (RHEDA-2000 Standard)</span>
              </h3>

              <p className="rail-article-p1">
                Engineered for sustained commercial velocities exceeding 380 km/h with an axle load rating of 25.0 tonnes. By substituting traditional ballast with pre-cast continuous reinforced C50/60 concrete slabs, the trackbed delivers lateral fastener resistance beyond 65 kN and yields an 84% reduction in maintenance overhead with zero required interval tamping.
              </p>

              <p className="rail-article-p2">
                Elastomeric sub-rail boots provide a verified vibration attenuation metric of -18 dB across sensitive urban approaches, permanently arresting differential ground settlement and rail corrugation.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">MAX VELOCITY</div>
                  <div className="rail-article-spec-val">380+ km/h</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">AXLE LOAD</div>
                  <div className="rail-article-spec-val">25.0 Tonnes</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">ATTENUATION</div>
                  <div className="rail-article-spec-val">-18 dB</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Electrified corridor with overhead catenary above ballasted track"
                src={ifSlab}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">
                SPEC CODE: SLAB-RHD-2000
              </div>
            </div>
          </article>

          {/* System 02: 25 kV AC High-Speed Catenary System */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img
                alt="Train running beneath overhead catenary on an electrified corridor"
                src={ifCatenary}
                loading="lazy"
              />
              <div className="rail-spec-code at-left">
                SPEC CODE: OHE-25KV-TNS
              </div>
            </div>

            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">SYSTEM 02 • TRACTION POWER</span>
                <span className="rail-badge-outline">IEC 60913 / 25 kV</span>
              </div>

              <h3 className="rail-article-title">
                25 kV AC High-Speed Catenary System
                <span>Auto-Tensioned Overhead Electrification</span>
              </h3>

              <p className="rail-article-p1">
                Constant-tension catenary geometry sustained through automated counterweight pulley architectures set to 25.0 kN mechanical tension. Engineered specifically to eliminate pantograph arc flashover and contact wire mechanical flutter during multi-pantograph train passes up to 380 km/h.
              </p>

              <p className="rail-article-p2">
                Utilizing copper-magnesium (CuMg0.5) contact wires paired with digital telemetry arc-mitigation algorithms, the traction system delivers up to 1,200 A continuous throughput while guaranteeing 99.98% power availability under severe crosswinds and icing conditions.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">TENSION RATING</div>
                  <div className="rail-article-spec-val">25.0 kN</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">POWER UPTIME</div>
                  <div className="rail-article-spec-val">99.98%</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">RECLOSER SPEED</div>
                  <div className="rail-article-spec-val">&lt; 350 ms</div>
                </div>
              </div>
            </div>
          </article>

          {/* System 03: Robotic Underfloor Inspection Depots */}
          <article className="rail-article">
            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">SYSTEM 03 • AUTOMATED DEPOT</span>
                <span className="rail-badge-outline">SIL-4 / ISO 9001</span>
              </div>

              <h3 className="rail-article-title">
                Robotic Underfloor Inspection Depots
                <span>Autonomous Turnaround &amp; Diagnostic Gantries</span>
              </h3>

              <p className="rail-article-p1">
                Depot infrastructure deployed as self-calibrating mechatronic inspection cells capable of executing complete underfloor and pantograph inspection windows under 4.0 hours. Track-level multi-axis articulating robotic arms scan passing bogies at 15 km/h roll-by velocities.
              </p>

              <p className="rail-article-p2">
                Equipped with dual eddy-current crack sensors (detecting fissures down to 0.1 mm) and ±0.05 mm precision 3D optical laser profilers, the depot autonomously flags brake pad wear, wheel tread hollows, and bearing overheating with zero human operational intervention required.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">CRACK SENSITIVITY</div>
                  <div className="rail-article-spec-val">0.1 mm</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">TURNAROUND</div>
                  <div className="rail-article-spec-val">&lt; 4.0 hrs</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">DUTY RATING</div>
                  <div className="rail-article-spec-val">14,400+ Passes</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Trainset standing in a depot maintenance bay"
                src={ifDepot}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">
                SPEC CODE: DPT-ROBOT-03
              </div>
            </div>
          </article>

          {/* System 04: Aerodynamic Sonic Wave Portals */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img
                alt="Train standing beneath the arched roof of a station trainshed"
                src={ifPortal}
                loading="lazy"
              />
              <div className="rail-spec-code at-left">
                SPEC CODE: PRTL-AERO-100
              </div>
            </div>

            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">SYSTEM 04 • PORTAL AERODYNAMICS</span>
                <span className="rail-badge-outline">UIC 779-11 / TSI SRT</span>
              </div>

              <h3 className="rail-article-title">
                Aerodynamic Sonic Wave Portals
                <span>Micro-Pressure Wave Mitigation &amp; Floating Beds</span>
              </h3>

              <p className="rail-article-p1">
                Custom-contoured tunnel entry hoods disperse piston-effect sonic compression waves upon high-speed train ingress, achieving greater than 72% wave mitigation and maintaining micro-pressure peak shocks below 20 Pa/s within 100 m² monotube tunnels.
              </p>

              <p className="rail-article-p2">
                Transition zones are cushioned by dual-density sub-ballast elastomer beds and tuned spring-mass floating slabs, attenuating ground vibration by up to 24 dB at 63 Hz and guaranteeing a 100+ year concrete shell design lifespan.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">PRESSURE MITIGATION</div>
                  <div className="rail-article-spec-val">&gt; 72%</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">PEAK SHOCK</div>
                  <div className="rail-article-spec-val">&lt; 20 Pa/s</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">SHELL LIFE</div>
                  <div className="rail-article-spec-val">100+ Years</div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ══ SECTION 4: LONGEVITY & LIFECYCLE SLA CHARTER ══ */}
        <section className="rail-manifesto-section">
          <div className="rail-container">
            <div className="rail-manifesto-inner">
              <div className="rail-manifesto-tag" style={{ color: '#852221' }}>
                SOVEREIGN OPERATIONAL LONGEVITY &amp; SLA CHARTER
              </div>

              <h2 className="rail-manifesto-title">
                Multi-Decade Structural Warranties &amp; Performance Commitments
              </h2>

              <p className="rail-manifesto-body">
                Rather than transient maintenance intervals, Zebrold IHL fixed infrastructure guarantees corridor performance through continuous material integrity, monolithic casting durability, and real-time algorithmic telemetry.
              </p>

              <div className="rail-manifesto-grid">
                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">STRUCTURAL LIFESPAN</div>
                  <div className="rail-manifesto-card-val">60+ Years</div>
                  <div className="rail-manifesto-card-caption">Direct EN 16432 slab warranty</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">POWER AVAILABILITY</div>
                  <div className="rail-manifesto-card-val">99.98%</div>
                  <div className="rail-manifesto-card-caption">25 kV auto-tension catenary</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">COMPRESSIVE STRENGTH</div>
                  <div className="rail-manifesto-card-val">C50/60</div>
                  <div className="rail-manifesto-card-caption">EN 206-1 monolithic casting</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">CARBON ABATEMENT</div>
                  <div className="rail-manifesto-card-val">94.2%</div>
                  <div className="rail-manifesto-card-caption">Corridor lifecycle efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 5: TECHNICAL BENCHMARK MATRIX ══ */}
        <section className="rail-container rail-table-section">
          <div className="rail-table-head">
            <div className="rail-table-tag">
              <span className="rail-table-tag-sq" />
              TECHNICAL BENCHMARK REGISTRY
            </div>
            <h2 className="rail-table-title">
              Comparative Engineering Metrics
            </h2>
          </div>

          <div className="rail-table-wrapper">
            <table className="rail-table">
              <thead>
                <tr>
                  <th>Architectural Parameter</th>
                  <th>Monolithic Slab Track</th>
                  <th>25 kV Catenary System</th>
                  <th>Portal Aerodynamics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="is-param">Primary Specification</td>
                  <td>RHEDA-2000 / FFB Monolithic</td>
                  <td>25.0 kN Auto-Tensioned Catenary</td>
                  <td>Piston Shock Mitigation Hoods</td>
                </tr>
                <tr>
                  <td className="is-param">Maximum Service Speed</td>
                  <td className="is-highlight">380+ km/h (Test: 420 km/h)</td>
                  <td className="is-highlight">380 km/h (Nominal continuous)</td>
                  <td className="is-highlight">400 km/h Entry Velocity</td>
                </tr>
                <tr>
                  <td className="is-param">Static Maximum Load</td>
                  <td>25.0 Tonnes Per Axle</td>
                  <td>1,200 A Continuous Throughput</td>
                  <td>&lt; 20 Pa/s Transient Pressure Shock</td>
                </tr>
                <tr>
                  <td className="is-param">Material Composition</td>
                  <td>Pre-stressed C50/60 SCC Concrete</td>
                  <td>CuMg0.5 Contact Wire + Polymers</td>
                  <td>Hydrophobic Reinforced Concrete</td>
                </tr>
                <tr>
                  <td className="is-param">Normative Compliance</td>
                  <td>EN 16432-2 / TSI INF Cat 1</td>
                  <td>IEC 60913 / TSI ENE High-Speed</td>
                  <td>UIC 779-11 / TSI SRT Safety</td>
                </tr>
                <tr>
                  <td className="is-param">Telemetry Integration</td>
                  <td>Rail Web Fiber-Bragg Gratings</td>
                  <td>Substation Arc Sensors + Reclosers</td>
                  <td>Differential Air Pressure Barometers</td>
                </tr>
                <tr>
                  <td className="is-param">Certified Design Lifespan</td>
                  <td className="is-highlight">60+ Years (Zero tamping)</td>
                  <td className="is-highlight">45 Years (120-mo dropper check)</td>
                  <td className="is-highlight">100+ Years Concrete Shell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
