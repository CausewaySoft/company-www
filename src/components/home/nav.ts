/**
 * Shared navigation for Basalt inner pages (contact, service pages).
 * The home page uses in-page anchors instead (see src/pages/index.astro).
 */

export const bookingHref = 'https://calendly.com/causewaysoft';
export const reviewCallHref = 'https://calendly.com/causewaysoft/30min';
export const linkedInHref = 'https://www.linkedin.com/company/causewaysoft';

export const serviceLinks = [
  { text: 'Websites', href: '/services/websites' },
  { text: 'Web applications', href: '/services/web-applications' },
  { text: 'AI solutions', href: '/services/ai-agents-solutions' },
  { text: 'All services', href: '/services' },
];

export const innerNavItems = [
  { text: 'Services', href: '/#services', links: serviceLinks },
  { text: 'Work', href: '/#work' },
  { text: 'About', href: '/#about' },
  { text: 'Process', href: '/#our-process' },
];

export const footerLinks = [
  { text: 'LinkedIn', href: linkedInHref, external: true },
  { text: 'Privacy', href: '/privacy' },
  { text: 'Terms', href: '/terms' },
];
