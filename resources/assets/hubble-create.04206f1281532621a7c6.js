(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{77:function(t,e,a){"use strict";a.r(e);var r={name:"dashboard-create",data:function(){return{formData:{},creating:!1}},components:{},props:{resource:{type:Object,required:!0},item:{type:Object,default:function(){return{}}}},computed:{fields:function(){return Object.values(this.resource.fields)}},methods:{input:function(t,e){this.$set(this.formData,t,e)}},created:function(){var t=this;this.fields.forEach((function(e){e.attributes.isFile?t.input(e.name+"_files",t.item[e.name]):t.input(e.name,t.item[e.name])}))}},s=a(0),n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container dashboard--container dashboard--edit"},[a("header",{staticClass:"header"},[a("h2",{staticClass:"title"},[t._v(t._s(t.resource.config.title))])]),t._v(" "),a("section",{staticClass:"content--list"},[a("form",{attrs:{method:"post",action:t.resource.urls.store.url,enctype:"multipart/form-data"}},[a("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.resource.token}}),t._v(" "),a("hubble-form",{attrs:{item:t.item,resource:t.resource,fields:Object.values(t.resource.fields),"form-data":t.formData,type:"creating"},on:{input:t.input}}),t._v(" "),a("div",{staticClass:"form--actions"},[a("button",{staticClass:"btn btn-primary btn-normal btn-radius",attrs:{type:"submit"}},[t._v(t._s(t.$t("dashboard.save")))])]),t._v(" "),t._l(t.resource.panels,(function(e,r){return a(e.component,{key:r,tag:"component",attrs:{page:"create",resource:t.resource,"form-data":t.formData,panel:e},on:{input:t.input}})}))],2)])])}),[],!1,null,"65578c4b",null);e.default=n.exports}}]);