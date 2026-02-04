const sidebars = {
  tutorialSidebar: [
    'intro', // Matches the 'id' at top of intro.md
    {
      type: 'category',
      label: 'System Specifications',
      items: [
        'specifications/editor-specs', 
        'specifications/safety-specs',
        'specifications/hardware-specs',
        'specifications/build-specs'
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api/terminal-cmds'],
    },
  ],
};
module.exports = sidebars;