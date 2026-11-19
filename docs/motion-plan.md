# Motion plan

**Date:** 2026-11-18
**Branch:** `feature/motion` (cut from `develop` after PR #6 merged)
**Reviewer:** Claude Opus 5.5, as senior motion and interaction designer, working with Mateusz Cichy
**Follows:** `docs/design-audit-basalt-execution.md`, `docs/copy-content-audit.md`
**Status:** Done, except step 7 (column-shape image reveals), which moved to the backlog. See section 3.

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

1. **Done: fewer reveals, one shared script.** Body blocks no longer fade up; they're simply there. `data-reveal` remains only on section headings (`SectionHead`, and the Websites "Why" statement, which is that section's heading) and the process columns. The script moved from `index.astro` to `src/components/home/reveal.ts`, loaded by `BasaltHeader` on every Basalt page, so a page behaves the same whether it's opened directly or reached from Home. Anything a jump scrolls past is revealed, so nothing is left hidden behind the visitor.
2. **Done: reduced motion everywhere.** One global rule at the end of `basalt.css`: with reduced motion on, every transition and animation finishes at once in its final state.
3. **Done: page transition, option A, basalt columns** (`src/components/home/BasaltTransition.astro`, rendered by `BasaltHeader`). As built: twelve columns in four groups of three (two groups on phones). Each group rises and sinks together and is shaped / ‾ \, like the top of a basalt column. Its faces are shaded like a lit prism (left mid-tone, flat top lightest, right darkest), with dark joints only between groups. They rise under the header in about 0.35s, with the groups starting up to 150ms apart so the uneven skyline shows while they move, while the next page loads in parallel, then sink in reverse order. Header stays visible. The browser's cross-fade is switched off in `basalt.css`. A thin signal line draws along the top while a slow page is still loading. Original spec:  dark grained columns of uneven heights rise from the bottom, staggered, cover the page (about 250ms), the new page loads behind them, and they sink back (about 250ms). The header stays put (`transition:persist`). Same-page anchor links never trigger it. With reduced motion, the page swaps instantly.
4. **Done: "set in stone" headings.** A shared pattern in `basalt.css` (`data-stone`, `.bs-stone-line`, `.bs-stone-fade`), used by `SectionHead` and the Websites "Why" statement. The hairline draws left to right (600ms), the label appears, each sentence line rises from behind its own line box (900ms, 80ms apart), then the supporting text fades in. Transitions run only on the way in, so the waiting state is never animated. Not on the hero H1 or body text.
5. **Done: the ground answers the scroll.** CSS scroll-linked animation inside `@supports` and `prefers-reduced-motion: no-preference`; static elsewhere.
   - **Hero drawing** (`HomeHero.astro`, desktop): over the first 110vh, it drifts up 4% and darkens to 60% while pinned. It uses `translate` and `filter`, so the load-in rise and mirroring are untouched.
   - **Footer wordmark** (`BasaltFooter.astro`, all sizes): rises 0.32em to its final cut over its entry into view, landing as the page ends.
   - **Basalt sand, step A** (`basalt.css`, 1024px and up): the grain in the page, section, CTA and footer backgrounds drifts 120px sideways and 800px against the content over the whole page. Desktop only, because moving backgrounds repaint every frame.
6. **Done: FAQ answers open smoothly** (`FaqList.astro`). Height over 280ms with the text fading in, using `::details-content` and `interpolate-size`; other browsers snap open as before.
7. **Not done; moved to the backlog: column-shape image reveals.** After the "fewer reveals" decision, motion stays only where it carries the stone idea: headings and the process columns. An image reveal on every work plate would bring back the "everything animates" feel.
8. **Done: timing tokens.** `--bs-dur-quick` 160ms, `--bs-dur-base` 280ms, `--bs-dur-draw` 600ms, `--bs-dur-rise` 900ms and `--bs-ease-in`, replacing 61 ad-hoc values. Mateusz's hero animations keep their own tuned timings.

**How it was checked:** the reveal states, heading sequence frames, transition cycle and FAQ were checked in the browser. The three scroll-linked effects (drawing drift, wordmark rise, sand drift) were checked as attached to the right scroll timelines and ranges, and by rendering their start and end states. But the review browser pane doesn't paint frames, so they haven't been *seen* moving. Mateusz to check them in a visible browser.

**Not doing:** scroll hijacking, custom cursors, magnetic buttons, scrolling text tickers, depth effects on text, animated body text, more hero motion.

---

## 4. Decisions and contributions (Mateusz)

1. **The self-audit counter:** he pointed out it already changes correctly, so it isn't a problem. He asked for the motion polish (a small "tick" on the number) to go on the motion backlog: `docs/backlog.md`.
2. **Page transition:** chose **option A, basalt columns**, over B (a hard cut with an orange line). After trying it: the total time "feels right", but the columns were "barely noticeable". It was retuned with the same total time: 11 columns instead of 7, a wider stagger, steeper tops and more contrast. The column grain now follows his `--bs-grain-opacity` (×1.5). **His art direction, shaping the final form:** group the columns in threes that move together. The first is slanted like '/', the middle has a flat top, and the third is slanted like '\', so each group reads as one column top: / ‾ \. The prism shading and the joints between groups (not between faces) follow from his grouping.
3. **Challenged the reveal principle:** "is an award-winning site using motion to reveal things, hiding as many things as possible?" The answer is no. That question led to principle 3 and to the proposal to cut generic fade-ups, still to be decided (section 5).
4. **Questioned the duration tokens** ("how is that a problem?"). They were downgraded to low priority, with the reasoning written down.
5. **Fewer reveals:** agreed to remove the fade-up from body blocks so content is simply there ("then we can start from a blank canvas"). He agreed to keep motion only where it means something: headings "set in stone" and the process columns growing from the ground.
6. **Earlier motion he originated:** the typed, highlighted headline word and the highlighter CTA concept (credited in `docs/copy-content-audit.md`), and **Basalt sand**, the grain in motion (`docs/backlog.md`).

---

## 5. Open questions

None at the moment.
