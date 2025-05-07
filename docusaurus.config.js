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
          // Keep docs at /docs path for now until we fix the issue
          // routeBasePath: '/',
        },
        // Keep the regular blog
        blog: {
          showReadingTime: true,
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
          // Documentation link points to /docs for now
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
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started/getting-started-index',
              },
              {
                label: 'Store Configuration',
                to: '/docs/store-setup/connect-custom-domain',
              },
              {
                label: 'Products',
                to: '/docs/products/products-index',
              },
              {
                label: 'Payments',
                to: '/docs/payments/payments-index',
              },
              {
                label: 'Shipping',
                to: '/docs/shipping/shipping-index',
              },
              {
                label: 'Taxes',
                to: '/docs/taxes/taxes-index',
              },
              {
                label: 'Marketing',
                to: '/docs/marketing/marketing-index',
              },
              {
                label: 'Store Management',
                to: '/docs/store-management/store-management-index',
              },
              {
                label: 'Account',
                to: '/docs/account/account-index',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Changelog',
            items: [
              {
                label: 'V1.0.0',
                to: '/changelog/version-1.0.0',
              },
              {
                label: 'V2.0.0',
                to: '/changelog/version-2.0.0',
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
