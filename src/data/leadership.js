import content from '../content/siteContent.json';
import { resolveImage } from '../content/images';

/**
 * People shown on /leadership (and the executive list teased on /about).
 * Edited from /admin — the source of truth is src/content/siteContent.json.
 *
 * An executive's `image` is an asset file name or a /uploads path; without one
 * the page shows their initials instead.
 */
export const EXECUTIVES = content.executives.map((person) => ({ ...person, image: resolveImage(person.image) }));

export const DOMAIN_LEADS = content.leads;
