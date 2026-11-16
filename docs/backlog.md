# Backlog

Ideas and follow-ups for the CausewaySoft site that are agreed in principle
but not scheduled. Newest first.

---

## Delete the old blog components

**Status:** Ready to do, not started
**Area:** `src/components/blog/`, `src/components/widgets/Blog*.astro`,
`src/components/common/SocialShare.astro`, `BasicScripts.astro`
**Added:** 2026-11-16

### Why

The blog index, category, tag and post pages now use the Basalt components
(`BlogListPage`, `BlogPostPage`, `PostList`, `PostPager`, `ArticleBody` in
`src/components/home/`). The old AstroWind blog components are no longer
rendered anywhere. Keeping them adds dead code and makes it unclear which
components are current.

### What's unused (checked 2026-11-16)

Nothing imports these any more, except each other:

- `src/components/blog/`: `SinglePost`, `List`, `ListItem`, `Tags`,
  `Pagination`, `RelatedPosts`, `ToBlogLink`, `Headline`, `Grid`, `GridItem`
- `src/components/widgets/BlogHighlightedPosts.astro` (only used by
  `RelatedPosts`)
- `src/components/widgets/BlogLatestPosts.astro` (only a commented-out import
  in `src/pages/landing/business-grants-causewaycoast-ni.astro`)
- `src/components/common/SocialShare.astro` (only used by `SinglePost`) and its
  `[data-aw-social-share]` click handler in
  `src/components/common/BasicScripts.astro`

Not to be confused with `src/components/ui/Headline.astro`, which the old
widgets still use.

### To do when this is picked up

- [ ] Re-check nothing imports them (search for each name; the old landing
      and widget pages may have changed).
- [ ] Delete the files above, the commented-out `BlogLatestPosts` import in the
      grants landing page, and the social-share handler in `BasicScripts.astro`.
- [ ] Run the type check and build, and check `/blog`, a category page, a tag
      page and a post.

---

## Remove Google Analytics and go cookie-free

**Status:** Agreed in principle, not started
**Area:** `src/components/common/Analytics.astro` (Google Analytics 4,
`PUBLIC_GOOGLE_ANALYTICS_ID`), `src/pages/privacy.astro`, the Basalt footer
**Added:** 2026-11-16

### Why

- **There's currently no cookie consent.** Google Analytics 4 loads in
  production without asking. UK rules (PECR) require consent *before*
  non-essential cookies such as analytics are set, and the privacy policy says
  analytics run on "your consent, given through your cookie choices", which
  the site doesn't offer yet.
- **Removing GA removes the need for any consent banner.** With no
  non-essential cookies there's nothing to consent to. That's simpler and more
  honest than building a consent banner.
- **It fits the brand.** An independent, engineering-led studio that doesn't
  track its visitors, and a fast site with no third-party scripts.
- **The privacy policy gets simpler.** The Google sharing, US transfers,
  cookie duration and analytics-consent parts shrink or disappear.

### Decided against: a "No cookies were used" banner

A banner announcing there are no cookies is still a banner: visitors are tired
of them and dismiss them unread, it adds a click and visual noise to every
first visit, and it suggests there's something to agree to. Instead, say it
quietly:
- one mono line in the footer's bottom row, e.g. **"No cookies. No
  tracking."**, linking to `/privacy`;
- a clear statement in the privacy policy.

### Would the site really be cookie-free?

From the code, yes, once GA is gone:
- fonts are self-hosted (`@fontsource`), so no Google Fonts requests;
- the contact form and project wizard post with `fetch`, no cookies;
- Calendly is a plain link, not an embed, so it sets no cookies on our site;
- the light/dark toggle uses `localStorage`, not a cookie. A preference the
  visitor asked for is strictly necessary and needs no consent.

Confirm in the browser after removing GA (Application → Cookies should be
empty) rather than assuming.

### What we lose, and cookie-free replacements

- **Google Search Console:** search queries, clicks and rankings; nothing
  added to the site. The most useful data for a site like this anyway.
- **Server log analytics:** the site is self-hosted, so the web server already
  logs every request. A tool like **GoAccess** turns those logs into page
  views, top pages and referrers, with no script and no cookies.
- **Cookieless analytics** if more detail is wanted later: self-hosted
  **Umami**, **Plausible** or **Fathom**. These don't set cookies, so they
  generally don't need a consent banner, but check current ICO guidance for
  the specific tool first.

### To do when this is picked up

- [ ] Remove the Google Analytics component (`Analytics.astro`, its use in
      `Layout.astro`) and the `googleAnalytics` settings in `src/config.yaml`.
- [ ] Remove `PUBLIC_GOOGLE_ANALYTICS_ID` from the production `.env`, so GA
      can't quietly come back.
