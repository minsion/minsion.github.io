import{u,r as o,s as m,j as e,b as t,L as h,l as y,E as N}from"./index-8cd85ed0.js";import{C as a}from"./Highlight-f2825850.js";import{I as l}from"./IconCode-4ce6e9fe.js";import{I as p}from"./IconPencil-907d5dbd.js";import{I as f}from"./IconDownload-daa2aad6.js";const C=()=>{const i=u();o.useEffect(()=>{i(m("Buttons"))});const[n,c]=o.useState([]),s=r=>{n.includes(r)?c(b=>b.filter(d=>d!==r)):c([...n,r])};return e("div",{children:[e("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t("li",{children:t(h,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),t("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t("span",{children:"Buttons"})})]}),e("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e("div",{className:"panel",id:"default",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default"}),t("button",{onClick:()=>{s("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(l,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex w-full",children:[t("div",{className:"flex items-center justify-center w-1/2",children:t("button",{type:"button",className:"btn btn-primary",children:"Primary"})}),t("div",{className:"flex items-center justify-center w-1/2",children:t("button",{type:"button",className:"btn btn-outline-primary",children:"Primary"})})]})}),n.includes("code1")&&t(a,{children:t("pre",{children:`{/*Default*/}

<button type="button" className="btn btn-primary">Primary</button>

<button type="button" className="btn btn-outline-primary">Primary</button>
`})})]}),e("div",{className:"panel",id:"rounded",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Rounded"}),t("button",{onClick:()=>{s("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(l,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex w-full",children:[t("div",{className:"flex items-center justify-center w-1/2",children:t("button",{type:"button",className:"btn btn-primary rounded-full",children:"Primary"})}),t("div",{className:"flex items-center justify-center w-1/2",children:t("button",{type:"button",className:"btn btn-outline-primary rounded-full",children:"Primary"})})]})}),n.includes("code2")&&t(a,{children:t("pre",{children:`{/*Rounded*/}

<button type="button" className="btn btn-primary rounded-full">Primary</button>

<button type="button" className="btn btn-outline-primary rounded-full">Primary</button>`})})]}),e("div",{className:"panel",id:"solid",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Solid"}),t("button",{onClick:()=>{s("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(l,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[t("button",{type:"button",className:"btn btn-primary",children:"Primary"}),t("button",{type:"button",className:"btn btn-info",children:"Info"}),t("button",{type:"button",className:"btn btn-success",children:"Success"}),t("button",{type:"button",className:"btn btn-warning",children:"Warning"}),t("button",{type:"button",className:"btn btn-danger",children:"Danger"}),t("button",{type:"button",className:"btn btn-secondary",children:"Secondary"}),t("button",{type:"button",className:"btn btn-dark",children:"Dark"})]})}),n.includes("code3")&&t(a,{children:t("pre",{children:`{/*Solid*/}

<button type="button" className="btn btn-primary">Primary</button>

<button type="button" className="btn btn-info">Info</button>

<button type="button" className="btn btn-success">Success</button>

<button type="button" className="btn btn-warning">Warning</button>

<button type="button" className="btn btn-danger">Danger</button>

<button type="button" className="btn btn-secondary">Secondary</button>

<button type="button" className="btn btn-dark">Dark</button>`})})]}),e("div",{className:"panel",id:"outline",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Outline"}),t("button",{onClick:()=>{s("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(l,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[t("button",{type:"button",className:"btn btn-outline-primary",children:"Primary"}),t("button",{type:"button",className:"btn btn-outline-info",children:"Info"}),t("button",{type:"button",className:"btn btn-outline-success",children:"Success"}),t("button",{type:"button",className:"btn btn-outline-warning",children:"Warning"}),t("button",{type:"button",className:"btn btn-outline-danger",children:"Danger"}),t("button",{type:"button",className:"btn btn-outline-secondary",children:"Secondary"}),t("button",{type:"button",className:"btn btn-outline-dark",children:"Dark"})]})}),n.includes("code4")&&t(a,{children:t("pre",{children:`{/*Outline*/}

<button type="button" className="btn btn-outline-primary">Primary</button>

<button type="button" className="btn btn-outline-info">Info</button>

<button type="button" className="btn btn-outline-success">Success</button>

<button type="button" className="btn btn-outline-warning">Warning</button>

<button type="button" className="btn btn-outline-danger">Danger</button>

<button type="button" className="btn btn-outline-secondary">Secondary</button>

<button type="button" className="btn btn-outline-dark">Dark</button>`})})]}),e("div",{className:"panel",id:"sizes",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Button Sizes"}),t("button",{onClick:()=>{s("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(l,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[t("button",{type:"button",className:"btn btn-primary btn-lg",children:"Primary"}),t("button",{type:"button",className:"btn btn-info",children:"Info"}),t("button",{type:"button",className:"btn btn-success btn-sm",children:"Success"}),t("button",{type:"button",className:"btn btn-warning btn-sm",children:"Warning"})]})}),n.includes("code5")&&t(a,{children:t("pre",{children:`{/*Button Sizes*/}

<button type="button" className="btn btn-primary btn-lg">Primary</button>

<button type="button" className="btn btn-info">Info</button>

<button type="button" className="btn btn-success btn-sm">Success</button>

<button type="button" className="btn btn-warning btn-sm">Warning</button>`})})]}),e("div",{className:"panel",id:"icons",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Button with Icons"}),t("button",{onClick:()=>{s("code6")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(l,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[e("button",{type:"button",className:"btn btn-primary",children:[t(y,{className:"w-5 h-5 ltr:mr-1.5 rtl:ml-1.5 shrink-0"}),"Left"]}),e("button",{type:"button",className:"btn btn-warning rounded-full",children:["Right",t(p,{className:"w-5 h-5 ltr:ml-1.5 rtl:mr-1.5 shrink-0"})]}),t("button",{type:"button",className:"btn btn-danger",children:t(f,{})}),t("button",{type:"button",className:"btn btn-dark w-10 h-10 p-0 rounded-full",children:t(N,{})})]})}),n.includes("code6")&&t(a,{children:t("pre",{children:`{/*Button with Icons*/}

<button type="button" className="btn btn-primary"><svg> ... </svg>Left</button>

<button type="button" className="btn btn-warning rounded-full">Right<svg> ... </svg></button>

<button type="button" className="btn btn-danger"><svg> ... </svg></button>

<button type="button" className="btn btn-dark w-10 h-10 p-0 rounded-full"><svg> ... </svg></button>`})})]}),e("div",{className:"panel",id:"block",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Block Buttons"}),t("button",{onClick:()=>{s("code7")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(l,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-col gap-4",children:[t("button",{type:"button",className:"btn btn-primary w-full",children:"Button"}),t("button",{type:"button",className:"btn btn-info w-full",children:"Button"}),t("button",{type:"button",className:"btn btn-success w-full",children:"Button"})]})}),n.includes("code7")&&t(a,{children:t("pre",{children:`{/*Block Buttons*/}

<button type="button" className="btn btn-primary w-full"> Button</button>

<button type="button" className="btn btn-info w-full">Button</button>

<button type="button" className="btn btn-success w-full">Button</button>`})})]})]})]})};export{C as default};
