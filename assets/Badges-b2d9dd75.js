import{u as o,r as c,s as p,j as a,b as e,L as b,l as h}from"./index-21dbdbc4.js";import{C as l}from"./Highlight-44bb2925.js";import{I as r}from"./IconCode-7061e36d.js";import{I as N}from"./IconFacebook-0e3a9895.js";const v=()=>{const d=o();c.useEffect(()=>{d(p("Badges"))});const[s,i]=c.useState([]),n=t=>{s.includes(t)?i(m=>m.filter(g=>g!==t)):i([...s,t])};return a("div",{children:[a("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(b,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Badges"})})]}),a("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[a("div",{className:"panel",id:"basic",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e("button",{onClick:()=>{n("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e("span",{className:"badge bg-primary",children:"Primary"}),e("span",{className:"badge bg-secondary",children:"Secondary"}),e("span",{className:"badge bg-success",children:"Success"}),e("span",{className:"badge bg-danger",children:"Danger"}),e("span",{className:"badge bg-warning",children:"Warning"}),e("span",{className:"badge bg-info",children:"Info"}),e("span",{className:"badge bg-dark",children:"Dark"})]})}),s.includes("code1")&&e(l,{children:e("pre",{children:`<span className="badge bg-primary">Primary</span>

<span className="badge bg-secondary">Secondary</span>

<span className="badge bg-success">Success</span>

<span className="badge bg-danger">Danger</span>

<span className="badge bg-warning">Warning</span>

<span className="badge bg-info">Info</span>

<span className="badge bg-dark">Dark</span>
`})})]}),a("div",{className:"panel",id:"outline",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Outline"}),e("button",{onClick:()=>{n("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e("span",{className:"badge badge-outline-primary",children:"Primary"}),e("span",{className:"badge badge-outline-secondary",children:"Secondary"}),e("span",{className:"badge badge-outline-success",children:"Success"}),e("span",{className:"badge badge-outline-danger",children:"Danger"}),e("span",{className:"badge badge-outline-warning",children:"Warning"}),e("span",{className:"badge badge-outline-info",children:"Info"}),e("span",{className:"badge badge-outline-dark",children:"Dark"})]})}),s.includes("code2")&&e(l,{children:e("pre",{children:`<span className="badge badge-outline-primary">Primary</span>

<span className="badge badge-outline-secondary">Secondary</span>

<span className="badge badge-outline-success">Success</span>

<span className="badge badge-outline-danger">Danger</span>

<span className="badge badge-outline-warning">Warning</span>

<span className="badge badge-outline-info">Info</span>

<span className="badge badge-outline-dark">Dark</span>`})})]}),a("div",{className:"panel",id:"pills",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Pills"}),e("button",{onClick:()=>{n("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"flex w-full",children:[e("div",{className:"flex items-center justify-center w-1/2",children:e("span",{className:"badge bg-primary rounded-full",children:"Primary"})}),e("div",{className:"flex items-center justify-center w-1/2",children:e("span",{className:"badge badge-outline-primary rounded-full",children:"Primary"})})]})}),s.includes("code3")&&e(l,{children:e("pre",{children:`<div className="flex items-center justify-center w-1/2">
    <span className="badge bg-primary rounded-full">Primary</span>
</div>

<div className="flex items-center justify-center w-1/2">
    <span className="badge badge-outline-primary rounded-full">Primary</span>
</div>`})})]}),a("div",{className:"panel",id:"classic",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Classic"}),e("button",{onClick:()=>{n("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"flex w-full",children:[e("div",{className:"flex items-center justify-center w-1/2",children:e("span",{className:"badge bg-primary rounded-none",children:"Primary"})}),e("div",{className:"flex items-center justify-center w-1/2",children:e("span",{className:"badge badge-outline-primary rounded-none",children:"Primary"})})]})}),s.includes("code4")&&e(l,{children:e("pre",{children:`<div className="flex items-center justify-center w-1/2">
    <span className="badge bg-primary rounded-none">Primary</span>
</div>

<div className="flex items-center justify-center w-1/2">
    <span className="badge badge-outline-primary rounded-none">Primary</span>
</div>`})})]}),a("div",{className:"panel",id:"with_headings",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Badges with Heading"}),e("button",{onClick:()=>{n("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),a("div",{className:"mb-5 dark:text-white-dark",children:[e("p",{className:"mb-5",children:"Badges scale to match the size of the immediate parent element by using relative font sizing and em units."}),a("div",{className:"space-y-2 prose dark:prose-headings:text-white-dark",children:[a("h1",{children:["Example heading ",e("span",{className:"badge bg-primary",children:"Primary"})]}),a("h2",{children:["Example heading ",e("span",{className:"badge bg-success",children:"Success"})]}),a("h3",{children:["Example heading ",e("span",{className:"badge bg-info",children:"Info"})]}),a("h4",{children:["Example heading ",e("span",{className:"badge bg-warning",children:"Warning"})]}),a("h5",{children:["Example heading ",e("span",{className:"badge bg-danger",children:"Danger"})]}),a("h6",{children:["Example heading ",e("span",{className:"badge bg-dark",children:"Dark"})]})]})]}),s.includes("code5")&&e(l,{children:e("pre",{children:`<div className="space-y-2 prose dark:prose-headings:text-white-dark">
    <h1>
        Example heading <span className="badge bg-primary">Primary</span>
    </h1>
    <h2>
        Example heading <span className="badge bg-success">Success</span>
    </h2>
    <h3>
        Example heading <span className="badge bg-info">Info</span>
    </h3>
    <h4>
        Example heading <span className="badge bg-warning">Warning</span>
    </h4>
    <h5>
        Example heading <span className="badge bg-danger">Danger</span>
    </h5>
    <h6>
        Example heading <span className="badge bg-dark">Dark</span>
    </h6>
</div>`})})]}),a("div",{className:"panel",id:"custom",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom Badges"}),e("button",{onClick:()=>{n("code6")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[a("button",{type:"button",className:"btn btn-primary my-4",children:[a("span",{className:"flex items-center",children:[e(N,{className:"w-4.5 h-4.5 ltr:mr-1 rtl:ml-1 shrink-0"}),"Facebook"]}),e("span",{className:"badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full",children:"9"})]}),a("button",{type:"button",className:"btn btn-info my-4",children:[e("span",{children:"Twitter"}),e("span",{className:"badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full",children:"4"})]}),a("button",{type:"button",className:"btn btn-secondary px-5 my-4",children:[e("span",{children:e(h,{className:"w-5 h-5"})}),e("span",{className:"badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full",children:"8"})]}),a("button",{type:"button",className:"btn btn-dark my-4",children:["Notifications",e("span",{className:"badge my-0 bg-white-light text-black ltr:ml-4 rtl:mr-4",children:"4"})]}),a("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[a("span",{className:"badge bg-warning p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base",children:[e("img",{src:"/assets/images/profile-34.jpeg",className:"w-10 h-10 rounded-full object-cover",alt:"img"}),e("span",{className:"ltr:ml-2 rtl:mr-2",children:"John Doe"})]}),a("span",{className:"badge bg-danger p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base",children:[e("img",{src:"/assets/images/profile-34.jpeg",className:"w-10 h-10 rounded-full object-cover",alt:"img"}),e("span",{className:"ltr:ml-2 rtl:mr-2",children:"John Doe"}),e("span",{className:"ltr:ml-4 rtl:mr-4 cursor-pointer hover:opacity-90",children:"x"})]})]})]})}),s.includes("code6")&&e(l,{children:e("pre",{children:`<button type="button" className="btn btn-primary my-4">
    <span className="flex items-center">
        <svg>...</svg>
        Facebook
    </span>
    <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">9</span>
</button>

<button type="button" className="btn btn-info my-4">
    <span>Twitter</span>
    <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">4</span>
</button>

<button type="button" className="btn btn-secondary px-5 my-4">
    <span>
        <svg>...</svg>
    </span>
    <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">8</span>
</button>

<button type="button" className="btn btn-dark my-4">
    Notifications
    <span className="badge my-0 bg-white-light text-black ltr:ml-4 rtl:mr-4">4</span>
</button>

<div className="flex flex-wrap items-center justify-center gap-3">
    <span className="badge bg-warning p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base">
        <img src="/assets/images/profile-34.jpeg" className="w-10 h-10 rounded-full object-cover" alt="img" />
        <span className="ltr:ml-2 rtl:mr-2">John Doe</span>
    </span>
    <span className="badge bg-danger p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base">
        <img src="/assets/images/profile-34.jpeg" className="w-10 h-10 rounded-full object-cover" alt="img" />
        <span className="ltr:ml-2 rtl:mr-2">John Doe</span>
        <span className="ltr:ml-4 rtl:mr-4 cursor-pointer hover:opacity-90">x</span>
    </span>
</div>`})})]})]})]})};export{v as default};
