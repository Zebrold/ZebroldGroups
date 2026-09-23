import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import { jobs, careersSlides, JOB_CATEGORIES } from '../../data/careersData';
import './Careers.css';

const CULTURE = [
  {
    heading: { en: 'Dual-corridor innovation', de: 'Innovation im Doppelkorridor' },
    title: { en: 'Frankfurt & Bengaluru exchange', de: 'Austausch Frankfurt & Bengaluru' },
    body: {
      en: 'Engineers rotate between German precision test centres and India’s fastest-growing deep-tech hub, working hands-on across cross-border manufacturing and software architecture.',
      de: 'Ingenieurinnen und Ingenieure rotieren zwischen deutschen Präzisionsprüfzentren und Indiens am schnellsten wachsendem Deep-Tech-Standort — praxisnah über Fertigung und Softwarearchitektur hinweg.',
    },
  },
  {
    heading: { en: 'Concrete decarbonisation', de: 'Konkrete Dekarbonisierung' },
    title: { en: 'Replacing diesel locomotives', de: 'Dieselloks werden ersetzt' },
    body: {
      en: 'Every trainset we commission displaces heavy diesel operation on non-electrified regional lines, delivering measurable carbon abatement from the first day in service.',
      de: 'Jeder Triebzug, den wir in Betrieb nehmen, verdrängt schweren Dieselbetrieb auf nicht elektrifizierten Regionalstrecken — mit messbarer CO₂-Minderung ab dem ersten Betriebstag.',
    },
  },
  {
    heading: { en: '40-year product horizon', de: '40 Jahre Produkthorizont' },
    title: { en: 'Enduring engineering legacy', de: 'Technik, die Bestand hat' },
    body: {
      en: 'Unlike fleeting digital products, our rolling stock platforms are designed for four decades of rigorous mainline duty — which instils a different kind of structural rigour.',
      de: 'Anders als kurzlebige digitale Produkte sind unsere Plattformen für vier Jahrzehnte harten Streckendienst ausgelegt — das erzwingt eine andere Art von konstruktiver Strenge.',
    },
  },
];

