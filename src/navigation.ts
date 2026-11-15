export const headerData = {
  // Matches the Basalt header: Services · Work · About (see docs/services-restructure-plan.md)
  links: [
    {
      text: 'Services',
      href: '/services',
      links: [
        {
          text: 'Websites',
          href: '/services/websites',
        },
        {
          text: 'Web Applications & Custom Software',
          href: '/services/web-applications',
        },
        {
          text: 'All Services',
          href: '/services',
        },
      ],
    },
    {
      text: 'Work',
      href: '/#work',
    },
    {
      text: 'About',
      href: '/#about',
    },
  ],
  actions: [{ text: 'Contact', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Our Services',
      links: [
        {
          text: 'Websites',
          href: '/services/websites',
        },
        {
          text: 'Web Applications & Custom Software',
          href: '/services/web-applications',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/#about' },
        { text: 'Our Process', href: '/#our-process' },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms of Service', href: '/terms' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'FREE Technical Score of your website', href: 'https://pagespeed.web.dev/' },
        { text: 'Blog', href: '/blog' },
        { text: 'Case Studies', isComingSoon: true },
        { text: 'Start-up Toolkit', isComingSoon: true },
        { text: 'Tech Stack Overview', isComingSoon: true },
        { text: 'AI Playbook', isComingSoon: true },
      ],
    },
    {
      title: 'Get in touch',
      links: [
        { text: 'Get in touch', href: '/contact' },
        { text: 'Book a FREE Discovery Call ', href: 'https://calendly.com/causewaysoft' },
        { text: "We love ambitious ideas. Let's build something legendary together." },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
     Made with ❤️ by CausewaySoft © All rights reserved.<br/>
     CausewaySoft LTD is a company registered in Northern Ireland with company number NI669195.
  `,
};
