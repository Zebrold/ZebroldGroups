import { NEWS_CATEGORIES } from '../../data/news';

/**
 * Editable sections of siteContent.json.
 *
 * Field types:
 *   text / textarea / number / date / checkbox / select   single value
 *   i18n / i18nArea                                       { en, de } strings
 *   tags                                                  { en: [], de: [] }
 *   image                                                 asset name, /uploads path or URL
 *   pdf                                                   uploads a PDF, sets href + filename
 *   dateFill                                              helper: fills day/month from a date
 * `when(item)` hides a field unless it returns true.
 */

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_DE = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

const splitDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return { y, m: m - 1, d };
};

export const SECTIONS = [
  {
    key: 'events',
    title: 'Upcoming events',
    where: 'Home page → “Upcoming events”',
    hint: 'The featured event fills the large burgundy panel; the others appear as cards on the right, in this order.',
    itemLabel: (it) => it.name?.en || it.name?.de || 'Untitled event',
    itemMeta: (it) => [it.featured ? `${it.days || ''} ${it.month?.en || ''}` : `${it.day || ''} ${it.month?.en || ''}`, it.featured && 'Featured'],
    blank: () => ({
      name: { en: '', de: '' },
      day: '',
      month: { en: '', de: '' },
      tags: { en: [], de: [] },
    }),
    single: ['featured'],
    fields: [
      { key: 'featured', type: 'checkbox', label: 'Featured event (large panel)' },
      { key: 'name', type: 'i18n', label: 'Event name', required: true },
      {
        type: 'dateFill',
        label: 'Fill date from calendar',
        apply: (item, iso) => {
          const { y, m, d } = splitDate(iso);
          const month = { en: `${MONTHS_EN[m]} ${y}`, de: `${MONTHS_DE[m]} ${y}` };
          return item.featured ? { ...item, month } : { ...item, day: String(d), month };
        },
      },
      { key: 'days', type: 'text', label: 'Days', placeholder: '22-25', when: (it) => it.featured },
      { key: 'day', type: 'text', label: 'Day', placeholder: '11', when: (it) => !it.featured },
      { key: 'month', type: 'i18n', label: 'Month & year', placeholder: 'Sep 2026' },
      { key: 'location', type: 'i18nArea', rows: 2, label: 'Location', placeholder: 'Berlin,\nGermany', when: (it) => it.featured },
      { key: 'summary', type: 'i18nArea', label: 'Summary', when: (it) => it.featured },
      { key: 'duration', type: 'i18n', label: 'Duration (optional)', placeholder: '4 days', when: (it) => !it.featured },
      { key: 'tags', type: 'tags', label: 'Tags (comma separated)', placeholder: 'Berlin, Germany, Conference', when: (it) => !it.featured },
      { key: 'highlight', type: 'checkbox', label: 'Highlight card (pink background)', when: (it) => !it.featured },
    ],
  },
  {
    key: 'news',
    title: 'Recent dispatches',
    where: 'Newsroom → “Recent dispatches & press bulletins” (and the Home highlights grid)',
    hint: 'The Newsroom sorts by date. The Home page highlights grid uses the first eight items in this order.',
    itemLabel: (it) => it.title?.en || it.title?.de || 'Untitled dispatch',
    itemMeta: (it) => [it.date, NEWS_CATEGORIES.find((c) => c.id === it.category)?.label.en, it.featured && 'Lead story'],
    thumb: (it) => it.image,
    blank: () => ({
      id: '',
      date: new Date().toISOString().slice(0, 10),
      category: 'press',
      region: { en: '', de: '' },
      source: { en: '', de: '' },
      image: '',
      alt: { en: '', de: '' },
      title: { en: '', de: '' },
      excerpt: { en: '', de: '' },
      body: { en: '', de: '' },
    }),
    single: ['featured'],
    fields: [
      { key: 'featured', type: 'checkbox', label: 'Lead story (top of the Newsroom)' },
      { key: 'title', type: 'i18nArea', rows: 2, label: 'Headline', required: true },
      { key: 'date', type: 'date', label: 'Publication date', required: true },
      {
        key: 'category',
        type: 'select',
        label: 'Category',
        options: NEWS_CATEGORIES.map((c) => ({ value: c.id, label: c.label.en })),
      },
      { key: 'region', type: 'i18n', label: 'Region / place', placeholder: 'Munich technology centre' },
      { key: 'source', type: 'i18n', label: 'Source / department', placeholder: 'Propulsion & energy' },
      { key: 'image', type: 'image', label: 'Image' },
      { key: 'alt', type: 'i18n', label: 'Image description (for screen readers)' },
      { key: 'excerpt', type: 'i18nArea', rows: 3, label: 'Short summary (shown on the card)' },
      { key: 'body', type: 'i18nArea', rows: 8, label: 'Full text — leave a blank line between paragraphs' },
      { key: 'id', type: 'text', label: 'URL id', placeholder: 'created from the headline', mono: true, help: 'Page address: /newsroom/<id>. Changing it breaks existing links.' },
    ],
  },
  {
    key: 'documents',
    title: 'Financial reports',
    where: 'Newsroom → “Financial reports & filings”',
    itemLabel: (it) => it.title?.en || it.title?.de || 'Untitled report',
    itemMeta: (it) => [it.filename || 'No PDF yet'],
    blank: () => ({ title: { en: '', de: '' }, meta: { en: '', de: '' }, href: '', filename: '' }),
    fields: [
      { key: 'title', type: 'i18n', label: 'Title', required: true, placeholder: 'Q3 2026 interim statement' },
      { key: 'meta', type: 'i18n', label: 'Details line', placeholder: 'Published 12 Aug 2026 · PDF (2.4 MB)' },
      { key: 'href', type: 'pdf', label: 'PDF file' },
    ],
  },
  {
    key: 'calendar',
    title: 'Financial calendar',
    where: 'Newsroom → “Financial calendar”',
    itemLabel: (it) => it.title?.en || it.title?.de || 'Untitled date',
    itemMeta: (it) => [`${it.day || ''} ${it.month?.en || ''}`],
    blank: () => ({ month: { en: '', de: '' }, day: '', title: { en: '', de: '' }, detail: { en: '', de: '' } }),
    settings: [{ key: 'calendarPeriod', label: 'Period label (top-right chip)', placeholder: '2026 / 2027' }],
    fields: [
      { key: 'title', type: 'i18n', label: 'Title', required: true, placeholder: 'Capital Markets Day 2026' },
      {
        type: 'dateFill',
        label: 'Fill date from calendar',
        apply: (item, iso) => {
          const { m, d } = splitDate(iso);
          return { ...item, day: String(d), month: { en: MONTHS_EN[m], de: MONTHS_DE[m] } };
        },
      },
      { key: 'day', type: 'text', label: 'Day', placeholder: '28' },
      { key: 'month', type: 'i18n', label: 'Month', placeholder: 'Oct' },
      { key: 'detail', type: 'i18n', label: 'Details', placeholder: 'Frankfurt am Main · in person & live webcast' },
    ],
  },
  {
    key: 'metrics',
    title: 'Key figures',
    where: 'Newsroom → “Revenue portfolio & commercial performance” cards',
    itemLabel: (it) => it.label?.en || 'Untitled figure',
    itemMeta: (it) => [it.value],
    blank: () => ({ label: { en: '', de: '' }, value: '', delta: { en: '', de: '' }, note: { en: '', de: '' } }),
    fields: [
      { key: 'label', type: 'i18n', label: 'Label', required: true },
      { key: 'value', type: 'text', label: 'Value', placeholder: '€4.85bn' },
      { key: 'delta', type: 'i18n', label: 'Change (green badge)', placeholder: '+24% YoY', help: 'Leave empty to show the period instead.' },
      { key: 'period', type: 'i18n', label: 'Period', placeholder: 'FY 2025/26' },
      { key: 'note', type: 'i18nArea', rows: 2, label: 'Note' },
    ],
  },
  {
    key: 'segments',
    title: 'Revenue by segment',
    where: 'Newsroom → “Revenue breakdown by segment”',
    itemLabel: (it) => it.label?.en || 'Untitled segment',
    itemMeta: (it) => [`${it.pct ?? 0}%`, it.value],
    blank: () => ({ label: { en: '', de: '' }, pct: 0, value: '' }),
    fields: [
      { key: 'label', type: 'i18n', label: 'Segment', required: true },
      { key: 'pct', type: 'number', label: 'Share (%)', min: 0, max: 100 },
      { key: 'value', type: 'text', label: 'Amount', placeholder: '€729m' },
    ],
  },
  {
    key: 'regions',
    title: 'Regional revenue',
    where: 'Newsroom → “Regional revenue allocation”',
    itemLabel: (it) => it.name?.en || 'Untitled region',
    itemMeta: (it) => [it.pct, it.value],
    blank: () => ({ name: { en: '', de: '' }, detail: { en: '', de: '' }, pct: '', value: '' }),
    fields: [
      { key: 'name', type: 'i18n', label: 'Region', required: true },
      { key: 'detail', type: 'i18n', label: 'Countries / detail' },
      { key: 'pct', type: 'text', label: 'Share', placeholder: '52%' },
      { key: 'value', type: 'text', label: 'Amount', placeholder: '€842.4m' },
    ],
  },
];

