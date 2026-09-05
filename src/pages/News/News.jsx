import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {
  CATEGORIES,
  categoryLabel,
  heroImages,
  getFeaturedGrid,
  getLatestNews,
  getPressReleases,
  getStories,
  getUpcomingEvents,
  getFeaturedEvent,
  mediaCentreTiles,
  keyDocuments,
  searchNewsroom,
} from '../../data/newsroomData';
import SEO from '../../components/SEO/SEO';
import './News.css';

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase();
}

function typeLabel(type) {
  if (type === 'press-release') return 'Press Release';
  if (type === 'story') return 'Story';
  if (type === 'event') return 'Event';
  return type;
}

/* Neutral tinted block behind every image — if the placeholder path 404s,
   this stays as a clean placeholder instead of a broken-image icon. */
function NewsroomImage({ src, alt, className }) {
  return (
    <div className={`nr-img-wrap ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => { e.currentTarget.style.opacity = '0'; }}
      />
    </div>
  );
}

function CategoryTag({ category, size }) {
  return <span className={`nr-tag ${size === 'sm' ? 'nr-tag-sm' : ''}`}>{categoryLabel(category)}</span>;
}

function EmptyState({ label }) {
  return <p className="nr-empty">No {label} yet in this category — check back soon.</p>;
}

const HERO_ROTATE_MS = 5500;

export default function News() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, HERO_ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [latestVisible, setLatestVisible] = useState(5);
  const [prVisible, setPrVisible] = useState(5);
  const [prSearch, setPrSearch] = useState('');
  const [prCategory, setPrCategory] = useState('all');
  const [prFilterOpen, setPrFilterOpen] = useState(false);
  const [prYears, setPrYears] = useState(new Set());

  const searchInputRef = useRef(null);

  useEffect(() => { setLatestVisible(5); }, [activeCategory]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const byCategory = (item) => activeCategory === 'all' || item.category === activeCategory;

  const featuredGrid = getFeaturedGrid().filter(byCategory);
  const latestAll = getLatestNews(50).filter(byCategory);
  const latestFeatured = latestAll[0];
  const latestRest = latestAll.slice(1);
  const latestShown = latestRest.slice(0, latestVisible);
  const storiesAll = getStories().filter(byCategory);
  const upcomingEvents = getUpcomingEvents();
  const featuredEvent = getFeaturedEvent();

  const prYearOptions = useMemo(() => {
    const years = new Set(getPressReleases().map((p) => new Date(p.date).getFullYear()));
    return [...years].sort((a, b) => b - a);
  }, []);

  const pressReleasesFiltered = useMemo(() => {
    return getPressReleases().filter((p) => {
      if (prCategory !== 'all' && p.category !== prCategory) return false;
      if (prYears.size > 0 && !prYears.has(new Date(p.date).getFullYear())) return false;
      if (prSearch.trim()) {
        const q = prSearch.trim().toLowerCase();
        const hay = `${p.title} ${p.excerpt} ${p.category}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [prCategory, prYears, prSearch]);

  const prShown = pressReleasesFiltered.slice(0, prVisible);
  useEffect(() => { setPrVisible(5); }, [prCategory, prYears, prSearch]);

  const prByYear = useMemo(() => {
    const groups = [];
    let current = null;
    for (const item of prShown) {
      const year = new Date(item.date).getFullYear();
      if (!current || current.year !== year) {
        current = { year, items: [] };
        groups.push(current);
      }
      current.items.push(item);
    }
    return groups;
  }, [prShown]);

  const toggleYear = (year) => {
    setPrYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) next.delete(year); else next.add(year);
      return next;
    });
  };

  const searchResults = searchOpen ? searchNewsroom(searchQuery) : [];

  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Newsroom — Zebrold International Holdings Limited (Zebrold IHL)",
    "description": "Official press releases, stories, and events from Zebrold International Holdings Limited (Zebrold IHL).",
    "url": "https://www.zebrold.de/news",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": getPressReleases().map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "NewsArticle",
          "headline": item.title,
          "description": item.excerpt,
          "datePublished": item.date,
          "publisher": {
            "@type": "Corporation",
            "name": "Zebrold International Holdings Limited",
            "alternateName": ["Zebrold IHL", "Zebrold Group"]
          }
        }
      }))
    }
  };

  return (
    <div className="news-page nr-page">
      <SEO
        title="Newsroom & Press Releases | Zebrold International Holdings Limited (Zebrold IHL)"
        description="Official press releases, stories, and events from Zebrold International Holdings Limited (Zebrold IHL) and portfolio subsidiaries."
        keywords="Zebrold news, Zebrold press release, Zebrold IHL announcements, Zebrold International Holdings Limited media updates, Zebrold stories, Zebrold events"
        url="/news"
        schemaData={newsSchema}
      />

      {/* ═══════ HERO — rotating crossfade, no dark wash ═══════ */}
      <section className="nr-hero">
        <div className="nr-hero-bg" aria-hidden="true">
          <AnimatePresence mode="sync">
            <motion.img
              key={heroIndex}
              src={heroImages[heroIndex]}
              alt=""
              className="nr-hero-bg-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>
        <div className="padding-global nr-hero-content">
          <div className="container-large">
            <div className="nr-hero-panel">
              <motion.span
                className="nr-hero-eyebrow"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                NEWSROOM
              </motion.span>
              <motion.h1
                className="nr-hero-headline"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Ideas. Innovation. Engineering.
              </motion.h1>
              <motion.p
                className="nr-hero-sub"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                What we're building. What we're discovering. What comes next.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <a href="#latest-news" className="nr-hero-cta">Explore latest <span className="nr-arrow">→</span></a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CATEGORY NAVIGATION + SEARCH TRIGGER ═══════ */}
      <nav className="nr-catnav" aria-label="Newsroom categories">
        <div className="padding-global">
          <div className="container-large nr-catnav-inner">
            <div className="nr-catnav-scroll">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  className={`nr-catnav-btn ${activeCategory === cat.slug ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.slug)}
                >
                  {cat.label}
                  {activeCategory === cat.slug && (
                    <motion.span
                      className="nr-catnav-underline"
                      layoutId="nr-catnav-underline"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="nr-search-trigger"
              onClick={() => setSearchOpen((v) => !v)}
              aria-expanded={searchOpen}
              aria-label="Search newsroom"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════ EXPANDABLE SEARCH ═══════ */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="nr-search-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="padding-global">
              <div className="container-large">
                <span className="nr-search-label">SEARCH NEWSROOM</span>
                <input
                  ref={searchInputRef}
                  type="text"
                  className="nr-search-input"
                  placeholder="Search articles, technologies, categories…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery.trim() && (
                  <div className="nr-search-results">
                    {searchResults.length === 0 && <p className="nr-empty">No results for "{searchQuery}".</p>}
                    {searchResults.slice(0, 8).map((item) => (
                      <Link key={item.id} to={`/news/${item.id}`} className="nr-search-result-row" onClick={() => setSearchOpen(false)}>
                        <CategoryTag category={item.category} size="sm" />
                        <span className="nr-search-result-title">{item.title}</span>
                        <span className="nr-meta">{formatDate(item.date)}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════ FEATURED STORIES — asymmetric grid ═══════ */}
      {featuredGrid.length > 0 && (
        <section className="nr-section nr-section-alt">
          <div className="padding-global">
            <div className="container-large">
              <span className="nr-eyebrow">Discover</span>
              <h2 className="nr-section-title">Featured stories</h2>

              <div className="nr-asym-grid">
                {featuredGrid[0] && (
                  <Link to={`/news/${featuredGrid[0].id}`} className="nr-asym-card nr-asym-card--large">
                    <NewsroomImage src={featuredGrid[0].image} alt={featuredGrid[0].title} className="nr-asym-img" />
                    <div className="nr-asym-overlay">
                      <CategoryTag category={featuredGrid[0].category} />
                      <h3 className="nr-asym-title">{featuredGrid[0].title}</h3>
                      <p className="nr-asym-desc">{featuredGrid[0].excerpt}</p>
                      <span className="nr-meta nr-meta-on-dark">{formatDate(featuredGrid[0].date)} · {featuredGrid[0].readTime}</span>
                    </div>
                  </Link>
                )}
                <div className="nr-asym-stack">
                  {featuredGrid.slice(1, 3).map((item) => (
                    <Link to={`/news/${item.id}`} key={item.id} className="nr-asym-card nr-asym-card--small">
                      <NewsroomImage src={item.image} alt={item.title} className="nr-asym-img" />
                      <div className="nr-asym-overlay">
                        <CategoryTag category={item.category} size="sm" />
                        <h3 className="nr-asym-title nr-asym-title--sm">{item.title}</h3>
                        <span className="nr-meta nr-meta-on-dark">{formatDate(item.date)} · {item.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════ LATEST NEWS — featured + compact editorial rows ═══════ */}
      <section id="latest-news" className="nr-section nr-section--latest">
        <div className="padding-global">
          <div className="container-large">
            <span className="nr-eyebrow">Stay current</span>
            <h2 className="nr-section-title">Latest news</h2>

            {latestAll.length === 0 ? (
              <EmptyState label="news" />
            ) : (
              <>
                <Link to={`/news/${latestFeatured.id}`} className="nr-latest-featured">
                  <NewsroomImage src={latestFeatured.image} alt={latestFeatured.title} className="nr-latest-featured-img" />
                  <div className="nr-latest-featured-body">
                    <div className="nr-editorial-top">
                      <CategoryTag category={latestFeatured.category} />
                      <span className="nr-meta">{formatDate(latestFeatured.date)} · {latestFeatured.readTime}</span>
                    </div>
                    <h3 className="nr-latest-featured-title">{latestFeatured.title}</h3>
                    <p className="nr-latest-featured-desc">{latestFeatured.excerpt}</p>
                    <span className="nr-read-link">Read story <span className="nr-arrow">→</span></span>
                  </div>
                </Link>

                {latestRest.length > 0 && (
                  <div className="nr-latest-compact-list">
                    {latestShown.map((item) => (
                      <Link to={`/news/${item.id}`} key={item.id} className="nr-latest-compact-row">
                        <NewsroomImage src={item.image} alt={item.title} className="nr-latest-compact-img" />
                        <div className="nr-latest-compact-body">
                          <div className="nr-editorial-top">
                            <CategoryTag category={item.category} size="sm" />
                            <span className="nr-meta">{formatDate(item.date)} · {item.readTime}</span>
                          </div>
                          <h3 className="nr-latest-compact-title">{item.title}</h3>
                        </div>
                        <span className="nr-row-arrow" aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}

            {latestRest.length > latestVisible && (
              <div className="nr-loadmore-row">
                <button type="button" className="nr-loadmore" onClick={() => setLatestVisible((v) => v + 5)}>
                  Load more <span className="nr-arrow-down">↓</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════ PRESS RELEASES ═══════ */}
      <section id="press-releases" className="nr-section nr-section-alt">
        <div className="padding-global">
          <div className="container-large">
            <span className="nr-eyebrow">Stay informed</span>
            <h2 className="nr-section-title">Press releases</h2>
            <p className="nr-section-intro">
              Our latest official announcements and updates across every Group business.
            </p>

            <div className="nr-pr-toolbar">
              <div className="nr-pr-search-wrap">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input
                  type="text"
                  className="nr-pr-search-input"
                  placeholder="Search press releases…"
                  value={prSearch}
                  onChange={(e) => setPrSearch(e.target.value)}
                />
              </div>
              <button type="button" className="nr-pr-filter-btn" onClick={() => setPrFilterOpen((v) => !v)}>
                Filter {prYears.size > 0 && <span className="nr-filter-count">{prYears.size}</span>}
              </button>
            </div>

            <div className="nr-pr-chips">
              {CATEGORIES.filter((c) => c.slug !== 'events').map((cat) => (
                <button
                  key={cat.slug}
                  className={`nr-chip ${prCategory === cat.slug ? 'is-active' : ''}`}
                  onClick={() => setPrCategory(cat.slug)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {prFilterOpen && (
                <motion.div
                  className="nr-pr-filter-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="nr-pr-filter-label">YEAR</span>
                  <div className="nr-pr-filter-years">
                    {prYearOptions.map((year) => (
                      <label key={year} className="nr-pr-year-checkbox">
                        <input type="checkbox" checked={prYears.has(year)} onChange={() => toggleYear(year)} />
                        {year}
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {pressReleasesFiltered.length === 0 ? (
              <EmptyState label="press releases" />
            ) : (
              <div className="nr-pr-index">
                {prByYear.map((group) => (
                  <div className="nr-pr-year-group" key={group.year}>
                    <div className="nr-pr-year-heading">
                      <span>{group.year}</span>
                      <span className="nr-pr-year-rule" aria-hidden="true" />
                    </div>
                    {group.items.map((item) => (
                      <Link to={`/news/${item.id}`} key={item.id} className="nr-pr-index-row">
                        <span className="nr-pr-index-date">{formatDate(item.date)}</span>
                        <div className="nr-pr-index-main">
                          <span className="nr-pr-index-type">Press Release</span>
                          <h3 className="nr-pr-index-title">{item.title}</h3>
                        </div>
                        <span className="nr-row-arrow" aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {pressReleasesFiltered.length > prVisible && (
              <div className="nr-loadmore-row">
                <button type="button" className="nr-loadmore" onClick={() => setPrVisible((v) => v + 5)}>
                  Load more <span className="nr-arrow-down">↓</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════ STORIES ═══════ */}
      <section id="stories" className="nr-section">
        <div className="padding-global">
          <div className="container-large">
            <span className="nr-eyebrow">Behind the technology</span>
            <h2 className="nr-section-title">Stories</h2>
            <p className="nr-section-intro">
              Explore the world of Zebrold through original stories — our missions, our engineering, and the people who drive progress every day.
            </p>

            {storiesAll.length === 0 ? (
              <EmptyState label="stories" />
            ) : (
              <div className="nr-story-grid">
                {storiesAll.map((item) => (
                  <Link
                    to={`/news/${item.id}`}
                    key={item.id}
                    className="nr-story-card"
                  >
                    <NewsroomImage src={item.image} alt={item.title} className="nr-story-img" />
                    <div className="nr-story-body">
                      <CategoryTag category={item.category} size="sm" />
                      <h3 className="nr-story-title">{item.title}</h3>
                      <p className="nr-story-snippet">{item.excerpt}</p>
                      <div className="nr-story-footer">
                        <span className="nr-meta">{formatDate(item.date)} · {item.readTime}</span>
                        <span className="nr-row-arrow" aria-hidden="true">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════ EVENTS ═══════ */}
      <section id="events" className="nr-section nr-section-alt">
        <div className="padding-global">
          <div className="container-large">
            <span className="nr-eyebrow">Meet us</span>
            <h2 className="nr-section-title">Upcoming events</h2>
            <p className="nr-section-intro">
              Mark your calendar to join us at one of our upcoming events, and stay updated on our latest activities.
            </p>

            {/* Event feature — the most important upcoming event */}
            {featuredEvent && (
              <div
                className="nr-event-feature"
                style={{ backgroundImage: `url(${featuredEvent.image})` }}
              >
                <div className="nr-event-feature-overlay" aria-hidden="true" />
                <div className="nr-event-feature-body">
                  <span className="nr-tag nr-tag-event-feature">Event</span>
                  <h3 className="nr-event-feature-title">{featuredEvent.title}</h3>
                  <p className="nr-event-feature-meta">{formatDate(featuredEvent.date)} · {featuredEvent.location}</p>
                  <p className="nr-event-feature-desc">{featuredEvent.excerpt}</p>
                  <Link to={`/news/${featuredEvent.id}`} className="nr-event-feature-link">
                    Explore event <span className="nr-arrow">→</span>
                  </Link>
                </div>
              </div>
            )}

            <div className="nr-event-row">
              {upcomingEvents.map((item, i) => (
                <div key={item.id} className="nr-event-card">
                  <span className="nr-event-index">{String(i + 2).padStart(2, '0')}</span>
                  <span className="nr-tag nr-tag-event">Event</span>
                  <h3 className="nr-event-title">{item.title}</h3>
                  <p className="nr-event-snippet">{item.excerpt}</p>
                  <span className="nr-event-meta">
                    {formatDate(item.date)}<br />{item.location}
                  </span>
                  <Link to={`/news/${item.id}`} className="nr-read-link">View event <span className="nr-arrow">→</span></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MEDIA CENTRE ═══════ */}
      <section id="media-centre" className="nr-section">
        <div className="padding-global">
          <div className="container-large">
            <span className="nr-eyebrow">Resources</span>
            <h2 className="nr-section-title">Media centre</h2>

            <div className="nr-media-photos">
              <div className="nr-media-photos-label">
                <span className="nr-media-tile-title">Photos</span>
                <span className="nr-meta">Image mosaic — placeholder tiles pending a licensed photo library</span>
              </div>
              <div className="nr-media-mosaic">
                {mediaCentreTiles[0].images.map((src, i) => (
                  <div key={i} className={`nr-mosaic-cell nr-mosaic-cell-${i}`}>
                    <NewsroomImage src={src} alt="" className="nr-mosaic-img" />
                  </div>
                ))}
              </div>
            </div>

            <div className="nr-media-row">
              <div className="nr-media-tile">
                <span className="nr-media-tile-title">Videos</span>
                <p className="nr-media-tile-desc">A video library is not yet available.</p>
                <span className="nr-media-tile-status">Coming soon</span>
              </div>
              <div className="nr-media-tile">
                <span className="nr-media-tile-title">Press Assets</span>
                <p className="nr-media-tile-desc">Logos and brand assets for press use.</p>
                <a href="mailto:info@zebrold.de?subject=Press%20Asset%20Request" className="nr-read-link">Request assets <span className="nr-arrow">→</span></a>
              </div>
              <div className="nr-media-tile">
                <span className="nr-media-tile-title">Documents</span>
                <p className="nr-media-tile-desc">Corporate presentations and fact sheets.</p>
                <a href="#key-documents" className="nr-read-link">Jump to documents <span className="nr-arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ KEY DOCUMENTS ═══════ */}
      <section id="key-documents" className="nr-section nr-section-alt">
        <div className="padding-global">
          <div className="container-large">
            <span className="nr-eyebrow">Downloads</span>
            <h2 className="nr-section-title">Key documents</h2>

            <div className="nr-doc-list">
              {keyDocuments.map((doc) => (
                <div key={doc.id} className="nr-doc-row">
                  <div className="nr-doc-main">
                    <span className="nr-doc-type">{doc.type}</span>
                    <h3 className="nr-doc-name">{doc.name}</h3>
                    <p className="nr-doc-desc">{doc.desc}</p>
                  </div>
                  <span className="nr-doc-status">{doc.available ? 'PDF · Download →' : 'Coming soon'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ STAY CONNECTED ═══════ */}
      <section className="nr-connect">
        <svg className="nr-connect-graphic" viewBox="0 0 800 400" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="400" />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} />
            ))}
          </g>
          <g fill="currentColor">
            <circle cx="200" cy="100" r="3" />
            <circle cx="500" cy="200" r="3" />
            <circle cx="700" cy="300" r="3" />
            <circle cx="300" cy="300" r="3" />
          </g>
        </svg>
        <div className="padding-global">
          <div className="container-medium nr-connect-inner">
            <h2 className="nr-connect-heading">Stay connected</h2>
            <p className="nr-connect-desc">
              Get Zebrold press releases and newsletters in your inbox, and reach our media relations team for interviews or information.
            </p>
            <form
              className="nr-connect-form"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.currentTarget.elements.namedItem('email').value;
                window.location.href = `mailto:info@zebrold.de?subject=Newsroom%20Subscription&body=Please%20subscribe%20this%20address%20to%20the%20newsroom%20mailing%20list%3A%20${encodeURIComponent(email)}`;
              }}
            >
              <input type="email" name="email" required placeholder="Email address" className="nr-connect-input" />
              <button type="submit" className="nr-connect-submit">Subscribe <span className="nr-arrow">→</span></button>
            </form>
            <div className="nr-connect-actions">
              <Link to="/contact" className="button is-beige">Contact the team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
