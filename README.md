# Zebrold IHL — corporate site

Marketing site for **Zebrold IHL**, the rolling stock business of Zebrold International
Holdings Limited (Zebrold IHL), Frankfurt am Main. Vite + React 19, plain CSS, no UI framework.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
npm run lint
```

## Pages

The site is deliberately small — eleven routes, and the header carries only three links.

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Five-slide hero carousel, solutions rail, highlights, events |
| `/about` | About Us | Narrative, animated stats, the two engineering sites, commitments |
| `/newsroom` | Newsroom | Filterable releases, bodies expand inline (no detail route) |
| `/careers` | Careers | Search + filters, application dialog |
| `/contact` | Contact | Contact form and the three mailboxes |
| `/aerospace` | Aerospace | Editorial sector page |
| `/automotive` | Automotive | Editorial sector page |
| `/insights` | Insights | Long-form technical pieces |
| `/faqs` | FAQs | Grouped accordion + `FAQPage` JSON-LD |
| `/legal-notice` | Legal Notice | **Contains placeholders — see below** |
| `/privacy-policy` | Privacy Policy | **Contains placeholders — see below** |

Anything else renders the 404 page. `vercel.json` rewrites all paths to `index.html`, so
deep links work on direct load.

> **Before going live:** `/legal-notice` and `/privacy-policy` contain blocks marked with
> `.legal__todo` (a coral-bordered callout) listing the register data, managing directors,
> VAT ID and named processors that German law requires. These must be filled in with real
> values — they are intentionally not invented.

## Layout

```
src/
  components/     Navbar, Footer, HeroCarousel, PageHero, SectorPage, ArrowLink, SEO, Toast, LanguageSwitcher
  pages/          one folder per route, each with its own .css
  data/           all content lives here as { en, de } pairs
  context/        LanguageContext + translations (UI chrome only)
  hooks/          useScrollReveal, useCountUp
  services/       emailService (contact + application submission)
  styles/         tokens.css, base.css, animations.css, legal.css
  utils/          formatDate
```

**Content vs. chrome.** `src/context/translations.js` holds navigation, footer, form labels
and page headings. Everything long-form — news, insights, FAQs, jobs, sector copy — lives in
`src/data/*` as `{ en, de }` objects, so the file stays readable. Both languages are required;
the footer exposes a DE/EN switch and the choice persists in `localStorage`.

## Design system

Tokens are in `src/styles/tokens.css`. The palette is burgundy (`--burgundy-900` `#24070a`)
with a coral accent (`--coral-500` `#f24838`) on white. Three typefaces do distinct jobs:

- **Newsreader** (`--font-serif`) — headlines and editorial body copy
- **Inter** (`--font-sans`) — UI, navigation, labels
- **JetBrains Mono** (`--font-mono`) — technical specs, eyebrows, dates

Shared primitives live in `base.css`: `.shell` / `.shell-wide` / `.shell-narrow` for width,
`.eyebrow`, `.display`, `.title`, `.lede` for type, and `.btn`, `.chip`, `.arrow-link`,
`.section-head` for components. Prefer these over new one-off rules.

Scroll reveals are opt-in: add `.reveal` (plus `data-delay="1..8"`) to an element inside a
component that calls `useScrollReveal()`. All motion is disabled under
`prefers-reduced-motion`.

## Email

`src/services/emailService.js` posts the contact and application forms through EmailJS and
falls back to a local log when unconfigured. Set these to enable real delivery:

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_CONTACT
VITE_EMAILJS_PUBLIC_KEY
```

Per-mailbox overrides (`..._NOREPLY`, `..._TALENT`, `..._INFO`) are supported — see
`MAILBOX_CONFIG` in that file.

## Images

All imagery is imported from `src/assets/` so Vite fingerprints it; nothing is hotlinked.
Several PNGs are around 1 MB and would benefit from being converted to WebP/AVIF and
resized to their display dimensions. Unused assets from the previous site remain in
`src/assets/` but are not imported, so they are not bundled.

## Contact

Bockenheimer Landstrasse 17-19, 60325 Frankfurt am Main, Germany · info@zebrold.de
