/**
 * Reveal on scroll, shared by every Basalt page (loaded from BasaltHeader,
 * which every Basalt page has). It used to live in the Home page only, so
 * service pages animated or not depending on whether the visitor came from
 * Home.
 *
 * Kept deliberately rare (docs/motion-plan.md): only section headings and
 * the process columns carry `data-reveal`; body content is simply there.
 *
 * Never a gate: content is visible by default. Anything already on screen
 * or above it is marked revealed *before* `.bs-js` is added, so nothing in
 * view or behind the visitor is ever hidden, including after an anchor jump
 * that skips over sections.
 */

let teardown: (() => void) | undefined;

function initReveal() {
  teardown?.();
  teardown = undefined;

  const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')];
  const root = document.documentElement;
  if (!els.length) {
    root.classList.add('bs-js');
    return;
  }

  const reveal = (el: Element) => el.classList.add('is-in');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(reveal);
    return;
  }

  let pending = els.filter((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      reveal(el);
      return false;
    }
    return true;
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px' }
  );
  pending.forEach((el) => io.observe(el));

  // A fast jump (anchor link, scrollbar drag) can skip an element without it
  // ever intersecting; reveal anything that ends up above the viewport.
  // Throttled with a timer, not requestAnimationFrame, so it never depends
  // on the page being painted
  let timer = 0;
  const sweep = () => {
    timer = 0;
    pending = pending.filter((el) => {
      if (el.classList.contains('is-in')) return false;
      if (el.getBoundingClientRect().bottom < 0) {
        reveal(el);
        io.unobserve(el);
        return false;
      }
      return true;
    });
    if (!pending.length) teardown?.();
  };
  const onScroll = () => {
    if (!timer) timer = window.setTimeout(sweep, 100);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  teardown = () => {
    io.disconnect();
    window.removeEventListener('scroll', onScroll);
    if (timer) clearTimeout(timer);
  };

  root.classList.add('bs-js');
}

document.addEventListener('astro:page-load', initReveal);
document.addEventListener('astro:before-swap', () => teardown?.());
