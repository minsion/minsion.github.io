import{c as _,_ as f}from"./codePreview.b8512f6b.js";import{d as w,u as q,r as x,o as m,b as C,e,f as a,g as r,j as u,y as i,E as p,w as d,ah as b,X as g,D as k}from"./index.ddf2ada6.js";import{I as j}from"./icon-bell.2ecf9464.js";import{I as y}from"./icon-code.a018a24c.js";import{_ as O,a as A}from"./icon-layout.vue_vue_type_script_setup_true_lang.e724984f.js";import{_ as I}from"./icon-box.vue_vue_type_script_setup_true_lang.a68bbe8b.js";const G=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Accordians")])],-1),L={class:"pt-5 space-y-8"},B={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},$={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},V=e("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),U=e("a",{href:"https://www.npmjs.com/package/vue-height-collapsible",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/vue-height-collapsible",-1),N={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},S={class:"panel"},F={class:"flex items-center justify-between mb-5"},H=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),D={class:"flex items-center"},E={class:"mb-5"},z={class:"space-y-2 font-semibold"},M={class:"border border-[#d3d3d3] rounded dark:border-[#1b2e4b]"},P=e("div",{class:"space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]"},[e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")],-1),T={class:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded"},W=e("div",{class:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]"},[e("ul",{class:"space-y-1"},[e("li",null,[e("a",{href:"javascript:;"},"Apple")]),e("li",null,[e("a",{href:"javascript:;"},"Orange")]),e("li",null,[e("a",{href:"javascript:;"},"Banana")]),e("li",null,[e("a",{href:"javascript:;"},"list")])])],-1),X={class:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded"},J=e("div",{class:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]"},[e("p",null," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "),e("button",{type:"button",class:"btn btn-primary mt-4"},"Accept")],-1),K=e("pre",null,`<!-- basic -->
<div class="space-y-2 font-semibold">
  <div class="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians1 === 1 }"
      @click="accordians1 === 1 ? (accordians1 = null) : (accordians1 = 1)"
    >
      Collapsible Group Item #1
      <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordians1 === 1 }">
        <svg> ... </svg>
      </div>
    </button>
    <vue-collapsible :isOpen="accordians1 === 1">
      <div class="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </vue-collapsible>
  </div>
  <div class="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians1 === 2 }"
      @click="accordians1 === 2 ? (accordians1 = null) : (accordians1 = 2)"
    >
      Collapsible Group Item #2
      <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordians1 === 2 }">
        <svg> ... </svg>
      </div>
    </button>
    <vue-collapsible :isOpen="accordians1 === 2">
      <div class="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
        <ul class="space-y-1">
          <li><a href="javascript:;">Apple</a></li>
          <li><a href="javascript:;">Orange</a></li>
          <li><a href="javascript:;">Banana</a></li>
          <li><a href="javascript:;">list</a></li>
        </ul>
      </div>
    </vue-collapsible>
  </div>
  <div class="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians1 === 3 }"
      @click="accordians1 === 3 ? (accordians1 = null) : (accordians1 = 3)"
    >
      Collapsible Group Item #3
      <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordians1 === 3 }">
        <svg> ... </svg>
      </div>
    </button>
    <vue-collapsible :isOpen="accordians1 === 3">
      <div class="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
          beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </p>
        <button type="button" class="btn btn-primary mt-4">Accept</button>
      </div>
    </vue-collapsible>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import VueCollapsible from 'vue-height-collapsible/vue3';
