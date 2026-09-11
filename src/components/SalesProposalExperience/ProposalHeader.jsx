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
          {lang === 'en' ? 'Engines Power the Sky' : 'Motoren beherrschen den Himmel'}
        </h2>
        <p className="sp-description">
          {lang === 'en'
            ? 'Aircraft are built around one fundamental element, the engine. It is the heart of every aircraft, driving performance, efficiency and the possibility to go further.'
            : 'Flugzeuge werden um ein fundamentales Element gebaut: den Motor. Er ist das Herz jedes Flugzeugs und treibt Leistung, Effizienz und die Möglichkeit, weiter zu kommen, an.'}
        </p>
      </div>
    </div>
  );
}
