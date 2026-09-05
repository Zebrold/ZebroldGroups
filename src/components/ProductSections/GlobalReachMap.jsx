import { useMemo, useState } from 'react';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldTopology from 'world-atlas/countries-110m.json';

/**
 * Single unified world map — every location shown together as a point, no
 * connecting lines and no per-city tabs. The design language (equirectangular
 * world outline, dot markers, hover emphasis) is adapted from the Offices
 * page map, recolored to the brown/charcoal palette with no cards grid, so
 * the map itself stays the whole visual. Shared across product pages (first
 * built for A321XLR, reused as-is for 777X) so every page's "all locations
 * on one map" section looks and behaves identically.
 */
const WIDTH = 980;
const HEIGHT = 460;

const projection = geoEquirectangular().fitSize(
  [WIDTH, HEIGHT],
  feature(worldTopology, worldTopology.objects.countries)
);
const pathGenerator = geoPath(projection);
const countryFeatures = feature(worldTopology, worldTopology.objects.countries).features;

export default function GlobalReachMap({ locations }) {
  const [hovered, setHovered] = useState(null);

  const points = useMemo(
    () => locations.map((loc) => ({ ...loc, pos: projection([loc.lng, loc.lat]) })),
    [locations]
  );

  return (
    <div className="product-global-map">
      <svg
        className="product-global-map-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="World map showing every listed location"
      >
        <rect className="product-global-map-ocean" x="0" y="0" width={WIDTH} height={HEIGHT} />
        {countryFeatures.map((f, i) => (
          <path key={f.id ?? i} className="product-global-map-land" d={pathGenerator(f)} />
        ))}
        {points.map((loc) => {
          if (!loc.pos) return null;
          const [x, y] = loc.pos;
          const isActive = hovered === loc.label;
          return (
            <g
              key={loc.label}
              transform={`translate(${x}, ${y})`}
              className="product-global-map-marker-group"
              onMouseEnter={() => setHovered(loc.label)}
              onMouseLeave={() => setHovered((prev) => (prev === loc.label ? null : prev))}
              onFocus={() => setHovered(loc.label)}
              onBlur={() => setHovered((prev) => (prev === loc.label ? null : prev))}
              tabIndex={0}
              role="img"
              aria-label={loc.label}
            >
              <circle className={`product-global-map-marker-halo ${isActive ? 'is-active' : ''}`} r={isActive ? 8 : 5.5} />
              <circle className="product-global-map-marker-core" r="2.25" />
              <text className={`product-global-map-marker-label ${isActive ? 'is-active' : ''}`} x="9" y="4">
                {loc.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
