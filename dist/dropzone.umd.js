(function(s,l){typeof exports=="object"&&typeof module!="undefined"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(s=typeof globalThis!="undefined"?globalThis:s||self,l(s.Dropzone={}))})(this,function(s){"use strict";var l=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"dropzone",class:{"is-dragging":e.isDragging},on:{drop:function(i){return i.preventDefault(),e.onDrop.apply(null,arguments)},dragover:function(i){return i.preventDefault(),e.onDragover.apply(null,arguments)},dragenter:function(i){return i.preventDefault(),e.onDragenter.apply(null,arguments)},dragleave:function(i){return i.preventDefault(),e.onDragleave.apply(null,arguments)}}},[e._t("placeholder",function(){return[n("div",{staticClass:"dropzone-placeholder text-center"},[e._t("content",function(){return[n("div",{staticClass:"dropzone-placeholder-content"},[e._t("icon",function(){return[e.icon?n("svg",{staticClass:"dropzone-placeholder-icon",attrs:{fill:"none",height:"56",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",width:"56",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none",stroke:"none"}}),n("rect",{attrs:{height:"12",rx:"2",width:"12",x:"8",y:"8"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"8",x2:"8",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"12",x2:"12",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"16",x2:"16",y1:"4",y2:"4.01"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"8",y2:"8.01"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"12",y2:"12.01"}}),n("line",{attrs:{x1:"4",x2:"4",y1:"16",y2:"16.01"}})]):e._e()]},{isDragging:e.isDragging}),e._t("text",function(){return[e._m(0)]},{isDragging:e.isDragging})],2)]},{isDragging:e.isDragging})],2)]},{isDragging:e.isDragging}),n("div",[e._t("default")],2)],2)},c=[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",[n("h2",{staticClass:"dropzone-title"},[e._v(" Drag & Drop ")]),n("p",{staticClass:"dropzone-text"},[e._v(" Drag and drop your files here to upload them! ")])])}],$="";function v(e,r,n,i,u,d,f,x){var t=typeof e=="function"?e.options:e;r&&(t.render=r,t.staticRenderFns=n,t._compiled=!0),i&&(t.functional=!0),d&&(t._scopeId="data-v-"+d);var a;if(f?(a=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(o=__VUE_SSR_CONTEXT__),u&&u.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(f)},t._ssrRegister=a):u&&(a=x?function(){u.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:u),a)if(t.functional){t._injectStyles=a;var C=t.render;t.render=function(z,_){return a.call(_),C(z,_)}}else{var p=t.beforeCreate;t.beforeCreate=p?[].concat(p,a):[a]}return{exports:e,options:t}}const h={name:"Dropzone",props:{icon:{type:Boolean,default:!0}},data(){return{isDragging:!1}},methods:{onDrop(e){this.isDragging=!1,this.$emit("drop",e)},onDragover(e){this.isDragging=!0,this.$emit("dragover",e)},onDragenter(e){this.isDragging=!0,this.$emit("dragenter",e),this.onDragover(e)},onDragleave(e){this.isDragging=!1,this.$emit("dragleave",e)}}},g={};var D=v(h,l,c,!1,y,null,null,null);function y(e){for(let r in g)this[r]=g[r]}var m=function(){return D.exports}();s.Dropzone=m,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
