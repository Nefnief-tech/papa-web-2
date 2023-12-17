import { Client, Databases, Storage } from "appwrite";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$3 = {
  data() {
    return {
      client: null,
      databases: null,
      ct: null
    };
  },
  mounted() {
    this.client = new Client();
    this.client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
    this.databases = new Databases(this.client);
    this.ct = this.$el.querySelector("#ct");
    this.getDocument();
  },
  methods: {
    getDocument() {
      const template = this.databases.getDocument(
        "6525a3104c1b6602d0ef",
        //Database ID
        "6525a31a6d23271d8dff",
        //Collection ID
        "653e9434c27921501737"
        //Document ID
      );
      template.then(
        (response) => {
          console.log(response);
          this.ct.innerText = response.Card;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text" }, _attrs))}><h2 class="text-xl font-bold mb-5 text-center mt-10"> Card main structure: </h2><p id="ct" class="mb-10 border-2 border-red-900 rounded-lg text-center" contenteditable="true"></p></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/templatee.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data() {
    return {
      docid: ""
    };
  },
  methods: {
    deleteDocument() {
      const client = new Client();
      const databases = new Databases(client);
      client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
      const promise = databases.deleteDocument(
        "6525a3104c1b6602d0ef",
        //database ID
        "6525a31a6d23271d8dff",
        //Collection ID
        this.docid
        //Document ID
      );
      promise.then(
        function(response) {
          console.log(response);
        },
        function(error) {
          console.log(error);
        }
      );
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="alert alert-error mt-24"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>DANGEZONE!!!!!</span></div><div class="center"><h1 class="text-center text-5xl font-black mt-20">Gefahrenzone:</h1></div><input type="text" placeholder="Document ID" class="input input-bordered input-accent w-full max-w-xs m-12"${ssrRenderAttr("value", $data.docid)}><button class="btn btn-error">Delete</button><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dangerzone.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      docid: ""
    };
  },
  methods: {
    upload() {
      let id = this.docid;
      const client = new Client();
      client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
      const storage = new Storage(client);
      const file = document.getElementById("uploader").files[0];
      const promise = storage.createFile("65402371e69a06bb7c03", id, file);
      promise.then(
        function(response) {
          console.log(response);
        },
        function(error) {
          console.log(error);
        }
      );
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h1 class="text-3xl font-bold text-center">Image upload</h1><div><input id="uploader" type="file" class="file-input file-input-bordered file-input-accent w-full max-w-xs"><input id="id" type="text" placeholder="Document ID" class="input input-bordered input-accent w-full max-w-xs m-12"${ssrRenderAttr("value", $data.docid)}><button>Upload</button></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/imageupload.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      items: [],
      // Array to hold the items
      res: ""
      // String to hold the result (the URL)
    };
  },
  methods: {
    getUrl() {
      const client = new Client();
      client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
      const storage = new Storage(client);
      const result = storage.getFileView(
        "65402371e69a06bb7c03",
        document.getElementById("id2").value
      );
      this.res = result.href;
      console.log(result);
    }
  },
  created() {
    const client = new Client();
    client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
    const storage = new Storage(client);
    const promise = storage.listFiles("65402371e69a06bb7c03");
    promise.then(
      (response) => {
        this.items = response.files;
      },
      function(error) {
        console.log(error);
      }
    );
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="overflow-x-auto"><table class="table table-zebra"><thead><tr><th></th><th>Name</th><th>ID</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.items, (item, index) => {
    _push(`<tr><th>${ssrInterpolate(index + 1)}</th><td>${ssrInterpolate(item.name)}</td><td>${ssrInterpolate(item.$id)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div><div class="divider"></div><h1 class="text-3xl font-bold text-center">Get Image URL</h1><div class="center"><input type="text" id="id2" placeholder="id of wanted image URL" class="input input-bordered input-accent w-full max-w-xs m-12 rounded-3xl"></div><div class="center"><p class="text-3xl font-medium text-center">${ssrInterpolate($data.res)}</p><button class="btn btn-primary justify-center rounded-full"> Get URL </button></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/filetable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _,
  __nuxt_component_1 as a,
  __nuxt_component_2 as b,
  __nuxt_component_3 as c
};
//# sourceMappingURL=filetable-99c00e2d.js.map
