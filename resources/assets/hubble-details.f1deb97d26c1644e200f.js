(window.webpackJsonp=window.webpackJsonp||[]).push([[14,18],{4:function(t,e,n){"use strict";var i={name:"inline-loader",props:{fill:{type:String,default:"#fff"}}},a=n(0),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 120 30",fill:this.fill}},[e("circle",{attrs:{cx:"15",cy:"15",r:"14.7499"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),this._v(" "),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),this._v(" "),e("circle",{attrs:{cx:"60",cy:"15",r:"9.25014","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),this._v(" "),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),this._v(" "),e("circle",{attrs:{cx:"105",cy:"15",r:"14.7499"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),this._v(" "),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,"6e56a107",null);e.a=s.exports},5:function(t,e,n){"use strict";n.r(e);var i={name:"v-modal",props:{label:{type:String,default:""},cardClasses:{type:String,default:""}},methods:{close:function(){this.$emit("close"),this.$emit("input",!1)}}},a=n(0),s=Object(a.a)(i,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"model--wrapper"},[i("div",{staticClass:"modal--card",class:(t={},t[e.cardClasses]=!0,t)},[i("div",{staticClass:"modal--card-header"},[i("div",[e._t("header",[i("span",{staticClass:"title"},[e._v(e._s(e.label))])])],2),e._v(" "),i("div",{staticClass:"close-btn--wrapper"},[i("button",{staticClass:"close-btn",attrs:{type:"button"},on:{click:e.close}},[i("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M8.40994 7L12.7099 2.71C12.8982 2.5217 13.004 2.2663 13.004 2C13.004 1.7337 12.8982 1.47831 12.7099 1.29C12.5216 1.1017 12.2662 0.995911 11.9999 0.995911C11.7336 0.995911 11.4782 1.1017 11.2899 1.29L6.99994 5.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L5.58994 7L1.28994 11.29C1.19621 11.383 1.12182 11.4936 1.07105 11.6154C1.02028 11.7373 0.994141 11.868 0.994141 12C0.994141 12.132 1.02028 12.2627 1.07105 12.3846C1.12182 12.5064 1.19621 12.617 1.28994 12.71C1.3829 12.8037 1.4935 12.8781 1.61536 12.9289C1.73722 12.9797 1.86793 13.0058 1.99994 13.0058C2.13195 13.0058 2.26266 12.9797 2.38452 12.9289C2.50638 12.8781 2.61698 12.8037 2.70994 12.71L6.99994 8.41L11.2899 12.71C11.3829 12.8037 11.4935 12.8781 11.6154 12.9289C11.7372 12.9797 11.8679 13.0058 11.9999 13.0058C12.132 13.0058 12.2627 12.9797 12.3845 12.9289C12.5064 12.8781 12.617 12.8037 12.7099 12.71C12.8037 12.617 12.8781 12.5064 12.9288 12.3846C12.9796 12.2627 13.0057 12.132 13.0057 12C13.0057 11.868 12.9796 11.7373 12.9288 11.6154C12.8781 11.4936 12.8037 11.383 12.7099 11.29L8.40994 7Z",fill:"black"}})])])])]),e._v(" "),i("div",{staticClass:"modal--card-body"},[e._t("body")],2),e._v(" "),i("div",{staticClass:"modal--card-footer"},[e._t("footer")],2)])])}),[],!1,null,null,null);e.default=s.exports},77:function(t,e,n){"use strict";n.r(e);var i=n(5),a={name:"dashboard-details",data:function(){return{datum:{},openDeleteModal:!1,action:null,runningAction:!1,showActionComponent:!1}},components:{InlineLoader:n(4).a,VModal:i.default},props:{resource:{type:Object,required:!0},item:{type:Object,required:!0}},computed:{fields:function(){return Object.values(this.resource.fields)},actions:function(){return this.resource.actions},iconActions:function(){return this.actions.filter((function(t){return!!t.icon}))},selectActions:function(){return this.actions.filter((function(t){return!t.icon}))}},methods:{runIconAction:function(t){this.action=t,this.openAction()},fetchItem:function(t){var e=this;this.$axios.get(this.resource.urls.api.show).then((function(t){e.datum=t.data.data})).catch((function(t){if(404===t.response.status)try{Turbolinks.visit(e.resource.urls.index.url)}catch(t){window.location.href=e.resource.urls.index.url}}))},selectAction:function(t){var e=t.target.value;this.action=this.resource.actions[e]||null},closeAction:function(){this.showActionComponent=!1},actionRan:function(){this.selected=[],this.fetchItems({"after-running-action":!0})},openAction:function(){this.action&&("confirm-action"!==this.action.component||this.action.props.confirmMessage?this.showActionComponent=!0:this.runAction())},runAction:function(){var t=this;return this.runningAction=!0,this.$axios.post(this.action.url,{items:this.datum[this.resource.key]}).then((function(e){t.fetchItems({"after-running-action":!0})})).finally((function(e){t.runningAction=!1}))}},created:function(){this.datum=this.item}},s=n(0),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container dashboard--container dashboard--details"},[n("header",{staticClass:"header"},[n("h2",{staticClass:"title"},[t._v(t._s(t.resource.config.title))]),t._v(" "),n("div",{staticClass:"ctas"},[n("div",{staticClass:"ctas--wrapper"},[t.datum["@urls"].edit?n("a",{staticClass:"btn btn-normal btn-primary btn-radius",attrs:{href:t.datum["@urls"].edit.url,title:t.$t("dashboard.edit")}},[n("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M16.4001 3.33998L13.6601 0.59998C13.3024 0.264076 12.8338 0.0713388 12.3434 0.058432C11.8529 0.0455252 11.3748 0.213349 11.0001 0.52998L2.00005 9.52998C1.67682 9.85594 1.47556 10.2832 1.43005 10.74L1.00005 14.91C0.986582 15.0564 1.00559 15.2041 1.05571 15.3424C1.10584 15.4806 1.18585 15.6062 1.29005 15.71C1.38349 15.8027 1.49431 15.876 1.61615 15.9258C1.73798 15.9755 1.86845 16.0007 2.00005 16H2.09005L6.26005 15.62C6.71685 15.5745 7.14409 15.3732 7.47005 15.05L16.4701 6.04998C16.8194 5.68095 17.0082 5.18849 16.995 4.68052C16.9819 4.17254 16.768 3.69049 16.4001 3.33998V3.33998ZM6.08005 13.62L3.08005 13.9L3.35005 10.9L9.00005 5.31998L11.7001 8.01998L6.08005 13.62ZM13.0001 6.67998L10.3201 3.99998L12.2701 1.99998L15.0001 4.72998L13.0001 6.67998Z"}})])]):t._e(),t._v(" "),t.datum["@urls"].delete?n("button",{staticClass:"btn btn-radius btn-white btn-normal",attrs:{title:t.$t("dashboard.delete")},on:{click:function(e){e.stopPropagation(),t.openDeleteModal=!0}}},[n("svg",{attrs:{width:"19",height:"20",viewBox:"0 0 19 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M2.00293 18C2.00293 19.103 2.89993 20 4.00293 20H14.0029C15.1059 20 16.0029 19.103 16.0029 18V6H18.0029V4H14.0029V2C14.0029 0.897 13.1059 0 12.0029 0H6.00293C4.89993 0 4.00293 0.897 4.00293 2V4H0.00292969V6H2.00293V18ZM6.00293 2H12.0029V4H6.00293V2ZM5.00293 6H14.0029L14.0039 18H4.00293V6H5.00293Z"}}),t._v(" "),n("path",{attrs:{d:"M6.00293 8H8.00293V16H6.00293V8ZM10.0029 8H12.0029V16H10.0029V8Z"}})])]):t._e(),t._v(" "),t._l(t.iconActions,(function(e,i){return n("button",{key:"icon-action-"+i,staticClass:"btn btn-radius btn-white btn-normal",attrs:{title:e.title},on:{click:function(n){return n.stopPropagation(),t.runIconAction(e)}}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.runningAction!==e.name,expression:"runningAction !== action.name"}],attrs:{src:e.icon,alt:e.title}}),t._v(" "),n("inline-loader",{directives:[{name:"show",rawName:"v-show",value:t.runningAction===e.name,expression:"runningAction === action.name"}],attrs:{fill:"#000"}})],1)})),t._v(" "),t.selectActions.length>0?n("div",{staticClass:"resources--actions--wrapper"},[n("label",{staticClass:"resources--actions--wrapper"},[n("select",{attrs:{name:"action",id:"action"},on:{input:t.selectAction}},[n("option",{attrs:{selected:""},domProps:{value:null}},[t._v(" "+t._s(t.$t("dashboard.choose_an_action")))]),t._v(" "),t._l(t.selectActions,(function(e,i){return n("option",{key:"action-"+i,domProps:{value:i}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])}))],2)]),t._v(" "),n("button",{staticClass:"btn btn-coral btn-radius btn-icon",on:{click:t.openAction}},[n("svg",{directives:[{name:"show",rawName:"v-show",value:!1===t.runningAction,expression:"runningAction === false"}],attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"24px",height:"24px"}},[n("path",{attrs:{d:"M8 5v14l11-7z"}})]),t._v(" "),n("inline-loader",{directives:[{name:"show",rawName:"v-show",value:!0===t.runningAction,expression:"runningAction === true"}]})],1)]):t._e()],2)])]),t._v(" "),n("section",{staticClass:"content--list"},[n("ol",{staticClass:"table--list"},t._l(t.fields,(function(e,i){var a;return n("li",{key:"field-"+i,staticClass:"table--list--row",class:(a={},a["field-"+e.name+"-row"]=!0,a)},[n("label",{staticClass:"table--list--cell label--cell",attrs:{for:e.name}},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"table--list--cell input--cell"},[n(e.components.details,t._b({tag:"component",attrs:{attributes:e.attributes,field:e,value:t.datum[e.name]}},"component",e.props,!1))],1)])})),0),t._v(" "),t._l(t.resource.panels,(function(e,i){return n(e.component,{key:i,tag:"component",attrs:{resource:t.resource,page:"details",panel:e}})}))],2),t._v(" "),t.openDeleteModal?n("v-modal",{attrs:{label:t.$t("dashboard.confirmation")},on:{close:function(e){t.openDeleteModal=!1}},scopedSlots:t._u([{key:"body",fn:function(){return[n("p",[t._v(t._s(t.$t("dashboard.delete_item_message")))])]},proxy:!0},{key:"footer",fn:function(){return[n("button",{staticClass:"btn btn-normal btn-text",on:{click:function(e){t.openDeleteModal=!1}}},[t._v(t._s(t.$t("dashboard.cancel"))+"\n            ")]),t._v(" "),n("form",{attrs:{action:t.datum["@urls"].show.url,method:"post"}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.resource.token}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"_method",value:"DELETE"}}),t._v(" "),n("button",{staticClass:"btn btn-normal btn-primary",attrs:{type:"submit"}},[t._v(t._s(t.$t("dashboard.delete")))])])]},proxy:!0}],null,!1,1847457438)}):t._e(),t._v(" "),n("div",{staticClass:"related-resources--container"},t._l(t.resource.relatedResource,(function(t,e){return n("div",{key:"related-resource-"+e},[n("hubble-index",{attrs:{resource:t}})],1)})),0),t._v(" "),t.action&&t.showActionComponent?n(t.action.component,t._b({tag:"component",attrs:{selected:[t.datum],resource:t.resource,action:t.action},on:{close:t.closeAction,ran:t.actionRan}},"component",t.action.props,!1)):t._e()],1)}),[],!1,null,"7a592d9a",null);e.default=o.exports}}]);