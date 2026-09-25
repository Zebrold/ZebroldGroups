import SEO from '../../components/SEO/SEO';
import '../RollingStock/RailShowcase.css';
import drHero from '../../assets/train_cockpit_digital.jpg';
import drTwinOs from '../../assets/deeptech_software_lab.jpg';
import drEdge from '../../assets/traction_inverter.jpg';
import drDispatch from '../../assets/field_engineer_diagnostics.jpg';
import drCyber from '../../assets/autonomous_rail_sensor.jpg';

export default function DigitalRail() {
  const seoData = {
    title: 'Zebrold IHL | Intelligent Digital Rail & Predictive TwinOS',
    description:
      'Digital twin telemetry, AI predictive maintenance, autonomous dispatch and cyber-secure rail architecture. Edge computing engineered in Frankfurt and Kassel, neural prognostics in Bengaluru and Hyderabad.',
    keywords:
      'Zebrold, Scolome, digital rail, digital twin, TwinOS, predictive maintenance, ATO GoA4, IEC 62443, EN 50128, SIL-4, FRMCS, telemetry',
    url: '/digital-rail',
  };

  return (
    <div className="rail-page">
      <SEO {...seoData} />

      <main className="w-full">
        {/* ══ HERO ══ */}
        <section className="rail-container rail-hero-section">
          <div className="rail-hero-grid">
            <div>
              <h1 className="rail-hero-title">
                Intelligent Digital Rail &amp; <br />
                <em>Predictive TwinOS</em>
              </h1>
            </div>
          </div>

          {/* Primary showcase */}
          <div className="rail-showcase-box">
            <img
              alt="Driver cab with digital telemetry and predictive control displays"
              className="rail-showcase-img"
              src={drHero}
              loading="eager"
            />
            <div className="rail-showcase-overlay">
              <div className="rail-showcase-text">
                <h3 className="rail-showcase-title">Edge Computing Meets Safety-Critical Cybernetics</h3>
                <p className="rail-showcase-desc">
                  ERTMS/ETCS Level 2 human-machine interface coupled with sub-millisecond edge telemetry pipelines,
                  continuously validated across the Frankfurt, Kassel and Bengaluru development corridors.
                </p>
              </div>

              <div className="rail-showcase-metrics">
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">ACTIVE SENSOR CHANNELS</div>
                  <div className="rail-showcase-metric-val">4,200/Train</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">LEAD TIME TO FAILURE</div>
                  <div className="rail-showcase-metric-val is-coral">336 Hrs</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">SAFETY INTEGRITY</div>
                  <div className="rail-showcase-metric-val">SIL-4</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: TRANSNATIONAL DIGITAL MANDATE ══ */}
        <section className="rail-mandate-section">
          <div className="rail-container">
            <div className="rail-mandate-grid">
              <div className="rail-mandate-lead">
                <div className="rail-mandate-badge">
                  <span className="rail-mandate-badge-dot" />
                  <span className="rail-mandate-badge-text">MANDATE &amp; TELEMETRY CHARTER</span>
                </div>

                <h2 className="rail-mandate-heading">The Sovereign Digital Mandate &amp; Transnational Telemetry</h2>

                <p className="rail-mandate-body">
                  Mission-critical rail operation requires sovereign computational integrity. Zebrold IHL bridges
                  European functional safety standards with sub-continental software scale, synchronising real-time twin
                  telemetry between Kassel and Frankfurt safety computing and Bengaluru and Hyderabad neural
                  prognostics.
                </p>

                <div className="rail-mandate-note">
                  <div className="rail-mandate-note-label">SUB-MILLISECOND PROTOCOL</div>
                  <p className="rail-mandate-note-text">
                    Ratified under CENELEC EN 50128/50129 SIL-4 and IEC 62443 cyber-security frameworks. Interoperable
                    with FRMCS / 5G-R rail telecommunication networks and European TSI standards.
                  </p>
                </div>
              </div>

              <div className="rail-mandate-pillars">
                <div className="rail-pillar">
                  <div className="rail-pillar-label">DIVISION 01 • KASSEL &amp; FRANKFURT</div>
                  <h3 className="rail-pillar-title">Industrial Edge Computing &amp; Safety Cores</h3>
                  <p className="rail-pillar-text">
                    Ruggedised trackside and on-vehicle compute nodes built to withstand high electromagnetic
                    interference, mechanical shock and extreme thermal ranges (−40 °C to +85 °C) across a 30-year
                    lifecycle.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• EN 50155 / EN 50121-3-2 Convection-Cooled Hardware</li>
                    <li>• Dual Modular 2oo3 Voting Redundancy</li>
                    <li>• SIL-4 CENELEC EN 50126 Safety Verification</li>
                  </ul>
                </div>

                <div className="rail-pillar">
                  <div className="rail-pillar-label">DIVISION 02 • BENGALURU &amp; HYDERABAD</div>
                  <h3 className="rail-pillar-title">Cloud Scale, Neural Networks &amp; Telematics</h3>
                  <p className="rail-pillar-text">
                    Distributed cloud infrastructure ingests millions of telemetry frames per second. Spatio-temporal
                    neural architectures and edge inferencing forecast critical mechanical anomalies weeks prior to
                    service disruption.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• &gt; 1,000,000 Ingested Telemetry Events / Sec</li>
                    <li>• Transformer &amp; Spatio-Temporal GNN Models</li>
                    <li>• Native OSDM / RailTopoModel Interoperability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: CORE INTELLIGENCE PLATFORMS ══ */}
        <section className="rail-container rail-narrative-section">
          <div className="rail-narrative-head">
            <div>
              <h2 className="rail-narrative-head-title">Core Intelligence Platforms</h2>
            </div>
            <p className="rail-narrative-head-blurb">
              Four integrated, cyber-hardened systems engineered for continuous predictive health diagnostics,
              autonomous dispatch and fleet-wide energy governance.
            </p>
          </div>

          {/* Platform 01 */}
          <article className="rail-article">
            <div className="rail-article-text">
              <h3 className="rail-article-title">
                Scolome TwinOS
                <span>Sub-Millisecond Dynamic Digital Twin Platform</span>
              </h3>

              <p className="rail-article-p1">
                A dynamic, millisecond-synchronised mathematical twin of every active rolling stock asset. Scolome
                TwinOS ingests over 4,200 telemetry channels per car — primary suspension travel, bogie yaw-damping
                oscillation, pantograph arc frequency and IGBT inverter thermal dispersion.
              </p>

              <p className="rail-article-p2">
                Cross-validated continuously against laser track measurement vehicles on the Frankfurt–Kassel corridor,
                achieving sub-centimetre spatial positioning and multi-physics thermal mapping across active high-speed
                networks.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">ACCURACY INDEX</div>
                  <div className="rail-article-spec-val">99.94%</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">SAMPLE RATE</div>
                  <div className="rail-article-spec-val">10 Hz Sync</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">CHANNELS/CAR</div>
                  <div className="rail-article-spec-val">4,200+</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Engineers monitoring digital twin telemetry in a rail operations control room"
                src={drTwinOs}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">SPEC CODE: TWINOS-CORE-V9</div>
            </div>
          </article>

          {/* Platform 02 */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img
                alt="Modular edge computing and power electronics hardware on a test bench"
                src={drEdge}
                loading="lazy"
              />
              <div className="rail-spec-code at-left">SPEC CODE: AI-NEURAL-PROG</div>
            </div>

            <div className="rail-article-text">
              <h3 className="rail-article-title">
                AI Predictive Maintenance Engine
                <span>Deep Cognition &amp; Automated Depot Work-Orders</span>
              </h3>

              <p className="rail-article-p1">
                Deep neural networks developed at the Bengaluru R&amp;D facility, trained across historical operational
                telemetry spanning 14 years and 8.6 billion passenger-kilometres. The engine isolates anomalies across
                harmonic gearbox vibration, lubrication breakdown and pantograph carbon strip erosion.
              </p>

              <p className="rail-article-p2">
                Direct integration with ERP and SAP S/4HANA stages spare components and reserves depot service bays
                automatically, giving operators a 336-hour lead time ahead of any critical threshold violation.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">PREDICTION WINDOW</div>
                  <div className="rail-article-spec-val">336 Hours</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">DATA CORPUS</div>
                  <div className="rail-article-spec-val">8.6B Pax-Km</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">AUTOMATION</div>
                  <div className="rail-article-spec-val">SAP S/4HANA</div>
                </div>
              </div>
            </div>
          </article>

          {/* Platform 03 */}
          <article className="rail-article">
            <div className="rail-article-text">
              <h3 className="rail-article-title">
                Autonomous Dispatch &amp; Energy Optimisation
                <span>Algorithmic Coasting &amp; Headway Compression</span>
              </h3>

              <p className="rail-article-p1">
                Algorithmic regulation of train separation and acceleration dynamics across dense metropolitan and
                intercity corridors. Throttle notch commands, regenerative braking recapture profiles and coasting
                points adjust continuously against real-time track gradient, grid tariff and traffic delay.
              </p>

              <p className="rail-article-p2">
                Headways compress to 90 seconds while achieving over 94% regenerative braking capture, with a measured
                22.4% net power consumption reduction across mixed passenger and freight mainlines.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">ENERGY SAVINGS</div>
                  <div className="rail-article-spec-val">−22.4%</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">MIN HEADWAY</div>
                  <div className="rail-article-spec-val">90 sec</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">REGEN RECAPTURE</div>
                  <div className="rail-article-spec-val">&gt; 94%</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Engineer running trainset diagnostics from a depot workstation"
                src={drDispatch}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">SPEC CODE: ATO-DISPATCH-G4</div>
            </div>
          </article>

          {/* Platform 04 */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img
                alt="Forward-facing trackside detection sensor array mounted on a trainset"
                src={drCyber}
                loading="lazy"
              />
              <div className="rail-spec-code at-left">SPEC CODE: SEC-IEC62443-SL4</div>
            </div>

            <div className="rail-article-text">
              <h3 className="rail-article-title">
                Cyber-Secure Rail Architecture
                <span>Hardware Security Modules &amp; Air-Gapped Diodes</span>
              </h3>

              <p className="rail-article-p1">
                Mission-critical operation demands sovereign protection against sophisticated intrusion. Every onboard
                Ethernet Train Backbone and train-to-ground 5G-R/FRMCS link is shielded by hardware security modules,
                unidirectional data diodes and zero-trust firmware pipelines.
              </p>

              <p className="rail-article-p2">
                Compliance with IEC 62443 Security Level 4 and CLC/TS 50701 rail cyber-security standards underpins
                continuous cryptographic PKI certificate rotation and sovereign network isolation.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">SECURITY LEVEL</div>
                  <div className="rail-article-spec-val">SL-4 Rating</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">ENCRYPTION</div>
                  <div className="rail-article-spec-val">AES-GCM-256</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">HARDWARE ROOT</div>
                  <div className="rail-article-spec-val">TPM 2.0 HSM</div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ══ SECTION 4: OPERATIONAL IMPACT ══ */}
        <section className="rail-manifesto-section">
          <div className="rail-container">
            <div className="rail-manifesto-inner">
              <h2 className="rail-manifesto-title">Documented Fleet Reliability &amp; Predictive Efficiency</h2>

              <p className="rail-manifesto-body">
                Decoupling maintenance cycles from static timetables keeps rolling stock operating at maximum revenue
                cadence. Figures below are drawn from 24-month operational telemetry on corridors running the full
                TwinOS stack, and are indicative rather than contractually warranted.
              </p>

              <div className="rail-manifesto-grid">
                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">FLEET AVAILABILITY</div>
                  <div className="rail-manifesto-card-val">99.8%</div>
                  <div className="rail-manifesto-card-caption">24-month rolling average</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">DEPOT ADMISSIONS</div>
                  <div className="rail-manifesto-card-val">−35%</div>
                  <div className="rail-manifesto-card-caption">Reduction in reactive workshop pulls</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">LINE STOPPAGES</div>
                  <div className="rail-manifesto-card-val">0.00</div>
                  <div className="rail-manifesto-card-caption">Unplanned mid-corridor halts</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">ENERGY SAVINGS</div>
                  <div className="rail-manifesto-card-val">−22.4%</div>
                  <div className="rail-manifesto-card-caption">Measured across 180 km corridors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 5: BENCHMARK REGISTRY ══ */}
        <section className="rail-container rail-table-section">
          <div className="rail-table-head">
            <div className="rail-table-tag">
              <span className="rail-table-tag-sq" />
              TECHNICAL BENCHMARK REGISTRY
            </div>
            <h2 className="rail-table-title">Comparative Engineering &amp; Computing Metrics</h2>
          </div>

          <div className="rail-table-wrapper">
            <table className="rail-table">
              <thead>
                <tr>
                  <th>Architectural Parameter</th>
                  <th>German Hardware Layer</th>
                  <th>Indian Telematics &amp; AI Layer</th>
                  <th>Integrated Scolome TwinOS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="is-param">Hardware &amp; Telecom Standards</td>
                  <td>EN 50155 / EN 50121-3-2</td>
                  <td>OSDM / RailTopoModel / NeTEx</td>
                  <td>IEC 62443 / CLC/TS 50701 SL-4</td>
                </tr>
                <tr>
                  <td className="is-param">Redundancy Architecture</td>
                  <td className="is-highlight">Dual Modular 2oo3 Voting</td>
                  <td className="is-highlight">Multi-Region Byzantine Fault Tolerant</td>
                  <td className="is-highlight">Triple-Redundant Hot Standby</td>
                </tr>
                <tr>
                  <td className="is-param">Operating Thermal Envelope</td>
                  <td>−40 °C to +85 °C Convection-Cooled</td>
                  <td>Tier-IV Datacentre Dynamic Scale</td>
                  <td>−40 °C to +85 °C Chassis Hardening</td>
                </tr>
                <tr>
                  <td className="is-param">Telemetry Ingestion Throughput</td>
                  <td>100 Mbps Deterministic ETB Bus</td>
                  <td className="is-highlight">&gt; 1,000,000 Events / Second</td>
                  <td className="is-highlight">2.48 × 10⁶ Data Points / Sec</td>
                </tr>
                <tr>
                  <td className="is-param">Prognostics &amp; Fault Window</td>
                  <td>Microsecond Hardware Sensor Polling</td>
                  <td>Spatio-Temporal GNN Models</td>
                  <td>336 Hours (14 Days) Predictive Horizon</td>
                </tr>
                <tr>
                  <td className="is-param">Control Integrity Level</td>
                  <td className="is-highlight">SIL-4 (IEC 61508 / EN 50128)</td>
                  <td className="is-highlight">High-Assurance Safety Runtime</td>
                  <td className="is-highlight">SIL-4 Certified E2E Pipeline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
