# Services restructure plan

**Status:** Planned, not started
**Branch:** `feature/site-redesign`
**Date:** 2026-11-15

## Goal

Narrow CausewaySoft's offer from nine mixed "services" to **two services we can
prove**, with the specific offers as sections inside them, and move educational
and trendy topics into **Guides**. A focused offer reads as a senior,
independent studio. A long catalogue reads as an agency template.

## Site structure (agreed)

```
CausewaySoft
│
├── Home
│
├── Services
│   │
│   ├── Websites
│   │   ├── Business websites
│   │   ├── E-commerce
│   │   └── AI-enhanced websites
│   │
│   └── Web Applications & Custom Software
│       ├── Business applications
│       ├── SaaS & MVP development
│       ├── Progressive Web Apps
│       ├── AI-powered features
│       └── Business automation
│
├── Work
│
├── About
│
├── Guides
│   ├── AI for Small Businesses
│   ├── Web Apps vs Websites
│   ├── Progressive Web Apps
│   └── Business Automation
│
└── Contact
```

**The items under each service are sections on that service's page, not
separate URLs.** Each section gets an anchor, so the nav, guides and redirects
can link straight to it.

## URLs and anchors

| Item | URL |
|---|---|
| Services (router) | `/services` |
| Websites | `/services/websites` |
| ↳ Business websites | `/services/websites#business-websites` |
| ↳ E-commerce | `/services/websites#ecommerce` |
| ↳ AI-enhanced websites | `/services/websites#ai` |
| Web Applications & Custom Software | `/services/web-applications` |
| ↳ Business applications | `/services/web-applications#business-applications` |
| ↳ SaaS & MVP development | `/services/web-applications#saas-mvp` |
| ↳ Progressive Web Apps | `/services/web-applications#pwa` |
| ↳ AI-powered features | `/services/web-applications#ai` |
| ↳ Business automation | `/services/web-applications#automation` |
| Work | `/#work` for now (own page once there are 4+ case studies) |
| About | `/#about` for now (own page later if needed) |
| Guides | `/guides` (index) and `/guides/<slug>`: later, see backlog |
| Contact | `/contact` (and `/contact?type=project`) |

Keeping `/services/web-applications` as the URL is recommended: it's
established, and the page title can still say "Web Applications & Custom
Software".

## Decisions

1. **Two services:** Websites (proof: Causeway Renovations) and Web
   Applications & Custom Software (proof: BibleQuest). PWAs merge into the
   second.
2. **Retire** Hybrid Mobile Apps, Chrome Extensions, AI-Powered Solutions (as a
   standalone page) and the old Websites page. Projects of those kinds can still
   come in through the wizard's "Something else".
3. **AI appears on both service pages,** framed for each context:
   AI-enhanced websites, and AI-powered features in software. There's no
   standalone AI service.
4. **Guides are content, not services.** They capture search demand (AI, PWAs,
   automation, "do I need an app or a website?") and link into the service
   sections.
5. **`/services` stays,** as a short page that routes people to the right
   service, not a catalogue.

## Messaging: web applications serve two audiences

The page must **not** read as an offer only for startups building SaaS products.

| | Entrepreneurs | Established businesses |
|---|---|---|
| **Goal** | Build a digital product | Improve how the business operates |
| **Sections that speak to them** | SaaS & MVP development, Progressive Web Apps | Business applications, Business automation |
| **Shared** | AI-powered features, PWAs (e.g. a field team app) | |
| **Proof** | BibleQuest | *(none yet: add a case study when available)* |

**Lead line:** "Build a digital product. Improve how your business operates."

The page opens with these two routes side by side, with equal weight, before any
of the five sections. Sections are written as outcomes, not technologies. For
example, the PWA section starts with "Need your team or customers on their
phones? It can install like an app and work offline", not with "What is a PWA".

## Page-by-page

### 1. `/services/web-applications`: rebuild in Basalt

