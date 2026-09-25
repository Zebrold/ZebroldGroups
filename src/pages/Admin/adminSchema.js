/**
 * What /admin can edit.
 *
 * Every collection below is a key in src/content/siteContent.json, which is the
 * source of truth the public pages read from. The editor is generic: it renders
 * whatever these field specs describe, so adding a field here adds it to the UI.
 *
 * Field types are rendered by AdminFields.jsx:
 *   text | slug | date | number | bool | select   plain values
 *   i18n | i18nArea | i18nBody | i18nTags         { en, de } values
 *   image | pdf                                   uploads
 *
 * `when(item)` hides a field that does not apply to that record — the Home page
 * renders a featured event and a list event from different keys, for example.
 */

import { JOB_CATEGORIES } from '../../data/careersData';

/* The role categories are the filter pills on /careers, so they are read from
   the same place the page reads them rather than restated here. */
const JOB_CATEGORY_OPTIONS = JOB_CATEGORIES.map((c) => ({ value: c.id, label: c.label.en }));

const NEWS_CATEGORIES = [
  { value: 'press', label: 'Press releases' },
  { value: 'contract', label: 'Contracts & awards' },
  { value: 'results', label: 'Corporate & results' },
  { value: 'technology', label: 'Engineering & AI tech' },
];

const blankI18n = () => ({ en: '', de: '' });
const blankTags = () => ({ en: [], de: [] });

