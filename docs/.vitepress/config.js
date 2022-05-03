module.exports = {
  lang: 'zh-CN',
  title: 'MyBlog',
  description: '随便写写',
  logo: '././public/logo.png',
  themeConfig: {
    docsDir: 'docs',
    docsBranch: 'main',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '分类',
        link: '/config/basics',
        items: [
          { text: 'React', link: '/' },
          { text: 'Vue', link: '/' },
          { text: 'JavaScript', link: '/' },
          { text: 'Python', link: '/' },
          { text: 'FastApi', link: '/' },
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
      text: '《重构-改善既有代码的设计》',
      children: [
        { text: '重构，第一个示例', link: '/readingNotes/《重构-改善既有代码的设计》/《第1章》' },
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
