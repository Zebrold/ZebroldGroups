import { useCountUp } from '../../hooks/useCountUp';

/**
 * Single stat cell. When `numeric` is supplied the number counts up on
 * viewport entry (prefix/suffix stay static); otherwise `value` renders as-is
 * for compound formats like "180–220" that can't be animated as one number.
 */
function Stat({ value, numeric, prefix = '', suffix = '', label }) {
  const [ref, count] = useCountUp(numeric ?? 0, 1600);

  return (
    <div className="product-stat" ref={numeric != null ? ref : undefined}>
      <span className="product-stat-value">
        {numeric != null ? (
          <>{prefix}{count.toLocaleString()}{suffix}</>
        ) : (
          value
        )}
      </span>
      <span className="product-stat-label">{label}</span>
    </div>
  );
}

/** Big number + label callouts, reused as the consistent stat component across every product page. */
export default function StatRow({ stats, columns = 3 }) {
  return (
    <div className="product-stat-row" style={{ '--stat-cols': columns }}>
      {stats.map((stat, i) => (
        <Stat key={i} {...stat} />
      ))}
    </div>
  );
}
