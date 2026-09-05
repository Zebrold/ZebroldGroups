const NODES = [
  { x: 500, y: 250, hub: true },
  { x: 210, y: 130 },
  { x: 330, y: 340 },
  { x: 620, y: 90 },
  { x: 760, y: 210 },
  { x: 700, y: 380 },
  { x: 440, y: 420 },
  { x: 160, y: 300 },
  { x: 850, y: 340 },
];

/**
 * Ambient animated airspace network — schematic nodes and connecting paths,
 * not a literal map. Used behind the ATM hero and inline in content sections.
 * Purely decorative: aria-hidden, elegant rather than flashy.
 */
export default function NetworkVisualization({ variant = 'section' }) {
  const hub = NODES[0];
  const others = NODES.slice(1);

  return (
    <div className={`product-network product-network--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
        {others.map((n, i) => (
          <path
            key={i}
            className="product-network-line"
            d={`M ${hub.x} ${hub.y} Q ${(hub.x + n.x) / 2} ${(hub.y + n.y) / 2 - 40} ${n.x} ${n.y}`}
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
        {others.map((n, i) => (
          <circle key={i} className="product-network-node" cx={n.x} cy={n.y} r="3.5" />
        ))}
        <circle className="product-network-hub-ring" cx={hub.x} cy={hub.y} r="10" />
        <circle className="product-network-hub" cx={hub.x} cy={hub.y} r="6" />
      </svg>
    </div>
  );
}
