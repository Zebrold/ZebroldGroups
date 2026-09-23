import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SEO from '../../components/SEO/SEO';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import ArrowLink from '../../components/ArrowLink/ArrowLink';
import { heroSlides } from '../../data/heroSlides';
import { solutions } from '../../data/solutions';
import { news } from '../../data/news';
import { events } from '../../data/events';
import { formatDate } from '../../utils/formatDate';
import './Home.css';
import bogieImg from '../../assets/carbody_laser_welding.jpg';
import societyImg from '../../assets/station_trainshed.jpg';

const BOGIE_IMG =
  bogieImg;

const SOCIETY_IMG =
  societyImg;

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zebrold Scolome',
  legalName: 'Zebrold International Holdings Limited',
  url: 'https://www.zebrold.de/',
  logo: 'https://www.zebrold.de/favicon.png',
  description:
    'Zebrold Scolome designs and builds ultra high-speed intelligent rolling stock, signalling and digital rail systems — engineered in Germany, designed in India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bockenheimer Landstrasse 17-19',
    addressLocality: 'Frankfurt am Main',
    postalCode: '60325',
    addressCountry: 'DE',
  },
  email: 'info@zebrold.de',
  sameAs: ['https://www.linkedin.com/company/zebrold'],
};

export default function Home() {
  const { t, lang } = useLanguage();
  const revealRef = useScrollReveal();
  const railRef = useRef(null);

  // Layout distribution matching the 8 cards in reference:
  // Col 1: Lead story + SiC card
  // Col 2: VIA Rail + Q1 results + FY milestones
  // Col 3: 25 trains + Egypt corridor (dark) + Flox AI detection
  const col1Lead = news[0];
  const col1Mini = news[1];
  const col2Items = [news[2], news[3], news[4]].filter(Boolean);
  const col3Items = [news[5], news[6], news[7]].filter(Boolean);

  const featuredEvent = events.find((e) => e.featured);
  const listEvents = events.filter((e) => !e.featured);

  return (
    <div ref={revealRef}>
      <SEO
        title="Zebrold Scolome | Ultra Speed Intelligent Rolling Stocks"
        description="Zebrold Scolome designs and builds ultra high-speed intelligent rolling stock, signalling and digital rail systems. Made in Deutschland, designed in India."
        keywords="Zebrold, Scolome, rolling stock, high-speed rail, EMU, bogie, ETCS, signalling, digital rail, Frankfurt, rail manufacturer"
        url="/"
        schemaData={HOME_SCHEMA}
      />

      {/* ══ Hero Carousel ══ */}
      <HeroCarousel slides={heroSlides} />

      {/* ══ Editorial Overview & Origin Section ══ */}
      <section className="homeEditorial shell-wide">
        {/* Split 1: Engineering the Future of Rail Mobility */}
        <div className="homeFutureGrid reveal">
          <div className="homeFutureGrid__colTitle">
            <h2 className="homeFutureGrid__heading">
              {t('home_future_title')}
            </h2>
          </div>
          <div className="homeFutureGrid__colContent">
            <div className="homeFutureGrid__leadBox">
              <p>
                <strong>Zebrold International Holdings Limited (Zebrold IHL)</strong>{' '}
                {lang === 'de'
                  ? 'ist ein deutsches Schienenfahrzeug- und Technologieunternehmen mit Hauptsitz in Frankfurt am Main, das sich der Weiterentwicklung des Schienenverkehrs durch Innovation, ingenieurtechnische Exzellenz und intelligente Bahntechnik widmet.'
                  : 'is a German rolling stock engineering and technology company headquartered in Frankfurt am Main, Germany, dedicated to advancing the future of rail transportation through innovation, engineering excellence, and intelligent railway solutions.'}
              </p>
            </div>
            <p className="homeFutureGrid__p">{t('home_future_p1')}</p>
            <p className="homeFutureGrid__p">
              {lang === 'de' ? (
                <>
                  Heute repräsentiert <strong>Scolome</strong> unsere dedizierte Eisenbahninitiative, die eine umfassende Vision für Schienenfahrzeugtechnik, Signaltechnik, Elektrifizierung, digitale Schiene, Infrastruktur, Komponenten, Services und schlüsselfertige Lösungen vereint. Unsere Produktionsvision ist in Deutschland verankert und vereint deutsche Ingenieurstandards, Präzisionsfertigung und einen internationalen Entwicklungsansatz.
                </>
              ) : (
                <>
                  Today, <strong>Scolome</strong> represents our dedicated railway initiative, bringing together a comprehensive vision for rolling stock engineering, railway signalling, electrification, digital rail, infrastructure, components, services, and turnkey solutions. Our manufacturing vision is centred in Germany, bringing together German engineering standards, precision manufacturing, and an international approach to railway technology development.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Big centered origin lockup — Strictly preserving "MΛDE IN DEUTSCHLΛND / DESIGNED IN INDIΛ" */}
        <div className="homeOrigin reveal">
          <h2 className="homeOrigin__title">
            <span className="homeOrigin__line">{t('home_made_in')}</span>
            <span className="homeOrigin__line">{t('home_designed_in')}</span>
          </h2>
        </div>

        {/* Split 2: Pioneering Ultra Speed Intelligent Rolling Stocks */}
        <div className="homePioneeringGrid reveal">
          <div className="homePioneeringGrid__colText">
            <h3 className="homePioneeringGrid__heading">
              {t('home_pioneering_title')}
            </h3>
            <p className="homePioneeringGrid__p">{t('home_pioneering_p1')}</p>
            <p className="homePioneeringGrid__p">{t('home_pioneering_p2')}</p>
            <p className="homePioneeringGrid__p">{t('home_pioneering_p3')}</p>
          </div>
          <div className="homePioneeringGrid__colMedia">
            <div className="homeBogieCard card-lift">
              <div className="homeBogieCard__inner">
                <img
                  src={BOGIE_IMG}
                  alt={
                    lang === 'de'
                      ? 'Laserschweißen von Scolome-Wagenkastensektionen'
                      : 'Robotic laser welding of Scolome carbody sections'
                  }
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Mobility solutions rail ══ */}
      <section className="section--sm solutions" aria-labelledby="solutions-title">
        <div className="shell-wide">
          <div className="section-head">
            <h2 className="title" id="solutions-title">
              {t('home_solutions_title')}
            </h2>
          </div>
        </div>

        <div className="solutions__rail no-scrollbar" ref={railRef} tabIndex={0} aria-label={t('home_solutions_title')}>
          {solutions.map((item) => {
            const content = (
              <>
                <div className="solutionCard__media">
                  <img src={item.image} alt={item.alt[lang]} loading="lazy" decoding="async" />
                </div>
                <div className="solutionCard__body">
                  <h3 className="solutionCard__name">{item.name[lang]}</h3>
                </div>
              </>
            );

            return item.path ? (
              <Link
                key={item.id}
                to={item.path}
                className="solutionCard card-lift zoom-frame"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
              >
                {content}
              </Link>
            ) : (
              <article key={item.id} className="solutionCard card-lift zoom-frame">
                {content}
              </article>
            );
          })}
        </div>
      </section>

      {/* ══ Highlights (8 News Cards in 3 Columns) ══ */}
      <section className="section--sm highlights" aria-labelledby="highlights-title">
        <div className="shell-wide">
          <div className="section-head">
            <h2 className="title" id="highlights-title">
              {t('home_highlights_title')}
            </h2>
            <ArrowLink to="/newsroom">{t('home_all_news')}</ArrowLink>
          </div>

          <div className="highlights__grid">
            {/* Column 1: Featured Lead Story + SiC Traction Card */}
            <div className="highlights__col">
              {col1Lead && (
                <article className="leadCard card-lift zoom-frame reveal">
                  <Link to="/newsroom" className="leadCard__link">
                    <div className="leadCard__media">
                      <img src={col1Lead.image} alt={col1Lead.alt[lang]} loading="lazy" decoding="async" />
                    </div>
                    <div className="leadCard__body">
                      <span className="chip">{formatDate(col1Lead.date, lang)}</span>
                      <h3 className="leadCard__title">{col1Lead.title[lang]}</h3>
                    </div>
                  </Link>
                </article>
              )}

              {col1Mini && (
                <article className="miniCard card-lift zoom-frame reveal" data-delay="1">
                  <Link to="/newsroom" className="miniCard__link">
                    <div className="miniCard__media">
                      <img src={col1Mini.image} alt={col1Mini.alt[lang]} loading="lazy" decoding="async" />
                    </div>
                    <div className="miniCard__body">
                      <span className="chip">{formatDate(col1Mini.date, lang)}</span>
                      <h3 className="miniCard__title">{col1Mini.title[lang]}</h3>
                    </div>
                  </Link>
                </article>
              )}
            </div>

            {/* Column 2: 3 Cards (VIA Rail, Q1, FY) */}
            <div className="highlights__col">
              {col2Items.map((item, i) => (
                <article
                  key={item.id}
                  className="miniCard card-lift zoom-frame reveal"
                  data-delay={i + 1}
                >
                  <Link to="/newsroom" className="miniCard__link">
                    <div className="miniCard__media">
                      <img src={item.image} alt={item.alt[lang]} loading="lazy" decoding="async" />
                    </div>
                    <div className="miniCard__body">
                      <span className="chip">{formatDate(item.date, lang)}</span>
                      <h3 className="miniCard__title">{item.title[lang]}</h3>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Column 3: 3 Cards (25 trains, Egypt consortium dark card, AI trials) */}
            <div className="highlights__col">
              {col3Items.map((item, i) => (
                <article
                  key={item.id}
                  className={`miniCard card-lift zoom-frame reveal ${item.tone === 'dark' ? 'is-dark' : ''}`}
                  data-delay={i + 1}
                >
                  <Link to="/newsroom" className="miniCard__link">
                    <div className="miniCard__media">
                      <img src={item.image} alt={item.alt[lang]} loading="lazy" decoding="async" />
                    </div>
                    <div className="miniCard__body">
                      <span className={`chip ${item.tone === 'dark' ? 'chip--onDark' : ''}`}>
                        {formatDate(item.date, lang)}
                      </span>
                      <h3 className="miniCard__title">{item.title[lang]}</h3>
                      {item.tone === 'dark' && (
                        <span className="miniCard__discover">{t('home_discover')} →</span>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ Upcoming events ══ */}
      <section className="section--sm events" aria-labelledby="events-title">
        <div className="shell-wide">
          <div className="section-head">
            <h2 className="title" id="events-title">
              {t('home_events_title')}
            </h2>
            <ArrowLink to="/newsroom">{t('home_all_events')}</ArrowLink>
          </div>
        </div>

        <div className="events__layout shell-wide">
          {featuredEvent && (
            <div className="events__featuredWrap reveal">
              <article className="eventArch">
                <div className="coral-pill-glow" aria-hidden="true" />
                <h3 className="eventArch__name">{featuredEvent.name[lang]}</h3>
                <div className="eventArch__when">
                  <span className="eventArch__days">{featuredEvent.days}</span>
                  <span className="eventArch__place">{featuredEvent.location[lang]}</span>
                </div>
                <span className="eventArch__month mono">{featuredEvent.month[lang].toUpperCase()}</span>
                <div>
                  <Link to="/newsroom" className="eventArch__readMore">
                    {t('home_read_more')} →
                  </Link>
                </div>
              </article>
            </div>
          )}

          <ul className="events__list" role="list">
            {listEvents.map((ev, i) => (
              <li key={ev.id}>
                <article className={`eventCard reveal ${ev.highlight ? 'is-highlight' : ''}`} data-delay={i + 1}>
                  <div className="eventCard__date">
                    <span className="eventCard__day">{ev.day}</span>
                    <span className={`eventCard__month mono ${ev.highlight ? 'is-highlight-month' : ''}`}>
                      {ev.month[lang].toUpperCase()}
                    </span>
                    {ev.duration && <span className="eventCard__dur">{ev.duration[lang]}</span>}
                  </div>
                  <div className="eventCard__body">
                    <h4 className="eventCard__name">{ev.name[lang]}</h4>
                    <div className="eventCard__tags">
                      {ev.tags[lang].map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ Society capsule ══ */}
      <section className="society" aria-labelledby="society-title">
        <div className="shell-wide">
          <div className="societyCapsule reveal">
            <div className="societyCapsule__media">
              <img
                src={SOCIETY_IMG}
                alt={t('home_society_title')}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: '36% 50%', transform: 'scale(1.4)' }}
              />
            </div>
            <div className="societyCapsule__body">
              <h2 className="societyCapsule__title" id="society-title">
                {lang === 'de' ? (
                  <>Für eine vernetzte,<br className="hidden-sm" /> widerstandsfähige und inklusive Gesellschaft</>
                ) : (
                  <>Fostering a connected,<br className="hidden-sm" /> resilient, and inclusive society</>
                )}
              </h2>
              <div>
                <Link to="/about" className="societyCapsule__cta">
                  {t('home_commitments')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
