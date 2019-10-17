module.exports = {
  title: 'ZNH博客',
  description: '记录并分享互联网技术',
  // 主题设置
  themeConfig: {
    // 获取每个文件的最后一次 git 提交的 UNIX 时间戳（ms）
    lastUpdated: 'Last Updated',
    displayAllHeaders: true, // 默认值：false
    //home:true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    // 侧边栏
    sidebarDepth: 2,
    sidebar: {
      '/区块链/':[
        '主流共识算法',
        '安装caliper'
      ],
      '/人工智能/':[
        '集成算法'
      ],
      '/Web前端/':[
        'vue中组件之间的通讯方式'
      ],
      '/后端编程/':[
        'protobuf'
      ],
      '/':[
        '/',
        '主流共识算法',
        '/contact',
        '/about',
        {
          title: '区块链',
          collapsable: false,
          children: [
            '/区块链/主流共识算法'
          ]
        },
        {
          title: '人工智能',
          //collapsable: false,
          children: [
            '/人工智能/集成算法'
          ]
        },
        {
          title: 'Web前端',
          children: [ /* ... */ ]
        },
        {
          title: '后端编程',
          children: [ /* ... */ ]
        }        
      ]
    },
    // 刷新内容的弹窗
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    }    
  }
}