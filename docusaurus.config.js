// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eCommerce',
  tagline: 'Documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Store.icu', // Usually your GitHub org/user name.
  projectName: 'eCommerce Docs', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Make docs the default landing page
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/michielgrotenhuis/docs/edit/main/',
        },
        // Keep the regular blog
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/michielgrotenhuis/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // Add a custom plugin for the changelog
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'changelog',
        path: 'changelog',
        routeBasePath: 'changelog',
        blogTitle: 'eCommerce Changelog',
        blogDescription: 'Keep track of all updates and new features',
        blogSidebarTitle: 'Recent Releases',
        blogSidebarCount: 10,
        showReadingTime: false,
        postsPerPage: 10,
        // Optional: you can customize the blog post URL format
        editUrl:
          'https://github.com/michielgrotenhuis/docs/edit/main/',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'eCommerce',
        logo: {
          alt: 'eCommerce Logo',
          src: 'img/logo.svg',
        },
        items: [
          // Documentation link now points to root path
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // Keep the original blog
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          // Add the changelog
          {
            to: '/changelog',
            label: 'Changelog',
            position: 'left'
          },
          {
            href: 'https://github.com/michielgrotenhuis/docs',
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
                label: 'Documentation',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Changelog',
                to: '/changelog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/michielgrotenhuis/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eCommerce.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
