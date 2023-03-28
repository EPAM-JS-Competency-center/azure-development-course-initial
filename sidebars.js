/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docs: [
    'intro',
    {
      type: 'category',
      label: '01-serving-spa-in-azure',
      items: [
        'serving-spa-in-azure/some-page'
      ]
    },
    {
      type: 'category',
      label: '04-working-with-serverless-api',
      items: [
        'working-with-serverless-api/Introdusing-to-module',
        'working-with-serverless-api/Introduction-to-Azure-Functions',
        'working-with-serverless-api/work-with-core-tools',
        'working-with-serverless-api/serverless-framework',
        'working-with-serverless-api/app-configuration',
        'working-with-serverless-api/task'
      ]
    }
  ]
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
