import { Icon } from './icons';

/** Icon + short-text rows — compact alternative to feature cards for dense spec lists. */
export default function BulletList({ items, light = false }) {
  return (
    <div className={`product-bullet-list ${light ? 'is-light' : ''}`}>
      {items.map((item, i) => (
        <div className="product-bullet" key={i}>
          <span className="product-bullet-icon" aria-hidden="true"><Icon name={item.icon} /></span>
          <span className="product-bullet-text">
            {item.title && <strong>{item.title}</strong>}
            <span>{item.text || item.desc}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
