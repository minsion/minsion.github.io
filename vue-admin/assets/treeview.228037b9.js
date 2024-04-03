import{c as T,_ as k}from"./codePreview.b8512f6b.js";import{d as I,u as $,r as C,o as a,b as V,e as l,g as n,f as e,j as s,y as g,E as x,w as o,ah as v,X as c,D as O}from"./index.ddf2ada6.js";import{I as j}from"./icon-code.a018a24c.js";import{I as _}from"./icon-folder.8b1ef4d4.js";import{I as p}from"./icon-txt-file.914fe9d2.js";import{I as b,a as h}from"./icon-folder-minus.6de23862.js";const N=l("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[l("li",null,[l("a",{href:"javascript:;",class:"text-primary hover:underline"},"Elements")]),l("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[l("span",null,"Treeview")])],-1),P={class:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6"},S={class:"panel"},B={class:"flex items-center justify-between mb-5"},E=l("h5",{class:"font-semibold text-lg dark:text-white-light"},"Animated",-1),A={class:"flex items-center"},F={class:"mb-5"},M={class:"font-semibold"},D={class:"py-[5px]"},G={class:"ltr:pl-14 rtl:pr-14"},H={class:"py-[5px]"},L={class:"py-[5px]"},z={class:"ltr:pl-14 rtl:pr-14"},X={class:"py-[5px]"},q={class:"py-[5px]"},J={class:"py-[5px]"},K={class:"py-[5px]"},Q={class:"ltr:pl-14 rtl:pr-14"},R={class:"py-[5px]"},U={class:"ltr:pl-14 rtl:pr-14"},W={class:"py-[5px]"},Y={class:"py-[5px]"},Z={class:"py-[5px]"},ll={class:"py-[5px] ltr:pl-8 rtl:pr-8"},el={class:"py-[5px] ltr:pl-8 rtl:pr-8"},tl={class:"py-[5px] ltr:pl-7 rtl:pr-7"},sl={class:"py-[5px] ltr:pl-7 rtl:pr-7"},il=l("pre",null,`<!-- animated -->
<ul class="font-semibold">
  <li class="py-[5px]">
    <button type="button" @click="toggleTreeview1('css')">
      <svg> ... </svg>
      CSS
    </button>
    <vue-collapsible :isOpen="treeview1.includes('css')">
      <ul class="ltr:pl-14 rtl:pr-14">
        <li class="py-[5px]">
          <svg> ... </svg>
          style.css
        </li>
      </ul>
    </vue-collapsible>
  </li>
  <li class="py-[5px]">
    <button type="button" @click="toggleTreeview1('images')">
      <svg> ... </svg>
      Images
    </button>
    <vue-collapsible :isOpen="treeview1.includes('images')">
      <ul class="ltr:pl-14 rtl:pr-14">
        <li class="py-[5px]">
          <svg> ... </svg>
          profile-16.jpeg
        </li>
        <li class="py-[5px]"><svg> ... </svg>background.png</li>
        <li class="py-[5px]"><svg> ... </svg>gallery.jpg</li>
      </ul>
    </vue-collapsible>
  </li>
  <li class="py-[5px]">
    <button type="button" @click="toggleTreeview1('html')">
      <svg> ... </svg>
      HTML
    </button>
    <vue-collapsible :isOpen="treeview1.includes('html')">
      <ul class="ltr:pl-14 rtl:pr-14">
        <li class="py-[5px]">
          <button type="button" @click="toggleTreeview1('pages')">
            <svg> ... </svg>
            PAGES
          </button>
          <vue-collapsible :isOpen="treeview1.includes('pages')">
            <ul class="ltr:pl-14 rtl:pr-14">
              <li class="py-[5px]">
                <svg> ... </svg>
                file name
              </li>
              <li class="py-[5px]">
                <svg> ... </svg>
                file name
              </li>
              <li class="py-[5px]">
                <svg> ... </svg>
                file name
              </li>
            </ul>
          </vue-collapsible>
        </li>
        <li class="py-[5px] ltr:pl-8 rtl:pr-8"><svg> ... </svg>file name</li>
        <li class="py-[5px] ltr:pl-8 rtl:pr-8"><svg> ... </svg>file name</li>
      </ul>
    </vue-collapsible>
  </li>
  <li class="py-[5px] ltr:pl-7 rtl:pr-7"><svg> ... </svg>index.html</li>
  <li class="py-[5px] ltr:pl-7 rtl:pr-7"><svg> ... </svg>components.html</li>
</ul>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import VueCollapsible from 'vue-height-collapsible/vue3';
  const treeview1: any = ref([]);
  const toggleTreeview1 = (name: string) => {
    if (treeview1.value.includes(name as never)) {
      treeview1.value = treeview1.value.filter((d) => d != name);
    } else {
      treeview1.value.push(name as never);
    }
  };
<\/script>
`,-1),rl={class:"panel"},nl={class:"flex items-center justify-between mb-5"},al=l("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),pl={class:"flex items-center"},ol={class:"mb-5"},cl={class:"font-semibold no-animtion"},ul={class:"py-[5px] ltr:pl-7 rtl:pr-7"},ml=l("ul",null,null,-1),vl={class:"py-[5px] ltr:pl-7 rtl:pr-7"},dl=l("ul",null,[l("li",{class:"py-[5px] ltr:pl-7 rtl:pr-7 text-secondary"},"style.css")],-1),yl={class:"py-[5px] ltr:pl-7 rtl:pr-7"},gl=l("ul",null,[l("li",{class:"py-[5px] ltr:pl-7 rtl:pr-7 text-secondary"},"script.js")],-1),xl=l("li",{class:"py-[5px] ltr:pl-7 rtl:pr-7 text-secondary"},"index.html",-1),_l=l("pre",null,`<!-- basic -->
<ul class="font-semibold no-animtion">
  <li>
    <button type="button" @click="toggleTreeview2('parent-node')">
      <svg> ... </svg>
      Parent Node
    </button>
    <vue-collapsible :isOpen="treeview2.includes('parent-node')">
      <ul>
        <li class="py-[5px] ltr:pl-7 rtl:pr-7">
          <button type="button" @click="toggleTreeview2('img')">
            <svg> ... </svg>
            img
          </button>
          <vue-collapsible :isOpen="treeview2.includes('img')">
            <ul></ul>
          </vue-collapsible>
        </li>
        <li class="py-[5px] ltr:pl-7 rtl:pr-7">
          <button type="button" @click="toggleTreeview2('css')">
            <svg> ... </svg>
            css
          </button>
          <vue-collapsible :isOpen="treeview2.includes('css')">
            <ul>
              <li class="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">style.css</li>
            </ul>
          </vue-collapsible>
        </li>
        <li class="py-[5px] ltr:pl-7 rtl:pr-7">
          <button type="button" @click="toggleTreeview2('js')">
            <svg> ... </svg>
            js
          </button>
          <vue-collapsible :isOpen="treeview2.includes('js')">
            <ul>
              <li class="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">script.js</li>
            </ul>
          </vue-collapsible>
        </li>
        <li class="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">index.html</li>
      </ul>
    </vue-collapsible>
  </li>
</ul>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import VueCollapsible from 'vue-height-collapsible/vue3';
  const treeview2: any = ref(['parent-node']);
  const toggleTreeview2 = (name: string) => {
    if (treeview2.value.includes(name as never)) {
      treeview2.value = treeview2.value.filter((d) => d != name);
    } else {
      treeview2.value.push(name as never);
    }
  };
<\/script>
`,-1),jl=I({__name:"treeview",setup(bl){$({title:"Treeview"});const{codeArr:f,toggleCode:w}=T(),i=C(["images"]),r=C(["parent-node"]),d=m=>{i.value.includes(m)?i.value=i.value.filter(t=>t!=m):i.value.push(m)},y=m=>{r.value.includes(m)?r.value=r.value.filter(t=>t!=m):r.value.push(m)};return(m,t)=>(a(),V("div",null,[N,l("div",P,[l("div",S,[l("div",B,[E,l("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=u=>n(w)("code1"))},[l("span",A,[e(j,{class:"me-2"}),s(" Code ")])])]),l("div",F,[l("ul",M,[l("li",D,[l("button",{type:"button",onClick:t[1]||(t[1]=u=>d("css"))},[e(x,{class:g(["w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2",{"rotate-180":i.value.includes("css")}])},null,8,["class"]),e(_,{class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),s(" CSS ")]),e(n(v),{isOpen:i.value.includes("css")},{default:o(()=>[l("ul",G,[l("li",H,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" style.css ")])])]),_:1},8,["isOpen"])]),l("li",L,[l("button",{type:"button",onClick:t[2]||(t[2]=u=>d("images"))},[e(x,{class:g(["w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2",{"rotate-180":i.value.includes("images")}])},null,8,["class"]),e(_,{class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),s(" Images ")]),e(n(v),{isOpen:i.value.includes("images")},{default:o(()=>[l("ul",z,[l("li",X,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" profile-16.jpeg ")]),l("li",q,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" background.png ")]),l("li",J,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" gallery.jpg ")])])]),_:1},8,["isOpen"])]),l("li",K,[l("button",{type:"button",onClick:t[3]||(t[3]=u=>d("html"))},[e(x,{class:g(["w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2",{"rotate-180":i.value.includes("html")}])},null,8,["class"]),e(_,{class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),s(" HTML ")]),e(n(v),{isOpen:i.value.includes("html")},{default:o(()=>[l("ul",Q,[l("li",R,[l("button",{type:"button",onClick:t[4]||(t[4]=u=>d("pages"))},[e(x,{class:g(["w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2",{"rotate-180":i.value.includes("pages")}])},null,8,["class"]),e(_,{class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),s(" PAGES ")]),e(n(v),{isOpen:i.value.includes("pages")},{default:o(()=>[l("ul",U,[l("li",W,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" file name ")]),l("li",Y,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" file name ")]),l("li",Z,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" file name ")])])]),_:1},8,["isOpen"])]),l("li",ll,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" file name ")]),l("li",el,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" file name ")])])]),_:1},8,["isOpen"])]),l("li",tl,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" index.html ")]),l("li",sl,[e(p,{class:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),s(" components.html ")])])]),n(f).includes("code1")?(a(),c(k,{key:0},{default:o(()=>[il]),_:1})):O("",!0)]),l("div",rl,[l("div",nl,[al,l("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[5]||(t[5]=u=>n(w)("code2"))},[l("span",pl,[e(j,{class:"me-2"}),s(" Code ")])])]),l("div",ol,[l("ul",cl,[l("li",null,[l("button",{type:"button",onClick:t[6]||(t[6]=u=>y("parent-node"))},[r.value.includes("parent-node")?(a(),c(b,{key:0,class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"})):(a(),c(h,{key:1,class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"})),s(" Parent Node ")]),e(n(v),{isOpen:r.value.includes("parent-node")},{default:o(()=>[l("ul",null,[l("li",ul,[l("button",{type:"button",onClick:t[7]||(t[7]=u=>y("img"))},[r.value.includes("img")?(a(),c(b,{key:0,class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"})):(a(),c(h,{key:1,class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"})),s(" img ")]),e(n(v),{isOpen:r.value.includes("img")},{default:o(()=>[ml]),_:1},8,["isOpen"])]),l("li",vl,[l("button",{type:"button",onClick:t[8]||(t[8]=u=>y("css"))},[r.value.includes("css")?(a(),c(b,{key:0,class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"})):(a(),c(h,{key:1,class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"})),s(" css ")]),e(n(v),{isOpen:r.value.includes("css")},{default:o(()=>[dl]),_:1},8,["isOpen"])]),l("li",yl,[l("button",{type:"button",onClick:t[9]||(t[9]=u=>y("js"))},[r.value.includes("js")?(a(),c(b,{key:0,class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"})):(a(),c(h,{key:1,class:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"})),s(" js ")]),e(n(v),{isOpen:r.value.includes("js")},{default:o(()=>[gl]),_:1},8,["isOpen"])]),xl])]),_:1},8,["isOpen"])])])]),n(f).includes("code2")?(a(),c(k,{key:0},{default:o(()=>[_l]),_:1})):O("",!0)])])]))}});export{jl as default};
