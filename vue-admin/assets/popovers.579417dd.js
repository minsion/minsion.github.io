import{c as h,_ as g}from"./codePreview.b8512f6b.js";import{d as v,u as k,a as x,o,b as r,e as t,f as s,g as l,j as e,G as c,w as n,X as u,D as y,p as w,U as P}from"./index.ddf2ada6.js";import{I as C}from"./icon-bell.2ecf9464.js";import{I as m}from"./icon-code.a018a24c.js";const D=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Elements")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Popovers")])],-1),j={class:"pt-5 space-y-8"},O={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},S={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},A=t("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),B=t("a",{href:"https://www.npmjs.com/package/tippy.vue",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/tippy.vue",-1),I={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},N={class:"panel"},$={class:"flex items-center justify-between mb-5"},T=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Default",-1),H={class:"flex items-center"},V={class:"mb-5"},W={class:"flex justify-center w-full gap-4"},U={href:"javascript:;",class:"btn bg-primary btn-primary"},E={type:"button",class:"btn btn-success"},F=t("pre",null,`<!-- link -->
<a href="javascript:;" v-tippy:anchor class="btn bg-primary btn-primary">Link</a>
<tippy target="anchor" trigger="click">Popover using ANCHOR tag</tippy>

<!-- button -->
<button type="button" v-tippy:button class="btn btn-success">Button</button>
<tippy target="button" trigger="click">Popover using BUTTON tag</tippy>
`,-1),L={class:"panel"},R={class:"flex items-center justify-between mb-5"},G=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Placement",-1),M={class:"flex items-center"},X={class:"mb-5"},q={class:"flex flex-wrap justify-center gap-4 w-full"},z={type:"button",class:"btn btn-info"},J={type:"button",class:"btn btn-secondary"},K={type:"button",class:"btn btn-danger"},Q={type:"button",class:"btn btn-warning"},Y=t("pre",null,`<!-- top -->
<button type="button" v-tippy:top class="btn btn-info">Popover on top</button>
<tippy target="top" trigger="click" placement="top">Popover on top</tippy>

<!-- left -->
<button type="button" v-tippy:left class="btn btn-secondary">Popover on left</button>
<tippy target="left" trigger="click" :placement="store.rtlClass === 'rtl' ? 'right' : 'left'">Popover on left</tippy>

<!-- right -->
<button type="button" v-tippy:right class="btn btn-danger">Popover on right</button>
<tippy target="right" trigger="click" :placement="store.rtlClass === 'rtl' ? 'left' : 'right'">Popover on right</tippy>

<!-- bottom -->
<button type="button" v-tippy:bottom class="btn btn-warning">Popover on bottom</button>
<tippy target="bottom" trigger="click" placement="bottom">Popover on bottom</tippy>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),Z={class:"panel lg:row-start-1 lg:col-start-2"},tt={class:"flex items-center justify-between mb-5"},et=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Dismissible popover",-1),ot={class:"flex items-center"},st={class:"mb-5"},nt={class:"flex justify-center gap-4 w-full"},rt={type:"button","data-dismissable":"true",class:"btn btn-dark"},it=t("pre",null,`<!-- dismissible -->
<button type="button" v-tippy:dismissible data-dismissable="true" class="btn btn-dark">Popover on left</button>
<tippy target="dismissible" trigger="click" :placement="store.rtlClass === 'rtl' ? 'right' : 'left'">Popover on left</tippy>

<!-- script -->
<script lang="ts" setup>
import { useAppStore } from '@/stores/index';
const store = useAppStore();
<\/script>
`,-1),at={class:"panel"},ct={class:"flex items-center justify-between mb-5"},lt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Options",-1),pt={class:"flex items-center"},dt={class:"mb-5"},bt={class:"flex flex-wrap justify-center gap-4 w-full"},gt={type:"button",class:"btn btn-primary"},ut={type:"button",class:"btn btn-secondary"},yt={type:"button",class:"btn btn-info"},mt={type:"button",class:"btn btn-dark"},_t=t("pre",null,`<!-- hover -->
<button type="button" v-tippy:hover class="btn btn-primary">On Hover</button>
<tippy target="hover" trigger="mouseenter">On hover</tippy>

<!-- focus -->
<button type="button" v-tippy:focus class="btn btn-secondary">On Focus</button>
<tippy target="focus" trigger="focus">On focus</tippy>

