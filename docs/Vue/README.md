# Vue笔记

## Vue自定义配置项
- config.js
```js
export default{
  a:1,
  b:2
}
```

- component.vue
```js
<template>
    <div>
        {{config.a}}
        {{config.b}}
    </div>
</template>
<script>
import config from 'config.js'
</script>
```

## Vue判断变量是否存在
```js
if(typeof a!="undefined"){
  console.log("true");
}
```

## Vue Element Input设置焦点
```html
<el-input ref="myinput" type="input" v-model="mydata"></el-input>
```
```js
this.$refs.myinput.$refs.input.focus();
```

## Vue封装点击编辑组件
- 演示

![演示](/images/InputClickDemo.gif)

- 使用

```js
<input-click :data.sync="value"></input-click>
```

- 组件代码

```js
// InputClick.vue
<template>
  <div class="input-click-main" @click="myclick">
    <div style="width: 100%" v-show="show">{{mydata}}</div>
    <el-input v-if="type==1" ref="myinput" type="input" v-model="mydata" v-show="!show" @blur="myblur"></el-input>
    <el-input v-else ref="myinput" type="textarea" :rows="5" v-model="mydata" v-show="!show" @blur="myblur"></el-input>
  </div>
</template>
<script>
  export default{
//    props:['data','type'],
    props:{
      data:{
        type:String,
        default:''
      },
      type:{
        type:Number,
        default:1
      }
    },
    data(){
      return{
        show:true,
        mydata:this.data
      }
    },
    methods:{
      myclick(){
        this.show=false;
         if(this.type==1){
           this.$nextTick(_ => {
            this.$refs.myinput.$refs.input.focus();
          });
         }
         else{
           this.$nextTick(_ => {
            this.$refs.myinput.$refs.textarea.focus();
          });
         }
      },
      myblur(){
        this.show=true;
      },
    },
    watch:{
      mydata:{
        handler(val){
          this.$emit('update:data',val);
        },
        deep:true,
      },
      data:{
        handler(val){
          this.mydata=this.data;
        },
        deep:true,
      }
    }
  }
</script>
<style>
  .input-click-main{
    /*width: 100%;*/
    min-height: 50%;
    min-width: 50%;
    display: inline-block;
    cursor: pointer;
  }
</style>

```

## Vue常用函数
### 变异方法
- push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

- pop() 方法用于删除并返回数组的最后一个元素。

- shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

- unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。

- splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

- sort() 方法用于对数组的元素进行排序。

- reverse() 方法用于颠倒数组中元素的顺序。

### 替换数组
- filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

- concat() 方法用于连接两个或多个数组。

- slice() 方法可从已有的数组中返回选定的元素。

### 其他
- split() 方法用于把一个字符串分割成字符串数组。

## Vue字符串变量渲染

```js
//获取变量值
getVariable(str,value_data){
  let list=str.split('.');
  let result=value_data;
  for(let i=0;i<list.length;i++){
    let temp=list[i];
    let left=temp.indexOf('[');
    let right=temp.indexOf(']');
    if(left!==-1&&right!==-1){
      let temp_variable=temp.substring(0,left);
      result=result[temp_variable];
    }
    else{
      result=result[temp];
    }
    while(left!==-1&&right!==-1){
      let index=temp.substring(left+1,right);
      result=result[index];
      temp=temp.replace('['+index+']','');
      left=temp.indexOf('[');
      right=temp.indexOf(']');
    }
  }
  console.log(result);
  return result;
}

```
- 测试变量对象
```js
value_data:{
  test:{
    a:[
      [{
        b:'1'
      },
      {
        b:'2'
      }],
      [{
        b:'1'
      },
      {
        b:'2'
      }]
    ]
  }
}
```
- 测试调用
```js
let str='test.a[0][0].b';
let result=this.getVariable(str,this.value_data);
console.log(result);
```
- 输出
```js
1
```

## Vuepress添加百度统计
- config.js
```js
head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['script', {}, `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxxxxxxxx";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `]
  ],
```

- enhanceApp.js
```js
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
  }) => {
    // ...做一些其他的应用级别的优化
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
```

## Vue利用router打开新页面
```js
let routeData=this.$router.resolve({
  name:'name',
  path:'newpage',
  query:this.$route.query,
  params:this.$route.params
});
window.open(routeData.href,'_blank');
```

## npm install查看详情
```
npm install --verbose
```

## vue 解决循环引用组件报错

做项目时遇到使用循环组件，因为模式一样，只有数据不一样。但是按照普通的组件调用格式来做时报错，错误信息为Unknown custom element: <pop> - did you register the component correctly? For recursive components, make sure to provide the "name" option.

查询了官方文档，还有其他的资料，发现是循环调用组件时，组件比vue实例后创建，官方文档里写组件必须先于实例化引入，所以说组件没有正确的引入。

解决的方式是全局引入组件，并且在vue实例化前。

具体代码如下：若在项目中，一般是在main.js里引入

```js
import pop from "@/views/popViews/pop.vue"
Vue.component('questionPop', questionPop)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
```

## electron安装报错解决方法
windows在“C:\Users\username\”目录下
macOS 在"/Users/username/"目录下
新建 .npmrc 文件，复制内容如下：
```
registry=https://registry.npm.taobao.org/
electron_mirror="https://npm.taobao.org/mirrors/electron/"
```