Reuse the Basalt pieces from the Websites page (`SectionHead`, `WorkIndex`,
`ColumnSteps`, `ClosingCta`, `nav.ts`, the offer columns, rows and FAQ
patterns).

- **Hero:** "Build a digital product. Improve how your business operates."
  CTA: Start a project → `/contact?type=project&service=web-app`.
- **01 Two ways in:** *Build a product* | *Improve operations*. Two equal
  columns, each listing its sections as anchor links.
- **02 Business applications** `#business-applications`: portals, internal
  tools, booking and job systems, replacing spreadsheets, integrations.
- **03 SaaS & MVP development** `#saas-mvp`: start small, validate, scale;
  "MVP to full product".
- **04 Progressive Web Apps** `#pwa`: installable, offline, no app store.
  Proof: BibleQuest.
- **05 AI-powered features** `#ai`: assistants, document processing, smarter
  workflows inside the software.
- **06 Business automation** `#automation`: remove repetitive manual steps,
  connect the tools you already use.
- **07 Proof:** BibleQuest. Add an operations case study when one exists.
- **08 How we work:** process steps, including "start with one module" and
  ongoing development.
- **09 FAQs:** cost, timeline, "do I need a native app?", who owns the code,
  support after launch.
- **Closing CTA:** the wizard, with web app preselected.

Sections 02–06 should be compact (heading, two to four sentences, typical
examples), so the page stays scannable rather than becoming five mini-pages.
Links to the related guides are added later, when the guides exist.

Content to carry over from the old pages: the web-app page's local business,
enterprise and startup material (rewritten into the two routes), and the PWA
page's offline, installable and performance points. Drop anything we can't
back up.

### 2. `/services/websites`: add the three named sections

The page already has a Basalt redesign. Changes:
- Add **Business websites** `#business-websites`, **E-commerce** `#ecommerce`
  and **AI-enhanced websites** `#ai` as named sections. They fit naturally as
  the "what kind of website" layer next to the existing "Three ways in" (fix /
  build / extend), which is the "where do you start" layer.
- **AI-enhanced websites:** AI-readable websites that assistants can recommend
  (Causeway Renovations is built for AI agents), enquiry assistants and
  automatic lead handling.
- **E-commerce: proof gap.** There's no shop in the portfolio yet. Keep the
  section honest and specific (e.g. smaller catalogues, bookings and payments,
  integrations) and add a case study as soon as there is one.
- Keep the page length in check: fold the new sections into the existing
  outcomes/offers flow rather than adding three full-height sections.

### 3. `/services`: replace the catalogue with a short router page

- Two large options, each listing its sections as anchor links:
  - **Websites:** business websites, e-commerce, AI-enhanced websites.
  - **Web Applications & Custom Software:** business applications, SaaS &
    MVPs, PWAs, AI-powered features, business automation.
- "Not sure which? Start a project" → wizard (step 1 has "Not sure yet"). Add
  a link to the "Web Apps vs Websites" guide once it exists.
- Drop the old "why us", tech-stack and FAQ blocks (they repeat the home page).

### 4. `/guides`: on the backlog

Guides are part of the agreed structure but not of these phases. The full
plan (index page, the four guides, the setup question) lives in
`docs/backlog.md` under "Guides section".

### 5. Navigation

