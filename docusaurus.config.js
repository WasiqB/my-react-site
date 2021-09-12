const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Wasiq Bhamla',
  tagline: 'Dinosaurs are cool',
  url: 'https://wasiqb.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: 'WasiqB', // Usually your GitHub org/user name.
  projectName: 'my-react-site', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/WasiqB/my-react-site/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/WasiqB/my-react-site/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Wasiq Bhamla',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/WasiqB',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/5320558/wasiq-bhamla',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/WasiqBhamla',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/wasiqbhamla/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blogs',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/WasiqB',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wasiq Bhamla. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
