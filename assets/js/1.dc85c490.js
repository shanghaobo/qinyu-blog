(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{170:function(t,e,a){},249:function(t,e,a){"use strict";var i=a(170);a.n(i).a},254:function(t,e,a){"use strict";a.r(e);var i={name:"InfiniteSplitTable",props:["tree_data","deep"],computed:{for_data:function(){var t=this.tree_data.type,e=this.tree_data.data,a=[];if("row"===t)a.push(e);else if("column"===t)for(var i=0;i<e.length;i++)a.push([e[i]]);return a}}},n=(a(249),a(17)),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"infinite-split-table",class:{"top-border":0==t.deep,"left-border":0==t.deep},attrs:{cellpadding:"0",cellspacing:"0"}},[t._l(t.for_data,(function(e){return a("tr",{staticStyle:{width:"100%"},style:{height:void 0!==e[0].height?e[0].height:"auto"}},t._l(e,(function(e){return a("td",{style:{width:void 0!==e.width?e.width:"auto"}},["row"!=e.type&&"column"!=e.type?a("div",{staticClass:"text"},["label"==e.type?a("span",[t._v("\n            "+t._s(e.data)+"\n          ")]):t._e()]):a("infinite-split-table",{attrs:{tree_data:e,deep:t.deep+1}})],1)})),0)}))],2)}),[],!1,null,"1bad96ba",null);e.default=r.exports}}]);