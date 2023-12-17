import { Client, Account, Storage, Databases, ID } from "appwrite";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const client = new Client();
client.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");
const account = new Account(client);
new Storage(client);
const databases = new Databases(client);
function checkSession() {
  const promise = account.getSession("current");
  promise.then(
    function(response) {
      console.log(response);
    },
    function(error) {
      console.log(error);
      window.location.href = "/login";
    }
  );
}
function createCard() {
  let card = document.getElementById("input").value;
  const promise = databases.createDocument(
    "6525a3104c1b6602d0ef",
    "6525a31a6d23271d8dff",
    ID.unique(),
    { card }
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
        "6525a31a6d23271d8dff",
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
  mounted() {
    checkSession();
    const promise = databases.getDocument(
      "6525a3104c1b6602d0ef",
      "6525a31a6d23271d8dff",
      "6525b6390c27800f5b88"
    );
    let ct = document.getElementById("ct");
    promise.then(
      function(response) {
        console.log(response);
        ct.innerText = response.card;
      },
      function(error) {
        console.log(error);
      }
    );
  },
  methods: {
    createCard
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h1 class="text-3xl font-bold text-center">Mitarbeiter</h1><div class="center"><div class="mockup-code mb-10 w-2/4 mt-10"><pre data-prefix="$"><code>&lt;div class=&quot;card w-96 bg-base-100 shadow-xl&quot;&gt;
       &lt;div class=&quot;card-body&quot;&gt;
        &lt;h2 class=&quot;card-title&quot;&gt;Card title!&lt;/h2&gt;
        &lt;p&gt;If a dog chews shoes whose shoes does he choose?&lt;/p&gt;
        &lt;div class=&quot;card-actions justify-end&quot;&gt;
       &lt;button class=&quot;btn btn-primary&quot;&gt;Buy Now&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre></div></div><div class="center"><div><input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" id="input"><button class="btn btn-primary mt-5"> Create Card </button></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mtt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mtt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  mtt as default
};
//# sourceMappingURL=mtt-2f70d03c.js.map
