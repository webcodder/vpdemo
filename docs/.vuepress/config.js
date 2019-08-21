/* module.exports = {
    title: 'Chen\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '前端基础', link: '/accumulate/' },
        {text: '算法题库', link: '/algorithm/'},
        {text: '微博', link: 'https://baidu.com'},      
        {text: 'test', link: '/test/test.md'}      
      ],
      sidebar: 'auto', // 侧边栏配置
    sidebar: {
        sidebar:{
            // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
            '/accumulate/': [
                '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
                {
                  title: '侧边栏下拉框的标题1',
                  children: [
                    '/accumulate/JS/test', // 以docs为根目录来查找文件 
                    // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                    // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                  ]
                }
              ],
              // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
              '/algorithm/': [
                '/algorithm/', 
                {
                  title: '第二组侧边栏下拉框的标题1',
                  children: [
                    '/algorithm/simple/test' 
                  ]
                }
              ]
          }
    },
      sidebarDepth: 2, // 侧边栏显示2级
    }
  }; */

  
/* module.exports = {
    title: '网站标题',
    description: '网站描述',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    // base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    sidebar:{
        // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
        '/accumulate/': [
            '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
            {
              title: '侧边栏下拉框的标题1',
              children: [
                '/accumulate/JS/test', // 以docs为根目录来查找文件 
                // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
              ]
            }
          ],
          // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
          '/algorithm/': [
            '/algorithm/', 
            {
              title: '第二组侧边栏下拉框的标题1',
              children: [
                '/algorithm/simple/test' 
              ]
            }
          ]
      }
    }
  }; */





  module.exports = {
    title: "yhlben的前端日志",
    description: "欢迎访问我的前端日志",
    ga: "UA-121061441-1",
    markdown: {
      lineNumbers: true
    },
    head: [
      ['link', { rel: 'icon', href: '/hero.jpeg' }]
    ],
    themeConfig: {
      repo: "yhlben/blog",
      nav: [
        {
          text: "博客",
          link: "/blog/"
        },
        {
          text: "面试题",
          link: "/interview/"
        },
        {
          text: "阅读",
          link: "/book/"
        },
      ],
      sidebar: {
        "/blog/": [
          {
            title: 'DevOps',
            collapsable: false,
            children: [
              "devops-kubernetes",
              "devops-docker",
              "devops-git",
              "devops-dependencies",
              "devops-image",
              "devops-performance",
              "devops-commitlint",
              "devops-test",
              "devops-webpack-entry",
              "devops-webpack-flow",
              "devops-webpack",
              "devops-cdfang-spider",
            ]
          },
          {
            title: 'Framework',
            collapsable: false,
            children: [
              "library-node",
              "library-react",
              "libary-react-core",
              "library-react-code-1",
              "library-react-code-2",
              "library-react-code-3",
              "library-react-code-4",
              "library-react-ssr",
              'library-react-hooks',
              "library-vue",
              "library-miniProgram",
              "library-redux",
              "library-rxjs",
              "library-koa",
              "library-koa-diy",
            ]
          },
          {
            title: 'CSS',
            collapsable: false,
            children: [
              "css",
              "css-next",
              "css-useful",
              "css-devicePixelRatio",
              "css-houdini-star",
            ]
          },
          {
            title: '网络协议',
            collapsable: false,
            children: [
              "osi-http",
              "osi-https",
              "osi-tcp",
              "osi-web-security",
              'osi-web-login',
              "osi-hijack",
            ]
          },
          {
            title: '运维相关',
            collapsable: false,
            children: [
              "operation-docker-micro-service",
              "operation-linux",
              "operation-linux-login",
              "operation-nginx-load-balancing",
            ]
          },
          {
            title: 'JS 基础',
            collapsable: false,
            children: [
              "js-promise",
              'js-this',
              'js-operator-priority',
              "js-jsBridge",
              "js-module",
              "js-inherit",
              "js-event",
              "js-form",
              "js-html5-program",
              "js-recursion",
              "js-object-ergodic",
            ]
          },
          {
            title: '编程基础',
            collapsable: false,
            children: [
              "base-ioc",
              "base-functional",
              "base-structure",
              "base-structure-base-select",
              "base-structure-base-sort",
              "base-structure-high-algorithm",
              "base-structure-senior-sort",
              "base-design-pattern",
              "base-computer"
            ]
          },
          {
            title: '总结思考',
            collapsable: false,
            children: [
              "2019-6",
              "2018",
              "frontend",
            ]
          },
          {
            title: '其它',
            collapsable: false,
            children: [
              "other-tools",
              "other-vscode",
            ]
          },
        ],
        "/interview/": [
          {
            title: '前端',
            collapsable: false,
            children: [
              "js",
              "css",
              "html",
              "framework"
            ]
          },
          {
            title: '编程基础',
            collapsable: false,
            children: [
              "base",
              "suanfa"
            ]
          },
        ],
        "/book/": [
          {
            title: '技术相关',
            collapsable: false,
            children: [
              "book-nodejs",
              "book-microfront",
              "book-webgl",
              "book-maintainable-js",
              "book-how-network-connect",
              "book-regular",
              "book-code",
              "book-http2",
              "book-http-graph"
            ]
          },
        ],
      },
      lastUpdated: "更新时间",
      docsDir: "docs",
      editLinks: true,
      editLinkText: "本文源码地址"
    },
    plugins: {
      '@vuepress/medium-zoom': {
        selector: 'img',
        options: {
            margin: 16
        }
      },
      '@vuepress/back-to-top':true
    }
  };