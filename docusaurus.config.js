// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TrinovaQ Studio',
  tagline: 'Automotive Safety & Compliance IDE',
  url: 'https://docs.trinovaq.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // 1. This controls the tab icon. Make sure you replace this file in static/img/
  favicon: 'img/logo.ico', 

  organizationName: 'raef-ben-jeddou', 
  projectName: 'trinovaq-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // 2. This removes the "Welcome" landing page and puts docs at the root
          routeBasePath: '/', 
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/raef-ben-jeddou/trinovaq-docs/edit/main/',
        },
        blog: false, // Disabling blog for now to keep it clean
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 3. THIS SECTION WAS MISSING. It controls the Navbar and Logo.
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TrinovaQ Specs', // Text next to logo (optional, delete line to remove)
        logo: {
          alt: 'TrinovaQ Studio Logo',
          src: 'img/logo.jpg',         // Ensure you uploaded logo.png to static/img/
          href: 'https://trinovaq.io', // <--- This redirects clicking the logo to your main site
          target: '_self',             // Opens in the same tab
        },
        items: [
          // You can add more links here later (e.g., GitHub repo link)
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} TrinovaQ`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;