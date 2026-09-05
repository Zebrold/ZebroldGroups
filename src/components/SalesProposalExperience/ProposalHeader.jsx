export default function ProposalHeader({ lang, progress }) {
  // Fades in as the assembled object settles, then hands focus to the logo
  // mark and fades fully out well before the background crossfade (0.68+)
  // begins — so it's never left half-visible against the low-contrast
  // "in-between" gray of the theme transition.
  const introOpacity = Math.min(1, progress / 0.08);
  const outroOpacity = 1 - Math.min(1, Math.max(0, (progress - 0.42) / 0.18));
  const opacity = introOpacity * outroOpacity;

  return (
    <div className="sp-header" style={{ opacity }}>
      <div className="sp-header-inner">
        <span className="sp-eyebrow">
          <span className="sp-eyebrow-triangle">▲</span>
          {lang === 'en' ? 'QUOTE' : 'ANGEBOT'}
        </span>
        <h2 className="sp-heading">
          {lang === 'en' ? 'Smart Sales Proposals' : 'Intelligente Verkaufsangebote'}
        </h2>
        <p className="sp-description">
          {lang === 'en'
            ? "We offer the most sophisticated proposal builder on the market. With ZEBROLD you can create stunning sales proposals in record time, with the ability to predict the customer's true intent to buy."
            : 'Wir bieten den anspruchsvollsten Angebots-Builder auf dem Markt. Mit ZEBROLD erstellen Sie beeindruckende Verkaufsangebote in Rekordzeit und erkennen die wahre Kaufabsicht Ihrer Kunden.'}
        </p>
      </div>
    </div>
  );
}
