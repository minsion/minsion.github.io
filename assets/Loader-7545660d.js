import{u,r as m,s as p,j as a,b as e,L as f}from"./index-db6af04d.js";import{C as r}from"./Highlight-7cc82095.js";import{I as s}from"./IconCode-9488e58f.js";import{I as d}from"./IconLoader-a9a1be5a.js";const x=()=>{const o=u();m.useEffect(()=>{o(p("Loader"))});const[n,t]=m.useState([]),l=i=>{n.includes(i)?t(c=>c.filter(b=>b!==i)):t([...n,i])};return a("div",{children:[a("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(f,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Loader"})})]}),a("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[a("div",{className:"panel",id:"with_buttons",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Loaders with Buttons"}),e("button",{onClick:()=>{l("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"flex flex-wrap items-center justify-center w-full gap-4",children:[a("button",{type:"button",className:"btn btn-info btn-lg shrink-0",children:[e(d,{className:"animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0"}),"Loading"]}),a("button",{type:"button",className:"btn btn-danger btn-lg",children:[e("span",{className:"animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle shrink-0"}),"Loading"]}),a("button",{type:"button",className:"btn btn-secondary btn-lg",children:[e("span",{className:"animate-ping w-3 h-3 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white shrink-0"}),"Loading"]})]})}),n.includes("code1")&&e(r,{children:e("pre",{className:"language-xml",children:`<button type="button" className="btn btn-info btn-lg">
    <svg>...</svg>
    Loading
</button>

<button type="button" className="btn btn-danger btn-lg">
    <span className="animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle"></span>
    Loading
</button>

<button type="button" className="btn btn-secondary btn-lg">
    <span className="animate-ping w-3 h-3 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white"></span>
    Loading
</button>`})})]}),a("div",{className:"panel",id:"positions",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Position"}),e("button",{onClick:()=>{l("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"flex flex-wrap w-full",children:[a("div",{className:"flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center mb-3 sm:mb-0",children:[e("p",{className:"w-full mb-2",children:"Default Button"}),a("button",{type:"button",className:"btn btn-primary btn-lg",children:[e(d,{className:"animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0"}),"Loading"]})]}),a("div",{className:"flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center",children:[e("p",{className:"w-full mb-2",children:"Outline Button"}),a("button",{type:"button",className:"btn btn-outline-primary btn-lg",children:["Loading",e(d,{className:"animate-[spin_2s_linear_infinite] inline-block align-middle ltr:ml-2 rtl:mr-2 shrink-0"})]})]})]})}),n.includes("code2")&&e(r,{children:e("pre",{className:"language-xml",children:`<div className="flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center mb-3 sm:mb-0">
    <p className="w-full mb-2">Default Button</p>
    <button type="button" className="btn btn-primary btn-lg">
        <svg>...</svg>
        Loading
    </button>
</div>
<div className="flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center">
    <p className="w-full mb-2">Outline Button</p>
    <button type="button" className="btn btn-outline-primary btn-lg">
        Loading
        <svg>...</svg>
    </button>
</div>`})})]}),a("div",{className:"panel",id:"sizes",children:[a("div",{className:"flex items-center justify-between mb-10",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Sizes"}),e("button",{onClick:()=>{l("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"grid grid-cols-3 w-full gap-4",children:[e("span",{className:"animate-spin border-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-[3px] border-success border-l-transparent rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-4 border-transparent border-l-primary rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-[3px] border-transparent border-l-primary rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"}),e("span",{className:"w-5 h-5 m-auto mb-10",children:e("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-info"})}),e("span",{className:"w-4 h-4 m-auto mb-10",children:e("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-info"})}),e("span",{className:"w-3 h-3 m-auto mb-10",children:e("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-info"})})]})}),n.includes("code3")&&e(r,{children:e("pre",{className:"language-xml",children:`<span className="animate-spin border-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-[3px] border-success border-l-transparent rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-[3px] border-transparent border-l-primary rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span>

<span className="w-5 h-5 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>

<span className="w-3 h-3 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>`})})]}),a("div",{className:"panel",id:"colors",children:[a("div",{className:"flex items-center justify-between mb-10",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Colors"}),e("button",{onClick:()=>{l("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"grid grid-cols-4 w-full gap-4",children:[e("span",{className:"animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-4 border-danger border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-4 border-warning border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-4 border-primary border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"}),e("span",{className:"animate-spin border-4 border-transparent border-l-danger rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-4 border-transparent border-l-warning rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e("span",{className:"w-4 h-4 m-auto mb-10",children:e("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-info"})}),e("span",{className:"w-4 h-4 m-auto mb-10",children:e("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-danger"})}),e("span",{className:"w-4 h-4 m-auto mb-10",children:e("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-warning"})}),e("span",{className:"w-4 h-4 m-auto mb-10",children:e("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-primary"})})]})}),n.includes("code4")&&e(r,{children:e("pre",{className:"language-xml",children:`<span className="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-danger border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-warning border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-primary border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>

<span className="animate-spin border-4 border-transparent border-l-danger rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-warning rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-danger"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-warning"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-primary"></span>
</span>`})})]}),a("div",{className:"panel",id:"custom",children:[a("div",{className:"flex items-center justify-between mb-10",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom"}),e("button",{onClick:()=>{l("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"grid grid-cols-3 w-full gap-4",children:[e("span",{className:"animate-spin border-8 border-[#f1f2f3] border-l-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-[spin_2s_linear_infinite] border-8 border-[#f1f2f3] border-l-primary border-r-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"}),e("span",{className:"animate-[spin_3s_linear_infinite] border-8 border-r-warning border-l-primary border-t-danger border-b-success rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"})]})}),n.includes("code5")&&e(r,{children:e("pre",{className:"language-xml",children:`<span className="animate-spin border-8 border-[#f1f2f3] border-l-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>

<span className="animate-[spin_2s_linear_infinite] border-8 border-[#f1f2f3] border-l-primary border-r-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>

<span className="animate-[spin_3s_linear_infinite] border-8 border-r-warning border-l-primary border-t-danger border-b-success rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>`})})]})]})]})};export{x as default};