- [ ] Check in the browser that no cookies are set on any page.
- [ ] Update `src/pages/privacy.astro`: remove the Google Analytics parts
      (sections 2, 3, 4, 5, 6 and 7 mention it), state that the site uses no
      cookies and no tracking, and update the "last updated" date.
- [ ] Add "No cookies. No tracking." to the footer's bottom row, linking to
      `/privacy`.
- [ ] Optional: set up GoAccess (or a cookieless tool) on the server.

---

## Guides section

**Status:** Agreed in the site structure, not started; setup undecided
**Area:** New `/guides` section; links from the service pages and nav
**Added:** 2026-11-15
**Related:** `docs/services-restructure-plan.md` (site structure)

### The idea

Educational guides that capture search demand for broad and trendy topics
without pretending to be services. Each one links into the relevant section of
the two service pages. They're the honest home for subjects like AI and
"digital transformation", which were previously posing as services.

### The four guides

- **AI for Small Businesses:** what's realistic, rough costs, where to start.
  Links to `/services/websites#ai` and `/services/web-applications#ai`.
- **Web Apps vs Websites:** helps unsure visitors choose. Links to both service
  pages; `/services` and the wizard's "Not sure yet" can point here.
- **Progressive Web Apps:** "do you need the App Store?" Links to
  `/services/web-applications#pwa`.
- **Business Automation:** what to automate first. Fold in the Northern
  Ireland digital transformation grants here (schemes fund exactly this work),
  building on the existing grants landing page and the "up to £20,000" blog
  post. There's also draft copy on DTFF funding for clinics ("may cover up to
  70%") in the deleted healthcare industry page; recover it with
  `git show 17f13a9:src/pages/solutions/healthcare/website-copy.md`.

### Open question: how to set it up

- **Option A, a separate `guides` content collection:** its own URL structure
  (`/guides/<slug>`), its own fields (e.g. related service section, reading
  time), and a clean separation from news-style blog posts.
- **Option B, a "guide" category in the existing blog:** less setup and reuses
  the blog templates as they are, but guides end up under blog URLs and mixed
  in with posts.

Either way guides are written in Markdown, not hand-built pages, and the index
and article templates get the Basalt design. Leaning towards A, because guides
are evergreen reference material and blog posts are dated news; decide when
this is picked up.

### To do when this is picked up

- [ ] Decide option A or B.
- [ ] Build the `/guides` index (title, one-line summary, reading time) and the
      article template in the Basalt style.
- [ ] Write and publish the guides one at a time; well-written beats all four
      at once.
- [ ] When the first guide is live: add **Guides** to the header nav as 04
      (`src/components/home/nav.ts` and `src/pages/index.astro`), and link it
      from `/services` and the related service sections.

---

## "Free website check": a possible lead-generating product

**Status:** Idea, undecided whether it's worth doing
**Area:** Websites service page (`src/pages/services/websites.astro`), possibly
a new page or a mode of the project wizard on `/contact`
**Added:** 2026-11-15

### The idea

Offer small businesses a free check of their existing website: what's slowing
it down, what's hurting enquiries, and what to fix first. It fits the Websites
page's promise ("If your website is slow, outdated… we'll find out why and fix
it") and gives owners of an existing site a low-commitment first step.

### Current state

The Websites page used to link two "Get a Free Website Check" buttons to
`/free-website-check`, a page that never existed. They now point elsewhere:
- Hero: **"Start a Website Project"** → `/contact?type=project&service=website`
  (the project wizard, with "Business website" preselected).
- "Fix an existing website" card: **"Book a Free Review Call"** → the existing
  30-minute Calendly booking, which keeps the "free check" spirit using
  something already offered.

### Why it could be worth it

- **A natural first step for the main audience.** Most small-business buyers
  already have a website; "is mine any good?" is an easier question to act on
  than "start a project".
- **It shows expertise instead of claiming it.** A useful report demonstrates
  the engineering-led approach the site talks about.
- **It qualifies leads.** The check shows whether there's real work to do
  before anyone commits to a call or proposal.

### Why it might not be

- **Time cost.** Every check is unpaid work; popular free offers can eat a
  week.
- **It attracts price-shoppers and tyre-kickers** as well as real prospects.
- **Free tools already exist.** Google PageSpeed Insights gives a score for
  free (the old footer even linked to it). The check must go well beyond a
  score, e.g. clear priorities and business impact, or it isn't worth having.
- **"Free" can undercut a premium position** if it looks like a sales gimmick.

### Options

1. **Keep the free review call (current).** No new build; the call is the
   check. Lowest effort, and it's already live.
2. **Manual mini-audit, limited.** A short form (URL + what the site should
   achieve), then a personal reply, e.g. a 5-minute screen recording with the
   top three fixes. Cap it (e.g. five a month) to protect time; easy to stop.
3. **Automated report.** Run PageSpeed Insights and a few checks of our own
   (mobile, meta tags, contact paths) and email a branded summary. Scales, but
   needs building and maintaining, and risks feeling generic.
