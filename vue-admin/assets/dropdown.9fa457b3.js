import{c as g,_}from"./codePreview.b8512f6b.js";import{d as w,u as k,a as j,o as p,b as y,e as t,f as s,g as l,j as n,w as e,X as f,D as b,p as x,E as d,q as v}from"./index.ddf2ada6.js";import{I as A}from"./icon-bell.2ecf9464.js";import{I as m}from"./icon-code.a018a24c.js";const C=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Elements")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Dropdowns")])],-1),S={class:"pt-5 space-y-8"},D={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},P={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},$=t("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),B=t("a",{href:"https://www.npmjs.com/package/vue3-popper",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/vue3-popper",-1),L={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},I={class:"panel"},T={class:"flex items-center justify-between mb-5"},N=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),R={class:"flex items-center"},U={class:"mb-5"},V={class:"flex flex-wrap w-full justify-around gap-7"},E={class:"dropdown"},q={type:"button",class:"btn btn-primary dropdown-toggle"},z=["onClick"],G=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),H=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),M=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),X=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),F=[G,H,M,X],J={class:"dropdown"},K={type:"button",class:"btn btn-outline-primary dropdown-toggle"},O=["onClick"],Q=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),W=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),Y=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Z=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),tt=[Q,W,Y,Z],et=t("pre",null,`<!-- default -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-primary dropdown-toggle">
      Action
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- outline -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-outline-primary dropdown-toggle">
      Action
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),ot={class:"panel"},st={class:"flex items-center justify-between mb-5"},lt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Dropup",-1),nt={class:"flex items-center"},at={class:"mb-5"},rt={class:"flex flex-wrap w-full justify-around gap-7"},it={class:"dropdown"},ct={type:"button",class:"btn btn-info dropdown-toggle inline-flex"},dt=["onClick"],pt=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),ht=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),ut=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),_t=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),ft=[pt,ht,ut,_t],bt={class:"dropdown"},mt={type:"button",class:"btn btn-outline-info dropdown-toggle inline-flex"},vt=["onClick"],gt=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),wt=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),kt=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),jt=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),yt=[gt,wt,kt,jt],xt=t("pre",null,`<!-- default -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'top-start' : 'top-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-info dropdown-toggle inline-flex">
      Up
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- outline -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'top-start' : 'top-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-outline-info dropdown-toggle inline-flex">
      Up
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>