<!-- delay -->
<button type="button" v-tippy:delay class="btn btn-info">Delay</button>
<tippy target="delay" delay="1000" trigger="click">Delay 1s</tippy>

<!-- no animation -->
<button type="button" v-tippy:noanimation class="btn btn-dark">Disabled Animation</button>
<tippy target="noanimation" animation="false" trigger="click">Disabled animation</tippy>
`,-1),ft={class:"panel lg:col-span-2"},ht={class:"flex items-center justify-between mb-5"},vt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Colors",-1),kt={class:"flex items-center"},xt={class:"mb-5"},wt={class:"flex flex-wrap justify-center gap-4 w-full"},Pt={type:"button",class:"btn btn-primary"},Ct={type:"button",class:"btn btn-success"},Dt={type:"button",class:"btn btn-info"},jt={type:"button",class:"btn btn-danger"},Ot={type:"button",class:"btn btn-warning"},St={type:"button",class:"btn btn-secondary"},At={type:"button",class:"btn btn-dark"},Bt=t("pre",null,`<!-- primary -->
<button type="button" v-tippy:primary class="btn btn-primary">Primary</button>
<tippy target="primary" trigger="click" :extra="{ theme: 'primary' }">Primary</tippy>

<!-- success -->
<button type="button" v-tippy:success class="btn btn-success">Success</button>
<tippy target="success" trigger="click" :extra="{ theme: 'success' }">Success</tippy>

<!-- info -->
<button type="button" v-tippy:info class="btn btn-info">Info</button>
<tippy target="info" trigger="click" :extra="{ theme: 'info' }">Info</tippy>

<!-- danger -->
<button type="button" v-tippy:danger class="btn btn-danger">Danger</button>
<tippy target="danger" trigger="click" :extra="{ theme: 'danger' }">Danger</tippy>

<!-- warning -->
<button type="button" v-tippy:warning class="btn btn-warning">Warning</button>
<tippy target="warning" trigger="click" :extra="{ theme: 'warning' }">Warning</tippy>

<!-- secondary -->
<button type="button" v-tippy:secondary class="btn btn-secondary">Secondary</button>
<tippy target="secondary" trigger="click" :extra="{ theme: 'secondary' }">Secondary</tippy>

