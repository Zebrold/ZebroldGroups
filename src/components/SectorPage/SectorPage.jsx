import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../SEO/SEO';
import './SectorPage.css';

/**
 * Editorial sector template shared by /aerospace and /automotive.
 * `page` comes from src/data/sectorPages.js.
 */
export default function SectorPage({ page, seo }) {
  const { lang } = useLanguage();
  const revealRef = useScrollReveal();
  const { hero, mandate } = page;

  return (
    <div className="sector" ref={revealRef}>
      <SEO {...seo} />

      {/* ══ Masthead ══ */}
      <header className="sector__masthead">
        <div className="shell sector__mastheadInner">
          <div className="sector__mastheadMain">
            <span className="eyebrow">{page.eyebrow[lang]}</span>
            {/* First-party static copy; the only markup is <em> for the accent clause. */}
            <h1 className="display" dangerouslySetInnerHTML={{ __html: page.title[lang] }} />
          </div>

          <div className="sector__mastheadAside">
            <p className="lede">{page.lede[lang]}</p>
            <dl className="sector__specBar">
              {page.specs.map((spec) => (
                <div key={spec.value}>
                  <dt>{spec.label[lang]}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      {/* ══ Showcase ══ */}
      <div className="shell">
        <figure className="sector__showcase reveal">
          <img src={hero.image} alt={hero.alt[lang]} loading="eager" decoding="async" />
          <figcaption className="sector__showcaseOverlay">
            <div className="sector__showcaseText">
              <h2>{hero.caption[lang]}</h2>
              <p>{hero.body[lang]}</p>
            </div>
            <dl className="sector__showcaseStats">
              {hero.stats.map((stat) => (
                <div key={stat.value}>
                  <dt>{stat.label[lang]}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </figcaption>
        </figure>
      </div>

      {/* ══ Mandate band ══ */}
      <section className="sector__mandate" aria-labelledby="mandate-title">
        <div className="shell sector__mandateGrid">
          <div className="sector__mandateLead">
            <span className="sector__mandateEyebrow mono">
              <i aria-hidden="true" />
              {mandate.eyebrow[lang]}
            </span>
            <h2 id="mandate-title">{mandate.title[lang]}</h2>
            <p className="sector__mandateBody">{mandate.body[lang]}</p>
            <div className="sector__note">
              <span className="mono">{mandate.note.heading[lang]}</span>
              <p>{mandate.note.body[lang]}</p>
            </div>
          </div>

          <div className="sector__divisions">
            {mandate.divisions.map((div) => (
              <article key={div.title.en} className="sector__division">
                <span className="mono sector__divisionEyebrow">{div.eyebrow[lang]}</span>
                <h3>{div.title[lang]}</h3>
                <p>{div.body[lang]}</p>
                <ul role="list">
                  {div.points[lang].map((point) => (
                    <li key={point} className="mono">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Programme lines ══ */}
      <section className="section--sm" aria-labelledby="platforms-title">
        <div className="shell">
          <div className="sector__platformsHead">
            <h2 className="title" id="platforms-title">
              {page.platformsTitle[lang]}
            </h2>
            <p className="lede">{page.platformsLede[lang]}</p>
          </div>

          {page.platforms.map((platform, i) => (
            <article
              key={platform.id}
              className={`platform reveal ${i % 2 === 1 ? 'is-reversed' : ''}`}
            >
              <div className="platform__text">
                <div className="platform__tags">
                  <span className="platform__tag">{platform.tag[lang]}</span>
                  <span className="platform__badge mono">{platform.badge}</span>
                </div>
                <h3 className="platform__name">
                  {platform.name}
                  <span className="platform__subtitle">{platform.subtitle[lang]}</span>
                </h3>
                <p className="platform__body">{platform.body[lang]}</p>
                <dl className="platform__specs">
                  {platform.specs.map((spec) => (
                    <div key={spec.value}>
                      <dt>{spec.label[lang]}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="platform__media zoom-frame">
                <img src={platform.image} alt={platform.alt[lang]} loading="lazy" decoding="async" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
