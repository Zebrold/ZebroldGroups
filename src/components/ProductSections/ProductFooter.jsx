import { Link } from 'react-router-dom';
import { products } from '../../data/products';

/** Related-products band shown above the site's global footer on every product page. */
export default function ProductFooter({ currentSlug }) {
  const related = Object.values(products).filter((p) => p.slug !== currentSlug);

  return (
    <section className="product-related">
      <div className="container">
        <span className="product-caption">Explore More</span>
        <div className="product-related-grid">
          {related.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="product-related-item">
              <span className="product-related-maker">{p.manufacturer}</span>
              <span className="product-related-name">{p.name}</span>
              <span className="product-related-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
