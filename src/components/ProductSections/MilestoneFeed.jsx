/** Press-release-style milestone cards — image + eyebrow tag + headline + short copy + date. */
export default function MilestoneFeed({ items }) {
  return (
    <div className="product-milestone-feed">
      {items.map((item, i) => (
        <article className="product-milestone-card" key={i}>
          <div className="product-milestone-media">
            <img
              src={item.image}
              alt={item.imageAlt || ''}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="product-milestone-body">
            <span className="product-milestone-tag">{item.tag}</span>
            <h3 className="product-milestone-title">{item.title}</h3>
            <p className="product-milestone-desc">{item.desc}</p>
            <span className="product-milestone-date">{item.date}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
