import{u as C,r as u,s as $,j as t,b as e,L as H,d as s,A as d}from"./index-21dbdbc4.js";import{C as b}from"./Highlight-44bb2925.js";import{I}from"./IconBell-41337b28.js";import{I as p}from"./IconCode-7061e36d.js";import{I as L,a as G}from"./IconLayout-2e00d082.js";import{I as S}from"./IconBox-027e7fdf.js";const O=()=>{const y=C();u.useEffect(()=>{y($("Accordians"))});const[c,x]=u.useState([]),m=o=>{c.includes(o)?x(l=>l.filter(A=>A!==o)):x([...c,o])},[i,k]=u.useState("1"),h=o=>{k(l=>l===o?"":o)},[a,N]=u.useState("1"),g=o=>{N(l=>l===o?"":o)},[r,w]=u.useState("1"),v=o=>{w(l=>l===o?"":o)},[n,q]=u.useState("1"),f=o=>{q(l=>l===o?"":o)};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(H,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Accordians"})})]}),t("div",{className:"pt-5 space-y-8",children:[t("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e(I,{})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://www.npmjs.com/package/react-animate-height",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-animate-height"})]}),t("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel",id:"basic",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e("button",{onClick:()=>m("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(p,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"space-y-2 font-semibold",children:[t("div",{className:"border border-[#d3d3d3] rounded dark:border-[#1b2e4b]",children:[t("button",{type:"button",className:`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${i==="1"?"!text-primary":""}`,onClick:()=>h("1"),children:["Collapsible Group Item #1",e("div",{className:`ltr:ml-auto rtl:mr-auto ${i==="1"?"rotate-180":""}`,children:e(s,{})})]}),e("div",{children:e(d,{duration:300,height:i==="1"?"auto":0,children:t("div",{className:"space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})})})]}),t("div",{className:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded",children:[t("button",{type:"button",className:`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${i==="2"?"!text-primary":""}`,onClick:()=>h("2"),children:["Collapsible Group Item #2",e("div",{className:`ltr:ml-auto rtl:mr-auto ${i==="2"?"rotate-180":""}`,children:e(s,{})})]}),e("div",{children:e(d,{duration:300,height:i==="2"?"auto":0,children:e("div",{className:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",children:t("ul",{className:"space-y-1",children:[e("li",{children:e("button",{type:"button",children:"Apple"})}),e("li",{children:e("button",{type:"button",children:"Orange"})}),e("li",{children:e("button",{type:"button",children:"Banana"})}),e("li",{children:e("button",{type:"button",children:"list"})})]})})})})]}),t("div",{className:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded",children:[t("button",{type:"button",className:`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${i==="3"?"!text-primary":""}`,onClick:()=>h("3"),children:["Collapsible Group Item #3",e("div",{className:`ltr:ml-auto rtl:mr-auto ${i==="3"?"rotate-180":""}`,children:e(s,{})})]}),e("div",{children:e(d,{duration:300,height:i==="3"?"auto":0,children:t("div",{className:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",children:[e("p",{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}),e("button",{type:"button",className:"btn btn-primary mt-4",children:"Accept"})]})})})]})]})}),c.includes("code1")&&e(b,{children:e("pre",{className:"language-typescript",children:`import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const [active, setActive] = useState<string>('1');
    const togglePara = (value: string) => {
        setActive((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

<div className="mb-5">
    <div className="space-y-2 font-semibold">
        <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${i==="1"?"!text-primary":""}\`}
                onClick={() => togglePara('1')}
            >
                Collapsible Group Item #1
                <div className={\`ltr:ml-auto rtl:mr-auto ${i==="1"?"rotate-180":""}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active === '1' ? 'auto' : 0}>
                    <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${i==="2"?"!text-primary":""}\`}
                onClick={() => togglePara('2')}
            >
                Collapsible Group Item #2
                <div className={\`ltr:ml-auto rtl:mr-auto ${i==="2"?"rotate-180":""}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active === '2' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <ul className="space-y-1">
                            <li>
                                <button type="button">Apple</button>
                            </li>
                            <li>
                                <button type="button">Orange</button>
                            </li>
                            <li>
                                <button type="button">Banana</button>
                            </li>
                            <li>
                                <button type="button">list</button>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${i==="3"?"!text-primary":""}\`}
                onClick={() => togglePara('3')}
            >
                Collapsible Group Item #3
                <div className={\`ltr:ml-auto rtl:mr-auto ${i==="3"?"rotate-180":""}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active === '3' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </p>
                        <button type="button" className="btn btn-primary mt-4">
                            Accept
                        </button>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Without Spacing"}),e("button",{className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>m("code2"),children:t("span",{className:"flex items-center",children:[e(p,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"border border-[#d3d3d3] dark:border-[#3b3f5c] rounded font-semibold",children:[t("div",{className:"border-b border-[#d3d3d3] dark:border-[#3b3f5c]",children:[t("button",{type:"button",className:` ${a==="1"?"!text-primary":""} p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]`,onClick:()=>g("1"),children:["Collapsible Group Item #1",e("div",{className:`${a==="1"?"rotate-180":""} ltr:ml-auto rtl:mr-auto`,children:e(s,{})})]}),e("div",{children:e(d,{duration:300,height:a==="1"?"auto":0,children:t("div",{className:"space-y-2 p-4 text-white-dark text-[13px]",children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})})})]}),t("div",{className:"border-b border-[#d3d3d3] dark:border-[#3b3f5c]",children:[t("button",{type:"button",className:` ${a==="2"?"!text-primary":""} p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]`,onClick:()=>g("2"),children:["Collapsible Group Item #2",e("div",{className:`${a==="2"?"rotate-180":""} ltr:ml-auto rtl:mr-auto`,children:e(s,{})})]}),e("div",{children:e(d,{duration:300,height:a==="2"?"auto":0,children:e("div",{className:"p-4 text-[13px]",children:t("ul",{className:"space-y-1",children:[e("li",{children:e("button",{type:"button",children:"Apple"})}),e("li",{children:e("button",{type:"button",children:"Orange"})}),e("li",{children:e("button",{type:"button",children:"Banana"})}),e("li",{children:e("button",{type:"button",children:"list"})})]})})})})]}),t("div",{children:[t("button",{type:"button",className:` ${a==="3"?"!text-primary":""} p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]`,onClick:()=>g("3"),children:["Collapsible Group Item #3",e("div",{className:`${a==="3"?"rotate-180":""} ltr:ml-auto rtl:mr-auto`,children:e(s,{})})]}),e("div",{children:e(d,{duration:300,height:a==="3"?"auto":0,children:t("div",{className:"p-4 text-[13px]",children:[e("p",{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}),e("button",{type:"button",className:"btn btn-primary mt-4",children:"Accept"})]})})})]})]})}),c.includes("code2")&&e(b,{children:e("pre",{className:"language-typescript",children:`import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const [active1, setActive1] = useState<string>('1');
    const togglePara1 = (value: string) => {
        setActive1((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

<div className="mb-5">
    <div className="border border-[#d3d3d3] dark:border-[#3b3f5c] rounded font-semibold">
        <div className="border-b border-[#d3d3d3] dark:border-[#3b3f5c]">
            <button
                type="button"
                className={\`${a==="1"?"!text-primary":""} p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]\`}
                onClick={() => togglePara1('1')}
            >
                Collapsible Group Item #1
                <div className={\`${a==="1"?"rotate-180":""} ltr:ml-auto rtl:mr-auto\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active1 === '1' ? 'auto' : 0}>
                    <div className="space-y-2 p-4 text-white-dark text-[13px]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimateHeight>
            </div>
        </div>

        <div className="border-b border-[#d3d3d3] dark:border-[#3b3f5c]">
            <button
                type="button"
                className={\`${a==="2"?"!text-primary":""} p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]\`}
                onClick={() => togglePara1('2')}
            >
                Collapsible Group Item #2
                <div className={\`${a==="2"?"rotate-180":""} ltr:ml-auto rtl:mr-auto\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active1 === '2' ? 'auto' : 0}>
                    <div className="p-4 text-[13px]">
                        <ul className="space-y-1">
                            <li>
                                <button type="button">Apple</button>
                            </li>
                            <li>
                                <button type="button">Orange</button>
                            </li>
                            <li>
                                <button type="button">Banana</button>
                            </li>
                            <li>
                                <button type="button">list</button>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </div>
        </div>

        <div>
            <button
                type="button"
                className={\`${a==="3"?"!text-primary":""} p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]\`}
                onClick={() => togglePara1('3')}
            >
                Collapsible Group Item #3
                <div className={\`${a==="3"?"rotate-180":""} ltr:ml-auto rtl:mr-auto\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active1 === '3' ? 'auto' : 0}>
                    <div className="p-4 text-[13px]">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </p>
                        <button type="button" className="btn btn-primary mt-4">
                            Accept
                        </button>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Icons"}),e("button",{onClick:()=>m("code3"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(p,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"space-y-2 font-semibold",children:[t("div",{className:"border border-[#d3d3d3] rounded dark:border-[#1b2e4b]",children:[t("button",{type:"button",className:`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${r==="1"?"!text-primary":""}`,onClick:()=>v("1"),children:[e(L,{className:"ltr:mr-2 rtl:ml-2 text-primary shrink-0"}),"Collapsible Group Item #1",e("div",{className:`ltr:ml-auto rtl:mr-auto ${r==="1"?"rotate-180":""}`,children:e(s,{})})]}),e("div",{children:e(d,{duration:300,height:r==="1"?"auto":0,children:t("div",{className:"space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})})})]}),t("div",{className:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded",children:[t("button",{type:"button",className:`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${r==="2"?"!text-primary":""}`,onClick:()=>v("2"),children:[e(S,{className:"ltr:mr-2 rtl:ml-2 text-primary shrink-0"}),"Collapsible Group Item #2",e("div",{className:`ltr:ml-auto rtl:mr-auto ${r==="2"?"rotate-180":""}`,children:e(s,{})})]}),e("div",{children:e(d,{duration:300,height:r==="2"?"auto":0,children:e("div",{className:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",children:t("ul",{className:"space-y-1",children:[e("li",{children:e("button",{type:"button",children:"Apple"})}),e("li",{children:e("button",{type:"button",children:"Orange"})}),e("li",{children:e("button",{type:"button",children:"Banana"})}),e("li",{children:e("button",{type:"button",children:"list"})})]})})})})]}),t("div",{className:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded",children:[t("button",{type:"button",className:`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${r==="3"?"!text-primary":""}`,onClick:()=>v("3"),children:[e(G,{className:"ltr:mr-2 rtl:ml-2 text-primary shrink-0"}),"Collapsible Group Item #3",e("div",{className:`ltr:ml-auto rtl:mr-auto ${r==="3"?"rotate-180":""}`,children:e(s,{})})]}),e("div",{children:e(d,{duration:300,height:r==="3"?"auto":0,children:t("div",{className:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",children:[e("p",{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}),e("button",{type:"button",className:"btn btn-primary mt-4",children:"Accept"})]})})})]})]})}),c.includes("code3")&&e(b,{children:e("pre",{className:"language-typescript",children:`import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const [active2, setActive2] = useState<string>('1');
    const togglePara2 = (value: string) => {
        setActive2((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

<div className="mb-5">
    <div className="space-y-2 font-semibold">
        <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${r==="1"?"!text-primary":""}\`}
                onClick={() => togglePara2('1')}
            >
                <svg>...</svg>
                Collapsible Group Item #1
                <div className={\`ltr:ml-auto rtl:mr-auto ${r==="1"?"rotate-180":""}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active2 === '1' ? 'auto' : 0}>
                    <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${r==="2"?"!text-primary":""}\`}
                onClick={() => togglePara2('2')}
            >
                <svg>...</svg>
                Collapsible Group Item #2
                <div className={\`ltr:ml-auto rtl:mr-auto ${r==="2"?"rotate-180":""}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active2 === '2' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <ul className="space-y-1">
                            <li>
                                <button type="button">Apple</button>
                            </li>
                            <li>
                                <button type="button">Orange</button>
                            </li>
                            <li>
                                <button type="button">Banana</button>
                            </li>
                            <li>
                                <button type="button">list</button>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${r==="3"?"!text-primary":""}\`}
                onClick={() => togglePara2('3')}
            >
                <svg>...</svg>
                Collapsible Group Item #3
                <div className={\`ltr:ml-auto rtl:mr-auto ${r==="3"?"rotate-180":""}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active2 === '3' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </p>
                        <button type="button" className="btn btn-primary mt-4">
                            Accept
                        </button>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"No Icons"}),e("button",{onClick:()=>m("code4"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(p,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"space-y-2 font-semibold",children:[t("div",{className:"border border-[#d3d3d3] rounded dark:border-[#1b2e4b]",children:[e("button",{type:"button",className:`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${n==="1"?"!text-primary":""}`,onClick:()=>f("1"),children:"Collapsible Group Item #1"}),e("div",{children:e(d,{duration:300,height:n==="1"?"auto":0,children:t("div",{className:"space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})})})]}),t("div",{className:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded",children:[e("button",{type:"button",className:`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${n==="2"?"!text-primary":""}`,onClick:()=>f("2"),children:"Collapsible Group Item #2"}),e("div",{children:e(d,{duration:300,height:n==="2"?"auto":0,children:e("div",{className:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",children:t("ul",{className:"space-y-1",children:[e("li",{children:e("button",{type:"button",children:"Apple"})}),e("li",{children:e("button",{type:"button",children:"Orange"})}),e("li",{children:e("button",{type:"button",children:"Banana"})}),e("li",{children:e("button",{type:"button",children:"list"})})]})})})})]}),t("div",{className:"border border-[#d3d3d3] dark:border-[#1b2e4b] rounded",children:[e("button",{type:"button",className:`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${n==="3"?"!text-primary":""}`,onClick:()=>f("3"),children:"Collapsible Group Item #3"}),e("div",{children:e(d,{duration:300,height:n==="3"?"auto":0,children:t("div",{className:"p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",children:[e("p",{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."}),e("button",{type:"button",className:"btn btn-primary mt-4",children:"Accept"})]})})})]})]})}),c.includes("code4")&&e(b,{children:e("pre",{className:"language-typescript",children:`import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const [active3, setActive3] = useState<string>('1');
    const togglePara3 = (value: string) => {
        setActive3((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

<div className="mb-5">
    <div className="space-y-2 font-semibold">
        <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${n==="1"?"!text-primary":""}\`}
                onClick={() => togglePara3('1')}
            >
                Collapsible Group Item #1
            </button>
            <div>
                <AnimateHeight duration={300} height={active3 === '1' ? 'auto' : 0}>
                    <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${n==="2"?"!text-primary":""}\`}
                onClick={() => togglePara3('2')}
            >
                Collapsible Group Item #2
            </button>
            <div>
                <AnimateHeight duration={300} height={active3 === '2' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <ul className="space-y-1">
                            <li>
                                <button type="button">Apple</button>
                            </li>
                            <li>
                                <button type="button">Orange</button>
                            </li>
                            <li>
                                <button type="button">Banana</button>
                            </li>
                            <li>
                                <button type="button">list</button>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] ${n==="3"?"!text-primary":""}\`}
                onClick={() => togglePara3('3')}
            >
                Collapsible Group Item #3
            </button>
            <div>
                <AnimateHeight duration={300} height={active3 === '3' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </p>
                        <button type="button" className="btn btn-primary mt-4">
                            Accept
                        </button>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    </div>
</div>`})})]})]})]})]})};export{O as default};