export const slugify = (s) =>
  String(s || '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);

const isI18n = (t) => t === 'i18n' || t === 'i18nArea';

/**
 * Tidies content before saving: fills a missing language from the other, drops
 * optional bilingual fields left empty, and gives every item a stable id.
 * Returns { content, errors }.
 */
export function prepareForSave(content) {
  const out = { ...content };
  const errors = [];

  for (const section of SECTIONS) {
    const usedIds = new Set();
    out[section.key] = content[section.key].map((raw, index) => {
      const item = { ...raw };

      for (const field of section.fields) {
        if (!field.key) continue;
        const visible = !field.when || field.when(item);

        if (isI18n(field.type)) {
          const v = item[field.key] || {};
          const en = (v.en || '').trim();
          const de = (v.de || '').trim();
          if (!en && !de) {
            if (field.required && visible) errors.push(`${section.title} #${index + 1}: “${field.label}” is required.`);
            // Optional bilingual fields are omitted rather than saved empty.
            if (!field.required && ['delta', 'period', 'duration', 'summary'].includes(field.key)) delete item[field.key];
            else item[field.key] = { en: '', de: '' };
          } else {
            item[field.key] = { en: en || de, de: de || en };
          }
        } else if (field.type === 'tags') {
          const v = item.tags || {};
          const en = v.en || [];
          const de = v.de || [];
          item.tags = { en: en.length ? en : de, de: de.length ? de : en };
        } else if (field.type === 'number') {
          item[field.key] = Number(item[field.key]) || 0;
        } else if (field.type === 'checkbox' && !item[field.key]) {
          delete item[field.key];
        }
      }

      if (section.key === 'news') {
        item.id = slugify(item.id) || slugify(item.title?.en) || `dispatch-${index + 1}`;
        if (!item.date) errors.push(`${section.title} #${index + 1}: “Publication date” is required.`);
      } else if (!item.id) {
        item.id = `${slugify(section.itemLabel(item)) || section.key}`;
      }

      let id = item.id;
      for (let n = 2; usedIds.has(id); n++) id = `${item.id}-${n}`;
      item.id = id;
      usedIds.add(id);
      return item;
    });
  }

  return { content: out, errors };
}
