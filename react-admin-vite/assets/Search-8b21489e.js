import{r as l,R as F,u as $,s as B,j as r,b as e,L as R,i as k}from"./index-8cd85ed0.js";import{C}from"./Highlight-f2825850.js";import{I as _}from"./IconCode-4ce6e9fe.js";import{I as q}from"./IconHorizontalDots-4bb89c3a.js";function L(s,a,o){return a in s?Object.defineProperty(s,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[a]=o,s}var S={click:"onClick",focusin:"onFocus",focusout:"onFocus",mousedown:"onMouseDown",mouseup:"onMouseUp",touchstart:"onTouchStart",touchend:"onTouchEnd"},I=function(s){var a,o=s.children,u=s.onClickAway,v=s.focusEvent,f=v===void 0?"focusin":v,y=s.mouseEvent,d=y===void 0?"click":y,m=s.touchEvent,h=m===void 0?"touchend":m,p=l.useRef(null),w=l.useRef(null),t=l.useRef(!1);l.useEffect(function(){return setTimeout(function(){t.current=!0},0),function(){t.current=!1}},[]);var g=function(c){return function(i){w.current=i.target;var n=o==null?void 0:o.props[c];n&&n(i)}};l.useEffect(function(){var c,i,n=(c=(i=p.current)===null||i===void 0?void 0:i.ownerDocument)!==null&&c!==void 0?c:document,b=function(N){t.current&&(p.current&&p.current.contains(N.target)||w.current===N.target||!n.contains(N.target)||u(N))};return n.addEventListener(d,b),n.addEventListener(h,b),n.addEventListener(f,b),function(){n.removeEventListener(d,b),n.removeEventListener(h,b),n.removeEventListener(f,b)}},[f,d,u,h]);var x=S[d],j=S[h],A=S[f];return F.Children.only(l.cloneElement(o,(L(a={ref:function(c){p.current=c;var i=o.ref;typeof i=="function"?i(c):i&&(i.current=c)}},A,g(A)),L(a,x,g(x)),L(a,j,g(j)),a)))};I.displayName="ClickAwayListener";const E=[{thumb:"profile-5.jpeg",name:"Alan Green",email:"alan@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-11.jpeg",name:"Linda Nelson",email:"Linda@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"},{thumb:"profile-12.jpeg",name:"Lila Perry",email:"Lila@mail.com",status:"Closed",statusClass:"badge badge-outline-warning"},{thumb:"profile-3.jpeg",name:"Andy King",email:"Andy@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-15.jpeg",name:"Jesse Cory",email:"Jesse@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"}],G=()=>{const s=$();l.useEffect(()=>{s(B("Search"))});const[a,o]=l.useState([]),[u,v]=l.useState(""),[f,y]=l.useState(E),d=t=>{a.includes(t)?o(g=>g.filter(x=>x!==t)):o([...a,t])};l.useEffect(()=>{y(()=>E.filter(t=>t.name.toLowerCase().includes(u.toLowerCase())||t.email.toLowerCase().includes(u.toLowerCase())))},[u]);const[m,h]=l.useState(!1),p=()=>{h(!0)},w=()=>{h(!1)};return r("div",{children:[r("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(R,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Search"})})]}),r("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[r("div",{className:"panel lg:row-span-2",id:"live",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Live Search"}),e("button",{onClick:()=>{d("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[e(_,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5 space-y-5",children:[e("form",{className:"mx-auto w-full sm:w-1/2 mb-5",children:r("div",{className:"relative",children:[e("input",{type:"text",value:u,placeholder:"Search Attendees...",className:"form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11",onChange:t=>v(t.target.value)}),e("button",{type:"button",className:"btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center",children:e(k,{className:"mx-auto"})})]})}),e("div",{className:"p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block",children:f.map(t=>r("div",{className:`bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between
                                         text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]`,children:[e("div",{className:"user-profile",children:e("img",{src:`/assets/images/${t.thumb}`,alt:"img",className:"w-8 h-8 rounded-md object-cover"})}),e("div",{children:t.name}),e("div",{children:t.email}),e("div",{className:`badge ${t.statusClass} border-2 border-dashed`,children:t.status}),e("div",{className:"cursor-pointer",children:e(q,{className:"w-6 h-6 opacity-70"})})]},t.email))})]}),a.includes("code1")&&e(C,{children:e("pre",{children:`import { useState, useEffect } from 'react';

const items = [
    {
        thumb: 'profile-5.jpeg',
        name: 'Alan Green',
        email: 'alan@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-11.jpeg',
        name: 'Linda Nelson',
        email: 'Linda@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
    {
        thumb: 'profile-12.jpeg',
        name: 'Lila Perry',
        email: 'Lila@mail.com',
        status: 'Closed',
        statusClass: 'badge badge-outline-warning',
    },
    {
        thumb: 'profile-3.jpeg',
        name: 'Andy King',
        email: 'Andy@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-15.jpeg',
        name: 'Jesse Cory',
        email: 'Jesse@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
];

const [search, setSearch] = useState<string>('');
const [filteredItems, setFilteredItems] = useState<any>(items);

useEffect(() => {
        setFilteredItems(() => {
            return items.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
            });
        });
}, [search]);


<div className="mb-5 space-y-5">
    <form className="mx-auto w-full sm:w-1/2 mb-5">
        <div className="relative">
            <input
                type="text"
                value={search}
                placeholder="Search Attendees..."
                className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center">
                <svg>...</svg>
            </button>
        </div>
    </form>
    <div className="p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block">
        {filteredItems.map((item: any) => {
            return (
                <div
                    key={item.email}
                    className="bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between
                        text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]"
                >
                    <div className="user-profile">
                        <img src={\`/assets/images/\${item.thumb}\`} alt="img" className="w-8 h-8 rounded-md object-cover" />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <div className={\`badge \${item.statusClass} border-2 border-dashed\`}>{item.status}</div>
                    <div className="cursor-pointer">
                        <svg>...</svg>
                    </div>
                </div>
            );
        })}
    </div>
</div>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Overlay"}),e("button",{onClick:()=>{d("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[e(_,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5 space-y-5",children:e("form",{children:e(I,{onClickAway:w,children:r("div",{className:"search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full",onClick:p,children:[e("input",{type:"text",placeholder:"Search...",className:`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer ${m?"!block":""}`}),e("button",{type:"button",className:`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary ${m?"!ltr:!right-auto ltr:left-1 rtl:right-1":""}`,children:e(k,{className:"mx-auto w-5 h-5"})})]})})})}),a.includes("code2")&&e(C,{children:e("pre",{children:`import { useState} from 'react';

const [focus, setFocus] = useState(false);

const overlayClickAway = () => {
    setFocus(false);
};

<form>
    <ClickAwayListener onClickAway={overlayClickAway}>
        <div className="search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full" onClick={overlaySearchClick}>
            <input
                type="text"
                placeholder="Search..."
                className={\`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer ${m?"!block":""}\`}
            />
            <button
                type="button"
                className={\`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary ${m?"!ltr:!right-auto ltr:left-1 rtl:right-1":""}\`}
            >
                <svg>...</svg>
            </button>
        </div>
    </ClickAwayListener>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Search Box"}),e("button",{onClick:()=>{d("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[e(_,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5 space-y-5",children:e("form",{children:r("div",{className:"relative border border-white-dark/20  w-full flex",children:[e("button",{type:"submit",placeholder:"Let's find your question in fast way",className:"text-primary m-auto p-3 flex items-center justify-center",children:e(k,{className:"mx-auto w-5 h-5"})}),e("input",{type:"text",placeholder:"Let's find your question in fast way",className:"form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"})]})})}),a.includes("code3")&&e(C,{children:e("pre",{children:`import { useState} from 'react';
import ClickAwayListener from 'react-click-away-listener';

const [focus, setFocus] = useState(false);

const overlaySearchClick = () => {
        setFocus(true);
};

<form>
    <div className="relative border border-white-dark/20  w-full flex">
        <button type="submit" placeholder="Let's find your question in fast way" className="text-primary m-auto p-3 flex items-center justify-center">
            <svg>...</svg>
        </button>
        <input
            type="text"
            placeholder="Let's find your question in fast way"
            className="form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"
        />
    </div>
</form>`})})]})]})]})};export{G as default};
