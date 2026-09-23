import './PageHero.css';

/**
 * Dark burgundy masthead used by every page except the homepage.
 * Pass `image` for a photographic backdrop, or omit it for the flat band.
 */
export default function PageHero({ eyebrow, title, lede, image, imageAlt = '', align = 'left', children }) {
  return (
    <header className={`pageHero ${image ? 'has-image' : ''} pageHero--${align}`}>
      {image && (
        <>
          <img src={image} alt={imageAlt} className="pageHero__bg" loading="eager" decoding="async" />
          <div className="pageHero__scrim" aria-hidden="true" />
        </>
      )}

      <div className="shell pageHero__inner">
        {eyebrow && <span className="eyebrow eyebrow--onDark">{eyebrow}</span>}
        <h1 className="pageHero__title">{title}</h1>
        {lede && <p className="pageHero__lede">{lede}</p>}
        {children}
      </div>
    </header>
  );
}
