import SEO from '../../components/SEO/SEO';
import '../RollingStock/RailShowcase.css';
import cpHero from '../../assets/bogie_components_production.jpg';
import cpBogie from '../../assets/assembly_line_robotics.webp';
import cpMotor from '../../assets/traction_inverter.jpg';
import cpPantograph from '../../assets/highspeed_in_service.jpg';
import cpBrakes from '../../assets/carbody_shell_transfer.jpg';

export default function Components() {
  const seoData = {
    title: 'Zebrold IHL | Precision Railway Components & Bogie Engineering',
    description:
      'High-stress mechanical and electrical assemblies engineered for extreme velocity and rigorous dynamic envelopes. Bogies, SiC traction packages, pantographs, and mechatronic brakes.',
    keywords:
      'Zebrold, Scolome, railway components, bogie, KSL-350, traction motor, silicon carbide, pantograph, electro-pneumatic brakes, EN 13749',
    url: '/components',
  };

  return (
    <div className="rail-page">
      <SEO {...seoData} />

      <main className="w-full">
        {/* ══ SECTION 1: HERO SECTION ══ */}
        <section className="rail-container rail-hero-section">
          {/* Headline & Subtitle Editorial Group */}
          <div className="rail-hero-grid">
            <div>
              <div className="rail-hero-subhead" style={{ marginBottom: '1rem', color: '#8e8e93' }}>
                DIVISION: MECHANICAL &amp; ELECTRICAL SYSTEMS // TSI HS-2024 COMPLIANT
              </div>
              <h1 className="rail-hero-title">
                Heavy Mechanical Metallurgy &amp; Bogie Dynamics <br />
                <em>Precision Engineered Subsystems for Continental Corridors</em>
              </h1>
            </div>
          </div>

          {/* Primary Industrial Context & Workshop Hero Image */}
          <div className="rail-showcase-box">
            <img
              alt="High-speed train bogie frames and wheelsets in manufacturing workshop"
              className="rail-showcase-img"
              src={cpHero}
              loading="eager"
            />
            {/* Editorial Overlay Metadata Badge */}
            <div className="rail-showcase-overlay">
              <div className="rail-showcase-text">
                <span className="rail-showcase-text-tag">
                  FABRICATED STRUCTURAL CHASSIS • EN 13749 CLASS E
                </span>
                <h3 className="rail-showcase-title">
                  Weldment Assembly • Kassel Werk Dynamic Testing Pit IV
                </h3>
                <p className="rail-showcase-desc">
                  Stress-relieved tubular hollow-frame fabrication undergoing ultrasonic weld boundary testing prior to electro-pneumatic harness integration.
                </p>
              </div>

              <div className="rail-showcase-metrics">
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">FATIGUE PROOFING</div>
                  <div className="rail-showcase-metric-val">12×10⁶ Cycles</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">AXLE LOAD RATING</div>
                  <div className="rail-showcase-metric-val">16.0 – 25.0 T</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">MAJOR OVERHAUL</div>
                  <div className="rail-showcase-metric-val is-coral">1.2M km</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: TRANSNATIONAL METALLURGY & SENSOR TELEMATICS (Rich Burgundy Section) ══ */}
        <section className="rail-mandate-section">
          <div className="rail-container">
            <div className="rail-mandate-grid">
              <div className="rail-mandate-lead">
                <div className="rail-mandate-badge">
                  <span className="rail-mandate-badge-dot" />
                  <span className="rail-mandate-badge-text">
                    TRANSNATIONAL METALLURGY &amp; SENSOR TELEMATICS
                  </span>
                </div>

                <h2 className="rail-mandate-heading">
                  German Heavy Metallurgy Meets Indian Sensor Telematics
                </h2>

                <p className="rail-mandate-body">
                  Chassis structural integrity is forged through German metallurgical casting, precision automated welding, and rigorous dynamic shaker-rig qualification executed across Kassel and Frankfurt under EN 10204 3.2 certifications. Concurrently, sovereign digital intelligence—comprising embedded multi-axis vibration arrays, optical rail-head thermography, and SIL-4 telemetry firmware—is architected in Bengaluru and Hyderabad under CENELEC EN 50128 compliance.
                </p>

                <div className="rail-mandate-note">
                  <div className="rail-mandate-note-label">REAL-TIME TELEMETRY PROTOCOL</div>
                  <p className="rail-mandate-note-text">
                    Multi-point harmonic data acquisition streams continuous 1,000 Hz tri-axial acceleration vectors and bearing temperature signatures via redundant optical fiber channels directly to central depot management nodes.
                  </p>
                </div>
              </div>

              {/* Dual Axis Detail Columns */}
              <div className="rail-mandate-pillars">
                {/* Axis 01: German Metallurgy */}
                <div className="rail-pillar">
                  <div className="rail-pillar-label">
                    DIVISION 01 • KASSEL &amp; FRANKFURT
                  </div>
                  <h3 className="rail-pillar-title">
                    Structural Fatigue &amp; Ultrasonic Testing
                  </h3>
                  <p className="rail-pillar-text">
                    Fabricated low-alloy, high-yield S355J2W thermo-mechanically rolled steel plates undergo rigorous non-destructive examination. Multi-axial hydraulic dynamic rigs apply alternating static and lateral fatigue loads under EN 13749 Annex C specifications.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• Ultrasonic Level Class 1 / Zero Micro-Void</li>
                    <li>• Fatigue Proofing Exceeding 12×10⁶ Cycles</li>
                    <li>• Welded Box-Section Stress Relieving at 580°C</li>
                  </ul>
                </div>

                {/* Axis 02: Indian Telemetry */}
                <div className="rail-pillar">
                  <div className="rail-pillar-label">
                    DIVISION 02 • BENGALURU &amp; HYDERABAD
                  </div>
                  <h3 className="rail-pillar-title">
                    Continuous 1,000 Hz Telemetric Health Monitoring
                  </h3>
                  <p className="rail-pillar-text">
                    Embedded sensor arrays continuously monitor dynamic axle-box operating temperatures, yaw damping harmonic resonance, and wheel tread wear micro-variations. Edge computing nodes detect anomalies before bearing breakdown can manifest.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• 1,000 Hz Hard Real-Time Dynamic Sampling</li>
                    <li>• MTBF Projected at &gt; 85,000 Operating Hours</li>
                    <li>• CENELEC EN 50128 SIL-4 Redundant Firmware</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: COMPONENT ASSEMBLIES SHOWCASE ══ */}
        <section className="rail-container rail-narrative-section">
          <div className="rail-narrative-head">
            <div>
              <div className="rail-narrative-head-tag" style={{ color: '#8e8e93' }}>
                SUBSYSTEM ARCHITECTURE &amp; REQUISITE STANDARDS
              </div>
              <h2 className="rail-narrative-head-title">
                Critical Rolling Stock Assemblies
              </h2>
            </div>
            <p className="rail-narrative-head-blurb">
              Four precision mechanical and electrical assemblies engineered to withstand extreme velocity, high dynamic oscillation, and alternating electrical loads.
            </p>
          </div>

          {/* Component 01: High-Speed Bogie Assemblies */}
          <article className="rail-article">
            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">COMPONENT 01</span>
                <span className="rail-badge-outline">EN 13749 CLASS E</span>
              </div>

              <h3 className="rail-article-title">
                High-Speed Bogie Assemblies
                <span>KSL-350 Fabricated Frame with Active Yaw Damping</span>
              </h3>

              <p className="rail-article-p1">
                Engineered with fabricated low-alloy, high-yield S355J2W thermo-mechanically rolled steel plates, the chassis embodies an integrated H-profile geometry validated up to a 410 km/h critical stability limit. The primary stage employs calibrated elastomeric spring guides, while secondary suspension is governed by active air-bellows paired to linear electro-hydraulic blind-chamber yaw dampers.
              </p>

              <p className="rail-article-p2">
                Integrated axle box telemetry channels continuous vibration and temperature readings back to the TCMS, ensuring absolute dynamic composure and isolation across sustained 350 km/h cruising profiles under static axle burdens of 16.0 to 25.0 metric tonnes.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">CRITICAL SPEED</div>
                  <div className="rail-article-spec-val">410 km/h</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">STATIC AXLE LOAD</div>
                  <div className="rail-article-spec-val">16.0 – 25.0 t</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">FRAME LIFESPAN</div>
                  <div className="rail-article-spec-val">40 Years</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Trainset underframes and bogies on the robotic assembly line"
                src={cpBogie}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">
                ASSY CODE: BOGIE-KSL-350
              </div>
            </div>
          </article>

          {/* Component 02: Traction Motors & SiC Topologies */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img
                alt="Traction inverter and power electronics module"
                src={cpMotor}
                loading="lazy"
              />
              <div className="rail-spec-code at-left">
                ASSY CODE: TRAC-SIC-3300
              </div>
            </div>

            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">COMPONENT 02</span>
                <span className="rail-badge-outline">SIL-4 CONTROLLER</span>
              </div>

              <h3 className="rail-article-title">
                High-Torque Permanent Magnet Traction Motors
                <span>Silicon-Carbide (SiC) Power Topologies &amp; Converters</span>
              </h3>

              <p className="rail-article-p1">
                Transitioning beyond legacy IGBT topologies, next-generation 3.3 kV MOSFET power modules deliver a verified 98.2% electrical energy conversion efficiency across 15 kV and 25 kV AC catenary inputs. Operating at 15.0 kHz optimized pulse modulation, these units offer an outstanding power density of 6.8 kW/dm³.
              </p>

              <p className="rail-article-p2">
                Thermal balance is sustained by closed-loop direct deionized glycol-water circuits passing 45 L/min at a 65°C delta maximum, shrinking converter spatial footprint by 42% and eliminating heavy sub-frame thermal sinks.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">CONVERSION EFF.</div>
                  <div className="rail-article-spec-val">98.2%</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">SWITCHING FREQ.</div>
                  <div className="rail-article-spec-val">15.0 kHz</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">SPACE REDUCTION</div>
                  <div className="rail-article-spec-val">-42%</div>
                </div>
              </div>
            </div>
          </article>

          {/* Component 03: Carbon-Composite Pantographs */}
          <article className="rail-article">
            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">COMPONENT 03</span>
                <span className="rail-badge-outline">EN 50206-1 COMPLIANT</span>
              </div>

              <h3 className="rail-article-title">
                Carbon-Composite Pantographs &amp; Current Collectors
                <span>Aerodynamic Active Contact Force &amp; Auto-Drop System</span>
              </h3>

              <p className="rail-article-p1">
                Constructed around an ultra-light carbon-composite knee frame with collector strip widths of 1,950 mm (TSI) or 1,450 mm profiles, the assembly features micro-actuated active contact-force control continuously modulating between 70 N and 120 N across fluctuating catenary geometry.
              </p>

              <p className="rail-article-p2">
                Even through severe aero-acoustic conditions below 78 dBA at 350 km/h bypass, the sub-12 millisecond auto-drop pneumatic adjustment loop eliminates contact lift and prevents localized catenary gouging or wire entanglement.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">CONTACT FORCE</div>
                  <div className="rail-article-spec-val">70 – 120 N</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">RESPONSE LATENCY</div>
                  <div className="rail-article-spec-val">&lt; 12 ms</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">AERO ACOUSTIC</div>
                  <div className="rail-article-spec-val">&lt; 78 dBA</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Pantograph raised against the catenary on a train at speed"
                src={cpPantograph}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">
                ASSY CODE: PANTO-AERO-380
              </div>
            </div>
          </article>

          {/* Component 04: Mechatronic Braking Units */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img
                alt="Carbody shell lifted clear of its transfer table in the works"
                src={cpBrakes}
                loading="lazy"
              />
              <div className="rail-spec-code at-left">
                ASSY CODE: BRAKE-WSP-640
              </div>
            </div>

            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">COMPONENT 04</span>
                <span className="rail-badge-outline">UIC 541-05 SPEC</span>
              </div>

              <h3 className="rail-article-title">
                Mechatronic Electro-Pneumatic Braking Units
                <span>Kinematic Energy Recuperation &amp; WSP Micro-Adhesion</span>
              </h3>

              <p className="rail-article-p1">
                Deceleration protocols couple triple-ventilated 640 mm spheroidal nodular cast iron axle discs with electro-pneumatic blending algorithms yielding 1.25 m/s² service and 1.35 m/s² emergency arrest rates. An onboard Wheel Slide Protection (WSP) ECU samples at 4-millisecond latencies.
              </p>

              <p className="rail-article-p2">
                Dual-channel SIL-4 microprocessors detect microscopic wheel slip, regulating caliper force to optimize wheel-rail adhesion during degraded friction states while funneling up to 98.2% of dynamic kinetic energy back into catenary grids.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">EMERGENCY ARREST</div>
                  <div className="rail-article-spec-val">1.35 m/s²</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">DISC DIAMETER</div>
                  <div className="rail-article-spec-val">640 mm</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">WSP LATENCY</div>
                  <div className="rail-article-spec-val">4 ms</div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ══ SECTION 4: SUSTAINABILITY & EXPLOITATION METRICS ══ */}
        <section className="rail-manifesto-section">
          <div className="rail-container">
            <div className="rail-manifesto-inner">
              <div className="rail-manifesto-tag" style={{ color: '#8e8e93' }}>
                SUSTAINABILITY &amp; EXPLOITATION LIFE
              </div>

              <h2 className="rail-manifesto-title">
                Designed Lifecycle Durability &amp; Exploitation Metrics
              </h2>

              <p className="rail-manifesto-body">
                Continental rail infrastructure initiatives demand multi-decade operational viability without systemic structural fatigue. Every assembly is designed around a continuous 40-year service lifecycle that maintains frame structural permanence under alternating load cycles, with minimal environmental exploitation footprint.
              </p>

              <div className="rail-manifesto-grid">
                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">RECYCLABILITY</div>
                  <div className="rail-manifesto-card-val">96.4%</div>
                  <div className="rail-manifesto-card-caption">Total component metallurgy</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">FRAME PERMANENCE</div>
                  <div className="rail-manifesto-card-val">40-Year</div>
                  <div className="rail-manifesto-card-caption">EN 13749 structural horizon</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">ULTRASONIC LEVEL</div>
                  <div className="rail-manifesto-card-val">Class 1</div>
                  <div className="rail-manifesto-card-caption">Zero micro-void certification</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">SAFETY COEFF</div>
                  <div className="rail-manifesto-card-val">&gt; 3.2</div>
                  <div className="rail-manifesto-card-caption">Multi-axial fatigue margin</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 5: COMPARATIVE ENGINEERING METRICS TABLE ══ */}
        <section className="rail-container rail-table-section">
          <div className="rail-table-head">
            <div className="rail-table-tag">
              <span className="rail-table-tag-sq" />
              COMPONENT SPECIFICATION MATRIX • REGISTER 08.24
            </div>
            <h2 className="rail-table-title">
              Comparative Engineering Metrics
            </h2>
          </div>

          <div className="rail-table-wrapper">
            <table className="rail-table">
              <thead>
                <tr>
                  <th>Component Subsystem</th>
                  <th>Metallurgical Specification</th>
                  <th>Major Overhaul Cycle</th>
                  <th>Telemetric Frequency</th>
                  <th>Homologation Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="is-param">KSL-350 High-Speed Bogie</td>
                  <td>S355J2W Thermo-mechanical Steel Plates</td>
                  <td className="is-highlight">1,200,000 km</td>
                  <td>1,000 Hz Tri-axial Vibration</td>
                  <td className="is-highlight">EN 13749 Annex C / TSI HS</td>
                </tr>
                <tr>
                  <td className="is-param">SiC Traction Power Topologies</td>
                  <td>3.3 kV Silicon Carbide MOSFET / Oxygen-Free Copper</td>
                  <td className="is-highlight">1,800,000 km</td>
                  <td>15.0 kHz Switching Diagnostics</td>
                  <td className="is-highlight">IEC 61287-1 / EN 50128 SIL-4</td>
                </tr>
                <tr>
                  <td className="is-param">Active Carbon Pantographs</td>
                  <td>Ultra-light Carbon Composite / Copper Strip Insert</td>
                  <td className="is-highlight">600,000 km (Wear strip: 150,000 km)</td>
                  <td>500 Hz Force Tracking</td>
                  <td className="is-highlight">EN 50206-1 / TSI LOC&amp;PAS</td>
                </tr>
                <tr>
                  <td className="is-param">Mechatronic Disc Braking &amp; WSP</td>
                  <td>Triple-ventilated Nodular Cast Iron (EN-GJS-400-18)</td>
                  <td className="is-highlight">900,000 km</td>
                  <td>4 ms Wheel-slide Detection</td>
                  <td className="is-highlight">UIC 541-05 / EN 14535-1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
