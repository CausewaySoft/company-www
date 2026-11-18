# Basalt execution audit: creative improvement plan

**Reviewer:** Claude Opus 5.5, acting as senior creative art director
**Date:** 2026-11-18
**Follows:** `docs/design-review-claude-opus5.5.md` (the review that defined Basalt)
**Status:** Plan only. Nothing has been implemented yet.

## Scope and method

I opened Home, `/services/websites`, `/services`, `/contact` and `/blog` in the browser. I checked them at 1440×900, 768×1024 and 375×812, mostly in dark mode, and Home in light mode too. I measured type and layout with DevTools and read `basalt.css`, `HomeHero`, `SectionHead`, `ServiceIndex`, `ClosingCta` and `Founder`.

**Not checked:** `/services/web-applications`, the blog post pages, the legal pages and keyboard navigation.

---

## Executive summary

Basalt has been put in place properly. The tokens, the three-typeface system, the mono labels, the hairline rules and the left-aligned display type all show up consistently, and the site no longer looks like a template. What's left is mostly about **rhythm and hierarchy, not identity**:

1. Every section heading is the same size, so nothing on a page stands out above the rest.
2. One composition (a big heading on the left, a short text block on the right, then rows divided by hairlines) is used for almost every section. The repetition the earlier review flagged has come back in Basalt's own style.
3. The hero has three execution issues: the drawing is hardly seen, the main button's text is hard-coded white, and there's a large empty band before section 01.

None of this needs Basalt to be redesigned. It needs Basalt to be **varied and tuned**.

---

## What's working

- **The system is consistent.** Every page I opened uses the same tokens, mono labels, rules and display face. Contact and Blog feel as much part of the site as Home.
- **The process columns** (`ColumnSteps`, Home section 04): each step is a taller column than the last, which makes the Causeway idea literal and memorable. On tablet it collapses into a neat vertical list.
- **Display typography:** Archivo at 68–72% width, weight 760–800, line-height 0.88–0.92. It's confident and has its own character.
- **The self-audit on the Websites page** (the 0/7 checklist) and **the three offers** with prices and a highlighted middle offer. These are the strongest commercial parts of the site.
- **The founder section:** the slanted-top portrait, the 36px pull quote and the mono list of facts read like a magazine page.
- **Restraint:** no icons, no gradients, no rounded cards, and orange is mostly kept for one thing per screen.

---

## Key issues and recommendations

### Critical

#### C1. The hero button text is hard-coded white

