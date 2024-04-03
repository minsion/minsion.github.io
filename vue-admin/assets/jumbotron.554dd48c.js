import{d as u,u as f,o as r,b as x,e as t,g as s,f as a,j as i,X as n,w as d,D as c,k as p,L as g}from"./index.ddf2ada6.js";import{c as k,_ as m}from"./codePreview.b8512f6b.js";import{I as b}from"./icon-code.a018a24c.js";const v=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Elements")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Jumbotron")])],-1),w={class:"pt-5 grid grid-cols-1 xl:grid-cols-2 gap-6"},_={class:"panel"},y={class:"flex items-center justify-between mb-5"},j=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),C={class:"flex items-center"},T=p('<div class="mb-5"><div class="w-full"><div class="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light"><h2 class="text-dark mb-5 mt-4 text-center text-5xl dark:text-white-light">Hello, world!</h2><p class="lead mt-3 mb-4 dark:text-white-light"> This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. </p><hr class="my-4 dark:border-[#191e3a]"><p class="mb-5">It uses utility classes for typography and spacing to space content out within the larger container.</p><p class="lead"><button type="button" class="btn btn-dark">Learn more</button></p></div></div></div>',1),I=t("pre",null,`<!-- basic -->
<div class="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light">
    <h2 class="text-dark mb-5  mt-4 text-center text-5xl dark:text-white-light">Hello, world!</h2>
    <p class="lead mt-3 mb-4 dark:text-white-light">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4 dark:border-[#191e3a]">
    <p class="mb-5">It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead"><button type="button" class="btn btn-dark">Learn more</button></p>
</div>
`,-1),B={class:"panel"},J={class:"flex items-center justify-between mb-5"},L=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Jumbotron Fluid",-1),N={class:"flex items-center"},S=p('<div class="mb-5"><div class="w-full"><div class="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light"><h2 class="text-dark mb-5 mt-4 text-center text-5xl dark:text-white-light">Fluid Jumbotron</h2><p class="lead mt-3 mb-4 dark:text-white-light"> This is a modified jumbotron that occupies the entire horizontal space of its parent. </p><blockquote class="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"><div class="flex items-start"><div class="w-14 h-14 ltr:mr-5 rtl:ml-5 flex-none"><img src="'+g+'" alt="" class="w-14 h-14 rounded-full object-cover m-auto"></div><p class="not-italic text-[#515365] text-sm dark:text-white-light m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p></div><small class="ltr:text-right rtl:text-left w-full not-italic text-xs text-[#777] block before:w-3 before:h-[1px] before:bg-[#777] before:inline-block before:opacity-50 before:relative before:-top-1 before:ltr:mr-1 rtl:before:ml-1">Someone famous <cite class="italic">Source Title</cite></small></blockquote></div></div></div>',1),V=t("pre",null,`<!-- jumbotron fluid -->
<div class="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light">
    <h2 class="text-dark mb-5  mt-4 text-center text-5xl dark:text-white-light">Fluid Jumbotron</h2>
    <p class="lead mt-3 mb-4 dark:text-white-light">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <blockquote class="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]">
        <div class="flex items-start">
            <div class="w-14 h-14 ltr:mr-5 rtl:ml-5 flex-none">
                <img src="/assets/images/profile-34.jpeg" alt="" class="w-14 h-14 rounded-full object-cover m-auto" />
            </div>
            <p class="not-italic text-[#515365] text-sm dark:text-white-light m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </div>
        <small class="ltr:text-right rtl:text-left w-full not-italic text-xs text-[#777] block before:w-3 before:h-[1px] before:bg-[#777] before:inline-block before:opacity-50 before:relative before:-top-1 before:ltr:mr-1 rtl:ml-1">Someone famous <cite class="italic">Source Title</cite></small>
    </blockquote>
</div>
`,-1),H=u({__name:"jumbotron",setup(q){f({title:"Jumbotron"});const{codeArr:o,toggleCode:l}=k();return(F,e)=>(r(),x("div",null,[v,t("div",w,[t("div",_,[t("div",y,[j,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[0]||(e[0]=h=>s(l)("code1"))},[t("span",C,[a(b,{class:"me-2"}),i(" Code ")])])]),T,s(o).includes("code1")?(r(),n(m,{key:0},{default:d(()=>[I]),_:1})):c("",!0)]),t("div",B,[t("div",J,[L,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[1]||(e[1]=h=>s(l)("code2"))},[t("span",N,[a(b,{class:"me-2"}),i(" Code ")])])]),S,s(o).includes("code2")?(r(),n(m,{key:0},{default:d(()=>[V]),_:1})):c("",!0)])])]))}});export{H as default};
