import { useMemo, useState } from 'react';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldTopology from 'world-atlas/countries-110m.json';

/**
 * Single unified world map — same design language (equirectangular world
 * outline, dot markers, hover emphasis) used on the A321XLR page's own
 * GlobalReachMap, kept as a self-contained copy here so this page never
 * depends on another product page's file. Brown/charcoal palette only.
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
    <div className="a321-map">
      <svg
        className="a321-map-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="World map showing the 777X's global destinations"
      >
        <rect className="a321-map-ocean" x="0" y="0" width={WIDTH} height={HEIGHT} />
        {countryFeatures.map((f, i) => (
          <path key={f.id ?? i} className="a321-map-land" d={pathGenerator(f)} />
        ))}
        {points.map((loc) => {
          if (!loc.pos) return null;
          const [x, y] = loc.pos;
          const isActive = hovered === loc.label;
          return (
            <g
              key={loc.label}
              transform={`translate(${x}, ${y})`}
              className="a321-map-marker-group"
              onMouseEnter={() => setHovered(loc.label)}
              onMouseLeave={() => setHovered((prev) => (prev === loc.label ? null : prev))}
              onFocus={() => setHovered(loc.label)}
              onBlur={() => setHovered((prev) => (prev === loc.label ? null : prev))}
              tabIndex={0}
              role="img"
              aria-label={loc.label}
            >
              <circle className={`a321-map-marker-halo ${isActive ? 'is-active' : ''}`} r={isActive ? 8 : 5.5} />
              <circle className="a321-map-marker-core" r="2.25" />
              <text className={`a321-map-marker-label ${isActive ? 'is-active' : ''}`} x="9" y="4">
                {loc.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
