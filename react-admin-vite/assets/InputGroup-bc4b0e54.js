import{u as g,r as c,s as N,a as v,j as r,b as e,L as y,x as b,D as i,l as m,d as u}from"./index-21dbdbc4.js";import{C as l}from"./Highlight-44bb2925.js";import{I as o}from"./IconCode-7061e36d.js";import{I as h}from"./IconLoader-8649af7a.js";const R=()=>{const p=g();c.useEffect(()=>{p(N("Input Group"))});const n=v(a=>a.themeConfig.rtlClass)==="rtl",[t,s]=c.useState([]),d=a=>{t.includes(a)?s(f=>f.filter(x=>x!==a)):s([...t,a])};return r("div",{children:[r("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(y,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Input Group"})})]}),r("div",{className:"pt-5 space-y-4",children:[r("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-4",id:"basic",children:[r("div",{className:"panel lg:row-span-2",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code1"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("form",{children:[e("div",{className:"mb-5",children:r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})}),e("div",{className:"mb-5",children:r("div",{className:"flex",children:[e("input",{type:"text",placeholder:"Recipient's username",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@example.com"})]})}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"url",children:"Your vanity URL"}),r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"https://"}),e("input",{id:"url",type:"text",placeholder:"example.com/users/",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),e("div",{className:"mb-5",children:r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"$"}),e("input",{type:"text",placeholder:"",className:"form-input rounded-none"}),e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:".00"})]})}),e("div",{children:r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b] whitespace-nowrap",children:"With textarea"}),e("textarea",{rows:4,className:"form-textarea ltr:rounded-l-none rtl:rounded-r-none"})]})})]})}),t.includes("code1")&&e(l,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div className="mb-5">
        <div className="flex">
            <input type="text" placeholder="Recipient's username" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @example.com
            </div>
        </div>
    </div>
    <div className="mb-5">
        <label htmlFor="url">Your vanity URL</label>
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                https://
            </div>
            <input id="url" type="text" placeholder="example.com/users/" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                $
            </div>
            <input type="text" placeholder="" className="form-input rounded-none" />
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                .00
            </div>
        </div>
    </div>
    <div>
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b] whitespace-nowrap">
                With textarea
            </div>
            <textarea rows={4} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"></textarea>
        </div>
    </div>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Simple Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code2"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:[r("div",{className:"mb-5",children:[e("label",{htmlFor:"iconLeft",children:"Left"}),r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:e(b,{className:"text-white-dark"})}),e("input",{id:"iconLeft",type:"text",placeholder:"Notification",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),r("div",{children:[e("label",{htmlFor:"iconRight",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"iconRight",type:"text",placeholder:"Notification",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:e(b,{className:"text-white-dark"})})]})]})]}),t.includes("code2")&&e(l,{children:e("pre",{className:"language-xml",children:`{/*left*/}
<div className="flex">
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <svg> ... </svg>
    </div>
    <input id="iconLeft" type="text" placeholder="Notification" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

{/*right*/}
<div className="flex">
    <input id="iconRight" type="text" placeholder="Notification" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <svg> ... </svg>
    </div>
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Spinning Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code3"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:[r("div",{className:"mb-5",children:[e("label",{htmlFor:"spiLeft",children:"Left"}),r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:e(h,{className:"text-white-dark animate-spin"})}),e("input",{id:"spiLeft",type:"text",placeholder:"Spinners",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),r("div",{children:[e("label",{htmlFor:"spiRight",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"spiRight",type:"text",placeholder:"Spinners",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:e(h,{className:"text-white-dark animate-spin"})})]})]})]}),t.includes("code3")&&e(l,{children:e("pre",{className:"language-xml",children:`{/*left*/}
<div className="flex">
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <svg> ... </svg>
    </div>
    <input id="spiLeft" type="text" placeholder="Spinners" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

{/*right*/}
<div className="flex">
    <input id="spiRight" type="text" placeholder="Spinners" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <svg> ... </svg>
    </div>
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dropdown Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code4"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:[r("div",{children:[e("label",{htmlFor:"dropdownLeft",children:"Left"}),r("div",{className:"flex",children:[e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${n?"bottom-end":"bottom-start"}`,btnClassName:"bg-primary flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2",button:e(m,{className:"w-5 h-5 text-white"}),children:r("ul",{className:"!min-w-[170px]",children:[e("li",{children:e("button",{type:"button",children:"Action"})}),e("li",{children:e("button",{type:"button",children:"Another action"})}),e("li",{children:e("button",{type:"button",children:"Something else here"})}),e("li",{children:e("button",{type:"button",children:"Separated link"})})]})})}),e("input",{id:"dropdownLeft",type:"text",placeholder:"Dropdown",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),r("div",{className:"mt-5",children:[e("label",{htmlFor:"dropdownRight",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"dropdownLeft",type:"text",placeholder:"Dropdown",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"bg-success flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2",button:e(m,{className:"w-5 h-5 text-white"}),children:r("ul",{className:"!min-w-[170px]",children:[e("li",{children:e("button",{type:"button",children:"Action"})}),e("li",{children:e("button",{type:"button",children:"Another action"})}),e("li",{children:e("button",{type:"button",children:"Something else here"})}),e("li",{children:e("button",{type:"button",children:"Separated link"})})]})})})]})]})]}),t.includes("code4")&&e(l,{children:e("pre",{className:"language-typescript",children:`import Dropdown from '../../components/Dropdown';
<div className="flex">
    <div className="dropdown">
        <Dropdown
            offset={[0, 5]}
            placement={\`\${isRtl ? 'bottom-end' : 'bottom-start'}\`}
            btnClassName="bg-primary flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
            button={
                <svg> ... </svg>
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
    <input id="dropdownLeft" type="text" placeholder="Dropdown" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

<div className="flex">
    <input id="dropdownLeft" type="text" placeholder="Dropdown" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="dropdown">
        <Dropdown
            offset={[0, 5]}
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="bg-success flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
            button={
                <svg> ... </svg>
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
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Checkboxes"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code5"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:[r("div",{className:"mb-5",children:[e("label",{htmlFor:"checkLeft",children:"Left"}),r("div",{className:"flex",children:[e("div",{className:"bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c]",children:e("input",{type:"checkbox",className:"form-checkbox border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0",defaultChecked:!0})}),e("input",{id:"checkLeft",type:"text",placeholder:"Checkbox",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),e("label",{htmlFor:"checkRight",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"checkRight",type:"text",placeholder:"Checkbox",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("div",{className:"bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c]",children:e("input",{type:"checkbox",className:"form-checkbox text-warning border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0",defaultChecked:!0})})]})]}),t.includes("code5")&&e(l,{children:e("pre",{className:"language-xml",children:`{/*left*/}
<div className="flex">
    <div className="bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c]">
        <input type="checkbox" className="form-checkbox border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0" defaultChecked />
    </div>
    <input id="checkLeft" type="text" placeholder="Checkbox" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

{/*right*/}
<div className="flex">
    <input id="checkRight" type="text" placeholder="Checkbox" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c]">
        <input type="checkbox" className="form-checkbox text-warning border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0" defaultChecked />
    </div>
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Radios"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code6"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:[r("div",{className:"mb-5",children:[e("label",{htmlFor:"radioLeft",children:"Left"}),r("div",{className:"flex",children:[e("div",{className:"bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c]",children:e("input",{type:"radio",className:"form-radio text-info border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0",defaultChecked:!0})}),e("input",{id:"radioLeft",type:"text",placeholder:"Radio",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),r("div",{children:[e("label",{htmlFor:"radioRight",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"radioRight",type:"text",placeholder:"Radio",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("div",{className:"bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c]",children:e("input",{type:"radio",className:"form-radio text-danger border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0",defaultChecked:!0})})]})]})]}),t.includes("code6")&&e(l,{children:e("pre",{className:"language-xml",children:`{/*left*/}
<div className="flex">
    <div className="bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c]">
        <input type="radio" className="form-radio text-info border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0" defaultChecked />
    </div>
    <input id="radioLeft" type="text" placeholder="Radio" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

{/*right*/}
<div className="flex">
    <input id="radioRight" type="text" placeholder="Radio" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c]">
        <input type="radio" className="form-radio text-danger border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0" defaultChecked />
    </div>
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Switch"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code7"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:[r("div",{className:"mb-5",children:[e("label",{htmlFor:"switchLeft",children:"Left"}),r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:r("label",{className:"w-7 h-4 relative cursor-pointer mb-0",children:[e("input",{type:"checkbox",className:"peer absolute w-full h-full opacity-0 z-10 focus:ring-0 focus:outline-none cursor-pointer",id:"custom_switch_checkbox1"}),e("span",{className:"rounded-full border border-[#adb5bd] bg-white peer-checked:bg-primary peer-checked:border-primary dark:bg-dark block h-full before:absolute ltr:before:left-0.5 rtl:before:right-0.5 ltr:peer-checked:before:left-3.5 rtl:peer-checked:before:right-3.5 peer-checked:before:bg-white before:bg-[#adb5bd] dark:before:bg-white-dark before:bottom-[2px] before:w-3 before:h-3 before:rounded-full before:transition-all before:duration-300"})]})}),e("input",{id:"switchLeft",type:"text",placeholder:"Switch",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),r("div",{children:[e("label",{htmlFor:"switchRight",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"switchRight",type:"text",placeholder:"Switch",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:r("label",{className:"w-7 h-4 relative cursor-pointer mb-0",children:[e("input",{type:"checkbox",className:"peer absolute w-full h-full opacity-0 z-10 focus:ring-0 focus:outline-none cursor-pointer",id:"custom_switch_checkbox2"}),e("span",{className:"rounded-full border border-[#adb5bd] bg-white peer-checked:bg-primary peer-checked:border-primary dark:bg-dark block h-full before:absolute ltr:before:left-0.5 rtl:before:right-0.5 ltr:peer-checked:before:left-3.5 rtl:peer-checked:before:right-3.5 peer-checked:before:bg-white before:bg-[#adb5bd] dark:before:bg-white-dark before:bottom-[2px] before:w-3 before:h-3 before:rounded-full before:transition-all before:duration-300"})]})})]})]})]}),t.includes("code7")&&e(l,{children:e("pre",{className:"language-xml",children:`{/*left*/}
<div className="flex">
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <label className="w-7 h-4 relative cursor-pointer mb-0">
            <input type="checkbox" className="peer absolute w-full h-full opacity-0 z-10 focus:ring-0 focus:outline-none cursor-pointer" id="custom_switch_checkbox1" />
            <span className="rounded-full border border-[#adb5bd] bg-white peer-checked:bg-primary peer-checked:border-primary dark:bg-dark block h-full before:absolute ltr:before:left-0.5 rtl:before:right-0.5 ltr:peer-checked:before:left-3.5 rtl:peer-checked:before:right-3.5 peer-checked:before:bg-white before:bg-[#adb5bd] dark:before:bg-white-dark before:bottom-[2px] before:w-3 before:h-3 before:rounded-full before:transition-all before:duration-300"></span>
        </label>
    </div>
    <input id="switchLeft" type="text" placeholder="Switch" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

{/*right*/}
<div className="flex">
    <input id="switchRight" type="text" placeholder="Switch" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <label className="w-7 h-4 relative cursor-pointer mb-0">
            <input type="checkbox" className="peer absolute w-full h-full opacity-0 z-10 focus:ring-0 focus:outline-none cursor-pointer" id="custom_switch_checkbox2" />
            <span className="rounded-full border border-[#adb5bd] bg-white peer-checked:bg-primary peer-checked:border-primary dark:bg-dark block h-full before:absolute ltr:before:left-0.5 rtl:before:right-0.5 ltr:peer-checked:before:left-3.5 rtl:peer-checked:before:right-3.5 peer-checked:before:bg-white before:bg-[#adb5bd] dark:before:bg-white-dark before:bottom-[2px] before:w-3 before:h-3 before:rounded-full before:transition-all before:duration-300"></span>
        </label>
    </div>
</div>`})})]})]}),r("div",{className:"panel",id:"sizes",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Sizes"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code8"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("form",{children:[e("div",{className:"mb-5",children:r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"Large"}),e("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base"})]})}),e("div",{className:"mb-5",children:r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"Default"}),e("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})}),e("div",{children:r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"Small"}),e("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none py-1.5 text-xs"})]})})]})}),t.includes("code8")&&e(l,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                Small
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base" />
        </div>
    </div>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                Small
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div>
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                Small
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none py-1.5 text-xs" />
        </div>
    </div>
</form>`})})]}),r("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-4",id:"multiple",children:[r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple inputs"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code9"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"First and last name"}),e("input",{type:"text",placeholder:"First Name",className:"form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r rounded-none flex-1"}),e("input",{type:"text",placeholder:"Last Name",className:"form-input ltr:rounded-l-none rtl:rounded-r-none flex-1"})]})})}),t.includes("code9")&&e(l,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="flex">
        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
            First and last name
        </div>
        <input type="text" placeholder="First Name" className="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r rounded-none flex-1" />
        <input type="text" placeholder="Last Name" className="form-input ltr:rounded-l-none rtl:rounded-r-none flex-1" />
    </div>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple addons"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code10"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("form",{children:[e("div",{className:"mb-5",children:r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"$"}),e("div",{className:"bg-[#eee] flex justify-center items-center rounded-none px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"0.00"}),e("input",{type:"text",placeholder:"",className:"form-input ltr:rounded-l-none rtl:rounded-r-none flex-1"})]})}),e("div",{children:r("div",{className:"flex",children:[e("input",{type:"text",placeholder:"",className:"form-input ltr:rounded-r-none rtl:rounded-l-none flex-1 ltr:rounded-l-md rtl:rounded-r-md"}),e("div",{className:"bg-[#eee] flex justify-center items-center rounded-none px-3 font-semibold border border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"0.00"}),e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"$"})]})})]})}),t.includes("code10")&&e(l,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                $
            </div>
            <div className="bg-[#eee] flex justify-center items-center rounded-none px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                0.00
            </div>
            <input type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none flex-1" />
        </div>
    </div>
    <div>
        <div className="flex">
            <input type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none flex-1 ltr:rounded-l-md rtl:rounded-r-md" />
            <div className="bg-[#eee] flex justify-center items-center rounded-none px-3 font-semibold border border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                0.00
            </div>
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                $
            </div>
        </div>
    </div>
</form>`})})]})]}),r("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-4",id:"with_action",children:[r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Buttons with dropdowns"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code11"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("form",{children:[r("div",{className:"mb-5 dropdown",children:[e("label",{htmlFor:"dropdownLeftButton",children:"Left"}),r("div",{className:"flex",children:[e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${n?"bottom-end":"bottom-start"}`,btnClassName:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2",button:e("span",{children:"Dropdown"}),children:r("ul",{className:"!min-w-[170px]",children:[e("li",{children:e("button",{type:"button",children:"Action"})}),e("li",{children:e("button",{type:"button",children:"Another action"})}),e("li",{children:e("button",{type:"button",children:"Something else here"})}),e("li",{children:e("button",{type:"button",children:"Separated link"})})]})})}),e("input",{id:"dropdownLeftButton",type:"text",placeholder:"",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),r("div",{className:"dropdown",children:[e("label",{htmlFor:"dropdownRightButton",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"dropdownRightButton",type:"text",placeholder:"",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${n?"bottom-start":"bottom-end"}`,btnClassName:"bg-danger text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2",button:e("span",{children:"Dropdown"}),children:r("ul",{className:"!min-w-[170px]",children:[e("li",{children:e("button",{type:"button",children:"Action"})}),e("li",{children:e("button",{type:"button",children:"Another action"})}),e("li",{children:e("button",{type:"button",children:"Something else here"})}),e("li",{children:e("button",{type:"button",children:"Separated link"})})]})})})]})]})]})}),t.includes("code11")&&e(l,{children:e("pre",{className:"language-typescript",children:`import Dropdown from '../../components/Dropdown';
<form>
    <div className="mb-5 dropdown">
        <label htmlFor="dropdownLeftButton">Left</label>
        <div className="flex">
            <div className="dropdown">
                <Dropdown
                    offset={[0, 5]}
                    placement={\`\${isRtl ? 'bottom-end' : 'bottom-start'}\`}
                    btnClassName="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                    button={<span>Dropdown</span>}
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
            <input id="dropdownLeftButton" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>

    <div className="dropdown">
        <label htmlFor="dropdownRightButton">Right</label>
        <div className="flex">
            <input id="dropdownRightButton" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
            <div className="dropdown">
                <Dropdown
                    offset={[0, 5]}
                    placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
                    btnClassName="bg-danger text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                    button={<span>Dropdown</span>}
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
        </div>
    </div>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Segmented buttons"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code12"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("form",{children:[r("div",{className:"mb-5 dropdown",children:[e("label",{htmlFor:"btnLeft",children:"Left"}),r("div",{className:"flex",children:[e("button",{type:"button",className:"bg-info text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-info",children:"Action"}),e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${n?"bottom-end":"bottom-start"}`,btnClassName:"bg-white dark:bg-[#1b2e4b] text-info flex justify-center items-center rounded-none px-3 font-semibold border border-info cursor-pointer pt-2 pb-2",button:e(u,{className:"w-5 h-5"}),children:r("ul",{className:"!min-w-[170px]",children:[e("li",{children:e("button",{type:"button",children:"Action"})}),e("li",{children:e("button",{type:"button",children:"Another action"})}),e("li",{children:e("button",{type:"button",children:"Something else here"})}),e("li",{children:e("button",{type:"button",children:"Separated link"})})]})})}),e("input",{id:"btnLeft",type:"text",placeholder:"",className:"form-input ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0"})]})]}),r("div",{className:"dropdown",children:[e("label",{htmlFor:"btnLeft",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"btnRight",type:"text",placeholder:"",className:"form-input ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0"}),e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${n?"bottom-end":"bottom-start"}`,btnClassName:"bg-white dark:bg-[#1b2e4b] text-secondary flex justify-center items-center rounded-none px-3 font-semibold border border-secondary pt-2 pb-2",button:e(u,{className:"w-5 h-5"}),children:r("ul",{className:"!min-w-[170px]",children:[e("li",{children:e("button",{type:"button",children:"Action"})}),e("li",{children:e("button",{type:"button",children:"Another action"})}),e("li",{children:e("button",{type:"button",children:"Something else here"})}),e("li",{children:e("button",{type:"button",children:"Separated link"})})]})})}),e("button",{type:"button",className:"bg-secondary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-secondary cursor-pointer",children:"Action"})]})]})]})}),t.includes("code12")&&e(l,{children:e("pre",{className:"language-typescript",children:`import Dropdown from '../../components/Dropdown';
<form>
    <div className="mb-5 dropdown">
        <label htmlFor="btnLeft">Left</label>
        <div className="flex">
            <button
                type="button"
                className="bg-info text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-info"
            >
                Action
            </button>
            <div className="dropdown">
                <Dropdown
                    offset={[0, 5]}
                    placement={\`\${isRtl ? 'bottom-end' : 'bottom-start'}\`}
                    btnClassName="bg-white dark:bg-[#1b2e4b] text-info flex justify-center items-center rounded-none px-3 font-semibold border border-info cursor-pointer pt-2 pb-2"
                    button={
                        <svg> ... </svg>
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

            <input id="btnLeft" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0" />
        </div>
    </div>
    <div className="dropdown">
        <label htmlFor="btnLeft">Right</label>
        <div className="flex">
            <input id="btnRight" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0" />
            <div className="dropdown">
                <Dropdown
                    offset={[0, 5]}
                    placement={\`\${isRtl ? 'bottom-end' : 'bottom-start'}\`}
                    btnClassName="bg-white dark:bg-[#1b2e4b] text-secondary flex justify-center items-center rounded-none px-3 font-semibold border border-secondary pt-2 pb-2"
                    button={
                        <svg> ... </svg>
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
            <button
                type="button"
                className="bg-secondary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-secondary cursor-pointer"
            >
                Action
            </button>
        </div>
    </div>
</form>`})})]}),r("div",{className:"panel lg:col-span-2",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Button addons"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code13"),children:r("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("form",{children:[r("div",{className:"mb-5",children:[e("label",{htmlFor:"addonsLeft",children:"Left"}),r("div",{className:"flex",children:[e("button",{type:"button",className:"btn btn-info ltr:rounded-r-none rtl:rounded-l-none",children:"Button"}),e("input",{id:"addonsLeft",type:"text",placeholder:"",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"addonsRight",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"addonsRight",type:"text",placeholder:"",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("button",{type:"button",className:"btn btn-secondary ltr:rounded-l-none rtl:rounded-r-none",children:"Button"})]})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"addonsLeftoutline",children:"Left"}),r("div",{className:"flex",children:[e("button",{type:"button",className:"btn btn-outline-info ltr:rounded-r-none rtl:rounded-l-none",children:"Button"}),e("button",{type:"button",className:"btn btn-outline-info rounded-none ltr:border-l-0 rtl:border-r-0",children:"Button"}),e("input",{id:"addonsLeftoutline",type:"text",placeholder:"",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),r("div",{children:[e("label",{htmlFor:"addonsRightoutline",children:"Right"}),r("div",{className:"flex",children:[e("input",{id:"addonsRightoutline",type:"text",placeholder:"",className:"form-input ltr:rounded-r-none rtl:rounded-l-none"}),e("button",{type:"button",className:"btn btn-outline-secondary rounded-none ltr:border-r-0 rtl:border-l-0",children:"Button"}),e("button",{type:"button",className:"btn btn-outline-secondary ltr:rounded-l-none rtl:rounded-r-none",children:"Button"})]})]})]})}),t.includes("code13")&&e(l,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="mb-5">
        <label htmlFor="addonsLeft">Left</label>
        <div className="flex">
            <button type="button" className="btn btn-info ltr:rounded-r-none rtl:rounded-l-none">
                Button
            </button>
            <input id="addonsLeft" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div className="mb-5">
        <label htmlFor="addonsRight">Right</label>
        <div className="flex">
            <input id="addonsRight" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
            <button type="button" className="btn btn-secondary ltr:rounded-l-none rtl:rounded-r-none">
                Button
            </button>
        </div>
    </div>
    <div className="mb-5">
        <label htmlFor="addonsLeftoutline">Left</label>
        <div className="flex">
            <button type="button" className="btn btn-outline-info ltr:rounded-r-none rtl:rounded-l-none">
                Button
            </button>
            <button type="button" className="btn btn-outline-info rounded-none ltr:border-l-0 rtl:border-r-0">
                Button
            </button>
            <input id="addonsLeftoutline" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div>
        <label htmlFor="addonsRightoutline">Right</label>
        <div className="flex">
            <input id="addonsRightoutline" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
            <button type="button" className="btn btn-outline-secondary rounded-none ltr:border-r-0 rtl:border-l-0">
                Button
            </button>
            <button type="button" className="btn btn-outline-secondary ltr:rounded-l-none rtl:rounded-r-none">
                Button
            </button>
        </div>
    </div>
</form>`})})]})]})]})]})};export{R as default};
