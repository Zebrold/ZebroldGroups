import { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO/SEO';
import { news, NEWS_CATEGORIES } from '../../data/news';
import { getRelease } from '../../data/releases';
import { formatDate, byDateDesc } from '../../utils/formatDate';
import './Release.css';

const COPY = {
  en: {
    back: 'Back to newsroom',
    readingTime: (n) => `Reading time: ${n} min`,
    dateline: 'Dateline of issuance',
    repositories: 'Bilateral repositories',
    ref: 'Communiqué ref',
    specIndex: 'Programme specification index',
    related: 'Related commercial & technology dispatches',
    relatedEyebrow: 'Archival communiqués',
    viewAll: 'View all dispatches',
    authority: 'Official issuing authority',
    readDispatch: 'Read dispatch',
  },
  de: {
    back: 'Zurück zum Newsroom',
    readingTime: (n) => `Lesezeit: ${n} Min.`,
    dateline: 'Datum der Ausgabe',
    repositories: 'Bilaterale Archive',
    ref: 'Kommuniqué-Ref.',
    specIndex: 'Programm-Spezifikationsindex',
    related: 'Verwandte Meldungen aus Wirtschaft & Technik',
    relatedEyebrow: 'Archivierte Kommuniqués',
    viewAll: 'Alle Meldungen',
    authority: 'Offiziell herausgebende Stelle',
    readDispatch: 'Meldung lesen',
  },
};

const DEFAULT_AUTHORITY = 'ZEBROLD INTERNATIONAL HOLDINGS LIMITED • SCOLOME MOBILITY ARCHITECTURE';
const DEFAULT_SITES = 'FRANKFURT • KASSEL • BENGALURU • HYDERABAD';

export default function Release() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const c = COPY[lang];

  const item = news.find((n) => n.id === id);
  const rel = getRelease(id) ?? {};

  const related = useMemo(
    () => [...news].filter((n) => n.id !== id).sort(byDateDesc).slice(0, 3),
    [id]
  );

  /* An unknown id should not render a broken shell. */
  if (!item) return <Navigate to="/newsroom" replace />;

  const category = NEWS_CATEGORIES.find((k) => k.id === item.category);
  /* Fall back to the news entry when a communiqué carries no bespoke narrative. */
  const synopsis = rel.synopsis?.[lang] ?? item.excerpt[lang];
  const paragraphs = rel.paragraphs?.map((p) => p[lang]) ?? item.body[lang].split('\n\n');
  const sectionTitle = rel.sectionTitle?.[lang] ?? item.excerpt[lang];

  return (
    <article className="rel">
      <SEO
        title={`${item.title.en} | Zebrold IHL`}
        description={item.excerpt.en}
        url={`/newsroom/${item.id}`}
        type="article"
        image={item.image}
      />

      <div className="shell rel__shell">
        {/* ══ 1. Metadata ledger ══ */}
        <header className="rel__head">
          <Link to="/newsroom" className="rel__back">
            ← {c.back}
          </Link>

          <div className="rel__overline">
            <span className="rel__overlineLeft">
              <i className="rel__pip" aria-hidden="true" />
              <span className="mono">
                {rel.overline?.[lang] ?? category?.label[lang] ?? ''}
              </span>
            </span>
            <span className="rel__overlineRight mono">
              {rel.readMins && <span>{c.readingTime(rel.readMins)}</span>}
              {rel.readMins && rel.standards && <span aria-hidden="true">|</span>}
              {rel.standards && <strong>{rel.standards}</strong>}
            </span>
          </div>

          <h1 className="rel__title">{item.title[lang]}</h1>

          {/* Dateline bar */}
          <div className="rel__dateline">
            <div className="rel__datelineMain">
              <div className="rel__field">
                <span className="rel__fieldLabel mono">{c.dateline}</span>
                <span className="rel__fieldValue mono">
                  {formatDate(item.date, lang).toUpperCase()}
                  {rel.time ? ` • ${rel.time}` : ''}
                </span>
              </div>

              {rel.repositories && (
                <>
                  <span className="rel__fieldRule" aria-hidden="true" />
                  <div className="rel__field">
                    <span className="rel__fieldLabel mono">{c.repositories}</span>
                    <span className="rel__fieldValue mono">{rel.repositories}</span>
                  </div>
                </>
              )}
            </div>

            {rel.ref && (
              <div className="rel__datelineRef">
                <div className="rel__field is-right">
                  <span className="rel__fieldLabel mono">{c.ref}</span>
                  <span className="rel__fieldValue mono is-accent">{rel.ref}</span>
                </div>
                <span className="rel__refDot" aria-hidden="true" />
              </div>
            )}
          </div>

          <p className="rel__synopsis">{synopsis}</p>
        </header>

        {/* ══ 2. Primary plate ══ */}
        <figure className="rel__plate">
          <img src={item.image} alt={item.alt[lang]} loading="eager" decoding="async" />
          <figcaption className="rel__plateCap">
            <span className="mono">
              {rel.plate1?.caption?.[lang] ?? item.alt[lang]}
            </span>
            {rel.plate1?.reg && <span className="mono rel__plateReg">{rel.plate1.reg}</span>}
          </figcaption>
        </figure>

        {/* ══ 3. Narrative ledger ══ */}
        <section className="rel__ledger">
          <aside className="rel__aside">
            {rel.specIndex && (
              <div className="rel__specBox">
                <span className="rel__specTitle mono">▪ {c.specIndex}</span>
                <dl className="rel__specList">
                  {rel.specIndex.map((row) => (
                    <div key={row.value}>
                      <dt className="mono">{row.label[lang]}</dt>
                      <dd className="mono">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {rel.acceptance && (
              <div className="rel__banner">
                <span className="rel__bannerTitle mono">
                  <i className="rel__pip" aria-hidden="true" />
                  {rel.acceptance.title[lang]}
                </span>
                <p>{rel.acceptance.body[lang]}</p>
              </div>
            )}
          </aside>

          <div className="rel__body">
            <h2 className="rel__h2">{sectionTitle}</h2>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>

        {/* ══ 4. Pull quote ══ */}
        {rel.quote && (
          <section className="rel__quote">
            <div className="rel__quoteInner">
              <span className="rel__quoteLabel mono">▪ {rel.quote.label[lang]}</span>
              <blockquote>{rel.quote.text[lang]}</blockquote>
              <div className="rel__cite">
                <span className="rel__citeRule" aria-hidden="true" />
                <cite className="mono">{rel.quote.cite[lang]}</cite>
              </div>
            </div>
          </section>
        )}

        {/* ══ 5. Bilateral synthesis ══ */}
        {rel.synthesis && (
          <section className="rel__synthesis">
            <div className="rel__synthHead">
              <span className="rel__eyebrow mono">{rel.synthesis.eyebrow[lang]}</span>
              <h2 className="rel__h2">{rel.synthesis.title[lang]}</h2>
              <p className="rel__synthIntro">{rel.synthesis.intro[lang]}</p>
            </div>

            <div className="rel__domains">
              {rel.synthesis.domains.map((d) => (
                <div key={d.site} className="rel__domain">
                  <div className="rel__domainHead">
                    <span className="mono rel__domainSite">{d.site}</span>
                    <span className="mono rel__domainTag">{d.tag[lang]}</span>
                  </div>
                  <h3 className="rel__domainTitle">{d.title[lang]}</h3>
                  <p className="rel__domainBody">{d.body[lang]}</p>
                  <div className="rel__domainFoot">
                    <span className="mono rel__fieldLabel">{d.footLabel[lang]}</span>
                    <span className="mono rel__fieldValue">{d.footValue}</span>
                  </div>
                </div>
              ))}
            </div>

            {rel.plate2 && (
              <figure className="rel__plate rel__plate--second">
                <img src={rel.plate2.image} alt={rel.plate2.alt[lang]} loading="lazy" decoding="async" />
                <figcaption className="rel__plateCap">
                  <span className="mono">{rel.plate2.caption[lang]}</span>
                  <span className="mono rel__plateReg">{rel.plate2.reg}</span>
                </figcaption>
              </figure>
            )}
          </section>
        )}

        {/* ══ 6. Endorsements ══ */}
        {rel.endorsements && (
          <section className="rel__endorse">
            <div className="rel__endorseHead">
              <span className="rel__eyebrow mono">▪ {rel.endorsements.eyebrow[lang]}</span>
              <h2 className="rel__h2">{rel.endorsements.title[lang]}</h2>
            </div>
            <div className="rel__endorseGrid">
              {rel.endorsements.items.map((e) => (
                <blockquote key={e.name} className="rel__endorseCard">
                  <p>{e.quote[lang]}</p>
                  <footer>
                    <span className="rel__endorseName">{e.name}</span>
                    <span className="mono rel__endorseRole">{e.role[lang]}</span>
                    <span className="mono rel__endorseMeta">{e.meta}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        )}

        {/* ══ 7. Related dispatches ══ */}
        <section className="rel__related">
          <div className="rel__relatedHead">
            <div>
              <span className="rel__eyebrow mono">{c.relatedEyebrow}</span>
              <h2 className="rel__h2">{c.related}</h2>
            </div>
            <Link to="/newsroom" className="rel__viewAll mono">
              {c.viewAll} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="rel__relatedGrid">
            {related.map((n) => {
              const cat = NEWS_CATEGORIES.find((k) => k.id === n.category);
              return (
                <Link key={n.id} to={`/newsroom/${n.id}`} className="relCard">
                  <div className="relCard__meta">
                    <span className="mono">{formatDate(n.date, lang)}</span>
                    <span className="mono relCard__cat">{cat?.label[lang]}</span>
                  </div>
                  <h3 className="relCard__title">{n.title[lang]}</h3>
                  <p className="relCard__excerpt">{n.excerpt[lang]}</p>
                  <span className="relCard__cta mono">
                    <span>{c.readDispatch}</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ══ 8. Archival signature ══ */}
        <footer className="rel__signature">
          <div>
            <span className="rel__fieldLabel mono">{c.authority}</span>
            <span className="rel__fieldValue mono">{rel.authority ?? DEFAULT_AUTHORITY}</span>
          </div>
          <div className="rel__signatureSites">
            <span className="mono">{rel.sites ?? DEFAULT_SITES}</span>
            <span className="rel__refDot" aria-hidden="true" />
          </div>
        </footer>
      </div>
    </article>
  );
}
