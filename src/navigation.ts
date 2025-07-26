import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Homes',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Our Services',
      href: '/#services',
    },
    {
      text: 'About Us',
      href: '/#about-us',
    },
    {
      text: 'Our Process',
      href: '/#our-process',
    },
    {
      text: 'FAQ',
      href: '/#faq',
    },
  ],
  actions: [{ text: 'Contact Us', href: '/#contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Our Services',
      links: [
        { text: 'Websites'},
        { text: 'Web Applications'},
        { text: 'Progressive Web Apps (PWAs)'},
        { text: 'Hybrid Mobile Apps'},
        { text: 'Chrome Extensions'},
        { text: 'AI-Powered Solutions'}
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/#about-us' },
        { text: 'Our Process', href: '/#our-process' },
        { text: 'FAQ', href: '/#faq' },
        { text: 'No Cookie Policy', href: '#' },
        { text: 'Privacy Policy', href: '#' },
        { text: 'Terms of Service', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', isComingSoon: true },
        { text: 'Case Studies', isComingSoon: true },
        { text: 'Start-up Toolkit', isComingSoon: true },
        { text: 'Tech Stack Overview', isComingSoon: true },
        { text: 'AI Playbook', isComingSoon: true },
      ],
    },
    {
      title: 'Get in touch',
      links: [
        { text: 'Contact Us', href: '/#contact' },
        { text: 'Book a FREE Discovery Call ', href: 'https://calendly.com/causewaysoft' },
        { text: 'We love ambitious ideas. Let’s build something legendary together.'},
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
