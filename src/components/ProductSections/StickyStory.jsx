import { useEffect, useRef, useState } from 'react';

/**
 * Premium sticky storytelling pattern: a sticky visual on one side, a
 * scrolling numbered list on the other. The active item — and therefore the
 * visible image — is driven by whichever text block crosses the viewport's
 * center band, tracked via IntersectionObserver (no scroll-jank JS math).
 */
export default function StickyStory({ items, reversed = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    const els = itemRefs.current;
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div className={`product-sticky-story ${reversed ? 'is-reversed' : ''}`}>
      <div className="product-sticky-story-visual">
        <div className="product-sticky-story-media">
          {items.map((item, i) => (
            <img
              key={i}
              src={item.image}
              alt={item.imageAlt || ''}
              className={`product-sticky-story-img ${i === activeIndex ? 'is-active' : ''}`}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          ))}
        </div>
      </div>
      <div className="product-sticky-story-text">
        {items.map((item, i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className={`product-sticky-story-item ${i === activeIndex ? 'is-active' : ''}`}
          >
            <span className="product-sticky-story-number">{item.number}</span>
            <h3 className="product-sticky-story-title">{item.title}</h3>
            <p className="product-sticky-story-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
