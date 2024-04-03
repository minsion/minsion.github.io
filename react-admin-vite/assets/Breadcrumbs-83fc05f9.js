import{u as m,r as i,s as h,j as r,b as e,L as x}from"./index-8cd85ed0.js";import{C as l}from"./Highlight-f2825850.js";import{I as a}from"./IconCode-4ce6e9fe.js";import{I as s}from"./IconHome-fdf3fb3b.js";import{I as p}from"./IconBox-3b584d8d.js";import{I as u}from"./IconCpuBolt-982faa47.js";const C=()=>{const n=m();i.useEffect(()=>{n(h("Breadcrumbs"))});const[t,d]=i.useState([]),o=b=>{t.includes(b)?d(f=>f.filter(c=>c!==b)):d([...t,b])};return r("div",{children:[r("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(x,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Breadcrumbs"})})]}),r("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[r("div",{className:"panel",id:"default",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default"}),e("button",{onClick:()=>{o("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[e(a,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("ol",{className:"flex text-gray-500 font-semibold dark:text-white-dark",children:[e("li",{children:e("button",{className:"hover:text-gray-500/70 dark:hover:text-white-dark/70",children:e(s,{className:"w-4 h-4"})})}),e("li",{className:"before:content-['/'] before:px-1.5",children:e("button",{type:"button",children:"Components"})}),e("li",{className:"before:content-['/'] before:px-1.5",children:e("button",{className:"text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70",children:"UI Kit"})})]})}),t.includes("code1")&&e(l,{children:e("pre",{className:"language-xml",children:`<ol className="flex text-gray-500 font-semibold dark:text-white-dark">
    <li>
        <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
        <svg>.....</svg>
        </button>
    </li>
    <li className="before:content-['/'] before:px-1.5">
        <button type="button">Components</button>
    </li>
    <li className="before:content-['/'] before:px-1.5">
        <button className="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">UI Kit</button>
    </li>
</ol>`})})]}),r("div",{className:"panel",id:"basic",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e("button",{onClick:()=>{o("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[e(a,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("ol",{className:"flex text-gray-500 font-semibold dark:text-white-dark",children:[e("li",{children:e("button",{type:"button",children:"Components"})}),e("li",{className:"before:content-['/'] before:px-1.5",children:e("button",{className:"text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70",children:"UI Kit"})})]})}),t.includes("code2")&&e(l,{children:e("pre",{className:"language-xml",children:`<ol className="flex text-gray-500 font-semibold dark:text-white-dark">
    <li>
        <button type="button">Components</button>
    </li>
    <li className="before:content-['/'] before:px-1.5">
        <button className="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">UI Kit</button>
    </li>
</ol>`})})]}),r("div",{className:"panel",id:"arrowed",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Arrowed"}),e("button",{onClick:()=>{o("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[e(a,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("ol",{className:"flex text-primary font-semibold dark:text-white-dark",children:[e("li",{className:"bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]",children:e("button",{className:"p-1.5 ltr:pl-3 rtl:pr-3 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70",children:"Home"})}),e("li",{className:"bg-[#ebedf2] dark:bg-[#1b2e4b]",children:e("button",{className:"bg-primary text-white-light p-1.5 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary before:z-[1]",children:"Components"})}),e("li",{className:"bg-[#ebedf2] dark:bg-[#1b2e4b]",children:e("button",{className:"p-1.5 px-3 ltr:pl-6 rtl:pr-6 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70",children:"UI Kit"})})]})}),t.includes("code3")&&e(l,{children:e("pre",{className:"language-xml",children:`<ol className="flex text-primary font-semibold dark:text-white-dark">
    <li className="bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]">
        <button className="p-1.5 ltr:pl-3 rtl:pr-3 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70">
            Home
        </button>
    </li>
    <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
        <button className="bg-primary text-white-light p-1.5 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary before:z-[1]">
            Components
        </button>
    </li>
    <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
        <button className="p-1.5 px-3 ltr:pl-6 rtl:pr-6 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70">
            UI Kit
        </button>
    </li>
</ol>`})})]}),r("div",{className:"panel",id:"dotted",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dotted Seperators"}),e("button",{onClick:()=>{o("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[e(a,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("ol",{className:"flex text-gray-500 font-semibold dark:text-white-dark",children:[e("li",{children:e("button",{className:"hover:text-gray-500/70 dark:hover:text-white-dark/70",children:"Home"})}),e("li",{className:"before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4",children:e("button",{className:"text-primary",children:"Components"})}),e("li",{className:"before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4",children:e("button",{className:"hover:text-gray-500/70 dark:hover:text-white-dark/70",children:"UI Kit"})})]})}),t.includes("code4")&&e(l,{children:e("pre",{className:"language-xml",children:`<ol className="flex text-gray-500 font-semibold dark:text-white-dark">
    <li>
        <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">Home</button>
    </li>
    <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
        <button className="text-primary">Components</button>
    </li>
    <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
        <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">UI Kit</button>
    </li>
</ol>`})})]}),r("div",{className:"panel",id:"with_icon",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"With Icons"}),e("button",{onClick:()=>{o("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[e(a,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:r("ol",{className:"flex items-center flex-wrap text-gray-500 font-semibold dark:text-white-dark gap-y-4",children:[e("li",{children:e("button",{className:"p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center dark:border-0 dark:bg-[#191e3a] hover:text-gray-500/70 dark:hover:text-white-dark/70",children:e(s,{})})}),e("li",{className:"flex items-center before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4",children:r("button",{className:"p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center text-primary dark:border-0 dark:bg-[#191e3a]",children:[e(p,{className:"ltr:mr-2 rtl:ml-2 shrink-0"}),"Components"]})}),e("li",{className:"flex items-center before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4",children:r("button",{className:"p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center dark:border-0 dark:bg-[#191e3a] hover:text-gray-500/70 dark:hover:text-white-dark/70",children:[e(u,{className:"ltr:mr-2 rtl:ml-2"}),"UI Kit"]})})]})}),t.includes("code5")&&e(l,{children:e("pre",{className:"language-xml",children:`<ol className="flex items-center flex-wrap text-gray-500 font-semibold dark:text-white-dark gap-y-4">
    <li>
        <button className="p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center dark:border-0 dark:bg-[#191e3a] hover:text-gray-500/70 dark:hover:text-white-dark/70">
        <svg>.....</svg>
        </button>
    </li>
    <li className="flex items-center before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
        <button className="p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center text-primary dark:border-0 dark:bg-[#191e3a]">
        <svg>.....</svg>
            Components
        </button>
    </li>
    <li className="flex items-center before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
        <button className="p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center dark:border-0 dark:bg-[#191e3a] hover:text-gray-500/70 dark:hover:text-white-dark/70">
            <svg>.....</svg>
            UI Kit
        </button>
    </li>
</ol>`})})]})]})]})};export{C as default};
