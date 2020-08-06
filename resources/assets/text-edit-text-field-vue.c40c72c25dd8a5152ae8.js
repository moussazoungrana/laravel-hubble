(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return f})),r.d(e,"a",(function(){return p}));var l=function(t,e){var r=t.props;if(!r)return"";var n=r.classes;return n&&n[e]||""},c={data:function(){return{allErrors:{},timers:{}}},props:{field:{type:Object,required:!0},formData:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}},value:{default:null},type:{type:String,default:"text"},attributes:{type:[Object,Array],default:function(){return{}}}},computed:{inputAttrs:function(){return u(u(u({},this.attrs),this.rulesAttrs),this.attributes)},errors:function(){return Object.values(this.allErrors)},hasErrors:function(){return this.errors.length>0},rules:function(){return this.field.rules||[]},rulesAttrs:function(){var t=this,e={},r=this.rules;return Object.keys(r).forEach((function(n){var i=r[n],o=t.htmlRules[n];o&&(e[o]=i[0]||!0)})),e},htmlRules:function(){return{required:"required",min:"minlength",max:"maxlength"}},classes:function(){return l(this.field,"edit")}},methods:{input:function(t){this.$emit("input",t)},extractRuleMessage:function(t,e){var r=this;"string"==typeof e?this.$set(this.allErrors,t,e):"boolean"!=typeof e||e?e instanceof Promise?e.then((function(e){r.extractRuleMessage(t,e)})):"object"===o(e)?Object.keys(e).forEach((function(n){e[n].forEach((function(e){r.$set(r.allErrors,t,e)}))})):this.$delete(this.allErrors,t):this.$set(this.allErrors,t,this.$t("validation.".concat(t),{attribute:this.field.name}))},validate:function(t,e,r,i){var o,s;t?o=t.apply(void 0,[e,this.field.name].concat(n(i))):o=(s=window.hubble_rules).defaultHandler.apply(s,[e,this.field.name,r].concat(n(i)));this.extractRuleMessage(r,o)}},watch:{value:function(t){var e=this,r=Object.keys(this.rules);r.includes("nullable")&&window.hubble_rules.nullable(t,this.field.name)||t===this.item[this.field.name]?this.allErrors=[]:(this.$delete(this.allErrors,"any"),r.filter((function(t){return!["nullable"].includes(t)})).forEach((function(r){var n=e.rules[r],i=window.hubble_rules[r];["unique"].includes(r)||!i?(clearTimeout(e.timers[r]),e.timers[r]=setTimeout((function(){e.validate(i,t,r,n)}),250)):e.validate(i,t,r,n)})))}},created:function(){var t=this.$formErrors(this.field.name),e=this.$old(this.field.name,!1);e&&this.input(e),t&&t.length>0&&this.$set(this.allErrors,"any",t[0])}},f={computed:{classes:function(){return l(this.field,"index")}}},p={computed:{classes:function(){return l(this.field,"details")}}}},36:function(t,e,r){"use strict";r.r(e);var n=r(1),i={name:"edit-text-field",components:{InputErrors:r(9).default},mixins:[n.b]},o=r(0),s=Object(o.a)(i,(function(){var t,e=this,r=e.$createElement,n=e._self._c||r;return n("div",{class:(t={},t[e.classes]=!0,t)},[n("input",e._b({class:{error:e.hasErrors},attrs:{type:e.type,id:e.field.name,name:e.field.name},domProps:{value:e.value},on:{input:function(t){return e.input(t.target.value)}}},"input",e.inputAttrs,!1)),e._v(" "),e.hasErrors?n("input-errors",{attrs:{errors:e.errors}}):e._e()],1)}),[],!1,null,"f167755e",null);e.default=s.exports}}]);