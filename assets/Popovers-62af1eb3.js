import{u as b,r as l,s as g,j as e,b as t,L as u}from"./index-21dbdbc4.js";import{C as c}from"./Highlight-44bb2925.js";import{T as n}from"./tippy-0f2f0e39.js";import{I as y}from"./IconBell-41337b28.js";import{I as o}from"./IconCode-7061e36d.js";const x=()=>{const p=b();l.useEffect(()=>{p(g("Popovers"))});const[r,s]=l.useState([]),i=a=>{r.includes(a)?s(d=>d.filter(m=>m!==a)):s([...r,a])};return e("div",{children:[e("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t("li",{children:t(u,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),t("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t("span",{children:"Popovers"})})]}),e("div",{className:"pt-5 space-y-8",children:[e("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t(y,{})}),t("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t("a",{href:"https://www.npmjs.com/package/@tippyjs/react",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/@tippyjs/react"})]}),e("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e("div",{className:"panel",id:"default",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default"}),t("button",{onClick:()=>{i("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(o,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex justify-center w-full gap-4",children:[t(n,{trigger:"click",content:"Popover using ANCHOR tag",children:t("button",{type:"button",className:"btn bg-primary btn-primary",children:"Link"})}),t(n,{trigger:"click",content:"Popover using BUTTON tag",children:t("button",{type:"button",className:"btn btn-success",children:"Button"})})]})}),r.includes("code1")&&t(c,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Popover using ANCHOR tag">
    <button type="button" className="btn bg-primary btn-primary">
        Link
    </button>
</Tippy>

<Tippy trigger="click" content="Popover using BUTTON tag">
    <button type="button" className="btn btn-success">
        Button
    </button>
</Tippy>`})})]}),e("div",{className:"panel",id:"directions",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Placement"}),t("button",{onClick:()=>{i("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(o,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t(n,{trigger:"click",content:"Popover on top",placement:"top",children:t("button",{type:"button",className:"btn btn-info",children:"Popover on top"})}),t(n,{trigger:"click",content:"Popover on left",placement:"left",children:t("button",{type:"button",className:"btn btn-secondary",children:"Popover on left"})}),t(n,{trigger:"click",content:"Popover on right",placement:"right",children:t("button",{type:"button",className:"btn btn-danger",children:"Popover on right"})}),t(n,{trigger:"click",content:"Popover on bottom",placement:"bottom",children:t("button",{type:"button",className:"btn btn-warning",children:"Popover on bottom"})})]})}),r.includes("code2")&&t(c,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Popover on top
    </button>
</Tippy>

<Tippy trigger="click" content="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Popover on left
    </button>
</Tippy>

<Tippy trigger="click" content="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Popover on right
    </button>
</Tippy>

<Tippy trigger="click" content="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Popover on bottom
    </button>
</Tippy>`})})]}),e("div",{className:"panel lg:row-start-1 lg:col-start-2",id:"dismissible",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dismissible popover"}),t("button",{onClick:()=>{i("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(o,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex justify-center gap-4 w-full",children:t(n,{trigger:"click",content:"Popover on left",placement:"left",children:t("button",{type:"button","data-dismissable":"true",className:"btn btn-dark",children:"Popover on left"})})})}),r.includes("code3")&&t(c,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Popover on left" placement="left">
    <button type="button" data-dismissable="true" className="btn btn-dark">
        Popover on left
    </button>
</Tippy>`})})]}),e("div",{className:"panel",id:"options",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Options"}),t("button",{className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>{i("code4")},children:e("span",{className:"flex items-center",children:[t(o,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t(n,{trigger:"mouseenter focus",content:"On Hover",children:t("button",{type:"button","data-trigger":"mouseenter",className:"btn btn-primary",children:"On Hover"})}),t(n,{trigger:"focusin",content:"On Focus",children:t("button",{type:"button","data-trigger":"focus",className:"btn btn-secondary",children:"On Focus"})}),t(n,{trigger:"click",content:"Delay 1s",delay:1e3,children:t("button",{type:"button","data-delay":"1000",className:"btn btn-info",children:"Delay"})}),t(n,{trigger:"click",content:"Disabled Animation",children:t("button",{type:"button","data-animation":"false",className:"btn btn-dark",children:"Disabled Animation"})})]})}),r.includes("code4")&&t(c,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="mouseenter focus" content="On Hover">
    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
        On Hover
    </button>
</Tippy>

<Tippy trigger="focusin" content="On Focus">
    <button type="button" data-trigger="focus" className="btn btn-secondary">
        On Focus
    </button>
</Tippy>

<Tippy trigger="click" content="Delay 1s" delay={1000}>
    <button type="button" data-delay="1000" className="btn btn-info">
        Delay
    </button>
</Tippy>

<Tippy trigger="click" content="Disabled Animation">
    <button type="button" data-animation="false" className="btn btn-dark">
        Disabled Animation
    </button>
</Tippy>`})})]}),e("div",{className:"panel lg:col-span-2",id:"colors",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Colors"}),t("button",{className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>{i("code5")},children:e("span",{className:"flex items-center",children:[t(o,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t(n,{trigger:"click",content:"Primary",theme:"primary",children:t("button",{type:"button",className:"btn btn-primary",children:"Primary"})}),t(n,{trigger:"click",content:"Success",theme:"success",children:t("button",{type:"button",className:"btn btn-success",children:"Success"})}),t(n,{trigger:"click",content:"info",theme:"info",children:t("button",{type:"button",className:"btn btn-info",children:"Info"})}),t(n,{trigger:"click",content:"danger",theme:"danger",children:t("button",{type:"button",className:"btn btn-danger",children:"Danger"})}),t(n,{trigger:"click",content:"warning",theme:"warning",children:t("button",{type:"button",className:"btn btn-warning",children:"Warning"})}),t(n,{trigger:"click",content:"secondary",theme:"secondary",children:t("button",{type:"button",className:"btn btn-secondary",children:"Secondary"})}),t(n,{trigger:"click",content:"dark",theme:"dark",children:t("button",{type:"button",className:"btn btn-dark",children:"Dark"})})]})}),r.includes("code5")&&t(c,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Primary" theme="primary">
    <button type="button" className="btn btn-primary">
        Primary
    </button>
</Tippy>

<Tippy trigger="click" content="Success" theme="success">
    <button type="button" className="btn btn-success">
        Success
    </button>
</Tippy>

<Tippy trigger="click" content="info" theme="info">
    <button type="button" className="btn btn-info">
        Info
    </button>
</Tippy>

<Tippy trigger="click" content="danger" theme="danger">
    <button type="button" className="btn btn-danger">
        Danger
    </button>
</Tippy>

<Tippy trigger="click" content="warning" theme="warning">
    <button type="button" className="btn btn-warning">
        Warning
    </button>
</Tippy>

<Tippy trigger="click" content="secondary" theme="secondary">
    <button type="button" className="btn btn-secondary">
        Secondary
    </button>
</Tippy>

<Tippy trigger="click" content="dark" theme="dark">
    <button type="button" className="btn btn-dark">
        Dark
    </button>
</Tippy>`})})]})]})]})]})};export{x as default};
