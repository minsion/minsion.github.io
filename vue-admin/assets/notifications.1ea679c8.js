import{c as k,_ as u}from"./codePreview.b8512f6b.js";import{S as v}from"./sweetalert2.all.06de7800.js";import{d as w,u as C,a as _,o as a,b as B,e as t,f as l,g as e,j as b,X as m,w as p,D as f}from"./index.ddf2ada6.js";import{I as E}from"./icon-bell.2ecf9464.js";import{I as h}from"./icon-code.a018a24c.js";const $=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Notifications")])],-1),j={class:"pt-5 space-y-8"},T={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},S={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},M=t("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),D=t("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/sweetalert2",-1),N={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},I={class:"panel"},A={class:"flex items-center justify-between mb-5"},H=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),P={class:"flex items-center"},L={class:"mb-5"},R={class:"flex items-center justify-center"},V=t("pre",null,`<!-- basic -->
<button type="button" class="btn btn-primary" @click="showMessage('Hello, world! This is a toast message.')">Open Toast</button>

<!-- script -->
<script>
    const showMessage = (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) => {
        const toast = Swal.mixin({
            toast: true,
            position: position || 'bottom-start',
            showConfirmButton: false,
            timer: duration,
            showCloseButton: showCloseButton,
        });
        toast.fire({
            title: msg,
        });
    };
<\/script>
`,-1),O={class:"panel lg:row-span-2"},W={class:"flex items-center justify-between mb-5"},X=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Position",-1),q={class:"flex items-center"},z={class:"mb-5"},F=t("h6",{class:"font-semibold text-base dark:text-white-light mb-3 text-center"},"Top Position",-1),G={class:"flex items-center justify-center mb-10 gap-2"},J=t("h6",{class:"font-semibold text-base dark:text-white-light mb-3 text-center"},"Bottom Position",-1),K={class:"flex items-center justify-center gap-2"},Q=t("pre",null,`<!-- top left -->
<button type="button" class="btn btn-success" @click="showMessage('Example notification text.',store.rtlClass === 'rtl' ? 'top-end' : 'top-start')">Top Left</button>

<!-- top center -->
<button type="button" class="btn btn-secondary" @click="showMessage('Example notification text','top')">Top Center</button>

<!-- top right -->
<button type="button" class="btn btn-info" @click="showMessage('Example notification text.', store.rtlClass === 'rtl' ? 'top-start' : 'top-end')">Top Right</button>

<!-- bottom left -->
<button type="button" class="btn btn-dark" @click="showMessage('Example notification text.',store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start')">Bottom Left</button>

<!-- bottom center -->
<button type="button" class="btn btn-primary" @click="showMessage('Example notification text.','bottom')">Bottom Center</button>

<!-- bottom right -->
<button type="button" class="btn btn-secondary" @click="showMessage('Example notification text.',store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end')">Bottom Right</button>

<!-- script -->
<script>
  import { useAppStore } from '@/stores/index';
  const store = useAppStore();
  const showMessage = (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) => {
      const toast = Swal.mixin({
          toast: true,
          position: position || 'bottom-start',
          showConfirmButton: false,
          timer: duration,
          showCloseButton: showCloseButton,
      });
      toast.fire({
          title: msg,
      });
  };
<\/script>
`,-1),U={class:"panel"},Y={class:"flex items-center justify-between mb-5"},Z=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"No Action",-1),tt={class:"flex items-center"},ot={class:"mb-5"},st={class:"flex items-center justify-center"},et=t("pre",null,`<!-- no action -->
<button type="button" class="btn btn-success" @click="showMessage('Example notification text.', 'bottom-start',false)">No Action</button>

<!-- script -->
<script>
    const showMessage = (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) => {
        const toast = Swal.mixin({
            toast: true,
            position: position || 'bottom-start',
            showConfirmButton: false,
            timer: duration,
            showCloseButton: showCloseButton,
        });
        toast.fire({
            title: msg,
        });
    };
<\/script>
`,-1),nt={class:"panel"},it={class:"flex items-center justify-between mb-5"},at=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Click Callback",-1),lt={class:"flex items-center"},rt={class:"mb-5"},ct={class:"flex items-center justify-center"},dt=t("pre",null,`<!-- click callback -->
<button type="button" class="btn btn-info" @click="clickCallable()">Click Callback</button>

