import { Icon } from './icons';

/** Icon + title + description cards — "Why It Matters" style feature grids. */
export default function FeatureCards({ items }) {
  return (
    <div className="product-feature-grid">
      {items.map((f, i) => (
        <div className="product-feature-card" key={i}>
          <span className="product-feature-icon" aria-hidden="true"><Icon name={f.icon} /></span>
          <h3 className="product-feature-title">{f.title}</h3>
          <p className="product-feature-desc">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