<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),At={class:"panel"},Ct={class:"flex items-center justify-between mb-5"},St=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Dropright",-1),Dt={class:"flex items-center"},Pt={class:"mb-5"},$t={class:"flex flex-wrap w-full justify-around gap-7"},Bt={class:"dropdown"},Lt={type:"button",class:"btn btn-warning dropdown-toggle"},It=["onClick"],Tt=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),Nt=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),Rt=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Ut=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Vt=[Tt,Nt,Rt,Ut],Et={class:"dropdown"},qt={type:"button",class:"btn btn btn-outline-warning dropdown-toggle"},zt=["onClick"],Gt=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),Ht=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),Mt=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Xt=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Ft=[Gt,Ht,Mt,Xt],Jt=t("pre",null,`<!-- default -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'left-start' : 'right-start'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-info dropdown-toggle">
      Right
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap !my-0 ltr:ml-1 rtl:mr-1">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- outline -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'left-start' : 'right-start'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn btn-outline-warning dropdown-toggle">
      Right
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap !my-0 ltr:ml-1 rtl:mr-1">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),Kt={class:"panel"},Ot={class:"flex items-center justify-between mb-5"},Qt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Dropleft",-1),Wt={class:"flex items-center"},Yt={class:"mb-5"},Zt={class:"flex flex-wrap w-full justify-around gap-7"},te={class:"dropdown"},ee={type:"button",class:"btn btn-danger dropdown-toggle"},oe=["onClick"],se=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),le=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),ne=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),ae=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),re=[se,le,ne,ae],ie={class:"dropdown"},ce={type:"button",class:"btn btn-outline-danger dropdown-toggle"},de=["onClick"],pe=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),he=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),ue=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),_e=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),fe=[pe,he,ue,_e],be=t("pre",null,`<!-- default -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'right-start' : 'left-start'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-danger dropdown-toggle">
      <svg> ... </svg>
      Left
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap !my-0 ltr:mr-1 rtl:ml-1">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- outline -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'right-start' : 'left-start'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-outline-danger dropdown-toggle">
      <svg> ... </svg>
      Left
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap !my-0 ltr:mr-1 rtl:ml-1">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),me={class:"panel"},ve={class:"flex items-center justify-between mb-5"},ge=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Small Button",-1),we={class:"flex items-center"},ke={class:"mb-5"},je={class:"flex flex-wrap w-full justify-around gap-7"},ye={class:"dropdown"},xe={type:"button",class:"btn btn-dark btn-sm dropdown-toggle"},Ae=["onClick"],Ce=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),Se=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),De=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Pe=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),$e=[Ce,Se,De,Pe],Be={class:"dropdown"},Le={type:"button",class:"btn btn-outline-dark btn-sm dropdown-toggle"},Ie=["onClick"],Te=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),Ne=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),Re=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Ue=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Ve=[Te,Ne,Re,Ue],Ee=t("pre",null,`<!-- default -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-dark btn-sm dropdown-toggle">
      Small Button
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- outline -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-outline-dark btn-sm dropdown-toggle">
      Small Button
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),qe={class:"panel"},ze={class:"flex items-center justify-between mb-5"},Ge=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Large Button",-1),He={class:"flex items-center"},Me={class:"mb-5"},Xe={class:"flex flex-wrap w-full justify-around gap-7"},Fe={class:"dropdown"},Je={type:"button",class:"btn btn-success btn-lg dropdown-toggle"},Ke=["onClick"],Oe=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),Qe=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),We=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Ye=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Ze=[Oe,Qe,We,Ye],to={class:"dropdown"},eo={type:"button",class:"btn btn-outline-success btn-lg dropdown-toggle"},oo=["onClick"],so=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),lo=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),no=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),ao=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),ro=[so,lo,no,ao],io=t("pre",null,`<!-- default -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-success btn-lg dropdown-toggle">
      Large Button
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- outline -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn btn-outline-success btn-lg dropdown-toggle">
      Large Button
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),co={class:"panel"},po={class:"flex items-center justify-between mb-5"},ho=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Grouped Dropdown Buttons",-1),uo={class:"flex items-center"},_o={class:"mb-5"},fo={class:"flex flex-wrap w-full justify-around gap-7"},bo={class:"relative inline-flex align-middle"},mo=t("button",{type:"button",class:"btn btn-secondary ltr:rounded-r-none rtl:rounded-l-none"},"1",-1),vo=t("button",{type:"button",class:"btn btn-secondary rounded-none"},"2",-1),go={class:"dropdown"},wo={type:"button",class:"btn dropdown-toggle btn-secondary flex ltr:rounded-l-none rtl:rounded-r-none"},ko=["onClick"],jo=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),yo=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),xo=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Ao=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Co=[jo,yo,xo,Ao],So={class:"relative inline-flex align-middle"},Do=t("button",{type:"button",class:"btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none"}," 1 ",-1),Po=t("button",{type:"button",class:"btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 rounded-none"},"2",-1),$o={class:"dropdown"},Bo={type:"button",class:"btn dropdown-toggle btn-outline-secondary flex ltr:rounded-l-none rtl:rounded-r-none"},Lo=["onClick"],Io=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),To=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),No=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Ro=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Uo=[Io,To,No,Ro],Vo=t("pre",null,`<!-- default -->
<div class="relative inline-flex align-middle">
  <button type="button" class="btn btn-secondary ltr:rounded-r-none rtl:rounded-l-none">1</button>
  <button type="button" class="btn btn-secondary rounded-none">2</button>
  <div class="dropdown">
    <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
      <button type="button" class="btn dropdown-toggle btn-secondary flex ltr:rounded-l-none rtl:rounded-r-none">
        Dropdown
        <svg> ... </svg>
      </button>
      <template #content="{ close }">
        <ul @click="close()" class="whitespace-nowrap">
          <li><a href="javascript:;">Action</a></li>
          <li><a href="javascript:;">Another action</a></li>
          <li><a href="javascript:;">Something else here</a></li>
          <li><a href="javascript:;">Separated link</a></li>
        </ul>
      </template>
    </Popper>
  </div>
</div>