export default function Careers() {
  const { t, lang } = useLanguage();
  const revealRef = useScrollReveal();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const visible = useMemo(
    () => (filter === 'all' ? jobs : jobs.filter((job) => job.category === filter)),
    [filter]
  );

  const categoryLabel = (id) => JOB_CATEGORIES.find((c) => c.id === id)?.label[lang] ?? id;
  const openDossier = (job) => navigate(`/careers/apply?ref=${encodeURIComponent(job.ref)}`);

  return (
    <div ref={revealRef} className="cr">
      <SEO
        title="Careers | Zebrold Scolome"
        description="Engineering, software, manufacturing and internship roles at Zebrold Scolome across Frankfurt, Kassel, Bengaluru and Hyderabad."
        keywords="Zebrold careers, rail engineering jobs, rolling stock jobs, SIL-4 firmware, silicon carbide traction, bogie manufacturing, engineering internship"
        url="/careers"
      />

      <div className="cr__shell shell-wide">
        <HeroCarousel slides={careersSlides} variant="inset" ctaHref="#openings" />

        {/* ══ Category filter ══ */}
        <div className="cr__filters">
          <button
            type="button"
            className={`cr__filter ${filter === 'all' ? 'is-active' : ''}`}
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
          >
            {lang === 'de' ? 'Alle Stellen' : 'All opportunities'} ({jobs.length})
          </button>
          {JOB_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`cr__filter ${filter === cat.id ? 'is-active' : ''}`}
              onClick={() => setFilter(cat.id)}
              aria-pressed={filter === cat.id}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* ══ Life at Zebrold ══ */}
        <section className="cr__editorial" aria-labelledby="cr-life-title">
          <div className="cr__editorialLead">
            <h2 className="cr__h2" id="cr-life-title">
              {lang === 'de' ? 'Arbeiten bei Zebrold IHL' : 'Life at Zebrold IHL'}
            </h2>
            <p className="cr__editorialIntro">
              {lang === 'de'
                ? 'Wo deutsches Präzisionsingenieurwesen auf indische Deep-Tech-Kompetenz trifft. Wir geben Ingenieurinnen, Werkstoffwissenschaftlern und Softwarearchitekten den Raum, das nächste Jahrhundert nachhaltiger Hochgeschwindigkeitsmobilität zu gestalten.'
                : 'Where German precision engineering heritage meets Indian deep-tech ingenuity. We give engineers, material scientists and software architects the room to shape the next century of high-speed sustainable rail mobility.'}
            </p>
          </div>

          <div className="cr__editorialBody">
            <p>
              {lang === 'de'
                ? 'Unsere technische Grundlage verbindet die metallurgische, strukturelle und mechanische Handwerkskunst aus Frankfurt am Main und Kassel mit der Software-Intelligenz aus Bengaluru und Hyderabad. Fahrzeugsubsysteme werden gemeinsam entworfen — vom Silizium-Layout bis zum geschweißten Drehgestell — sodass Beschaffungssilos entfallen und Triebzüge mit engeren Toleranzen und höherer Effizienz entstehen.'
                : 'Our technical foundation unifies the metallurgical, structural and mechanical craftsmanship developed in Frankfurt am Main and Kassel with the software intelligence engineered in Bengaluru and Hyderabad. Vehicle subsystems are co-designed from initial silicon layout through to welded bogie fabrication, which removes procurement siloing and delivers trainsets built to tighter tolerances and better efficiencies.'}
            </p>
            <p>
              {lang === 'de'
                ? 'Mehrstufige Hierarchien lehnen wir ab. Stattdessen arbeiten eng abgestimmte, eigenverantwortliche Teams: Spezialistinnen für aerodynamische Strömungssimulation, 3,3-kV-Siliziumkarbid-Umrichter und ETCS-Level-3-Odometriefusion besitzen echte Verantwortung für ihre Domäne — sie nehmen Prototypen in Betrieb, werten Telemetrie mit dem Streckenpersonal aus und bringen kritische Änderungen ohne administrative Hürden auf den Testzug.'
                : 'Multi-tiered corporate bureaucracy is rejected in favour of tightly aligned, autonomous squads. Specialists across aerodynamic computational fluid dynamics, 3.3 kV silicon-carbide traction inverters and real-time ETCS Level 3 odometry fusion hold genuine ownership of their domains — commissioning prototypes, reviewing telemetry with track marshals and pushing critical revisions to test trains without administrative gatekeeping.'}
            </p>
            <p>
              {lang === 'de'
                ? 'Diese Zusammenarbeit bleibt physisch und kontinuierlich: Teams wechseln zwischen Hochgeschwindigkeits-Teststrecken in Niedersachsen, der Schwerfertigung in Hessen und den Firmware-Laboren in Bengaluru und Hyderabad. Jede Plattform ist auf vier Jahrzehnte Streckendienst ausgelegt, und bis zu 20 % der Arbeitszeit stehen für spekulative Simulation, Patentanmeldungen mit Beteiligung und Versuche auf unserem eigenen Testring zur Verfügung.'
                : 'That collaboration stays physical and continuous: teams rotate between high-speed test circuits in Lower Saxony, heavy manufacturing lines in Hessen and firmware proving labs in Bengaluru and Hyderabad. Every platform is designed for four decades of mainline duty, and up to 20% of engineering time is protected for speculative simulation, patent filings with royalty sharing, and live experimentation on our own test ring.'}
            </p>
          </div>
        </section>

        {/* ══ Open roles ══ */}
        <section className="cr__openings" id="openings" aria-labelledby="cr-openings-title">
          <div className="cr__openingsHead">
            <div>
              <h2 className="cr__h2" id="cr-openings-title">
                {lang === 'de'
                  ? 'Aktuelle Stellen & Fachbereiche'
                  : 'Current open roles & engineering disciplines'}
              </h2>
              <p className="cr__openingsSub">
                {lang === 'de'
                  ? 'Wählen Sie eine Position, um Anforderungen zu sehen und das vollständige Bewerbungsdossier zu öffnen.'
                  : 'Select any position to view its requirements and open the full candidate dossier.'}
              </p>
            </div>
            <p className="cr__count mono">
              {lang === 'de' ? 'Angezeigt' : 'Showing'} <strong>{visible.length}</strong>{' '}
              {lang === 'de' ? `von ${jobs.length} Ausschreibungen` : `of ${jobs.length} postings`}
            </p>
          </div>

          <ul className="cr__list" role="list">
            {visible.map((job, i) => (
              <li key={job.id}>
                <article
                  className="jobRow reveal"
                  data-delay={Math.min(i + 1, 6)}
                  onClick={() => openDossier(job)}
                >
                  <div className="jobRow__main">
                    <p className="jobRow__meta">
                      <span className="jobRow__cat">{categoryLabel(job.category)}</span>
                      <span aria-hidden="true">•</span>
                      <span>{job.location[lang]}</span>
                    </p>

                    <h3 className="jobRow__title">{job.title[lang]}</h3>
                    <p className="jobRow__summary">{job.summary[lang]}</p>

                    <ul className="jobRow__reqs" role="list">
                      {job.requirements[lang].slice(0, 3).map((req) => (
                        <li key={req}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="jobRow__side">
                    <div className="jobRow__pay">
                      <span className="jobRow__salary">{job.salary}</span>
                      <span className="jobRow__terms">{job.terms[lang]}</span>
                    </div>
                    <Link
                      to={`/careers/apply?ref=${encodeURIComponent(job.ref)}`}
                      className="jobRow__apply"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t('careers_apply')}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* ══ Culture ══ */}
        <section className="cr__culture" aria-labelledby="cr-culture-title">
          <div className="cr__cultureLead">
            <h2 className="cr__h2" id="cr-culture-title">
              {lang === 'de'
                ? 'Warum Ingenieure sich für Scolome entscheiden'
                : 'Why engineers choose the Scolome initiative'}
            </h2>
            <p className="cr__cultureIntro">
              {lang === 'de'
                ? 'Wir arbeiten ohne bürokratische Zwischenebenen. Teams in Deutschland und Indien agieren als eine Einheit und gestalten unmittelbar Fahrzeuge, die täglich Millionen Fahrgäste emissionsfrei befördern.'
                : 'We operate without bureaucratic layers. Engineering squads in Germany and India work as a single directorate, directly shaping rolling stock that carries millions of passengers a day with zero tailpipe emissions.'}
            </p>
          </div>

          <div className="cr__cultureGrid">
            {CULTURE.map((item, i) => (
              <article key={item.title.en} className="cultureItem reveal" data-delay={i + 1}>
                <span className="cultureItem__num mono">
                  {String(i + 1).padStart(2, '0')}. {item.heading[lang]}
                </span>
                <h3 className="cultureItem__title">{item.title[lang]}</h3>
                <p className="cultureItem__body">{item.body[lang]}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ══ Quote ══ */}
        <section className="cr__quote">
          <blockquote>{t('home_quote')}</blockquote>
        </section>

        {/* ══ Speculative dossier ══ */}
        <section className="cr__desk" aria-labelledby="cr-desk-title">
          <div>
            <h2 className="cr__deskTitle" id="cr-desk-title">
              {lang === 'de'
                ? 'Ihre Fachrichtung ist nicht dabei?'
                : 'Can’t find your exact technical specialisation?'}
            </h2>
            <p className="cr__deskBody">
              {lang === 'de'
                ? 'Wir suchen laufend herausragende Fachleute in Stromabnehmer-Aerodynamik, funktionaler Sicherheit, Traktionsmotoren und schlüsselfertigem Bahn-EPC. Senden Sie Ihr Dossier direkt an unsere Personalgewinnung.'
                : 'We are continuously seeking exceptional talent across pantograph aerodynamics, functional safety compliance, traction motors and turnkey rail EPC. Send your dossier directly to our talent acquisition team.'}
            </p>
            <p className="cr__deskMail">
              {lang === 'de' ? 'Allgemeine Anfragen' : 'General enquiries'}:{' '}
              <a href="mailto:talent.acquisition@zebrold.de">talent.acquisition@zebrold.de</a>
            </p>
          </div>

          <Link to="/careers/apply" className="btn cr__deskBtn">
            {lang === 'de' ? 'Initiativdossier einreichen' : 'Submit speculative dossier'}
          </Link>
        </section>
      </div>
    </div>
  );
}
