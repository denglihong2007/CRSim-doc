
import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from 'vuepress'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { seoPlugin } from '@vuepress/plugin-seo'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'CRSim 文档',
  description: '国铁信息显示模拟软件 CRSim 的使用和开发文档',

  bundler: viteBundler(),

  theme: hopeTheme({
    logo: './images/CRSimIcon.png',
    docsRepo: 'denglihong2007/CRSim-doc',
    docsDir: 'docs',
    docsBranch: 'master',
    changelog: false,
    navbar: [
      { text: '首页', link: '/' },
      { text: '开始使用', link: '/app/' },
      { text: '开发文档', link: '/dev/' },
      { text: '社区群组', link: '/community.html' },
    ],
    sidebar: {
      '/app/': [
        {
          title: '使用教程',
          collapsable: false,
          children: [
            '/app/key',
          ],
        },
      ],
    },
  }),

  plugins: [
    sitemapPlugin({
      hostname: 'docs.crsim.tech',
      devServer: true,
    }),
    seoPlugin({
      hostname: 'docs.crsim.tech',
    }),
  ],
})
