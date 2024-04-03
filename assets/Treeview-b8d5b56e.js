import{u as S,r as m,s as A,j as l,b as e,L as j,d as u,A as a}from"./index-08323c31.js";import{C as f}from"./Highlight-9f01d9da.js";import{I as C}from"./IconCode-e2412410.js";import{I as g}from"./IconFolder-7609e27b.js";import{I as r}from"./IconTxtFile-a18e37f3.js";import{I as h,a as v}from"./IconFolderMinus-e76b4f11.js";const F=()=>{const k=S();m.useEffect(()=>{k(A("Treeview"))});const[p,y]=m.useState([]),x=i=>{p.includes(i)?y(n=>n.filter(c=>c!==i)):y([...p,i])},[s,b]=m.useState(["images"]),[o,T]=m.useState(!1),N=i=>{s.includes(i)?b(n=>n.filter(c=>c!==i)):b([...s,i])},[t,w]=m.useState(["parent"]),d=i=>{t.includes(i)?w(n=>n.filter(c=>c!==i)):w([...t,i])};return l("div",{children:[l("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(j,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Treeview"})})]}),l("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[l("div",{className:"panel",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Animated"}),e("button",{onClick:()=>{x("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:l("span",{className:"flex items-center",children:[e(C,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:l("ul",{className:"font-semibold",children:[l("li",{className:"py-[5px]",children:[l("button",{type:"button",className:`${s.includes("css")?"active":""}`,onClick:()=>N("css"),children:[e(u,{className:`w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2 ${s.includes("css")&&"rotate-180"}`}),e(g,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"CSS"]}),e(a,{duration:300,height:s.includes("css")?"auto":0,children:e("ul",{className:"ltr:pl-14 rtl:pr-14",children:l("li",{className:"py-[5px]",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"style.css"]})})})]}),l("li",{className:"py-[5px]",children:[l("button",{type:"button",className:`${s.includes("images")?"active":""}`,onClick:()=>N("images"),children:[e(u,{className:`w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2 ${s.includes("images")&&"rotate-180"}`}),e(g,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"Images"]}),e(a,{duration:300,height:s.includes("images")?"auto":0,children:l("ul",{className:"ltr:pl-14 rtl:pr-14",children:[l("li",{className:"py-[5px]",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"profile-16.jpeg"]}),l("li",{className:"py-[5px]",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"background.png"]}),l("li",{className:"py-[5px]",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"gallery.jpg"]})]})})]}),l("li",{className:"py-[5px]",children:[l("button",{type:"button",className:`${s.includes("html")?"active":""}`,onClick:()=>N("html"),children:[e(u,{className:`w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2 ${s.includes("html")&&"rotate-180"}`}),e(g,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"HTML"]}),e(a,{duration:300,height:s.includes("html")?"auto":0,children:l("ul",{className:"ltr:pl-14 rtl:pr-14",children:[l("li",{className:"py-[5px]",children:[l("button",{type:"button",className:`${o?"open":""} `,onClick:()=>T(!o),children:[e(u,{className:`w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2 ${s.includes("pages")&&"rotate-180"}`}),e(g,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"PAGES"]}),e(a,{duration:300,height:o?"auto":0,children:l("ul",{className:"ltr:pl-14 rtl:pr-14",children:[l("li",{className:"py-[5px]",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]}),l("li",{className:"py-[5px]",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]}),l("li",{className:"py-[5px]",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]})]})})]}),l("li",{className:"py-[5px] ltr:pl-8 rtl:pr-8",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]}),l("li",{className:"py-[5px] ltr:pl-8 rtl:pr-8",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]})]})})]}),l("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"index.html"]}),l("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[e(r,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"components.html"]})]})}),p.includes("code1")&&e(f,{children:e("pre",{children:`import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const [treeview1, setTreeview1] = useState<string[]>(['images']);
const [pagesSubMenu, setPagesSubMenu] = useState(false);

const toggleTreeview1 = (name: any) => {
    if (treeview1.includes(name)) {
        setTreeview1((value) => value.filter((d) => d !== name));
    } else {
        setTreeview1([...treeview1, name]);
    }
};

<ul className="font-semibold">
    <li className="py-[5px]">
        <button type="button" className={\`${s.includes("css")?"active":""}\`} onClick={() => toggleTreeview1('css')}>
            <svg>...</svg>
            <svg>...</svg>
            CSS
        </button>
        <AnimateHeight duration={300} height={treeview1.includes('css') ? 'auto' : 0}>
            <ul className="ltr:pl-14 rtl:pr-14">
                <li className="py-[5px]">
                    <svg>...</svg>
                    style.css
                </li>
            </ul>
        </AnimateHeight>
    </li>
    <li className="py-[5px]">
        <button type="button" className={\`${s.includes("images")?"active":""}\`} onClick={() => toggleTreeview1('images')}>
            <svg>...</svg>
            <svg>...</svg>
            Images
        </button>
        <AnimateHeight duration={300} height={treeview1.includes('images') ? 'auto' : 0}>
            <ul className="ltr:pl-14 rtl:pr-14">
                <li className="py-[5px]">
                    <svg>...</svg>
                    profile-16.jpeg
                </li>
                <li className="py-[5px]">
                    <svg>...</svg>
                    background.png
                </li>
                <li className="py-[5px]">
                    <svg>...</svg>
                    gallery.jpg
                </li>
            </ul>
        </AnimateHeight>
    </li>
    <li className="py-[5px]">
        <button type="button" className={\`${s.includes("html")?"active":""}\`} onClick={() => toggleTreeview1('html')}>
            <svg>...</svg>
            <svg>...</svg>
            HTML
        </button>
        <AnimateHeight duration={300} height={treeview1.includes('html') ? 'auto' : 0}>
            <ul className="ltr:pl-14 rtl:pr-14">
                <li className="py-[5px]">
                    <button type="button" className={\`${o?"open":""}\`} onClick={() => setPagesSubMenu(!pagesSubMenu)}>
                        <svg>...</svg>
                        <svg>...</svg>
                        PAGES
                    </button>
                    <AnimateHeight duration={300} height={pagesSubMenu ? 'auto' : 0}>
                        <ul className="ltr:pl-14 rtl:pr-14">
                            <li className="py-[5px]">
                                <svg>...</svg>
                                file name
                            </li>
                            <li className="py-[5px]">
                                <svg>...</svg>
                                file name
                            </li>
                            <li className="py-[5px]">
                                <svg>...</svg>
                                file name
                            </li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] ltr:pl-8 rtl:pr-8">
                    <svg>...</svg>
                    file name
                </li>
                <li className="py-[5px] ltr:pl-8 rtl:pr-8">
                    <svg>...</svg>
                    file name
                </li>
            </ul>
        </AnimateHeight>
    </li>
    <li className="py-[5px] ltr:pl-7 rtl:pr-7">
        <svg>...</svg>
        index.html
    </li>
    <li className="py-[5px] ltr:pl-7 rtl:pr-7">
        <svg>...</svg>
        components.html
    </li>
</ul>`})})]}),l("div",{className:"panel",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e("button",{onClick:()=>{x("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:l("span",{className:"flex items-center",children:[e(C,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("ul",{className:"font-semibold",children:l("li",{children:[l("button",{type:"button",className:`${t.includes("parent")?"active":""}`,onClick:()=>d("parent"),children:[t.includes("parent")?e(h,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}):e(v,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"Parent Node"]}),e(a,{duration:300,height:t.includes("parent")?"auto":0,easing:"none",children:l("ul",{children:[l("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[l("button",{type:"button",className:`${t.includes("img")?"open":""} `,onClick:()=>d("img"),children:[t.includes("img")?e(h,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}):e(v,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"img"]}),e("ul",{})]}),l("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[l("button",{type:"button",className:`${t.includes("css")?"open":""} `,onClick:()=>d("css"),children:[t.includes("css")?e(h,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}):e(v,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"css"]}),e(a,{duration:300,height:t.includes("css")?"auto":0,easing:"none",children:e("ul",{children:e("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7 text-secondary",children:"style.css"})})})]}),l("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[l("button",{type:"button",className:`${t.includes("js")?"open":""} `,onClick:()=>d("js"),children:[t.includes("js")?e(h,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}):e(v,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"js"]}),e(a,{duration:300,height:t.includes("js")?"auto":0,easing:"none",children:e("ul",{children:e("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7 text-secondary",children:"script.js"})})})]}),e("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7 text-secondary",children:"index.html"})]})})]})})}),p.includes("code2")&&e(f,{children:e("pre",{children:`import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const [pagesSubMenu, setPagesSubMenu] = useState(false);

const [treeview2, setTreeview2] = useState<string[]>(['parent']);

const toggleTreeview2 = (name: any) => {
    if (treeview2.includes(name)) {
        setTreeview2((value) => value.filter((d) => d !== name));
    } else {
        setTreeview2([...treeview2, name]);
    }
};

<ul className="font-semibold">
    <li>
        <button type="button" className={\`${t.includes("parent")?"active":""}\`} onClick={() => toggleTreeview2('parent')}>
            {treeview2.includes('parent') ? (
                <svg>...</svg>
            ) : (
                <svg>...</svg>
            )}
            Parent Node
        </button>
        <AnimateHeight duration={300} height={treeview2.includes('parent') ? 'auto' : 0} easing="none">
            <ul>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                    <button type="button" className={\`${t.includes("img")?"open":""}\`} onClick={() => toggleTreeview2('img')}>
                        {treeview2.includes('img') ? (
                            <svg>...</svg>
                        ) : (
                            <svg>...</svg>
                        )}
                        img
                    </button>
                    <ul></ul>
                </li>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                    <button type="button" className={\`${t.includes("css")?"open":""}\`} onClick={() => toggleTreeview2('css')}>
                        {treeview2.includes('css') ? (
                            <svg>...</svg>
                        ) : (
                            <svg>...</svg>
                        )}
                        css
                    </button>
                    <AnimateHeight duration={300} height={treeview2.includes('css') ? 'auto' : 0} easing="none">
                        <ul>
                            <li className="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">style.css</li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                    <button type="button" className={\`${t.includes("js")?"open":""}\`} onClick={() => toggleTreeview2('js')}>
                        {treeview2.includes('js') ? (
                            <svg>...</svg>
                        ) : (
                            <svg>...</svg>
                        )}
                        js
                    </button>
                    <AnimateHeight duration={300} height={treeview2.includes('js') ? 'auto' : 0} easing="none">
                        <ul>
                            <li className="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">script.js</li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">index.html</li>
            </ul>
        </AnimateHeight>
    </li>
</ul>`})})]})]})]})};export{F as default};
