const sidebars = {
  tutorialSidebar: [
    'intro',

    // ── Getting Started ──────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },

    // ── Core Features ────────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Core Capabilities',
      items: [
        'features/code-editor',
        'features/keyboard-shortcuts',
        'features/static-analysis',
        'features/code-fixes',
        'features/compile-and-flash',
        'features/serial-monitor',
        'features/hardware-registers',
        'features/terminal',
      ],
    },

    // ── Safety & Compliance ──────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Safety & Compliance',
      items: [
        'features/deviation-management',
        'features/tara-integration',
        'features/reports-and-sbom',
      ],
    },

    // ── Automotive Workflows ─────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Automotive Workflows',
      items: [
        'automotive-workflows/embedded-development',
        'automotive-workflows/safety-compliance',
      ],
    },

    // ── Project Management ───────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Project Management',
      items: [
        'project-management/workspace',
      ],
    },

    // ── Configuration ────────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/settings',
        'configuration/policy',
      ],
    },

    // ── Automation & Productivity ────────────────────────────────────────────
    {
      type: 'category',
      label: 'Automation & Productivity',
      items: [
        'automation/productivity',
      ],
    },

    // ── Top-level reference pages ────────────────────────────────────────────
    'best-practices',
    'troubleshooting',

    // ── Technical Specifications ─────────────────────────────────────────────
    {
      type: 'category',
      label: 'Technical Specifications',
      collapsed: true,
      items: [
        'specifications/editor-specs',
        'specifications/safety-specs',
        'specifications/hardware-specs',
        'specifications/build-specs',
      ],
    },

    // ── API Reference ────────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: [
        'api/terminal-cmds',
      ],
    },
  ],
};

module.exports = sidebars;