export const COLLECTIONS = [
  {
    id: 'events',
    label: 'Upcoming events',
    where: 'Home page — "Upcoming events"',
    noun: 'event',
    titleKey: 'name',
    help: 'The one event marked "Featured" fills the large arch panel. The rest become the list beside it.',
    fields: [
      { key: 'id', type: 'slug', label: 'Reference id', hint: 'Lower-case letters, numbers and hyphens.' },
      { key: 'featured', type: 'bool', label: 'Featured (large arch panel)', exclusive: true },
      { key: 'name', type: 'i18nArea', label: 'Event name' },
      { key: 'month', type: 'i18n', label: 'Month', hint: 'Shown in capitals, e.g. "Sep 2026".' },

      { key: 'days', type: 'text', label: 'Dates', hint: 'e.g. "22-25"', when: (it) => it.featured },
      { key: 'location', type: 'i18nArea', label: 'Location', hint: 'Line breaks are kept.', when: (it) => it.featured },
      { key: 'summary', type: 'i18nArea', label: 'Summary', when: (it) => it.featured },

      { key: 'day', type: 'text', label: 'Day', hint: 'e.g. "17"', when: (it) => !it.featured },
      { key: 'duration', type: 'i18n', label: 'Duration', hint: 'Optional, e.g. "4 days".', when: (it) => !it.featured },
      { key: 'tags', type: 'i18nTags', label: 'Tags', hint: 'One per line — shown as chips.', when: (it) => !it.featured },
      { key: 'highlight', type: 'bool', label: 'Highlight this row', when: (it) => !it.featured },
    ],
    // Every key is present from the start so that ticking "Featured" later
    // cannot leave the arch panel reading an undefined field.
    blank: () => ({
      id: '',
      name: blankI18n(),
      month: blankI18n(),
      day: '',
      duration: blankI18n(),
      tags: blankTags(),
      highlight: false,
      days: '',
      location: blankI18n(),
      summary: blankI18n(),
    }),
  },

  {
    id: 'news',
    label: 'Dispatches',
    where: 'Newsroom — "Recent dispatches", the Home news cards and each release page',
    noun: 'dispatch',
    titleKey: 'title',
    help: 'Each dispatch also gets its own page at /newsroom/<reference id>.',
    fields: [
      { key: 'id', type: 'slug', label: 'Reference id', hint: 'Becomes the page URL: /newsroom/<id>.' },
      { key: 'date', type: 'date', label: 'Date' },
      { key: 'category', type: 'select', label: 'Category', options: NEWS_CATEGORIES },
      { key: 'featured', type: 'bool', label: 'Lead story on the Newsroom', exclusive: true },
      { key: 'image', type: 'image', label: 'Photograph' },
      { key: 'alt', type: 'i18n', label: 'Image description', hint: 'Read aloud by screen readers.' },
      { key: 'title', type: 'i18nArea', label: 'Headline' },
      { key: 'excerpt', type: 'i18nArea', label: 'Standfirst', hint: 'The summary shown on cards.' },
      { key: 'body', type: 'i18nBody', label: 'Release body', hint: 'Leave a blank line between paragraphs.' },
      { key: 'region', type: 'i18n', label: 'Region' },
      { key: 'source', type: 'i18n', label: 'Bureau / source' },
      {
        key: 'tone',
        type: 'select',
        label: 'Home card style',
        options: [
          { value: '', label: 'Light' },
          { value: 'dark', label: 'Dark' },
        ],
      },
    ],
    blank: () => ({
      id: '',
      date: new Date().toISOString().slice(0, 10),
      category: 'press',
      region: blankI18n(),
      source: blankI18n(),
      image: '',
      alt: blankI18n(),
      title: blankI18n(),
      excerpt: blankI18n(),
      body: blankI18n(),
    }),
  },

  {
    id: 'jobs',
    label: 'Job openings',
    where: 'Careers page — the open roles list',
    noun: 'role',
    titleKey: 'title',
    help: 'The reference code is what the application form uses: /careers/apply?ref=<code>. Keep it unique.',
    fields: [
      { key: 'id', type: 'slug', label: 'Reference id', hint: 'Internal id — lower-case letters, numbers and hyphens.' },
      { key: 'ref', type: 'text', label: 'Reference code', hint: 'Shown to applicants, e.g. "ZEB-SW-201".' },
      { key: 'category', type: 'select', label: 'Category', options: JOB_CATEGORY_OPTIONS },
      { key: 'title', type: 'i18nArea', label: 'Job title' },
      { key: 'location', type: 'i18n', label: 'Location' },
      { key: 'terms', type: 'i18n', label: 'Terms', hint: 'e.g. "Full-time · Hybrid".' },
      { key: 'salary', type: 'text', label: 'Salary range', hint: 'e.g. "€65,000 – €92,000".' },
      { key: 'summary', type: 'i18nArea', label: 'Summary' },
      { key: 'requirements', type: 'i18nTags', label: 'Requirements', hint: 'One per line — each becomes a bullet.' },
    ],
    blank: () => ({
      id: '',
      ref: '',
      category: JOB_CATEGORY_OPTIONS[0]?.value ?? 'software',
      title: blankI18n(),
      location: blankI18n(),
      terms: blankI18n(),
      salary: '',
      summary: blankI18n(),
      requirements: blankTags(),
    }),
  },

  {
    id: 'documents',
    label: 'Financial reports',
    where: 'Newsroom — "Financial reports & filings"',
    noun: 'report',
    titleKey: 'title',
    help: 'Upload a PDF and it is stored with the site, then linked from this list.',
    fields: [
      { key: 'id', type: 'slug', label: 'Reference id' },
      { key: 'title', type: 'i18n', label: 'Report title' },
      { key: 'meta', type: 'i18n', label: 'Sub-line', hint: 'e.g. "Published 12 Aug 2026 · PDF (2.4 MB)".' },
      { key: 'href', type: 'pdf', label: 'PDF file' },
    ],
    blank: () => ({ id: '', title: blankI18n(), meta: blankI18n(), href: '', filename: '' }),
  },

  {
    id: 'calendar',
    label: 'Financial calendar',
    where: 'Newsroom — "Financial calendar"',
    noun: 'calendar entry',
    titleKey: 'title',
    fields: [
      { key: 'id', type: 'slug', label: 'Reference id' },
      { key: 'month', type: 'i18n', label: 'Month', hint: 'Shown in capitals, e.g. "Oct".' },
      { key: 'day', type: 'text', label: 'Day', hint: 'e.g. "28"' },
      { key: 'title', type: 'i18n', label: 'Title' },
      { key: 'detail', type: 'i18n', label: 'Detail line' },
    ],
    blank: () => ({ id: '', month: blankI18n(), day: '', title: blankI18n(), detail: blankI18n() }),
  },

  {
    id: 'metrics',
    label: 'Key figures',
    where: 'Newsroom — the four figures above the revenue portfolio',
    noun: 'figure',
    titleKey: 'label',
    fields: [
      { key: 'id', type: 'slug', label: 'Reference id' },
      { key: 'label', type: 'i18n', label: 'Label' },
      { key: 'value', type: 'text', label: 'Value', hint: 'e.g. "€4.85bn"' },
      { key: 'delta', type: 'i18n', label: 'Change', hint: 'Optional, e.g. "+24% YoY".' },
      { key: 'period', type: 'i18n', label: 'Period', hint: 'Optional, e.g. "FY 2025/26".' },
      { key: 'note', type: 'i18nArea', label: 'Note' },
    ],
    blank: () => ({ id: '', label: blankI18n(), value: '', delta: blankI18n(), note: blankI18n() }),
  },

  {
    id: 'segments',
    label: 'Revenue portfolio',
    where: 'Newsroom — the revenue split bars',
    noun: 'segment',
    titleKey: 'label',
    fields: [
      { key: 'id', type: 'slug', label: 'Reference id' },
      { key: 'label', type: 'i18n', label: 'Segment' },
      { key: 'pct', type: 'number', label: 'Share (%)', min: 0, max: 100, hint: 'Sets the bar width.' },
      { key: 'value', type: 'text', label: 'Value', hint: 'e.g. "€729m"' },
    ],
    blank: () => ({ id: '', label: blankI18n(), pct: 0, value: '' }),
  },

  {
    id: 'regions',
    label: 'Regional split',
    where: 'Newsroom — the regional breakdown',
    noun: 'region',
    titleKey: 'name',
    fields: [
      { key: 'id', type: 'slug', label: 'Reference id' },
      { key: 'name', type: 'i18n', label: 'Region' },
      { key: 'detail', type: 'i18n', label: 'Countries' },
      { key: 'pct', type: 'text', label: 'Share', hint: 'e.g. "52%"' },
      { key: 'value', type: 'text', label: 'Value', hint: 'e.g. "€842.4m"' },
    ],
    blank: () => ({ id: '', name: blankI18n(), detail: blankI18n(), pct: '', value: '' }),
  },
];

