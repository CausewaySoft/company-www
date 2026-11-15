# Backlog

Ideas and follow-ups for the CausewaySoft site that are agreed in principle
but not scheduled. Newest first.

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
