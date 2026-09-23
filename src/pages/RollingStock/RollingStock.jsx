import SEO from '../../components/SEO/SEO';
import './RailShowcase.css';
import rsHero from '../../assets/highspeed_in_service.jpg';
import rsApex from '../../assets/scolome_hero.jpg';
import rsHorizon from '../../assets/metro_trainset.jpg';
import rsVelox from '../../assets/intercity_platform.webp';

export default function RollingStock() {
  const seoData = {
    title: 'Zebrold Scolome | Ultra Speed Intelligent Rolling Stocks',
    description:
      'Engineering high-speed aerodynamic coherence, zero-emission battery-electric architecture, and structurally optimized lightweight carbodies. Developed synchronously across Germany and India.',
    keywords:
      'Zebrold, Scolome, rolling stock, high-speed rail, Apex 350, B-EMU Horizon, InterCity Velox, Kassel, Bengaluru, TSI, SIL-4',
    url: '/rolling-stock',
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
                Pioneering Ultra Speed <br />
                <em>Intelligent Rolling Stocks</em>
              </h1>
            </div>
          </div>

          {/* Primary High-Speed Train Editorial Showcase */}
          <div className="rail-showcase-box">
            <img
              alt="Red high-speed trainset running at speed through open countryside"
              className="rail-showcase-img"
              src={rsHero}
              loading="eager"
            />
            {/* Editorial Overlay Metadata Badge */}
            <div className="rail-showcase-overlay">
              <div className="rail-showcase-text">
                <h3 className="rail-showcase-title">
                  Distributed Traction with Ultra-Low Drag Profile (Cd ≤ 0.198)
                </h3>
                <p className="rail-showcase-desc">
                  Engineered via Kassel wind tunnels and Bengaluru computational fluid dynamic models to eliminate crosswind oscillation at 350 km/h commercial velocity.
                </p>
              </div>

              <div className="rail-showcase-metrics">
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">MAX SPEED</div>
                  <div className="rail-showcase-metric-val">350 km/h</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">ENERGY RECUPERATION</div>
                  <div className="rail-showcase-metric-val is-coral">98.2%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: TRANSNATIONAL ENGINEERING MANDATE (Rich Burgundy Showcase) ══ */}
        <section className="rail-mandate-section">
          <div className="rail-container">
            <div className="rail-mandate-grid">
              <div className="rail-mandate-lead">
                <div className="rail-mandate-badge">
                  <span className="rail-mandate-badge-dot" />
                  <span className="rail-mandate-badge-text">
                    MANDATE &amp; MOBILITY CHARTER • SECTION 01
                  </span>
                </div>

                <h2 className="rail-mandate-heading">
                  The Sovereign Rail Mandate &amp; Transnational Synthesis
                </h2>

                <p className="rail-mandate-body">
                  Rolling stock is the sovereign foundation of continental transportation. Zebrold Scolome redefines heavy rail through relentless engineering rigor and bilateral innovation, combining the physical structural endurance forged across Kassel and Frankfurt with safety-critical software, traction algorithms, and real-time computing developed in Bengaluru and Hyderabad.
                </p>

                <div className="rail-mandate-note">
                  <div className="rail-mandate-note-label">BILATERAL RATIFICATION</div>
                  <p className="rail-mandate-note-text">
                    Ratified under European TSI (TSI 2023/1695) and Indian Railway RDSO Spec C-8814 standards, guaranteeing interoperability across continental gauges and harsh climatic envelopes (-25°C to +55°C).
                  </p>
                </div>
              </div>

              {/* Dual Axis Pillar Details */}
              <div className="rail-mandate-pillars">
                {/* Axis 01: Germany */}
                <div className="rail-pillar">
                  <div className="rail-pillar-label">
                    DIVISION 01 • KASSEL &amp; FRANKFURT
                  </div>
                  <h3 className="rail-pillar-title">
                    Structural &amp; Mechanical Dynamic Rigor
                  </h3>
                  <p className="rail-pillar-text">
                    Heavy fabrication, metallurgic purity, and dynamic bogie frame fatigue assurance calculated to endure ten million stress cycles under extreme torsional track excitation. Fabricated hollow-box steel bogie frames undergo multi-axial dynamic proving in Kassel test rigs under EN 13749 Annex C criteria.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• 4.5 MJ EN 15227 Crash Deformation Modules</li>
                    <li>• Bogie Hunting Dampening Verified &gt;380 km/h</li>
                    <li>• Axle-load Optimization ≤ 16.0 Tonnes</li>
                  </ul>
                </div>

                {/* Axis 02: India */}
                <div className="rail-pillar">
                  <div className="rail-pillar-label">
                    DIVISION 02 • BENGALURU &amp; HYDERABAD
                  </div>
                  <h3 className="rail-pillar-title">
                    Embedded Intelligence &amp; TCMS Core
                  </h3>
                  <p className="rail-pillar-text">
                    Safety-critical hard real-time train control management systems (TCMS), predictive traction algorithms, and automated diagnostics execute across redundant compute hardware certified to IEC 61508 and EN 50128 SIL-4 standards.
                  </p>
                  <ul className="rail-pillar-list">
                    <li>• Hard Real-Time CBTC Integration Logic</li>
                    <li>• 4,800 Predictive Telemetry Sensors Per Train</li>
                    <li>• 98.2% Silicon-Carbide Inverter Regeneration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: CORE FLEETS EDITORIAL NARRATIVE ══ */}
        <section className="rail-container rail-narrative-section">
          <div className="rail-narrative-head">
            <div>
              <h2 className="rail-narrative-head-title">
                Sovereign Production Fleets
              </h2>
            </div>
            <p className="rail-narrative-head-blurb">
              Three platform typologies engineered for high-density intercity links, un-electrified arterial routes, and intensive cross-regional transit networks.
            </p>
          </div>

          {/* Fleet Narrative 01: Apex 350 */}
          <article className="rail-article">
            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">CLASS A • HIGH-SPEED</span>
                <span className="rail-badge-outline">TSI / SIL-4 COMPLIANT</span>
              </div>

              <h3 className="rail-article-title">
                Scolome Apex 350
                <span>Ultra High-Speed Distributed Traction EMU</span>
              </h3>

              <p className="rail-article-p1">
                Engineered for high-density intercity corridors requiring minimum headway intervals, the Apex 350 distributes silicon-carbide inverters uniformly along the undercarriage. This architecture reduces structural axle loads below 16 tonnes while maximizing energy recuperation to 98.2% during continuous electrodynamic regenerative braking at sustained 350 km/h velocities.
              </p>

              <p className="rail-article-p2">
                Structural crash integrity strictly complies with EN 15227 design scenarios C-I through C-IV, supported by Bo’Bo’ + 2’2’ + Bo’Bo’ distributed axle configurations. Cabin acoustic barriers attenuate interior ambient noise beneath 61.4 dBA at 320 km/h cruise velocity, continuously governed via Bengaluru RT-OS real-time telemetry.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">MAX SPEED</div>
                  <div className="rail-article-spec-val">350 km/h</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">AXLE LOAD</div>
                  <div className="rail-article-spec-val">&lt; 16.0 t</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">ACCEL RATE</div>
                  <div className="rail-article-spec-val">0.72 m/s²</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Scolome Apex 350 high-speed trainset in Zebrold livery"
                src={rsApex}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">
                SPEC CODE: APEX-FRA-350
              </div>
            </div>
          </article>

          {/* Fleet Narrative 02: B-EMU Horizon */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img
                alt="Metro trainset on display inside a commissioning facility"
                src={rsHorizon}
                loading="lazy"
              />
              <div className="rail-spec-code at-left">
                SPEC CODE: HORIZON-HYD-04
              </div>
            </div>

            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">CLASS B • ZERO EMISSION</span>
                <span className="rail-badge-outline">TSI / RDSO TESTED</span>
              </div>

              <h3 className="rail-article-title">
                Scolome B-EMU Horizon
                <span>Mainline Zero-Emission Battery Multiple Unit</span>
              </h3>

              <p className="rail-article-p1">
                Engineered directly to replace diesel locomotive trainsets across un-electrified arterial corridors, the Horizon integrates modular solid-state lithium-titanate battery cassettes into its lightweight chassis. This yields an autonomous 180 km off-wire operational radius supported by 14-minute 800 kW pantograph ultra-rapid corridor recharging.
              </p>

              <p className="rail-article-p2">
                The sub-floor thermal management system operates reliably across extreme operational envelopes from -25°C to +55°C, delivering zero direct emissions (0.00 g/pkm) while sustaining 200 km/h under catenary and 160 km/h on pure internal battery reserves.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">BATTERY RADIUS</div>
                  <div className="rail-article-spec-val">180 km</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">RECHARGE TIME</div>
                  <div className="rail-article-spec-val">14 min</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">CATENARY SPEED</div>
                  <div className="rail-article-spec-val">200 km/h</div>
                </div>
              </div>
            </div>
          </article>

          {/* Fleet Narrative 03: InterCity Velox */}
          <article className="rail-article">
            <div className="rail-article-text">
              <div className="rail-badges">
                <span className="rail-badge-dark">CLASS C • INTERCITY REGIONAL</span>
                <span className="rail-badge-outline">TSI / EN 13749</span>
              </div>

              <h3 className="rail-article-title">
                Scolome InterCity Velox
                <span>High-Capacity Regional Passenger Architecture</span>
              </h3>

              <p className="rail-article-p1">
                Tailored for intensive cross-regional intercity lines interconnecting industrial centers, the Velox accommodates up to 1,120 passengers in an eight-car formation. Rapid boarding is governed by wide 1,400 mm double-leaf pressure plug doors that sustain an accelerated dwell profile under 38 seconds.
              </p>

              <p className="rail-article-p2">
                Vibration transmission is dampened by 84% through elastomeric floor isolation, while dual HEPA-filtered HVAC assemblies maintain 35 m³/h fresh air renewal cycles per passenger. Axle load remains under 17.5 tonnes fully laden, delivering an EN 12663 certified 30-year design lifespan at operational speeds up to 240 km/h.
              </p>

              <div className="rail-article-specs">
                <div>
                  <div className="rail-article-spec-label">CAPACITY</div>
                  <div className="rail-article-spec-val">1,120 Pax</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">DWELL TIME</div>
                  <div className="rail-article-spec-val">&lt; 38 sec</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">TOP SPEED</div>
                  <div className="rail-article-spec-val">240 km/h</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img
                alt="Intercity trainset waiting at a covered station platform"
                src={rsVelox}
                loading="lazy"
              />
              <div className="rail-spec-code at-right">
                SPEC CODE: VELOX-KSL-08
              </div>
            </div>
          </article>
        </section>

        {/* ══ SECTION 4: ENVIRONMENTAL SUSTAINABILITY MANIFESTO ══ */}
        <section className="rail-manifesto-section">
          <div className="rail-container">
            <div className="rail-manifesto-inner">
              <h2 className="rail-manifesto-title">
                Eliminating Heavy Diesel Dependance Through Full-Spectrum Electrification
              </h2>

              <p className="rail-manifesto-body">
                Over 42% of global mainline arterial rail remains un-electrified, bound to high-emission diesel traction. Zebrold Scolome systematically replaces legacy diesel locomotives through modular battery-electric hybridization and ultra-high-efficiency catenary trainsets. Our carbody structures incorporate 92% infinitely recyclable aluminum-lithium alloys and low-toxicity biosourced composite linings.
              </p>

              <div className="rail-manifesto-grid">
                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">DIRECT EMISSIONS</div>
                  <div className="rail-manifesto-card-val">0.00 g/pkm</div>
                  <div className="rail-manifesto-card-caption">In battery operational mode</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">RECYCLABILITY</div>
                  <div className="rail-manifesto-card-val">94.8%</div>
                  <div className="rail-manifesto-card-caption">Total carbody materials</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">BRAKING RECOVERY</div>
                  <div className="rail-manifesto-card-val">98.2%</div>
                  <div className="rail-manifesto-card-caption">Kinematic energy recuperation</div>
                </div>

                <div className="rail-manifesto-card">
                  <div className="rail-manifesto-card-label">SERVICE LIFESPAN</div>
                  <div className="rail-manifesto-card-val">30+ Years</div>
                  <div className="rail-manifesto-card-caption">EN 12663 structural design</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 5: VERIFIED TECHNICAL SPECIFICATION BENCHMARK ══ */}
        <section className="rail-container rail-table-section">
          <div className="rail-table-head">
            <div className="rail-table-tag">
              <span className="rail-table-tag-sq" />
              TECHNICAL BENCHMARK REGISTRY • SECTION 04
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
                  <th>Scolome Apex 350</th>
                  <th>Scolome B-EMU Horizon</th>
                  <th>Scolome InterCity Velox</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="is-param">Primary Propulsion</td>
                  <td>Distributed SiC Inverters (15kV / 25kV)</td>
                  <td>Dual Catenary + LTO Battery Cassettes</td>
                  <td>High-torque Synchronous PM Motors</td>
                </tr>
                <tr>
                  <td className="is-param">Maximum Service Speed</td>
                  <td className="is-highlight">350 km/h (Test: 385 km/h)</td>
                  <td className="is-highlight">200 km/h (160 km/h on Battery)</td>
                  <td className="is-highlight">240 km/h</td>
                </tr>
                <tr>
                  <td className="is-param">Static Maximum Axle Load</td>
                  <td>≤ 16.0 Tonnes</td>
                  <td>≤ 18.0 Tonnes</td>
                  <td>≤ 17.5 Tonnes</td>
                </tr>
                <tr>
                  <td className="is-param">Autonomous Non-Wire Range</td>
                  <td>Terminal Shunting (5 km auxiliary)</td>
                  <td className="is-highlight">180 km Continuous Service</td>
                  <td>Auxiliary Battery Shunting</td>
                </tr>
                <tr>
                  <td className="is-param">Crashworthiness Standard</td>
                  <td>EN 15227 (Scenarios C-I to C-IV)</td>
                  <td>EN 15227 / RDSO C-8814</td>
                  <td>EN 15227 Category C-I</td>
                </tr>
                <tr>
                  <td className="is-param">Bogie Fatigue Proving</td>
                  <td>10⁷ Dynamic Cycles (EN 13749)</td>
                  <td>10⁷ Dynamic Cycles (EN 13749)</td>
                  <td>10⁷ Dynamic Cycles (EN 13749)</td>
                </tr>
                <tr>
                  <td className="is-param">Control Integrity Level</td>
                  <td className="is-highlight">SIL-4 (IEC 61508 / EN 50128)</td>
                  <td className="is-highlight">SIL-4 (IEC 61508 / EN 50128)</td>
                  <td className="is-highlight">SIL-4 (IEC 61508 / EN 50128)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
