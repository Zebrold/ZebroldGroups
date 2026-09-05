/** Image + copy split section — reused for every media/text pairing across product pages. */
export default function Split({ image, imageAlt, reversed, children }) {
  return (
    <div className={`product-split ${reversed ? 'is-reversed' : ''}`}>
      <div className="product-split-media">
        <img
          src={image}
          alt={imageAlt || ''}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div className="product-split-copy">{children}</div>
    </div>
  );
}
