import{c as D,_ as p}from"./codePreview.b8512f6b.js";import{d as j,u as M,r as n,x as C,o as c,b as T,e,g as x,f,j as _,B as l,X as b,w as v,D as w}from"./index.ddf2ada6.js";import{I as y}from"./icon-code.a018a24c.js";const I=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Countdown")])],-1),S={class:"pt-5 grid grid-cols-1 xl:grid-cols-2 gap-6"},B={class:"panel"},F={class:"flex items-center justify-between mb-5"},H=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Simple Countdown",-1),N={class:"flex items-center"},V={class:"mb-5 grid grid-cols-4 justify-items-center gap-3"},Y={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},$={class:"text-primary sm:text-3xl text-xl text-center"},A=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Days",-1),E={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},P={class:"text-primary sm:text-3xl text-xl text-center"},X=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Hours",-1),q={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},z={class:"text-primary sm:text-3xl text-xl text-center"},G=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Mins",-1),J={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},K={class:"text-primary sm:text-3xl text-xl text-center"},L=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Sec",-1),O=e("pre",null,`<!-- simple countdown -->
<div class="mb-5 grid grid-cols-4 justify-items-center gap-3">
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo1.days }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo1.hours }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo1.minutes }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo1.seconds }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const timer1: any = ref(null);
const demo1: any = ref({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

onMounted(() => {
  setTimerDemo1();
});

const setTimerDemo1 = () => {
  let date = new Date();
  date.setDate(date.getDate() + 3);
  let countDownDate = date.getTime();

  timer1.value = setInterval(() => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    demo1.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    demo1.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    demo1.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    demo1.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(timer1.value);
    }
  }, 500);
};
<\/script>
`,-1),Q={class:"panel"},R={class:"flex items-center justify-between mb-5"},U=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Circle Countdown",-1),W={class:"flex items-center"},Z={class:"mb-5 grid grid-cols-4 justify-items-center gap-3"},ee={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},te={class:"text-primary sm:text-3xl text-xl text-center"},se=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Days",-1),re={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},oe={class:"text-primary sm:text-3xl text-xl text-center"},de=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Hours",-1),le={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},ae={class:"text-primary sm:text-3xl text-xl text-center"},ne=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Mins",-1),xe={class:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col"},ce={class:"text-primary sm:text-3xl text-xl text-center"},ie=e("h4",{class:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold"},"Sec",-1),me=e("pre",null,`<!-- circle countdown -->
<div class="mb-5 grid grid-cols-4 justify-items-center gap-3">
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo2.days }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo2.hours }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo2.minutes }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center">{{ demo2.seconds }}</h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
  </div>
</div>
<!-- script -->
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const timer2: any = ref(null);
const demo2: any = ref({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

onMounted(() => {
  setTimerDemo2();
});

const setTimerDemo2 = () => {
  let date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  let countDownDate = date.getTime();

  timer2.value = setInterval(() => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    demo2.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    demo2.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    demo2.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    demo2.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(timer2.value);
    }
  }, 500);
};
<\/script>
`,-1),_e=j({__name:"countdown",setup(he){M({title:"Countdown"});const{codeArr:i,toggleCode:m}=D(),h=n(null),s=n({days:null,hours:null,minutes:null,seconds:null}),u=n(null),r=n({days:null,hours:null,minutes:null,seconds:null});C(()=>{k(),g()});const k=()=>{let o=new Date;o.setDate(o.getDate()+3);let d=o.getTime();h.value=setInterval(()=>{let a=new Date().getTime(),t=d-a;s.value.days=Math.floor(t/(1e3*60*60*24)),s.value.hours=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),s.value.minutes=Math.floor(t%(1e3*60*60)/(1e3*60)),s.value.seconds=Math.floor(t%(1e3*60)/1e3),t<0&&clearInterval(h.value)},500)},g=()=>{let o=new Date;o.setFullYear(o.getFullYear()+1);let d=o.getTime();u.value=setInterval(()=>{let a=new Date().getTime(),t=d-a;r.value.days=Math.floor(t/(1e3*60*60*24)),r.value.hours=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),r.value.minutes=Math.floor(t%(1e3*60*60)/(1e3*60)),r.value.seconds=Math.floor(t%(1e3*60)/1e3),t<0&&clearInterval(u.value)},500)};return(o,d)=>(c(),T("div",null,[I,e("div",S,[e("div",B,[e("div",F,[H,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[0]||(d[0]=a=>x(m)("code1"))},[e("span",N,[f(y,{class:"me-2"}),_(" Code ")])])]),e("div",V,[e("div",null,[e("div",Y,[e("h1",$,l(s.value.days),1)]),A]),e("div",null,[e("div",E,[e("h1",P,l(s.value.hours),1)]),X]),e("div",null,[e("div",q,[e("h1",z,l(s.value.minutes),1)]),G]),e("div",null,[e("div",J,[e("h1",K,l(s.value.seconds),1)]),L])]),x(i).includes("code1")?(c(),b(p,{key:0},{default:v(()=>[O]),_:1})):w("",!0)]),e("div",Q,[e("div",R,[U,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[1]||(d[1]=a=>x(m)("code2"))},[e("span",W,[f(y,{class:"me-2"}),_(" Code ")])])]),e("div",Z,[e("div",null,[e("div",ee,[e("h1",te,l(r.value.days),1)]),se]),e("div",null,[e("div",re,[e("h1",oe,l(r.value.hours),1)]),de]),e("div",null,[e("div",le,[e("h1",ae,l(r.value.minutes),1)]),ne]),e("div",null,[e("div",xe,[e("h1",ce,l(r.value.seconds),1)]),ie])]),x(i).includes("code2")?(c(),b(p,{key:0},{default:v(()=>[me]),_:1})):w("",!0)])])]))}});export{_e as default};
