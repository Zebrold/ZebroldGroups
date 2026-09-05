const CHECKPOINTS = [
  { label: '0% Assembled (white)', value: 0 },
  { label: '20% Rotating', value: 0.2 },
  { label: '38% Rotation end', value: 0.38 },
  { label: '55% Exploding', value: 0.55 },
  { label: '64% ZEBROLD reveal', value: 0.64 },
  { label: '78% Theme transition', value: 0.78 },
  { label: '100% Final (dark)', value: 1 },
];

/** Dev-only scrubber for the exploded-assembly stages. Never rendered in production builds. */
export default function DebugPanel({ progress, isOverridden, onSetOverride, onClearOverride }) {
  return (
    <div className="sp-debug-panel">
      <div className="sp-debug-title">SP DEBUG · {(progress * 100).toFixed(1)}%</div>
      <div className="sp-debug-buttons">
        {CHECKPOINTS.map((cp) => (
          <button key={cp.label} type="button" onClick={() => onSetOverride(cp.value)}>
            {cp.label}
          </button>
        ))}
        <button type="button" className={isOverridden ? '' : 'is-live'} onClick={onClearOverride}>
          Live scroll
        </button>
      </div>
    </div>
  );
}
