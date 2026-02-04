// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  // ... existing settings
  url: 'https://raef-ben-jeddou.github.io', // Use this base URL first
  baseUrl: '/trinovaq-docs/', // If your repo name is 'trinovaq-docs'
  
  // GitHub Deployment Config
  organizationName: 'raef-ben-jeddou', 
  projectName: 'trinovaq-docs', // MUST match your GitHub repo name exactly
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // ...
};
module.exports = config;

export default config;
