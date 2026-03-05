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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/raef-ben-jeddou/trinovaq-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TrinovaQ Studio',
        logo: {
          alt: 'TrinovaQ Studio Logo',
          src: 'img/logo.jpg',
          href: 'https://trinovaq.io',
          target: '_self',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/installation',
            position: 'left',
            label: 'Get Started',
          },
          {
            type: 'doc',
            docId: 'features/static-analysis',
            position: 'left',
            label: 'Features',
          },
          {
            type: 'doc',
            docId: 'automotive-workflows/embedded-development',
            position: 'left',
            label: 'Workflows',
          },
          {
            type: 'doc',
            docId: 'best-practices',
            position: 'left',
            label: 'Best Practices',
          },
          {
            href: 'https://trinovaq.io',
            label: 'trinovaq.io',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Introduction',       to: '/' },
              { label: 'Installation',       to: '/getting-started/installation' },
              { label: 'Quick Start',        to: '/getting-started/quick-start' },
              { label: 'Best Practices',     to: '/best-practices' },
              { label: 'Troubleshooting',    to: '/troubleshooting' },
            ],
          },
          {
            title: 'Features',
            items: [
              { label: 'Static Analysis',        to: '/features/static-analysis' },
              { label: 'Deviation Management',   to: '/features/deviation-management' },
              { label: 'TARA Integration',       to: '/features/tara-integration' },
              { label: 'Reports & SBOM',         to: '/features/reports-and-sbom' },
            ],
          },
          {
            title: 'Standards',
            items: [
              { label: 'MISRA C:2012',      to: '/features/static-analysis' },
              { label: 'ISO 26262',         to: '/automotive-workflows/safety-compliance' },
              { label: 'ISO/SAE 21434',     to: '/features/tara-integration' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TrinovaQ. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['c', 'rust', 'json', 'bash'],
      },
    }),
};

export default config;
