import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO/SEO';
import {
  productCategories,
  productsList,
  platformComparisonMatrix,
} from '../../data/productsData';
import heroImg from '../../assets/trainset_rollout.jpg';
import kasselPit from '../../assets/carbody_shell_transfer.jpg';
import frankfurtLab from '../../assets/traction_inverter.jpg';
import bengaluruLab from '../../assets/deeptech_software_lab.jpg';
import './Products.css';

export default function Products() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return productsList;
    return productsList.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const seoData = {
    title:
      lang === 'de'
        ? 'Zebrold Scolome | Hochgeschwindigkeitsflotten & Bahnsubsysteme'
        : 'Zebrold Scolome | High-Speed Rolling Stock & Subsystem Technologies',
    description:
      lang === 'de'
        ? 'Umfassendes Produktportfolio von Zebrold Scolome: Hochgeschwindigkeits-Triebzüge, KSL-350 Drehgestelle, SiC-Traktionsinverter, SIL-4 ETCS Zugsicherung und schlüsselfertiger Oberbau.'
        : 'Comprehensive product portfolio of Zebrold Scolome: High-speed passenger trainsets, KSL-350 dynamic bogies, SiC traction packages, SIL-4 ETCS signalling and turnkey superstructure.',
    keywords:
      'Zebrold, Scolome, products, rolling stock, high speed train, Apex 350, KSL-350 bogie, SiC traction inverter, ETCS Level 2 3, TSI HS-2024, railway components',
    url: '/products',
  };

  return (
    <div className="prod-page">
      <SEO {...seoData} />

      {/* ══ SECTION 1: EDITORIAL HERO ══ */}
      <section className="prod-hero-section">
        <div className="shell">
          <div className="prod-hero-header">
            <div className="prod-eyebrow">
              <span className="prod-eyebrow-dot" />
              <span>
                {lang === 'de'
                  ? 'PRODUKT-PORTFOLIO // TSI HS-2024 & SIL-4 SYSTEME'
                  : 'PRODUCT PORTFOLIO // TSI HS-2024 & SIL-4 SYSTEMS'}
              </span>
            </div>

            <h1 className="prod-hero-title">
              {lang === 'de' ? (
                <>
                  Präzisions-Schienenflotten &amp; <br />
                  <em>Zukunftsweisende Subsysteme</em>
                </>
              ) : (
                <>
                  Precision Railway Fleets &amp; <br />
                  <em>Next-Gen Subsystem Synthesis</em>
                </>
              )}
            </h1>

            <p className="prod-hero-lede">
              {lang === 'de'
                ? 'Deutsche Metallurgie und Konstruktionsdisziplin verschmolzen mit indischer Sensorik und KI-Signaltechnik. Von 360 km/h Hochgeschwindigkeits-Triebzügen bis zu flüssigkeitsgekühlten SiC-Traktionssystemen und schotterlosem Oberbau.'
                : 'German metallurgical casting and structural endurance fused with Indian sensor telematics and SIL-4 autonomous control. From 360 km/h high-speed passenger trainsets to liquid-cooled SiC traction drives and turnkey superstructure.'}
            </p>
          </div>

          {/* Hero Showcase Display Container */}
          <div className="prod-hero-banner">
            <img
              src={heroImg}
              alt={
                lang === 'de'
                  ? 'Zebrold Scolome Triebzug-Rollout'
                  : 'Zebrold Scolome High-Speed Trainset Rollout'
              }
              className="prod-hero-img"
              loading="eager"
            />
            <div className="prod-hero-overlay">
              <div className="prod-hero-info">
                <span className="prod-tag-pill">
                  {lang === 'de'
                    ? 'SERIENREIFE MODULARE PLATTFORMEN'
                    : 'HOMOLOGATED MODULAR PLATFORMS'}
                </span>
                <h3 className="prod-banner-heading">
                  {lang === 'de'
                    ? 'Validiert für kontinentale Schnellfahrkorridore'
                    : 'Validated for Transnational High-Speed Corridors'}
                </h3>
                <p className="prod-banner-text">
                  {lang === 'de'
                    ? '100% interoperabel nach europäischen TSI-Normen und optimiert für anspruchsvolle klimatische Betriebsbedingungen von −40 °C bis +55 °C.'
                    : 'Fully interoperable under European TSI standards and structurally proofed for extreme environmental operating envelopes from −40 °C to +55 °C.'}
                </p>
              </div>

              <div className="prod-hero-stats">
                <div className="prod-stat-item">
                  <span className="prod-stat-label">
                    {lang === 'de' ? 'REISEGESCHWINDIGKEIT' : 'DESIGN VELOCITY'}
                  </span>
                  <span className="prod-stat-val is-accent">360 km/h</span>
                </div>
                <div className="prod-stat-item">
                  <span className="prod-stat-label">
                    {lang === 'de' ? 'FLOTTENVERFÜGBARKEIT' : 'AVAILABILITY'}
                  </span>
                  <span className="prod-stat-val">99.88%</span>
                </div>
                <div className="prod-stat-item">
                  <span className="prod-stat-label">
                    {lang === 'de' ? 'SICHERHEITSINTEGRITÄT' : 'SAFETY RATING'}
                  </span>
                  <span className="prod-stat-val">CENELEC SIL-4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: INTERACTIVE CATEGORY FILTER ══ */}
      <section className="prod-filter-section">
        <div className="shell">
          <div className="prod-filter-bar">
            <span className="prod-filter-label mono">
              {lang === 'de' ? 'FILTER NACH SYSTEM:' : 'FILTER BY SUBSYSTEM:'}
            </span>
            <div className="prod-filter-pills" role="tablist">
              {productCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`prod-filter-pill ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span>{cat.label[lang] || cat.label.en}</span>
                    {cat.id === 'all' && (
                      <span className="prod-filter-count">{productsList.length}</span>
                    )}
                    {cat.id !== 'all' && (
                      <span className="prod-filter-count">
                        {productsList.filter((p) => p.category === cat.id).length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: PRODUCTS BENTO CATALOG ══ */}
      <section className="prod-catalog-section">
        <div className="shell">
          <div className="prod-grid">
            {filteredProducts.map((item, index) => (
              <article key={item.id} className="prod-card-shell" style={{ '--stagger': index }}>
                <div className="prod-card-inner">
                  {/* Card Media Header */}
                  <div className="prod-card-media">
                    <img
                      src={item.image}
                      alt={item.imageAlt[lang] || item.imageAlt.en}
                      className="prod-card-img"
                      loading="lazy"
                    />
                    <div className="prod-card-badges">
                      <span className="prod-code-badge mono">{item.code}</span>
                      <span className="prod-standard-badge mono">{item.badge}</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="prod-card-body">
                    <div className="prod-card-meta">
                      <span className="prod-card-cat mono">
                        {item.categoryLabel[lang] || item.categoryLabel.en}
                      </span>
                      <h2 className="prod-card-title">{item.name[lang] || item.name.en}</h2>
                      <p className="prod-card-tagline">{item.tagline[lang] || item.tagline.en}</p>
                    </div>

                    <p className="prod-card-desc">
                      {item.description[lang] || item.description.en}
                    </p>

                    {/* Metrics Bar */}
                    <div className="prod-card-metrics">
                      {item.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="prod-metric-node">
                          <span className="prod-metric-label mono">
                            {metric.label[lang] || metric.label.en}
                          </span>
                          <span
                            className={`prod-metric-val mono ${metric.isAccent ? 'is-accent' : ''}`}
                          >
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technical Specs List */}
                    <div className="prod-specs-box">
                      <span className="prod-specs-title mono">
                        {lang === 'de' ? 'SYSTEM-PARAMETER' : 'ENGINEERING PARAMETERS'}
                      </span>
                      <ul className="prod-specs-list">
                        {item.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="prod-spec-row">
                            <span className="prod-spec-name">
                              {spec.label[lang] || spec.label.en}
                            </span>
                            <span className="prod-spec-val mono">{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div className="prod-highlights-box">
                      <ul className="prod-highlights-list">
                        {(item.highlights[lang] || item.highlights.en).map((hl, hIdx) => (
                          <li key={hIdx} className="prod-hl-item">
                            <span className="prod-hl-bullet" aria-hidden="true" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications Tags */}
                    <div className="prod-certs-strip">
                      {item.certifications.map((c, cIdx) => (
                        <span key={cIdx} className="prod-cert-tag mono">
                          {c}
                        </span>
                      ))}
                    </div>

                    {/* Card Action Link */}
                    <div className="prod-card-action">
                      <Link to={item.deepLink} className="prod-action-btn">
                        <span>
                          {lang === 'de'
                            ? 'Technische Details ansehen'
                            : 'Explore Engineering Deep-Dive'}
                        </span>
                        <span className="prod-btn-icon" aria-hidden="true">
                          ↗
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: PLATFORM COMPARISON MATRIX ══ */}
      <section className="prod-matrix-section">
        <div className="shell">
          <div className="prod-matrix-header">
            <span className="prod-eyebrow-dot" />
            <span className="mono prod-eyebrow-text">
              {lang === 'de'
                ? 'BENCHMARK & SYSTEMVERGLEICH'
                : 'ENGINEERING BENCHMARK & SPECIFICATION MATRIX'}
            </span>
            <h2 className="prod-section-heading">
              {lang === 'de'
                ? 'Plattform-Spezifikationen im Direktvergleich'
                : 'Cross-Platform Architecture & Validation Overview'}
            </h2>
            <p className="prod-section-lede">
              {lang === 'de'
                ? 'Gegenüberstellung von Auslegungsgeschwindigkeiten, Sicherheitsanforderungsstufen (SIL), Revisionszyklen und transnationalen Fertigungsstandorten.'
                : 'Comparative analysis of operational velocities, safety integrity ratings, overhaul lifecycles, and transnational development hubs.'}
            </p>
          </div>

          <div className="prod-table-wrapper">
            <table className="prod-table">
              <thead>
                <tr>
                  {platformComparisonMatrix.columns.map((col) => (
                    <th key={col.key} className="mono">
                      {col.label[lang] || col.label.en}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {platformComparisonMatrix.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="prod-table-platform">
                      <strong>{row.platform}</strong>
                    </td>
                    <td className="prod-table-cat">
                      {row.category[lang] || row.category.en}
                    </td>
                    <td className="prod-table-val mono is-accent">{row.velocity}</td>
                    <td className="prod-table-val">{row.propulsion}</td>
                    <td className="prod-table-val mono">
                      <span className="prod-table-badge">{row.silRating}</span>
                    </td>
                    <td className="prod-table-val mono">{row.overhaul}</td>
                    <td className="prod-table-facility mono">{row.mfgHubs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: TRANSNATIONAL TESTING & QUALITY ASSURANCE ══ */}
      <section className="prod-assurance-section">
        <div className="shell">
          <div className="prod-assurance-intro">
            <span className="prod-eyebrow-dot" />
            <span className="mono prod-eyebrow-text">
              {lang === 'de' ? 'QUALITÄT & ZERTIFIZIERUNG' : 'TRANSNATIONAL HOMOLOGATION BASIS'}
            </span>
            <h2 className="prod-section-heading">
              {lang === 'de'
                ? 'Verlässlichkeit durch bilaterale Prüfstände'
                : 'Rigorous Verification Across Bilateral Testing Centers'}
            </h2>
          </div>

          <div className="prod-facilities-grid">
            <div className="prod-facility-card">
              <div className="prod-facility-media">
                <img
                  src={kasselPit}
                  alt="Kassel Werk Dynamic Testing Pit"
                  className="prod-facility-img"
                  loading="lazy"
                />
                <span className="prod-facility-tag mono">KASSEL // WERK PIT IV</span>
              </div>
              <div className="prod-facility-body">
                <h3>
                  {lang === 'de'
                    ? 'Dynamische Schwingprüfstände & Metallurgie'
                    : 'Dynamic Multi-Axis Shaker Rigs & Heavy Metallurgy'}
                </h3>
                <p>
                  {lang === 'de'
                    ? 'Vollrahmen-Dauerschwingprüfungen mit 12 Millionen Zyklen unter EN 13749 Klasse E und 100% zerstörungsfreie Ultraschall-Schweißnahtkontrolle.'
                    : 'Full-chassis fatigue testing reaching 12 million cycles under EN 13749 Class E and 100% non-destructive ultrasonic weld boundary validation.'}
                </p>
                <div className="prod-facility-specs mono">
                  <span>EN 10204 3.2</span>
                  <span>EN 15085-2 CL1</span>
                  <span>UIC 515</span>
                </div>
              </div>
            </div>

            <div className="prod-facility-card">
              <div className="prod-facility-media">
                <img
                  src={frankfurtLab}
                  alt="Frankfurt Power Electronics Cleanroom"
                  className="prod-facility-img"
                  loading="lazy"
                />
                <span className="prod-facility-tag mono">FRANKFURT &amp; MUNICH // POWER LAB</span>
              </div>
              <div className="prod-facility-body">
                <h3>
                  {lang === 'de'
                    ? '3.3 kV SiC-Leistungselektronik & Thermalkammern'
                    : '3.3 kV SiC Semiconductor & Thermal Stress Cells'}
                </h3>
                <p>
                  {lang === 'de'
                    ? 'Thermische Belastungsprüfungen von −55 °C bis +125 °C Sperrschichttemperatur zur Gewährleistung kompromissloser Betriebssicherheit.'
                    : 'Full junction temperature stress validation from −55 °C to +125 °C ensuring continuous high-frequency switching under extreme ambient variations.'}
                </p>
                <div className="prod-facility-specs mono">
                  <span>IEC 61287-1</span>
                  <span>EN 50155</span>
                  <span>IRIS / ISO 22163</span>
                </div>
              </div>
            </div>

            <div className="prod-facility-card">
              <div className="prod-facility-media">
                <img
                  src={bengaluruLab}
                  alt="Bengaluru AI Software & Sensor Laboratory"
                  className="prod-facility-img"
                  loading="lazy"
                />
                <span className="prod-facility-tag mono">BENGALURU // DEEPTECH LAB</span>
              </div>
              <div className="prod-facility-body">
                <h3>
                  {lang === 'de'
                    ? 'SIL-4 Zugsicherungs-Software & Optische KI'
                    : 'SIL-4 Signalling Software & Neural Track Vision'}
                </h3>
                <p>
                  {lang === 'de'
                    ? 'Formal verifizierte sicherheitskritische Softwarearchitekturen nach EN 50128 und Hardware-in-the-Loop Simulationen für Moving-Block-Betrieb.'
                    : 'Formally proven safety-critical train control software architectures under CENELEC EN 50128 and Hardware-in-the-Loop simulation clusters.'}
                </p>
                <div className="prod-facility-specs mono">
                  <span>CENELEC EN 50128</span>
                  <span>ETCS BL3 R2</span>
                  <span>IEC 62443 SL3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: INQUIRY & DOSSIER REQUEST CTA ══ */}
      <section className="prod-cta-section">
        <div className="shell">
          <div className="prod-cta-card">
            <div className="prod-cta-content">
              <span className="prod-cta-eyebrow mono">
                {lang === 'de'
                  ? 'TECHNISCHE DOKUMENTATION & PROJEKTANFRAGEN'
                  : 'TECHNICAL DOSSIERS & PROCUREMENT CONSULTATION'}
              </span>
              <h2 className="prod-cta-heading">
                {lang === 'de'
                  ? 'Fordern Sie ein detailliertes technisches Plattformdossier an'
                  : 'Request a Comprehensive Technical Platform Dossier'}
              </h2>
              <p className="prod-cta-desc">
                {lang === 'de'
                  ? 'Unsere bilateralen Ingenieurteams in Frankfurt und Bengaluru stehen Bahnbetreibern, Verkehrsministerien und Beschaffungsstellen für Machbarkeitsstudien und Systemanpassungen zur Verfügung.'
                  : 'Our bilateral engineering teams in Frankfurt and Bengaluru are available to assist transport authorities, transit operators, and procurement boards with platform homologation studies and customized rolling stock synthesis.'}
              </p>
              <div className="prod-cta-actions">
                <Link to="/contact" className="prod-cta-primary-btn">
                  <span>{lang === 'de' ? 'Technischen Vertrieb kontaktieren' : 'Contact Technical Sales'}</span>
                  <span className="prod-cta-btn-icon" aria-hidden="true">→</span>
                </Link>
                <Link to="/about" className="prod-cta-secondary-btn">
                  <span>{lang === 'de' ? 'Über Zebrold Scolome' : 'About Zebrold Scolome'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
