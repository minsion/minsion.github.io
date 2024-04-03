import{u as n,r as c,s as p,j as r,b as e,L as l,e as x}from"./index-08323c31.js";import{C as t}from"./Highlight-9f01d9da.js";import{I as d}from"./IconCode-e2412410.js";import{I as v}from"./IconMapPin-4f757db5.js";import{I as g}from"./IconDroplet-221561d7.js";const w=()=>{const b=n();c.useEffect(()=>{b(p("List Group"))});const[a,o]=c.useState([]),s=i=>{a.includes(i)?o(h=>h.filter(m=>m!==i)):o([...a,i])};return r("div",{children:[r("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(l,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"List Group"})})]}),r("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code1"),children:r("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("div",{className:"flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]",children:[e("div",{className:"border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5",children:"Cras justo odio"}),e("div",{className:"border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5",children:"Dapibus ac facilisis in"}),e("div",{className:"border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)]",children:"Morbi leo risus"}),e("div",{className:"border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5",children:"Porta ac consectetur ac"}),e("div",{className:"px-4 py-2.5",children:"Vestibulum at eros"})]})}),a.includes("code1")&&e(t,{children:e("pre",{className:"language-xml",children:`<div className="mb-5">
    <div className="flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]">
        <div className="border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5">Cras justo odio</div>
        <div className="border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5">Dapibus ac facilisis in</div>
        <div className="border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)]">Morbi leo risus</div>
        <div className="border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5">Porta ac consectetur ac</div>
        <div className="px-4 py-2.5">Vestibulum at eros</div>
    </div>
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Links"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code2"),children:r("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("div",{className:"flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]",children:[e(l,{to:"#",className:"border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:"Cras justo odio"}),e(l,{to:"#",className:"border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:"Dapibus ac facilisis in"}),e(l,{to:"#",className:"border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)] hover:bg-[#eee] dark:hover:bg-[#eee]/10 hover:text-black dark:hover:text-white",children:"Morbi leo risus"}),e(l,{to:"#",className:"border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:"Porta ac consectetur ac"}),e(l,{to:"#",className:"px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:"Vestibulum at eros"})]})}),a.includes("code2")&&e(t,{children:e("pre",{className:"language-typescript",children:`import { Link } from 'react-router-dom';

<div className="mb-5">
    <div className="flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]">
        <Link to="#" className="border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            Cras justo odio
        </Link>
        <Link to="#" className="border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            Dapibus ac facilisis in
        </Link>
        <Link to="#"
            className="border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)] hover:bg-[#eee] dark:hover:bg-[#eee]/10 hover:text-black dark:hover:text-white"
        >
            Morbi leo risus
        </Link>
        <Link to="#" className="border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            Porta ac consectetur ac
        </Link>
        <Link to="#" className="px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            Vestibulum at eros
        </Link>
    </div>
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Icons"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code3"),children:r("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("div",{className:"flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]",children:[r("div",{className:"flex border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:[e("div",{className:"ltr:mr-2 rtl:ml-2.5 mt-0.5 text-primary",children:e(x,{className:"w-5 h-5"})}),r("div",{className:"flex-1 font-semibold",children:[e("h6",{className:"mb-1 text-base",children:"Messages"}),e("p",{className:"text-xs",children:"4 New Messages"})]})]}),r("div",{className:"flex border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)] hover:bg-[#eee] dark:hover:bg-[#eee]/10 hover:text-black dark:hover:text-white group",children:[e("div",{className:"ltr:mr-2 rtl:ml-2.5 mt-0.5 text-white group-hover:text-primary",children:e(v,{})}),r("div",{className:"flex-1 font-semibold",children:[e("h6",{className:"mb-1 text-base",children:"Locations"}),e("p",{className:"text-xs",children:"25 New Travel Locations"})]})]}),r("div",{className:"flex px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:[e("div",{className:"ltr:mr-2 rtl:ml-2.5 mt-0.5 text-primary",children:e(g,{})}),r("div",{className:"flex-1 font-semibold",children:[e("h6",{className:"mb-1 text-base",children:"Flexible"}),e("p",{className:"text-xs",children:"Customization Flexibility"})]})]})]})}),a.includes("code3")&&e(t,{children:e("pre",{className:"language-xml",children:`<div className="mb-5">
    <div className="flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]">
        <div className="flex border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            <div className="ltr:mr-2 rtl:ml-2.5 mt-0.5 text-primary">
                <svg>...</svg>
            </div>
            <div className="flex-1 font-semibold">
                <h6 className="mb-1 text-base">Messages</h6>
                <p className="text-xs">4 New Messages</p>
            </div>
        </div>
        <div className="flex border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)] hover:bg-[#eee] dark:hover:bg-[#eee]/10 hover:text-black dark:hover:text-white group">
            <div className="ltr:mr-2 rtl:ml-2.5 mt-0.5 text-white group-hover:text-primary">
                <svg>...</svg>
            </div>
            <div className="flex-1 font-semibold">
                <h6 className="mb-1 text-base">Locations</h6>
                <p className="text-xs">25 New Travel Locations</p>
            </div>
        </div>
        <div className="flex px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            <div className="ltr:mr-2 rtl:ml-2.5 mt-0.5 text-primary">
                <svg>...</svg>
            </div>
            <div className="flex-1 font-semibold">
                <h6 className="mb-1 text-base">Flexible</h6>
                <p className="text-xs">Customization Flexibility</p>
            </div>
        </div>
    </div>
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Images"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code4"),children:r("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("div",{className:"flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]",children:[r("div",{className:"flex border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:[e("div",{className:"ltr:mr-3 rtl:ml-3",children:e("img",{src:"/assets/images/profile-1.jpeg",alt:"img",className:"rounded-full w-12 h-12 object-cover"})}),r("div",{className:"flex-1 font-semibold",children:[e("h6",{className:"mb-1 text-base",children:"Luke Ivory"}),e("p",{className:"text-xs",children:"Project Lead"})]})]}),r("div",{className:"flex border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)] hover:bg-[#eee] dark:hover:bg-[#eee]/10 hover:text-black dark:hover:text-white group",children:[e("div",{className:"ltr:mr-3 rtl:ml-3",children:e("img",{src:"/assets/images/profile-2.jpeg",alt:"img",className:"rounded-full w-12 h-12 object-cover"})}),r("div",{className:"flex-1 font-semibold",children:[e("h6",{className:"mb-1 text-base",children:"Sonia Shaw"}),e("p",{className:"text-xs",children:"Web Designer"})]})]}),r("div",{className:"flex px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:[e("div",{className:"ltr:mr-3 rtl:ml-3",children:e("img",{src:"/assets/images/profile-3.jpeg",alt:"img",className:"rounded-full w-12 h-12 object-cover"})}),r("div",{className:"flex-1 font-semibold",children:[e("h6",{className:"mb-1 text-base",children:"Dale Butler"}),e("p",{className:"text-xs",children:"Developer"})]})]})]})}),a.includes("code4")&&e(t,{children:e("pre",{className:"language-xml",children:`<div className="mb-5">
    <div className="flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]">
        <div className="flex border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            <div className="ltr:mr-3 rtl:ml-3">
                <img src="/assets/images/profile-1.jpeg" alt="img" className="rounded-full w-12 h-12 object-cover" />
            </div>
            <div className="flex-1 font-semibold">
                <h6 className="mb-1 text-base">Luke Ivory</h6>
                <p className="text-xs">Project Lead</p>
            </div>
        </div>
        <div className="flex border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)] hover:bg-[#eee] dark:hover:bg-[#eee]/10 hover:text-black dark:hover:text-white group">
            <div className="ltr:mr-3 rtl:ml-3">
                <img src="/assets/images/profile-2.jpeg" alt="img" className="rounded-full w-12 h-12 object-cover" />
            </div>
            <div className="flex-1 font-semibold">
                <h6 className="mb-1 text-base">Sonia Shaw</h6>
                <p className="text-xs">Web Designer</p>
            </div>
        </div>
        <div className="flex px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            <div className="ltr:mr-3 rtl:ml-3">
                <img src="/assets/images/profile-3.jpeg" alt="img" className="rounded-full w-12 h-12 object-cover" />
            </div>
            <div className="flex-1 font-semibold">
                <h6 className="mb-1 text-base">Dale Butler</h6>
                <p className="text-xs">Developer</p>
            </div>
        </div>
    </div>
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Task"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code5"),children:r("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("div",{className:"flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]",children:[r("div",{className:"flex space-x-4 rtl:space-x-reverse border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:[e("input",{id:"tack_checkbox1",type:"checkbox",className:"form-checkbox"}),r("label",{htmlFor:"tack_checkbox1",className:"mb-0 cursor-pointer",children:["List groups are a flexible and powerful component for displaying simple.",e("span",{className:"badge bg-secondary my-auto ltr:ml-3 rtl:mr-3 hover:top-0",children:"Project"})]})]}),r("div",{className:"flex space-x-4 rtl:space-x-reverse border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)] hover:bg-[#eee] dark:hover:bg-[#eee]/10 hover:text-black dark:hover:text-white group",children:[e("input",{id:"tack_checkbox2",type:"checkbox",className:"form-checkbox dark:checked:border-[#253B5C] checked:border-white-light"}),r("label",{htmlFor:"tack_checkbox2",className:"mb-0 cursor-pointer",children:["List groups are a flexible and powerful component for displaying simple.",e("span",{className:"badge bg-info my-auto ltr:ml-3 rtl:mr-3 hover:top-0",children:"Urgent"})]})]}),r("div",{className:"flex space-x-4 rtl:space-x-reverse px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10",children:[e("input",{id:"tack_checkbox3",type:"checkbox",className:"form-checkbox"}),r("label",{htmlFor:"tack_checkbox3",className:"mb-0 cursor-pointer",children:["List groups are a flexible and powerful component for displaying simple.",e("span",{className:"badge bg-success my-auto ltr:ml-3 rtl:mr-3 hover:top-0",children:"Success"})]})]})]})}),a.includes("code5")&&e(t,{children:e("pre",{className:"language-xml",children:`<div className="mb-5">
    <div className="flex flex-col rounded-md border border-white-light dark:border-[#1b2e4b]">
        <div className="flex space-x-4 rtl:space-x-reverse border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            <input id="tack_checkbox1" type="checkbox" className="form-checkbox" />
            <label htmlFor="tack_checkbox1" className="mb-0 cursor-pointer">
                List groups are a flexible and powerful component for displaying simple.
                <span className="badge bg-secondary my-auto ltr:ml-3 rtl:mr-3 hover:top-0">Project</span>
            </label>
        </div>
        <div className="flex space-x-4 rtl:space-x-reverse border-b border-white-light dark:border-[#1b2e4b] px-4 py-2.5 bg-primary text-white shadow-[0_1px_15px_1px_rgba(67,97,238,0.15)] hover:bg-[#eee] dark:hover:bg-[#eee]/10 hover:text-black dark:hover:text-white group">
            <input id="tack_checkbox2" type="checkbox" className="form-checkbox dark:checked:border-[#253B5C] checked:border-white-light" />
            <label htmlFor="tack_checkbox2" className="mb-0 cursor-pointer">
                List groups are a flexible and powerful component for displaying simple.
                <span className="badge bg-info my-auto ltr:ml-3 rtl:mr-3 hover:top-0">Urgent</span>
            </label>
        </div>
        <div className="flex space-x-4 rtl:space-x-reverse px-4 py-2.5 hover:bg-[#eee] dark:hover:bg-[#eee]/10">
            <input id="tack_checkbox3" type="checkbox" className="form-checkbox" />
            <label htmlFor="tack_checkbox3" className="mb-0 cursor-pointer">
                List groups are a flexible and powerful component for displaying simple.
                <span className="badge bg-success my-auto ltr:ml-3 rtl:mr-3 hover:top-0">Success</span>
            </label>
        </div>
    </div>
</div>`})})]})]})]})};export{w as default};