export const COLLECTION_BY_ID = Object.fromEntries(COLLECTIONS.map((c) => [c.id, c]));

/** The label shown on a collapsed row. */
export function rowTitle(collection, item) {
  const v = item[collection.titleKey];
  const text = (v && typeof v === 'object' ? v.en || v.de : v) || '';
  return text.trim() || `Untitled ${collection.noun}`;
}

/**
 * Mirrors the checks in api/_lib/admin.js so problems surface in the UI
 * instead of coming back as a 400 from the save.
 */
export function validate(content) {
  const problems = [];
  const add = (tab, message) => problems.push({ tab, message });

  const seen = new Map();
  content.news.forEach((item, i) => {
    const where = item.title?.en?.trim() || item.id || `dispatch ${i + 1}`;
    if (!/^[a-z0-9-]+$/.test(item.id || '')) {
      add('news', `“${where}” needs a reference id using only a-z, 0-9 and hyphens.`);
    } else if (seen.has(item.id)) {
      add('news', `Two dispatches share the reference id “${item.id}”.`);
    } else {
      seen.set(item.id, true);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(item.date || '')) add('news', `“${where}” needs a date.`);
  });

  if (content.events.filter((e) => e.featured).length > 1) {
    add('events', 'Only one event can be featured.');
  }

  // A role's reference code is the link the application form opens with,
  // so a missing or duplicated one sends applicants to the wrong place.
  const refs = new Map();
  (content.jobs ?? []).forEach((job, i) => {
    const where = job.title?.en?.trim() || job.id || `role ${i + 1}`;
    if (!job.ref?.trim()) {
      add('jobs', `“${where}” needs a reference code.`);
    } else if (refs.has(job.ref)) {
      add('jobs', `Two roles share the reference code “${job.ref}”.`);
    } else {
      refs.set(job.ref, true);
    }
    if (!job.id?.trim()) add('jobs', `“${where}” needs a reference id.`);
  });

  // Not enforced by the API, but these would render as an empty slot on the site.
  content.events.forEach((e, i) => {
    if (!e.id) add('events', `Event ${i + 1} needs a reference id.`);
    if (!e.featured && !(e.month?.en || '').trim()) {
      add('events', `“${rowTitle(COLLECTION_BY_ID.events, e)}” needs a month.`);
    }
  });

  return problems;
}
