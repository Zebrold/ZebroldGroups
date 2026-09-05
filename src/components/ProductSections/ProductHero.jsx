import { Link } from 'react-router-dom';

/**
 * Full-bleed hero: background photo + maroon gradient overlay, breadcrumb,
 * eyebrow tag, headline, tagline. Reused by all four product pages.
 *
 * @param {boolean} compact - shorter hero (~70vh vs the 85vh default), for
 *   pages that want the aircraft photo to stay dominant rather than filling
 *   most of the first viewport.
 * @param {string} technicalLabel - small mono-style tag near the headline,
 *   e.g. "A321XLR / COMMERCIAL AIRCRAFT".
 * @param {boolean} scrollCue - shows a subtle animated "scroll" affordance.
 * @param {string} scrollCueLabel - label for the scroll cue, e.g. "Explore Aircraft".
 * @param {boolean} cinematic - drops the gradient wash in favor of the bare
 *   photograph, sets the headline on a solid semi-transparent panel instead,
 *   and staggers a subtle reveal (image → headline → tagline → scroll cue).
 */
export default function ProductHero({
  image, imageAlt, eyebrow, title, tagline, taglineLarge, category, current,
  compact, technicalLabel, scrollCue, scrollCueLabel = 'Explore', cinematic,
}) {
  return (
    <section className={`product-hero ${compact ? 'product-hero--compact' : ''} ${cinematic ? 'product-hero--cinematic' : ''}`}>
      <div className="product-hero-bg">
        <img
          src={image}
          alt={imageAlt || ''}
          className="product-hero-img"
          loading="eager"
          fetchPriority="high"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="product-hero-overlay" />
      </div>
      <div className="container product-hero-container">
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="product-breadcrumb-link">Home</Link>
          <span className="product-breadcrumb-sep">/</span>
          <span className="product-breadcrumb-link">Products</span>
          {category && (
            <>
              <span className="product-breadcrumb-sep">/</span>
              <span className="product-breadcrumb-link">{category}</span>
            </>
          )}
          {current && (
            <>
              <span className="product-breadcrumb-sep">/</span>
              <span className="product-breadcrumb-current" aria-current="page">{current}</span>
            </>
          )}
        </nav>

        <div className={cinematic ? 'product-hero-panel' : undefined}>
          {technicalLabel && <span className="product-hero-technical-label">{technicalLabel}</span>}
          {eyebrow && <span className="product-hero-eyebrow">{eyebrow}</span>}
          <h1 className="product-hero-title">{title}</h1>
          {tagline && (
            <p className={`product-hero-tagline ${taglineLarge ? 'is-large' : ''}`}>{tagline}</p>
          )}
        </div>
      </div>
      {scrollCue && (
        <div className="product-hero-scroll-cue" aria-hidden="true">
          <span>{scrollCueLabel}</span>
          <span className="product-hero-scroll-cue-line" />
        </div>
      )}
    </section>
  );
}
