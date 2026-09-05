/**
 * Minimal schematic route-opener visualization — several independent city-pair
 * routes drawn at once (not a single-origin fan-out). Illustrative only, reuses
 * the same dot-grid + animated dashed-line idiom as the interactive RouteMap.
 */
export default function RouteOpenerMap({ routes }) {
  return (
    <div className="product-route-map product-route-map--static" role="img" aria-label="Illustrative map of newly opened long-range routes">
      <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {routes.map((r, i) => (
          <path
            key={i}
            d={`M ${r.from.x} ${r.from.y} Q ${(r.from.x + r.to.x) / 2} ${Math.min(r.from.y, r.to.y) - 60} ${r.to.x} ${r.to.y}`}
          />
        ))}
        {routes.map((r, i) => (
          <g key={i}>
            <circle className="product-route-dot product-route-dot--origin" cx={r.from.x} cy={r.from.y} r="5" />
            <text className="product-route-label" x={r.from.x + 10} y={r.from.y - 8}>{r.from.label}</text>
            <circle className="product-route-dot" cx={r.to.x} cy={r.to.y} r="5" />
            <text className="product-route-label" x={r.to.x + 10} y={r.to.y - 8}>{r.to.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
