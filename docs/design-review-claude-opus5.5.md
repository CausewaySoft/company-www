# CausewaySoft: Design Review and Art Direction

**Reviewer:** Claude Opus 5.5, acting as creative director
**Date:** 2026-11-15
**Scope:** `http://localhost:4322/` (Home) and `http://localhost:4322/services/websites` (Websites service page)
**Method:** I looked at both pages in a real browser at 1440×900 and at 375×812 (mobile). I took a screenshot of every section. I also measured the live styles with DevTools and read the Astro source (`CustomStyles.astro`, `Hero.astro`, `index.astro`, `services/websites.astro`, `BasicScripts.astro`).

---

## The original brief (verbatim)

> Take screenshots of this astrojs website (running on: http://localhost:4322/) or use mcp dev tools (choose the best tool for the job).
>
> You are an internationally recognised creative director and digital art director specialising in premium independent brands.
>
> You have exceptionally high standards for visual design, typography, composition, brand identity and digital craftsmanship.
>
> You are not a website-template generator. You do not default to familiar SaaS layouts, generic landing-page patterns, predictable card grids or fashionable AI-generated design aesthetics.
>
> Your responsibility is to establish a distinctive visual identity for this website and translate it into an exceptional digital experience.
>
> Think like an art director first, a brand strategist second and a frontend engineer third.
>
> Every design decision must have a purpose. Typography, proportions, spacing, colour, imagery, composition and interactions must work together to communicate a coherent brand identity.
>
> Focus on two websites only: http://localhost:4322/ and http://localhost:4322/services/websites
>
> Output your suggestions to /docs/design-review-claude-opus5.5.md and include this entire prompt that i typed.

---

## 1. Verdict

The copy is honest and good. The positioning is right for a senior, founder-led studio: "Senior engineering. Direct collaboration. No unnecessary layers." The visual layer does not live up to it. Right now the site reads as an **AstroWind template in dark mode with a starfield**, and nothing about it could only belong to CausewaySoft:

- **Typography:** one typeface (Inter), one weight for headings (700, tracking −3px), and every heading centred. Inter is the default voice of the SaaS internet.
- **Colour:** near-black navy (`rgb(3 6 32)`) with Tailwind slate surfaces, plus one amber (`#d97706`) used only for small eyebrow labels. The amber never gets used for anything that matters.
- **Composition:** every section follows the same pattern: centred H2, centred grey subtitle, then a 3- or 4-column icon grid or an "image left, checklist right" split. The Home page uses that split three times and the Websites page uses it four times. Because the rhythm never changes, the eye has nothing to hold on to.
- **Imagery:** there are three unrelated visual languages: (a) a CSS starfield that comes from the repo name ("extraterrestrial escape"), (b) moody black-and-white Giant's Causeway photographs, and (c) desaturated generic stock (a stressed woman at a laptop, a businessman on the phone, a magnifying glass on a chart). Only (b) is ownable.
- **Iconography:** small outline icons in circles, Tabler-style, on every feature row. They add noise and carry no meaning.

The single biggest asset the brand is ignoring is its **name**. The Giant's Causeway is one of the most recognisable geological forms in the world: about 40,000 interlocking basalt columns, mostly hexagonal, formed by slow cooling and cracking. It already holds the whole brand story: **precise engineering, modular systems, built to last, from Northern Ireland, at giant scale**. The tagline "Giant apps for giant visionaries" already points at Finn McCool. The visuals just never follow through.

---

## 2. Brand concept: "Basalt"

> **CausewaySoft builds digital products the way the Causeway was built: from precise, interlocking modules that hold under pressure and last.**

Every decision below follows from that idea:

| Brand attribute | Causeway metaphor | Visual translation |
|---|---|---|
| Engineering precision | Near-regular hexagonal columns | A strict modular grid, measured spacing, technical metadata set in mono |
| Systems, not pages | Columns interlock into one surface | Sections that visibly connect: shared rules, continuous lines, numbered modules |
| Longevity | 60 million years old | Restraint: few colours, no trend effects, slow and deliberate motion |
| Northern Irish, independent | A specific place on the Antrim coast | Real local photography, coordinates, place names, a sea-and-stone palette |
| "Giant" ambition | Finn McCool's stepping stones | Oversized display type and confident scale contrast |

What to **drop**: the starfield, the rocket emoji (🚀/🔗) next to CTAs, the 🌊 emoji in the closing CTA, stock photography of people, and gradient or glass "AI" aesthetics. Space imagery says "startup cliché". The coast says "us".

---

## 3. Visual identity system

### 3.1 Colour: stone, sea, signal

Replace the navy-and-slate palette with colours taken from the place itself. Dark mode stays the hero mode, because basalt is dark, but it should be warm-neutral, not blue.

```css
:root {
  /* Stone: basalt neutrals, slightly warm, never blue-black */
  --basalt-950: #0E0F10;  /* page background (dark) */
  --basalt-900: #16181A;  /* raised surface */
  --basalt-800: #23262A;  /* rules, borders */
  --basalt-500: #6B6F72;  /* muted text */
  --basalt-200: #CFCBC4;  /* body text on dark */
  --limestone-50: #F3F0EA; /* page background (light), headings on dark */

  /* Sea: used sparingly for links, focus and data */
  --atlantic-600: #2F5D62;
  --atlantic-400: #5E8C8F;

  /* Signal: the one loud colour. Lichen/marine-flare orange, not Tailwind amber */
  --signal-500: #E8622C;
}
```

Rules:
1. **Signal orange gets one job per viewport.** Use it for the primary CTA, the active step, or one key word. Do not use it on eyebrows, icons or decoration.
2. **No blue-tinted greys.** The current `slate-*` surfaces are what make the site feel like a template.
3. **Light mode is "limestone and ink", not white.** Use `#F3F0EA` with basalt text, which reads like a printed monograph.

### 3.2 Typography: engineered, with character

Inter is fine for UI text but has no point of view in headlines. Use a three-voice system:

| Role | Recommendation (free) | Premium alternative | Why |
|---|---|---|---|
| Display | **Archivo** (variable, width axis 62–125), set condensed and heavy for headlines | Söhne Breit / Schmal (Klim) | Tall, narrow, stacked letterforms echo basalt columns. The width axis lets one family carry display and text. |
| Text / UI | **Archivo** at normal width, or keep **Inter** for body only | Söhne | Continuity with the display face, highly legible. |
| Technical metadata | **IBM Plex Mono** | Söhne Mono | Step numbers, tech stacks, timings, prices and coordinates. This signals real engineers without saying so. |

Typesetting rules:
- **Left-align display type by default.** Centre-aligning everything is the clearest template tell on both pages. Keep centring only for the closing CTA.
- **Use a real scale with deliberate contrast.** For example 14 / 16 / 20 / 28 / 44 / 72 / 120 px. The home H1 is now 60px with a 60px line-height. Push it to 104–128px on desktop, condensed, line-height 0.92, tracking −0.02em (not −3px).
- **Use mono labels instead of amber eyebrows.** `01 — DISCOVER`, `PORTFOLIO / 03 PROJECTS`, `55.2408° N, 6.5116° W`.
- **Measure:** cap body copy at 60–68ch. Several subtitles now run to ~90ch across the full width.
- **Hanging punctuation and real typographic quotes.** The Websites page mixes “ ” and " ".

### 3.3 Grid and proportion: the column module

- Use a **12-column grid with a visible 1px rule system** (`--basalt-800`). Sections are separated by hairlines and numbers, not by empty space alone.
- Build **one signature shape**: a flat-topped hexagon or a vertical column profile. Use it **structurally, not decoratively**: as the image mask on the founder portrait, as the step markers in the process, as the favicon and logo container. The current logo already has a slanted-rectangle mark. Redraw it as a stylised column section so the mark and the system match.
- **Vary section rhythm on purpose.** Alternate full-bleed image sections, dense typographic sections and wide-margin editorial sections. Never place two image/checklist splits back to back.

### 3.4 Imagery: one photographer, one place

- **Commission (or shoot) one series** on the Antrim coast and in your real workspace: basalt textures, sea, fog, hands on keyboards, the founder at work. Keep the existing black-and-white treatment, which is the best decision on the site, but grade it consistently: lifted blacks and slightly warm.
- **Remove all generic stock** from the Websites page: the stressed woman, the laptop-in-café shot, the businessman on the phone and the magnifying-glass chart. Stock models signal "agency template" faster than anything else.
- **Show real work as the main imagery.** On the Websites page, the evidence that you build websites that win business is the websites themselves: device frames, before/after Lighthouse numbers, real enquiry metrics.
- **The founder portrait** is the strongest trust asset. Today it sits small and centred like a passport photo. Give it editorial scale: full-height, off-centre, with a mono caption.

### 3.5 Motion: slow geology, not fireworks

- **Motion must never hide content.** On first load at desktop width both heroes rendered **completely empty** for over two seconds. The Websites "process" section was also blank when scrolled to directly. The cause is `motion-safe:md:opacity-0 … intersect:animate-fade` on every block (`Hero.astro:39–80`). This is the most urgent issue in the review. It hurts first impressions and LCP, and puts SEO at risk. Hero content should paint at full opacity. Keep reveal animation for content below the fold, and fade in from opacity 0.001 → 1 only after JS confirms the observer is running. Also note the typo `intercept-no-queue` at `Hero.astro:80`.
- **One signature interaction:** a "column rise". As a section enters, its hairline rule draws left to right and a group of column bars rises a few pixels, staggered by 40ms. Use 600–900ms with an `cubic-bezier(.2,.7,.2,1)` ease, and respect `prefers-reduced-motion`.
- **Remove the twinkling starfield.** It is decoration, it fights the photography, and the large `box-shadow` star list in `CustomStyles.astro` costs paint.

### 3.6 Voice details that are visual

- Use no emoji in headings or buttons (🌊, 🚀).
- Write CTA labels as verbs with clear outcomes: "Book a 30-minute call", "Get a free website audit", "See the work".
- Fix the typo "Developement" in the home `<title>`.

---

## 4. Home page (`/`): section-by-section direction

Current order: Hero → Note band → Portfolio → "Have an idea worth building?" → What we build → Process → "Built for your stage" → Why CausewaySoft → Founder → CTA → Footer.

Recommended order (tighter, about 6 sections):

**Hero → Selected work → What we build → How we work → The founder → Start a project**

The "Have an idea", "Built for your stage" and "Why CausewaySoft" sections all repeat the same reassurance. Fold their strongest lines into the remaining sections.

### 4.1 Hero
- **Now:** centred, 60px Inter Bold, amber eyebrow, two pill buttons, starfield. It could be any agency.
- **Direction:** a split, asymmetric composition. On the left (cols 1–7), a condensed display headline of 3–4 lines, left-aligned, at 112–128px:
  > **Software,**
  > **built like**
  > **the Causeway.**

  Below it is one sentence of supporting copy (the existing "High-performance websites, web applications, AI solutions and custom software…") and **one** primary CTA in signal orange, with a quiet text link next to it.
  On the right (cols 8–12), a tall black-and-white crop of basalt columns that bleeds off the top and right edge, with a mono caption: `GIANT'S CAUSEWAY · 55.24° N · BELFAST STUDIO`.
- Remove the "Launch faster. Grow stronger. Build legendary." band. It is a slogan wedged between hero and work, and it adds nothing.

### 4.2 Selected work (now "Recent work" cards)
- **Now:** three identical cards in a 3-up grid. Two of them show the **same** Causeway Renovations mockup, and "Founder portfolio" still contains **Lorem ipsum** ("Phasellus lacinia cursus velit…"). The "View project" links are low-contrast and hard to read.
- **Direction:** this is an editorial index, not a card grid. Each project gets a full-width row: large image (60%) and a text column (40%) with the project number in mono (`01 / BIBLEQUEST`), a one-line outcome, and stack/platform tags in mono as plain text, not pills. Alternate image left and right. Ship only real projects. Two strong case studies beat three where one is placeholder.

### 4.3 What we build
- **Now:** four icon columns.
- **Direction:** a typographic list with large condensed service names, one per row, each with a hairline rule. On hover the row reveals a one-line description and an arrow, and the rule fills with signal orange. This looks like an index in a monograph, not SaaS features. Drop the icons.

### 4.4 How we work (process)
- **Now:** a sticky step list next to a large photo. The panel on the right is mostly black space while you scroll.
- **Direction:** show the steps as **columns of rising height**, so the metaphor becomes literal: 01 Discover → 02 Define → 03 Design → 04 Build → 05 Launch → 06 Grow, each column a bit taller than the last. Use mono step numbers and a one-line description under each. On mobile, show them as a vertical stack with the rule on the left edge.

### 4.5 Founder
- **Now:** centred name, a small square portrait, centred paragraphs, then an icon grid of credentials. It reads like a CV.
- **Direction:** give the founder editorial scale. Use a large portrait (cols 1–6, full section height, hexagon or column-profile mask) and put on the right a pull quote in the display face ("I work directly with every client, from first idea to launch."). Below it, set the credentials as a mono spec sheet:
  ```
  EDUCATION      MEng Computer Science, Queen's University Belfast
  EXPERIENCE     7+ years, full-stack
  BASED          Belfast, Northern Ireland
  ```

### 4.6 Closing CTA
- **Now:** a bordered box with an emoji heading and a dark pill button.
- **Direction:** a full-bleed basalt photograph with heavy grain, one large line ("What are we building?") and one signal-orange button. This is the only place where centring is earned.

### 4.7 Footer
- The red "Coming Soon" badges in Resources look unfinished. Remove links to pages that don't exist yet.
- Show the studio's location as a line of mono coordinates. It's a quiet but memorable signature.

---

## 5. Websites page (`/services/websites`): section-by-section direction

This page has the strongest copy on the site ("Your website should win you business.") but it is buried under ~9,800px of repeated structure. It also renders the **"Why build with us?" section twice** (once as an image/checklist split and again as a 4-column grid; `websites.astro:455–470`). Delete one.

Recommended order:

**Hero → The diagnosis → What we do (three offers) → Proof (work and numbers) → Process → Pricing anchor and FAQs → Contact**

### 5.1 Hero
- **Now:** a left-aligned headline with a stock café-laptop photo on the right. This is the better of the two heroes. Its layout is a good base.
- **Direction:** keep the left-aligned headline at display scale. Replace the stock image with a **real site you built** in a device frame, captioned with measurable data in mono: `LCP 0.9s · LIGHTHOUSE 100 · +38% ENQUIRIES`. That turns the claim into evidence. Cut the subtitle to two sentences. The primary CTA "Get a Free Website Check" is strong, so give it signal orange.

### 5.2 "Is your website doing its job?" (diagnosis)
- **Now:** a stock photo of a stressed woman with a checklist of seven ✕ items.
- **Direction:** make it an **interactive self-audit**. Render the seven symptoms as large typographic statements in a two-column list. Let visitors tick the ones that apply, and show a mono counter ("4 / 7 — your site is losing enquiries") that sets the context for the CTA. It is memorable and on-brand (engineers measure things), and it qualifies leads. Remove the photo.

### 5.3 "We turn underperforming websites into business assets"
- **Now:** another image/checklist split (businessman on the phone) with five items.
- **Direction:** merge this into the diagnosis section as the "after" state. Each symptom pairs with its fix, shown as a **before → after** two-column table: `Slow to load → Under 1 second on mobile`. A clear table says more than a stock photo.

### 5.4 What we can do for your website (three offers)
- **Now:** three icon columns, each with tags and a small dark button. This is actually the commercial core of the page.
- **Direction:** promote it. Use three tall "column" panels of equal width, separated by hairlines. Each has a mono label (`OFFER 01 — FIX`), a short title, a "from £…" price anchor where honest (the FAQ already says "from £2,000"; bring that up here), the deliverables as a mono list, and one CTA. Highlight the middle offer with a signal-orange top rule.
- The "We're software engineers, not just website builders." band under it nearly disappears on the dark background. Give it a full-width display-type moment instead. It's the differentiator.

### 5.5 Websites built around your business (audiences)
- **Now:** a three-column icon grid that repeats the Home page's "Built for your stage".
- **Direction:** turn it into tabs or a segmented control (Local business / Startup / Growing company) that swaps a single example and outcome. Better still, cut it and let the work section show this through real clients.

### 5.6 Proof: new section, needed
The page asks for trust but shows no evidence. Add one section with the Causeway Renovations case: a screenshot, a three-number result strip in mono, and a client quote set large in the display face. One credible case study does more than any number of claims.

### 5.7 Process
- **Now:** six steps next to the same magnifying-glass stock image used in "Why build with us". The trophy-style "Achieve and Succeed!" final step is clichéd.
- **Direction:** reuse the Home page's "rising columns" process component, so the pages share one system. Remove the stock photo and the "Achieve and Succeed!" step.

### 5.8 FAQs
- **Now:** a two-column grid with all answers open. That's a lot of grey text.
- **Direction:** use a single-column accordion with large questions in the display face and answers at 60ch. Lead with price and timeline. Add an FAQ schema.

### 5.9 Contact
- **Now:** a form card next to four icon rows. The title "Let us build a Website for your Business" has stray capitalisation.
- **Direction:** a two-column layout. On the left, a large headline ("Tell us what your website should achieve.") and the founder's small portrait with "You'll speak to Mateusz directly". On the right, a minimal form with underline-only inputs, a mono label for each field, and a single signal-orange submit button.

### 5.10 Blog teaser
- The AI-generated cartoon illustrations (children and superheroes) clash with everything else. On a service page, either drop the teaser or show text-only article titles in a mono-numbered list.

---

## 6. Accessibility and craft issues found

| # | Issue | Where | Severity |
|---|---|---|---|
| 1 | Above-the-fold content renders invisible for about 2s+ (opacity-0 until IntersectionObserver fires) | Both heroes, Websites process section | **Critical** |
| 2 | Lorem ipsum in a live portfolio card | Home → "Founder portfolio" | **Critical** |
| 3 | Same screenshot used for two different projects | Home → Recent work | High |
| 4 | "Why build with us?" section rendered twice | Websites | High |
| 5 | Duplicate `id="services"` on two sections | `index.astro:393`, `index.astro:416` | Medium (anchors and a11y) |
| 6 | Low-contrast muted text (~66% alpha on near-black) for card links and footers | Global | Medium |
| 7 | "Developement" typo in the page `<title>` | Home | Medium |
| 8 | Class typo `intercept-no-queue` | `Hero.astro:80` | Low |
| 9 | Emoji in headings and buttons | CTA, buttons | Low (brand) |
| 10 | "Coming Soon" badges in the footer | Footer | Low (brand) |

---

## 7. Implementation roadmap

**Phase 0: Fix the basics (1 day)**
Fix issues 1–8 above. Make hero content paint immediately. Remove the placeholder project and the duplicate section.

**Phase 1: Identity foundations (3–5 days)**
- Swap tokens in `src/components/CustomStyles.astro` (`--aw-color-*`, `--aw-font-*`) for the Basalt palette and type system. Install `@fontsource-variable/archivo` and `@fontsource/ibm-plex-mono`.
- Set heading alignment to left by default in the shared `Headline` component.
- Remove the `#stars` starfield.
- Redraw the logo mark as a column section and generate the favicon from it.

**Phase 2: Signature components (1–2 weeks)**
- `WorkIndex.astro`: an editorial project rows component that replaces the card grid.
- `ServiceIndex.astro`: a typographic service list with hover rules.
- `ColumnSteps.astro`: the rising-columns process component, shared by both pages.
- `SpecSheet.astro`: mono key/value lists for credentials, deliverables and results.
- `SelfAudit.astro`: the interactive website checklist for the Websites page.

**Phase 3: Content and imagery (ongoing)**
- Do one photography session on the Antrim coast plus portraits in the studio.
- Write one real case study with numbers.
- Replace all stock photography.

---

## 8. One-line summary

**Stop dressing CausewaySoft as a space-themed SaaS template. The brand is named after 40,000 precisely engineered stone columns on the Northern Irish coast, so build the whole visual system from that: basalt and limestone, one signal colour, tall condensed type, mono engineering detail, real local photography and real work.**