const accordians1: any = ref(1);
<\/script>
`,-1),Q={class:"panel"},R={class:"flex items-center justify-between mb-5"},Y=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Without Spacing",-1),Z={class:"flex items-center"},ee={class:"mb-5"},te={class:"border border-[#d3d3d3] dark:border-[#3b3f5c] rounded font-semibold"},ae={class:"border-b border-[#d3d3d3] dark:border-[#3b3f5c]"},ie=e("div",{class:"space-y-2 p-4 text-white-dark text-[13px]"},[e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")],-1),re={class:"border-b border-[#d3d3d3] dark:border-[#3b3f5c]"},oe=e("div",{class:"p-4 text-[13px]"},[e("ul",{class:"space-y-1"},[e("li",null,[e("a",{href:"javascript:;"},"Apple")]),e("li",null,[e("a",{href:"javascript:;"},"Orange")]),e("li",null,[e("a",{href:"javascript:;"},"Banana")]),e("li",null,[e("a",{href:"javascript:;"},"list")])])],-1),se=e("div",{class:"p-4 text-[13px]"},[e("p",null," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "),e("button",{type:"button",class:"btn btn-primary mt-4"},"Accept")],-1),le=e("pre",null,`<!-- without spacing -->
<div class="border border-[#d3d3d3] dark:border-[#3b3f5c] rounded font-semibold">
  <div class="border-b border-[#d3d3d3] dark:border-[#3b3f5c]">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians2 === 1 }"
      @click="accordians2 === 1 ? (accordians2 = null) : (accordians2 = 1)"
    >
      Collapsible Group Item #1
      <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordians2 === 1 }">
        <svg> ... </svg>
      </div>
    </button>
    <vue-collapsible :isOpen="accordians2 === 1">
      <div class="space-y-2 p-4 text-white-dark text-[13px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </vue-collapsible>
  </div>

  <div class="border-b border-[#d3d3d3] dark:border-[#3b3f5c]">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians2 === 2 }"
      @click="accordians2 === 2 ? (accordians2 = null) : (accordians2 = 2)"
    >
      Collapsible Group Item #2
      <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordians2 === 2 }">
        <svg> ... </svg>
      </div>
    </button>
    <vue-collapsible :isOpen="accordians2 === 2">
      <div class="p-4 text-[13px]">
        <ul class="space-y-1">
          <li><a href="javascript:;">Apple</a></li>
          <li><a href="javascript:;">Orange</a></li>
          <li><a href="javascript:;">Banana</a></li>
          <li><a href="javascript:;">list</a></li>
        </ul>
      </div>
    </vue-collapsible>
  </div>

  <div>
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians2 === 3 }"
      @click="accordians2 === 3 ? (accordians2 = null) : (accordians2 = 3)"
    >
      Collapsible Group Item #3
      <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordians2 === 3 }">
        <svg> ... </svg>
      </div>
    </button>
    <vue-collapsible :isOpen="accordians2 === 3">
      <div class="p-4 text-[13px]">
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
          beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </p>
        <button type="button" class="btn btn-primary mt-4">Accept</button>
      </div>
    </vue-collapsible>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import VueCollapsible from 'vue-height-collapsible/vue3';
const accordians2: any = ref(1);
<\/script>
`,-1),de={class:"panel"},ne={class:"flex items-center justify-between mb-5"},ce=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Icons",-1),ue={class:"flex items-center"},be={class:"mb-5"},pe={class:"space-y-2 font-semibold"},me={class:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded"},ve=e("div",{class:"space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]"},[e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")],-1),he={class:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded"},fe=e("div",{class:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]"},[e("ul",{class:"space-y-1"},[e("li",null,[e("a",{href:"javascript:;"},"Apple")]),e("li",null,[e("a",{href:"javascript:;"},"Orange")]),e("li",null,[e("a",{href:"javascript:;"},"Banana")]),e("li",null,[e("a",{href:"javascript:;"},"list")])])],-1),xe={class:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded"},ge=e("div",{class:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]"},[e("p",null," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "),e("button",{type:"button",class:"btn btn-primary mt-4"},"Accept")],-1),ke=e("pre",null,`<!-- icons -->
<div class="space-y-2 font-semibold">
  <div class="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians3 === 1 }"
      @click="accordians3 === 1 ? (accordians3 = null) : (accordians3 = 1)"
    >
      <svg> ... </svg>
      Collapsible Group Item #1
      <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordians3 === 1 }">
        <svg> ... </svg>
      </div>
    </button>
    <vue-collapsible :isOpen="accordians3 === 1">
      <div class="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </vue-collapsible>
  </div>

  <div class="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians3 === 2 }"
      @click="accordians3 === 2 ? (accordians3 = null) : (accordians3 = 2)"
    >
      <svg> ... </svg>
      Collapsible Group Item #2
      <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordians3 === 2 }">
        <svg> ... </svg>
      </div>
    </button>
    <vue-collapsible :isOpen="accordians3 === 2">
      <div class="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
        <ul class="space-y-1">
          <li><a href="javascript:;">Apple</a></li>
          <li><a href="javascript:;">Orange</a></li>
          <li><a href="javascript:;">Banana</a></li>
          <li><a href="javascript:;">list</a></li>
        </ul>
      </div>
    </vue-collapsible>
  </div>

  <div class="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians3 === 3 }"
      @click="accordians3 === 3 ? (accordians3 = null) : (accordians3 = 3)"
    >
      <svg> ... </svg>
      Collapsible Group Item #3
      <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': accordians3 === 3 }">
        <svg> ... </svg>
      </div>
    </button>
    <vue-collapsible :isOpen="accordians3 === 3">
      <div class="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
          beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </p>
        <button type="button" class="btn btn-primary mt-4">Accept</button>
      </div>
    </vue-collapsible>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import VueCollapsible from 'vue-height-collapsible/vue3';
