/**
 * Line icons for the Products menu, keyed by the ids in src/data/solutions.js.
 * Inline SVG so the menu costs no extra request and inherits currentColor.
 */
const PATHS = {
  'rolling-stock': (
    <>
      <rect x="4" y="3" width="16" height="13" rx="3" />
      <path d="M4 10h16" />
      <path d="M9 16 6.5 21M15 16l2.5 5" />
      <path d="M10.5 13h3" />
    </>
  ),
  signalling: (
    <>
      <path d="M6 21V4" />
      <rect x="9" y="4" width="9" height="10" rx="2" />
      <circle cx="13.5" cy="7.5" r="1.2" />
      <circle cx="13.5" cy="11" r="1.2" />
      <path d="M3.5 21h5" />
    </>
  ),
  components: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M19.1 4.9l-2.2 2.2M7.1 16.9l-2.2 2.2" />
    </>
  ),
  infrastructure: (
    <>
      <path d="M3 19h18" />
      <path d="M3 15h18" />
      <path d="M7 15V5M17 15V5" />
      <path d="M7 8h10" />
      <path d="M6 19l1.5 2M18 19l-1.5 2" />
    </>
  ),
  'digital-rail': (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 12l2.5-2.5L12 12l3-3.5 2 2" />
    </>
  ),
  services: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0 5 5L15 16l-3 3a2.1 2.1 0 0 1-3-3l3-3z" />
      <path d="M6 6l3 3" />
      <path d="M3.5 3.5 6 6 3.5 8.5" />
    </>
  ),
};

export default function ProductIcon({ id, className = '' }) {
  const shape = PATHS[id];
  if (!shape) return null;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  );
}