<!-- outline -->
<div class="relative inline-flex align-middle">
  <button type="button" class="btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none">1</button>
  <button type="button" class="btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 rounded-none">2</button>
  <div class="dropdown">
    <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
      <button type="button" class="btn dropdown-toggle btn-outline-secondary flex ltr:rounded-l-none rtl:rounded-r-none">
        Dropdown
        <svg> ... </svg>
      </button>
      <template #content="{ close }">
        <ul @click="close()" class="whitespace-nowrap">
          <li><a href="javascript:;">Action</a></li>
          <li><a href="javascript:;">Another action</a></li>
          <li><a href="javascript:;">Something else here</a></li>
          <li><a href="javascript:;">Separated link</a></li>
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
`,-1),Eo={class:"panel"},qo={class:"flex items-center justify-between mb-5"},zo=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Split",-1),Go={class:"flex items-center"},Ho={class:"mb-5"},Mo={class:"flex flex-wrap w-full justify-around gap-7"},Xo={class:"dropdown inline-flex"},Fo=t("button",{type:"button",class:"btn btn-primary ltr:rounded-r-none rtl:rounded-l-none"},"Action",-1),Jo=t("button",{type:"button",class:"btn dropdown-toggle btn-primary h-full ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light"},[t("span",{class:"sr-only"},"Toggle dropdown")],-1),Ko=["onClick"],Oo=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),Qo=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),Wo=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Yo=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Zo=[Oo,Qo,Wo,Yo],ts={class:"dropdown inline-flex"},es=t("button",{type:"button",class:"btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none"},"Action",-1),os=t("button",{type:"button",class:"btn btn-outline-primary h-full ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light"},[t("span",{class:"sr-only"},"Toggle dropdown")],-1),ss=["onClick"],ls=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),ns=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),as=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),rs=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),is=[ls,ns,as,rs],cs=t("pre",null,`<!-- default -->
<div class="dropdown inline-flex">
  <button type="button" class="btn btn-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
  <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="!flex">
    <button
      type="button"
      class="btn dropdown-toggle btn-primary h-full ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light"
    >
      <span class="sr-only">Toggle dropdown</span>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- outline -->
