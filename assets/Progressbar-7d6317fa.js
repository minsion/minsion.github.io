import{u as f,r as i,s as m,b as e,j as a,L as g}from"./index-08323c31.js";import{C as r}from"./Highlight-9f01d9da.js";import{I as s}from"./IconCode-e2412410.js";const x=()=>{const c=f();i.useEffect(()=>{c(m("Progressbar"))});const[d,n]=i.useState([]),l=t=>{d.includes(t)?n(u=>u.filter(h=>h!==t)):n([...d,t])};return e("div",{children:a("div",{children:[a("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(g,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Progress Bar"})})]}),a("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[a("div",{className:"panel",id:"basic",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e("button",{onClick:()=>{l("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),a("div",{className:"mb-5 space-y-5",children:[e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-primary h-4 rounded-full w-3/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-secondary h-4 rounded-full w-4/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-success h-4 rounded-full w-5/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-warning h-4 rounded-full w-6/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-danger h-4 rounded-full w-7/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-info h-4 rounded-full w-8/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-black dark:bg-dark h-4 rounded-full w-9/12"})})]}),d.includes("code1")&&e(r,{children:e("pre",{children:`<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-primary h-4 rounded-full w-3/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-secondary h-4 rounded-full w-4/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-success h-4 rounded-full w-5/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-warning h-4 rounded-full w-6/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-danger h-4 rounded-full w-7/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-info h-4 rounded-full w-8/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-black dark:bg-dark h-4 rounded-full w-9/12"></div>
</div>`})})]}),a("div",{className:"panel",id:"gradient",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Gradient"}),e("button",{onClick:()=>{l("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),a("div",{className:"mb-5 space-y-5",children:[e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-gradient-to-r from-[#0081ff] to-[#0045ff] h-4 rounded-full w-3/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-gradient-to-r from-[#04befe] to-[#4481eb] h-4 rounded-full w-4/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-gradient-to-r from-[#3cba92] to-[#0ba360] h-4 rounded-full w-5/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-gradient-to-r from-[#f09819] to-[#ff5858] h-4 rounded-full w-6/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-gradient-to-r from-[#d09693] to-[#c71d6f] h-4 rounded-full w-7/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-gradient-to-r from-[#7579ff] to-[#b224ef] h-4 rounded-full w-8/12"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-gradient-to-r from-[#2b5876] to-[#4e4376] h-4 rounded-full w-9/12"})})]}),d.includes("code2")&&e(r,{children:e("pre",{children:`<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#0081ff] to-[#0045ff] h-4 rounded-full w-3/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#04befe] to-[#4481eb] h-4 rounded-full w-4/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#3cba92] to-[#0ba360] h-4 rounded-full w-5/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#f09819] to-[#ff5858] h-4 rounded-full w-6/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#d09693] to-[#c71d6f] h-4 rounded-full w-7/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#7579ff] to-[#b224ef] h-4 rounded-full w-8/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#2b5876] to-[#4e4376] h-4 rounded-full w-9/12"></div>
</div>`})})]}),a("div",{className:"panel",id:"striped",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Striped"}),e("button",{onClick:()=>{l("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5 space-y-5",children:e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-primary h-4 rounded-full w-3/12",style:{backgroundImage:"linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",backgroundSize:"1rem 1rem"}})})}),d.includes("code3")&&e(r,{children:e("pre",{children:`<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div
        className="bg-primary h-4 rounded-full w-3/12"
        style={{
            backgroundImage:
                'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
            backgroundSize: '1rem 1rem',
        }}
    ></div>
</div>`})})]}),a("div",{className:"panel",id:"animated",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Animated"}),e("button",{onClick:()=>{l("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5 space-y-5",children:e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-primary h-4 rounded-full w-6/12 animated-progress",style:{backgroundImage:"linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",backgroundSize:"1rem 1rem"}})})}),d.includes("code4")&&e(r,{children:e("pre",{children:`<div
    className="bg-primary h-4 rounded-full w-6/12 animated-progress"
    style={{
        backgroundImage:
            'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
        backgroundSize: '1rem 1rem',
    }}
></div>`})})]}),a("div",{className:"panel",id:"labeled",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Labels"}),e("button",{onClick:()=>{l("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),a("div",{className:"mb-5 space-y-5",children:[e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:e("div",{className:"bg-info h-4 rounded-full w-4/5 text-center text-white text-xs",children:"80%"})}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full",children:a("div",{className:"bg-danger h-4 rounded-full w-11/12 text-center text-white flex justify-between items-center px-2 text-xs",children:[e("span",{children:"PHP"}),e("span",{children:"90%"})]})})]}),d.includes("code5")&&e(r,{children:e("pre",{children:`<div className="mb-5 space-y-5">
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
        <div className="bg-info h-4 rounded-full w-4/5 text-center text-white text-xs">80%</div>
    </div>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
        <div className="bg-danger h-4 rounded-full w-11/12 text-center text-white flex justify-between items-center px-2 text-xs">
            <span>PHP</span>
            <span>90%</span>
        </div>
    </div>
</div>`})})]}),a("div",{className:"panel",id:"stacked",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Stacked"}),e("button",{onClick:()=>{l("code6")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),a("div",{className:"mb-5 space-y-5",children:[a("div",{className:"space-y-2",children:[e("h3",{className:"text-base",children:"Basic"}),a("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex",children:[e("div",{className:"bg-success h-4 ltr:rounded-l-full rtl:rounded-r-full w-2/12 text-center text-white text-xs"}),e("div",{className:"bg-warning h-4 w-4/12 text-center text-white text-xs"}),e("div",{className:"bg-danger h-4 ltr:rounded-r-full rtl:rounded-l-full w-3/12 text-center text-white text-xs"})]})]}),a("div",{className:"space-y-2",children:[e("h3",{className:"text-base",children:"Striped"}),a("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex",children:[e("div",{className:"bg-primary h-4 ltr:rounded-l-full rtl:rounded-r-full w-2/12 text-center text-white text-xs",style:{backgroundImage:"linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",backgroundSize:"1rem 1rem"}}),e("div",{className:"bg-success h-4 w-4/12 text-center text-white text-xs",style:{backgroundImage:"linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",backgroundSize:"1rem 1rem"}}),e("div",{className:"bg-info h-4 ltr:rounded-r-full rtl:rounded-l-full w-3/12 text-center text-white text-xs",style:{backgroundImage:"linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",backgroundSize:"1rem 1rem"}})]})]}),a("div",{className:"space-y-2",children:[e("h3",{className:"text-base",children:"Animated"}),a("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex",children:[e("div",{className:"bg-info h-4 ltr:rounded-l-full rtl:rounded-r-full w-2/12 animated-progress text-center text-white text-xs",style:{backgroundImage:"linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",backgroundSize:"1rem 1rem"}}),e("div",{className:"bg-secondary h-4 w-4/12 animated-progress text-center text-white text-xs",style:{backgroundImage:"linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",backgroundSize:"1rem 1rem"}}),e("div",{className:"bg-primary h-4 ltr:rounded-r-full rtl:rounded-l-full w-3/12 animated-progress text-center text-white text-xs",style:{backgroundImage:"linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",backgroundSize:"1rem 1rem"}})]})]})]}),d.includes("code6")&&e(r,{children:e("pre",{children:`<div className="space-y-2">
    <h3 className="text-base">Basic</h3>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-success h-4 ltr:rounded-l-full rtl:rounded-r-full w-2/12 text-center text-white text-xs"></div>
        <div className="bg-warning h-4 w-4/12 text-center text-white text-xs"></div>
        <div className="bg-danger h-4 ltr:rounded-r-full rtl:rounded-l-full w-3/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base">Striped</h3>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div
            className="bg-primary h-4 ltr:rounded-l-full rtl:rounded-r-full w-2/12 text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
        <div
            className="bg-success h-4 w-4/12 text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
        <div
            className="bg-info h-4 ltr:rounded-r-full rtl:rounded-l-full w-3/12 text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base">Animated</h3>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div
            className="bg-info h-4 ltr:rounded-l-full rtl:rounded-r-full w-2/12 animated-progress text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
        <div
            className="bg-secondary h-4 w-4/12 animated-progress text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
        <div
            className="bg-primary h-4 ltr:rounded-r-full rtl:rounded-l-full w-3/12 animated-progress text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
    </div>
</div>`})})]}),a("div",{className:"panel lg:row-span-2 lg:row-start-3",id:"sizes",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Progress Bars Different Sizes"}),e("button",{onClick:()=>{l("code7")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),a("div",{className:"mb-5 space-y-5",children:[a("div",{className:"space-y-1",children:[e("h3",{className:"text-primary",children:"Default Progress Bar Size"}),e("div",{className:"w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex",children:e("div",{className:"bg-primary h-4 rounded-full rounded-bl-full w-3/12 text-center text-white text-xs"})})]}),a("div",{className:"space-y-2",children:[e("h3",{className:"text-base text-success",children:"Progress-sm"}),e("div",{className:"w-full h-1 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex",children:e("div",{className:"bg-success h-1 rounded-full rounded-bl-full w-5/12 text-center text-white text-xs"})})]}),a("div",{className:"space-y-2",children:[e("h3",{className:"text-base text-warning",children:"Progress-md"}),e("div",{className:"w-full h-2.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex",children:e("div",{className:"bg-warning h-2.5 rounded-full rounded-bl-full w-7/12 text-center text-white text-xs"})})]}),a("div",{className:"space-y-2",children:[e("h3",{className:"text-base text-info",children:"Progress-lg"}),e("div",{className:"w-full h-5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex",children:e("div",{className:"bg-info h-5 rounded-full rounded-bl-full w-8/12 text-center text-white text-xs"})})]}),a("div",{className:"space-y-2",children:[e("h3",{className:"text-base text-danger",children:"Progress-xl"}),e("div",{className:"w-full h-6 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex",children:e("div",{className:"bg-danger h-6 rounded-full rounded-bl-full w-10/12 text-center text-white text-xs"})})]})]}),d.includes("code7")&&e(r,{children:e("pre",{children:`<div className="space-y-1">
    <h3 className="text-primary">Default Progress Bar Size</h3>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-primary h-4 rounded-full rounded-bl-full w-3/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base text-success">Progress-sm</h3>
    <div className="w-full h-1 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-success h-1 rounded-full rounded-bl-full w-5/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base text-warning">Progress-md</h3>
    <div className="w-full h-2.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-warning h-2.5 rounded-full rounded-bl-full w-7/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base text-info">Progress-lg</h3>
    <div className="w-full h-5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-info h-5 rounded-full rounded-bl-full w-8/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base text-danger">Progress-xl</h3>
    <div className="w-full h-6 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-danger h-6 rounded-full rounded-bl-full w-10/12 text-center text-white text-xs"></div>
    </div>
</div>`})})]})]})]})})};export{x as default};