const accordians3: any = ref(1);
<\/script>
`,-1),ye={class:"panel"},_e={class:"flex items-center justify-between mb-5"},we=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"No Icons",-1),qe={class:"flex items-center"},Ce={class:"mb-5"},je={class:"space-y-2 font-semibold"},Oe={class:"border border-[#d3d3d3] rounded dark:border-[#1b2e4b]"},Ae=e("div",{class:"space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]"},[e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")],-1),Ie={class:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded"},Ge=e("div",{class:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]"},[e("ul",{class:"space-y-1"},[e("li",null,[e("a",{href:"javascript:;"},"Apple")]),e("li",null,[e("a",{href:"javascript:;"},"Orange")]),e("li",null,[e("a",{href:"javascript:;"},"Banana")]),e("li",null,[e("a",{href:"javascript:;"},"list")])])],-1),Le={class:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded"},Be=e("div",{class:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]"},[e("p",null," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. "),e("button",{type:"button",class:"btn btn-primary mt-4"},"Accept")],-1),$e=e("pre",null,`<!-- no icon -->
<div class="space-y-2 font-semibold">
  <div class="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians4 === 1 }"
      @click="accordians4 === 1 ? (accordians4 = null) : (accordians4 = 1)"
    >
      Collapsible Group Item #1
    </button>
    <vue-collapsible :isOpen="accordians4 === 1">
      <div class="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </vue-collapsible>
  </div>

  <div class="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians4 === 2 }"
      @click="accordians4 === 2 ? (accordians4 = null) : (accordians4 = 2)"
    >
      Collapsible Group Item #2
    </button>
    <vue-collapsible :isOpen="accordians4 === 2">
      <div class="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
        <ul class="space-y-1">
          <li><a href="javascript:;">Apple</a></li>
          <li><a href="javascript:;">Orange</a></li>
          <li><a href="javascript:;">Banana</a></li>
          <li><a href="javascript:;">list</a></li>
        </ul>
      </div>
    </vue-collapsible>
  </div>

  <div class="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
    <button
      type="button"
      class="p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]"
      :class="{ '!text-primary': accordians4 === 3 }"
      @click="accordians4 === 3 ? (accordians4 = null) : (accordians4 = 3)"
    >
      Collapsible Group Item #3
    </button>
    <vue-collapsible :isOpen="accordians4 === 3">
      <div class="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
          beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </p>
        <button type="button" class="btn btn-primary mt-4">Accept</button>
      </div>
    </vue-collapsible>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import VueCollapsible from 'vue-height-collapsible/vue3';
