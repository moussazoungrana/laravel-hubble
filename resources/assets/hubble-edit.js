(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{0:function(t,e,n){"use strict";function r(t,e,n,r,s,a,i,o){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):s&&(l=o?function(){s.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},21:function(t,e,n){"use strict";n.r(e);var r={name:"dashboard-edit",data:function(){return{formData:{}}},components:{HubbleForm:n(4).a},props:{resource:{type:Object,required:!0},item:{type:Object,required:!0}},computed:{fields:function(){return Object.values(this.resource.fields)}},methods:{input:function(t,e){this.$set(this.formData,t,e)}},created:function(){var t=this;this.fields.forEach((function(e){t.input(e.name,t.item[e.name])}))}},s=n(0),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container dashboard--container dashboard--edit"},[n("header",{staticClass:"header"},[n("h2",{staticClass:"title"},[t._v("Modification - "+t._s(t.resource.title))])]),t._v(" "),n("section",{staticClass:"content--list"},[n("form",{attrs:{action:t.item["@urls"].update.url,method:"post"}},[n("input",{attrs:{type:"hidden",name:"_method",value:"PUT"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.resource.token}}),t._v(" "),n("hubble-form",{attrs:{resource:t.resource,"form-data":t.formData,type:"editing"},on:{input:t.input}}),t._v(" "),t._m(0)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form--actions"},[e("button",{staticClass:"btn btn-primary btn-normal btn-radius",attrs:{type:"submit"}},[this._v("Enregister")])])}],!1,null,"289a3b7b",null);e.default=a.exports},4:function(t,e,n){"use strict";var r={name:"hubble-form",props:{resource:{type:Object,required:!0},type:{type:String,default:"editing"},formData:{type:Object,default:function(){return{}}}},computed:{fields:function(){return Object.values(this.resource.fields)}},methods:{getValue:function(t){var e=this.formData[t.name];return null==e?t.attributes.defaultValue:e}}},s=n(0),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"table--list"},t._l(t.fields,(function(e,r){var s;return n("li",{key:"field-"+r,staticClass:"table--list--row",class:(s={},s["field-"+e.name+"-row"]=!0,s)},[n("label",{staticClass:"table--list--cell label--cell",attrs:{for:e.name}},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"table--list--cell input--cell"},[n(e.components[t.type],t._b({tag:"component",attrs:{"form-data":t.formData,field:e,value:t.getValue(e)},on:{input:function(n){return t.$emit("input",e.name,n)}}},"component",e.attributes,!1))],1)])})),0)}),[],!1,null,null,null);e.a=a.exports}}]);