<!-- script -->
<script>
    const clickCallable = () => {
        Swal.fire({
            toast: true,
            position: 'bottom-start',
            text: "Custom callback when action button is clicked.",
            showCloseButton: true,
            showConfirmButton: false,
        }).then((result) => {
            Swal.fire({
                toast: true,
                position: 'bottom-start',
                text: 'Thanks for clicking the Dismiss button!',
                showCloseButton: true,
                showConfirmButton: false,
            });
        });
    };
<\/script>
`,-1),ut={class:"panel"},bt={class:"flex items-center justify-between mb-5"},mt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Duration",-1),pt={class:"flex items-center"},ft={class:"mb-5"},ht={class:"flex items-center justify-center"},xt=t("pre",null,`<!-- click callback -->
<button type="button" class="btn btn-dark" @click="showMessage(msg='Example notification text.', position= 'bottom-start', duration=5000)">Duration</button>

<!-- script -->
<script>
    const showMessage = (msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000) => {
        const toast = Swal.mixin({
            toast: true,
            position: position || 'bottom-start',
            showConfirmButton: false,
            timer: duration,
            showCloseButton: showCloseButton,
        });
        toast.fire({
            title: msg,
        });
    };
<\/script>
`,-1),vt={class:"panel lg:col-span-2"},gt={class:"flex items-center justify-between mb-5"},yt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Background Color",-1),kt={class:"flex items-center"},wt={class:"mb-5"},Ct={class:"grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast"},_t=t("div",{id:"primary-toast"},null,-1),Bt=t("div",{id:"secondary-toast"},null,-1),Et=t("div",{id:"success-toast"},null,-1),$t=t("div",{id:"danger-toast"},null,-1),jt=t("div",{id:"warning-toast"},null,-1),Tt=t("div",{id:"info-toast"},null,-1),St=t("pre",null,`<!-- primary -->
<div>
    <button type="button" class="btn btn-primary" @click="coloredToast('primary')">Primary</button>
    <div id="primary-toast"></div>
</div>

<!-- secondary -->
<div>
    <button type=" button" class="btn btn-secondary" @click="coloredToast('secondary')">Secondary</button>
    <div id="secondary-toast"></div>
</div>

<!-- success -->
<div>
    <button type="button" class="btn btn-success" @click="coloredToast('success')">Success</button>
    <div id="success-toast"></div>
</div>

<!-- danger -->
<div>
    <button type="button" class="btn btn-danger" @click="coloredToast('danger')">Danger</button>
    <div id="danger-toast"></div>
</div>

<!-- warning -->
<div>
    <button type="button" class="btn btn-warning" @click="coloredToast('warning')">Warning</button>
    <div id="warning-toast"></div>
</div>

<!-- info -->
<div>
    <button type="button" class="btn btn-info" @click="coloredToast('info')">Info</button>
    <div id="info-toast"></div>
</div>

