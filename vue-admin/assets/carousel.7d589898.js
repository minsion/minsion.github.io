import{_ as A}from"./carousel1.2da0475c.js";import{c as M,_ as w}from"./codePreview.b8512f6b.js";import{g as L,n as F,N as C,P as I,a as _,S as b}from"./pagination.min.e1e04c51.js";import{d as D,a as R,u as q,r as X,o as a,b as h,e as t,f as i,g as r,j as k,X as u,w as l,D as j,F as E,z as S,E as y}from"./index.ddf2ada6.js";import{I as G}from"./icon-bell.2ecf9464.js";import{I as z}from"./icon-code.a018a24c.js";function B({swiper:e,extendParams:f,on:m,emit:o}){let n;e.autoplay={running:!1,paused:!1},f({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function v(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const d=e.slides.eq(e.activeIndex);let x=e.params.autoplay.delay;d.attr("data-swiper-autoplay")&&(x=d.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(n),n=F(()=>{let g;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),g=e.slidePrev(e.params.speed,!0,!0),o("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?s():(g=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),o("autoplay")):(g=e.slidePrev(e.params.speed,!0,!0),o("autoplay")):e.params.loop?(e.loopFix(),g=e.slideNext(e.params.speed,!0,!0),o("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?s():(g=e.slideTo(0,e.params.speed,!0,!0),o("autoplay")):(g=e.slideNext(e.params.speed,!0,!0),o("autoplay")),(e.params.cssMode&&e.autoplay.running||g===!1)&&v()},x)}function c(){return typeof n<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,o("autoplayStart"),v(),!0)}function s(){return!e.autoplay.running||typeof n>"u"?!1:(n&&(clearTimeout(n),n=void 0),e.autoplay.running=!1,o("autoplayStop"),!0)}function p(d){!e.autoplay.running||e.autoplay.paused||(n&&clearTimeout(n),e.autoplay.paused=!0,d===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,v()):["transitionend","webkitTransitionEnd"].forEach(x=>{e.$wrapperEl[0].addEventListener(x,$)}))}function P(){const d=L();d.visibilityState==="hidden"&&e.autoplay.running&&p(),d.visibilityState==="visible"&&e.autoplay.paused&&(v(),e.autoplay.paused=!1)}function $(d){!e||e.destroyed||!e.$wrapperEl||d.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(x=>{e.$wrapperEl[0].removeEventListener(x,$)}),e.autoplay.paused=!1,e.autoplay.running?v():s())}function N(){e.params.autoplay.disableOnInteraction?s():(o("autoplayPause"),p()),["transitionend","webkitTransitionEnd"].forEach(d=>{e.$wrapperEl[0].removeEventListener(d,$)})}function T(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,o("autoplayResume"),v())}function V(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",N),e.$el.on("mouseleave",T))}function O(){e.$el.off("mouseenter",N),e.$el.off("mouseleave",T)}m("init",()=>{e.params.autoplay.enabled&&(c(),L().addEventListener("visibilitychange",P),V())}),m("beforeTransitionStart",(d,x,g)=>{e.autoplay.running&&(g||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(x):s())}),m("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?s():p())}),m("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&v()}),m("destroy",()=>{O(),e.autoplay.running&&s(),L().removeEventListener("visibilitychange",P)}),Object.assign(e.autoplay,{pause:p,run:v,start:c,stop:s})}const H="/vue-admin/assets/images/carousel2.jpeg",J="/vue-admin/assets/images/carousel3.jpeg",K=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Carousel")])],-1),Q={class:"pt-5 space-y-8"},U={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},W={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},Y=t("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),Z=t("a",{href:"https://www.npmjs.com/package/swiper",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/swiper",-1),ee={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},te={class:"panel"},re={class:"flex items-center justify-between mb-5"},se=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),ae={class:"flex items-center"},ie=["src"],le={href:"javascript:;",class:"swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},oe={href:"javascript:;",class:"swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},ne=t("pre",null,`<!-- basic -->
<swiper
  :modules="[Navigation, Pagination]"
  :navigation="{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }"
  :pagination="{ clickable: true }"
  class="max-w-3xl mx-auto mb-5"
  id="slider1"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full max-h-80 object-cover" alt="" />
    </swiper-slide>
  </template>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex1
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex1
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),pe={class:"panel"},de={class:"flex items-center justify-between mb-5"},ue=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Autopaly",-1),ce={class:"flex items-center"},me=["src"],fe=t("div",{class:"absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12"},[t("div",{class:"sm:text-3xl text-base font-bold"},"This is blog Image"),t("div",{class:"sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. "),t("button",{type:"button",class:"mt-4 btn btn-primary"},"Learn more")],-1),ve={href:"javascript:;",class:"swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},ge={href:"javascript:;",class:"swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},xe=t("pre",null,`<!-- autopaly -->
<swiper
  :modules="[Navigation, Autoplay]"
  :navigation="{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }"
  :autoplay="{ delay: 2000 }"
  class="max-w-3xl mx-auto mb-5"
  id="slider2"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full max-h-80 object-cover" alt="" />
      <div class="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
        <div class="sm:text-3xl text-base font-bold">This is blog Image</div>
        <div class="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
        </div>
        <button type="button" class="mt-4 btn btn-primary">Learn more</button>
      </div>
    </swiper-slide>
  </template>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex2
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex2
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),be={class:"panel"},ye={class:"flex items-center justify-between mb-5"},he=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical",-1),we={class:"flex items-center"},_e=["src"],ke=t("div",{class:"absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center"},[t("div",{class:"sm:text-xl text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1),je=t("pre",null,`<!-- vertical -->
<swiper :modules="[Pagination, Autoplay]" :direction="'vertical'" :pagination="{ clickable: true }" :autoplay="{ delay: 2000 }" class="max-w-3xl mx-auto mb-5" id="slider3">
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full" alt="" />
      <div class="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
        <div class="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
      </div>
    </swiper-slide>
  </template>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),Ee={class:"panel"},Se={class:"flex items-center justify-between mb-5"},ze=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Loop",-1),Ce={class:"flex items-center"},Ie=t("img",{src:A,class:"w-full",alt:""},null,-1),$e=t("div",{class:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11"},[t("div",{class:"text-3xl font-bold"},"Slide 1"),t("div",{class:"mb-4 sm:text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1),Le=t("img",{src:H,class:"w-full",alt:""},null,-1),Pe=t("div",{class:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11"},[t("div",{class:"text-3xl font-bold"},"Slide 2"),t("div",{class:"mb-4 sm:text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1),Ne=t("img",{src:J,class:"w-full",alt:""},null,-1),Te=t("div",{class:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11"},[t("div",{class:"text-3xl font-bold"},"Slide 3"),t("div",{class:"mb-4 sm:text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1),Be={href:"javascript:;",class:"swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},Ve={href:"javascript:;",class:"swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},Oe=t("pre",null,`<!-- loop -->
<swiper
  :modules="[Navigation, Pagination]"
  slidesPerView="auto"
  :spaceBetween="30"
  :loop="true"
  :navigation="{ nextEl: '.swiper-button-next-ex4', prevEl: '.swiper-button-prev-ex4' }"
  :pagination="{ clickable: true, type: 'fraction' }"
  class="max-w-3xl mx-auto mb-5"
  id="slider4"
>
  <swiper-slide>
    <img src="/assets/images/carousel1.jpeg" class="w-full" alt="" />
    <div class="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
      <div class="text-3xl font-bold">Slide 1</div>
      <div class="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <img src="/assets/images/carousel2.jpeg" class="w-full" alt="" />
    <div class="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
      <div class="text-3xl font-bold">Slide 2</div>
      <div class="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <img src="/assets/images/carousel3.jpeg" class="w-full" alt="" />
    <div class="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
      <div class="text-3xl font-bold">Slide 3</div>
      <div class="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
    </div>
  </swiper-slide>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex4
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex4
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),Ae={class:"panel lg:col-span-2"},Me={class:"flex items-center justify-between mb-5"},Fe=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Multiple Slides",-1),De={class:"flex items-center"},Re=["src"],qe=["src"],Xe={href:"javascript:;",class:"swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2"},Ge={href:"javascript:;",class:"swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2"},He=t("pre",null,`<!-- multiple -->
<swiper
  :modules="[Navigation, Pagination]"
  :navigation="{ nextEl: '.swiper-button-next-ex5', prevEl: '.swiper-button-prev-ex5' }"
  :pagination="{ clickable: true }"
  :breakpoints="{ 1024: { slidesPerView: 3, spaceBetween: 30 }, 768: { slidesPerView: 2, spaceBetween: 40 }, 320: { slidesPerView: 1, spaceBetween: 20 } }"
  id="slider5"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full" alt="" />
    </swiper-slide>
  </template>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full" alt="" />
    </swiper-slide>
  </template>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex5
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-[44%]
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex5
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-[44%]
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),Ze=D({__name:"carousel",setup(e){const f=R();q({title:"Carousel"});const{codeArr:m,toggleCode:o}=M(),n=X(["carousel1.jpeg","carousel2.jpeg","carousel3.jpeg"]);return(v,c)=>(a(),h("div",null,[K,t("div",Q,[t("div",U,[t("div",W,[i(G)]),Y,Z]),t("div",ee,[t("div",te,[t("div",re,[se,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[0]||(c[0]=s=>r(o)("code1"))},[t("span",ae,[i(z,{class:"me-2"}),k(" Code ")])])]),(a(),u(r(_),{modules:[r(C),r(I)],navigation:{nextEl:".swiper-button-next-ex1",prevEl:".swiper-button-prev-ex1"},pagination:{clickable:!0},class:"max-w-3xl mx-auto mb-5",id:"slider1",dir:r(f).rtlClass,key:r(f).rtlClass==="rtl"?"true":"false"},{default:l(()=>[(a(!0),h(E,null,S(n.value,(s,p)=>(a(),u(r(b),{key:p},{default:l(()=>[t("img",{src:`/assets/images/${s}`,class:"w-full max-h-80 object-cover",alt:""},null,8,ie)]),_:2},1024))),128)),t("a",le,[i(y,{class:"w-5 h-5 rtl:-rotate-90 rotate-90"})]),t("a",oe,[i(y,{class:"w-5 h-5 rtl:rotate-90 -rotate-90"})])]),_:1},8,["modules","navigation","dir"])),r(m).includes("code1")?(a(),u(w,{key:0},{default:l(()=>[ne]),_:1})):j("",!0)]),t("div",pe,[t("div",de,[ue,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[1]||(c[1]=s=>r(o)("code2"))},[t("span",ce,[i(z,{class:"me-2"}),k(" Code ")])])]),(a(),u(r(_),{modules:[r(C),r(B)],navigation:{nextEl:".swiper-button-next-ex2",prevEl:".swiper-button-prev-ex2"},autoplay:{delay:2e3},class:"max-w-3xl mx-auto mb-5",id:"slider2",dir:r(f).rtlClass,key:r(f).rtlClass==="rtl"?"true":"false"},{default:l(()=>[(a(!0),h(E,null,S(n.value,(s,p)=>(a(),u(r(b),{key:p},{default:l(()=>[t("img",{src:`/assets/images/${s}`,class:"w-full max-h-80 object-cover",alt:""},null,8,me),fe]),_:2},1024))),128)),t("a",ve,[i(y,{class:"w-5 h-5 rtl:-rotate-90 rotate-90"})]),t("a",ge,[i(y,{class:"w-5 h-5 rtl:rotate-90 -rotate-90"})])]),_:1},8,["modules","navigation","dir"])),r(m).includes("code2")?(a(),u(w,{key:0},{default:l(()=>[xe]),_:1})):j("",!0)]),t("div",be,[t("div",ye,[he,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[2]||(c[2]=s=>r(o)("code3"))},[t("span",we,[i(z,{class:"me-2"}),k(" Code ")])])]),i(r(_),{modules:[r(I),r(B)],direction:"vertical",pagination:{clickable:!0},autoplay:{delay:2e3},class:"max-w-3xl mx-auto mb-5",id:"slider3"},{default:l(()=>[(a(!0),h(E,null,S(n.value,(s,p)=>(a(),u(r(b),{key:p},{default:l(()=>[t("img",{src:`/assets/images/${s}`,class:"w-full",alt:""},null,8,_e),ke]),_:2},1024))),128))]),_:1},8,["modules"]),r(m).includes("code3")?(a(),u(w,{key:0},{default:l(()=>[je]),_:1})):j("",!0)]),t("div",Ee,[t("div",Se,[ze,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[3]||(c[3]=s=>r(o)("code4"))},[t("span",Ce,[i(z,{class:"me-2"}),k(" Code ")])])]),(a(),u(r(_),{modules:[r(C),r(I)],slidesPerView:"auto",spaceBetween:30,loop:!0,navigation:{nextEl:".swiper-button-next-ex4",prevEl:".swiper-button-prev-ex4"},pagination:{clickable:!0,type:"fraction"},class:"max-w-3xl mx-auto mb-5",id:"slider4",dir:r(f).rtlClass,key:r(f).rtlClass==="rtl"?"true":"false"},{default:l(()=>[i(r(b),null,{default:l(()=>[Ie,$e]),_:1}),i(r(b),null,{default:l(()=>[Le,Pe]),_:1}),i(r(b),null,{default:l(()=>[Ne,Te]),_:1}),t("a",Be,[i(y,{class:"w-5 h-5 rtl:-rotate-90 rotate-90"})]),t("a",Ve,[i(y,{class:"w-5 h-5 rtl:rotate-90 -rotate-90"})])]),_:1},8,["modules","navigation","dir"])),r(m).includes("code4")?(a(),u(w,{key:0},{default:l(()=>[Oe]),_:1})):j("",!0)]),t("div",Ae,[t("div",Me,[Fe,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:c[4]||(c[4]=s=>r(o)("code5"))},[t("span",De,[i(z,{class:"me-2"}),k(" Code ")])])]),(a(),u(r(_),{modules:[r(C),r(I)],navigation:{nextEl:".swiper-button-next-ex5",prevEl:".swiper-button-prev-ex5"},pagination:{clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:40},320:{slidesPerView:1,spaceBetween:20}},id:"slider5",dir:r(f).rtlClass,key:r(f).rtlClass==="rtl"?"true":"false"},{default:l(()=>[(a(!0),h(E,null,S(n.value,(s,p)=>(a(),u(r(b),{key:p},{default:l(()=>[t("img",{src:`/assets/images/${s}`,class:"w-full",alt:""},null,8,Re)]),_:2},1024))),128)),(a(!0),h(E,null,S(n.value,(s,p)=>(a(),u(r(b),{key:p},{default:l(()=>[t("img",{src:`/assets/images/${s}`,class:"w-full",alt:""},null,8,qe)]),_:2},1024))),128)),t("a",Xe,[i(y,{class:"w-5 h-5 rtl:-rotate-90 rotate-90"})]),t("a",Ge,[i(y,{class:"w-5 h-5 rtl:rotate-90 -rotate-90"})])]),_:1},8,["modules","navigation","dir"])),r(m).includes("code5")?(a(),u(w,{key:0},{default:l(()=>[He]),_:1})):j("",!0)])])])]))}});export{Ze as default};
