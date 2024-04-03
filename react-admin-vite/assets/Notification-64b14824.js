import{R as C,q as T,u as E,r as v,s as R,a as _,j as e,b as t,L as D}from"./index-8cd85ed0.js";import{C as f}from"./Highlight-f2825850.js";import{S as g}from"./sweetalert2.all-db9596c0.js";import{I as P}from"./IconBell-58d1c7ab.js";import{I as p}from"./IconCode-4ce6e9fe.js";const k=[{key:"title",getter:o=>o.getTitle()},{key:"html",getter:o=>o.getHtmlContainer()},{key:"confirmButtonText",getter:o=>o.getConfirmButton()},{key:"denyButtonText",getter:o=>o.getDenyButton()},{key:"cancelButtonText",getter:o=>o.getCancelButton()},{key:"footer",getter:o=>o.getFooter()},{key:"closeButtonHtml",getter:o=>o.getCloseButton()},{key:"iconHtml",getter:o=>o.getIconContent()},{key:"loaderHtml",getter:o=>o.getLoader()}],x=()=>{};function O(o){function r(n){const s={},i={},a=k.map(m=>m.key);return Object.entries(n).forEach(m=>{let[d,u]=m;a.includes(d)&&C.isValidElement(u)?(s[d]=u,i[d]=" "):i[d]=u}),[s,i]}function w(n,s){Object.entries(s).forEach(i=>{let[a,m]=i;const u=k.find(y=>y.key===a).getter(o),l=T(u);l.render(m),n.__roots.push(l)})}function c(n){n.__roots.forEach(s=>{s.unmount()}),n.__roots=[]}return class extends o{static argsToParams(n){if(C.isValidElement(n[0])||C.isValidElement(n[1])){const s={};return["title","html","icon"].forEach((i,a)=>{n[a]!==void 0&&(s[i]=n[a])}),s}else return o.argsToParams(n)}_main(n,s){this.__roots=[],this.__params=Object.assign({},s,n);const[i,a]=r(this.__params),m=a.willOpen||x,d=a.didOpen||x,u=a.didDestroy||x;return super._main(Object.assign({},a,{willOpen:l=>{w(this,i),m(l)},didOpen:l=>{setTimeout(()=>{d(l)})},didDestroy:l=>{u(l),c(this)}}))}update(n){Object.assign(this.__params,n),c(this);const[s,i]=r(this.__params);super.update(i),w(this,s)}}}const W=()=>{const o=E();v.useEffect(()=>{o(R("Notifications"))});const[r,w]=v.useState([]),c=h=>{r.includes(h)?w(N=>N.filter(j=>j!==h)):w([...r,h])},n=_(h=>h.themeConfig.rtlClass)==="rtl",s=O(g),i=()=>{s.fire({title:"Hello, world! This is a toast message.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},a=()=>{s.fire({title:"Example notification text.",toast:!0,position:n?"top-end":"top-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},m=()=>{s.fire({title:"Example notification text.",toast:!0,position:"top",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},d=()=>{s.fire({title:"Example notification text.",toast:!0,position:n?"top-start":"top-end",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},u=()=>{s.fire({title:"Example notification text.",toast:!0,position:n?"bottom-end":"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},l=()=>{s.fire({title:"Example notification text.",toast:!0,position:"bottom",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},y=()=>{s.fire({title:"Example notification text.",toast:!0,position:n?"bottom-start":"bottom-end",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},B=()=>{s.fire({title:"Example notification text.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!1})},M=()=>{s.fire({title:"Example notification text.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:5e3,showCloseButton:!0})},S=()=>{g.fire({toast:!0,position:"bottom-start",text:"Custom callback when action button is clicked.",showCloseButton:!0,showConfirmButton:!1}).then(h=>{g.fire({toast:!0,position:"bottom-start",text:"Thanks for clicking the Dismiss button!",showCloseButton:!0,showConfirmButton:!1})})},b=h=>{g.mixin({toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0,customClass:{popup:`color-${h}`}}).fire({title:"Example notification text."})};return e("div",{children:[e("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t("li",{children:t(D,{to:"#",className:"text-primary hover:underline",children:"Components"})}),t("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t("span",{children:"Notifications"})})]}),e("div",{className:"pt-5 space-y-8",children:[e("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t(P,{})}),t("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/sweetalert2"})]}),e("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code1"),children:e("span",{className:"flex items-center",children:[t(p,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex items-center justify-center",children:t("button",{type:"button",className:"btn btn-primary",onClick:i,children:"Open Toast"})})}),r.includes("code1")&&t(f,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage = () => {
    MySwal.fire({
        title: 'Hello, world! This is a toast message.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
    });
};
<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-primary" onClick={showMessage}>
            Open Toast
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel lg:row-span-2",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Position"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code2"),children:e("span",{className:"flex items-center",children:[t(p,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:[t("h6",{className:"font-semibold text-base dark:text-white-light mb-3 text-center",children:"Top Position"}),e("div",{className:"flex items-center justify-center mb-10 gap-2",children:[t("button",{type:"button",className:"btn btn-success",onClick:a,children:"Top Left"}),t("button",{type:"button",className:"btn btn-secondary",onClick:m,children:"Top Center"}),t("button",{type:"button",className:"btn btn-info",onClick:d,children:"Top Right"})]}),t("h6",{className:"font-semibold text-base dark:text-white-light mb-3 text-center",children:"Bottom Position"}),e("div",{className:"flex items-center justify-center gap-2",children:[t("button",{type:"button",className:"btn btn-dark",onClick:u,children:"Bottom Left"}),t("button",{type:"button",className:"btn btn-primary",onClick:l,children:"Bottom Center"}),t("button",{type:"button",className:"btn btn-secondary",onClick:y,children:"Bottom Right"})]})]}),r.includes("code2")&&t(f,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

    const showMessage1 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'top-end' : 'top-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };
    const showMessage2 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage3 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'top-start' : 'top-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage4 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'bottom-end' : 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage5 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage6 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'bottom-start' : 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

<div className="mb-5">
    <h6 className="font-semibold text-base dark:text-white-light mb-3 text-center">Top Position</h6>
    <div className="flex items-center justify-center mb-10 gap-2">
        <button type="button" className="btn btn-success" onClick={showMessage1}>
            Top Left
        </button>
        <button type="button" className="btn btn-secondary" onClick={showMessage2}>
            Top Center
        </button>
        <button type="button" className="btn btn-info" onClick={showMessage3}>
            Top Right
        </button>
    </div>
    <h6 className="font-semibold text-base dark:text-white-light mb-3 text-center">Bottom Position</h6>
    <div className="flex items-center justify-center gap-2">
        <button type="button" className="btn btn-dark" onClick={showMessage4}>
            Bottom Left
        </button>
        <button type="button" className="btn btn-primary" onClick={showMessage5}>
            Bottom Center
        </button>
        <button type="button" className="btn btn-secondary" onClick={showMessage6}>
            Bottom Right
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"No Action"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code3"),children:e("span",{className:"flex items-center",children:[t(p,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex items-center justify-center",children:t("button",{type:"button",className:"btn btn-success",onClick:B,children:"No Action"})})}),r.includes("code3")&&t(f,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage7 = () => {
    MySwal.fire({
        title: 'Example notification text.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: false,
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={showMessage7}>
            No Action
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Click Callback"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code4"),children:e("span",{className:"flex items-center",children:[t(p,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex items-center justify-center",children:t("button",{type:"button",className:"btn btn-info",onClick:S,children:"Click Callback"})})}),r.includes("code4")&&t(f,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const clickCallable = () => {
    Swal.fire({
        toast: true,
        position: 'bottom-start',
        text: 'Custom callback when action button is clicked.',
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

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={clickCallable}>
            Click Callback
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Duration"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code5"),children:e("span",{className:"flex items-center",children:[t(p,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex items-center justify-center",children:t("button",{type:"button",className:"btn btn-dark",onClick:M,children:"Duration"})})}),r.includes("code5")&&t(f,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage8 = () => {
    MySwal.fire({
        title: 'Example notification text.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 5000,
        showCloseButton: true,
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-dark" onClick={showMessage8}>
            Duration
        </button>
    </div>
</div>`})})]}),e("div",{className:"panel lg:col-span-2",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Background Color"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>c("code6"),children:e("span",{className:"flex items-center",children:[t(p,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast",children:[e("div",{children:[t("button",{type:"button",className:"btn btn-primary",onClick:()=>b("primary"),children:"Primary"}),t("div",{id:"primary-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-secondary",onClick:()=>b("secondary"),children:"Secondary"}),t("div",{id:"secondary-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-success",onClick:()=>b("success"),children:"Success"}),t("div",{id:"success-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-danger",onClick:()=>b("danger"),children:"Danger"}),t("div",{id:"danger-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-warning",onClick:()=>b("warning"),children:"Warning"}),t("div",{id:"warning-toast"})]}),e("div",{children:[t("button",{type:"button",className:"btn btn-info",onClick:()=>b("info"),children:"Info"}),t("div",{id:"info-toast"})]})]})}),r.includes("code6")&&t(f,{children:t("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const coloredToast = (color: any) => {
    const toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
        customClass: {
            popup: \`color-\${color}\`,
        },
    });
    toast.fire({
        title: 'Example notification text.',
    });
};

<div className="mb-5">
    <div className="grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast">
        <div>
            <button type="button" className="btn btn-primary" onClick={() => coloredToast('primary')}>
                Primary
            </button>
            <div id="primary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-secondary" onClick={() => coloredToast('secondary')}>
                Secondary
            </button>
            <div id="secondary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-success" onClick={() => coloredToast('success')}>
                Success
            </button>
            <div id="success-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-danger" onClick={() => coloredToast('danger')}>
                Danger
            </button>
            <div id="danger-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-warning" onClick={() => coloredToast('warning')}>
                Warning
            </button>
            <div id="warning-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-info" onClick={() => coloredToast('info')}>
                Info
            </button>
            <div id="info-toast"></div>
        </div>
    </div>
</div>`})})]})]})]})]})};export{W as default};
