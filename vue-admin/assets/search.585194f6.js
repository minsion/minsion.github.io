import{d as j,u as L,r as w,c as A,o as l,b as m,e,g as a,f as r,j as p,G as B,H as S,J as f,F as $,z as N,X as h,w as b,D as g,y as d,B as v,q}from"./index.ddf2ada6.js";import{c as J,_}from"./codePreview.b8512f6b.js";import{I as y}from"./icon-code.a018a24c.js";const V=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Elements")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Search")])],-1),D={class:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6"},I={class:"panel lg:row-span-2"},z={class:"flex items-center justify-between mb-5"},G=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Live Search",-1),P={class:"flex items-center"},R={class:"mb-5 space-y-5"},E={class:"mx-auto w-full sm:w-1/2 mb-5"},F={class:"relative"},H={type:"button",class:"btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center"},K={class:"p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block"},M={class:"user-profile"},T=["src"],O={class:"cursor-pointer"},U=e("pre",null,`<!-- live search -->
<div>
  <!-- searchbar -->
  <form class="mx-auto w-full sm:w-1/2 mb-5">
    <div class="relative">
      <input
        type="text"
        placeholder="Search Attendees..."
        class="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
        v-model="search"
      />
      <button type="button" class="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center">
        <svg> ... </svg>
      </button>
    </div>
  </form>

  <!-- result -->
  <div class="p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block">
    <template v-for="(item, i) in searchResults" :key="i">
      <div
        class="
          bg-white
          dark:bg-[#1b2e4b]
          rounded-xl
          shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)]
          p-3
          flex
          items-center
          justify-between
          text-gray-500
          font-semibold
          min-w-[625px]
          hover:text-primary
          transition-all
          duration-300
          hover:scale-[1.01]
        "
      >
        <div class="user-profile">
          <img :src="\`/assets/images/\${item.thumb}\`" alt="" class="w-8 h-8 rounded-md object-cover" />
        </div>
        <div>{{ item.name }}</div>
        <div>{{ item.email }}</div>
        <div class="badge border-2 border-dashed" :class="item.statusClass">
          {{ item.status }}
        </div>
        <div class="cursor-pointer">
          <svg> ... </svg>
        </div>
      </div>
    </template>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
const search = ref('');
const items: any = [
  {
    thumb: 'profile-5.jpeg',
    name: 'Alan Green',
    email: 'alan@mail.com',
    status: 'Active',
    statusClass: 'badge badge-outline-primary',
  },
  {
    thumb: 'profile-11.jpeg',
    name: 'Linda Nelson',
    email: 'Linda@mail.com',
    status: 'Busy',
    statusClass: 'badge badge-outline-danger',
  },
  {
    thumb: 'profile-12.jpeg',
    name: 'Lila Perry',
    email: 'Lila@mail.com',
    status: 'Closed',
    statusClass: 'badge badge-outline-warning',
  },
  {
    thumb: 'profile-3.jpeg',
    name: 'Andy King',
    email: 'Andy@mail.com',
    status: 'Active',
    statusClass: 'badge badge-outline-primary',
  },
  {
    thumb: 'profile-15.jpeg',
    name: 'Jesse Cory',
    email: 'Jesse@mail.com',
    status: 'Busy',
    statusClass: 'badge badge-outline-danger',
  },
];
const searchResults = computed(() => {
  return items.filter((item: any) => {
    return (
      item.name.toLowerCase().includes(search.value.toLowerCase()) || item.email.toLowerCase().includes(search.value.toLowerCase()) || item.status.toLowerCase().includes(search.value.toLowerCase())
    );
  });
});
<\/script>
`,-1),X={class:"panel"},Q={class:"flex items-center justify-between mb-5"},W=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Overlay",-1),Y={class:"flex items-center"},Z={class:"mb-5 space-y-5"},ee=e("pre",null,`<!-- overlay -->
<form>
  <div class="search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full" @click="focus = true" :class="focus && 'input-focused'">
    <input
      type="text"
      placeholder="Search..."
      class="form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer"
      :class="{ '!block': focus }"
      @blur="focus = false"
    />
    <button
      type="submit"
      class="text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary"
      :class="{ 'ltr:!right-auto ltr:left-1 rtl:right-1': focus }"
    >
      <svg> ... </svg>
    </button>
  </div>
