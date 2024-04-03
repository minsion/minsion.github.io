import{c as h,_ as u}from"./codePreview.b8512f6b.js";import{d as v,u as x,a as k,o,b as a,e as t,f as n,g as c,j as e,G as l,w as s,X as y,D as _,p as w,U as C}from"./index.ddf2ada6.js";import{I as j}from"./icon-bell.2ecf9464.js";import{I as g}from"./icon-code.a018a24c.js";const D=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Elements")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Tooltips")])],-1),T={class:"pt-5 space-y-8"},P={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},O={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},B=t("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),S=t("a",{href:"https://www.npmjs.com/package/tippy.vue",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/tippy.vue",-1),A={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},I={class:"panel"},N={class:"flex items-center justify-between mb-5"},$=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Default",-1),H={class:"flex items-center"},L={class:"mb-5"},M={class:"flex justify-center w-full gap-4"},V={href:"javascript:;",class:"btn bg-primary btn-primary"},W={type:"button",class:"btn btn-success"},U=t("pre",null,`<!-- link -->
<a href="javascript:;" v-tippy:anchor class="btn bg-primary btn-primary">Link</a>
<tippy target="anchor">Popover using ANCHOR tag</tippy>

<!-- button -->
<button type="button" v-tippy:button class="btn btn-success">Button</button>
<tippy target="button">Popover using BUTTON tag</tippy>
`,-1),E={class:"panel"},F={class:"flex items-center justify-between mb-5"},R=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Placement",-1),G={class:"flex items-center"},X={class:"mb-5"},q={class:"flex flex-wrap justify-center gap-4 w-full"},z={type:"button",class:"btn btn-info"},J={type:"button",class:"btn btn-secondary"},K={type:"button",class:"btn btn-warning"},Q={type:"button",class:"btn btn-danger"},Y=t("pre",null,`<!-- top -->
<button type="button" v-tippy:top class="btn btn-info">Tooltip on top</button>
<tippy target="top" placement="top">Popover on top</tippy>

<!-- left -->
<button type="button" v-tippy:left class="btn btn-secondary">Tooltip on left</button>
<tippy target="left" :placement="store.rtlClass === 'rtl' ? 'right' : 'left'">Popover on left </tippy>

<!-- bottom -->
<button type="button" v-tippy:bottom class="btn btn-warning">Tooltip on bottom</button>
<tippy target="bottom" placement="bottom">Popover on bottom</tippy>

<!-- right -->
<button type="button" v-tippy:right class="btn btn-danger">Tooltip on right</button>
<tippy target="right" :placement="store.rtlClass === 'rtl' ? 'left' : 'right'">Popover on right</tippy>

<!-- script -->
<script lang="ts" setup>
  import { useAppStore } from '@/stores/index';
  const store = useAppStore();
<\/script>
`,-1),Z={class:"panel lg:row-start-1 lg:col-start-2"},tt={class:"flex items-center justify-between mb-5"},et=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"HTML",-1),ot={class:"flex items-center"},nt={class:"mb-5"},st={class:"flex justify-center gap-4 w-full"},at={type:"button",class:"btn btn-dark"},it=t("strong",null,"Bolded content",-1),rt=t("pre",null,`<!-- html -->
<button type="button" v-tippy:html class="btn btn-dark">Tooltip on HTML</button>
<tippy target="html"><strong>Bolded content</strong></tippy>
`,-1),lt={class:"panel"},ct={class:"flex items-center justify-between mb-5"},pt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Options",-1),dt={class:"flex items-center"},bt={class:"mb-5"},ut={class:"flex flex-wrap justify-center gap-4 w-full"},yt={type:"button",class:"btn btn-primary"},_t={type:"button",class:"btn btn-secondary"},gt={type:"button",class:"btn btn-info"},mt={type:"button",class:"btn btn-dark"},ft=t("pre",null,`<!-- click -->
<button type="button" v-tippy:click class="btn btn-primary">On Click</button>
<tippy target="click" trigger="click">On click</tippy>

<!-- focus -->
<button type="button" v-tippy:focus class="btn btn-secondary">On Focus</button>
<tippy target="focus" trigger="focus">On focus</tippy>


<!-- delay -->
<button type="button" v-tippy:delay class="btn btn-info">Delay</button>
<tippy target="delay" delay="1000">Delay 1s</tippy>


<!-- disabled animation -->
<button type="button" v-tippy:noanimation class="btn btn-dark">Disabled Animation</button>
<tippy target="noanimation" animation="false">Disable Animation</tippy>
`,-1),ht={class:"panel lg:col-span-2"},vt={class:"flex items-center justify-between mb-5"},xt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Colors",-1),kt={class:"flex items-center"},wt={class:"mb-5"},Ct={class:"flex flex-wrap justify-center gap-4 w-full"},jt={type:"button",class:"btn btn-primary"},Dt={type:"button",class:"btn btn-success"},Tt={type:"button",class:"btn btn-info"},Pt={type:"button",class:"btn btn-danger"},Ot={type:"button",class:"btn btn-warning"},Bt={type:"button",class:"btn btn-secondary"},St={type:"button",class:"btn btn-dark"},At=t("pre",null,`<!-- primary -->
<button type="button" v-tippy:primary class="btn btn-primary">Primary</button>
<tippy target="primary" :extra="{ theme: 'primary' }">Primary</tippy>

<!-- success -->
<button type="button" v-tippy:success class="btn btn-success">Success</button>
<tippy target="success" :extra="{ theme: 'success' }">Success</tippy>

<!-- info -->
<button type="button" v-tippy:info class="btn btn-info">Info</button>
<tippy target="info" :extra="{ theme: 'info' }">Info</tippy>

<!-- danger -->
<button type="button" v-tippy:danger class="btn btn-danger">Danger</button>
<tippy target="danger" :extra="{ theme: 'danger' }">Danger</tippy>

<!-- warning -->
<button type="button" v-tippy:warning class="btn btn-warning">Warning</button>
<tippy target="warning" :extra="{ theme: 'warning' }">Warning</tippy>

<!-- secondary -->
<button type="button" v-tippy:secondary class="btn btn-secondary">Secondary</button>
<tippy target="secondary" :extra="{ theme: 'secondary' }">Secondary</tippy>

<!-- dark -->
<button type="button" v-tippy:dark class="btn btn-dark">Dark</button>
<tippy target="dark" :extra="{ theme: 'dark' }">Dark</tippy>
`,-1),Vt=v({__name:"tooltips",setup(It){x({title:"Tooltips"});const f=k(),{codeArr:d,toggleCode:b}=h();return(Nt,p)=>{const i=w("tippy"),r=C("tippy");return o(),a("div",null,[D,t("div",T,[t("div",P,[t("div",O,[n(j)]),B,S]),t("div",A,[t("div",I,[t("div",N,[$,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[0]||(p[0]=m=>c(b)("code1"))},[t("span",H,[n(g,{class:"me-2"}),e(" Code ")])])]),t("div",L,[t("div",M,[l((o(),a("a",V,[e("Link")])),[[r,void 0,"anchor"]]),n(i,{target:"anchor"},{default:s(()=>[e("Popover using ANCHOR tag")]),_:1}),l((o(),a("button",W,[e("Button")])),[[r,void 0,"button"]]),n(i,{target:"button"},{default:s(()=>[e("Popover using BUTTON tag")]),_:1})])]),c(d).includes("code1")?(o(),y(u,{key:0},{default:s(()=>[U]),_:1})):_("",!0)]),t("div",E,[t("div",F,[R,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[1]||(p[1]=m=>c(b)("code2"))},[t("span",G,[n(g,{class:"me-2"}),e(" Code ")])])]),t("div",X,[t("div",q,[l((o(),a("button",z,[e("Tooltip on top")])),[[r,void 0,"top"]]),n(i,{target:"top",placement:"top"},{default:s(()=>[e("Popover on top")]),_:1}),l((o(),a("button",J,[e("Tooltip on left")])),[[r,void 0,"left"]]),n(i,{target:"left",placement:c(f).rtlClass==="rtl"?"right":"left"},{default:s(()=>[e("Popover on left ")]),_:1},8,["placement"]),l((o(),a("button",K,[e("Tooltip on bottom")])),[[r,void 0,"bottom"]]),n(i,{target:"bottom",placement:"bottom"},{default:s(()=>[e("Popover on bottom")]),_:1}),l((o(),a("button",Q,[e("Tooltip on right")])),[[r,void 0,"right"]]),n(i,{target:"right",placement:c(f).rtlClass==="rtl"?"left":"right"},{default:s(()=>[e("Popover on right")]),_:1},8,["placement"])])]),c(d).includes("code2")?(o(),y(u,{key:0},{default:s(()=>[Y]),_:1})):_("",!0)]),t("div",Z,[t("div",tt,[et,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[2]||(p[2]=m=>c(b)("code3"))},[t("span",ot,[n(g,{class:"me-2"}),e(" Code ")])])]),t("div",nt,[t("div",st,[l((o(),a("button",at,[e("Tooltip on HTML")])),[[r,void 0,"html"]]),n(i,{target:"html"},{default:s(()=>[it]),_:1})])]),c(d).includes("code3")?(o(),y(u,{key:0},{default:s(()=>[rt]),_:1})):_("",!0)]),t("div",lt,[t("div",ct,[pt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[3]||(p[3]=m=>c(b)("code4"))},[t("span",dt,[n(g,{class:"me-2"}),e(" Code ")])])]),t("div",bt,[t("div",ut,[l((o(),a("button",yt,[e("On Click")])),[[r,void 0,"click"]]),n(i,{target:"click",trigger:"click"},{default:s(()=>[e("On click")]),_:1}),l((o(),a("button",_t,[e("On Focus")])),[[r,void 0,"focus"]]),n(i,{target:"focus",trigger:"focus"},{default:s(()=>[e("On focus")]),_:1}),l((o(),a("button",gt,[e("Delay")])),[[r,void 0,"delay"]]),n(i,{target:"delay",delay:"1000"},{default:s(()=>[e("Delay 1s")]),_:1}),l((o(),a("button",mt,[e("Disabled Animation")])),[[r,void 0,"noanimation"]]),n(i,{target:"noanimation",animation:"false"},{default:s(()=>[e("Disable Animation")]),_:1})])]),c(d).includes("code4")?(o(),y(u,{key:0},{default:s(()=>[ft]),_:1})):_("",!0)]),t("div",ht,[t("div",vt,[xt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[4]||(p[4]=m=>c(b)("code5"))},[t("span",kt,[n(g,{class:"me-2"}),e(" Code ")])])]),t("div",wt,[t("div",Ct,[l((o(),a("button",jt,[e("Primary")])),[[r,void 0,"primary"]]),n(i,{target:"primary",extra:{theme:"primary"}},{default:s(()=>[e("Primary")]),_:1}),l((o(),a("button",Dt,[e("Success")])),[[r,void 0,"success"]]),n(i,{target:"success",extra:{theme:"success"}},{default:s(()=>[e("Success")]),_:1}),l((o(),a("button",Tt,[e("Info")])),[[r,void 0,"info"]]),n(i,{target:"info",extra:{theme:"info"}},{default:s(()=>[e("Info")]),_:1}),l((o(),a("button",Pt,[e("Danger")])),[[r,void 0,"danger"]]),n(i,{target:"danger",extra:{theme:"danger"}},{default:s(()=>[e("Danger")]),_:1}),l((o(),a("button",Ot,[e("Warning")])),[[r,void 0,"warning"]]),n(i,{target:"warning",extra:{theme:"warning"}},{default:s(()=>[e("Warning")]),_:1}),l((o(),a("button",Bt,[e("Secondary")])),[[r,void 0,"secondary"]]),n(i,{target:"secondary",extra:{theme:"secondary"}},{default:s(()=>[e("Secondary")]),_:1}),l((o(),a("button",St,[e("Dark")])),[[r,void 0,"dark"]]),n(i,{target:"dark",extra:{theme:"dark"}},{default:s(()=>[e("Dark")]),_:1})])]),c(d).includes("code5")?(o(),y(u,{key:0},{default:s(()=>[At]),_:1})):_("",!0)])])])])}}});export{Vt as default};
