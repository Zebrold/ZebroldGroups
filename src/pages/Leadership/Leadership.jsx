import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO/SEO';
import { EXECUTIVES, DOMAIN_LEADS } from '../../data/leadership';
import './Leadership.css';

const COPY = {
  en: {
    title: 'Leadership & Engineering Directorate',
    leadsTitle: 'Engineering Directorate & Domain Leads',
    leadsSubtitle:
      'Specialized technical architects, principal systems engineers, and domain researchers driving propulsion dynamics, homologation, autonomous telematics, and real-time safety kernels across European and international rail networks.',
  },
  de: {
    title: 'Unternehmensleitung & Engineering-Direktion',
    leadsTitle: 'Engineering-Direktion & Fachbereichsleitungen',
    leadsSubtitle:
      'Spezialisierte technische Architektinnen und Architekten, leitende Systemingenieure und Fachforschende, die Antriebsdynamik, Zulassung, autonome Telematik und sicherheitskritische Echtzeitkerne für europäische und internationale Bahnnetze vorantreiben.',
  },
};

/** "Dr. Hendrik Vance" → "HV" — shown until a portrait photo is added. */
function initials(name) {
  const parts = name.replace(/^Dr\.\s+/, '').split(/\s+/);
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function Portrait({ person }) {
  return (
    <div className="ldrPortrait">
      {person.image ? (
        <img src={person.image} alt={person.name} className="ldrPortrait__img" loading="lazy" />
      ) : (
        <span className="ldrPortrait__initials" aria-hidden="true">
          {initials(person.name)}
        </span>
      )}
    </div>
  );
}

export default function Leadership() {
  const { lang, t } = useLanguage();
  const c = COPY[lang];

  return (
    <div className="ldrPage">
      <SEO
        title="Leadership | Zebrold IHL • Scolome Railway Technologies"
        description="Meet the board, executives and engineering domain leads of Zebrold IHL, guiding rolling stock, signalling and digital rail development across Germany and India."
        keywords="Zebrold leadership, Zebrold IHL board, Hemendrah Kumar Sadamsetty, Scolome, rail engineering leadership"
        url="/leadership"
      />

      <div className="ldrShell">
        <header className="ldrHead">
          <Link to="/about" className="ldrHead__back">
            <span aria-hidden="true">←</span> {t('nav_about')}
          </Link>
          <h1 className="ldrHead__title">{c.title}</h1>
        </header>

        {/* ══ Executive profiles — alternating image / text rows ══ */}
        <div className="ldrExecs">
          {EXECUTIVES.map((person, i) => (
            <article
              key={person.id}
              className={`ldrExec ${i % 2 === 1 ? 'ldrExec--reverse' : ''}`}
            >
              <div className="ldrExec__media">
                <Portrait person={person} />
              </div>
              <div className="ldrExec__text">
                <h2 className="ldrExec__name">{person.name}</h2>
                <p className="ldrExec__role">{person.role[lang]}</p>
                <p className="ldrExec__bio">{person.bio[lang]}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ══ Engineering directorate & domain leads ══ */}
        <section className="ldrLeads" aria-labelledby="ldr-leads-title">
          <div className="ldrLeads__head">
            <h2 className="ldrLeads__title" id="ldr-leads-title">
              {c.leadsTitle}
            </h2>
            <p className="ldrLeads__subtitle">{c.leadsSubtitle}</p>
          </div>

          <ul className="ldrLeads__grid" role="list">
            {DOMAIN_LEADS.map((person) => (
              <li key={person.id} className="ldrLead">
                <h3 className="ldrLead__name">{person.name}</h3>
                <p className="ldrLead__role">{person.role[lang]}</p>
                <p className="ldrLead__bio">{person.bio[lang]}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
