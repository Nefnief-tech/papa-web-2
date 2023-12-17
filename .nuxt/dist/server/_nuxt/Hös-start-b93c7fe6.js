import { _ as __nuxt_component_0 } from "../server.mjs";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
import "appwrite";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Usercounter = __nuxt_component_0;
  const _component_Nav = resolveComponent("Nav");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Usercounter, null, null, _parent));
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Hös-start.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const H_sStart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  H_sStart as default
};
//# sourceMappingURL=Hös-start-b93c7fe6.js.map
