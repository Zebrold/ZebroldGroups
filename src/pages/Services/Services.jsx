import SEO from '../../components/SEO/SEO';
import '../RollingStock/RailShowcase.css';
import './Services.css';
import svHero from '../../assets/rail_catenary_corridor.jpg';
import svDepot from '../../assets/depot_maintenance_bay.webp';
import svOcc from '../../assets/deeptech_software_lab.jpg';
import svAlpine from '../../assets/highspeed_in_service.jpg';

export default function Services() {
  const seoData = {
    title: 'Zebrold IHL | Turnkey Rail Corridors & Sovereign Infrastructure',
    description:
      'Single-source EPC delivery of turnkey rail corridors — civil works, electrification, signalling and 30-to-40-year availability contracts across Europe and India.',
    keywords:
      'Zebrold, Scolome, turnkey rail, EPC, DBFMO, concession, ETCS Level 2, Rheda 2000, ballastless slab track, availability contract, FIDIC',
    url: '/services',
  };

  return (
    <div className="rail-page">
      <SEO {...seoData} />

      <main className="w-full">
        {/* ══ HERO ══ */}
        <section className="rail-container rail-hero-section">
          <div className="sv-kicker">Bilateral sovereign framework • Protocol ref. ZS-ACCORD-IV</div>

          <div className="rail-hero-grid">
            <div>
              <h1 className="rail-hero-title">
                Turnkey Rail Corridors &amp; <br />
                <em>Sovereign Infrastructure Synthesis</em>
              </h1>
            </div>
          </div>

          {/* Panoramic superstructure showcase */}
          <div className="rail-showcase-box">
            <img
              alt="Electrified rail corridor with overhead catenary above continuous slab trackbed"
              className="rail-showcase-img"
              src={svHero}
              loading="eager"
            />
            <div className="rail-showcase-overlay">
              <div className="rail-showcase-text">
                <div className="rail-showcase-text-tag">
                  <span className="rail-mandate-badge-dot" />
                  Superstructure registry • laser alignment subgrade
                </div>
                <h3 className="rail-showcase-title">
                  Subgrade Homologation &amp; Continuous Monolithic Slab Alignment
                </h3>
                <p className="rail-showcase-desc">
                  Precision ballastless slab laying synchronised through robotic millimetre-wave tacheometry, engineered
                  under FIDIC Silver Book conditions across 14,200+ continuous corridor nodes.
                </p>
              </div>

              <div className="rail-showcase-metrics">
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">LIFECYCLE</div>
                  <div className="rail-showcase-metric-val">35–40y</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">AVAILABILITY</div>
                  <div className="rail-showcase-metric-val is-coral">99.88%</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">INTEGRITY</div>
                  <div className="rail-showcase-metric-val">SIL-4</div>
                </div>
                <div className="rail-showcase-metric-item">
                  <div className="rail-showcase-metric-label">INTERFACE</div>
                  <div className="rail-showcase-metric-val">0.00%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: BILATERAL STRATEGIC FRAMEWORK ══ */}
        <section className="rail-mandate-section sv-framework-section">
          <div className="rail-container">
            <div className="sv-framework-head">
              <span className="sv-eyebrow">Axis architecture • Frankfurt • Kassel • Bengaluru • Hyderabad</span>
              <h2 className="sv-h2">Diplomatic Accord Meets Heavy Industrial Execution</h2>
              <p className="sv-lede">
                Zebrold IHL acts as the sole sovereign EPC legal envelope, absorbing contractor interface liabilities
                and coordinating bilateral industrial capability across continental Europe and the Indian subcontinent.
              </p>
            </div>

          <div className="sv-pillars">
            {/* Pillar 01 */}
            <div className="sv-pillar">
              <div className="sv-pillar-head">
                <span>PILLAR 01</span>
                <span className="sv-pillar-site">FRANKFURT &amp; KASSEL</span>
              </div>
              <h3 className="sv-pillar-title">Civil Engineering &amp; Bogie Homologation</h3>
              <p className="sv-pillar-text">
                Concession risk governance, alpine tunnel subgrade validation and Kassel mechanical bogie fabrication.
                Civil assets comply with DIN EN 15085 CL1, EN 13749 dynamic fatigue thresholds and 32.5-tonne axle
                loading limits.
              </p>
              <dl className="sv-kv">
                <div>
                  <dt>Overhaul capacity</dt>
                  <dd>480 heavy bogies / yr</dd>
                </div>
                <div>
                  <dt>Axle fatigue index</dt>
                  <dd>32.5 t freight certified</dd>
                </div>
                <div>
                  <dt>Civil warranty</dt>
                  <dd className="is-accent">40-year structural accord</dd>
                </div>
              </dl>
            </div>

            {/* Pillar 02 */}
            <div className="sv-pillar">
              <div className="sv-pillar-head">
                <span>PILLAR 02</span>
                <span className="sv-pillar-site">BENGALURU &amp; HYDERABAD</span>
              </div>
              <h3 className="sv-pillar-title">Deterministic RTOS &amp; Digital Twin Autonomy</h3>
              <p className="sv-pillar-text">
                Centralised SCADA telemetry kernels, wayside vibration analytics, corridor predictive networks and ETCS
                Level 2/3 and CBTC firmware running on bare-metal RTOS kernels with deterministic latency guarantees.
              </p>
              <dl className="sv-kv">
                <div>
                  <dt>Sensor throughput</dt>
                  <dd>2.4M telegrams / sec</dd>
                </div>
                <div>
                  <dt>Autonomous kernel</dt>
                  <dd>ATO GoA4 ready (RTOS)</dd>
                </div>
                <div>
                  <dt>Predictive modelling</dt>
                  <dd className="is-accent">Zero subgrade drift</dd>
                </div>
              </dl>
            </div>

            {/* Pillar 03 */}
            <div className="sv-pillar">
              <div className="sv-pillar-head">
                <span>PILLAR 03</span>
                <span className="sv-pillar-site">CONCESSION COVENANTS</span>
              </div>
              <h3 className="sv-pillar-title">Sovereign Financing &amp; Interface Shielding</h3>
              <p className="sv-pillar-text">
                Structuring bilateral export credit tranches under FIDIC Red and Silver books. Eliminates interface
                friction between rolling stock OEMs, track layers and signalling authorities.
              </p>
              <dl className="sv-kv">
                <div>
                  <dt>Contractual schema</dt>
                  <dd>FIDIC Silver Book DBFMO</dd>
                </div>
                <div>
                  <dt>Litigation exposure</dt>
                  <dd>Single EPC envelope</dd>
                </div>
                <div>
                  <dt>Sovereign ratification</dt>
                  <dd className="is-accent">DIN / EN / RDSO blended</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

        {/* ══ SECTION 3: FLAGSHIP CORRIDORS ══ */}
        <section className="rail-container rail-narrative-section">
          <div className="rail-narrative-head">
            <div>
              <span className="sv-eyebrow">Operational verification portfolio</span>
              <h2 className="rail-narrative-head-title">Flagship Delivered Corridors</h2>
            </div>
            <p className="rail-narrative-head-blurb">
              Three transnational railway programmes delivered under full single-source EPC covenants with verified
              operational zero-claim standing.
            </p>
          </div>

          {/* Corridor 01 */}
          <article className="rail-article">
            <div className="rail-article-text">
              <h3 className="rail-article-title">
                Rhein-Main Rapid Freight Link
                <span>284 km multi-modal high-density corridor</span>
              </h3>

              <p className="rail-article-p1">
                Delivered under a 35-year DBFMO concession, this heavy arterial corridor synchronises 284 km of newly
                bored dual-bore tunnels, 25 kV catenary electrification and a dedicated fleet of 84 high-adhesion
                battery-electric units. Single-point integration removed contractor interface disputes and completed the
                corridor four months ahead of schedule.
              </p>

              <div className="rail-article-specs is-four">
                <div>
                  <div className="rail-article-spec-label">LENGTH</div>
                  <div className="rail-article-spec-val">284 km</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">FLEET</div>
                  <div className="rail-article-spec-val">84 BEMU</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">HEADWAY</div>
                  <div className="rail-article-spec-val">180 sec</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">PUNCTUALITY</div>
                  <div className="rail-article-spec-val">99.88%</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img alt="Trainset standing in an automated overhaul depot bay" src={svDepot} loading="lazy" />
              <div className="rail-spec-code at-right">EPC REGISTRY: RMF-DBFMO-284</div>
              <div className="sv-caption at-left">Kassel automated overhaul depot</div>
            </div>
          </article>

          {/* Corridor 02 */}
          <article className="rail-article is-reversed">
            <div className="rail-article-media">
              <img alt="Centralised railway dispatch operations control centre" src={svOcc} loading="lazy" />
              <div className="rail-spec-code at-left">EPC REGISTRY: DXI-TRUNK-512</div>
              <div className="sv-caption at-right">Hyderabad OCC • ETCS L2 deterministic core</div>
            </div>

            <div className="rail-article-text">
              <h3 className="rail-article-title">
                Deccan Express Industrial Trunk
                <span>512 km heavy-haul corridor &amp; centralised OCC</span>
              </h3>

              <p className="rail-article-p1">
                Spanning broad-gauge industrial arteries across southern India, this 512 km turnkey corridor incorporates
                32.5-tonne axle loading, pre-cast ballastless track and Hyderabad-designed centralised traffic control
                with full ETCS Level 2 radio block centre overlays.
              </p>

              <div className="rail-article-specs is-four">
                <div>
                  <div className="rail-article-spec-label">SPAN</div>
                  <div className="rail-article-spec-val">512 km</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">AXLE LOAD</div>
                  <div className="rail-article-spec-val">32.5 t</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">SIGNALLING</div>
                  <div className="rail-article-spec-val">ETCS L2</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">PUNCTUALITY</div>
                  <div className="rail-article-spec-val">99.74%</div>
                </div>
              </div>
            </div>
          </article>

          {/* Corridor 03 */}
          <article className="rail-article">
            <div className="rail-article-text">
              <h3 className="rail-article-title">
                Nord-Süd Alpine Transit Pass
                <span>146 km 25 kV alpine base tunnel &amp; viaducts</span>
              </h3>

              <p className="rail-article-p1">
                Engineered through deep mountainous terrain, the Nord-Süd Alpine Pass features 68 km of subterranean base
                tunnels, 42 viaduct spans and continuous Rheda 2000 slab trackbed for passenger speeds up to 250 km/h.
                Zebrold IHL provided both the civil tunnel boring and the fire-hardened catenary electrification.
              </p>

              <div className="rail-article-specs is-four">
                <div>
                  <div className="rail-article-spec-label">TUNNELS</div>
                  <div className="rail-article-spec-val">68 km</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">VELOCITY</div>
                  <div className="rail-article-spec-val">250 km/h</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">SUPERSTR.</div>
                  <div className="rail-article-spec-val">Rheda 2000</div>
                </div>
                <div>
                  <div className="rail-article-spec-label">AVAILABILITY</div>
                  <div className="rail-article-spec-val">99.92%</div>
                </div>
              </div>
            </div>

            <div className="rail-article-media">
              <img alt="High-speed trainset running through mountainous terrain" src={svAlpine} loading="lazy" />
              <div className="rail-spec-code at-right">EPC REGISTRY: NSA-ALPINE-146</div>
              <div className="sv-caption at-left">Viaduct sector VII • monolithic pier alignment</div>
            </div>
          </article>
        </section>

        {/* ══ SECTION 4: LIFECYCLE ECONOMICS ══ */}
        <section className="rail-container sv-lifecycle">
          <div className="sv-framework-head">
            <span className="sv-eyebrow">Capital longevity &amp; decarbonisation charter</span>
            <h2 className="sv-h2">Lifecycle Sustainability &amp; Multi-Decade Preservation</h2>
            <p className="sv-lede">
              Fragmented rail delivery routinely inflates lifecycle expenditure by 28% to 44% through contractor
              interface friction, misaligned maintenance schedules and early infrastructure degradation. Turnkey
              covenants remove interface disputes while providing sovereign-grade availability guarantees.
            </p>
          </div>

          <div className="sv-metrics">
            <div className="sv-metric">
              <div className="sv-metric-label">Circularity index</div>
              <div className="sv-metric-val">96.4%</div>
              <p className="sv-metric-sub">Infrastructure recyclability</p>
              <p className="sv-metric-note">
                Steel rails, ballastless composite subgrade modules and copper contact lines engineered for full
                remanufacturing loops.
              </p>
            </div>

            <div className="sv-metric">
              <div className="sv-metric-label">Decarbonisation</div>
              <div className="sv-metric-val">−3.8M t</div>
              <p className="sv-metric-sub">CO₂e annual net offset</p>
              <p className="sv-metric-note">
                Direct displacement of heavy diesel road freight via 25 kV electric tractive effort and dynamic
                regenerative braking feedback.
              </p>
            </div>

            <div className="sv-metric">
              <div className="sv-metric-label">Structural durability</div>
              <div className="sv-metric-val">40+ yrs</div>
              <p className="sv-metric-sub">Subgrade &amp; viaduct durability</p>
              <p className="sv-metric-note">
                Laser-poured monolithic viaduct piers and tunnel liners guaranteed against settlement under continuous
                32.5 t axle loads.
              </p>
            </div>

            <div className="sv-metric">
              <div className="sv-metric-label">Legal interface risk</div>
              <div className="sv-metric-val">0.00%</div>
              <p className="sv-metric-sub">Single-source legal claims</p>
              <p className="sv-metric-note">
                Sole EPC liability prevents cross-litigation between rolling stock suppliers, civil contractors and
                signalling designers.
              </p>
            </div>
          </div>
        </section>

        {/* ══ SECTION 5: DELIVERY MATRIX ══ */}
        <section className="rail-container rail-table-section">
          <div className="rail-table-head">
            <div className="rail-table-tag">
              <span className="rail-table-tag-sq" />
              STATUTORY VERIFICATION • STANDARDS HOMOLOGATION
            </div>
            <h2 className="rail-table-title">Comparative Turnkey Delivery Matrix</h2>
          </div>

          <div className="rail-table-wrapper">
            <table className="rail-table">
              <thead>
                <tr>
                  <th>Architectural Parameter</th>
                  <th>Rhein-Main Freight Link</th>
                  <th>Deccan Industrial Trunk</th>
                  <th>Nord-Süd Alpine Pass</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="is-param">Concession Model</td>
                  <td>DBFMO (Design-Build-Finance-Operate)</td>
                  <td>Blended Sovereign PPP SPV</td>
                  <td>Single-Source EPC + 30-Yr O&amp;M</td>
                </tr>
                <tr>
                  <td className="is-param">Contract Horizon</td>
                  <td className="is-highlight">35 Years Availability Contract</td>
                  <td className="is-highlight">40 Years Availability Contract</td>
                  <td className="is-highlight">30 Years Performance Guarantee</td>
                </tr>
                <tr>
                  <td className="is-param">Inspection Authority</td>
                  <td>Notified Body / National Safety Authority</td>
                  <td>RDSO Commission • Ministry of Railways</td>
                  <td>Federal Transport Authority</td>
                </tr>
                <tr>
                  <td className="is-param">Headway &amp; Signalling</td>
                  <td>ETCS Level 2 (180 s headway)</td>
                  <td>ETCS L2 / CTC Radio (150 s headway)</td>
                  <td>ETCS L2 Baseline 3 (120 s headway)</td>
                </tr>
                <tr>
                  <td className="is-param">Track Superstructure</td>
                  <td>Heavy-Haul Ballasted &amp; Slab Subgrade</td>
                  <td>Pre-cast Ballastless Slab (32.5 t axle)</td>
                  <td>Rheda 2000 Slabbed Tunnel Trackbed</td>
                </tr>
                <tr>
                  <td className="is-param">Safety Integrity (SIL)</td>
                  <td className="is-highlight">SIL-4 (CENELEC EN 50126/8)</td>
                  <td className="is-highlight">SIL-4 (IEC 61508 / RDSO C-8814)</td>
                  <td className="is-highlight">SIL-4 (CENELEC EN 50129)</td>
                </tr>
                <tr>
                  <td className="is-param">Availability SLA</td>
                  <td>99.88% over concession</td>
                  <td>99.74% over concession</td>
                  <td>99.92% over concession</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
