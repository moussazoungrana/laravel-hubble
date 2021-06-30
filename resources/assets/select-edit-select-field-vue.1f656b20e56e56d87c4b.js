(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return f}));var u=function(t,e){var n=t.props;if(!n)return"";var r=n.classes;return r&&r[e]||""},c={data:function(){return{allErrors:{},timers:{}}},props:{field:{type:Object,required:!0},formData:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},value:{default:null},type:{type:String,default:"text"},attributes:{type:[Object,Array],default:function(){return{}}}},computed:{inputAttrs:function(){return a(a(a({},this.attrs),this.rulesAttrs),this.attributes)},errors:function(){return Object.values(this.allErrors)},hasErrors:function(){return this.errors.length>0},rules:function(){return this.field.rules||[]},rulesAttrs:function(){var t=this,e={},n=this.rules;return Object.keys(n).forEach((function(r){var i=n[r],s=t.htmlRules[r];s&&(e[s]=i[0]||!0)})),e},htmlRules:function(){return{required:"required",min:"minlength",max:"maxlength"}},classes:function(){return u(this.field,"edit")}},methods:{input:function(t){this.$emit("input",t)},extractRuleMessage:function(t,e){var n=this;"string"==typeof e?this.$set(this.allErrors,t,e):"boolean"!=typeof e||e?e instanceof Promise?e.then((function(e){n.extractRuleMessage(t,e)})):"object"===s(e)?Object.keys(e).forEach((function(r){e[r].forEach((function(e){n.$set(n.allErrors,t,e)}))})):this.$delete(this.allErrors,t):this.$set(this.allErrors,t,this.$t("validation.".concat(t),{attribute:this.field.name}))},validate:function(t,e,n,i){var s,o;t?s=t.apply(void 0,[e,this.field.name].concat(r(i))):s=(o=window.hubble_rules).defaultHandler.apply(o,[e,this.field.props.isFile?this.field.name+".*":this.field.name,n].concat(r(i)));this.extractRuleMessage(n,s)}},watch:{value:function(t){var e=this,n=Object.keys(this.rules);n.includes("nullable")&&window.hubble_rules.nullable(t,this.field.name)||t===this.item[this.field.name]?this.allErrors=[]:(this.$delete(this.allErrors,"any"),n.filter((function(t){return!["nullable"].includes(t)})).forEach((function(n){var r=e.rules[n],i=window.hubble_rules[n];["unique"].includes(n)||!i?(clearTimeout(e.timers[n]),e.timers[n]=setTimeout((function(){e.validate(i,t,n,r)}),250)):e.validate(i,t,n,r)})))}},created:function(){var t=this.$formErrors(this.field.name),e=this.$old(this.field.name,!1);e&&this.input(e),t&&t.length>0&&this.$set(this.allErrors,"any",t[0])}},h={computed:{classes:function(){return u(this.field,"index")}}},p={computed:{classes:function(){return u(this.field,"details")}}},f={props:{panel:{required:!0,type:Object},page:String,resource:Object,formData:Object},methods:{input:function(t,e){this.$emit("input",t,e)}}}},25:function(t,e,n){"use strict";n.r(e);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.listener=e,this.options=Object.assign({threshold:400,element:document.documentElement},n),this.handler=this.handlerFunc.bind(this),this.observe()}var e,n,i;return e=t,(n=[{key:"handlerFunc",value:function(t){var e=this.options.element,n=parseInt(e.getAttribute("data-infinite-height")||0),r=e.scrollHeight-this.options.threshold;r>n&&e.scrollTop+e.clientHeight>=r&&(this.listener(),e.setAttribute("data-infinite-height",r))}},{key:"observe",value:function(){(this.options.element.isEqualNode(document.documentElement)?window:this.options.element).addEventListener("scroll",this.handler)}}])&&r(e.prototype,n),i&&r(e,i),t}();function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.handler=n,this.handle=this.handle.bind(this),document.addEventListener("click",this.handle)}var e,n,r;return e=t,(n=[{key:"handle",value:function(t){this.element.contains(t.target)||(this.handler(),document.removeEventListener("click",this.handle))}}])&&s(e.prototype,n),r&&s(e,r),t}(),a=n(1);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"edit-select-field",data:function(){return{realOptions:[],page:1,dropdownOpened:!1,searchTimer:null,searchValue:null,inputValue:null,currentIndex:-1,lockSearch:!1,tags:[],dropdownTags:[]}},props:{options:{required:!0,type:[Array,String]},valueKey:{required:!0,type:String},textKey:{required:!0,type:String},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:null},emptyOptionName:{type:String,default:null},returnObject:{type:Boolean,default:!0},tagsToDisplay:{type:Number,default:2}},mixins:[a.b],computed:{wrapper:function(){return this.$refs.optionsContent},listOptions:function(){var t=this;if(this.multiple){var e=this.dropdownTags.map((function(e){return e[t.valueKey]}));return this.realOptions.filter((function(n){return!e.includes(n[t.valueKey])}))}return this.realOptions}},methods:{openDropdown:function(){var t=this;this.dropdownOpened||(this.dropdownOpened=!0,this.dropdownTags=Object.assign([],this.tags),this.currentIndex=-1,this.scrollToOption(0,"prev"),this.$nextTick((function(){new o(t.$refs.optionsContent,(function(){t.close()})),t.$refs.tagSearchInput&&t.$refs.tagSearchInput.focus()})),this.$emit("dropdown-open"))},fetchOptions:function(){var t=this;return window.hubble_vm=this,this.$axios.get(this.options,{params:{page:this.page,search:this.searchValue}}).then((function(e){console.log(JSON.parse(JSON.stringify(t.realOptions)));var n=t.realOptions.map((function(e){return e[t.valueKey]})),r=e.data.data.filter((function(e){return!n.includes(e[t.valueKey])}));console.log(r,e,e.data.data,e.data.data.filter((function(e){return!n.includes(e[t.valueKey])})),n,t),t.page<=1?t.realOptions=r:t.realOptions=t.realOptions.concat(r);var i=t.realOptions.find((function(e){return e[t.valueKey]==t.value}));i||!t.$refs.textInput?t.$refs.textInput&&(t.$refs.textInput.value=i[t.textKey]):t.$refs.textInput.value=null}))},fetchOptionItem:function(t){var e=this;return this.$axios.get(this.options,{params:l({},this.valueKey,t)}).then((function(n){e.realOptions.push(n.data.data);var r=e.realOptions.find((function(n){return n[e.valueKey]==t}));r||!e.$refs.textInput?e.$refs.textInput&&(e.$refs.textInput.value=r[e.textKey]):e.$refs.textInput.value=null}))},onKeydown:function(t){if(13===t.keyCode){if(t.preventDefault(),this.currentIndex<=-1)return;var e=this.listOptions[this.currentIndex];return this.lockSearch=!0,void this.select(e)}40!==t.keyCode?38!==t.keyCode?9!==t.keyCode&&27!==t.keyCode||this.close():this.currentIndex-1>-1&&(this.currentIndex-=1,this.scrollToOption(this.currentIndex,"prev"),this.$emit("prev")):this.realOptions.length>this.currentIndex+1&&(this.currentIndex+=1,this.$emit("next"),this.scrollToOption(this.currentIndex))},scrollToOption:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"next",n=this.wrapper.querySelector("#custom--select--option-".concat(t));if(n){var r=n.getBoundingClientRect(),i=this.wrapper.getBoundingClientRect().height;"next"===e?n.offsetTop+r.height>i+this.wrapper.scrollTop&&this.wrapper.scrollTo({left:0,top:n.offsetTop+r.height-i,behavior:"smooth"}):n.offsetTop<this.wrapper.scrollTop&&this.wrapper.scrollTo({left:0,top:n.offsetTop,behavior:"smooth"})}},close:function(){this.dropdownOpened=!1,this.$emit("close")},onSearch:function(t){var e=this,n=t.target.value,r=[];if(this.multiple)r=this.tags.map((function(t){return t[e.textKey]}));else{var i=this.realOptions.find((function(t){return t[e.valueKey]==e.inputValue}));i&&(r=[i[this.textKey]])}clearTimeout(this.searchTimer),n===this.searchValue||r.includes(n)&&-1!==this.currentIndex||(this.searchTimer=setTimeout((function(){e.search(n)}),Array.isArray(this.options)?0:500))},search:function(t){var e=this;t=String(t).toLowerCase(),this.$emit("search",t),this.searchValue=t,Array.isArray(this.options)?(t||(this.realOptions=this.options),this.realOptions=this.options.filter((function(n){return String(n[e.textKey]).toLowerCase().includes(t)}))):(1===this.page&&this.fetchOptions(),this.page=1,this.$refs.optionsContent.removeAttribute("data-infinite-height"))},select:function(t){var e=this;if(this.multiple){var n=this.tags||[],r=n.findIndex((function(n){return n[e.valueKey]==t[e.valueKey]}));return-1===r?n.push(t):n.splice(r,1),void(this.tags=n)}this.inputValue=t[this.valueKey],this.input(this.returnObject?t:t[this.valueKey]),this.dropdownOpened=!1},isSelected:function(t){var e=this;return this.multiple?-1!==(this.tags||[]).findIndex((function(n){return n[e.valueKey]==t[e.valueKey]})):!!this.value&&t[this.valueKey]==(this.returnObject?this.value[this.valueKey]:this.value)},empty:function(){if(this.multiple)return this.tags=[],this.dropdownOpened=!1,void this.input([]);this.inputValue=null,this.input(null),this.dropdownOpened=!1},removeTag:function(t){var e=this,n=this.tags.findIndex((function(n){return n[e.valueKey]==t[e.valueKey]}));-1!==n&&(this.$emit("unselect",this.tags[n],n),this.tags.splice(n,1))},removeAllTags:function(){this.tags=[],this.$emit("clearAll")}},watch:{tags:function(t){var e=this;this.input(this.returnObject?t:t.map((function(t){return t[e.valueKey]})))},page:function(){this.$emit("paginate",this.page),this.fetchOptions()},inputValue:function(t){var e=this;t||this.$refs.textInput.removeAttribute("value");var n=this.realOptions.find((function(n){return n[e.valueKey]==t}));n||!this.$refs.textInput?this.$refs.textInput&&(this.$refs.textInput.value=n[this.textKey]):this.$refs.textInput.value=null}},created:function(){var t=this;Array.isArray(this.options)?this.realOptions=this.options:this.fetchOptions().then((function(e){t.realOptions.find((function(e){return e[t.valueKey]==t.value}))||t.fetchOptionItem(t.value)})),this.multiple?this.tags=this.value||[]:this.inputValue=this.value},mounted:function(){var t=this;this.$nextTick((function(){new i((function(){t.page=t.page+1,t.$emit("paginate",t.page)}),{element:t.$refs.optionsContent,threshold:30})}))}},c=n(0),h=Object(c.a)(u,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"custom--select--container",class:(t={},t[e.classes]=!0,t)},[e.multiple?e._e():[r("input",e._b({ref:"textInput",class:{error:e.hasErrors},attrs:{type:"text",placeholder:e.inputAttrs.placeholder,id:e.field.name+"__",autocomplete:"off"},on:{click:function(t){t.stopPropagation()},keyup:e.onSearch,keydown:e.onKeydown,focus:e.openDropdown}},"input",e.inputAttrs,!1)),e._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"input",attrs:{name:e.field.name},domProps:{value:e.inputValue}})],e._v(" "),e.multiple?[r("div",{staticClass:"tags--wrapper",class:{error:e.hasErrors}},[r("div",{staticClass:"tags--fake--input",class:{focused:e.dropdownOpened},on:{click:function(t){return t.stopPropagation(),e.openDropdown(t)}}},[r("div",{staticClass:"tags--container"},[!e.tags||e.tags&&0===e.tags.length?r("span",{staticClass:"placeholder"},[e._v(e._s(e.inputAttrs.placeholder))]):e._e(),e._v(" "),e._l((e.tags||[]).slice(0,e.tagsToDisplay),(function(t,n){return r("div",{key:"tag-"+n,staticClass:"tag"},[r("span",{staticClass:"tag--content",attrs:{title:t[e.textKey]}},[e._v(e._s(t[e.textKey]))]),e._v(" "),r("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(n){return e.removeTag(t)}}},[r("path",{attrs:{d:"M6 18L18 6M6 6l12 12"}})])])})),e._v(" "),e.tags.length>e.tagsToDisplay?r("div",[e._v("...")]):e._e()],2),e._v(" "),r("div",{staticClass:"tags--fake--input--btns"},[r("button",{staticClass:"btn count"},[e._v(e._s(e.tags.length))]),e._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:e.tags.length>0,expression:"tags.length > 0"}],attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:e.removeAllTags}},[r("path",{attrs:{d:"M6 18L18 6M6 6l12 12"}})]),e._v(" "),r("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{d:"M19 9l-7 7-7-7"}})])])])]),e._v(" "),e._l(e.tags,(function(t,n){return r("input",e._b({directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],key:n,ref:"input",refInFor:!0,attrs:{name:e.field.name+"[]"},domProps:{value:t[e.valueKey]}},"input",e.inputAttrs,!1))}))]:e._e(),e._v(" "),r("input-errors",{attrs:{errors:e.errors}}),e._v(" "),r("div",{staticClass:"custom--select--wrapper",class:{open:e.dropdownOpened}},[r("div",{staticClass:"tags--wrapper--search--input--wrapper"},[r("input",{ref:"tagSearchInput",staticClass:"search--input",attrs:{type:"text",placeholder:e.$t("dashboard.search")||"Search ..."},on:{click:function(t){t.stopPropagation()},keyup:e.onSearch,keydown:e.onKeydown}}),e._v(" "),r("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])]),e._v(" "),r("ul",{directives:[{name:"show",rawName:"v-show",value:e.dropdownTags.length>0,expression:"dropdownTags.length > 0"}],staticClass:"all-tags--wrapper custom--scrollbar"},e._l(e.dropdownTags,(function(t,n){return r("li",{key:"all-tags-"+t[e.valueKey],staticClass:"fake-checkbox--container",attrs:{id:"all-tag--option-"+n},on:{click:function(n){return n.stopPropagation(),e.select(t)}}},[r("div",{staticClass:"fake-checkbox",class:{selected:e.isSelected(t)}}),e._v(" "),r("div",[e._v(e._s(t[e.textKey]))])])})),0),e._v(" "),r("ul",{ref:"optionsContent",staticClass:"custom--select--content custom--scrollbar"},e._l(e.listOptions,(function(t,n){return r("li",{key:"custom--option-"+t[e.valueKey],staticClass:"fake-checkbox--container",class:{hover:e.currentIndex===n},attrs:{id:"custom--select--option-"+n},on:{click:function(n){return n.stopPropagation(),e.select(t)}}},[r("div",{staticClass:"fake-checkbox",class:{selected:e.isSelected(t)}}),e._v(" "),r("div",[e._v(e._s(t[e.textKey]))])])})),0)])],2)}),[],!1,null,"d36c6ed6",null);e.default=h.exports}}]);