import{c as g,_ as o}from"./codePreview.b8512f6b.js";import{d as h,u as w,o as r,b as _,e as n,g as a,f as s,j as l,X as d,w as b,D as m,k as f}from"./index.ddf2ada6.js";import{I as p}from"./icon-code.a018a24c.js";import{I as u}from"./icon-loader.919aa7f6.js";const k=n("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[n("li",null,[n("a",{href:"javascript:;",class:"text-primary hover:underline"},"Elements")]),n("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[n("span",null,"Loader")])],-1),x={class:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6"},y={class:"panel"},v={class:"flex items-center justify-between mb-5"},j=n("h5",{class:"font-semibold text-lg dark:text-white-light"},"Loaders with Buttons",-1),C={class:"flex items-center"},L={class:"mb-5"},B={class:"flex flex-wrap items-center justify-center w-full gap-4"},$={type:"button",class:"btn btn-info btn-lg"},N=n("button",{type:"button",class:"btn btn-danger btn-lg"},[n("span",{class:"animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle shrink-0"}),l("Loading ")],-1),V=n("button",{type:"button",class:"btn btn-secondary btn-lg"},[n("span",{class:"animate-ping w-3 h-3 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white shrink-0"}),l(" Loading ")],-1),I=n("pre",null,`<!-- info -->
<button type="button" class="btn btn-info btn-lg">
  <svg> ... </svg>
  Loading
</button>

<button type="button" class="btn btn-danger btn-lg">
  <span class="animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle"></span>Loading
</button>

<button type="button" class="btn btn-secondary btn-lg">
  <span class="animate-ping w-3 h-3 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white"></span>
  Loading
</button>
`,-1),D={class:"panel"},E={class:"flex items-center justify-between mb-5"},O=n("h5",{class:"font-semibold text-lg dark:text-white-light"},"Position",-1),P={class:"flex items-center"},S={class:"mb-5"},z={class:"flex flex-wrap w-full"},A={class:"flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center mb-3 sm:mb-0"},M=n("p",{class:"w-full mb-2"},"Default Button",-1),T={type:"button",class:"btn btn-primary btn-lg"},X={class:"flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center"},q=n("p",{class:"w-full mb-2"},"Outline Button",-1),F={type:"button",class:"btn btn-outline-primary btn-lg"},G=n("pre",null,`<!-- default -->
<div class="flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center mb-3 sm:mb-0">
  <p class="w-full mb-2">Default Button</p>
  <button type="button" class="btn btn-primary btn-lg">
    <svg> ... </svg>
    Loading
  </button>
</div>

<!-- outline -->
<div class="flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center">
  <p class="w-full mb-2">Outline Button</p>
  <button type="button" class="btn btn-outline-primary btn-lg">
    Loading
    <svg> ... </svg>
  </button>
</div>
`,-1),H={class:"panel"},J={class:"flex items-center justify-between mb-10"},K=n("h5",{class:"font-semibold text-lg dark:text-white-light"},"Sizes",-1),Q={class:"flex items-center"},R=f('<div class="mb-5"><div class="grid grid-cols-3 w-full gap-4"><span class="animate-spin border-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-[3px] border-success border-l-transparent rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-4 border-transparent border-l-primary rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-[3px] border-transparent border-l-primary rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span><span class="w-5 h-5 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-info"></span></span><span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-info"></span></span><span class="w-3 h-3 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-info"></span></span></div></div>',1),U=n("pre",null,`<!-- large -->
<span class="animate-spin border-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>

<!-- default -->
<span class="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<!-- small -->
<span class="animate-spin border-[3px] border-success border-l-transparent rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span>

<!-- large -->
<span class="animate-spin border-4 border-transparent border-l-primary rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>

<!-- default -->
<span class="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<!-- small -->
<span class="animate-spin border-[3px] border-transparent border-l-primary rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span>

<!-- large -->
<span class="w-5 h-5 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-info"></span></span>

<!-- default -->
<span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-info"></span></span>

<!-- small -->
<span class="w-3 h-3 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-info"></span></span>
`,-1),W={class:"panel"},Y={class:"flex items-center justify-between mb-10"},Z=n("h5",{class:"font-semibold text-lg dark:text-white-light"},"Colors",-1),nn={class:"flex items-center"},en=f('<div class="mb-5"><div class="grid grid-cols-4 w-full gap-4"><span class="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-4 border-danger border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-4 border-warning border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-4 border-primary border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span><span class="animate-spin border-4 border-transparent border-l-danger rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-4 border-transparent border-l-warning rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span><span class="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span><span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-info"></span></span><span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-danger"></span></span><span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-warning"></span></span><span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-primary"></span></span></div></div>',1),an=n("pre",null,`<!-- success -->
<span class="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<!-- danger -->
<span class="animate-spin border-4 border-danger border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<!-- warning -->
<span class="animate-spin border-4 border-warning border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<!-- primary -->
<span class="animate-spin border-4 border-primary border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<!-- black -->
<span class="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>

<!-- danger -->
<span class="animate-spin border-4 border-transparent border-l-danger rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<!-- warning -->
<span class="animate-spin border-4 border-transparent border-l-warning rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<!-- primary -->
<span class="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<!-- info -->
<span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-info"></span></span>

<!-- danger -->
<span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-danger"></span></span>

<!-- warning -->
<span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-warning"></span></span>

<!-- primary -->
<span class="w-4 h-4 m-auto mb-10"><span class="animate-ping inline-flex h-full w-full rounded-full bg-primary"></span></span>
`,-1),ln={class:"panel"},sn={class:"flex items-center justify-between mb-10"},rn=n("h5",{class:"font-semibold text-lg dark:text-white-light"},"Custom",-1),tn={class:"flex items-center"},on=f('<div class="mb-5"><div class="grid grid-cols-3 w-full gap-4"><span class="animate-spin border-8 border-[#f1f2f3] border-l-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span><span class="animate-[spin_2s_linear_infinite] border-8 border-[#f1f2f3] border-l-primary border-r-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span><span class="animate-[spin_3s_linear_infinite] border-8 border-r-warning border-l-primary border-t-danger border-b-success rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span></div></div>',1),dn=n("pre",null,`<!-- custom loader -->
<span class="animate-spin border-8 border-[#f1f2f3] border-l-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>

<!-- custom loader -->
<span class="animate-[spin_2s_linear_infinite] border-8 border-[#f1f2f3] border-l-primary border-r-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>

<!-- custom loader -->
<span
  class="animate-[spin_3s_linear_infinite] border-8 border-r-warning border-l-primary border-t-danger border-b-success rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"
></span>
`,-1),gn=h({__name:"loader",setup(bn){w({title:"Loader"});const{codeArr:t,toggleCode:i}=g();return(mn,e)=>(r(),_("div",null,[k,n("div",x,[n("div",y,[n("div",v,[j,n("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[0]||(e[0]=c=>a(i)("code1"))},[n("span",C,[s(p,{class:"me-2"}),l(" Code ")])])]),n("div",L,[n("div",B,[n("button",$,[s(u,{class:"animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0"}),l(" Loading ")]),N,V])]),a(t).includes("code1")?(r(),d(o,{key:0},{default:b(()=>[I]),_:1})):m("",!0)]),n("div",D,[n("div",E,[O,n("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[1]||(e[1]=c=>a(i)("code2"))},[n("span",P,[s(p,{class:"me-2"}),l(" Code ")])])]),n("div",S,[n("div",z,[n("div",A,[M,n("button",T,[s(u,{class:"animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0"}),l(" Loading ")])]),n("div",X,[q,n("button",F,[l(" Loading "),s(u,{class:"animate-[spin_2s_linear_infinite] inline-block align-middle ltr:ml-2 rtl:mr-2 shrink-0"})])])])]),a(t).includes("code2")?(r(),d(o,{key:0},{default:b(()=>[G]),_:1})):m("",!0)]),n("div",H,[n("div",J,[K,n("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[2]||(e[2]=c=>a(i)("code3"))},[n("span",Q,[s(p,{class:"me-2"}),l(" Code ")])])]),R,a(t).includes("code3")?(r(),d(o,{key:0},{default:b(()=>[U]),_:1})):m("",!0)]),n("div",W,[n("div",Y,[Z,n("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[3]||(e[3]=c=>a(i)("code4"))},[n("span",nn,[s(p,{class:"me-2"}),l(" Code ")])])]),en,a(t).includes("code4")?(r(),d(o,{key:0},{default:b(()=>[an]),_:1})):m("",!0)]),n("div",ln,[n("div",sn,[rn,n("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[4]||(e[4]=c=>a(i)("code5"))},[n("span",tn,[s(p,{class:"me-2"}),l(" Code ")])])]),on,a(t).includes("code5")?(r(),d(o,{key:0},{default:b(()=>[dn]),_:1})):m("",!0)])])]))}});export{gn as default};
