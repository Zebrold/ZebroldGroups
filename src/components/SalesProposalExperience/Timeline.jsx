import { activeStageNumber } from '../../three/animationSystem';

const STAGE_NUMBERS = [1, 2, 3, 4, 5, 6, 7];

export default function Timeline({ progress, orientation = 'vertical', lang = 'en' }) {
  const active = activeStageNumber(progress);

  return (
    <div className={`sp-timeline sp-timeline--${orientation}`}>
      <div className="sp-timeline-line" />
      {STAGE_NUMBERS.map((n) => {
        const isQuote = n === 4;
        const isActive = n === active;
        return (
          <div
            key={n}
            className={`sp-timeline-item ${isActive ? 'is-active' : ''} ${isQuote ? 'is-quote' : ''}`}
          >
            <span className="sp-timeline-dot" />
            <span className="sp-timeline-num">{n}</span>
            {isQuote && <span className="sp-timeline-label">{lang === 'en' ? 'QUOTE' : 'ANGEBOT'}</span>}
          </div>
        );
      })}
    </div>
  );
}