4. **Paid audit, credited against a project.** A fixed-price audit (e.g. a few
   hundred pounds) refunded as credit if they go ahead. Filters out
   tyre-kickers and values the work properly.

**Suggested path:** stay with option 1 for now. If review calls show real
demand, trial option 2 with a monthly cap before considering 3 or 4.

### To do when this is picked up

- [ ] Decide whether to offer a check at all, and which option.
- [ ] If option 2 or 3: add a "Website check" entry point, either a small page
      or a `?type=website-check` mode on `/contact` that submits through the
      existing `/forms/contact.php` path (don't add a second form backend).
- [ ] Write what the check covers and what people receive, and by when.
- [ ] Update the Websites page CTAs to point at it.
- [ ] Track how many checks turn into projects, to see if it pays off.

---

## Hero "Fig. 01" Easter egg: a hidden reward behind the Causeway coordinates

**Status:** Idea, not started
**Area:** Home page hero caption (`src/components/home/HomeHero.astro`, the
`hero__coords` link under the charcoal drawing)
**Added:** 2026-11-15

### The idea

The hero caption shows the Giant's Causeway coordinates and currently links to
the bare coordinates on Google Maps. Instead of a plain map link, reward the
few curious visitors who click it with a hidden "Easter egg": something only
they find, such as a freebie or offer.

The first version of the idea was to create our own pin on Google Maps by
registering a place at the Causeway and putting the Easter egg there. We
decided against that (see below) in favour of a legitimate route that gives the
same effect.

### Why not register our own place on Google Maps

- **It breaks Google's rules.** A Google Business Profile has to be a real
  location where we serve customers in person, or a hidden-address service
  area. A software studio listed at a World Heritage site owned by the National
  Trust is exactly what Google's spam checks look for.
- **It would almost certainly fail verification.** Google now verifies by
  video or postcard, and we can't show that we operate there.
- **It could hurt our real listing.** Suspensions can spill over onto the
  genuine CausewaySoft business profile, and people who report fake listings
  remember who made them. For a brand built on trust and craftsmanship, it's
  the wrong kind of clever.

### Options that give the same effect, legitimately

**Option 1: Google My Maps (low effort)**
Create our own custom map with our own pin, title, description, photos and
links. It's a separate, shareable map, not a listing on Google Maps itself, so
it's allowed. The pin could say "You found it. Fig. 01, the Giant's Causeway"
with the hidden reward.
- Downsides: My Maps looks dated, and we get no data on who found it.

**Option 2: our own "Fig. 01" page (recommended)**
Link the coordinates to a hidden page on our own site, e.g. `/fig-01`, with:
- the full charcoal drawing, and who drew it and when (if known);
- a short story of why the studio is named after the Causeway: the basalt
  columns, Finn McCool, precision and modularity;
- a small embedded map, so the coordinates still lead to a map;
- the hidden reward at the end.

Why this is the better option: it's on-brand, fully under our control,
measurable with analytics, and it becomes a page we can share elsewhere.

### The reward: a gift, not a discount

- **"10% off" devalues a premium service.** It signals that the price is
  negotiable and attracts people shopping for price.
- **A gift tied to the brand works better.** Ideas:
  - A **printed postcard of the charcoal drawing**, posted to the visitor. It's
    a physical, memorable object that stays on a desk, and very few studios do
    this.
  - A **free 30-minute website or architecture review.** Useful, costs only
    time, and starts a conversation.
  - A **"Finn" code word** to mention in the contact form, so we can tell who
    found it.
- **Keep it fair and simple:** short written terms (one per business, an expiry
  date, a limit such as the first 50), and a note in the contact form or on the
  terms page. That keeps UK consumer-promotion rules happy.

### Expectations

Very few people will find it. That's the point of an Easter egg: it's for the
curious few. Its value is in the story they tell afterwards ("there's a hidden
page on their site with a free print"), not in volume.

### Related decisions already made

- The caption keeps showing **coordinates** (55.2408° N, 6.5116° W), not a
  Google plus code: coordinates suit the monograph style, are universally
  recognised, and don't add a second place name to the caption.
- We considered linking to the **Giant's Causeway place card** on Google Maps
  (photos, reviews, ratings) and decided to leave the link as it is for now.

### To do when this is picked up

- [ ] Choose Option 1 (My Maps) or Option 2 (`/fig-01` page); Option 2 is
      recommended.
- [ ] Choose the reward (postcard print, free review, or another gift) and
      write its terms.
- [ ] If Option 2: design and build the `/fig-01` page in the Basalt style,
      with the drawing, the story, a map embed and the reward.
- [ ] Point the hero `hero__coords` link at the new destination.
- [ ] Add a way to recognise who found it (code word in the contact form) and
      track visits in analytics.
- [ ] Add the promotion terms to the terms page or the contact form.
