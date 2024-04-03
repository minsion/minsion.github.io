import{c as k,_ as c}from"./codePreview.b8512f6b.js";import{d as x,u as g,a as y,o as d,b as w,e as t,g as e,f as n,j as r,X as u,w as o,D as p,k as _,p as j,E as m}from"./index.ddf2ada6.js";import{I as b}from"./icon-code.a018a24c.js";const C=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Elements")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Button Group")])],-1),D={class:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6"},B={class:"panel"},P={class:"flex items-center justify-between mb-5"},I=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Horizontal",-1),V={class:"flex items-center"},$=_('<div class="mb-5 text-center"><div class="relative inline-flex align-middle"><button type="button" class="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">Left</button><button type="button" class="btn btn-dark rounded-none">Middle</button><button type="button" class="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">Right</button></div></div>',1),N=t("pre",null,`<!-- horizontal -->
<div class="relative inline-flex align-middle">
  <button type="button" class="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">Left</button>
  <button type="button" class="btn btn-dark rounded-none">Middle</button>
  <button type="button" class="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">Right</button>
</div>
`,-1),A={class:"panel"},S={class:"flex items-center justify-between mb-5"},E=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Group",-1),G={class:"flex items-center"},M=_('<div class="mb-5"><div class="flex flex-wrap justify-center sm:justify-between items-center gap-4 w-full"><div><div class="relative inline-flex align-middle"><button type="button" class="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">1</button><button type="button" class="btn btn-dark rounded-none">2</button><button type="button" class="btn btn-dark rounded-none">3</button><button type="button" class="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">4</button></div></div><div class="flex relative items-stretch flex-wrap"><div class="ltr:-mr-px rtl:-ml-px flex"><span class="border border-[#e0e6ed] dark:border-[#17263c] ltr:rounded-l rtl:rounded-r bg-[#f1f2f3] flex items-center justify-center text-black px-4 py-1.5 dark:bg-[#1a1c2d] dark:text-white-dark">@</span></div><input type="text" placeholder="Input group example" class="flex-1 form-input ltr:rounded-l-none rtl:rounded-r-none"></div></div></div>',1),z=t("pre",null,`<!-- button group -->
<div>
  <div class="relative inline-flex align-middle">
    <button type="button" class="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">1</button>
    <button type="button" class="btn btn-dark rounded-none">2</button>
    <button type="button" class="btn btn-dark rounded-none">3</button>
    <button type="button" class="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">4</button>
  </div>
</div>

<!-- input group -->
<div class="flex relative items-stretch flex-wrap">
  <div class="ltr:-mr-px rtl:-ml-px flex">
    <span
      class="
        border border-[#e0e6ed]
        dark:border-[#17263c]
        ltr:rounded-l
        rtl:rounded-r
        bg-[#f1f2f3]
        flex
        items-center
        justify-center
        text-black
        px-4
        py-1.5
        dark:bg-[#1a1c2d] dark:text-white-dark
      "
      >@</span
    >
  </div>
  <input type="text" placeholder="Input group example" class="flex-1 form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>
`,-1),L={class:"panel"},R={class:"flex items-center justify-between mb-5"},H=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical",-1),T={class:"flex items-center"},X={class:"mb-5 text-center"},q={class:"relative inline-flex align-middle flex-col items-start justify-center"},F=t("button",{type:"button",class:"btn btn-dark rounded-b-none w-full"},"Button",-1),J={class:"dropdown"},K={href:"javascript:;",class:"btn dropdown-toggle btn-dark rounded-none"},O=["onClick"],Q=t("li",null,[t("a",{href:"javascript:;"},"Dropdown link")],-1),U=t("li",null,[t("a",{href:"javascript:;"},"Dropdown link")],-1),W=[Q,U],Y=t("button",{type:"button",class:"btn btn-dark rounded-none w-full"},"Button",-1),Z=t("button",{type:"button",class:"btn btn-dark rounded-none w-full"},"Button",-1),tt={class:"dropdown"},et={href:"javascript:;",class:"btn dropdown-toggle btn-dark rounded-t-none"},nt=["onClick"],ot=t("li",null,[t("a",{href:"javascript:;"},"Dropdown link")],-1),st=t("li",null,[t("a",{href:"javascript:;"},"Dropdown link")],-1),lt=[ot,st],rt=t("pre",null,`<!-- vertical -->
<div class="relative inline-flex align-middle flex-col items-start justify-center">
  <button type="button" class="btn btn-dark rounded-b-none w-full">Button</button>
  <div class="dropdown">
    <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
      <a href="javascript:;" class="btn dropdown-toggle btn-dark rounded-none"> Dropdown <svg> ... </svg> </a>
      <template #content="{ close }">
        <ul @click="close()">
          <li>
            <a href="javascript:;">Dropdown link</a>
          </li>
          <li>
            <a href="javascript:;">Dropdown link</a>
          </li>
        </ul>
      </template>
    </Popper>
  </div>
  <button type="button" class="btn btn-dark rounded-none w-full">Button</button>
  <button type="button" class="btn btn-dark rounded-none w-full">Button</button>
  <div class="dropdown">
    <Popper :placement="store.rtlClass === 'rtl' ? 'top-start' : 'top-end'" offsetDistance="0" class="align-middle">
      <a href="javascript:;" class="btn dropdown-toggle btn-dark rounded-t-none"> Dropdown <svg> ... </svg> </a>
      <template #content="{ close }">
        <ul @click="close()">
          <li>
            <a href="javascript:;">Dropdown link</a>
          </li>
          <li>
            <a href="javascript:;">Dropdown link</a>
          </li>
        </ul>
      </template>
    </Popper>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),pt=x({__name:"buttons-group",setup(dt){g({title:"Buttons Group"});const f=y(),{codeArr:a,toggleCode:i}=k();return(at,s)=>{const v=j("Popper");return d(),w("div",null,[C,t("div",D,[t("div",B,[t("div",P,[I,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:s[0]||(s[0]=l=>e(i)("code1"))},[t("span",V,[n(b,{class:"me-2"}),r(" Code ")])])]),$,e(a).includes("code1")?(d(),u(c,{key:0},{default:o(()=>[N]),_:1})):p("",!0)]),t("div",A,[t("div",S,[E,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:s[1]||(s[1]=l=>e(i)("code2"))},[t("span",G,[n(b,{class:"me-2"}),r(" Code ")])])]),M,e(a).includes("code2")?(d(),u(c,{key:0},{default:o(()=>[z]),_:1})):p("",!0)]),t("div",L,[t("div",R,[H,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:s[2]||(s[2]=l=>e(i)("code3"))},[t("span",T,[n(b,{class:"me-2"}),r(" Code ")])])]),t("div",X,[t("div",q,[F,t("div",J,[n(v,{placement:e(f).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:o(({close:l})=>[t("ul",{onClick:h=>l()},W,8,O)]),default:o(()=>[t("a",K,[r(" Dropdown "),n(m,{class:"ltr:ml-2 rtl:mr-2 inline-block shrink-0"})])]),_:1},8,["placement"])]),Y,Z,t("div",tt,[n(v,{placement:e(f).rtlClass==="rtl"?"top-start":"top-end",offsetDistance:"0",class:"align-middle"},{content:o(({close:l})=>[t("ul",{onClick:h=>l()},lt,8,nt)]),default:o(()=>[t("a",et,[r(" Dropdown "),n(m,{class:"ltr:ml-2 rtl:mr-2 inline-block shrink-0"})])]),_:1},8,["placement"])])])]),e(a).includes("code3")?(d(),u(c,{key:0},{default:o(()=>[rt]),_:1})):p("",!0)])])])}}});export{pt as default};