<!-- script -->
<script>
    const coloredToast = (color) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
            customClass: {
                popup: \`color-\${color}\`
            },
            target: document.getElementById(color + '-toast')
        });
        toast.fire({
            title: 'Example notification text.',
        });
    };
<\/script>
`,-1),Rt=w({__name:"notifications",setup(Mt){C({title:"Notification"});const x=_(),{codeArr:r,toggleCode:c}=k(),n=(i="Example notification text.",o="bottom-start",s=!0,Dt="",y=3e3)=>{v.mixin({toast:!0,position:o||"bottom-start",showConfirmButton:!1,timer:y,showCloseButton:s}).fire({title:i})},g=()=>{v.fire({toast:!0,position:"bottom-start",text:"Custom callback when action button is clicked.",showCloseButton:!0,showConfirmButton:!1}).then(i=>{v.fire({toast:!0,position:"bottom-start",text:"Thanks for clicking the Dismiss button!",showCloseButton:!0,showConfirmButton:!1})})},d=i=>{v.mixin({toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0,customClass:{popup:`color-${i}`},target:document.getElementById(i+"-toast")||"body"}).fire({title:"Example notification text."})};return(i,o)=>(a(),B("div",null,[$,t("div",j,[t("div",T,[t("div",S,[l(E)]),M,D]),t("div",N,[t("div",I,[t("div",A,[H,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[0]||(o[0]=s=>e(c)("code1"))},[t("span",P,[l(h,{class:"me-2"}),b(" Code ")])])]),t("div",L,[t("div",R,[t("button",{type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=s=>n("Hello, world! This is a toast message."))},"Open Toast")])]),e(r).includes("code1")?(a(),m(u,{key:0},{default:p(()=>[V]),_:1})):f("",!0)]),t("div",O,[t("div",W,[X,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[2]||(o[2]=s=>e(c)("code2"))},[t("span",q,[l(h,{class:"me-2"}),b(" Code ")])])]),t("div",z,[F,t("div",G,[t("button",{type:"button",class:"btn btn-success",onClick:o[3]||(o[3]=s=>n("Example notification text.",e(x).rtlClass==="rtl"?"top-end":"top-start"))}," Top Left "),t("button",{type:"button",class:"btn btn-secondary",onClick:o[4]||(o[4]=s=>n("Example notification text","top"))},"Top Center"),t("button",{type:"button",class:"btn btn-info",onClick:o[5]||(o[5]=s=>n("Example notification text.",e(x).rtlClass==="rtl"?"top-start":"top-end"))}," Top Right ")]),J,t("div",K,[t("button",{type:"button",class:"btn btn-dark",onClick:o[6]||(o[6]=s=>n("Example notification text.",e(x).rtlClass==="rtl"?"bottom-end":"bottom-start"))}," Bottom Left "),t("button",{type:"button",class:"btn btn-primary",onClick:o[7]||(o[7]=s=>n("Example notification text.","bottom"))},"Bottom Center"),t("button",{type:"button",class:"btn btn-secondary",onClick:o[8]||(o[8]=s=>n("Example notification text.",e(x).rtlClass==="rtl"?"bottom-start":"bottom-end"))}," Bottom Right ")])]),e(r).includes("code2")?(a(),m(u,{key:0},{default:p(()=>[Q]),_:1})):f("",!0)]),t("div",U,[t("div",Y,[Z,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[9]||(o[9]=s=>e(c)("code3"))},[t("span",tt,[l(h,{class:"me-2"}),b(" Code ")])])]),t("div",ot,[t("div",st,[t("button",{type:"button",class:"btn btn-success",onClick:o[10]||(o[10]=s=>n("Example notification text.","bottom-start",!1))}," No Action ")])]),e(r).includes("code3")?(a(),m(u,{key:0},{default:p(()=>[et]),_:1})):f("",!0)]),t("div",nt,[t("div",it,[at,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[11]||(o[11]=s=>e(c)("code4"))},[t("span",lt,[l(h,{class:"me-2"}),b(" Code ")])])]),t("div",rt,[t("div",ct,[t("button",{type:"button",class:"btn btn-info",onClick:o[12]||(o[12]=s=>g())},"Click Callback")])]),e(r).includes("code4")?(a(),m(u,{key:0},{default:p(()=>[dt]),_:1})):f("",!0)]),t("div",ut,[t("div",bt,[mt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[13]||(o[13]=s=>e(c)("code5"))},[t("span",pt,[l(h,{class:"me-2"}),b(" Code ")])])]),t("div",ft,[t("div",ht,[t("button",{type:"button",class:"btn btn-dark",onClick:o[14]||(o[14]=s=>n(i.msg="Example notification text.",i.position="bottom-start",i.duration=5e3))}," Duration ")])]),e(r).includes("code5")?(a(),m(u,{key:0},{default:p(()=>[xt]),_:1})):f("",!0)]),t("div",vt,[t("div",gt,[yt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[15]||(o[15]=s=>e(c)("code6"))},[t("span",kt,[l(h,{class:"me-2"}),b(" Code ")])])]),t("div",wt,[t("div",Ct,[t("div",null,[t("button",{type:"button",class:"btn btn-primary",onClick:o[16]||(o[16]=s=>d("primary"))},"Primary"),_t]),t("div",null,[t("button",{type:"button",class:"btn btn-secondary",onClick:o[17]||(o[17]=s=>d("secondary"))},"Secondary"),Bt]),t("div",null,[t("button",{type:"button",class:"btn btn-success",onClick:o[18]||(o[18]=s=>d("success"))},"Success"),Et]),t("div",null,[t("button",{type:"button",class:"btn btn-danger",onClick:o[19]||(o[19]=s=>d("danger"))},"Danger"),$t]),t("div",null,[t("button",{type:"button",class:"btn btn-warning",onClick:o[20]||(o[20]=s=>d("warning"))},"Warning"),jt]),t("div",null,[t("button",{type:"button",class:"btn btn-info",onClick:o[21]||(o[21]=s=>d("info"))},"Info"),Tt])])]),e(r).includes("code6")?(a(),m(u,{key:0},{default:p(()=>[St]),_:1})):f("",!0)])])])]))}});export{Rt as default};
