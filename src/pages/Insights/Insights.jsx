import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import PageHero from '../../components/PageHero/PageHero';
import { insights } from '../../data/insights';
import { formatDate, byDateDesc } from '../../utils/formatDate';
import './Insights.css';

export default function Insights() {
  const { t, lang } = useLanguage();
  const revealRef = useScrollReveal();
  const sorted = [...insights].sort(byDateDesc);
  const [lead, ...rest] = sorted;

  return (
    <div ref={revealRef}>
      <SEO
        title="Insights | Zebrold Scolome"
        description="Engineering papers, standards commentary and long-form analysis from the Zebrold Scolome technical office."
        keywords="rail engineering insights, axle load, silicon carbide traction, EN 45545, ETCS capacity, rolling stock analysis"
        url="/insights"
      />

      <PageHero eyebrow={t('insights_title')} title={t('insights_title')} lede={t('insights_lede')} />

      <div className="pageBody">
        <div className="shell">
          {/* ══ Lead piece ══ */}
          <article className="insLead reveal">
            <div className="insLead__media zoom-frame">
              <img src={lead.image} alt={lead.alt[lang]} loading="eager" decoding="async" />
            </div>
            <div className="insLead__body">
              <div className="insLead__meta">
                <span className="chip">{lead.topic[lang]}</span>
                <span className="chip">{formatDate(lead.date, lang)}</span>
                <span className="chip">
                  {lead.readMins} {lang === 'de' ? 'Min. Lesezeit' : 'min read'}
                </span>
              </div>
              <h2 className="insLead__title">{lead.title[lang]}</h2>
              <p className="insLead__text">{lead.body[lang]}</p>
            </div>
          </article>

          {/* ══ Remaining pieces ══ */}
          <div className="ins__grid">
            {rest.map((item, i) => (
              <article key={item.id} className="insCard reveal" data-delay={Math.min(i + 1, 6)}>
                <div className="insCard__media zoom-frame">
                  <img src={item.image} alt={item.alt[lang]} loading="lazy" decoding="async" />
                </div>
                <div className="insCard__meta">
                  <span className="chip">{item.topic[lang]}</span>
                  <span className="insCard__date mono">{formatDate(item.date, lang)}</span>
                </div>
                <h2 className="insCard__title">{item.title[lang]}</h2>
                <p className="insCard__text">{item.body[lang]}</p>
                <span className="insCard__read mono">
                  {item.readMins} {lang === 'de' ? 'MIN' : 'MIN READ'}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
