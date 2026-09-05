import { useState } from 'react';

/** Cinematic horizontal gallery — one large frame at a time, counter + arrow controls (not a thumbnail strip). */
export default function ImageGallery({ items }) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const active = items[index];

  const go = (delta) => setIndex((i) => (i + delta + total) % total);

  return (
    <div className="product-gallery">
      <div className="product-gallery-frame">
        <img
          key={index}
          src={active.image}
          alt={active.caption || ''}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {active.caption && <span className="product-gallery-caption">{active.caption}</span>}
      </div>
      <div className="product-gallery-controls">
        <button type="button" className="product-gallery-arrow" onClick={() => go(-1)} aria-label="Previous image">←</button>
        <span className="product-gallery-count">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <button type="button" className="product-gallery-arrow" onClick={() => go(1)} aria-label="Next image">→</button>
      </div>
    </div>
  );
}
