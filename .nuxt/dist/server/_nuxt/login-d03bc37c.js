import { ref, unref, useSSRContext } from "vue";
import "hookable";
import { u as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttr } from "vue/server-renderer";
import { Client, Account } from "appwrite";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
const login_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  setup() {
    return {
      loggedInUser,
      email,
      password,
      name,
      login,
      register,
      logout
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const client = new Client();
    client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
    new Account(client);
    const router = useRouter();
    const loggedInUser2 = ref(null);
    const email2 = ref("");
    const password2 = ref("");
    ref("");
    if (!loggedInUser2.value) {
      router.push({
        name: "login",
        query: { source_path: "/admin" }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="text-3xl font-black text-center m-10">Admin Login</h1><div><div class="card w-96 bg-base-100 shadow-xl pcenter"><div class="bg-red rounded-lg"><p id="error" class="p-10"></p></div><div class="card-body"><form><input type="email" placeholder="Email"${ssrRenderAttr("value", unref(email2))} class="input input-bordered input-success w-full max-w-xs m-5 snap-center"><input type="password" placeholder="Password"${ssrRenderAttr("value", unref(password2))} class="input input-bordered input-success w-full max-w-xs m-5 snap-center"><button type="button" class="btn btn-success m-5 mb-5 btn-wide"> Login </button></form></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-d03bc37c.js.map
