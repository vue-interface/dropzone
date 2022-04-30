var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "dropzone", class: { "is-dragging": _vm.isDragging }, on: { "drop": function($event) {
    $event.preventDefault();
    return _vm.onDrop.apply(null, arguments);
  }, "dragover": function($event) {
    $event.preventDefault();
    return _vm.onDragover.apply(null, arguments);
  }, "dragenter": function($event) {
    $event.preventDefault();
    return _vm.onDragenter.apply(null, arguments);
  }, "dragleave": function($event) {
    $event.preventDefault();
    return _vm.onDragleave.apply(null, arguments);
  } } }, [_vm._t("placeholder", function() {
    return [_c("div", { staticClass: "dropzone-placeholder text-center" }, [_vm._t("content", function() {
      return [_c("div", { staticClass: "dropzone-placeholder-content" }, [_vm._t("icon", function() {
        return [_vm.icon ? _c("svg", { staticClass: "dropzone-placeholder-icon", attrs: { "fill": "none", "height": "56", "stroke": "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "viewBox": "0 0 24 24", "width": "56", "xmlns": "http://www.w3.org/2000/svg" } }, [_c("path", { attrs: { "d": "M0 0h24v24H0z", "fill": "none", "stroke": "none" } }), _c("rect", { attrs: { "height": "12", "rx": "2", "width": "12", "x": "8", "y": "8" } }), _c("line", { attrs: { "x1": "4", "x2": "4", "y1": "4", "y2": "4.01" } }), _c("line", { attrs: { "x1": "8", "x2": "8", "y1": "4", "y2": "4.01" } }), _c("line", { attrs: { "x1": "12", "x2": "12", "y1": "4", "y2": "4.01" } }), _c("line", { attrs: { "x1": "16", "x2": "16", "y1": "4", "y2": "4.01" } }), _c("line", { attrs: { "x1": "4", "x2": "4", "y1": "8", "y2": "8.01" } }), _c("line", { attrs: { "x1": "4", "x2": "4", "y1": "12", "y2": "12.01" } }), _c("line", { attrs: { "x1": "4", "x2": "4", "y1": "16", "y2": "16.01" } })]) : _vm._e()];
      }, { "isDragging": _vm.isDragging }), _vm._t("text", function() {
        return [_vm._m(0)];
      }, { "isDragging": _vm.isDragging })], 2)];
    }, { "isDragging": _vm.isDragging })], 2)];
  }, { "isDragging": _vm.isDragging }), _c("div", [_vm._t("default")], 2)], 2);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h2", { staticClass: "dropzone-title" }, [_vm._v(" Drag & Drop ")]), _c("p", { staticClass: "dropzone-text" }, [_vm._v(" Drag and drop your files here to upload them! ")])]);
}];
var Dropzone_vue_vue_type_style_index_0_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script = {
  name: "Dropzone",
  props: {
    icon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isDragging: false
    };
  },
  methods: {
    onDrop(event) {
      this.isDragging = false;
      this.$emit("drop", event);
    },
    onDragover(event) {
      this.isDragging = true;
      this.$emit("dragover", event);
    },
    onDragenter(event) {
      this.isDragging = true;
      this.$emit("dragenter", event);
      this.onDragover(event);
    },
    onDragleave(event) {
      this.isDragging = false;
      this.$emit("dragleave", event);
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var Dropzone = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Dropzone };
