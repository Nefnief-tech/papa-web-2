import{C as u,D as C,r as g,o as b,k as o,l as r,m as t,t as h,A as p,F as w,B as k,S as $,f as y,q as l,s as B,v as d}from"./entry.79c549bd.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";const S={class:"stats shadow"},A={class:"stat"},O=t("div",{class:"stat-title"},"Total Page Views",-1),L={class:"stat-value",id:"stats"},M={class:"stat-desc"},D={__name:"listviews",setup(e){const a=new u,c=new C(a);a.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");let s=g(0);return b(async()=>{try{const n=await c.listDocuments("6542bd031f97fb623cb2","6542bd0ecc5cb5f54935");s.value=n.total}catch(n){console.log(n)}}),(n,_)=>(o(),r("div",S,[t("div",A,[O,t("div",L,h(p(s)),1),t("div",M,h(p(s))+" more then ever :)",1)])]))}},E=D,z={data(){return{isOnline:navigator.onLine}},created(){window.addEventListener("online",this.updateOnlineStatus),window.addEventListener("offline",this.updateOnlineStatus)},beforeDestroy(){window.removeEventListener("online",this.updateOnlineStatus),window.removeEventListener("offline",this.updateOnlineStatus)},methods:{updateOnlineStatus(){this.isOnline=navigator.onLine}}},j=t("h1",{class:"font-black text-3xl text-center mb-7"},"Status:",-1),V=t("h3",{class:"font-medium text-xl text-left"},"Datenbank:",-1),N={key:0,class:"badge badge-success badge-md"},P={key:1,class:"badge badge-error badge-md"};function T(e,a,c,s,n,_){return o(),r(w,null,[j,t("div",null,[V,n.isOnline?(o(),r("span",N,"Online")):(o(),r("span",P,"Offline"))])],64)}const F=m(z,[["render",T]]);const i=new u;i.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");const R=new k(i);new $(i);new C(i);const q=R.getSession("current");q.then(function(e){console.log(e)},function(e){console.log(e),window.location.href="/login"});const H={},W=t("h1",{class:"text-center text-3xl font-black mb-10"},"Welcome to the Dasboard",-1),G={class:"center"},I={class:"card w-96 bg-base-100 shadow-xl"},J={class:"card-body"},K={class:"nav center static bottom-1"},Q={class:"menu bg-base-200 lg:menu-horizontal rounded-box"},U=t("li",null,[t("a",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),d(" Home ")])],-1),X=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Y=t("li",null,[t("a",null,[t("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",class:"h-5 w-5",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},[t("path",{fill:"#A4ABB8",opacity:"1.000000",stroke:"none",d:`\r
M43.531418,1.000001 \r
	C44.443066,1.663791 44.754303,2.740555 45.348698,2.930298 \r
	C56.861530,6.605468 65.171120,20.979696 65.149620,31.787392 \r
	C64.911934,151.248840 64.975891,270.710938 65.026283,390.172852 \r
	C65.033775,407.925385 69.985207,423.752411 84.129395,435.627167 \r
	C92.689995,442.814270 102.270386,447.913879 113.681946,447.952026 \r
	C236.404602,448.362457 359.127533,448.744690 481.850647,448.878906 \r
	C494.109344,448.892334 507.013641,456.802246 511.140869,469.288910 \r
	C511.322235,469.837677 512.012573,470.218201 512.732910,470.338531 \r
	C513.000000,477.020966 513.000000,484.041901 512.730774,491.192688 \r
	C512.200684,491.523102 511.799622,491.669952 511.699219,491.932007 \r
	C508.126038,501.257477 502.243530,508.244324 492.364929,511.292358 \r
	C492.093506,511.376099 492.115082,512.409424 492.000000,513.000000 \r
	C360.645782,513.000000 229.291550,513.000000 97.809464,512.689636 \r
	C97.025864,511.932098 96.421135,511.209778 95.707024,511.077393 \r
	C63.373226,505.082489 38.495350,487.748047 20.022463,460.948090 \r
	C11.552558,448.660187 6.309499,434.880005 2.946758,420.362335 \r
	C2.740601,419.472321 1.668954,418.782806 1.000003,418.000000 \r
	C1.000000,286.312439 1.000000,154.624878 1.269381,22.807449 \r
	C1.799607,22.476959 2.201670,22.329840 2.300884,22.067980 \r
	C5.845173,12.713269 11.768887,5.767732 21.635479,2.707881 \r
	C21.907385,2.623557 21.885099,1.590600 22.000000,1.000000 \r
	C29.020948,1.000000 36.041897,1.000000 43.531418,1.000001 \r
z`}),t("path",{fill:"#A4ABB8",opacity:"1.000000",stroke:"none",d:`\r
M257.162231,110.668755 \r
	C261.116943,97.667458 269.291809,89.272476 282.138794,86.495789 \r
	C301.507996,82.309418 321.001160,96.566795 321.000793,116.348625 \r
	C320.999329,196.012711 320.971497,275.676819 321.024872,355.340851 \r
	C321.035309,370.929901 307.088623,384.928589 291.344971,385.100342 \r
	C282.680115,385.194916 274.866730,383.702881 268.029510,378.041351 \r
	C261.391388,372.544708 257.136658,365.532867 257.117798,357.083069 \r
	C256.934753,275.086395 257.026794,193.089081 257.162231,110.668755 \r
z`}),t("path",{fill:"#A4ABB8",opacity:"1.000000",stroke:"none",d:`\r
M128.999969,301.000000 \r
	C128.999969,274.352142 128.918091,248.203934 129.031067,222.056564 \r
	C129.097458,206.691895 142.869675,193.402451 158.222366,192.904526 \r
	C167.299789,192.610123 175.556152,194.257065 182.429626,200.349289 \r
	C188.471344,205.704254 192.849884,212.450836 192.890625,220.629166 \r
	C193.117859,266.261871 193.407120,311.902008 192.762985,357.526764 \r
	C192.557495,372.080719 180.757339,383.165161 166.168579,384.869049 \r
	C156.934998,385.947479 148.038361,384.750763 140.314285,378.185547 \r
	C133.420624,372.326202 129.259201,365.291168 129.099594,356.458588 \r
	C128.768616,338.144440 128.999863,319.820129 128.999969,301.000000 \r
z`}),t("path",{fill:"#A4ABB8",opacity:"1.000000",stroke:"none",d:`\r
M449.000000,309.000000 \r
	C449.000061,324.156128 448.506226,338.833252 449.129364,353.462860 \r
	C449.853302,370.458527 434.626526,385.531189 417.248016,385.246277 \r
	C401.364075,384.985901 389.179047,375.583710 385.247375,360.486633 \r
	C384.879486,359.073914 385.008820,357.516022 385.008453,356.025513 \r
	C384.997742,311.390961 384.950287,266.756317 385.027069,222.121902 \r
	C385.053619,206.703613 398.870728,193.370193 414.157867,192.925385 \r
	C423.002045,192.668060 431.079102,194.079865 437.968170,200.064148 \r
	C444.541748,205.774353 448.866486,212.782333 448.926056,221.562943 \r
	C449.122559,250.540802 449.000031,279.520813 449.000000,309.000000 \r
z`})]),d(" Statistiks ")])],-1);function Z(e,a,c,s,n,_){const v=E,f=F,x=y("RouterLink");return o(),r(w,null,[W,t("div",G,[t("div",I,[t("div",J,[l(v),l(f)])])]),t("div",K,[t("ul",Q,[U,t("li",null,[l(x,{to:"/workers"},{default:B(()=>[X,d(" Textes ")]),_:1})]),Y])])],64)}const e0=m(H,[["render",Z]]);export{e0 as default};
