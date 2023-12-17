import { _ as __nuxt_component_0 } from "../server.mjs";
import { Client, Account, Storage, Databases } from "appwrite";
import { useSSRContext } from "vue";
import { ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
const tem_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {
      documents: [],
      isLoading: true
    };
  },
  mounted() {
    const client = new Client();
    client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
    const account = new Account(client);
    new Storage(client);
    const databases = new Databases(client);
    const promise2 = account.getSession("current");
    promise2.then(
      function(response) {
        console.log(response);
      },
      function(error) {
        console.log(error);
        window.location.href = "/";
      }
    );
    const promise = databases.listDocuments(
      "6525a3104c1b6602d0ef",
      "6525a31a6d23271d8dff"
    );
    promise.then(
      (response) => {
        console.log(response);
        response.documents.sort((a, b) => {
          if (a.num === null)
            return 1;
          if (b.num === null)
            return -1;
          return a.num - b.num;
        });
        this.documents = response.documents;
        this.isLoading = false;
      },
      function(error) {
        console.log(error);
        this.isLoading = false;
      }.bind(this)
    );
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Usercounter = __nuxt_component_0;
  _push(`<!--[--><h1 class="text-center text-3xl font-bold">Utt-team</h1><div class="center mt-12"><div id="cards" class="xl lg:grid lg:grid-cols-3 lg:gap-20">`);
  if (!$data.isLoading) {
    _push(`<!--[-->`);
    ssrRenderList($data.documents, (document) => {
      _push(`<div>${document.Card}</div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($data.isLoading) {
    _push(`<div class="flex justify-center items-center h-screen center"><div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_Usercounter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  tem as default
};
//# sourceMappingURL=tem-1da25920.js.map