- **Location:** Home → hero, "Start a project" (`src/components/home/HomeHero.astro:207`, `--mark-text: #fff`).
- **Observation:** In light mode, the main hero button's text is white on limestone (#f3f0ea). It's invisible until the highlighter stroke draws, and it was barely legible in my light-mode screenshot. Once the stroke is drawn, white on orange measures about **4.2:1** in light mode (#d4511c) and **3.4:1** in dark mode (#e8622c).
- **Problem:** Both ratios fail WCAG AA for text this size (13px × 1.4 scale = 18px, weight 500). Every other `.bs-btn` uses `--bs-signal-ink` (#0e0f10), which gives roughly 5–6:1. Without JavaScript, the label also has no visible button shape.
- **Recommendation:** Set `--mark-text: var(--bs-signal-ink)` and give the button a visible default state that doesn't depend on JavaScript, such as a 1px ink underline or the stroke already drawn. The stroke animation should add to the button, not make it work.
- **Expected outcome:** The main call to action is readable in both themes and passes AA.
- **Priority:** Critical

### High

#### H1. The heading scale is flat, so pages have no hierarchy

- **Location:** Every page, `SectionHead.astro` and `ClosingCta.astro`.
- **Observation:** Every H2 on every page measures **92px** at 1440px wide. The Websites page has 9 of them in a row. The H1 is 124px, so the headline is only 1.34× a section heading. On mobile it's 52px against 44px (1.18×). The closing CTA heading is **158px**, bigger than the H1.
- **Problem:** When every section shouts, none of them does. The page reads as nine equal posters instead of a story that builds.
- **Recommendation:** Add a second section-heading size to the Basalt scale and stop using the hero size for every section:
  - **Feature section heading** (one or two per page, e.g. Selected work, Who you'll work with): `clamp(44px, 6.4vw, 96px)`, as now.
  - **Standard section heading** (process, FAQ, why us, outcomes): `clamp(36px, 4.4vw, 64px)`, line-height 0.95.
  - **H1:** keep at 132px maximum, and raise the mobile minimum from 52px to about 58px so it clearly beats the H2.
  - **Closing CTA:** cap it at the H1 size (≤132px).
  - Add a `size="feature|standard"` prop to `SectionHead`.
- **Expected outcome:** A clear order of importance on each page, and the closing CTA no longer overpowers the hero.
- **Priority:** High

#### H2. Long headings break in odd places

- **Location:** Home 03 "Senior engineering. No unnecessary layers." and Websites 07 "Design with a job. Engineering behind it."
- **Observation:** Headings are limited to 7 columns (702px) at 92px with `text-wrap: balance`, which produces breaks like "Senior / engineering. No / unnecessary layers." and "Design with a / job. Engineering / behind it."
- **Problem:** Single words sit alone on lines, and lines break in the middle of a phrase, which makes the headings harder to read.
- **Recommendation:** Two-sentence headings get a deliberate break after the first full stop, using a `<br>` or a separate span per sentence (as the hero already does). Together with H1's smaller sizes, give standard headings 8 columns. The aim is two lines, each one complete sentence.
- **Expected outcome:** Headings read the way they're spoken.
- **Priority:** High

#### H3. The Websites page repeats one composition five times

- **Location:** `/services/websites`.
- **Observation:** The page is 13,343px tall with 10 sections. Diagnosis, Outcomes ("Get found / Get attention / Get enquiries…"), Kinds of website, Why us and FAQ all use the same layout: a number on the left, a big title, text in columns 9–12, and hairlines between rows. Outcomes and Kinds sit right next to each other and look almost identical.
- **Problem:** It's the same "rhythm never changes" problem the original review raised, now in Basalt's style. The offers grid, the most valuable part of the page, sits in the middle of it and looks like just another section.
- **Recommendation:**
  - **Merge Outcomes into Diagnosis** as the "after" column. This was the original plan (§5.3 of the earlier review): `takes too long to load → under 1s on mobile`. That removes about 1,700px.
  - **Turn "Why us" into a full-width statement:** one large display line plus a 2×2 grid of short paragraphs in mono and text, without the big heading-and-text opener.
  - **Bring the offers earlier**, directly after Diagnosis + Outcomes.
  - **Use a lighter opener on low-priority sections:** just the mono label and a standard-size heading, without the text block on the right.
- **Expected outcome:** A page about 25–30% shorter, with a real change of pace, so the commercial core gets noticed.
- **Priority:** High

#### H4. The hero drawing barely shows, and there's a dead band under it

- **Location:** Home → hero and the transition into section 01.
- **Observation:** At 1440×900 the charcoal Causeway drawing only shows in the bottom 15–20% of the first screen, mostly on the right. Scroll about 300px and it disappears behind the feathered top edge of the next section, leaving a solid black area of about 600px between the hero buttons and "01 — What we build". On mobile there's a similar but smaller gap of about 190px.
- **Problem:** The most distinctive and ownable image on the site is seen for one scroll gesture and then replaced by empty space. That makes the gap look accidental, not like breathing room.
- **Recommendation:** Choose one of these:
  - **(a)** Shorten the pinned area so section 01 starts about 160px below the buttons, and lower the feather to around 96px.
  - **(b)** Let the drawing take more of the first screen: make the hero `min-height: 100svh` and anchor the drawing to the bottom-right with about 45% of it visible, so the composition is type on the upper left and stone on the lower right.
  - I recommend **(b)**, because it carries out the composition described in the code's own comment ("Type and stone balance each other on the diagonal").
- **Expected outcome:** The signature image becomes the first thing people remember, and the empty band goes away.
- **Priority:** High

### Medium

#### M1. The same action, "Start a project", looks four different ways

- **Location:** Header, Home hero, closing CTA, Websites hero.
- **Observation:**
  - in the header, an outlined box
  - in the hero, a highlighter stroke with text scaled to 1.4×
  - in the closing CTA, a filled orange `.bs-btn`
  - on the Websites page, a filled button with different wording ("Start a website project")
- **Problem:** Visitors can't learn what "the primary action" looks like on this site.
- **Recommendation:** Keep the highlighter as the hero's one-off flourish, which is fine as a signature, but make sure its resting state matches the filled `.bs-btn`. Write down the rule in `basalt.css`: filled means the primary action, a mono underline means a secondary one, and the outline is used only in the header.
- **Expected outcome:** One recognisable primary action across the site.
- **Priority:** Medium

#### M2. The two portfolio images have different backgrounds

- **Location:** Home 02 and Websites "Built for a real business" (`WorkIndex`).
- **Observation:** Causeway Renovations sits on a cool grey-white background and BibleQuest on a warm cream one. Both are the brightest areas on the dark page, and they don't match each other.
- **Recommendation:** Put both mockups on the same background, `--bs-surface` (#17191b) in dark mode, or one shared limestone tone.
- **Expected outcome:** The work reads as a curated set.
- **Priority:** Medium

#### M3. The service rows' numbers don't line up with their titles

- **Location:** `ServiceIndex` (Home 01) and the Websites "Outcomes" rows.
- **Observation:** The "01" sits visually lower than the "Websites" baseline. The 12px mono number is matched against a 76px title, and its line box doesn't share the baseline.
- **Recommendation:** Align the number to the cap height of the title (`align-self: start; padding-top: ~0.35em` of the title size) instead of relying on grid baseline alignment.
- **Expected outcome:** A precise, engineered-looking index row.
- **Priority:** Medium

#### M4. The nav highlights the wrong section

- **Location:** `BasaltHeader` section tracking on Home.
- **Observation:** "01 Services" is highlighted while you're still in the hero. "03 About" stays highlighted through section 04, "How we work", which isn't in the nav.
- **Recommendation:** Only highlight once a section's heading has crossed about 40% of the viewport, and clear the highlight on sections that aren't in the nav.
- **Expected outcome:** The nav tells the truth about where you are.
- **Priority:** Medium

#### M5. The blog illustrations clash with the site

- **Location:** `/blog` list.
- **Observation:** The colourful AI-style cartoon illustrations (children, superheroes, a family room) sit next to charcoal and black-and-white photography. The earlier review raised this, and it's still unresolved.
- **Recommendation:** In the blog list, use either black-and-white, grain-treated versions (CSS `filter: grayscale(1) contrast(1.05)` as a quick fix), or a text-only list with mono dates.
- **Expected outcome:** The blog belongs to the same visual world.
- **Priority:** Medium

#### M6. The Websites hero still uses a stock photo

- **Location:** `/services/websites` hero.
- **Observation:** The hero image is a stock shot of a laptop in a café.
- **Recommendation:** Swap in the Causeway Renovations device shot, which is already in use further down the page, with a mono caption giving a real metric.
- **Expected outcome:** Evidence instead of decoration in the first screen.
- **Priority:** Medium

### Low

- **L1. Hero intro text (Home):** "Welcome to CausewaySoft!" after a blank line made with `<br><br>` reads like a placeholder. The services intro, "Precisely engineered and to create an experience", is ungrammatical. Hand these to the copy skill. The layout point is that the hero intro should be one block of 2 lines or fewer, at most 34em wide.
- **L2. Typed headline:** the final word is "Dreams..", with two dots. Use a real ellipsis (…) or a single full stop.
- **L3. Header meta:** "Belfast, NI." ends with a stray full stop, and "Giant apps for giant visionaries" appears in the hero meta and again as the footer headline. Keep it in the footer only.
- **L4. Founder section:** there's about 300px of empty space under the portrait and the facts list before section 04. Either cut the section's bottom padding or let the facts list run to the bottom of the portrait.

---

## Page-by-page order of sections

- **Home:** keep the current order. Fix C1, H1, H2, H4, M1, M3 and M4. This is the page closest to finished.
- **Websites:** Hero (real work) → Diagnosis with the Outcomes merged in → Offers → Work → Process → Why us (statement layout) → FAQ → CTA. Fix H3 and M6.
- **Services, Contact and Blog:** they're structurally sound. They'll benefit from the H1 heading scale, and Blog needs M5.

---

## Art direction: "the coast, edited"

- **Character:** a printed engineering monograph about a place. It should be calm, exact and confident, with one moment of drama per page, not on every section.
- **Typography:**
  - Three heading levels with clearly different sizes: 132, 96, 64, then a 32px step title.
  - Body text at 17px with line-height 1.55, at most 62ch wide.
  - Mono stays at 12–13px, but 11px should never be used.
- **Spacing:** two section rhythms.
  - **Loose** (144px top and bottom) for feature sections.
  - **Tight** (96px) for supporting sections.
  - Alternating between them gives the page a cadence.
- **Composition:** no more than two sections in a row with the same opener. Each page gets one full-width moment (the hero drawing, a statement line, or the process columns).
- **Distinctive details to push further:**
  - The slanted top edge already used on the portrait and the process columns could become the one signature shape: image masks, the active nav underline, the offer highlight.
  - The "Fig. 01" caption system could extend to every image (Fig. 02 for the work, Fig. 03 for the portrait). That's cheap to do and very on-brand.

---

## Proposed order of work

1. **Phase 1, fixes (about half a day):** C1, M3, M4, L1–L4.
2. **Phase 2, hierarchy (1 day):** H1 and H2, adding a heading size option to `SectionHead`, then a pass over every page.
3. **Phase 3, hero composition (1 day):** H4 option (b), plus M1 button rules.
4. **Phase 4, Websites page restructure (1–2 days):** H3 and M6.
5. **Phase 5, imagery (ongoing):** M2, M5, and the "Fig." caption system.
