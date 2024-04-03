import{c as b,_ as u}from"./codePreview.b8512f6b.js";import{d as y,u as _,r as m,o as i,b as k,e,f as s,g as a,j as p,X as h,w as g,D as f,p as x}from"./index.ddf2ada6.js";import{I as w}from"./icon-bell.2ecf9464.js";import{I as v}from"./icon-code.a018a24c.js";const C=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Forms")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Markdown Editor")])],-1),q={class:"pt-5 space-y-8"},B={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},V={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},j=e("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),U=e("a",{href:"https://www.npmjs.com/package/vue3-easymde",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/vue3-easymde",-1),E={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},A={class:"panel"},I={class:"flex items-center justify-between mb-5"},L=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),N={class:"flex items-center"},Y={class:"markdown-editor mb-5 rtl:text-right prose dark:prose-invert"},M=e("pre",null,`<!-- basic -->
<vue-easymde v-model="content1" ref="editor1" :highlight="true" :configs="{ spellChecker: false }" />

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  const content1 = ref(\`# Basic Example
  Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

  ## Lists
  Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

  #### Unordered
  * Lists are a piece of cake
  * They even auto continue as you type
  * A double enter will end them
  * Tabs and shift - tabs work too

  #### Ordered
  1. Numbered lists...
  2. ...work too!

  ## What about images?
  ![Yes](https://i.imgur.com/sZlktY7.png)\`);
<\/script>
`,-1),T={class:"panel"},D={class:"flex items-center justify-between mb-5"},O=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Autosaving",-1),W={class:"flex items-center"},$={class:"markdown-editor mb-5 rtl:text-right prose dark:prose-invert"},G=e("pre",null,`<!-- basic -->
<vue-easymde v-model="content2" ref="editor2" :highlight="true" :configs="{ spellChecker: false, autosave: { enabled: true, delay: 1000, uniqueId: 'mde-autosave-demo' } }" />

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  const content2 = ref(\`
  # Autosaving!

  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.
  \`);
<\/script>
`,-1),J=y({__name:"markdown-editor",setup(Z){_({title:"Markdown Editor"});const{codeArr:r,toggleCode:n}=b(),l=m(`# Basic Example
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift - tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)`),d=m(`
# Autosaving!

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.
`);return(F,t)=>{const c=x("vue-easymde");return i(),k("div",null,[C,e("div",q,[e("div",B,[e("div",V,[s(w)]),j,U]),e("div",E,[e("div",A,[e("div",I,[L,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=o=>a(n)("code1"))},[e("span",N,[s(v,{class:"me-2"}),p(" Code ")])])]),e("div",Y,[s(c,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o),ref:"editor1",highlight:!0,configs:{spellChecker:!1}},null,8,["modelValue"])]),a(r).includes("code1")?(i(),h(u,{key:0},{default:g(()=>[M]),_:1})):f("",!0)]),e("div",T,[e("div",D,[O,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=o=>a(n)("code2"))},[e("span",W,[s(v,{class:"me-2"}),p(" Code ")])])]),e("div",$,[s(c,{modelValue:d.value,"onUpdate:modelValue":t[3]||(t[3]=o=>d.value=o),ref:"editor2",highlight:!0,configs:{spellChecker:!1,autosave:{enabled:!0,delay:1e3,uniqueId:"mde-autosave-demo"}}},null,8,["modelValue"])]),a(r).includes("code2")?(i(),h(u,{key:0},{default:g(()=>[G]),_:1})):f("",!0)])])])])}}});export{J as default};
