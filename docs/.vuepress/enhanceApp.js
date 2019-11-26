
import InfiniteSplitTableDemo from './components/InfiniteSplitTableDemo'

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
  }) => {
    // ...做一些其他的应用级别的优化
    Vue.component('InfiniteSplitTableDemo',InfiniteSplitTableDemo);
    router.beforeEach((to, from, next) => {
      // @pdai: 对每个页面点击添加百度统计
      console.log('hmt=',typeof _hmt)
      if(typeof _hmt!='undefined'){
          if (to.path) {
              _hmt.push(['_trackPageview', to.fullPath]);
          }
      }
      
      // continue
      next();       
  })
  }