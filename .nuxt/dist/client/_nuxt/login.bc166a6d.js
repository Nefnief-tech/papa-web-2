import{B as w,a as b,r as o,l as v,m as e,E as p,G as m,A as l,H as _,F as f,C as x,k as h}from"./entry.79c549bd.js";const y=e("h1",{class:"text-3xl font-black text-center m-10"},"Admin Login",-1),k={class:"card w-96 bg-base-100 shadow-xl pcenter"},E=e("div",{class:"bg-red rounded-lg"},[e("p",{id:"error",class:"p-10"})],-1),B={class:"card-body"},U={setup(){return{loggedInUser,email,password,name,login,register,logout}}},V=Object.assign(U,{__name:"login",setup(A){const r=new x;r.setEndpoint("https://appwrite.nief.tech/v1").setProject("65254ba2c6d13ae30a67");const i=new w(r),c=b(),u=o(null),n=o(""),a=o("");o("");const g=async(d,s)=>{try{await i.createEmailSession(d,s),u.value=await i.get(),c.push("/admin")}catch(t){console.error(t)}};return u.value||c.push({name:"login",query:{source_path:"/admin"}}),(d,s)=>(h(),v(f,null,[y,e("div",null,[e("div",k,[E,e("div",B,[e("form",null,[p(e("input",{type:"email",placeholder:"Email","onUpdate:modelValue":s[0]||(s[0]=t=>_(n)?n.value=t:null),class:"input input-bordered input-success w-full max-w-xs m-5 snap-center"},null,512),[[m,l(n)]]),p(e("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=t=>_(a)?a.value=t:null),class:"input input-bordered input-success w-full max-w-xs m-5 snap-center"},null,512),[[m,l(a)]]),e("button",{type:"button",onClick:s[2]||(s[2]=t=>g(l(n),l(a))),class:"btn btn-success m-5 mb-5 btn-wide"}," Login ")])])])])],64))}});export{V as default};