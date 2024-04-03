import{u as y,r as p,s as N,a as w,j as e,b as t,L as f,D as l,F as o,d as r}from"./index-8cd85ed0.js";import{C as a}from"./Highlight-f2825850.js";import{I as v}from"./IconBell-58d1c7ab.js";import{I as s}from"./IconCode-4ce6e9fe.js";import{I as b}from"./IconHorizontalDots-4bb89c3a.js";const D=()=>{const m=y();p.useEffect(()=>{m(N("Dropdowns"))});const n=w(c=>c.themeConfig.rtlClass)==="rtl",[i,u]=p.useState([]),d=c=>{i.includes(c)?u(h=>h.filter(g=>g!==c)):u([...i,c])};return e("div",{children:[e("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t("li",{children:t(f,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),t("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t("span",{children:"Dropdowns"})})]}),e("div",{className:"pt-5 space-y-8",children:[e("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t(v,{})}),t("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t("a",{href:"https://popper.js.org/docs/v2/",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://popper.js.org/docs/v2/"})]}),e("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e("div",{className:"panel",id:"basic",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),t("button",{onClick:()=>{d("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(s,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-primary dropdown-toggle",button:e(o,{children:["Action",t("span",{children:t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})}),t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-outline-primary dropdown-toggle",button:e(o,{children:["Action",t("span",{children:t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})})]})}),i.includes("code1")&&t(a,{children:t("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-primary dropdown-toggle"
        button={
            <>
                Action
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
    <ul className="!min-w-[170px]">
        <li>
            <button type="button">
                Action
            </button>
        </li>
        <li>
            <button type="button">
                Another action
            </button>
        </li>
        <li>
            <button type="button">
                Something else here
            </button>
        </li>
        <li>
            <button type="button">
                Separated link
            </button>
        </li>
    </ul>
    </Dropdown>
</div>
<div className="dropdown">
    <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn btn-outline-primary dropdown-toggle"
            button={
                <>
                    Action
                    <span>
                        <svg>...</svg>
                    </span>
                </>
            }
        >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>
`})})]}),t("div",{className:"space-y-8",children:e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dropup"}),t("button",{onClick:()=>{d("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(s,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"top-start":"top-end"}`,btnClassName:"btn btn-info dropdown-toggle inline-flex",button:e(o,{children:["Up",t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block rotate-180"})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})}),t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"top-start":"top-end"}`,btnClassName:"btn btn-outline-info dropdown-toggle inline-flex",button:e(o,{children:["Up",t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block rotate-180"})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})})]})}),i.includes("code2")&&t(a,{children:t("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-start' : 'top-end'}\`}
        btnClassName="btn btn-info dropdown-toggle inline-flex"
        button={
            <>
                Up
                <svg>...</svg>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-start' : 'top-end'}\`}
        btnClassName="btn btn-outline-info dropdown-toggle inline-flex"
        button={
            <>
                Up
                <svg>...</svg>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]})}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dropright"}),t("button",{onClick:()=>{d("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(s,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"right-end":"right-start"}`,btnClassName:"btn btn-warning dropdown-toggle !flex",button:e(o,{children:["Right",t(r,{className:"ltr:ml-1 rtl:mr-1 rtl:rotate-90 -rotate-90 inline-block"})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})}),t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"right-end":"right-start"}`,btnClassName:"btn btn-outline-warning dropdown-toggle !flex",button:e(o,{children:["Right",t(r,{className:"ltr:ml-1 rtl:mr-1 rtl:rotate-90 -rotate-90 inline-block"})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})})]})}),i.includes("code3")&&t(a,{children:t("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'right-end' : 'right-start'}\`}
        btnClassName="btn btn-warning dropdown-toggle !flex"
        button={
            <>
                Right
                <svg>...</svg>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'right-end' : 'right-start'}\`}
        btnClassName="btn btn-outline-warning dropdown-toggle !flex"
        button={
            <>
                Right
                <svg>...</svg>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dropleft"}),t("button",{onClick:()=>{d("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(s,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"left-end":"left-start"}`,btnClassName:"btn btn-danger dropdown-toggle !flex",button:e(o,{children:[t(r,{className:"ltr:mr-1 rtl:ml-1 rtl:-rotate-90 rotate-90 inline-block"}),"Left"]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})}),t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"left-end":"left-start"}`,btnClassName:"btn btn-outline-danger dropdown-toggle !flex",button:e(o,{children:[t(r,{className:"ltr:mr-1 rtl:ml-1 rtl:-rotate-90 rotate-90 inline-block"}),"Left"]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})})]})}),i.includes("code4")&&t(a,{children:t("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'left-end' : 'left-start'}\`}
        btnClassName="btn btn-danger dropdown-toggle !flex"
        button={
            <>
                <svg>...</svg>
                Left
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'left-end' : 'left-start'}\`}
        btnClassName="btn btn-outline-danger dropdown-toggle !flex"
        button={
            <>
                <svg>...</svg>
                Left
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Small Button"}),t("button",{onClick:()=>{d("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(s,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-dark btn-sm dropdown-toggle",button:e(o,{children:["Small Button",t("span",{children:t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})}),t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-outline-dark btn-sm dropdown-toggle",button:e(o,{children:["Small Button",t("span",{children:t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})})]})}),i.includes("code5")&&t(a,{children:t("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-dark btn-sm dropdown-toggle"
        button={
            <>
                Small Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-outline-dark btn-sm dropdown-toggle"
        button={
            <>
                Small Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]}),e("div",{className:"panel",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Large Button"}),t("button",{onClick:()=>{d("code6")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(s,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-success btn-lg dropdown-toggle",button:e(o,{children:["Large Button",t("span",{children:t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})}),t("div",{className:"flex items-center justify-center",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-outline-success btn-lg dropdown-toggle",button:e(o,{children:["Large Button",t("span",{children:t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})})]})}),i.includes("code6")&&t(a,{children:t("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-success btn-lg dropdown-toggle"
        button={
            <>
                Large Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-outline-success btn-lg dropdown-toggle"
        button={
            <>
                Large Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]}),e("div",{className:"panel",id:"grouped",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Grouped Dropdown Buttons"}),t("button",{onClick:()=>{d("code7")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(s,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t("div",{className:"flex items-center justify-center",children:e("div",{className:"relative inline-flex align-middle",children:[t("button",{type:"button",className:"btn btn-secondary ltr:rounded-r-none rtl:rounded-l-none",children:"1"}),t("button",{type:"button",className:"btn btn-secondary rounded-none",children:"2"}),t("div",{className:"relative inline-flex align-middle",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-secondary flex ltr:rounded-l-none rtl:rounded-r-none",button:e(o,{children:["Dropdown",t("span",{children:t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})})]})}),t("div",{className:"flex items-center justify-center",children:e("div",{className:"relative inline-flex align-middle",children:[t("button",{type:"button",className:"btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none",children:"1"}),t("button",{type:"button",className:"btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 rounded-none",children:"2"}),t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-outline-secondary flex ltr:rounded-l-none rtl:rounded-r-none",button:e(o,{children:["Dropdown",t("span",{children:t(r,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})]})})]})}),i.includes("code7")&&t(a,{children:t("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="relative inline-flex align-middle">
    <button type="button" className="btn btn-secondary ltr:rounded-r-none rtl:rounded-l-none">
        1
    </button>
    <button type="button" className="btn btn-secondary rounded-none">
        2
    </button>
    <div className="relative inline-flex align-middle">
        <div className="dropdown">
            <Dropdown
                placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
                btnClassName="btn dropdown-toggle btn-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul className="!min-w-[170px]">
                    <li>
                        <button type="button">        Action</button>
                    </li>
                    <li>
                        <button type="button">        Another action</button>
                    </li>
                    <li>
                        <button type="button">        Something else here</button>
                    </li>
                    <li>
                        <button type="button">        Separated link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
</div>
<div className="relative inline-flex align-middle">
    <button type="button" className="btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none">
        1
    </button>
    <button type="button" className="btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 rounded-none">
        2
    </button>
    <div className="dropdown">
        <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn dropdown-toggle btn-outline-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
            button={
                <>
                    Dropdown
                    <span>
                        <svg>...</svg>
                    </span>
                </>
            }
        >
            <ul className="!min-w-[170px]">
                <li>
                    <button type="button">    Action</button>
                </li>
                <li>
                    <button type="button">    Another action</button>
                </li>
                <li>
                    <button type="button">    Something else here</button>
                </li>
                <li>
                    <button type="button">    Separated link</button>
                </li>
            </ul>
        </Dropdown>
    </div>
</div>`})})]}),e("div",{className:"panel",id:"split",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Split"}),t("button",{onClick:()=>{d("code8")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(s,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t("div",{className:"flex items-center justify-center",children:e("div",{className:"inline-flex",children:[t("button",{className:"btn btn-primary ltr:rounded-r-none rtl:rounded-l-none",children:"Action"}),t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-primary ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light h-full",button:t("span",{className:"sr-only",children:"Toggle dropdown"}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})]})}),t("div",{className:"flex items-center justify-center",children:e("div",{className:"inline-flex",children:[t("button",{className:"btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none",children:"Action"}),t("div",{className:"dropdown",children:t(l,{placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full",button:t("span",{className:"sr-only",children:"Toggle dropdown"}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})]})})]})}),i.includes("code8")&&t(a,{children:t("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="inline-flex">
    <button className="btn btn-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
    <div className="dropdown">
        <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn dropdown-toggle btn-primary ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light h-full"
            button={<span className="sr-only">Toggle dropdown</span>}
        >
            <ul className="!min-w-[170px]">
                <li>
                    <button type="button">    Action</button>
                </li>
                <li>
                    <button type="button">    Another action</button>
                </li>
                <li>
                    <button type="button">    Something else here</button>
                </li>
                <li>
                    <button type="button">    Separated link</button>
                </li>
            </ul>
        </Dropdown>
    </div>
</div>
<div className="inline-flex">
    <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
    <div className="dropdown">
        <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
            button={<span className="sr-only">Toggle dropdown</span>}
        >
            <ul className="!min-w-[170px]">
                <li>
                    <button type="button">    Action</button>
                </li>
                <li>
                    <button type="button">    Another action</button>
                </li>
                <li>
                    <button type="button">    Something else here</button>
                </li>
                <li>
                    <button type="button">    Separated link</button>
                </li>
            </ul>
        </Dropdown>
    </div>
</div>`})})]}),e("div",{className:"panel",id:"custom",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom Dropdown"}),t("button",{onClick:()=>{d("code9")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(s,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex w-full",children:[t("div",{className:"flex items-center justify-center w-1/4",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"top-end":"top-start"}`,btnClassName:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary",button:t(b,{className:"w-6 h-6 rotate-90 opacity-70"}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})}),t("div",{className:"flex items-center justify-center w-1/4",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"top-end":"top-start"}`,btnClassName:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary",button:t(b,{className:"w-6 h-6 opacity-70"}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})}),t("div",{className:"flex items-center justify-center w-1/4",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"top-end":"top-start"}`,btnClassName:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary",button:t(b,{className:"w-6 h-6 rotate-90 opacity-70"}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})}),t("div",{className:"flex items-center justify-center w-1/4",children:t("div",{className:"dropdown",children:t(l,{placement:`${n?"top-start":"top-end"}`,btnClassName:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary",button:t(b,{className:"w-6 h-6 opacity-70"}),children:e("ul",{className:"!min-w-[170px]",children:[t("li",{children:t("button",{type:"button",children:"Action"})}),t("li",{children:t("button",{type:"button",children:"Another action"})}),t("li",{children:t("button",{type:"button",children:"Something else here"})}),t("li",{children:t("button",{type:"button",children:"Separated link"})})]})})})})]})}),i.includes("code9")&&t(a,{children:t("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-end' : 'top-start'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-end' : 'top-start'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-end' : 'top-start'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-start' : 'top-end'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]})]})]})]})};export{D as default};
