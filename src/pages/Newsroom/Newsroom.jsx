import { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import { news, NEWS_CATEGORIES } from '../../data/news';
import {
  newsroomSlides,
  metrics,
  segments,
  regions,
  documents,
  calendar,
  calendarPeriod,
} from '../../data/newsroom';
import { formatDate, byDateDesc } from '../../utils/formatDate';
import './Newsroom.css';

const COPY = {
  en: {
    allDispatches: 'All dispatches',
    updated: 'Updated continuously · Frankfurt & Bengaluru bureaus',
    leadStory: 'Lead story',
    readFull: 'Read full release',
    byline: 'Zebrold corporate directorate',
    dispatches: 'Recent dispatches & press bulletins',
    dispatchesSub: 'Direct from the Scolome engineering centres, commercial bureaus and testing corridors',
    readRelease: 'Read release',
    close: 'Close',
    quoteAttrib: 'Zebrold IHL project · Executive board',
    revenue: 'Revenue portfolio & commercial performance',
    revenueSub:
      'Indicative group distribution across rolling stock manufacturing, turnkey EPC, digital rail systems and lifecycle services.',
    placeholder:
      'Illustrative figures — not audited. To be replaced with Investor Relations’ confirmed numbers before publication.',
    breakdown: 'Revenue breakdown by segment',
    breakdownSub: 'Contribution by operational stream',
    consolidated: '100% consolidated',
    regional: 'Regional revenue allocation',
    footprint: 'Global footprint',
    regionalSub:
      'Geography split driven by mainline renewals in the EU, suburban growth in India and North American modernisation contracts.',
    ir: 'Investor relations & shareholder centre',
    irSub:
      'Corporate disclosures, financial calendar and regulatory filings for Zebrold International Holdings Limited.',
    contactIr: 'Contact investor relations',
    reports: 'Financial reports & filings',
    reportsSub: 'Regulatory disclosures, interim figures and annual sustainability reporting.',
    downloadPdf: 'Download PDF',
    calendarTitle: 'Financial calendar',
    calendarSub: 'Shareholder dates, earnings presentations and industry summits.',
    empty: 'No dispatches match this filter.',
  },
  de: {
    allDispatches: 'Alle Meldungen',
    updated: 'Laufend aktualisiert · Büros Frankfurt & Bengaluru',
    leadStory: 'Leitmeldung',
    readFull: 'Vollständige Meldung lesen',
    byline: 'Zebrold Konzerndirektion',
    dispatches: 'Aktuelle Meldungen & Pressebulletins',
    dispatchesSub: 'Direkt aus den Scolome-Entwicklungszentren, Vertriebsbüros und Erprobungskorridoren',
    readRelease: 'Meldung lesen',
    close: 'Schließen',
    quoteAttrib: 'Zebrold IHL Projekt · Vorstand',
    revenue: 'Umsatzportfolio & kommerzielle Entwicklung',
    revenueSub:
      'Indikative Konzernverteilung auf Fahrzeugbau, schlüsselfertige EPC, digitale Systeme und Lebenszyklusleistungen.',
    placeholder:
      'Illustrative Zahlen — nicht geprüft. Vor Veröffentlichung durch bestätigte Werte der Investor Relations zu ersetzen.',
    breakdown: 'Umsatzaufteilung nach Segment',
    breakdownSub: 'Beitrag je operativem Bereich',
    consolidated: '100 % konsolidiert',
    regional: 'Regionale Umsatzverteilung',
    footprint: 'Globale Präsenz',
    regionalSub:
      'Geografische Verteilung getrieben von Streckenerneuerungen in der EU, Vorortwachstum in Indien und Modernisierungen in Nordamerika.',
    ir: 'Investor Relations & Aktionärsbereich',
    irSub:
      'Unternehmensmitteilungen, Finanzkalender und regulatorische Meldungen der Zebrold International Holdings Limited.',
    contactIr: 'Investor Relations kontaktieren',
    reports: 'Finanzberichte & Meldungen',
    reportsSub: 'Regulatorische Offenlegungen, Zwischenzahlen und jährliche Nachhaltigkeitsberichte.',
    downloadPdf: 'PDF herunterladen',
    calendarTitle: 'Finanzkalender',
    calendarSub: 'Aktionärstermine, Ergebnispräsentationen und Branchengipfel.',
    empty: 'Keine Meldungen entsprechen diesem Filter.',
  },
};

export default function Newsroom() {
  const { t, lang } = useLanguage();
  const c = COPY[lang];
  const revealRef = useScrollReveal();
  const railRef = useRef(null);
  const [filter, setFilter] = useState('all');

  const sorted = useMemo(() => [...news].sort(byDateDesc), []);
  const lead = useMemo(() => sorted.find((n) => n.featured) ?? sorted[0], [sorted]);

  /* The lead story is pulled out of the rail unless a filter is active. */
  const dispatches = useMemo(() => {
    const pool = filter === 'all' ? sorted.filter((n) => n !== lead) : sorted.filter((n) => n.category === filter);
    return pool;
  }, [sorted, filter, lead]);

  const categoryOf = (id) => NEWS_CATEGORIES.find((k) => k.id === id);

  return (
    <div className="nr" ref={revealRef}>
      <SEO
        title="Newsroom | Zebrold IHL"
        description="Press releases, contract awards, engineering bulletins and investor disclosures from the Zebrold IHL rail programme."
        keywords="Zebrold newsroom, Scolome press release, rail contracts, rolling stock news, investor relations"
        url="/newsroom"
      />

      <div className="nr__shell shell-wide">
        <HeroCarousel slides={newsroomSlides} variant="inset" />

        {/* ══ Filter bar ══ */}
        <section className="nr__filterBar">
          <div className="nr__filters" role="group" aria-label={t('news_title')}>
            <button
              type="button"
              className={`nr__filter ${filter === 'all' ? 'is-active' : ''}`}
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
            >
              {c.allDispatches} ({news.length})
            </button>
            {NEWS_CATEGORIES.map((cat) => {
              const n = news.filter((x) => x.category === cat.id).length;
              if (!n) return null;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`nr__filter ${filter === cat.id ? 'is-active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                  aria-pressed={filter === cat.id}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>
          <p className="nr__updated mono">{c.updated}</p>
        </section>

        {/* ══ Lead story ══ */}
        {filter === 'all' && lead && (
          <section className="nr__leadWrap" aria-labelledby="nr-lead-title">
            <article className="nrLead">
              <div className="nrLead__media zoom-frame">
                <img src={lead.image} alt={lead.alt[lang]} loading="eager" decoding="async" />
              </div>

              <div className="nrLead__body">
                <div className="nrLead__meta">
                  <span className="nrLead__badge">{c.leadStory}</span>
                  <span className="chip">{formatDate(lead.date, lang)}</span>
                  <span className="nrLead__region">{lead.region[lang]}</span>
                </div>

                <h2 className="nrLead__title" id="nr-lead-title">
                  {lead.title[lang]}
                </h2>
                <p className="nrLead__excerpt">{lead.excerpt[lang]}</p>

                <div className="nrLead__foot">
                  <div className="nrLead__byline">
                    <span className="nrLead__avatar" aria-hidden="true">
                      Z
                    </span>
                    <span>
                      <strong>{c.byline}</strong>
                      <em>{lead.source[lang]}</em>
                    </span>
                  </div>

                  <Link to={`/newsroom/${lead.id}`} className="nrLead__cta">
                    {c.readFull}
                    <span aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>

              </div>
            </article>
          </section>
        )}

        {/* ══ Dispatch rail ══ */}
        <section className="nr__dispatches" aria-labelledby="nr-dispatch-title">
          <div className="nr__dispatchHead">
            <div>
              <h2 className="nr__h2" id="nr-dispatch-title">
                {c.dispatches}
              </h2>
              <p className="nr__dispatchSub">{c.dispatchesSub}</p>
            </div>
          </div>

          {dispatches.length === 0 ? (
            <p className="nr__empty">{c.empty}</p>
          ) : (
            <div className="nr__rail no-scrollbar" ref={railRef} tabIndex={0} aria-label={c.dispatches}>
              {dispatches.map((item) => {
                const cat = categoryOf(item.category);
                return (
                  <article key={item.id} className="nrCard card-lift">
                    <div className="nrCard__media zoom-frame">
                      <img src={item.image} alt={item.alt[lang]} loading="lazy" decoding="async" />
                      {cat && <span className="nrCard__tag">{cat.label[lang]}</span>}
                    </div>

                    <div className="nrCard__body">
                      <div className="nrCard__meta">
                        <span className="chip">{formatDate(item.date, lang)}</span>
                        <span className="nrCard__region">{item.region[lang]}</span>
                      </div>

                      <h3 className="nrCard__title">{item.title[lang]}</h3>
                      <p className="nrCard__excerpt">{item.excerpt[lang]}</p>


                      <div className="nrCard__foot">
                        <span className="nrCard__source">{item.source[lang]}</span>
                        <Link to={`/newsroom/${item.id}`} className="nrCard__link">
                          {c.readRelease} <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* ══ Quote ══ */}
        <section className="nr__quote">
          <blockquote>{t('home_quote')}</blockquote>
          <p className="nr__quoteAttrib mono">{c.quoteAttrib}</p>
        </section>

        {/* ══ Commercial performance ══ */}
        <section className="nr__finance" aria-labelledby="nr-finance-title">
          <div className="nr__financeHead">
            <div>
              <h2 className="nr__h2" id="nr-finance-title">
                {c.revenue}
              </h2>
              <p className="nr__dispatchSub">{c.revenueSub}</p>
            </div>
          </div>

          <p className="nr__placeholder" role="note">
            {c.placeholder}
          </p>

          <div className="nr__metrics">
            {metrics.map((m, i) => (
              <article key={m.id} className="metric reveal" data-delay={Math.min(i + 1, 4)}>
                <div className="metric__head">
                  <span>{m.label[lang]}</span>
                  {m.delta ? (
                    <span className="metric__delta">{m.delta[lang]}</span>
                  ) : (
                    m.period && <span className="metric__period">{m.period[lang]}</span>
                  )}
                </div>
                <p className="metric__value">{m.value}</p>
                <p className="metric__note">{m.note[lang]}</p>
              </article>
            ))}
          </div>

          <div className="nr__financeGrid">
            {/* Segments */}
            <div className="nrPanel nrPanel--stone">
              <div className="nrPanel__head">
                <div>
                  <h3>{c.breakdown}</h3>
                  <p>{c.breakdownSub}</p>
                </div>
                <span className="chip">{c.consolidated}</span>
              </div>

              <ul className="segList" role="list">
                {segments.map((s) => (
                  <li key={s.id}>
                    <div className="segList__row">
                      <span className="segList__label">{s.label[lang]}</span>
                      <span className="segList__figure">
                        {s.pct}% <em>({s.value})</em>
                      </span>
                    </div>
                    <div
                      className="segList__track"
                      role="img"
                      aria-label={`${s.label[lang]}: ${s.pct}%`}
                    >
                      <div className={`segList__fill segList__fill--${s.id}`} style={{ width: `${s.pct}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regions */}
            <div className="nrPanel">
              <div className="nrPanel__head">
                <h3>{c.regional}</h3>
                <span className="nrPanel__eyebrow mono">{c.footprint}</span>
              </div>
              <p className="nrPanel__intro">{c.regionalSub}</p>

              <ul className="regionList" role="list">
                {regions.map((r) => (
                  <li key={r.id}>
                    <div>
                      <p className="regionList__name">{r.name[lang]}</p>
                      <p className="regionList__detail">{r.detail[lang]}</p>
                    </div>
                    <div className="regionList__figure">
                      <span className="regionList__pct">{r.pct}</span>
                      <span className="regionList__value">{r.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ══ Investor relations ══ */}
        <section className="nr__ir" aria-labelledby="nr-ir-title">
          <div className="nr__irHead">
            <div>
              <h2 className="nr__h2" id="nr-ir-title">
                {c.ir}
              </h2>
              <p className="nr__dispatchSub">{c.irSub}</p>
            </div>
            <Link to="/contact" className="btn nr__irBtn">
              {c.contactIr}
            </Link>
          </div>

          <div className="nr__irGrid">
            {/* Documents */}
            <div className="nrPanel">
              <div className="nrPanel__head">
                <h3>{c.reports}</h3>
              </div>
              <p className="nrPanel__intro">{c.reportsSub}</p>

              <ul className="docList" role="list">
                {documents.map((doc) => (
                  <li key={doc.id}>
                    <span className="docList__icon mono" aria-hidden="true">
                      PDF
                    </span>
                    <span className="docList__text">
                      <strong>{doc.title[lang]}</strong>
                      <em>{doc.meta[lang]}</em>
                    </span>
                    <a
                      href={doc.href}
                      download={doc.filename || true}
                      className="docList__action"
                      aria-label={`${c.downloadPdf}: ${doc.title[lang]}`}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <span>{c.downloadPdf}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calendar */}
            <div className="nrPanel">
              <div className="nrPanel__head">
                <h3>{c.calendarTitle}</h3>
                {calendarPeriod && <span className="chip">{calendarPeriod}</span>}
              </div>
              <p className="nrPanel__intro">{c.calendarSub}</p>

              <ul className="calList" role="list">
                {calendar.map((ev) => (
                  <li key={ev.id}>
                    <span className="calList__date">
                      <span className="calList__month mono">{ev.month[lang].toUpperCase()}</span>
                      <span className="calList__day">{ev.day}</span>
                    </span>
                    <span className="calList__text">
                      <strong>{ev.title[lang]}</strong>
                      <em>{ev.detail[lang]}</em>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
