import { useLanguage } from '../../context/LanguageContext';
import './ManufacturingSection.css';

const COPY = {
  en: {
    eyebrow: 'MILAN, ITALY',
    heading: 'Engineering for Europe. Manufacturing to a Higher Standard.',
    intro: "Our Milan facility is Zebrold's European manufacturing and development hub — combining engineering, quality, and production expertise to serve European customers with precision and consistency.",
    features: [
      {
        title: 'Local Execution, Global Capability',
        desc: "European operations built on Zebrold's international engineering network.",
      },
      {
        title: 'Integrated Teams',
        desc: 'Engineering, production, quality, and testing working as one connected process.',
      },
      {
        title: 'Regulatory & Quality Alignment',
        desc: 'Built to meet European standards, specifications, and customer requirements.',
      },
      {
        title: 'Continuous Improvement',
        desc: 'Processes refined at every stage from prototyping to full-scale manufacturing.',
      },
    ],
    closing: "From development to precision manufacturing — we build efficiently, operate responsibly, and deliver to the standards of the world's most demanding industrial markets.",
    pillars: ['People', 'Engineering', 'Manufacturing', 'Quality', 'Technology'],
    tagline: 'Working together to build the next generation of industrial products.',
  },
  de: {
    eyebrow: 'MAILAND, ITALIEN',
    heading: 'Ingenieurskunst für Europa. Fertigung auf höchstem Niveau.',
    intro: 'Unser Standort in Mailand ist Zebrolds europäisches Fertigungs- und Entwicklungszentrum – er vereint Engineering, Qualität und Produktionsexpertise, um europäische Kunden präzise und verlässlich zu bedienen.',
    features: [
      {
        title: 'Lokale Umsetzung, globale Leistungsfähigkeit',
        desc: 'Europäische Standorte, aufgebaut auf Zebrolds internationalem Ingenieurnetzwerk.',
      },
      {
        title: 'Integrierte Teams',
        desc: 'Engineering, Produktion, Qualität und Tests als ein zusammenhängender Prozess.',
      },
      {
        title: 'Regulatorische & Qualitätskonformität',
        desc: 'Ausgerichtet auf europäische Standards, Spezifikationen und Kundenanforderungen.',
      },
      {
        title: 'Kontinuierliche Verbesserung',
        desc: 'Prozesse, die in jeder Phase optimiert werden – vom Prototyping bis zur Serienfertigung.',
      },
    ],
    closing: 'Von der Entwicklung bis zur Präzisionsfertigung – wir bauen effizient, handeln verantwortungsvoll und erfüllen die Standards der anspruchsvollsten Industriemärkte der Welt.',
    pillars: ['Menschen', 'Ingenieurwesen', 'Fertigung', 'Qualität', 'Technologie'],
    tagline: 'Gemeinsam die nächste Generation industrieller Produkte gestalten.',
  },
};

export default function ManufacturingSection() {
  const { lang } = useLanguage();
  const c = COPY[lang] || COPY.en;

  return (
    <section className="mfg-section">
      <div className="padding-global padding-section-large">
        <div className="container-medium">
          <div className="mfg-intro">
            <span className="mfg-eyebrow">{c.eyebrow}</span>
            <h2 className="mfg-heading">{c.heading}</h2>
            <p className="mfg-lede">{c.intro}</p>
          </div>

          <div className="mfg-feature-grid">
            {c.features.map((f, i) => (
              <div className="mfg-feature-card" key={f.title}>
                <span className="mfg-feature-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mfg-feature-title">{f.title}</h3>
                <p className="mfg-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>

          <p className="mfg-closing">{c.closing}</p>

          <div className="mfg-pillars">
            {c.pillars.map((item, i) => (
              <span key={item} className="mfg-pillar-item">
                {i > 0 && <span className="mfg-pillar-dot" aria-hidden="true">•</span>}
                {item}
              </span>
            ))}
          </div>

          <p className="mfg-tagline">{c.tagline}</p>
        </div>
      </div>
    </section>
  );
}