<!-- dark -->
<button type="button" v-tippy:dark class="btn btn-dark">Dark</button>
<tippy target="dark" trigger="click" :extra="{ theme: 'dark' }">Dark</tippy>
`,-1),Wt=v({__name:"popovers",setup(It){k({title:"Popovers"});const f=x(),{codeArr:d,toggleCode:b}=h();return(Nt,p)=>{const i=w("tippy"),a=P("tippy");return o(),r("div",null,[D,t("div",j,[t("div",O,[t("div",S,[s(C)]),A,B]),t("div",I,[t("div",N,[t("div",$,[T,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[0]||(p[0]=_=>l(b)("code1"))},[t("span",H,[s(m,{class:"me-2"}),e(" Code ")])])]),t("div",V,[t("div",W,[c((o(),r("a",U,[e("Link")])),[[a,void 0,"anchor"]]),s(i,{target:"anchor",trigger:"click"},{default:n(()=>[e("Popover using ANCHOR tag")]),_:1}),c((o(),r("button",E,[e("Button")])),[[a,void 0,"button"]]),s(i,{target:"button",trigger:"click"},{default:n(()=>[e("Popover using BUTTON tag")]),_:1})])]),l(d).includes("code1")?(o(),u(g,{key:0},{default:n(()=>[F]),_:1})):y("",!0)]),t("div",L,[t("div",R,[G,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[1]||(p[1]=_=>l(b)("code2"))},[t("span",M,[s(m,{class:"me-2"}),e(" Code ")])])]),t("div",X,[t("div",q,[c((o(),r("button",z,[e("Popover on top")])),[[a,void 0,"top"]]),s(i,{target:"top",trigger:"click",placement:"top"},{default:n(()=>[e("Popover on top")]),_:1}),c((o(),r("button",J,[e("Popover on left")])),[[a,void 0,"left"]]),s(i,{target:"left",trigger:"click",placement:l(f).rtlClass==="rtl"?"right":"left"},{default:n(()=>[e("Popover on left")]),_:1},8,["placement"]),c((o(),r("button",K,[e("Popover on right")])),[[a,void 0,"right"]]),s(i,{target:"right",trigger:"click",placement:l(f).rtlClass==="rtl"?"left":"right"},{default:n(()=>[e("Popover on right")]),_:1},8,["placement"]),c((o(),r("button",Q,[e("Popover on bottom")])),[[a,void 0,"bottom"]]),s(i,{target:"bottom",trigger:"click",placement:"bottom"},{default:n(()=>[e("Popover on bottom")]),_:1})])]),l(d).includes("code2")?(o(),u(g,{key:0},{default:n(()=>[Y]),_:1})):y("",!0)]),t("div",Z,[t("div",tt,[et,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[2]||(p[2]=_=>l(b)("code3"))},[t("span",ot,[s(m,{class:"me-2"}),e(" Code ")])])]),t("div",st,[t("div",nt,[c((o(),r("button",rt,[e("Popover on left")])),[[a,void 0,"dismissible"]]),s(i,{target:"dismissible",trigger:"click",placement:l(f).rtlClass==="rtl"?"right":"left"},{default:n(()=>[e("Popover on left")]),_:1},8,["placement"])])]),l(d).includes("code3")?(o(),u(g,{key:0},{default:n(()=>[it]),_:1})):y("",!0)]),t("div",at,[t("div",ct,[lt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[3]||(p[3]=_=>l(b)("code4"))},[t("span",pt,[s(m,{class:"me-2"}),e(" Code ")])])]),t("div",dt,[t("div",bt,[c((o(),r("button",gt,[e("On Hover")])),[[a,void 0,"hover"]]),s(i,{target:"hover",trigger:"mouseenter"},{default:n(()=>[e("On hover")]),_:1}),c((o(),r("button",ut,[e("On Focus")])),[[a,void 0,"focus"]]),s(i,{target:"focus",trigger:"focus"},{default:n(()=>[e("On focus")]),_:1}),c((o(),r("button",yt,[e("Delay")])),[[a,void 0,"delay"]]),s(i,{target:"delay",delay:"1000",trigger:"click"},{default:n(()=>[e("Delay 1s")]),_:1}),c((o(),r("button",mt,[e("Disabled Animation")])),[[a,void 0,"noanimation"]]),s(i,{target:"noanimation",animation:"false",trigger:"click"},{default:n(()=>[e("Disabled animation")]),_:1})])]),l(d).includes("code4")?(o(),u(g,{key:0},{default:n(()=>[_t]),_:1})):y("",!0)]),t("div",ft,[t("div",ht,[vt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:p[4]||(p[4]=_=>l(b)("code5"))},[t("span",kt,[s(m,{class:"me-2"}),e(" Code ")])])]),t("div",xt,[t("div",wt,[c((o(),r("button",Pt,[e("Primary")])),[[a,void 0,"primary"]]),s(i,{target:"primary",trigger:"click",extra:{theme:"primary"}},{default:n(()=>[e("Primary")]),_:1}),c((o(),r("button",Ct,[e("Success")])),[[a,void 0,"success"]]),s(i,{target:"success",trigger:"click",extra:{theme:"success"}},{default:n(()=>[e("Success")]),_:1}),c((o(),r("button",Dt,[e("Info")])),[[a,void 0,"info"]]),s(i,{target:"info",trigger:"click",extra:{theme:"info"}},{default:n(()=>[e("Info")]),_:1}),c((o(),r("button",jt,[e("Danger")])),[[a,void 0,"danger"]]),s(i,{target:"danger",trigger:"click",extra:{theme:"danger"}},{default:n(()=>[e("Danger")]),_:1}),c((o(),r("button",Ot,[e("Warning")])),[[a,void 0,"warning"]]),s(i,{target:"warning",trigger:"click",extra:{theme:"warning"}},{default:n(()=>[e("Warning")]),_:1}),c((o(),r("button",St,[e("Secondary")])),[[a,void 0,"secondary"]]),s(i,{target:"secondary",trigger:"click",extra:{theme:"secondary"}},{default:n(()=>[e("Secondary")]),_:1}),c((o(),r("button",At,[e("Dark")])),[[a,void 0,"dark"]]),s(i,{target:"dark",trigger:"click",extra:{theme:"dark"}},{default:n(()=>[e("Dark")]),_:1})])]),l(d).includes("code5")?(o(),u(g,{key:0},{default:n(()=>[Bt]),_:1})):y("",!0)])])])])}}});export{Wt as default};
