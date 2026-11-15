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

// Header: Services · Work · About (Guides joins as 04 once the first guide is live)
export const innerNavItems = [
  { text: 'Services', href: '/#services', links: serviceLinks },
  { text: 'Work', href: '/#work' },
  { text: 'About', href: '/#about' },
];

export const footerLinks = [
  { text: 'LinkedIn', href: linkedInHref, external: true },
  { text: 'Privacy', href: '/privacy' },
  { text: 'Terms', href: '/terms' },
];
