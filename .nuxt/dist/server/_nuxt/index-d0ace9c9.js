import { _ as __nuxt_component_0 } from "../server.mjs";
import { Client, Account } from "appwrite";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./Betrieb_Uttenreuth-aea63326.js";
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
const _imports_1 = "" + __buildAssetsURL("Betrieb_Höchstadt.18600569.jpg");
const index_vue_vue_type_style_index_0_lang = "";
const client = new Client();
const account = new Account(client);
client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
const promise = account.createAnonymousSession();
promise.then(
  function(response) {
    console.log(response);
  },
  function(error) {
    console.log(error);
  }
);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_Usercounter = __nuxt_component_0;
  _push(`<!--[--><div class="hero mb-20 mt-20"><h1 class="text-center text-5xl font-black"> Willkommen bei Markus Hirsch e.K. </h1></div><div class="grid-parent mt-50"><div class="grid lg:grid-cols-2 gap-20"><div class="card w-96 bg-base-200 shadow-xl"><figure class="px-10 pt-10"><img${ssrRenderAttr("src", _imports_0)} alt="Shoes" class="rounded-xl"></figure><div class="card-body items-center text-center"><h2 class="card-title">Betrieb Uttenreuth</h2><p> 91080 Uttenreuth <br> Erlanger Str.33 <br> Tel.: 09131-57088 <br> uttenreuth@hirsch-boschservice.de </p><div class="card-actions"><button class="btn btn-success mt-5">`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "Utt-start" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`mehr erfahren`);
      } else {
        return [
          createTextVNode("mehr erfahren")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div></div></div><div class="card w-96 bg-base-200 shadow-xl"><figure class="px-10 pt-10"><img${ssrRenderAttr("src", _imports_1)} alt="Shoes" class="rounded-xl" format="webp"></figure><div class="card-body items-center text-center"><h2 class="card-title">Betrieb Höchstadt</h2><p> 91315 Höchstadt/Aisch <br> Schwarzenbacher Ring 4 <br> Tel.: 09193-7700 <br> hoechstadt@hirsch-boschservice.de </p><div class="card-actions"><button class="btn btn-success mt-5">`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "Hös-start" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`mehr erfahren`);
      } else {
        return [
          createTextVNode("mehr erfahren")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div></div></div></div></div><div class="center"><div class="card bg-base-200 shadow-xl w-fit m-10 mt-20"><div class="card-body"><h1 class="text-center lg:text-5xl lg:font-black pb-20 text-lg font-bold"> Wir begrüßen Sie auf der Internetseite der Firma Markus Hirsch e.K. - Ihre Kfz-Werkstatt. </h1><p> Mit unseren beiden Bosch Car Service sind wir Ihr kompetenter Ansprechpartner für alle Arbeiten rund um&#39;s Fahrzeug im Großraum Erlangen - in Uttenreuth &amp; Höchstadt.<br> Wir sind Ihre Werkstatt für alle Automarken mit der Kompetenz eines Spezialisten.<br> Ob Mechanik (Auspuff, Bremse, Fahrwerk,...), Kundendienst, Klimaanlagen/Standheizungen, Diesel-/Benzin-Einspritzung, Unfallinstandsetzung oder professionelle Diagnose und Fehlerbeseitigung um nur einige Punkte zu nennen.<br> Mit unserem Betrieb in Uttenreuth befinden wir uns direkt im Osten von Erlangen mit unserer Aral Tankstelle - mit unserem Betrieb in Höchstadt sind wir westlich von Erlangen zu finden. </p><div class="card-actions justify-end"></div></div></div></div><footer class="footer p-10 bg-neutral text-neutral-content mt-20"><div><span class="footer-title">Nützliche Links</span><a class="link link-hover">Impressum</a><a class="link link-hover">Datenschutz</a></div><div><a class="link link-hover">About us</a><a class="link link-hover">Contact</a><a class="link link-hover">Jobs</a><a class="link link-hover">Press kit</a></div><div><span class="footer-title">Legal</span><a class="link link-hover">Terms of use</a><a class="link link-hover">Privacy policy</a><a class="link link-hover">Cookie policy</a></div></footer>`);
  _push(ssrRenderComponent(_component_Usercounter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-d0ace9c9.js.map
