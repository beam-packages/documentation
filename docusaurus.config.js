// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs,
// JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BEAM Package Registry',
  tagline: 'Use Spark, the BEAM package manager, to interact with it.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.beam-packages.org',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'beam-packages',
  projectName: 'documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/beam-packages/documentation/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BEAM Package Registry',
        logo: {
          alt: 'BEAM Package Registry Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Registry',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Spark',
          },
          {
            href: 'https://github.com/beam-packages',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Erlangsters Community',
            items: [
              {
                label: 'Website',
                href: 'https://www.erlangsters.org',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/bRmy5hQbTh',
              },
              {
                label: 'Twitter/X',
                href: 'https://x.com/erlangsters',
              },
              {
                label: 'Github',
                href: 'https://github.com/erlangsters'
              }
            ],
          },
          {
            title: 'OTPless Erlang',
            items: [
              {
                label: 'Website',
                href: 'https://www.otpless-erlang.org',
              },
              {
                label: 'Documentation',
                href: 'https://docs.otpless-erlang.org',
              },
              {
                label: 'Twitter/X',
                href: 'https://x.com/otpless-erlang',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/otpless_erlang'
              },
              {
                label: 'Github',
                href: 'https://github.com/otpless-erlang'
              }
            ],
          },
          {
            title: 'BEAM Package Registry',
            items: [
              {
                label: 'Website',
                href: 'https://www.otpless-erlang.org'
              },
              {
                label: 'Twitter/X',
                href: 'https://x.com/beam-packages'
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/beam_packages'
              },
              {
                label: 'Github',
                href: 'https://github.com/beam-packages'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
