import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./Betrieb_Uttenreuth-aea63326.js";
import Nav from "./Nav-5bcb1c22.js";
import { useSSRContext } from "vue";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _imports_1 = "" + __buildAssetsURL("tanke-resize.49d479bc.jpg");
const _imports_2 = "" + __buildAssetsURL("Laden4.44a7e501.jpg");
const _imports_3 = "" + __buildAssetsURL("Annahme2.f48c9a85.png");
const UttStart_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Utt-start",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(`<div class="center"><h1 class="text-center text-5xl font-black">Betrieb Uttenreuth</h1></div><div class="img"><img${ssrRenderAttr("src", _imports_0)} class="w-2/3 shadow-2xl mt-20"></div><div class="center"><p class="m-10 lg:font-bold lg:text-2xl text-lg"> Wir, die Firma Hirsch - Bosch Car Service, bieten Ihnen Service rund um Ihr Fahrzeug - mit Ersatzteilen in Erstausrüsterqualität und Markenölen angefangen von Kundendienstarbeiten, Auspuff, Bremse, Fahrwerk, über Unfallinstandsetzung, Reifenservice und Diagnose in der elektrischen Anlage sowie Einspritzsystemen. Wir sind Ihre Kfz-Werkstatt im Landkreis Erlangen-Höchstadt. </p></div><div class="center"><h1 class="text-center text-5xl font-black mt-20">Galerie:</h1></div><div class="carousel w-auto slider mt-20"><div id="slide1" class="carousel-item justify-center relative w-full"><img${ssrRenderAttr("src", _imports_1)} class="w-auto"><div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide4" class="btn btn-circle">❮</a><a href="#slide2" class="btn btn-circle">❯</a></div></div><div id="slide2" class="carousel-item justify-center relative w-full"><img${ssrRenderAttr("src", _imports_2)} class="w-auto"><div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide1" class="btn btn-circle">❮</a><a href="#slide3" class="btn btn-circle">❯</a></div></div><div id="slide3" class="carousel-item justify-center relative w-full"><img${ssrRenderAttr("src", _imports_3)} class="w-auto h-auto"><div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide2" class="btn btn-circle">❮</a><a href="#slide1" class="btn btn-circle">❯</a></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Utt-start.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Utt-start-c2ebdb69.js.map
