import { useCountUp } from '../../hooks/useCountUp';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function Spec({ value, numeric, prefix = '', suffix = '', label, delay }) {
  const [countRef, count] = useCountUp(numeric ?? 0, 1600);

  return (
    <div className="tech-spec reveal" data-delay={delay} ref={numeric != null ? countRef : undefined}>
      <span className="tech-spec-value">
        {numeric != null ? <>{prefix}{count.toLocaleString()}{suffix}</> : value}
      </span>
      <span className="tech-spec-label">{label}</span>
    </div>
  );
}

/** Horizontal technical-spec strip — large number, uppercase label, thin dividers. Staggers in on scroll. */
export default function TechSpecStrip({ specs }) {
  const containerRef = useScrollReveal();

  return (
    <div className="tech-spec-strip" ref={containerRef}>
      {specs.map((spec, i) => (
        <Spec key={i} {...spec} delay={Math.min(i + 1, 12)} />
      ))}
    </div>
  );
}
