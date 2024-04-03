import{u as m,r as l,s as u,j as e,b as t,L as y}from"./index-db6af04d.js";import{C as i}from"./Highlight-7cc82095.js";import{T as n}from"./tippy-79532697.js";import{I as h}from"./IconBell-f4cf060d.js";import{I as r}from"./IconCode-9488e58f.js";const v=()=>{const p=m();l.useEffect(()=>{p(u("Tooltips"))});const[o,c]=l.useState([]),a=s=>{o.includes(s)?c(d=>d.filter(b=>b!==s)):c([...o,s])};return e("div",{children:[e("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t("li",{children:t(y,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),t("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t("span",{children:"Popovers"})})]}),e("div",{className:"pt-5 space-y-8",children:[e("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t(h,{})}),t("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t("a",{href:"https://www.npmjs.com/package/@tippyjs/react",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/@tippyjs/react"})]}),e("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e("div",{className:"panel",id:"default",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default"}),t("button",{onClick:()=>{a("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex justify-center w-full gap-4",children:[t(n,{content:"Popover using ANCHOR tag",children:t("button",{type:"button",className:"btn bg-primary btn-primary",children:"Link"})}),t(n,{content:"Popover using BUTTON tag",children:t("button",{type:"button",className:"btn btn-success",children:"Button"})})]})}),o.includes("code1")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Popover using ANCHOR tag">
    <button type="button" className="btn bg-primary btn-primary">
        Link
    </button>
</Tippy>

<Tippy content="Popover using BUTTON tag">
    <button type="button" className="btn btn-success">
        Button
    </button>
</Tippy>`})})]}),e("div",{className:"panel",id:"directions",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Placement"}),t("button",{onClick:()=>{a("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t(n,{content:"Popover on top",placement:"top",children:t("button",{type:"button",className:"btn btn-info",children:"Tooltip on top"})}),t(n,{content:"Popover on left",placement:"left",children:t("button",{type:"button",className:"btn btn-secondary",children:"Tooltip on left"})}),t(n,{content:"Popover on bottom",placement:"bottom",children:t("button",{type:"button",className:"btn btn-warning",children:"Tooltip on bottom"})}),t(n,{content:"Popover on right",placement:"right",children:t("button",{type:"button",className:"btn btn-danger",children:"Tooltip on right"})})]})}),o.includes("code2")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Tooltip on top
    </button>
</Tippy>

<Tippy content="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Tooltip on left
    </button>
</Tippy>

<Tippy content="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Tooltip on right
    </button>
</Tippy>

<Tippy content="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Tooltip on bottom
    </button>
</Tippy>`})})]}),e("div",{className:"panel lg:row-start-1 lg:col-start-2",id:"dismissible",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"HTML"}),t("button",{onClick:()=>{a("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex justify-center gap-4 w-full",children:t(n,{content:t("strong",{children:"Bolded content"}),children:t("button",{type:"button","data-dismissable":"true",className:"btn btn-dark",children:"Tooltip on HTML"})})})}),o.includes("code3")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Bolded content">
    <button type="button" data-dismissable="true" className="btn btn-dark">
        Tooltip on HTML
    </button>
</Tippy>`})})]}),e("div",{className:"panel",id:"options",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Options"}),t("button",{className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>{a("code4")},children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t(n,{trigger:"click",content:"On Click",children:t("button",{type:"button","data-trigger":"mouseenter",className:"btn btn-primary",children:"On Click"})}),t(n,{trigger:"focusin",content:"On Focus",children:t("button",{type:"button","data-trigger":"focus",className:"btn btn-secondary",children:"On Focus"})}),t(n,{content:"Delay 1s",delay:1e3,children:t("button",{type:"button","data-delay":"1000",className:"btn btn-info",children:"Delay"})}),t(n,{content:"Disabled Animation",children:t("button",{type:"button","data-animation":"false",className:"btn btn-dark",children:"Disabled Animation"})})]})}),o.includes("code4")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="On Click">
    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
        On Click
    </button>
</Tippy>

<Tippy trigger="focusin" content="On Focus">
    <button type="button" data-trigger="focus" className="btn btn-secondary">
        On Focus
    </button>
</Tippy>

<Tippy content="Delay 1s" delay={1000}>
    <button type="button" data-delay="1000" className="btn btn-info">
        Delay
    </button>
</Tippy>

<Tippy content="Disabled Animation">
    <button type="button" data-animation="false" className="btn btn-dark">
        Disabled Animation
    </button>
</Tippy>`})})]}),e("div",{className:"panel lg:col-span-2",id:"colors",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Colors"}),t("button",{className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>{a("code5")},children:e("span",{className:"flex items-center",children:[t(r,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t(n,{content:"Primary",theme:"primary",children:t("button",{type:"button",className:"btn btn-primary",children:"Primary"})}),t(n,{content:"Success",theme:"success",children:t("button",{type:"button",className:"btn btn-success",children:"Success"})}),t(n,{content:"info",theme:"info",children:t("button",{type:"button",className:"btn btn-info",children:"Info"})}),t(n,{content:"danger",theme:"danger",children:t("button",{type:"button",className:"btn btn-danger",children:"Danger"})}),t(n,{content:"warning",theme:"warning",children:t("button",{type:"button",className:"btn btn-warning",children:"Warning"})}),t(n,{content:"secondary",theme:"secondary",children:t("button",{type:"button",className:"btn btn-secondary",children:"Secondary"})}),t(n,{content:"dark",theme:"dark",children:t("button",{type:"button",className:"btn btn-dark",children:"Dark"})})]})}),o.includes("code5")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Primary" theme="primary">
    <button type="button" className="btn btn-primary">
        Primary
    </button>
</Tippy>

<Tippy content="Success" theme="success">
    <button type="button" className="btn btn-success">
        Success
    </button>
</Tippy>

<Tippy content="info" theme="info">
    <button type="button" className="btn btn-info">
        Info
    </button>
</Tippy>

<Tippy content="danger" theme="danger">
    <button type="button" className="btn btn-danger">
        Danger
    </button>
</Tippy>

<Tippy content="warning" theme="warning">
    <button type="button" className="btn btn-warning">
        Warning
    </button>
</Tippy>

<Tippy content="secondary" theme="secondary">
    <button type="button" className="btn btn-secondary">
        Secondary
    </button>
</Tippy>

<Tippy content="dark" theme="dark">
    <button type="button" className="btn btn-dark">
        Dark
    </button>
</Tippy>`})})]})]})]})]})};export{v as default};
