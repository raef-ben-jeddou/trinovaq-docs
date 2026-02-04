// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TrinovaQ Studio',
  tagline: 'Automotive Safety & Compliance IDE',
  url: 'https://trinovaq.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment config (we'll use this later)
  organizationName: 'raef-ben-jeddou', 
  projectName: 'trinovaq-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,  

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this if you don't want a "Edit this page" link
          editUrl: 'https://github.com/raef-ben-jeddou/trinovaq-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
module.exports = config;

export default config;
