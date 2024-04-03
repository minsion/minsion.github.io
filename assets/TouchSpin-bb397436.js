import{u as A,r,s as E,j as t,b as e,L as P,O as n}from"./index-08323c31.js";import{C as s}from"./Highlight-9f01d9da.js";import{I as o}from"./IconCode-e2412410.js";import{I as a}from"./IconPlus-0d320fd5.js";const J=()=>{const T=A();r.useEffect(()=>{T(E("TouchSpin"))});const[l,g]=r.useState([]),d=m=>{l.includes(m)?g(W=>W.filter(M=>M!==m)):g([...l,m])},[i,N]=r.useState(0),[c,w]=r.useState(0),[u,k]=r.useState(0),[b,C]=r.useState(0),[p,j]=r.useState(0),[y,S]=r.useState(0),[x,V]=r.useState(0),[h,O]=r.useState(0),[v,_]=r.useState(0),[f,z]=r.useState(0),D=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],[I,L]=r.useState(""),F=m=>(_(m),L(D[m]));return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(P,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"TouchSpin"})})]}),t("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Button Spin"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code1"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"relative",children:t("div",{className:"flex",children:[e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>N(i>0?i-1:0),children:e(n,{className:"w-5 h-5"})}),e("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:0,max:100,readOnly:!0,value:i,onWheel:()=>N(i>0?i-1:0)}),e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>N(i<100?i+1:100),children:e(a,{})})]})})}),l.includes("code1")&&e(s,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value1, setValue1] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue1(value1 > 0 ? value1 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input
        type="number"
        placeholder="55"
        className="form-input rounded-none text-center"
        min={0}
        max={100}
        readOnly
        value={value1}
        onWheel={() => setValue1(value1 > 0 ? value1 - 1 : 0)}
    />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue1(value1 < 100 ? value1 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Spin button with step of 5"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code2"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"relative",children:t("div",{className:"flex",children:[e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>w(c>0?c-5:0),children:e(n,{className:"w-5 h-5"})}),e("input",{type:"number",placeholder:"5",step:"5",min:"0",max:"50",readOnly:!0,className:"form-input rounded-none text-center",value:c}),e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>w(c<100?c+5:100),children:e(a,{})})]})})}),l.includes("code2")&&e(s,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value2, setValue2] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue2(value2 > 0 ? value2 - 5 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="5" step="5" min="0" max="50" readOnly className="form-input rounded-none text-center" value={value2} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue2(value2 < 100 ? value2 + 5 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Wrapping value spin button"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code3"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"relative",children:t("div",{className:"flex",children:[e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>k(u>0?u-1:0),children:e(n,{className:"w-5 h-5"})}),e("input",{type:"number",placeholder:"_ _",className:"form-input rounded-none text-center",min:"0",max:"20",readOnly:!0,value:u}),e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>k(u<100?u+1:100),children:e(a,{})})]})})}),l.includes("code3")&&e(s,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value3, setValue3] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue3(value3 > 0 ? value3 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="_ _" className="form-input rounded-none text-center" min="0" max="20" readOnly value={value3} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue3(value3 < 100 ? value3 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),t("div",{className:"panel lg:row-span-2",id:"size",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Size"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code4"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:[t("div",{className:"mb-5",children:[e("label",{htmlFor:"sizeLarge",children:"Large size"}),t("div",{className:"flex",children:[e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>C(b>0?b-1:0),children:e(n,{className:"w-5 h-5"})}),e("input",{id:"sizeLarge",type:"number",placeholder:"55",className:"form-input form-input-lg rounded-none text-center",min:"0",max:"25",readOnly:!0,value:b}),e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>C(b<100?b+1:100),children:e(a,{})})]})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"sizeDefault",children:"Default size"}),t("div",{className:"flex",children:[e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>j(p>0?p-1:0),children:e(n,{className:"w-5 h-5"})}),e("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:"0",max:"25",readOnly:!0,value:p}),e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>j(p<100?p+1:100),children:e(a,{})})]})]}),t("div",{children:[e("label",{htmlFor:"sizeSmall",children:"Small size"}),t("div",{className:"flex",children:[e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>S(y>0?y-1:0),children:e(n,{className:"w-5 h-5"})}),e("input",{id:"sizeSmall",type:"number",placeholder:"55",className:"form-input form-input-sm rounded-none text-center",min:"0",max:"25",readOnly:!0,value:y}),e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>S(y<100?y+1:100),children:e(a,{})})]})]})]}),l.includes("code4")&&e(s,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value4, setValue4] = useState<any>(0);
const [value5, setValue5] = useState<any>(0);
const [value6, setValue6] = useState<any>(0);

{/*large*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue4(value4 > 0 ? value4 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input id="sizeLarge" type="number" placeholder="55" className="form-input form-input-lg rounded-none text-center" min="0" max="25" readOnly value={value4} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue4(value4 < 100 ? value4 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>

{/*default*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue5(value5 > 0 ? value5 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value5} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue5(value5 < 100 ? value5 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>

{/*small*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue6(value6 > 0 ? value6 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input id="sizeSmall" type="number" placeholder="55" className="form-input form-input-sm rounded-none text-center" min="0" max="25" readOnly value={value6} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue6(value6 < 100 ? value6 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),t("div",{className:"panel",id:"inline_buttons",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Inline spin button"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code5"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"mb-5",children:t("div",{className:"inline-flex",children:[e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>V(x>0?x-1:0),children:e(n,{className:"w-5 h-5"})}),e("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:"0",max:"25",readOnly:!0,value:x}),e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>V(x<100?x+1:100),children:e(a,{})})]})})}),l.includes("code5")&&e(s,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value7, setValue7] = useState<any>(0);

<div className="inline-flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue7(value7 > 0 ? value7 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value7} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue7(value7 < 100 ? value7 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),t("div",{className:"panel",id:"vertical_buttons",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical spin button"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code6"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"mb-5",children:t("div",{className:"inline-flex flex-col w-[50px]",children:[e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center rounded-t-md p-3 font-semibold border border-b-0 border-primary",onClick:()=>O(h>0?h-1:0),children:e(n,{className:"w-5 h-5"})}),e("input",{type:"text",placeholder:"55",className:"form-input rounded-none text-center px-2",min:"0",max:"25",readOnly:!0,value:h}),e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center rounded-b-md p-3 font-semibold border border-t-0 border-primary",onClick:()=>O(h<100?h+1:100),children:e(a,{})})]})})}),l.includes("code6")&&e(s,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value8, setValue8] = useState<any>(0);

<div className="inline-flex flex-col w-[50px]">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center rounded-t-md p-3 font-semibold border border-b-0 border-primary"
        onClick={() => setValue8(value8 > 0 ? value8 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="text" placeholder="55" className="form-input rounded-none text-center px-2" min="0" max="25" readOnly value={value8} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center rounded-b-md p-3 font-semibold border border-t-0 border-primary"
        onClick={() => setValue8(value8 < 100 ? value8 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),t("div",{className:"space-y-8",id:"change_button_color",children:[t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text with spin button"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code7"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"relative",children:t("div",{className:"flex",children:[e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>F(v>0?v-1:6),children:e(n,{className:"w-5 h-5"})}),e("input",{type:"text",placeholder:"Sunday",className:"form-input rounded-none text-center",min:"0",max:"6",readOnly:!0,value:I}),e("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>F(v<6?v+1:0),children:e(a,{})})]})})}),l.includes("code7")&&e(s,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';
const [value9, setValue9] = useState<any>(0);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const [day, setDay] = useState('');

const dayFormatter = (day: number) => {
    setValue9(day);
    return setDay(days[day]);
};

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => dayFormatter(value9 > 0 ? value9 - 1 : 6)}
    >
        <svg> ... </svg>
    </button>
    <input type="text" placeholder="Sunday" className="form-input rounded-none text-center" min="0" max="6" readOnly value={day} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => dayFormatter(value9 < 6 ? value9 + 1 : 0)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Change button class"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>d("code8"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"relative",children:t("div",{className:"flex",children:[e("button",{type:"button",className:"bg-danger text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-danger",onClick:()=>z(f>0?f-1:0),children:e(n,{className:"w-5 h-5"})}),e("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:"0",max:"25",readOnly:!0,value:f}),e("button",{type:"button",className:"bg-warning text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-warning",onClick:()=>z(f<100?f+1:100),children:e(a,{})})]})})}),l.includes("code8")&&e(s,{children:e("pre",{className:"language-typescript",children:`import { useState } from 'react';
const [value10, setValue10] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-danger text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-danger"
        onClick={() => setValue10(value10 > 0 ? value10 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value10} />
    <button
        type="button"
        className="bg-warning text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-warning"
        onClick={() => setValue10(value10 < 100 ? value10 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]})]})]})]})};export{J as default};
