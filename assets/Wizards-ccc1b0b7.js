import{u as S,r as o,s as z,j as t,b as e,L as W,c as h}from"./index-db6af04d.js";import{C as m}from"./Highlight-7cc82095.js";import{I as u}from"./IconCode-9488e58f.js";import{I as p}from"./IconHome-c138e4ea.js";import{I as v}from"./IconThumbUp-441b010b.js";const E=()=>{const $=S();o.useEffect(()=>{$(z("Wizards"))});const[b,C]=o.useState([]),d=T=>{b.includes(T)?C(j=>j.filter(A=>A!==T)):C([...b,T])},[s,g]=o.useState(1),[n,f]=o.useState(1),[c,y]=o.useState(1),[r,N]=o.useState(1),[a,x]=o.useState(1),[l,k]=o.useState(1),[i,w]=o.useState(1);return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(W,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Wizards"})})]}),t("div",{className:"pt-5 space-y-8",children:[e("h4",{className:"badge bg-primary inline-block hover:top-0 text-base mb-0",children:"Pills"}),t("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text Only"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code1"),children:t("span",{className:"flex items-center",children:[e(u,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"inline-block w-full",children:[t("ul",{className:"mb-5 grid grid-cols-3 text-center",children:[e("li",{children:e("div",{className:`${s===1?"!bg-primary text-white":""}
                                            block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>g(1),children:"1 Home"})}),e("li",{children:e("div",{className:`${s===2?"!bg-primary text-white":""} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>g(2),children:"2 About"})}),e("li",{children:e("div",{className:`${s===3?"!bg-primary text-white":""} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>g(3),children:"3 Success"})})]}),t("div",{children:[e("p",{className:"mb-5",children:s===1&&"Try the keyboard navigation by clicking arrow left or right!"}),e("p",{className:"mb-5",children:s===2&&"The next and previous buttons help you to navigate through your content."}),e("p",{className:"mb-5",children:s===3&&"Wonderful transition effects."})]}),t("div",{className:"flex justify-between",children:[e("button",{type:"button",className:`btn btn-primary ${s===1?"hidden":""}`,onClick:()=>g(s===3?2:1),children:"Back"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>g(s===1?2:3),children:s===3?"Finish":"Next"})]})]})}),b.includes("code1")&&e(m,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab, setActiveTab] = useState<any>(1);

<div className="inline-block w-full">
    <ul className="mb-5 grid grid-cols-3 text-center">
        <li>
            <div
                className={\`\${activeTab === 1 ? '!bg-primary text-white' : ''}
                block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab(1)}
            >
                1 Home
            </div>
        </li>

        <li>
            <div className={\`\${activeTab === 2 ? '!bg-primary text-white' : ''} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`} onClick={() => setActiveTab(2)}>
                2 About
            </div>
        </li>

        <li>
            <div className={\`\${activeTab === 3 ? '!bg-primary text-white' : ''} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`} onClick={() => setActiveTab(3)}>
                3 Success
            </div>
        </li>
    </ul>

    <div>
        <p className="mb-5">{activeTab === 1 && 'Try the keyboard navigation by clicking arrow left or right!'}</p>
        <p className="mb-5">{activeTab === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>
        <p className="mb-5">{activeTab === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab(activeTab === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab(activeTab === 1 ? 2 : 3)}>
            {activeTab === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Icon Only"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code2"),children:t("span",{className:"flex items-center",children:[e(u,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"inline-block w-full",children:[t("ul",{className:"mb-5 grid grid-cols-3",children:[e("li",{children:e("div",{className:`${n===1?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>f(1),children:e(p,{})})}),e("li",{children:e("div",{className:`${n===2?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>f(2),children:e(h,{className:"w-5 h-5"})})}),e("li",{children:e("div",{className:`${n===3?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>f(3),children:e(v,{className:"w-5 h-5"})})})]}),t("div",{children:[e("p",{className:"mb-5",children:n===1&&"Try the keyboard navigation by clicking arrow left or right!"}),e("p",{className:"mb-5",children:n===2&&"The next and previous buttons help you to navigate through your content."}),e("p",{className:"mb-5",children:n===3&&"Wonderful transition effects."})]}),t("div",{className:"flex justify-between",children:[e("button",{type:"button",className:`btn btn-primary ${n===1?"hidden":""}`,onClick:()=>f(n===3?2:1),children:"Back"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>f(n===1?2:3),children:n===3?"Finish":"Next"})]})]})}),b.includes("code2")&&e(m,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab1, setActiveTab1] = useState<any>(1);

<div className="inline-block w-full">
    <ul className="mb-5 grid grid-cols-3">
        <li>
            <div
                className={\`\${activeTab1 === 1 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab1(1)}
            >
                <svg>...</svg>
            </div>
        </li>
        <li>
            <div
                className={\`\${activeTab1 === 2 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab1(2)}
            >
                <svg>...</svg>
            </div>
        </li>
        <li>
            <div
                className={\`\${activeTab1 === 3 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab1(3)}
            >
                <svg>...</svg>
            </div>
        </li>
    </ul>
    <div>
        <p className="mb-5">{activeTab1 === 1 && 'Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab1 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab1 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab1 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab1(activeTab1 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab1(activeTab1 === 1 ? 2 : 3)}>
            {activeTab1 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel lg:col-span-2",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text & Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code3"),children:t("span",{className:"flex items-center",children:[e(u,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"inline-block w-full",children:[t("ul",{className:"mb-5 grid grid-cols-3",children:[t("li",{children:[e("div",{className:`${c===1?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>y(1),children:e(p,{})}),e("span",{className:"text-center block mt-2",children:"Home"})]}),t("li",{children:[e("div",{className:`${c===2?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>y(2),children:e(h,{className:"w-5 h-5"})}),e("span",{className:"text-center block mt-2",children:"About"})]}),t("li",{children:[e("div",{className:`${c===3?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>y(3),children:e(v,{className:"w-5 h-5"})}),e("span",{className:`text-center block mt-2 ${c===3?"text-primary ":""}`,children:"Success"})]})]}),t("div",{children:[e("p",{className:"mb-5",children:c===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e("p",{className:"mb-5",children:c===2&&"The next and previous buttons help you to navigate through your content."}),e("p",{className:"mb-5",children:c===3&&"Wonderful transition effects."})]}),t("div",{className:"flex justify-between",children:[e("button",{type:"button",className:`btn btn-primary ${c===1?"hidden":""}`,onClick:()=>y(c===3?2:1),children:"Back"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>y(c===1?2:3),children:c===3?"Finish":"Next"})]})]})}),b.includes("code3")&&e(m,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab2, setActiveTab2] = useState<any>(1);

<div className="inline-block w-full">
    <ul className="mb-5 grid grid-cols-3">
        <li>
            <div
                className={\`\${activeTab2 === 1 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab2(1)}
            >
                <svg>...</svg>
            </div>
            <span className="text-center block mt-2">Home</span>
        </li>
        <li>
            <div
                className={\`\${activeTab2 === 2 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab2(2)}
            >
                <svg>...</svg>
            </div>
            <span className="text-center block mt-2">About</span>
        </li>
        <li>
            <div
                className={\`\${activeTab2 === 3 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab2(3)}
            >
                <svg>...</svg>
            </div>
            <span className={\`text-center block mt-2 \${activeTab2 === 3 ? 'text-primary ' : ''}\`}>Success</span>
        </li>
    </ul>
    <div>
        <p className="mb-5">{activeTab2 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab2 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab2 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab2 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab2(activeTab2 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab2(activeTab2 === 1 ? 2 : 3)}>
            {activeTab2 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]})]}),e("h4",{className:"badge bg-primary inline-block hover:top-0 text-base mb-0",children:"Circle"}),t("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Icon Only"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code4"),children:t("span",{className:"flex items-center",children:[e(u,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"inline-block w-full",children:[t("div",{className:"relative z-[1]",children:[e("div",{className:`${r===1?"w-[15%]":r===2?"w-[48%]":r===3?"w-[81%]":""}
                                            bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}),t("ul",{className:"mb-5 grid grid-cols-3",children:[e("li",{className:"mx-auto",children:e("button",{type:"button",className:`${r===1?"!border-primary !bg-primary text-white":""}
                                            bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>N(1),children:e(p,{})})}),e("li",{className:"mx-auto",children:e("button",{type:"button",className:`${r===2?"!border-primary !bg-primary text-white":""}
                                            bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>N(2),children:e(h,{className:"w-5 h-5"})})}),e("li",{className:"mx-auto",children:e("button",{type:"button",className:`${r===3?"!border-primary !bg-primary text-white":""}
                                            bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>N(3),children:e(v,{className:"w-5 h-5"})})})]})]}),t("div",{children:[e("p",{className:"mb-5",children:r===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e("p",{className:"mb-5",children:r===2&&"The next and previous buttons help you to navigate through your content."}),e("p",{className:"mb-5",children:r===3&&"Wonderful transition effects."})]}),t("div",{className:"flex justify-between",children:[e("button",{type:"button",className:`btn btn-primary ${r===1?"hidden":""}`,onClick:()=>N(r===3?2:1),children:"Back"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>N(r===1?2:3),children:r===3?"Finish":"Next"})]})]})}),b.includes("code4")&&e(m,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab3, setActiveTab3] = useState<any>(1);

<div className="inline-block w-full">
    <div className="relative z-[1]">
        <div
            className={\`\${activeTab3 === 1 ? 'w-[15%]' : activeTab3 === 2 ? 'w-[48%]' : activeTab3 === 3 ? 'w-[81%]' : ''}
                bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]\`}
        ></div>
        <ul className="mb-5 grid grid-cols-3">
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab3 === 1 ? '!border-primary !bg-primary text-white' : ''}
                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab3(1)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab3 === 2 ? '!border-primary !bg-primary text-white' : ''}
                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab3(2)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab3 === 3 ? '!border-primary !bg-primary text-white' : ''}
                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab3(3)}
                >
                    <svg>...</svg>
                </button>
            </li>
        </ul>
    </div>
    <div>
        <p className="mb-5">{activeTab3 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab3 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab3 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab3 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab3(activeTab3 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab3(activeTab3 === 1 ? 2 : 3)}>
            {activeTab3 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text & Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code5"),children:t("span",{className:"flex items-center",children:[e(u,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"inline-block w-full",children:[t("div",{className:"relative z-[1]",children:[e("div",{className:`${a===1?"w-[15%]":a===2?"w-[48%]":a===3?"w-[81%]":""}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}),t("ul",{className:"mb-5 grid grid-cols-3",children:[t("li",{className:"mx-auto",children:[e("button",{type:"button",className:`${a===1?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>x(1),children:e(p,{})}),e("span",{className:`${a===1?"text-primary ":""}text-center block mt-2`,children:"Home"})]}),t("li",{className:"mx-auto",children:[e("button",{type:"button",className:`${a===2?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>x(2),children:e(h,{className:"w-5 h-5"})}),e("span",{className:`${a===2?"text-primary ":""}text-center block mt-2`,children:"About"})]}),t("li",{className:"mx-auto",children:[e("button",{type:"button",className:`${a===3?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>x(3),children:e(v,{className:"w-5 h-5"})}),e("span",{className:`${a===3?"text-primary ":""}text-center block mt-2`,children:"Success"})]})]})]}),t("div",{children:[e("p",{className:"mb-5",children:a===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e("p",{className:"mb-5",children:a===2&&"The next and previous buttons help you to navigate through your content."}),e("p",{className:"mb-5",children:a===3&&"Wonderful transition effects."})]}),t("div",{className:"flex justify-between",children:[e("button",{type:"button",className:`btn btn-primary ${a===1?"hidden":""}`,onClick:()=>x(a===3?2:1),children:"Back"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>x(a===1?2:3),children:a===3?"Finish":"Next"})]})]})}),b.includes("code5")&&e(m,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab4, setActiveTab4] = useState<any>(1);

<div className="inline-block w-full">
    <div className="relative z-[1]">
        <div
            className={\`\${activeTab4 === 1 ? 'w-[15%]' : activeTab4 === 2 ? 'w-[48%]' : activeTab4 === 3 ? 'w-[81%]' : ''}
            bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]\`}
        ></div>
        <ul className="mb-5 grid grid-cols-3">
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab4 === 1 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab4(1)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab4 === 1 ? 'text-primary ' : ''}text-center block mt-2\`}>Home</span>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab4 === 2 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab4(2)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab4 === 2 ? 'text-primary ' : ''}text-center block mt-2\`}>About</span>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab4 === 3 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab4(3)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2\`}>Success</span>
            </li>
        </ul>
    </div>
    <div>
        <p className="mb-5">{activeTab4 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab4 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab4 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab4 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab4(activeTab4 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab4(activeTab4 === 1 ? 2 : 3)}>
            {activeTab4 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]})]}),e("h4",{className:"badge bg-primary inline-block hover:top-0 text-base mb-0",children:"Square"}),t("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Icon Only"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code6"),children:t("span",{className:"flex items-center",children:[e(u,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"inline-block w-full",children:[t("div",{className:"relative z-[1]",children:[e("div",{className:`${l===1?"w-[15%]":l===2?"w-[48%]":l===3?"w-[81%]":""}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}),t("ul",{className:"mb-5 grid grid-cols-3",children:[e("li",{className:"mx-auto",children:e("button",{type:"button",className:`${l===1?"!border-primary !bg-primary text-white":""}
                                                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>k(1),children:e(p,{})})}),e("li",{className:"mx-auto",children:e("button",{type:"button",className:`${l===2?"!border-primary !bg-primary text-white":""}
                                                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>k(2),children:e(h,{className:"w-5 h-5"})})}),e("li",{className:"mx-auto",children:e("button",{type:"button",className:`${l===3?"!border-primary !bg-primary text-white":""}
                                                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>k(3),children:e(v,{className:"w-5 h-5"})})})]})]}),t("div",{children:[e("p",{className:"mb-5",children:l===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e("p",{className:"mb-5",children:l===2&&"The next and previous buttons help you to navigate through your content."}),e("p",{className:"mb-5",children:l===3&&"Wonderful transition effects."})]}),t("div",{className:"flex justify-between",children:[e("button",{type:"button",className:`btn btn-primary ${l===1?"hidden":""}`,onClick:()=>k(l===3?2:1),children:"Back"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>k(l===1?2:3),children:l===3?"Finish":"Next"})]})]})}),b.includes("code6")&&e(m,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab5, setActiveTab5] = useState<any>(1);

<div className="inline-block w-full">
    <div className="relative z-[1]">
        <div
            className={\`\${activeTab5 === 1 ? 'w-[15%]' : activeTab5 === 2 ? 'w-[48%]' : activeTab5 === 3 ? 'w-[81%]' : ''}
            bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]\`}
        ></div>
        <ul className="mb-5 grid grid-cols-3">
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab5 === 1 ? '!border-primary !bg-primary text-white' : ''}
                    bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab5(1)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab5 === 2 ? '!border-primary !bg-primary text-white' : ''}
                    bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab5(2)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab5 === 3 ? '!border-primary !bg-primary text-white' : ''}
                    bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab5(3)}
                >
                    <svg>...</svg>
                </button>
            </li>
        </ul>
    </div>
    <div>
        <p className="mb-5">{activeTab5 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab5 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab5 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab5 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab5(activeTab5 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab5(activeTab5 === 1 ? 2 : 3)}>
            {activeTab5 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text & Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code7"),children:t("span",{className:"flex items-center",children:[e(u,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"inline-block w-full",children:[t("div",{className:"relative z-[1]",children:[e("div",{className:`${i===1?"w-[15%]":i===2?"w-[48%]":i===3?"w-[81%]":""}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}),t("ul",{className:"mb-5 grid grid-cols-3",children:[t("li",{className:"mx-auto",children:[e("button",{type:"button",className:`${i===1?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>w(1),children:e(p,{})}),e("span",{className:`${i===1?"text-primary ":""}text-center block mt-2`,children:"Home"})]}),t("li",{className:"mx-auto",children:[e("button",{type:"button",className:`${i===2?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>w(2),children:e(h,{className:"w-5 h-5"})}),e("span",{className:`${i===2?"text-primary ":""}text-center block mt-2`,children:"About"})]}),t("li",{className:"mx-auto",children:[e("button",{type:"button",className:`${i===3?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>w(3),children:e(v,{className:"w-5 h-5"})}),e("span",{className:`${i===3?"text-primary ":""}text-center block mt-2`,children:"Success"})]})]})]}),t("div",{children:[e("p",{className:"mb-5",children:i===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e("p",{className:"mb-5",children:i===2&&"The next and previous buttons help you to navigate through your content."}),e("p",{className:"mb-5",children:i===3&&"Wonderful transition effects."})]}),t("div",{className:"flex justify-between",children:[e("button",{type:"button",className:`btn btn-primary ${i===1?"hidden":""}`,onClick:()=>w(i===3?2:1),children:"Back"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>w(i===1?2:3),children:i===3?"Finish":"Next"})]})]})}),b.includes("code7")&&e(m,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab6, setActiveTab6] = useState<any>(1);

<div className="inline-block w-full">
    <div className="relative z-[1]">
        <div
            className={\`\${activeTab6 === 1 ? 'w-[15%]' : activeTab6 === 2 ? 'w-[48%]' : activeTab6 === 3 ? 'w-[81%]' : ''}
            bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]\`}
        ></div>
        <ul className="mb-5 grid grid-cols-3">
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab6 === 1 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab6(1)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab6 === 1 ? 'text-primary ' : ''}text-center block mt-2\`}>Home</span>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab6 === 2 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab6(2)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab6 === 2 ? 'text-primary ' : ''}text-center block mt-2\`}>About</span>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab6 === 3 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab6(3)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab6 === 3 ? 'text-primary ' : ''}text-center block mt-2\`}>Success</span>
            </li>
        </ul>
    </div>
    <div>
        <p className="mb-5">{activeTab6 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab6 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab6 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab6 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab6(activeTab6 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab6(activeTab6 === 1 ? 2 : 3)}>
            {activeTab6 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]})]})]})]})};export{E as default};
