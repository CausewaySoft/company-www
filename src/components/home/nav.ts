/**
 * Shared navigation for Basalt inner pages (contact, service pages).
 * The home page uses in-page anchors instead (see src/pages/index.astro).
 */

export const bookingHref = 'https://calendly.com/causewaysoft';
export const reviewCallHref = 'https://calendly.com/causewaysoft/30min';
export const linkedInHref = 'https://www.linkedin.com/company/causewaysoft';

// The two services (see docs/services-restructure-plan.md)
export const serviceLinks = [
  { text: 'Websites', href: '/services/websites' },
  { text: 'Web applications & custom software', href: '/services/web-applications' },
  { text: 'All services', href: '/services' },
];

// Header: 01 Services · 02 Work · 03 About · Contact, plus the button.
// Numbers follow the home-page sections; Contact is a page, so it's unnumbered.
// (Guides joins as 04 once the first guide is live.)
export const contactNavItem = { text: 'Contact', href: '/contact', plain: true };

export const innerNavItems = [
  { text: 'Services', href: '/#services', links: serviceLinks },
  { text: 'Work', href: '/#work' },
  { text: 'About', href: '/#about' },
  contactNavItem,
];

// The header button: the main action, the project wizard
export const headerCta = { text: 'Start a project', href: '/contact?type=project' };

export const footerLinks = [
  { text: 'LinkedIn', href: linkedInHref, external: true },
  { text: 'Privacy', href: '/privacy' },
  { text: 'Terms', href: '/terms' },
];
