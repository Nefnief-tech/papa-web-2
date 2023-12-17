import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3 } from "./filetable-99c00e2d.js";
import { Client, Account, Storage, Databases, ID } from "appwrite";
import { useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const client = new Client();
client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
new Account(client);
new Storage(client);
const databases = new Databases(client);
function createCard() {
  let card = document.getElementById("input").value;
  let name = document.getElementById("name").value;
  let num = document.getElementById("num").value;
  const promise = databases.createDocument(
    "6525a3104c1b6602d0ef",
    //database ID
    "6525a31a6d23271d8dff",
    //collection ID
    ID.unique(),
    { Card: card, name, num }
  );
  promise.then(
    function(response) {
      console.log(response);
      let IC = response.$id;
      let cardsHtml = "";
      if (response.documents) {
        response.documents.forEach((document2) => {
          cardsHtml += document2.card;
        });
      }
      const promise2 = databases.createDocument(
        "6525a3104c1b6602d0ef",
        //database ID
        "6525a31a6d23271d8dff",
        //collection ID
        ID.unique(),
        { employeeID: IC, card: response.card }
      );
      promise2.then(
        function(response2) {
          console.log(response2);
        },
        function(error) {
          console.log(error);
        }
      );
    },
    function(error) {
      console.log(error);
    }
  );
}
const _sfc_main = {
  methods: {
    createCard
  },
  //table init
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    const promise = databases.listDocuments(
      "6525a3104c1b6602d0ef",
      "6525a31a6d23271d8dff"
    );
    promise.then(
      (response) => {
        this.tableData = response.documents;
      },
      function(error) {
        console.log(error);
      }
    );
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_templatee = __nuxt_component_0;
  const _component_dangerzone = __nuxt_component_1;
  const _component_imageupload = __nuxt_component_2;
  const _component_filetable = __nuxt_component_3;
  _push(`<!--[--><h1 class="text-3xl font-bold text-center">Mitarbeiter</h1>`);
  _push(ssrRenderComponent(_component_templatee, null, null, _parent));
  _push(`<div><input type="text" placeholder="card structure from above" class="input input-bordered input-accent w-full max-w-xs m-12" id="input"><input type="text" placeholder="name of employee" class="input input-bordered input-accent w-full max-w-xs m-12" id="name"><input type="number" placeholder="order number" class="input input-bordered input-accent w-full max-w-xs m-12" id="num"><button class="btn btn-primary">Create Card</button></div><div class="divider m-12"></div><h1 class="text-3xl font-bold text-center">Mitarbeiter Liste:</h1><div class="overflow-x-auto"><table class="table table-zebra"><thead><tr><th></th><th>Name</th><th>ID</th><th>Order</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.tableData, (item, index) => {
    _push(`<tr><th>${ssrInterpolate(index + 1)}</th><td>${ssrInterpolate(item.name)}</td><td>${ssrInterpolate(item.$id)}</td><td>${ssrInterpolate(item.num)}</td> s </tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
  _push(ssrRenderComponent(_component_dangerzone, null, null, _parent));
  _push(`<div class="divider"></div>`);
  _push(ssrRenderComponent(_component_imageupload, null, null, _parent));
  _push(`<div class="divider"></div>`);
  _push(ssrRenderComponent(_component_filetable, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/workers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const workers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  workers as default
};
//# sourceMappingURL=workers-05248762.js.map
