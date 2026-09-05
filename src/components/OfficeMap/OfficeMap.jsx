import { useMemo, useRef, useState } from 'react';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldTopology from 'world-atlas/countries-110m.json';
import { useLanguage } from '../../context/LanguageContext';
import offices from '../../data/offices';
import './OfficeMap.css';

const WIDTH = 980;
const HEIGHT = 500;
const MIN_SCALE = 1;
const MAX_SCALE = 6;

const projection = geoEquirectangular().fitSize(
  [WIDTH, HEIGHT],
  feature(worldTopology, worldTopology.objects.countries)
);
const pathGenerator = geoPath(projection);
const countryFeatures = feature(worldTopology, worldTopology.objects.countries).features;

export default function OfficeMap() {
  const { lang } = useLanguage();
  const defaultOffice = useMemo(() => offices.find(o => o.id === 'frankfurt') || offices[0], []);
  const [selected, setSelected] = useState(defaultOffice);
  const [hovered, setHovered] = useState(null);
  const [scale, setScale] = useState(1);
  const svgRef = useRef(null);

  const points = useMemo(
    () => offices.map(o => ({ ...o, pos: projection([o.lng, o.lat]) })),
    []
  );

  const zoomBy = (factor) => {
    setScale(prev => Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev * factor)));
  };

  const toDisplay = ([x, y]) => [
    WIDTH / 2 + (x - WIDTH / 2) * scale,
    HEIGHT / 2 + (y - HEIGHT / 2) * scale,
  ];

  return (
    <div className="office-map-card">
      <div className="office-map-header">
        <h3 className="office-map-title">
          {lang === 'en' ? 'Locations' : 'Standorte'} ({offices.length})
        </h3>
        <p className="office-map-subtitle">
          {lang === 'en'
            ? 'Interact with the map to explore all locations'
            : 'Interagieren Sie mit der Karte, um alle Standorte zu erkunden'}
        </p>
      </div>
      <div className="office-map-divider" />

      <div className="office-map-canvas-wrap">
        <svg
          ref={svgRef}
          className="office-map-svg"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label="World map of Zebrold Group office locations"
        >
          <rect className="office-map-ocean" x="0" y="0" width={WIDTH} height={HEIGHT} />
          <g
            style={{
              transform: `scale(${scale})`,
              transformOrigin: `${WIDTH / 2}px ${HEIGHT / 2}px`,
            }}
          >
            {countryFeatures.map((f, i) => (
              <path key={f.id ?? i} className="office-map-land" d={pathGenerator(f)} />
            ))}

            {points.map((office) => {
              if (!office.pos) return null;
              const [x, y] = office.pos;
              const isHq = office.id === 'frankfurt';
              const isSelected = selected?.id === office.id;
              return (
                <g
                  key={office.id}
                  className="office-marker-group"
                  transform={`translate(${x}, ${y})`}
                  onMouseEnter={() => setHovered(office)}
                  onMouseLeave={() => setHovered(prev => (prev?.id === office.id ? null : prev))}
                  onClick={() => setSelected(office)}
                  tabIndex={0}
                  role="button"
                  aria-label={office.city}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(office); }
                  }}
                >
                  <circle
                    className={`office-marker-halo ${isHq ? 'is-hq' : ''} ${isSelected ? 'is-selected' : ''}`}
                    r={isHq ? 10 : 7.5}
                  />
                  <circle className="office-marker-core" r={isHq ? 4 : 3} />
                </g>
              );
            })}
          </g>
        </svg>

        {hovered && hovered.pos && (() => {
          const [dx, dy] = toDisplay(hovered.pos);
          return (
            <div
              className="office-map-tooltip"
              style={{
                left: `${(dx / WIDTH) * 100}%`,
                top: `${(dy / HEIGHT) * 100}%`,
              }}
            >
              {hovered.city}
              <span className="office-map-tooltip-arrow" />
            </div>
          );
        })()}

        <div className="office-map-zoom-controls">
          <button
            type="button"
            className="office-map-zoom-btn"
            aria-label="Zoom in"
            onClick={() => zoomBy(1.4)}
          >
            +
          </button>
          <button
            type="button"
            className="office-map-zoom-btn"
            aria-label="Zoom out"
            onClick={() => zoomBy(1 / 1.4)}
          >
            −
          </button>
        </div>
      </div>

      <div className="office-cards-grid">
        {offices.map((o) => (
          <div
            key={o.id}
            className={`office-card ${selected?.id === o.id ? 'is-active' : ''}`}
            onClick={() => setSelected(o)}
            tabIndex={0}
            role="button"
            aria-label={o.city}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(o); }
            }}
          >
            <div className="office-card-top">
              <svg className="office-card-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="office-card-city">{o.city}, {o.country}</span>
            </div>
            <p className="office-card-address">{o.address}</p>
            <span className="office-card-type">{o.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
