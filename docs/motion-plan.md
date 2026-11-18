# Motion plan

**Date:** 2026-11-18
**Branch:** `feature/motion` (cut from `develop` after PR #6 merged)
**Reviewer:** Claude Opus 5.5, as senior motion and interaction designer, working with Mateusz Cichy
**Follows:** `docs/design-audit-basalt-execution.md`, `docs/copy-content-audit.md`
**Status:** Proposal agreed in part; nothing built yet.

---

## 1. What moves today

| Where | Motion | Verdict |
|---|---|---|
| Home hero | Typed first word, caret, highlighter stroke, drawing rises on load | Keep: Mateusz's signature (he already shortened it on purpose) |
| Home hero → section 01 | Drawing stays pinned while sections slide over it | Keep: the strongest scroll moment |
| Section blocks (`data-reveal`) | Fade in and rise 16px over 0.8s, once, on headings, service rows, work items, the founder block, offers, process and the closing CTA | Works, but only when the visitor arrived from Home (see below), and it's applied to almost every block |
| Process columns | Grow from the ground, staggered | Good: the start of a motion language |
| Service rows | Orange line draws across, title and arrow shift on hover | Good |
| Buttons and links | Quick fill and underline changes, arrow nudge | Good |
| FAQ | Answers snap open | Static |
| Page changes | Browser's default cross-fade; the header fades out and in on every click | Generic |

**Reveals depend on the entry page.** The reveal script lives only in `index.astro`. Open `/services/websites` directly (from search or a shared link) and its blocks don't animate. Click there from Home and they do, because Home's script stays loaded on the client-side router. Content always shows; only the behaviour differs.

---

## 2. Principles

1. **Geological, not elastic.** Things rise, settle and draw. Nothing bounces or floats.
2. **Never a gate (a safety rule, not the strategy).** Motion must never stop people seeing content: not on slow phones, not without JavaScript, not with reduced motion, not for search engines.
3. **Few moves, each with a meaning.** Generic fade-up-on-scroll is the most common motion on the web, and award juries mark it down. Motion should express the stone idea, respond to the visitor, connect pages and be choreographed, with everything else still.
4. **Scrolling is the wind.** Scroll-linked motion follows the scroll position directly; it never takes over the scrollbar (no Lenis or similar).

---

## 3. Plan (in order)

1. **One shared reveal script** for every Basalt page, so the few remaining reveals behave the same however a visitor arrives.
2. **Reduced motion everywhere:** one global rule.
3. **Page transition, option A, basalt columns:** dark grained columns of uneven heights rise from the bottom, staggered, cover the page (about 250ms), the new page loads behind them, and they sink back (about 250ms). The header stays put (`transition:persist`). Same-page anchor links never trigger it. With reduced motion, the page swaps instantly.
4. **"Set in stone" headings:** each sentence line of a heading rises into place from its own line box, 80ms apart, after the section rule draws across. Not on the hero H1 or body text.
5. **The ground answers the scroll** (CSS scroll-linked animation where supported, static elsewhere):
   - The hero drawing drifts and darkens while pinned.
   - The footer wordmark rises to its final cut over the last screen.
   - Basalt sand step A: the grain drifts with the scroll.
6. **FAQ answers open smoothly** (`::details-content` / `interpolate-size`; snaps where unsupported).
7. **Column-shape image reveals** for the work images and the portrait.
8. **Timing tokens** (`--bs-dur-quick`, `--bs-dur-base`, `--bs-dur-draw`, `--bs-dur-rise`), done alongside the above. This is low priority: consistency and easy retuning, not a visible fix.

**Not doing:** scroll hijacking, custom cursors, magnetic buttons, scrolling text tickers, depth effects on text, animated body text, more hero motion.

---

## 4. Decisions and contributions (Mateusz)

1. **The self-audit counter:** he pointed out it already changes correctly, so it isn't a problem. He asked for the motion polish (a small "tick" on the number) to go on the motion backlog: `docs/backlog.md`.
2. **Page transition:** chose **option A, basalt columns**, over B (a hard cut with an orange line).
3. **Challenged the reveal principle:** "is an award-winning site using motion to reveal things, hiding as many things as possible?" The answer is no. That question led to principle 3 and to the proposal to cut generic fade-ups, still to be decided (section 5).
4. **Questioned the duration tokens** ("how is that a problem?"). They were downgraded to low priority, with the reasoning written down.
5. **Earlier motion he originated:** the typed, highlighted headline word and the highlighter CTA concept (credited in `docs/copy-content-audit.md`), and **Basalt sand**, the grain in motion (`docs/backlog.md`).

---

## 5. Open question

**Fewer reveals?** The proposal is to remove the fade-up from body blocks (service rows, work text, the founder block, offers and the closing CTA). Those would simply be there. The reveals would stay only where they carry the stone idea: headings "set in stone" and the rising process columns. Awaiting Mateusz's decision.
