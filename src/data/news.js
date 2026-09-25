import content from '../content/siteContent.json';
import { resolveImage } from '../content/images';

export const NEWS_CATEGORIES = [
  { id: 'press', label: { en: 'Press releases', de: 'Pressemitteilungen' } },
  { id: 'contract', label: { en: 'Contracts & awards', de: 'Aufträge & Vergaben' } },
  { id: 'results', label: { en: 'Corporate & results', de: 'Konzern & Ergebnisse' } },
  { id: 'technology', label: { en: 'Engineering & AI tech', de: 'Technik & KI' } },
];

/**
 * Newsroom releases. Edited from /admin — the source of truth is
 * src/content/siteContent.json, where `image` is an asset file name or a /uploads path.
 */
export const news = content.news.map((item) => ({ ...item, image: resolveImage(item.image) }));
