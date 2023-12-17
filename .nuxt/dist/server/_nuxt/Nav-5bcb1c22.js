import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _imports_0 = "" + __publicAssetsURL("bosch-service.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar bg-base-200" }, _attrs))}><div class="flex-1"><a class="btn btn-ghost normal-case lg:text-xl text-lg"><img width="45" height="45"${ssrRenderAttr("src", _imports_0)} class="fill-white rounded-none"></a></div><div class="flex-none"><ul class="menu menu-horizontal px-1"><li><details><summary>Mehr</summary><ul class="p-2 bg-base-200"><li>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/DL" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dienstleistungen`);
      } else {
        return [
          createTextVNode("Dienstleistungen")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a>Stammkunden-Konzept</a></li><li><a>Firmenkooperationen</a></li><li><a>Kontakt</a></li><li><a>Über uns</a></li><li><a>Stellenangebot</a></li></ul></details></li><li>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a href="/tem">Team</a></li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Nav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Nav as default
};
//# sourceMappingURL=Nav-5bcb1c22.js.map
