(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{724:function(t,s,e){},759:function(t,s,e){"use strict";var i=e(724);e.n(i).a},764:function(t,s,e){"use strict";e.r(s);var i={name:"DemoPage",props:["title","description"],data:function(){return{isShow:!1,codeTextBtn:"显示代码"}},methods:{handleToggleShow:function(){this.isShow=!this.isShow,this.codeTextBtn=this.isShow?"隐藏代码":"显示代码"}}},o=(e(759),e(71)),a=Object(o.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code"},[e("div",{staticClass:"code--title"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("small",[t._v(t._s(t.description))])]),t._v(" "),e("div",{staticClass:"code--demo"},[e("div",{staticClass:"code-content"},[t._t("default")],2)]),t._v(" "),e("el-collapse-transition",[t.isShow?e("div",{staticClass:"code--segment"},[t._t("codeText")],2):t._e()]),t._v(" "),t.$slots.codeText?e("div",{staticClass:"code--button",on:{click:t.handleToggleShow}},[e("i",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"el-icon-caret-top"}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"el-icon-caret-bottom"}),t._v(" "),e("span",[t._v(t._s(t.codeTextBtn))])]):t._e()],1)}),[],!1,null,"92963896",null);s.default=a.exports}}]);