</form>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  const focus = ref(false);
<\/script>
`,-1),te={class:"panel"},se={class:"flex items-center justify-between mb-5"},ae=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Search Box",-1),re={class:"flex items-center"},le={class:"mb-5 space-y-5"},oe={class:"relative border border-white-dark/20 w-full flex"},ie={type:"submit",placeholder:"Let's find your question in fast way",class:"text-primary m-auto p-3 flex items-center justify-center"},ne=e("input",{type:"text",placeholder:"Let's find your question in fast way",class:"form-input border-0 border-l rounded-none bg-white focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"},null,-1),de=e("pre",null,`<!-- boxed -->
<form>
    <div class="relative border border-white-dark/20  w-full flex">
        <button type="submit" placeholder="Let's find your question in fast way" class="text-primary m-auto p-3 flex items-center justify-center">
          <svg> ... </svg>
        </button>
        <input type="text" placeholder="Let's find your question in fast way" class="form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3" />
    </div>
</form>
`,-1),fe=j({__name:"search",setup(ce){L({title:"Search"});const{codeArr:c,toggleCode:u}=J(),o=w(""),x=[{thumb:"profile-5.jpeg",name:"Alan Green",email:"alan@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-11.jpeg",name:"Linda Nelson",email:"Linda@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"},{thumb:"profile-12.jpeg",name:"Lila Perry",email:"Lila@mail.com",status:"Closed",statusClass:"badge badge-outline-warning"},{thumb:"profile-3.jpeg",name:"Andy King",email:"Andy@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-15.jpeg",name:"Jesse Cory",email:"Jesse@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"}],i=w(!1),k=A(()=>x.filter(n=>n.name.toLowerCase().includes(o.value.toLowerCase())||n.email.toLowerCase().includes(o.value.toLowerCase())||n.status.toLowerCase().includes(o.value.toLowerCase())));return(n,t)=>(l(),m("div",null,[V,e("div",D,[e("div",I,[e("div",z,[G,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=s=>a(u)("code1"))},[e("span",P,[r(y,{class:"me-2"}),p(" Code ")])])]),e("div",R,[e("div",null,[e("form",E,[e("div",F,[B(e("input",{type:"text",placeholder:"Search Attendees...",class:"form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11","onUpdate:modelValue":t[1]||(t[1]=s=>o.value=s)},null,512),[[S,o.value]]),e("button",H,[r(f,{class:"mx-auto"})])])]),e("div",K,[(l(!0),m($,null,N(a(k),(s,C)=>(l(),m("div",{key:C,class:"bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]"},[e("div",M,[e("img",{src:`/assets/images/${s.thumb}`,alt:"",class:"w-8 h-8 rounded-md object-cover"},null,8,T)]),e("div",null,v(s.name),1),e("div",null,v(s.email),1),e("div",{class:d(["badge border-2 border-dashed",s.statusClass])},v(s.status),3),e("div",O,[r(q,{class:"w-6 h-6 opacity-70"})])]))),128))])])]),a(c).includes("code1")?(l(),h(_,{key:0},{default:b(()=>[U]),_:1})):g("",!0)]),e("div",X,[e("div",Q,[W,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=s=>a(u)("code2"))},[e("span",Y,[r(y,{class:"me-2"}),p(" Code ")])])]),e("div",Z,[e("form",null,[e("div",{class:d(["search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full",i.value&&"input-focused"]),onClick:t[4]||(t[4]=s=>i.value=!0)},[e("input",{type:"text",placeholder:"Search...",class:d(["form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer",{"!block":i.value}]),onBlur:t[3]||(t[3]=s=>i.value=!1)},null,34),e("button",{type:"submit",class:d(["text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary",{"ltr:!right-auto ltr:left-1 rtl:right-1":i.value}])},[r(f,{class:"mx-auto w-5 h-5"})],2)],2)])]),a(c).includes("code2")?(l(),h(_,{key:0},{default:b(()=>[ee]),_:1})):g("",!0)]),e("div",te,[e("div",se,[ae,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[5]||(t[5]=s=>a(u)("code3"))},[e("span",re,[r(y,{class:"me-2"}),p(" Code ")])])]),e("div",le,[e("form",null,[e("div",oe,[e("button",ie,[r(f,{class:"mx-auto w-5 h-5"})]),ne])])]),a(c).includes("code3")?(l(),h(_,{key:0},{default:b(()=>[de]),_:1})):g("",!0)])])]))}});export{fe as default};
