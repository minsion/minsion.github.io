import{u as f,r as i,s as N,a as x,j as t,b as e,L as v,D as c,F as u,d as b}from"./index-8cd85ed0.js";import{C as o}from"./Highlight-f2825850.js";import{I as a}from"./IconCode-4ce6e9fe.js";const w=()=>{const m=f();i.useEffect(()=>{m(N("Buttongroups"))});const r=x(l=>l.themeConfig.rtlClass)==="rtl",[n,s]=i.useState([]),d=l=>{n.includes(l)?s(p=>p.filter(h=>h!==l)):s([...n,l])};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(v,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Button Group"})})]}),t("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel",id:"horizontal",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Horizontal"}),e("button",{onClick:()=>{d("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(a,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5 text-center",children:t("div",{className:"relative inline-flex align-middle",children:[e("button",{type:"button",className:"btn btn-dark ltr:rounded-r-none rtl:rounded-l-none",children:"Left"}),e("button",{type:"button",className:"btn btn-dark rounded-none",children:"Middle"}),e("button",{type:"button",className:"btn btn-dark ltr:rounded-l-none rtl:rounded-r-none",children:"Right"})]})}),n.includes("code1")&&e(o,{children:e("pre",{children:`<div className="relative inline-flex align-middle">
    <button type="button" className="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">
        Left
    </button>
    <button type="button" className="btn btn-dark rounded-none">
        Middle
    </button>
    <button type="button" className="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">
        Right
    </button>
</div>`})})]}),t("div",{className:"panel",id:"input_group",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Group"}),e("button",{onClick:()=>{d("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(a,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"flex flex-wrap justify-center sm:justify-between items-center gap-2 w-full",children:[t("div",{className:"relative inline-flex align-middle",children:[e("button",{type:"button",className:"btn btn-dark ltr:rounded-r-none rtl:rounded-l-none",children:"1"}),e("button",{type:"button",className:"btn btn-dark rounded-none",children:"2"}),e("button",{type:"button",className:"btn btn-dark rounded-none",children:"3"}),e("button",{type:"button",className:"btn btn-dark ltr:rounded-l-none rtl:rounded-r-none",children:"4"})]}),t("div",{className:"flex relative items-stretch flex-wrap",children:[e("div",{className:"ltr:-mr-px rtl:-ml-px flex",children:e("span",{className:"border border-white-light dark:border-[#17263c] ltr:rounded-l rtl:rounded-r bg-[#f1f2f3] flex items-center justify-center text-black px-4 py-1.5 dark:bg-[#1a1c2d] dark:text-white-dark",children:"@"})}),e("input",{type:"text",placeholder:"Input group example",className:"flex-1 form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]})}),n.includes("code2")&&e(o,{children:e("pre",{children:`<div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 w-full">
    <div className="relative inline-flex align-middle">
        <button type="button" className="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">
            1
        </button>
        <button type="button" className="btn btn-dark rounded-none">
            2
        </button>
        <button type="button" className="btn btn-dark rounded-none">
            3
        </button>
        <button type="button" className="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">
            4
        </button>
    </div>
    <div className="flex relative items-stretch flex-wrap">
        <div className="ltr:-mr-px rtl:-ml-px flex">
            <span className="border border-white-light dark:border-[#17263c] ltr:rounded-l rtl:rounded-r bg-[#f1f2f3] flex items-center justify-center text-black px-4 py-1.5 dark:bg-[#1a1c2d] dark:text-white-dark">
                @
            </span>
        </div>
        <input type="text" placeholder="Input group example" className="flex-1 form-input ltr:rounded-l-none rtl:rounded-r-none" />
    </div>
</div>;
`})})]}),t("div",{className:"panel",id:"vertical",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical"}),e("button",{onClick:()=>{d("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(a,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5 text-center",children:t("div",{className:"relative inline-flex align-middle flex-col items-start justify-center",children:[e("button",{type:"button",className:"btn btn-dark rounded-b-none w-full",children:"Button"}),e("div",{className:"relative",children:e("div",{className:"dropdown",children:e(c,{offset:[0,5],placement:`${r?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-dark rounded-none",button:t(u,{children:["Dropdown",e("span",{className:"shrink-0",children:e(b,{className:"ltr:ml-2 rtl:mr-2 inline-block shrink-0"})})]}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"Dropdown link"})}),e("li",{children:e("button",{type:"button",children:"Dropdown link"})})]})})})}),e("button",{type:"button",className:"btn btn-dark rounded-none w-full",children:"Button"}),e("button",{type:"button",className:"btn btn-dark rounded-none w-full",children:"Button"}),e("div",{className:"relative",children:e("div",{className:"dropdown",children:e(c,{offset:[0,5],placement:`${r?"top-start":"top-end"}`,btnClassName:"btn dropdown-toggle btn-dark rounded-t-none",button:t(u,{children:["Dropdown",e("span",{className:"shrink-0",children:e(b,{className:"ltr:ml-2 rtl:mr-2 inline-block shrink-0"})})]}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"Dropdown link"})}),e("li",{children:e("button",{type:"button",children:"Dropdown link"})})]})})})})]})}),n.includes("code3")&&e(o,{children:e("pre",{children:`import Dropdown from '../../components/Dropdown';

<div className="relative inline-flex align-middle flex-col items-start justify-center">
    <button type="button" className="btn btn-dark rounded-b-none w-full">
        Button
    </button>
    <div className="relative">
        <div className="dropdown">
            <Dropdown
                offset={[0, 5]}
                placement={\`${r?"bottom-start":"bottom-end"}\`}
                btnClassName="btn dropdown-toggle btn-dark rounded-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
    <button type="button" className="btn btn-dark rounded-none w-full">
        Button
    </button>
    <button type="button" className="btn btn-dark rounded-none w-full">
        Button
    </button>
    <div className="relative">
        <div className="dropdown">
            <Dropdown
                offset={[0, 5]}
                placement={\`${r?"top-start":"top-end"}\`}
                btnClassName="btn dropdown-toggle btn-dark rounded-t-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
</div>`})})]})]})]})};export{w as default};
