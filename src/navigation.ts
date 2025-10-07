import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
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
      links: [
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
        {
          text: 'Contact Us',
          href: '/#contact',
        },
      ],
    },
    {
      text: 'Services',
      href: '/services',
      links: [
        {
          text: 'About our Services',
          href: '/services',
        },
        {
          text: "Websites",
          href: '/services/websites',
        },
        {
          text: "Web Applications",
          href: '/services/web-applications',
        },
        {
          text: "Progressive Web Apps (PWA)",
          href: '/services/progressive-web-apps',
        },
        {
          text: "Hybrid Mobile Apps",
          href: '/services/hybrid-apps',
        },
        {
          text: "AI-Powered Solutions",
          href: '/services/ai-agents-solutions',
        },
        {
          text: "Chrome Extensions",
          href: '/services/chrome-extensions',
          icon: 'tabler:brand-chrome',
        }
      ],
    },
    {
      text: 'About Us',
      href: '/#about-us',
    },
    {
      text: 'Our Process',
      href: '/#our-process',
    },

  ],
  actions: [{ text: 'Contact Us', href: '#contact'}],
};

export const footerData = {
  links: [
    {
      title: 'Our Services',
      links: [
        {
          text: 'About our Services',
          href: '/services',
        },
        {
          text: "AI-Powered Solutions",
          href: '/services/ai-agents-solutions',
        },
        {
          text: "Websites",
          href: '/services/websites',
        },
        {
          text: "Web Applications",
          href: '/services/web-applications',
        },
        {
          text: "Progressive Web Apps (PWA)",
          href: '/services/progressive-web-apps',
        },
        {
          text: "Hybrid Mobile Apps",
          href: '/services/hybrid-apps',
        },
        {
          text: "Chrome Extensions",
          href: '/services/chrome-extensions',
        }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/#about-us' },
        { text: 'Our Process', href: '/#our-process' },
        { text: 'FAQ', href: '/#faq' },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms of Service', href: '/terms' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'FREE Technical Score of your website', href: 'https://pagespeed.web.dev/'},
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
        { text: 'Contact Us', href: '#contact' },
        { text: 'Book a FREE Discovery Call ', href: 'https://calendly.com/causewaysoft' },
        { text: "We love ambitious ideas. Let's build something legendary together."},
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