<div class="dropdown inline-flex">
  <button type="button" class="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
  <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="!flex">
    <button
      type="button"
      class="btn btn-outline-primary h-full ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light"
    >
      <span class="sr-only">Toggle dropdown</span>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),ds={class:"panel"},ps={class:"flex items-center justify-between mb-5"},hs=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Custom Dropdown",-1),us={class:"flex items-center"},_s={class:"mb-5"},fs={class:"flex w-full items-center justify-around"},bs={class:"dropdown"},ms={type:"button",class:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"},vs=["onClick"],gs=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),ws=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),ks=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),js=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),ys=[gs,ws,ks,js],xs={class:"dropdown"},As={type:"button",class:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"},Cs=["onClick"],Ss=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),Ds=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),Ps=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),$s=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Bs=[Ss,Ds,Ps,$s],Ls={class:"dropdown"},Is={type:"button",class:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"},Ts=["onClick"],Ns=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),Rs=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),Us=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Vs=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Es=[Ns,Rs,Us,Vs],qs={class:"dropdown"},zs={type:"button",class:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"},Gs=["onClick"],Hs=t("li",null,[t("a",{href:"javascript:;"},"Action")],-1),Ms=t("li",null,[t("a",{href:"javascript:;"},"Another action")],-1),Xs=t("li",null,[t("a",{href:"javascript:;"},"Something else here")],-1),Fs=t("li",null,[t("a",{href:"javascript:;"},"Separated link")],-1),Js=[Hs,Ms,Xs,Fs],Ks=t("pre",null,`<!-- custom -->
<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'top-end' : 'top-start'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary">
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'top-end' : 'top-start'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary">
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'top-start' : 'top-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary">
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<div class="dropdown">
  <Popper :placement="store.rtlClass === 'rtl' ? 'top-start' : 'top-end'" offsetDistance="0" class="align-middle">
    <button type="button" class="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary">
      <svg> ... </svg>
    </button>
    <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Another action</a></li>
        <li><a href="javascript:;">Something else here</a></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </template>
  </Popper>
</div>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),el=w({__name:"dropdown",setup(Os){k({title:"Dropdown"});const a=j(),{codeArr:h,toggleCode:u}=g();return(Qs,c)=>{const r=x("Popper");return p(),y("div",null,[C,t("div",S,[t("div",D,[t("div",P,[s(A)]),$,B]),t("div",L,[t("div",I,[t("div",T,[N,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[0]||(c[0]=o=>l(u)("code1"))},[t("span",R,[s(m,{class:"me-2"}),n(" Code ")])])]),t("div",U,[t("div",V,[t("div",E,[s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},F,8,z)]),default:e(()=>[t("button",q,[n(" Action "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block"})])]),_:1},8,["placement"])]),t("div",J,[s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},tt,8,O)]),default:e(()=>[t("button",K,[n(" Action "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block"})])]),_:1},8,["placement"])])])]),l(h).includes("code1")?(p(),f(_,{key:0},{default:e(()=>[et]),_:1})):b("",!0)]),t("div",ot,[t("div",st,[lt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[1]||(c[1]=o=>l(u)("code2"))},[t("span",nt,[s(m,{class:"me-2"}),n(" Code ")])])]),t("div",at,[t("div",rt,[t("div",it,[s(r,{placement:l(a).rtlClass==="rtl"?"top-start":"top-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},ft,8,dt)]),default:e(()=>[t("button",ct,[n(" Up "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block rotate-180"})])]),_:1},8,["placement"])]),t("div",bt,[s(r,{placement:l(a).rtlClass==="rtl"?"top-start":"top-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},yt,8,vt)]),default:e(()=>[t("button",mt,[n(" Up "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block rotate-180"})])]),_:1},8,["placement"])])])]),l(h).includes("code2")?(p(),f(_,{key:0},{default:e(()=>[xt]),_:1})):b("",!0)]),t("div",At,[t("div",Ct,[St,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[2]||(c[2]=o=>l(u)("code3"))},[t("span",Dt,[s(m,{class:"me-2"}),n(" Code ")])])]),t("div",Pt,[t("div",$t,[t("div",Bt,[s(r,{placement:l(a).rtlClass==="rtl"?"left-start":"right-start",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap !my-0 ltr:ml-1 rtl:mr-1"},Vt,8,It)]),default:e(()=>[t("button",Lt,[n(" Right "),s(d,{class:"ltr:ml-1 rtl:mr-1 rtl:rotate-90 -rotate-90 inline-block"})])]),_:1},8,["placement"])]),t("div",Et,[s(r,{placement:l(a).rtlClass==="rtl"?"left-start":"right-start",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap !my-0 ltr:ml-1 rtl:mr-1"},Ft,8,zt)]),default:e(()=>[t("button",qt,[n(" Right "),s(d,{class:"ltr:ml-1 rtl:mr-1 rtl:rotate-90 -rotate-90 inline-block"})])]),_:1},8,["placement"])])])]),l(h).includes("code3")?(p(),f(_,{key:0},{default:e(()=>[Jt]),_:1})):b("",!0)]),t("div",Kt,[t("div",Ot,[Qt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[3]||(c[3]=o=>l(u)("code4"))},[t("span",Wt,[s(m,{class:"me-2"}),n(" Code ")])])]),t("div",Yt,[t("div",Zt,[t("div",te,[s(r,{placement:l(a).rtlClass==="rtl"?"right-start":"left-start",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap !my-0 ltr:mr-1 rtl:ml-1"},re,8,oe)]),default:e(()=>[t("button",ee,[s(d,{class:"ltr:mr-1 rtl:ml-1 rtl:-rotate-90 rotate-90 inline-block"}),n(" Left ")])]),_:1},8,["placement"])]),t("div",ie,[s(r,{placement:l(a).rtlClass==="rtl"?"right-start":"left-start",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap !my-0 ltr:mr-1 rtl:ml-1"},fe,8,de)]),default:e(()=>[t("button",ce,[s(d,{class:"ltr:mr-1 rtl:ml-1 rtl:-rotate-90 rotate-90 inline-block"}),n(" Left ")])]),_:1},8,["placement"])])])]),l(h).includes("code4")?(p(),f(_,{key:0},{default:e(()=>[be]),_:1})):b("",!0)]),t("div",me,[t("div",ve,[ge,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[4]||(c[4]=o=>l(u)("code5"))},[t("span",we,[s(m,{class:"me-2"}),n(" Code ")])])]),t("div",ke,[t("div",je,[t("div",ye,[s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},$e,8,Ae)]),default:e(()=>[t("button",xe,[n(" Small Button "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block"})])]),_:1},8,["placement"])]),t("div",Be,[s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},Ve,8,Ie)]),default:e(()=>[t("button",Le,[n(" Small Button "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block"})])]),_:1},8,["placement"])])])]),l(h).includes("code5")?(p(),f(_,{key:0},{default:e(()=>[Ee]),_:1})):b("",!0)]),t("div",qe,[t("div",ze,[Ge,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[5]||(c[5]=o=>l(u)("code6"))},[t("span",He,[s(m,{class:"me-2"}),n(" Code ")])])]),t("div",Me,[t("div",Xe,[t("div",Fe,[s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},Ze,8,Ke)]),default:e(()=>[t("button",Je,[n(" Large Button "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block"})])]),_:1},8,["placement"])]),t("div",to,[s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},ro,8,oo)]),default:e(()=>[t("button",eo,[n(" Large Button "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block"})])]),_:1},8,["placement"])])])]),l(h).includes("code6")?(p(),f(_,{key:0},{default:e(()=>[io]),_:1})):b("",!0)]),t("div",co,[t("div",po,[ho,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[6]||(c[6]=o=>l(u)("code7"))},[t("span",uo,[s(m,{class:"me-2"}),n(" Code ")])])]),t("div",_o,[t("div",fo,[t("div",bo,[mo,vo,t("div",go,[s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},Co,8,ko)]),default:e(()=>[t("button",wo,[n(" Dropdown "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block"})])]),_:1},8,["placement"])])]),t("div",So,[Do,Po,t("div",$o,[s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},Uo,8,Lo)]),default:e(()=>[t("button",Bo,[n(" Dropdown "),s(d,{class:"ltr:ml-1 rtl:mr-1 inline-block"})])]),_:1},8,["placement"])])])])]),l(h).includes("code7")?(p(),f(_,{key:0},{default:e(()=>[Vo]),_:1})):b("",!0)]),t("div",Eo,[t("div",qo,[zo,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[7]||(c[7]=o=>l(u)("code8"))},[t("span",Go,[s(m,{class:"me-2"}),n(" Code ")])])]),t("div",Ho,[t("div",Mo,[t("div",Xo,[Fo,s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"!flex"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},Zo,8,Ko)]),default:e(()=>[Jo]),_:1},8,["placement"])]),t("div",ts,[es,s(r,{placement:l(a).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"!flex"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},is,8,ss)]),default:e(()=>[os]),_:1},8,["placement"])])])]),l(h).includes("code8")?(p(),f(_,{key:0},{default:e(()=>[cs]),_:1})):b("",!0)]),t("div",ds,[t("div",ps,[hs,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[8]||(c[8]=o=>l(u)("code9"))},[t("span",us,[s(m,{class:"me-2"}),n(" Code ")])])]),t("div",_s,[t("div",fs,[t("div",bs,[s(r,{placement:l(a).rtlClass==="rtl"?"top-end":"top-start",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},ys,8,vs)]),default:e(()=>[t("button",ms,[s(v,{class:"w-6 h-6 rotate-90 opacity-70"})])]),_:1},8,["placement"])]),t("div",xs,[s(r,{placement:l(a).rtlClass==="rtl"?"top-end":"top-start",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},Bs,8,Cs)]),default:e(()=>[t("button",As,[s(v,{class:"w-6 h-6 opacity-70"})])]),_:1},8,["placement"])]),t("div",Ls,[s(r,{placement:l(a).rtlClass==="rtl"?"top-start":"top-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},Es,8,Ts)]),default:e(()=>[t("button",Is,[s(v,{class:"w-6 h-6 rotate-90 opacity-70"})])]),_:1},8,["placement"])]),t("div",qs,[s(r,{placement:l(a).rtlClass==="rtl"?"top-start":"top-end",offsetDistance:"0",class:"align-middle"},{content:e(({close:o})=>[t("ul",{onClick:i=>o(),class:"whitespace-nowrap"},Js,8,Gs)]),default:e(()=>[t("button",zs,[s(v,{class:"w-6 h-6 opacity-70"})])]),_:1},8,["placement"])])])]),l(h).includes("code9")?(p(),f(_,{key:0},{default:e(()=>[Ks]),_:1})):b("",!0)])])])])}}});export{el as default};