**Header (Basalt pages), now:** Services ▾ (Websites, Web Applications & Custom
Software, All services) · Work · About · **Contact** (CTA), numbered 01
Services, 02 Work, 03 About.
- "Process" leaves the nav (it's still a section on the home page), so the nav
  matches the agreed structure.
- **When the first guide is published:** add Guides as 04.

**Files:**
- `src/components/home/nav.ts`: `serviceLinks` and `innerNavItems` (contact
  page, Websites page, Basalt footer services row).
- `src/pages/index.astro`: `navItems` and the "What we build" `services` list.
- `src/navigation.ts`: the old header/footer on non-Basalt pages, until those
  pages are retired.

### 6. Home page "What we build"

Reduce from four items (websites, web apps, AI solutions, custom software) to
the **two services**, each listing its sections. Remove the link to
`/services/custom-software` (that page doesn't exist).

### 7. Project wizard (`src/components/home/ProjectWizard.astro`)

Align step 1 with the structure:
- Business website · E-commerce · Web application / business software ·
  SaaS or MVP · AI-powered solution · Something else · Not sure yet.
- Remove "Browser extension". Keep "AI-powered solution": it describes what
  the visitor wants, even without a dedicated page.
- Update the `?service=` keys (`website`, `ecommerce`, `web-app`, `saas`,
  `ai`) and the service pages' CTAs so each section can preselect its option.

## Retiring pages and redirects

| Old URL | Redirect to |
|---|---|
| `/services/progressive-web-apps` | `/services/web-applications#pwa` |
| `/services/ai-agents-solutions` | `/services/web-applications#ai` |
| `/services/hybrid-apps` | `/services` |
| `/services/chrome-extensions` | `/services` |
| `/services/websites-old` | `/services/websites` |
| `/solutions` | `/services` |
| `/solutions/healthcare` | `/services` |
| `/solutions/professional-services` | `/services` |

Permanent (301) redirects keep search rankings and backlinks. Note that the
`#anchor` part is honoured by browsers after the redirect but ignored by search
engines, which is fine.

**Implementation: self-hosted, so Mateusz configures the 301s on the server**
using the table above. The site repo only needs the pages deleted and every
internal link updated. (If a server-independent fallback is ever wanted,
Astro's `redirects` option can generate static redirect pages, but those are
meta refreshes, not true 301s.)

Then delete the retired `.astro` files, including the industry pages under
`src/pages/solutions/` (decided: delete them).

### Links to update before deleting

- `src/pages/index.astro`: ~47 (AI solutions), ~53 (custom-software), ~67
  (dropdown).
- `src/components/home/nav.ts`: ~13 (AI solutions).
- `src/pages/services.astro`: ~71, ~108, ~120, ~132 (replaced by the router
  page).
- `src/pages/solutions/`: being deleted, so its links to retired pages go with
  it. Check nothing else links to `/solutions`.
- `src/navigation.ts`: the services dropdown.

## Phases

1. **Web Applications & Custom Software page:** Basalt rebuild with the two
   routes and five sections.
2. **Websites page:** add the three named sections, keeping the length in
   check.
3. **Router `/services` page.**
4. **Navigation, home "What we build", footer, wizard options.**
5. **Delete the retired pages** (services and industry pages) once nothing
   links to them, and hand the redirect table to the server config.

Each phase is one commit; check links and the build at the end of each.

**Guides are on the backlog** (`docs/backlog.md`), not part of these phases.
Until they exist, the service pages don't link to guides and Guides stays out
of the nav.

## Acceptance checks

- No links to retired URLs anywhere in `src` (grep for each slug).
- Every anchor in the URL table exists on its page.
- Each retired URL redirects to its target (checked on the production server
  once the redirects are configured).
- `/services` shows exactly two services, their sections and a wizard link.
- The web apps page speaks to both audiences with equal weight: read it as a
  local business owner and as a founder, and both should see themselves.
- The header nav matches the agreed structure, and its numbers match.
- The wizard's `?service=` preselect works from each service section.
- Type check and build pass; mobile layouts have no horizontal overflow.

## Answered questions

1. **Hosting:** self-hosted. Mateusz configures the 301 redirects on the server
   from the table above.
2. **Industry pages** (`/solutions/...`): delete them, with redirects to
   `/services`.
3. **Case studies:** none yet beyond the two portfolio products (Causeway
   Renovations, BibleQuest). Business applications, Business automation and
   E-commerce launch without a case study; write those sections around
   specific, typical examples rather than claimed results, and add case studies
   when projects exist.
4. **Guides setup:** undecided. Moved to the backlog with the rest of the
   Guides work.