const accordians4: any = ref(1);
<\/script>
`,-1),ze=w({__name:"accordions",setup(Ve){q({title:"Accordions"});const{codeArr:v,toggleCode:h}=_(),o=x(1),s=x(1),l=x(1),n=x(1);return(Ue,t)=>(m(),C("div",null,[G,e("div",L,[e("div",B,[e("div",$,[a(j)]),V,U]),e("div",N,[e("div",S,[e("div",F,[H,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=c=>r(h)("code1"))},[e("span",D,[a(y,{class:"me-2"}),u(" Code ")])])]),e("div",E,[e("div",z,[e("div",M,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":o.value===1}]),onClick:t[1]||(t[1]=c=>o.value===1?o.value=null:o.value=1)},[u(" Collapsible Group Item #1 "),e("div",{class:i(["ltr:ml-auto rtl:mr-auto",{"rotate-180":o.value===1}])},[a(p)],2)],2),a(r(b),{isOpen:o.value===1},{default:d(()=>[P]),_:1},8,["isOpen"])]),e("div",T,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":o.value===2}]),onClick:t[2]||(t[2]=c=>o.value===2?o.value=null:o.value=2)},[u(" Collapsible Group Item #2 "),e("div",{class:i(["ltr:ml-auto rtl:mr-auto",{"rotate-180":o.value===2}])},[a(p)],2)],2),a(r(b),{isOpen:o.value===2},{default:d(()=>[W]),_:1},8,["isOpen"])]),e("div",X,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":o.value===3}]),onClick:t[3]||(t[3]=c=>o.value===3?o.value=null:o.value=3)},[u(" Collapsible Group Item #3 "),e("div",{class:i(["ltr:ml-auto rtl:mr-auto",{"rotate-180":o.value===3}])},[a(p)],2)],2),a(r(b),{isOpen:o.value===3},{default:d(()=>[J]),_:1},8,["isOpen"])])])]),r(v).includes("code1")?(m(),g(f,{key:0},{default:d(()=>[K]),_:1})):k("",!0)]),e("div",Q,[e("div",R,[Y,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[4]||(t[4]=c=>r(h)("code2"))},[e("span",Z,[a(y,{class:"me-2"}),u(" Code ")])])]),e("div",ee,[e("div",te,[e("div",ae,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":s.value===1}]),onClick:t[5]||(t[5]=c=>s.value===1?s.value=null:s.value=1)},[u(" Collapsible Group Item #1 "),e("div",{class:i(["ltr:ml-auto rtl:mr-auto",{"rotate-180":s.value===1}])},[a(p)],2)],2),a(r(b),{isOpen:s.value===1},{default:d(()=>[ie]),_:1},8,["isOpen"])]),e("div",re,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":s.value===2}]),onClick:t[6]||(t[6]=c=>s.value===2?s.value=null:s.value=2)},[u(" Collapsible Group Item #2 "),e("div",{class:i(["ltr:ml-auto rtl:mr-auto",{"rotate-180":s.value===2}])},[a(p)],2)],2),a(r(b),{isOpen:s.value===2},{default:d(()=>[oe]),_:1},8,["isOpen"])]),e("div",null,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":s.value===3}]),onClick:t[7]||(t[7]=c=>s.value===3?s.value=null:s.value=3)},[u(" Collapsible Group Item #3 "),e("div",{class:i(["ltr:ml-auto rtl:mr-auto",{"rotate-180":s.value===3}])},[a(p)],2)],2),a(r(b),{isOpen:s.value===3},{default:d(()=>[se]),_:1},8,["isOpen"])])])]),r(v).includes("code2")?(m(),g(f,{key:0},{default:d(()=>[le]),_:1})):k("",!0)]),e("div",de,[e("div",ne,[ce,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[8]||(t[8]=c=>r(h)("code3"))},[e("span",ue,[a(y,{class:"me-2"}),u(" Code ")])])]),e("div",be,[e("div",pe,[e("div",me,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":l.value===1}]),onClick:t[9]||(t[9]=c=>l.value===1?l.value=null:l.value=1)},[a(O,{class:"ltr:mr-2 rtl:ml-2 text-primary shrink-0"}),u(" Collapsible Group Item #1 "),e("div",{class:i(["ltr:ml-auto rtl:mr-auto",{"rotate-180":l.value===1}])},[a(p)],2)],2),a(r(b),{isOpen:l.value===1},{default:d(()=>[ve]),_:1},8,["isOpen"])]),e("div",he,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":l.value===2}]),onClick:t[10]||(t[10]=c=>l.value===2?l.value=null:l.value=2)},[a(I,{class:"ltr:mr-2 rtl:ml-2 text-primary shrink-0"}),u(" Collapsible Group Item #2 "),e("div",{class:i(["ltr:ml-auto rtl:mr-auto",{"rotate-180":l.value===2}])},[a(p)],2)],2),a(r(b),{isOpen:l.value===2},{default:d(()=>[fe]),_:1},8,["isOpen"])]),e("div",xe,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":l.value===3}]),onClick:t[11]||(t[11]=c=>l.value===3?l.value=null:l.value=3)},[a(A,{class:"ltr:mr-2 rtl:ml-2 text-primary shrink-0"}),u(" Collapsible Group Item #3 "),e("div",{class:i(["ltr:ml-auto rtl:mr-auto",{"rotate-180":l.value===3}])},[a(p)],2)],2),a(r(b),{isOpen:l.value===3},{default:d(()=>[ge]),_:1},8,["isOpen"])])])]),r(v).includes("code3")?(m(),g(f,{key:0},{default:d(()=>[ke]),_:1})):k("",!0)]),e("div",ye,[e("div",_e,[we,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[12]||(t[12]=c=>r(h)("code4"))},[e("span",qe,[a(y,{class:"me-2"}),u(" Code ")])])]),e("div",Ce,[e("div",je,[e("div",Oe,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":n.value===1}]),onClick:t[13]||(t[13]=c=>n.value===1?n.value=null:n.value=1)}," Collapsible Group Item #1 ",2),a(r(b),{isOpen:n.value===1},{default:d(()=>[Ae]),_:1},8,["isOpen"])]),e("div",Ie,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":n.value===2}]),onClick:t[14]||(t[14]=c=>n.value===2?n.value=null:n.value=2)}," Collapsible Group Item #2 ",2),a(r(b),{isOpen:n.value===2},{default:d(()=>[Ge]),_:1},8,["isOpen"])]),e("div",Le,[e("button",{type:"button",class:i(["p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]",{"!text-primary":n.value===3}]),onClick:t[15]||(t[15]=c=>n.value===3?n.value=null:n.value=3)}," Collapsible Group Item #3 ",2),a(r(b),{isOpen:n.value===3},{default:d(()=>[Be]),_:1},8,["isOpen"])])])]),r(v).includes("code4")?(m(),g(f,{key:0},{default:d(()=>[$e]),_:1})):k("",!0)])])])]))}});export{ze as default};
