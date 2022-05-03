module.exports = {
  lang: 'zh-CN',
  title: 'MyBlog',
  description: '随便写写',
  logo: '/assets/img/logo.png',
  lastUpdated: true,

  themeConfig: {
    repo: 'vuejs/vitepress',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    base:'./docs/',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '分类',
        link: '/config/basics',
        items: [
          { text: '主页', link: '/' },
          { text: '主页', link: '/' },
        ]
      },
      {
        text: '我的gitee',
        link: 'https://gitee.com/zpx88688'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      // '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
}


function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Deploying', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'API Reference', link: '/guide/api' },
      ]
    }
  ]
}

// function getConfigSidebar() {
//   return [
//     {
//       text: 'App Config',
//       children: [{ text: 'Basics', link: '/config/basics' }]
//     },
//     {
//       text: 'Theme Config',
//       children: [
//         { text: 'Homepage', link: '/config/homepage' },
//         { text: 'Algolia Search', link: '/config/algolia-search' },
//         { text: 'Carbon Ads', link: '/config/carbon-ads' }
//       ]
//     }
//   ]
// }
