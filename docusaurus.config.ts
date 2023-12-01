import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const url =
  process.env.NODE_ENV !== 'development'
    ? 'https://cnosdb.com'
    : 'http://localhost:3000';
const config: Config = {
  title: 'CnosDB',
  tagline: 'CnosDB are cool',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CnosDB', // Usually your GitHub org/user name.
  projectName: 'cnosdb.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      // 如果你不需要覆盖默认值，你可以忽略这个语言（比如 zh-Hans）
    },
  },

  scripts: [
    // Community event 需要引入如下js文件
    {
      src: 'https://static.elfsight.com/platform/platform.js',
      defer: true,
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      // defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'CnosDB',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.png',
      },
      items: [
        // right
        {
          label: 'Cloud',
          href: 'https://www.cnosdb.com/cnosdb-cloud-waitlist/',
          position: 'right',
        },
        {
          label: 'CnosDB 2.0',
          to: '/cnosdb-2-0',
          position: 'right',
        },
        {
          label: 'Documentation',
          href: 'https://docs.cnosdb.com',
          position: 'right',
        },
        {
          label: 'Blog',
          to: 'blog',
          position: 'right',
        },
        {
          label: 'Community',
          to: '/community',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/cnosdb/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Meta Open Source Logo',
        src: 'img/meta_oss_logo.png',
        href: 'https://opensource.fb.com',
        width: 160,
        height: 51,
      },
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'CnosDB 2.0',
              to: 'cnosdb-2-0',
            },
            {
              label: 'Documentation',
              to: 'https://docs.cnosdb.com',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/cnosdb/cnosdb',
            },
          ],
        },
        {
          title: 'Subscribe to Newsletter',
          items: [],
        },
      ],
      copyright: `CnosDB © ${new Date().getFullYear()}`,
    },
    algolia: {
      appId: '4O093YZHL1',
      apiKey: 'b02a6bb324334323de977f71e73d06d0',
      indexName: 'cnosdb',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
