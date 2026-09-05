import { useState } from 'react';

/**
 * Interactive route-capability map — vertical city tabs + schematic SVG map with
 * dashed maroon route lines. Illustrative/schematic (not a licensed map asset),
 * styled entirely in brand tone rather than Boeing/Airbus blue.
 */
export default function RouteMap({ cities }) {
  const [activeId, setActiveId] = useState(cities[0].id);
  const active = cities.find((c) => c.id === activeId) || cities[0];

  return (
    <div className="product-route-map-wrap">
      <div className="product-route-tabs" role="tablist">
        {cities.map((city) => (
          <button
            key={city.id}
            type="button"
            role="tab"
            aria-selected={city.id === activeId}
            className={`product-route-tab-btn ${city.id === activeId ? 'is-active' : ''}`}
            onClick={() => setActiveId(city.id)}
          >
            {city.label}
          </button>
        ))}
      </div>

      <div className="product-route-map">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {active.destinations.map((d, i) => (
            <path
              key={i}
              d={`M ${active.origin.x} ${active.origin.y} Q ${(active.origin.x + d.x) / 2} ${Math.min(active.origin.y, d.y) - 70} ${d.x} ${d.y}`}
            />
          ))}
          <circle className="product-route-dot product-route-dot--origin" cx={active.origin.x} cy={active.origin.y} r="7" />
          <text className="product-route-label" x={active.origin.x + 12} y={active.origin.y - 10}>{active.origin.label}</text>
          {active.destinations.map((d, i) => (
            <g key={i}>
              <circle className="product-route-dot" cx={d.x} cy={d.y} r="5" />
              <text className="product-route-label" x={d.x + 10} y={d.y - 8}>{d.label}</text>
            </g>
          ))}
        </svg>
        <div className="product-route-stat-overlay">
          <span className="product-stat-value">{active.rangeStat}</span>
          <span className="product-stat-label">{active.rangeLabel}</span>
        </div>
      </div>
    </div>
  );
}
