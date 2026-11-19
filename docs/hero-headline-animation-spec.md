# Hero headline animation: current spec

**Status:** Describes the animation as built, 2026-11-19
**Code:** `src/components/home/HomeHero.astro` (markup, styles and the
`initHeroType` script)
**Branch for changes:** `feature/hero-headline-animation`

The home page headline reads:

> **Software,**
> built like the
> Giant's Causeway.

Its first line is animated: after a pause, "Software," turns into
"Software..." and is deleted, and a short
list of words is typed in its place, one at a time, like someone typing and
correcting the headline live. The animation plays once and stops.

---

## Sequence

| # | Step | What the visitor sees | Duration |
|---|---|---|---|
| 1 | **Hold** | "Software," as ordinary headline text: same font, size and colour as the other two lines. No highlight, no caret. | `HOLD_MS` = 3,300ms |
| 2 | **Caret appears** | A solid caret appears after "Software,". | 350–550ms (random) |
| 3 | **Delete the comma** | The caret backspaces the comma: "Software". Still plain text. | 70–105ms, then a 150–260ms beat |
| 4 | **Type "..."** | Three dots are typed: "Software...". Still plain text. | 3 × 110–200ms, then a 350–550ms beat |
| 5 | **Delete "Software..."** | The caret backspaces the dots, then "Software", one character at a time, still as plain text. | 11 characters × 70–105ms |
| 6 | **Highlight on** | The line is now empty; from here on, typed text is highlighted. | 450–700ms gap (random) |
| 7 | **Type a word** | The word is typed letter by letter on an orange highlight, like selected text. The caret stays solid while typing. | per key: see *Typing rhythm* |
| 8 | **Type "..."** | Three dots follow the word, one by one. | 3 × 110–200ms |
| 9 | **Pause** | The finished word sits there with the caret blinking. | `PAUSE_MS` = 3,300ms |
| 10 | **Delete** | The caret backspaces the dots, then the word, steadily. | per character: 70–105ms |
| 11 | **Gap** | Empty line, solid caret. | 450–700ms (random) |
| – | *repeat 7–11* | for each word in the list | |
| 12 | **Last word** | The last word is typed with its dots, then the caret disappears straight away. No pause and no deletion. The headline stays like this. | – |

### Words

```ts
const WORDS = ['Web-Sites', 'Web-Apps', 'Products', 'Yours'];
```

- Typed **once**, in this order. There is no loop and no random order.
- The animation **ends on the last word**: "Yours...".
- **"Web-Sites" and "Web-Apps" are always hyphenated.** The hyphen is part of
  the typing rhythm (see *Typing rhythm*), so don't change them to
  "Websites" or "Web apps".
- "Software" is not in the list, because it's the opening word.
- **Width check:** before typing starts, each word is measured as it would
  appear ("Word..." on the highlight). Any word wider than 96% of the
  headline's width is skipped, so the first line never wraps and the
  headline never changes height. All four words currently fit, even on a
  375px phone (widest: "Web-Apps..." at 218px of 329px available).

### Typing rhythm

| Action | Timing | Feel |
|---|---|---|
| Keystroke | 55–140ms, plus a 180–380ms hesitation on 12% of keys | fast but uneven, human |
| Hyphen (`-`) | an extra 200–320ms **before** it, and an extra 280–420ms **after** it (on top of the normal keystroke) | the typist stops to find the key, then takes a moment to carry on. Measured: "Web-Sites" 365ms before / 374ms after; "Web-Apps" 414ms / 465ms |
| Dot | 110–200ms | a little slower, deliberate |
| Backspace | 70–105ms | steady |
| Gaps | 350–550ms (caret appears; after "Software..."), 150–260ms (after deleting the comma), 450–700ms (between words) | – |

All ranges are picked at random each time, so no two runs are identical.

### Measured run (1440 × 900, 2026-11-19)

