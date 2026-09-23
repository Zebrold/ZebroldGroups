import SEO from '../../components/SEO/SEO';
import '../RollingStock/RailShowcase.css';
import sgHero from '../../assets/autonomous_rail_sensor.jpg';
import sgCab from '../../assets/train_cockpit_digital.jpg';
import sgMetro from '../../assets/metro_trainset.jpg';
import sgTrackside from '../../assets/rail_catenary_corridor.jpg';
import sgControl from '../../assets/deeptech_software_lab.jpg';

export default function Signalling() {
  const seoData = {
    title: 'Zebrold Scolome | Mission-Critical Signalling & Autonomous Interlocking',
    description:
      'Fail-Safe CBTC & ETCS Level 2/3 Transnational Deployments. Physical safety validation and CENELEC certification paired synchronously with formal mathematical logic engines.',
    keywords:
      'Zebrold, Scolome, signalling, ETCS Level 2, ETCS Level 3, CBTC GoA4, interlocking, TMS, SIL-4, CENELEC, RDSO',
    url: '/signalling',
  };

  return (
    <div className="rail-page">
      <SEO {...seoData} />

      <main className="w-full">
        {/* ══ HERO SECTION ══ */}
        <section className="rail-container rail-hero-section">
          {/* Headline & Subtitle Editorial Group */}
          <div className="rail-hero-grid">
            <div>
              <h1 className="rail-hero-title">
                Mission-Critical Signalling &amp; <br />
                <em>Autonomous Interlocking</em>
              </h1>
              <p className="rail-hero-subhead">
                Fail-Safe CBTC &amp; ETCS Level 2/3 Transnational Deployments
              </p>
            </div>
          </div>

          {/* Primary Hero Visual Showcase */}
          <div className="rail-showcase-box">
            <img
              alt="Forward-facing trackside detection sensor mounted on a trainset"
              className="rail-showcase-img"
              src={sgHero}
              loading="eager"
            />
            {/* Editorial Overlay Metadata Badge */}
            <div className="rail-showcase-overlay">
              <div className="rail-showcase-text">
                <span className="rail-showcase-text-tag">
                  FIELD TELEMETRY // TRACKSIDE MATRIX
                </span>
                <h3 className="rail-showcase-title">
                  Flox Intelligence AI-T04 Trackside Optical Vision &amp; 5G Telemetry Matrix
                </h3>
                <p className="rail-showcase-desc">
                  Ruggedized solid-state trackside edge inferencing with continuous gauge geometry, sub-millimeter anomaly detection, and real-time moving block validation under extreme conditions (-25°C to +55°C).
                </p>
              </div>

              <div className="rail-showcase-metrics">
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">OPERATIONAL HEADWAY</div>
                  <div className="rail-showcase-metric-val">75–90 sec</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">DYNAMIC RECALCULATION</div>
                  <div className="rail-showcase-metric-val is-coral">&lt; 250 ms</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: BILATERAL INTEGRATION (Burgundy Showcase) ══ */}
        <section className="rail-mandate-section">
          <div className="rail-container">
            <div className="rail-mandate-grid">
              <div className="rail-mandate-lead">
                <div className="rail-mandate-badge">
                  <span className="rail-mandate-badge-dot" />
                  <span className="rail-mandate-badge-text">
                    DIVISION ARCHITECTURE • SECTION 01
                  </span>
                </div>

                <h2 className="rail-mandate-heading">
                  Bilateral Engineering Integration &amp; Formal Safety Logic
                </h2>

                <p className="rail-mandate-body">
                  Signalling safety permits zero heuristic conjecture. Our transnational engineering continuum binds Frankfurt and Kassel structural safety assurance with Bengaluru and Hyderabad formal verification algorithms into one deterministic, fail-safe infrastructure.
                </p>

                <div className="rail-mandate-note">
                  <div className="rail-mandate-note-label">ZERO-DEFECT MANDATE</div>
                  <p className="rail-mandate-note-text">
                    Every solid-state switch and code module is certified against CENELEC EN 50126, 50128, and 50129 SIL-4 benchmarks, providing full interoperability across European TSI CMS corridors and Indian Railways RDSO specifications.
                  </p>
                </div>
              </div>

              {/* Dual Axis Pillar Details */}
              <div className="rail-mandate-pillars">
                {/* Pillar 01: Germany */}
                <div className="rail-pillar">
                  <div className="rail-pillar-label">
                    BUREAUS • FRANKFURT &amp; KASSEL
                  </div>
                  <h3 className="rail-pillar-title">
                    German CENELEC EN 50126/50128/50129 Certification
                  </h3>
                  <p className="rail-pillar-text">
                    Hardware assurance is anchored in Kassel's stress facilities and Frankfurt's functional safety labs. Every trackside hermetic enclosure and 2oo3 microprocessor module undergoes cyclic thermal shock, resonant mechanical vibration under EN 61373 Cat 1 Class B, and galvanic surge isolation.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• CENELEC EN 50126, 50128, 50129 SIL-4 Accredited</li>
                    <li>• Environmental Ingress Standard: IP67 Stainless Seal</li>
                    <li>• Mechanical Shock Tolerance: EN 61373 Cat 1 Class B</li>
                  </ul>
                </div>

                {/* Pillar 02: India */}
                <div className="rail-pillar">
                  <div className="rail-pillar-label">
                    BUREAUS • BENGALURU &amp; HYDERABAD
                  </div>
                  <h3 className="rail-pillar-title">
                    Indian Mathematical Formal Provers &amp; RDSO Interlocking
                  </h3>
                  <p className="rail-pillar-text">
                    In Bengaluru and Hyderabad deep-tech centers, automated Atelier B mathematical provers and Z-notation execution mathematically eliminate deadlock, race states, and kinematic headway drift before physical fabrication. Real-time TMS dynamically recalculates corridor movements in under 250ms.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• Formal Logic Engine: Atelier B Mathematical Prover</li>
                    <li>• Real-Time Dynamic Recalculation: &lt; 250 ms</li>
                    <li>• RDSO Interlocking Compliance: IRS: S 36/96 Class I</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: PRODUCTION DEPLOYMENTS & SYSTEMS SHOWCASE ══ */}
        <section className="rail-container rail-narrative-section">
          <div className="rail-narrative-head">
            <div>
              <div className="rail-narrative-head-tag">
                DEPLOYMENT PORTFOLIO • SECTION 02
              </div>
              <h2 className="rail-narrative-head-title">
                Autonomous Signalling Systems
              </h2>
            </div>
            <p className="rail-narrative-head-blurb">
              Deterministic control architectures engineered for 350 km/h transnational trunk lines, dense metro corridors, and heavy-haul freight arteries.
            </p>
          </div>

          {/* System 01: High-Speed ETCS Level 2 / Level 3 */}
          <article className="rail-article">
            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">SYSTEM 01 • HIGH-SPEED ETCS</span>
                <span className="rail-badge-outline">TSI / SIL-4 COMPLIANT</span>
              </div>

              <h3 className="rail-article-title">
                ETCS Level 2 &amp; 3 Moving Block
                <span>Continuous 5G FRMCS Radio Supervision</span>
              </h3>

              <p className="rail-article-p1">
                Engineered to decommission restrictive legacy fixed-block track circuits, our virtual moving block envelope relies on continuous European Rail Traffic Management System (ERTMS) Baseline 3 MR1 radio supervision over 5G NR FRMCS backbones.
              </p>

              <p className="rail-article-p2">
                By synchronizing train length, instant deceleration curves, and balise positioning telegrams, the system contracts headways down to 90 seconds under high-speed line saturation exceeding 320 km/h, verified against strict TSI CMS interoperability benchmarks.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">OPERATIONAL SPEED</div>
                  <div className="rail-article-spec-val">320+ km/h</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">LINE HEADWAY</div>
                  <div className="rail-article-spec-val">90 sec</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">TELEMETRY</div>
                  <div className="rail-article-spec-val">5G FRMCS</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Driver cab signalling interface and digital track display"
                src={sgCab}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">
                SPEC CODE: ETCS-L3-GER-320
              </div>
            </div>
          </article>

          {/* System 02: Autonomous CBTC GoA4 Transit System */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img
                alt="Metro trainset aligned at a platform inside a commissioning hall"
                src={sgMetro}
                loading="lazy"
              />
              <div className="rail-spec-code at-left">
                SPEC CODE: CBTC-GOA4-BLR
              </div>
            </div>

            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">SYSTEM 02 • URBAN CBTC</span>
                <span className="rail-badge-outline">IEEE 1474 / GoA4</span>
              </div>

              <h3 className="rail-article-title">
                Autonomous CBTC GoA4
                <span>Sub-15mm Station Precision Docking</span>
              </h3>

              <p className="rail-article-p1">
                Operating at unattended train operation standards (GoA4 per IEC 62290), our communications-based train control suite unites bi-directional frequency-agile track-to-train radio telemetry with millimetric stopping algorithms.
              </p>

              <p className="rail-article-p2">
                Autonomous train formations complete platform screen door alignments within a precise ±15mm window, achieving sustained 75-second turnaround intervals at terminal crossovers and boosting line throughput by 34% without civil track enlargement.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">TRANSIT INTERVAL</div>
                  <div className="rail-article-spec-val">75 sec</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">DOCKING PRECISION</div>
                  <div className="rail-article-spec-val">± 15 mm</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">CAPACITY GAIN</div>
                  <div className="rail-article-spec-val">+34%</div>
                </div>
              </div>
            </div>
          </article>

          {/* System 03: Fail-Safe Solid-State Computer Interlocking */}
          <article className="rail-article">
            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">SYSTEM 03 • FAIL-SAFE INTERLOCKING</span>
                <span className="rail-badge-outline">SIL-4 / 2oo3 VOTING</span>
              </div>

              <h3 className="rail-article-title">
                Solid-State Computer Interlocking
                <span>Triplicate Voting Microprocessor Fabric</span>
              </h3>

              <p className="rail-article-p1">
                At the core of the fail-safe perimeter sits a 2-out-of-3 (2oo3) voting microprocessor execution fabric certified to CENELEC EN 50129 SIL-4. The hardware guarantees fault-masked deterministic route clearings and point actuation locks across complex terminal switch arrays.
              </p>

              <p className="rail-article-p2">
                Paired directly with Flox Intelligence trackside optical AI sensors, the interlocking fabric accommodates heavy-haul freight lines up to 25-tonne axle load operations while eliminating track circuit failures and insulated joint degradation.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">VOTING LOGIC</div>
                  <div className="rail-article-spec-val">2oo3 Core</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">AXLE LOAD LIMIT</div>
                  <div className="rail-article-spec-val">25.0 Tonnes</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">AVAILABILITY</div>
                  <div className="rail-article-spec-val">99.999%</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Electrified corridor with overhead catenary and trackside equipment"
                src={sgTrackside}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">
                SPEC CODE: SSI-2OO3-KSL
              </div>
            </div>
          </article>

          {/* System 04: Real-Time TMS Dynamic Dispatch Engine */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img
                alt="Engineers monitoring rail traffic from a control centre"
                src={sgControl}
                loading="lazy"
              />
              <div className="rail-spec-code at-left">
                SPEC CODE: TMS-HYD-REALTIME
              </div>
            </div>

            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">SYSTEM 04 • ALGORITHMIC DISPATCH</span>
                <span className="rail-badge-outline">REAL-TIME TRAFFIC MGMT</span>
              </div>

              <h3 className="rail-article-title">
                Real-Time TMS Dispatch Engine
                <span>Algorithmic Corridor Conflict Resolution</span>
              </h3>

              <p className="rail-article-p1">
                Engineered to eliminate domino dispatch delays across complex multi-corridor junctions, the real-time Traffic Management System computes kinematic conflict resolutions in under 250 milliseconds using deterministic constraint-satisfaction algorithms.
              </p>

              <p className="rail-article-p2">
                Integrating speed profile regulation with dynamic platform reallocation, the supervisory kernel optimizes traction power demand across peak morning hours, decreasing fleet energy dissipation by 18% while guaranteeing schedule punctuality.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">CONFLICT RESOLUTION</div>
                  <div className="rail-article-spec-val">&lt; 250 ms</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">ENERGY REDUCTION</div>
                  <div className="rail-article-spec-val">-18.4%</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">SCHEDULE ADHERENCE</div>
                  <div className="rail-article-spec-val">99.92%</div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ══ SECTION 4: OPERATIONAL HEADWAY & FIELD VALIDATION METRICS ══ */}
        <section className="rail-manifesto-section">
          <div className="rail-container">
            <div className="rail-manifesto-inner">
              <div className="rail-manifesto-tag">
                OPERATIONAL ASSURANCE • SECTION 03
              </div>

              <h2 className="rail-manifesto-title">
                Rigorous Headway Contraction &amp; Safety Integrity Metrics
              </h2>

              <p className="rail-manifesto-body">
                Sustaining continental heavy rail operations demands verified performance thresholds. Our integrated signalling suites combine provable formal safety bounds with measurable improvements in line velocity, throughput, and asset longevity.
              </p>

              <div className="rail-manifesto-grid">
                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">HAZARD INTEGRITY</div>
                  <div className="rail-manifesto-card-val">&lt; 10⁻¹⁰/hr</div>
                  <div className="rail-manifesto-card-caption">SIL-4 Tolerable Hazard Rate</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">HEADWAY CONTRACTION</div>
                  <div className="rail-manifesto-card-val">-40%</div>
                  <div className="rail-manifesto-card-caption">Moving block vs fixed circuit</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">LINE PUNCTUALITY</div>
                  <div className="rail-manifesto-card-val">99.92%</div>
                  <div className="rail-manifesto-card-caption">Real-time dynamic dispatch</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">SUBSYSTEM MTBF</div>
                  <div className="rail-manifesto-card-val">&gt; 100k Hrs</div>
                  <div className="rail-manifesto-card-caption">Continuous 2oo3 operation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 5: FIELD VALIDATION MATRIX ══ */}
        <section className="rail-container rail-table-section">
          <div className="rail-table-head">
            <div className="rail-table-tag">
              <span className="rail-table-tag-sq" />
              FIELD VALIDATION MATRIX • SECTION 04
            </div>
            <h2 className="rail-table-title">
              Comparative Corridor Architecture &amp; Certification Register
            </h2>
          </div>

          <div className="rail-table-wrapper">
            <table className="rail-table">
              <thead>
                <tr>
                  <th>Corridor &amp; Sector</th>
                  <th>Deployed Architecture</th>
                  <th>Operational Headway / Speed</th>
                  <th>Accreditation Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="is-param">
                    Rhein-Main Transit
                    <span className="sub-label">Frankfurt Core Arterial</span>
                  </td>
                  <td>ETCS Level 2 Baseline 3 MR1 with FRMCS 5G</td>
                  <td className="is-highlight">105 sec Headway / 160 km/h</td>
                  <td className="is-highlight">TSI CMS European Standards</td>
                </tr>
                <tr>
                  <td className="is-param">
                    Purple Spine Metro
                    <span className="sub-label">Bengaluru High-Density</span>
                  </td>
                  <td>Autonomous CBTC GoA4 IEEE 1474 Precision Docking</td>
                  <td className="is-highlight">75 sec Headway (±15mm docking)</td>
                  <td className="is-highlight">Indian Railways RDSO Approved</td>
                </tr>
                <tr>
                  <td className="is-param">
                    Kassel-Würzburg HSR
                    <span className="sub-label">German High-Speed Trunk</span>
                  </td>
                  <td>ETCS Level 3 Virtual Moving Block via 5G NR</td>
                  <td className="is-highlight">90 sec Headway / 320 km/h</td>
                  <td className="is-highlight">ERA European Union Agency for Railways</td>
                </tr>
                <tr>
                  <td className="is-param">
                    Western Freight Spine
                    <span className="sub-label">Heavy Haul Corridor</span>
                  </td>
                  <td>Fail-Safe Solid-State Interlocking (2oo3) + Flox Optical AI</td>
                  <td className="is-highlight">180 sec Moving Block / 25t Axle Load</td>
                  <td className="is-highlight">RDSO IRS: S 36/96 Class I Commissioned</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
