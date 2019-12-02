module.exports = {
  title: '秦羽的博客',
  description: 'Qinyu\'s blog',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    // meta
    ["meta", {name: "robots", content: "all"}],
    ["meta", {name: "author", content: "秦羽"}],
    ["meta", {name: "keywords", content: "Python笔记, Vue笔记, Linux笔记"}],

    ['script', {}, `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?78211cc0bb0086ea217533a8f283d678";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `]
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'Python', link: '/Python/' },
      {text: 'Vue', link: '/Vue/' },
      {text: 'Linux', link: '/Linux/' },
      {text: 'Other', link: '/Other/' },
      {text: 'InfiniteSplitTable', link: '/InfiniteSplitTable' },
      // {text: 'Pictures', link: '/Pictures/' },
      {text: 'GitHub', link: 'https://github.com/shanghaobo'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
  plugins: [
    'vuepress-plugin-baidu-autopush'
  ]
};
