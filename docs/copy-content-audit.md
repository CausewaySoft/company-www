# Copy and content audit

**Date:** 2026-11-18
**Branch:** `feature/copy-content` (cut from `develop` after PR #5 merged)
**Reviewer:** Claude Opus 5.5, as senior copywriter and content designer, working with Mateusz Cichy
**Follows:** `docs/design-audit-basalt-execution.md` (the Basalt design audit)

**Scope:** the live text of Home, Services, Websites, Web applications, Contact, the project planner and the 404 page, plus the page titles and descriptions. The blog posts and the legal pages weren't reviewed.

---

## 1. Summary

The core message was already good. The strongest lines were all on the site before this audit: "Your website should win you business.", "Designed and built by the engineer you talk to.", "No sales team. No pressure." and "Working software early, then better every week." Contact and Web applications were the best-written pages.

The weakest copy was what visitors read first: the Home intro ("Welcome to CausewaySoft!") and the services intro under it, which was ungrammatical. Elsewhere, "properly" was used across three headings, a few headings were generic, the free call had three names, and the "Outcome" rows described features, not results.

This pass fixed those with light edits. Nothing was rewritten for its own sake.

---

## 2. Voice

**Mateusz's brief for the copy (his words): short, confident, punchy, gritty.**

Rules that follow from it, used in this pass:

1. **Specifics, not adjectives.** "Replies within one business day" works; "Creative" could describe anyone.
2. **Each idea once per page.** No repeated "properly", no "working product" twice in one section.
3. **One thought per line in display copy.** Sentences are set as lines, with each sentence on its own line, not broken mid-phrase. Lines are set in CSS, not with `<br>`.
4. **"We" for the studio and how the work is done; "I" / Mateusz where it's personal** (the founder section, Contact, the planner). The planner's "We'll work it out together" is the inclusive *you and me*, so it stays.
5. **One spelling per term:** "web apps" in casual copy, "web applications" in formal names, never "web-apps". Headings and page titles in sentence case.
6. **No emoji, no hype words, no unverified claims.**

---

## 3. Messaging

**Value proposition:** websites that win business and web apps that run it, designed and built by the engineer you talk to.

**Verified from the site:** two services; local businesses, founders and established businesses as audiences; one senior engineer (MEng, Queen's University Belfast, 7+ years); websites from £2,000; replies within one business day; two live projects.

**Facts still to confirm.** Where a change depended on these, it was made in the conservative direction: a claim was removed or kept, never added.

| # | Question | What was done meanwhile |
|---|---|---|
| 1 | Is CausewaySoft one person, or a studio with occasional collaborators? | The existing "we" / "I" split is kept. The Services hero now says "One engineer.", which repeats the claim the page already made in its meta line ("Two services, one engineer"). |
| 2 | Is Causeway Renovations an external client? | No change to how it's framed. |
| 3 | What exactly do the "AI-powered business interactions" do? | The description is unchanged; it needs your detail. |
| 4 | Any measurable result for either project? | The label "Outcome" became "Built for" until there are real results. |
| 5 | Do you offer native mobile apps? | "Mobile apps" was removed from the Home title and default description, because no service page offers them. Add it back if you do. |

---

## 4. What changed

| ID | Where | Before | After | Commit |
|---|---|---|---|---|
| H1 | Home hero intro | "Custom engineered. Creative. Built to last. / We build websites and web-apps. / Welcome to CausewaySoft!" | "Column by column. Precisely fitted. Built to last. / Websites that win business. Web apps that run it. / One engineer. No middlemen." | `7ad7f43` |
| H2 | Home typed words | Web-Sites, Web-Apps, Giant, Dreams | Websites, Web apps, Products, **Yours** ("Yours… built like the Giant's Causeway.") | `b3834a4` |
| H3 | Home hero meta | "…Belfast, NI." / "Giant apps for giant visionaries" | "…Belfast, NI" / "Websites & web applications" (the tagline stays in the footer only) | `b78219f` |
| H4 | Home services intro | "We build websites and web-apps. Precisely engineered and to create an experience." | "No long menu of services. Two, each done in depth, from first sketch to launch." | `bafd985` |
| — | Titles and descriptions | Home: "Web App and Mobile App Development Agency…"; no Home description; default description starting with 🚀 | Home: "CausewaySoft: websites & web applications in Belfast", plus its own description; a new default description; Websites: "Business websites in Belfast, built to convert" | `1712cfa` |
| — | CTAs and case | "Book a free discovery call"; "Web Applications & Custom Software" (title case) | "Book a free 30-minute call" (as Contact already said, same link); sentence case | `f200b54` |
| H6 | Home founder | Long quote that repeated "working directly"; "7+ years" said twice; "Business-first thinking…" | A shorter quote; the paragraph no longer repeats the facts; Approach: "Plain answers, proven technology, software you can keep building on" | `c4329d4` |
| H7 | Home process | The intro repeated "working product"; generic steps | The intro starts "A detailed spec or just a problem to solve."; concrete steps (price in writing, sign-off before the build, working software early) | `c4329d4` |
| S1 | Services hero | "Websites and software, built properly." | "Two services. / One engineer.", with a new intro saying who each service is for | `3381b88` |
| W1 | Websites outcomes | "We turn underperforming websites into business assets." | "Five jobs every business website should do." | `3381b88` |
| W2 | Websites offers | "What we can do for your website." | "Fix it, build it, or make it do more." | `3381b88` |
| H5 | Work facts | Outcome: "Website built for AI-agent interactions." / "Fully functional with no internet connection." | Built for: "AI agents as well as human visitors." / "Full use with no internet connection." | `d5d7e17` |
| C1 | Contact phone | "+447548003345" | "+44 7548 003345" (the `tel:` link is unchanged) | `d5d7e17` |

**Withdrawn after checking:** the "we vs I mix" in the planner (part of C1). The planner is consistently first person, and its one "we" means *you and me*.

---

## 5. Decisions and contributions

Mateusz's decisions, suggestions and contributions in this copy pass, in order.

1. **Kept the purpose of the "how" line (his insight).** My first proposal replaced "Custom engineered. Creative. Built to last." entirely. Mateusz pointed out that the line answers the question the headline raises: "built like the Giant's Causeway… how exactly?" So it should stay, refined. The final structure of the hero intro (how it's built → what we build → who builds it) follows from his note.
2. **Set the voice brief:** *short, confident, punchy, gritty.* Everything in this pass was written to it.
3. **Proposed the second line's place.** He suggested my long sentence ("Websites that win you business and web applications that run it…") should replace "We build websites and web-apps." as the next line, cut down to his style. That became "Websites that win business. Web apps that run it."
4. **Chose "Column by column. Precisely fitted. Built to last."** out of three options.
5. **Proposed a bookended variant:** "Column by column. Precisely fitted. Built to last. Column by column." I advised against it, for two reasons: "Built to last" is the strongest ending, and at 67 characters the line can't fit on one line in the hero on desktop. We kept the three-beat version. The repetition idea is noted as worth trying in motion or the closing section.
6. **Chose the recommended second and third lines,** including "One engineer. No middlemen."
7. **Approved the typed words** Websites, Web apps, Products, Yours.
8. **Kept the footer wordmark cut** by the page edge (from the design pass, recorded here because it's part of how the brand closes the page).
9. **Asked for the remaining copy tasks** to be finished with a commit per task, and for his decisions and contributions to be credited in the docs.

### Credits: Mateusz's own copy before this audit

From the git history (his commits, without Claude's "Assisted-by" line):

- **The typed, highlighted first word of the headline:** his concept and direction (`2356341`, a to-do describing the selection-coloured, typed first word; `90158b1`, "i claim full credits for this… including all animations"). It was built in the CTA-design work and refined by him (`29a35b4`, `5a82095`, `340cbba`: the word lists, speed and timing).
- **The "Built to last" line and its iterations:** "Creative, modular, precise and built to last" (`2356341`) → "Precisely engineered, creative and built to last" (`90158b1`) → "Custom engineered, creative and built to last" (`b1d50a9`) → "Custom engineered. Creative. Built to last." (`87f64bc`). The final line in this pass keeps his "Built to last" ending and three-beat rhythm.
- **"Belfast, NI."** in the meta line (`b3909fb`), shortened so it doesn't wrap. This pass only drops the trailing full stop.
- **"Giant apps for giant visionaries":** the brand tagline, kept as the footer's closing line.

---

## 6. Still open

1. **Confirm the five facts in section 3.** Facts 2–4 unlock a stronger work section with real outcomes and a plain description of the AI features.
2. **Case studies:** each project is still a screenshot and two facts. See the "award-worthy" notes in the design audit.
3. **Blog posts and legal pages:** not reviewed in this pass.
4. **The "Column by column" echo:** possible in the motion pass or the closing CTA.
