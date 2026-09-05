import { Link } from 'react-router-dom';

/** Closing CTA band — reused across all four product pages, built on the site's existing .button component. */
export default function ProductCTA({ title, desc, primary = { text: 'Contact Our Team →', to: '/contact' }, secondary }) {
  return (
    <section className="product-cta-section">
      <div className="container product-cta-inner">
        <h2 className="product-cta-title">{title}</h2>
        <p className="product-cta-desc">{desc}</p>
        <div className="product-cta-actions">
          <Link to={primary.to} className="button">{primary.text}</Link>
          {secondary && <Link to={secondary.to} className="button is-beige">{secondary.text}</Link>}
        </div>
      </div>
    </section>
  );
}
