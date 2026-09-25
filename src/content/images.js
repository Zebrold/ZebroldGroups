/**
 * Images referenced from siteContent.json.
 *
 * The admin stores an image either as a file name from src/assets/ ("traction_inverter.jpg"),
 * a path under public/ ("/uploads/foo.jpg") or a full URL. Asset names are resolved through
 * Vite so they stay fingerprinted.
 */
const ASSETS = import.meta.glob('../assets/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

export const imageLibrary = Object.entries(ASSETS)
  .map(([path, url]) => ({ name: path.split('/').pop(), url }))
  .sort((a, b) => a.name.localeCompare(b.name));

export function resolveImage(ref) {
  if (!ref) return '';
  if (ref.startsWith('/') || /^(https?:|data:|blob:)/.test(ref)) return ref;
  return ASSETS[`../assets/${ref}`] ?? '';
}
