# Design system — Zebrold IHL

Dark-burgundy rail portal. Editorial rather than corporate: serif headlines, generous white
space, and technical detail set in mono so specifications read as evidence rather than
decoration. Tokens live in `src/styles/tokens.css`; shared primitives in `src/styles/base.css`.

## 1. Atmosphere

White page, burgundy punctuation. Full-bleed dark bands (hero, mandate, commitments, footer)
break a predominantly white document, so colour marks structure instead of filling space.
Photography is dark, industrial and close-up — machinery mid-process, not staged product shots.

- **Density:** editorial (4/10) — `--section-py` of `clamp(4rem, 7vw, 7rem)`
- **Motion:** restrained (3/10) — fades and 24px rises only; no parallax, no scroll-jacking
- **Contrast:** high — near-black burgundy against white, coral used sparingly for emphasis

## 2. Palette

| Token | Value | Role |
|---|---|---|
| `--burgundy-950` | `#1a0507` | Footer, overlay base |
| `--burgundy-900` | `#24070a` | Hero and page-hero ground |
| `--burgundy-850` | `#28090d` | Buttons, mandate band, primary ink on light |
| `--burgundy-800` | `#300a0e` | Event arch, raised dark cards |
| `--coral-500` | `#f24838` | Accent: rules, focus ring, active marks |
| `--coral-400/300/200` | `#fe7c74` / `#ffb3ad` / `#ffdad7` | Eyebrows and body text on dark |
| `--paper` / `--stone` | `#ffffff` / `#f9f8f6` | Page and inset surfaces |
| `--ink` / `--ink-soft` / `--muted` | `#1c1c1e` / `#3a3a3c` / `#636366` | Text on light |
| `--rule` / `--rule-dark` | `#e5e5ea` / `rgba(255,255,255,.16)` | Hairlines |

Coral is an accent, never a background. On dark surfaces body text is
`rgba(255,255,255,.78–.86)` rather than pure white.

## 3. Typography

Three faces, three jobs — never interchange them.

- **Newsreader** `--font-serif` — headlines, lede, editorial body. Weight 300–400. Italic
  (`<em>`) marks the second clause of a sector headline.
- **Inter** `--font-sans` — navigation, buttons, labels, card titles, long UI text.
- **JetBrains Mono** `--font-mono` — eyebrows, spec values, dates, division markers.
  Uppercase, `letter-spacing: 0.14–0.22em`.

Display sizes are fluid (`--text-hero` through `--text-2xl`); headlines carry
`letter-spacing: -0.02em` and `text-wrap: balance`.

## 4. Components

- **Navbar** — floating pill, `border-radius: 9999px`, translucent burgundy with
  `backdrop-filter: blur(14px)`, solidifying past 24px of scroll. Exactly three links; a
  coral underline slides in on hover and active. Collapses to a full-screen overlay at 860px.
- **HeroCarousel** — cross-fading slides on an 6s timer, paused on hover/focus and under
  reduced motion. Active slide's image creeps to `scale(1.07)` over 7s. Dual scrim (bottom-up
  plus left-in) keeps the text column legible. Inactive slides carry `inert`.
- **PageHero** — the masthead every route but the homepage uses. Clears the fixed navbar via
  `padding-top: calc(var(--navbar-h) + …)`. Optional photographic backdrop with scrim.
- **SectorPage** — the editorial template: masthead with a mono spec bar, full-bleed showcase
  with overlaid stats, burgundy mandate band, then alternating platform rows. Media keeps the
  wider grid column on both sides of the alternation.
- **Event arch** — `border-radius: 0 220px 220px 0`, bled off the left viewport edge by a
  negative margin, topped with the coral gradient capsule (`.coral-pill`).
- **Society capsule** — near-pill container, circular portrait, oversized serif statement.

## 5. Layout

`.shell` (1280px), `.shell-wide` (1440px) and `.shell-narrow` (840px) set width; `--gutter`
is `clamp(1.25rem, 4vw, 3rem)`. Editorial grids run `5fr 7fr` so the text column sits near
60–70 characters. Breakpoints collapse to one column at 960px, cards at 720px.

## 6. Motion

`.reveal` + `data-delay="1..8"` inside a `useScrollReveal()` container fades and lifts an
element 24px on entry, once. `.card-lift` raises 4px on hover; `.zoom-frame` scales a
contained image to 1.04. Every rule has a `prefers-reduced-motion` escape, and the carousel
stops auto-advancing entirely under it.
