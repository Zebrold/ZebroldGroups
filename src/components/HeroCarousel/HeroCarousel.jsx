import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './HeroCarousel.css';

const AUTO_MS = 6000;

/**
 * Cross-fading hero.
 *
 * slides:   [{ image, alt, tone, badge, title, body, cta?, meta? }] — text as {en,de}
 * variant:  'bleed' (homepage, edge to edge) | 'inset' (rounded card, with CTA)
 * ctaHref:  anchor each slide's cta button points at (inset variant only)
 */
export default function HeroCarousel({ slides, variant = 'bleed', ctaHref }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { lang, t } = useLanguage();
  const timerRef = useRef(null);
  const total = slides.length;

  const goTo = useCallback((i) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  /* Auto-advance, suspended while hovered/focused or when motion is reduced. */
  useEffect(() => {
    if (paused || total < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    timerRef.current = setTimeout(() => setIndex((i) => (i + 1) % total), AUTO_MS);
    return () => clearTimeout(timerRef.current);
  }, [index, paused, total]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  return (
    <section
      className={`hero hero--${variant}`}
      aria-roledescription="carousel"
      aria-label="Zebrold IHL mobility programmes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      <div className="hero__stage">
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <article
              key={slide.image}
              className={`hero__slide ${active ? 'is-active' : ''}`}
              aria-roledescription="slide"
              aria-label={`${t('carousel_slide')} ${i + 1} / ${total}`}
              aria-hidden={!active}
              // Keep inactive slides out of the tab order entirely.
              {...(active ? {} : { inert: true })}
            >
              <img
                src={slide.image}
                alt={slide.alt?.[lang] ?? slide.alt?.en ?? ''}
                className="hero__img"
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding="async"
              />
              <div className="hero__scrim" aria-hidden="true" />

              <div className="hero__content">
                <div className="hero__copy">
                  <h1 className="hero__title">{slide.title[lang]}</h1>
                  <p className="hero__body">{slide.body[lang]}</p>
                </div>

                {slide.cta && ctaHref && (
                  <div className="hero__actions">
                    <a href={ctaHref} className="hero__cta">
                      {slide.cta[lang]}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    {slide.meta && <span className="hero__meta">{slide.meta[lang]}</span>}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {total > 1 && (
        <div className="hero__dots">
          {slides.map((slide, i) => (
            <button
              key={`dot-${slide.image}`}
              type="button"
              className={`hero__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`${t('carousel_slide')} ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </section>
  );
}
