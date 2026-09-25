const LOCALES = { en: 'en-GB', de: 'de-DE' };

/** "2026-09-11" → "11 Sep 2026" (en) / "11. Sep. 2026" (de) */
export function formatDate(iso, lang = 'de') {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;

  return new Intl.DateTimeFormat(LOCALES[lang] ?? LOCALES.de, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

/** Sort helper — newest release first. */
export function byDateDesc(a, b) {
  return b.date.localeCompare(a.date);
}