| Time | Event |
|---|---|
| 0.0s | "Software," (plain) |
| 3.2s | caret appears |
| 3.6s | comma deleted: "Software" |
| 3.9–4.2s | dots typed: **Software...** (plain) |
| 4.85s | deleting starts |
| 8.9s | **Web-Sites...** (pause; 326ms before the "-", 494ms after) |
| 16.2s | **Web-Apps...** (pause) |
| 22.4s | **Products...** (pause) |
| 28.2s | **Yours...**, caret gone, done |

**Total: about 28 seconds** from page load to the final state. It varies by
a second or so between runs.

---

## Visual states

The line's state is held in data attributes on `.hero__type`
(`[data-hero-type]`), and CSS styles each one.

| State | Attributes | Text style | Caret |
|---|---|---|---|
| Before the script runs (and no-JS) | none | plain headline text | hidden |
| Swapping the comma for "..." and deleting "Software..." | `data-state="typing"` | plain | solid |
| Typing / deleting words | `data-state="typing"` + `data-highlight` | orange highlight | solid |
| Pause on a word | `data-state="waiting"` + `data-highlight` | orange highlight | blinking (1s cycle, on/off) |
| Finished | `data-state="done"` + `data-highlight` | orange highlight | hidden |

### Highlight ("selected text")

- Background: `--bs-signal`, the site's orange (`#d4511c` light,
  `#e8622c` dark).
- Text: `--bs-signal-ink` (`#0e0f10`), the same colours as the site's
  `::selection`.
- `box-decoration-break: clone`, so the highlight wraps the text tightly.
- When the line is empty, the highlight is removed, so no empty orange box
  shows between words.

### Caret

- A thin bar: 0.06em wide, 0.78em tall, in the text colour.
- Solid while typing or deleting; blinks (`steps(1)`, 1s) while paused;
  removed at the end.

### Headline type

- Archivo, weight 800, `font-stretch: 68%`.
- `font-size: clamp(52px, 8.6vw, 132px)`, `line-height: 0.88`,
  `letter-spacing: -0.02em`.
- The typed line is `white-space: nowrap` and always on its own line.

---

## Markup

```html
<h1 id="hero-title" class="hero__title bs-display">
  <span class="hero__line hero__type" data-hero-type>
    <span class="sr-only">Software,</span>
    <span class="hero__typed" aria-hidden="true">
      <span class="hero__word">Software,</span><span class="hero__dots"></span>
    </span>
    <span class="hero__caret" aria-hidden="true"></span>
  </span>
  <span class="hero__line">built like the</span>
  <span class="hero__line">Giant's Causeway<span class="hero__stop">.</span></span>
</h1>
```

- `.hero__word` holds the typed word; each dot is its own `<span>` inside
  `.hero__dots`. Backspacing removes dots first, then letters of the word.

---

## Accessibility and edge cases

| Case | Behaviour |
|---|---|
| **Screen readers** | Read the static "Software, built like the Giant's Causeway." The typed text and caret are `aria-hidden`; a hidden `sr-only` copy carries "Software,". |
| **No JavaScript** | The plain "Software," headline, no caret, no highlight. |
| **`prefers-reduced-motion: reduce`** | No typing at all: the plain "Software," headline stays. |
| **Navigating away mid-animation** (Astro view transitions) | The pending timer is cleared on `astro:before-swap` and the script stops cleanly. |
| **Returning to the home page** | The script runs again from the start (it's initialised on `astro:page-load`). |

---

## Related animation: the "Start a project" stroke

Separate script (`initHeroMark`), independent of the headline:

- An orange highlighter stroke is drawn across the hero "Start a project"
  button **330ms after the page loads** (`MARK_DELAY_MS`), taking 0.9s.
- The label is white, bold and at its final size throughout; only the stroke
  moves.
- With reduced motion, the stroke is simply there.

---

## Constants at a glance

| Constant | Value | Purpose |
|---|---|---|
| `WORDS` | `['Web-Sites', 'Web-Apps', 'Products', 'Yours']` | typed once, in order |
| `HOLD_MS` | 3,300 | how long "Software," stays plain |
| `PAUSE_MS` | 3,300 | pause on each word (except the last) |
| `MARK_DELAY_MS` | 330 | CTA stroke delay (separate script) |
