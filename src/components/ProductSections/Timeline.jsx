import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Vertical connecting-line milestone timeline — certification/program journeys.
 * Each item may carry an optional `stage` eyebrow (e.g. "Certification") and
 * a small thumbnail `image`.
 */
export default function Timeline({ items }) {
  const ref = useScrollReveal();

  return (
    <div className="product-timeline" ref={ref}>
      <div className="product-timeline-line" aria-hidden="true" />
      {items.map((item, i) => (
        <div className="product-timeline-item reveal" data-delay={Math.min(i + 1, 12)} key={i}>
          <div className="product-timeline-node" aria-hidden="true" />
          <div className="product-timeline-body">
            <div className="product-timeline-copy">
              {item.stage && <span className="product-timeline-stage">{item.stage}</span>}
              <span className="product-timeline-date">{item.date}</span>
              <h3 className="product-timeline-title">{item.title}</h3>
              <p className="product-timeline-desc">{item.desc}</p>
            </div>
            {item.image && (
              <div className="product-timeline-thumb">
                <img
                  src={item.image}
                  alt={item.imageAlt || ''}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
