(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return f})),r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return m}));var l=function(t,e){var r=t.props;if(!r)return"";var n=r.classes;return n&&n[e]||""},c={data:function(){return{allErrors:{},timers:{}}},props:{field:{type:Object,required:!0},formData:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},value:{default:null},type:{type:String,default:"text"},attributes:{type:[Object,Array],default:function(){return{}}}},computed:{inputAttrs:function(){return o(o(o({},this.attrs),this.rulesAttrs),this.attributes)},errors:function(){return Object.values(this.allErrors)},hasErrors:function(){return this.errors.length>0},rules:function(){return this.field.rules||[]},rulesAttrs:function(){var t=this,e={},r=this.rules;return Object.keys(r).forEach((function(n){var i=r[n],s=t.htmlRules[n];s&&(e[s]=i[0]||!0)})),e},htmlRules:function(){return{required:"required",min:"minlength",max:"maxlength"}},classes:function(){return l(this.field,"edit")}},methods:{input:function(t){this.$emit("input",t)},extractRuleMessage:function(t,e){var r=this;"string"==typeof e?this.$set(this.allErrors,t,e):"boolean"!=typeof e||e?e instanceof Promise?e.then((function(e){r.extractRuleMessage(t,e)})):"object"===s(e)?Object.keys(e).forEach((function(n){e[n].forEach((function(e){r.$set(r.allErrors,t,e)}))})):this.$delete(this.allErrors,t):this.$set(this.allErrors,t,this.$t("validation.".concat(t),{attribute:this.field.name}))},validate:function(t,e,r,i){var s,a;t?s=t.apply(void 0,[e,this.field.name].concat(n(i))):s=(a=window.hubble_rules).defaultHandler.apply(a,[e,this.field.props.isFile?this.field.name+".*":this.field.name,r].concat(n(i)));this.extractRuleMessage(r,s)}},watch:{value:function(t){var e=this,r=Object.keys(this.rules);r.includes("nullable")&&window.hubble_rules.nullable(t,this.field.name)||t===this.item[this.field.name]?this.allErrors=[]:(this.$delete(this.allErrors,"any"),r.filter((function(t){return!["nullable"].includes(t)})).forEach((function(r){var n=e.rules[r],i=window.hubble_rules[r];["unique"].includes(r)||!i?(clearTimeout(e.timers[r]),e.timers[r]=setTimeout((function(){e.validate(i,t,r,n)}),250)):e.validate(i,t,r,n)})))}},created:function(){var t=this.$formErrors(this.field.name),e=this.$old(this.field.name,!1);e&&this.input(e),t&&t.length>0&&this.$set(this.allErrors,"any",t[0])}},f={computed:{classes:function(){return l(this.field,"index")}}},d={computed:{classes:function(){return l(this.field,"details")}}},m={props:{panel:{required:!0,type:Object},page:String,resource:Object,formData:Object},methods:{input:function(t,e){this.$emit("input",t,e)}}}},26:function(t,e,r){"use strict";r.r(e);var n=r(3);function i(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw a}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a={name:"edit-image-field",data:function(){return{previews:[],images:[],removed:[],oldFiles:[]}},mixins:[r(1).b],props:{multiple:{type:Boolean,default:!1},max:{type:Number,default:null}},computed:{files:function(){return this.formData[this.field.name+"_files"]||[]},accept:function(){return this.field.attributes.accept||"image/*"},canAdd:function(){return this.multiple?!this.max||this.previews.length<this.max:this.previews.length<1},htmlRules:function(){var t={};return this.previews.length||(t.required="required"),t}},methods:{remove:function(t){-1!==Object.assign([],this.files).findIndex((function(e){return e.name===t.name}))&&this.removed.push(t);var e=this.previews.findIndex((function(e){return e.name===t.name}));-1!==e&&this.previews.splice(e,1);var r=this.images.findIndex((function(e){return e.name===t.name}));-1!==r&&this.images.splice(r,1)},upload:function(t){var e,r=this,s=i(t);try{var a=function(){var t=e.value;if(-1!==r.previews.findIndex((function(e){return e.name===t.name}))||!r.canAdd)return"continue";var n=new FileReader;n.addEventListener("load",(function(){r.previews.push({url:n.result,name:t.name})})),n.readAsDataURL(t)};for(s.s();!(e=s.n()).done;)a()}catch(t){s.e(t)}finally{s.f()}var o=Array.from(t),u=o;u=this.canAdd?this.max?o.slice(0,this.max-this.images.length):o:[],this.images=Object(n.d)(this.images,u)}},watch:{images:function(t){this.$refs.fileInput.files=Object(n.a)(t),this.input(t)},previews:function(t){this.$set(this.formData,this.field.name+"_files",t)}},created:function(){this.previews=Object.assign([],this.files),this.oldFiles=Object.assign([],this.files)}},o=r(0),u=Object(o.a)(a,(function(){var t,e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"edit-image-field",class:(t={},t[e.classes]=!0,t)},[n("ul",{staticClass:"current-files"},e._l(e.previews,(function(t){return n("li",{key:t.name,staticClass:"file"},[n("div",{staticClass:"add-card",style:"background-image: url("+t.url+")"},[n("div",{staticClass:"remove-btn",on:{click:function(r){return e.remove(t)}}},[n("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])])])])})),0),e._v(" "),e.canAdd?n("file-input",e._b({attrs:{id:e.field.name,accept:e.accept,name:"__fake__"+e.field.name,multiple:e.multiple},on:{upload:e.upload},scopedSlots:e._u([{key:"activator",fn:function(){return[n("div",{staticClass:"add-card"},[n("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M12 4v16m8-8H4"}})])])]},proxy:!0}],null,!1,3984178342)},"file-input",e.inputAttrs,!1)):e._e(),e._v(" "),n("input",e._b({ref:"fileInput",class:{error:e.hasErrors},staticStyle:{display:"none"},attrs:{type:"file",id:e.field.name,name:e.multiple?e.field.name+"[]":e.field.name,multiple:e.multiple}},"input",e.inputAttrs,!1)),e._v(" "),e._l(e.removed,(function(t){return n("input",{key:"remove-"+t.name,attrs:{type:"hidden",name:e.field.name+"__removed__[]"},domProps:{value:t.name}})})),e._v(" "),e._l(e.oldFiles,(function(t){return n("input",{key:"current-"+t.name,attrs:{type:"hidden",name:e.field.name+"__current__[]"},domProps:{value:t.name}})})),e._v(" "),n("input-errors",{attrs:{errors:e.errors}})],2)}),[],!1,null,"6cc5d489",null);e.default=u.exports}}]);