import{u as h,r as m,s as u,j as e,b as t,L as b,k as r,l as N,x as d,g as y}from"./index-db6af04d.js";import{C as a}from"./Highlight-7cc82095.js";import{I as n}from"./IconCode-9488e58f.js";import{I as f}from"./IconInfoTriangle-8b34e268.js";const I=()=>{const c=h();m.useEffect(()=>{c(u("Alerts"))});const[l,o]=m.useState([]),s=i=>{l.includes(i)?o(p=>p.filter(g=>g!==i)):o([...l,i])};return e("div",{children:[e("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t("li",{children:t(b,{to:"/elements/alerts",className:"text-primary hover:underline",children:"Elements"})}),t("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t("span",{children:"Alerts"})})]}),e("div",{className:"pt-5 space-y-8",children:[e("div",{className:"panel",id:"default",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default Alerts"}),t("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code1"),children:e("span",{className:"flex items-center",children:[t(n,{className:"me-2"}),"Code"]})})]}),e("div",{className:"grid lg:grid-cols-2 gap-5 mb-5",children:[e("div",{className:"flex items-center p-3.5 rounded text-primary bg-primary-light dark:bg-primary-dark-light",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Primary!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"flex items-center p-3.5 rounded text-secondary bg-secondary-light dark:bg-secondary-dark-light",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Secondary!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"flex items-center p-3.5 rounded text-success bg-success-light dark:bg-success-dark-light",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Success!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"flex items-center p-3.5 rounded text-warning bg-warning-light dark:bg-warning-dark-light",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"flex items-center p-3.5 rounded text-danger bg-danger-light dark:bg-danger-dark-light",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Danger!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"flex items-center p-3.5 rounded text-info bg-info-light dark:bg-info-dark-light",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Info!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]})]}),l.includes("code1")&&t(a,{children:t("pre",{children:`<div className="flex items-center p-3.5 rounded text-primary bg-primary-light dark:bg-primary-dark-light">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Primary!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
    <svg>... </svg>
    </button>
</div>

<div className="flex items-center p-3.5 rounded text-secondary bg-secondary-light dark:bg-secondary-dark-light">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Secondary!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
    <svg>... </svg>
    </button>
</div>

<div className="flex items-center p-3.5 rounded text-success bg-success-light dark:bg-success-dark-light">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Success!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
    <svg>... </svg>
    </button>
</div>

<div className="flex items-center p-3.5 rounded text-warning bg-warning-light dark:bg-warning-dark-light">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
    <svg>... </svg>
    </button>
</div>

<div className="flex items-center p-3.5 rounded text-danger bg-danger-light dark:bg-danger-dark-light">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Danger!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
    <svg>... </svg>
    </button>
</div>

<div className="flex items-center p-3.5 rounded text-info bg-info-light dark:bg-info-dark-light">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Info!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
    <svg>... </svg>
    </button>
</div>
                                `})})]}),e("div",{className:"panel",id:"outline",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Outline Alerts"}),t("button",{type:"button",onClick:()=>{s("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(n,{className:"me-2"}),"Code"]})})]}),e("div",{className:"grid lg:grid-cols-2 gap-5 mb-5",children:[e("div",{className:"flex items-center p-3.5 rounded text-white-dark border border-primary",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-2 rtl:ml-2",children:"Primary!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"flex items-center border p-3.5 rounded text-white-dark border-danger",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-2 rtl:ml-2",children:"Danger!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]})]}),l.includes("code2")&&t(a,{children:t("pre",{children:`<div className="flex items-center p-3.5 rounded text-white-dark border border-primary">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-2 rtl:ml-2">Primary!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
<div className="flex items-center border p-3.5 rounded text-white-dark border-danger">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-2 rtl:ml-2">Danger!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
                                `})})]}),e("div",{className:"panel",id:"solid",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Solid Alerts"}),t("button",{type:"button",onClick:()=>{s("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(n,{className:"me-2"}),"Code"]})})]}),e("div",{className:"grid lg:grid-cols-2 gap-5 mb-5",children:[e("div",{className:"flex items-center p-3.5 rounded text-white bg-primary",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"flex items-center p-3.5 rounded text-white bg-warning",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Info!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]})]}),l.includes("code3")&&t(a,{children:t("pre",{children:`<div className="flex items-center p-3.5 rounded text-white bg-primary">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
<div className="flex items-center p-3.5 rounded text-white bg-warning">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Info!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
                                   `})})]}),e("div",{className:"panel",id:"icon",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Alerts with icon"}),t("button",{type:"button",onClick:()=>{s("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(n,{className:"me-2"}),"Code"]})})]}),e("div",{className:"grid lg:grid-cols-2 gap-5 mb-5",children:[e("div",{className:"relative flex items-center border p-3.5 rounded text-success bg-success-light border-success ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-success-dark-light",children:[t("span",{className:"absolute ltr:-left-11 rtl:-right-11 inset-y-0 text-white w-6 h-6 m-auto",children:t(f,{})}),e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"relative flex items-center border p-3.5 rounded text-dark bg-dark-light border-dark ltr:border-r-[64px] rtl:border-l-[64px] dark:bg-dark-dark-light dark:text-white-light dark:border-white-light/20",children:[t("span",{className:"absolute ltr:-right-11 rtl:-left-11 inset-y-0 text-white w-6 h-6 m-auto",children:t(N,{})}),e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]})]}),l.includes("code4")&&t(a,{children:t("pre",{children:`<div className="relative flex items-center border p-3.5 rounded text-success bg-success-light border-success ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-success-dark-light">
    <span className="absolute ltr:-left-11 rtl:-right-11 inset-y-0 text-white w-6 h-6 m-auto">
        <svg>...</svg>
    </span>
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
<div className="relative flex items-center border p-3.5 rounded text-dark bg-dark-light border-dark ltr:border-r-[64px] rtl:border-l-[64px] dark:bg-dark-dark-light dark:text-white-light dark:border-white-light/20">
    <span className="absolute ltr:-right-11 rtl:-left-11 inset-y-0 text-white w-6 h-6 m-auto">
        <svg>...</svg>
    </span>
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
                                   `})})]}),e("div",{className:"panel",id:"arrowed",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Arrowed Alerts"}),t("button",{type:"button",onClick:()=>{s("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(n,{className:"me-2"}),"Code"]})})]}),e("div",{className:"grid lg:grid-cols-2 gap-5 mb-5",children:[e("div",{className:"relative flex items-center border p-3.5 rounded before:absolute before:top-1/2 ltr:before:left-0 rtl:before:right-0 rtl:before:rotate-180 before:-mt-2 before:border-l-8 before:border-t-8 before:border-b-8 before:border-t-transparent before:border-b-transparent before:border-l-inherit text-primary bg-primary-light !border-primary ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-primary-dark-light",children:[t("span",{className:"absolute ltr:-left-11 rtl:-right-11 inset-y-0 text-white w-6 h-6 m-auto",children:t(d,{className:"w-6 h-6"})}),e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"relative flex items-center border p-3.5 rounded before:inline-block before:absolute before:top-1/2 ltr:before:right-0 rtl:before:left-0 rtl:before:rotate-180 before:-mt-2 before:border-r-8 before:border-t-8 before:border-b-8 before:border-t-transparent before:border-b-transparent before:border-r-inherit text-danger bg-danger-light border-danger ltr:border-r-[64px] rtl:border-l-[64px] dark:bg-danger-dark-light",children:[t("span",{className:"absolute ltr:-right-11 rtl:-left-11 inset-y-0 text-white w-6 h-6 m-auto",children:t(y,{})}),e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]})]}),l.includes("code5")&&t(a,{children:t("pre",{children:`<div className="relative flex items-center border p-3.5 rounded before:absolute before:top-1/2 ltr:before:left-0 rtl:before:right-0 rtl:before:rotate-180 before:-mt-2 before:border-l-8 before:border-t-8 before:border-b-8 before:border-t-transparent before:border-b-transparent before:border-l-inherit text-primary bg-primary-light !border-primary ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-primary-dark-light">
    <span className="absolute ltr:-left-11 rtl:-right-11 inset-y-0 text-white w-6 h-6 m-auto">
        <svg>...</svg>
    </span>
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
<div className="relative flex items-center border p-3.5 rounded before:inline-block before:absolute before:top-1/2 ltr:before:right-0 rtl:before:left-0 rtl:before:rotate-180 before:-mt-2 before:border-r-8 before:border-t-8 before:border-b-8 before:border-t-transparent before:border-b-transparent before:border-r-inherit text-danger bg-danger-light border-danger ltr:border-r-[64px] rtl:border-l-[64px] dark:bg-danger-dark-light">
    <span className="absolute ltr:-right-11 rtl:-left-11 inset-y-0 text-white w-6 h-6 m-auto">
        <svg>...</svg>
    </span>
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
                                   `})})]}),e("div",{className:"panel",id:"custom",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom Alerts"}),t("button",{type:"button",onClick:()=>{s("code6")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[t(n,{className:"me-2"}),"Code"]})})]}),e("div",{className:"grid lg:grid-cols-2 gap-5 mb-5",children:[e("div",{className:"flex items-center p-3.5 rounded text-white bg-info",children:[t("span",{className:"text-white w-6 h-6 ltr:mr-4 rtl:ml-4",children:t(d,{className:"w-6 h-6"})}),e("span",{children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"btn btn-sm bg-white text-black ltr:ml-auto rtl:mr-auto",children:"Accept"}),t("button",{type:"button",className:"ltr:ml-4 rtl:mr-4",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"flex items-center p-3.5 rounded text-white bg-gradient-to-r from-[#BD194D] to-[#004fe6]",children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]}),e("div",{className:"flex items-center p-3.5 rounded text-white bg-no-repeat bg-center bg-cover",style:{backgroundImage:'url("/assets/images/menu-heade.jpg")'},children:[e("span",{className:"ltr:pr-2 rtl:pl-2",children:[t("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"Lorem Ipsum is simply dummy text of the printing."]}),t("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto hover:opacity-80",children:t(r,{className:"w-5 h-5"})})]})]}),l.includes("code6")&&t(a,{children:t("pre",{children:`<div className="flex items-center p-3.5 rounded text-white bg-info">
    <span className="text-white w-6 h-6 ltr:mr-4 rtl:ml-4">
        <svg>...</svg>
    </span>
    <span>
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="btn btn-sm bg-white text-black ltr:ml-auto rtl:mr-auto">
        Accept
    </button>
    <button type="button" className="ltr:ml-4 rtl:mr-4">
        <svg>...</svg>
    </button>
</div>

<div className="flex items-center p-3.5 rounded text-white bg-gradient-to-r from-[#BD194D] to-[#004fe6]">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>

<div className="flex items-center p-3.5 rounded text-white bg-no-repeat bg-center bg-cover" style={{ backgroundImage: \`url("/assets/images/menu-heade.jpg")\`}}>
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>`})})]})]})]})};export{I as default};
