import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { Pre } from './components/pre'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 206 246" fill="none">
        <circle cx="40" cy="40" r="40" fill="currentColor"/>
        <circle cx="40" cy="206" r="40" fill="currentColor"/>
        <circle cx="166" cy="120" r="40" fill="currentColor"/>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        大模型学习指南
      </span>
    </>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
  ],
  head: function UseHead() {
    const { title } = useConfig()
    return (
    <>
      <title>{title ? title + ' | 智革科技': '智革科技'} </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="大模型学习指南" />
      <meta property="og:description" content="A Comprehensive Overview of Prompt Engineering" />
      <meta
          name="og:title"
          content={title ? title + ' | 智革科技' : '智革科技'}
        />
      <link rel="icon" href="/144-favicon.svg" type="image/svg+xml" />

        <link
          rel="icon"
          href="/144-favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
    </>
  )},
  // project: {
  //   link: 'https://github.com/AdamLeeN/Prompt-Engineering-Guide',
  // },
  // chat: {
  //   link: 'https://discord.gg/FUyz9vPAwf',
  // },
  docsRepositoryBase: 'https://github.com/AdamLeeN/Prompt-Engineering-Guide/tree/main/',
  footer: {
    text: (
      <>
        Copyright © 2024 <a href="https://beian.miit.gov.cn/" target="_blank">备案号:</a> <a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2023008515号-2</a>
      </>
    )
  },
  search: {
    placeholder: '搜索...',
  },
  components: {
    pre: Pre,
  },
}

export default config
