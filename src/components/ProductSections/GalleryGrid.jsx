import { useCallback, useEffect, useState } from 'react';

/** Compact 3-column archive grid that opens a fullscreen lightbox with keyboard + arrow navigation. */
export default function GalleryGrid({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const total = items.length;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, close, next, prev]);

  return (
    <>
      <div className="product-archive-grid">
        {items.map((item, i) => (
          <button
            type="button"
            className="product-archive-item"
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={item.caption ? `Open image: ${item.caption}` : 'Open image'}
          >
            <img
              src={item.image}
              alt={item.caption || ''}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {item.caption && <span className="product-archive-caption">{item.caption}</span>}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="product-lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className="product-lightbox-close" onClick={close} aria-label="Close">×</button>
          <button
            type="button"
            className="product-lightbox-arrow product-lightbox-arrow--prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            ←
          </button>
          <img
            src={items[activeIndex].image}
            alt={items[activeIndex].caption || ''}
            className="product-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="product-lightbox-arrow product-lightbox-arrow--next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            →
          </button>
          {items[activeIndex].caption && <span className="product-lightbox-caption">{items[activeIndex].caption}</span>}
        </div>
      )}
    </>
  );
}
