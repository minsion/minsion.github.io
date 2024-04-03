import{u as p,r as d,s as h,j as a,b as e,L as x}from"./index-08323c31.js";import{C as c}from"./Highlight-9f01d9da.js";import{I as s}from"./IconCode-e2412410.js";const N=()=>{const t=p();d.useEffect(()=>{t(h("Checkbox & Radio"))});const[l,r]=d.useState([]),n=i=>{l.includes(i)?r(o=>o.filter(m=>m!==i)):r([...l,i])};return a("div",{children:[a("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(x,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Checkbox and Radio"})})]}),a("div",{className:"pt-5 space-y-8",children:[a("div",{className:"space-y-8",id:"checkbox",children:[e("h4",{className:"badge bg-primary inline-block hover:top-0 text-base mb-0",children:"Checkbox"}),a("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code1"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox",defaultChecked:!0}),e("span",{children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-success"}),e("span",{children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-secondary"}),e("span",{children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-danger"}),e("span",{children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-warning"}),e("span",{children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-info"}),e("span",{children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-dark"}),e("span",{children:"Dark"})]})})]})}),l.includes("code1")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="checkbox" className="form-checkbox" defaultChecked />
    <span>Primary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-success" />
    <span>Success</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-secondary" />
    <span>Secondary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-danger" />
    <span>Danger</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-warning" />
    <span>Warning</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-info" />
    <span>Info</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-dark" />
    <span>Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default Rounded"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code2"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox rounded-full",defaultChecked:!0}),e("span",{children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-success rounded-full"}),e("span",{children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-secondary rounded-full"}),e("span",{children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-danger rounded-full"}),e("span",{children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-warning rounded-full"}),e("span",{children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-info rounded-full"}),e("span",{children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-dark rounded-full"}),e("span",{children:"Dark"})]})})]})}),l.includes("code2")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="checkbox" className="form-checkbox rounded-full" defaultChecked />
    <span>Primary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-success rounded-full" />
    <span>Success</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-secondary rounded-full" />
    <span>Secondary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-danger rounded-full" />
    <span>Danger</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-warning rounded-full" />
    <span>Warning</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-info rounded-full" />
    <span>Info</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-dark rounded-full" />
    <span>Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Outline"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code3"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-primary",defaultChecked:!0}),e("span",{children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-success"}),e("span",{children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-secondary"}),e("span",{children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-danger"}),e("span",{children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-warning"}),e("span",{children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-info"}),e("span",{children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-dark"}),e("span",{children:"Dark"})]})})]})}),l.includes("code3")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-primary" defaultChecked />
    <span>Primary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-success" />
    <span>Success</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-secondary" />
    <span>Secondary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-danger" />
    <span>Danger</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-warning" />
    <span>Warning</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-info" />
    <span>Info</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-dark" />
    <span>Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Outline Rounded"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code4"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-primary rounded-full",defaultChecked:!0}),e("span",{children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-success rounded-full"}),e("span",{children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-secondary rounded-full"}),e("span",{children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-danger rounded-full"}),e("span",{children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-warning rounded-full"}),e("span",{children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-info rounded-full"}),e("span",{children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-dark rounded-full"}),e("span",{children:"Dark"})]})})]})}),l.includes("code4")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-primary rounded-full" defaultChecked />
    <span>Primary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-success rounded-full" />
    <span>Success</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-secondary rounded-full" />
    <span>Secondary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-danger rounded-full" />
    <span>Danger</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-warning rounded-full" />
    <span>Warning</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-info rounded-full" />
    <span>Info</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-dark rounded-full" />
    <span>Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default Text Color"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code5"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"grid grid-cols-2 gap-4",children:[a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox peer",defaultChecked:!0}),e("span",{className:"peer-checked:text-primary",children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-success peer"}),e("span",{className:"peer-checked:text-success",children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-secondary peer"}),e("span",{className:"peer-checked:text-secondary",children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-danger peer"}),e("span",{className:"peer-checked:text-danger",children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-warning peer"}),e("span",{className:"peer-checked:text-warning",children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-info peer"}),e("span",{className:"peer-checked:text-info",children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-dark peer"}),e("span",{className:"peer-checked:text-dark",children:"Dark"})]})})]}),a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-primary peer",defaultChecked:!0}),e("span",{className:"peer-checked:text-primary",children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-success peer"}),e("span",{className:"peer-checked:text-success",children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-secondary peer"}),e("span",{className:"peer-checked:text-secondary",children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-danger peer"}),e("span",{className:"peer-checked:text-danger",children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-warning peer"}),e("span",{className:"peer-checked:text-warning",children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-info peer"}),e("span",{className:"peer-checked:text-info",children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-dark peer"}),e("span",{className:"peer-checked:text-dark",children:"Dark"})]})})]})]})}),l.includes("code5")&&e(c,{children:e("pre",{className:"language-xml",children:`{/*default*/}
<label className="inline-flex">
    <input type="checkbox" className="form-checkbox peer" defaultChecked />
    <span className="peer-checked:text-primary">Primary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-success peer" />
    <span className="peer-checked:text-success">Success</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-secondary peer" />
    <span className="peer-checked:text-secondary">Secondary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-danger peer" />
    <span className="peer-checked:text-danger">Danger</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-warning peer" />
    <span className="peer-checked:text-warning">Warning</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-info peer" />
    <span className="peer-checked:text-info">Info</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-dark peer" />
    <span className="peer-checked:text-dark">Dark</span>
</label>

{/*outline*/}
<div>
<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-primary peer" defaultChecked />
    <span className="peer-checked:text-primary">Primary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-success peer" />
    <span className="peer-checked:text-success">Success</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-secondary peer" />
    <span className="peer-checked:text-secondary">Secondary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-danger peer" />
    <span className="peer-checked:text-danger">Danger</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-warning peer" />
    <span className="peer-checked:text-warning">Warning</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-info peer" />
    <span className="peer-checked:text-info">Info</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-dark peer" />
    <span className="peer-checked:text-dark">Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Rounded Text Color"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code6"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"grid grid-cols-2 gap-4",children:[a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox rounded-full peer",defaultChecked:!0}),e("span",{className:"peer-checked:text-primary",children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-success rounded-full peer"}),e("span",{className:"peer-checked:text-success",children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-secondary rounded-full peer"}),e("span",{className:"peer-checked:text-secondary",children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-danger rounded-full peer"}),e("span",{className:"peer-checked:text-danger",children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-warning rounded-full peer"}),e("span",{className:"peer-checked:text-warning",children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-info rounded-full peer"}),e("span",{className:"peer-checked:text-info",children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox text-dark rounded-full peer"}),e("span",{className:"peer-checked:text-dark",children:"Dark"})]})})]}),a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-primary rounded-full peer",defaultChecked:!0}),e("span",{className:"peer-checked:text-primary",children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-success rounded-full peer"}),e("span",{className:"peer-checked:text-success",children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-secondary rounded-full peer"}),e("span",{className:"peer-checked:text-secondary",children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-danger rounded-full peer"}),e("span",{className:"peer-checked:text-danger",children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-warning rounded-full peer"}),e("span",{className:"peer-checked:text-warning",children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-info rounded-full peer"}),e("span",{className:"peer-checked:text-info",children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"checkbox",className:"form-checkbox outline-dark rounded-full peer"}),e("span",{className:"peer-checked:text-dark",children:"Dark"})]})})]})]})}),l.includes("code6")&&e(c,{children:e("pre",{className:"language-xml",children:`{/*default*/}
<label className="inline-flex">
    <input type="checkbox" className="form-checkbox rounded-full peer" defaultChecked />
    <span className="peer-checked:text-primary">Primary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-success rounded-full peer" />
    <span className="peer-checked:text-success">Success</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-secondary rounded-full peer" />
    <span className="peer-checked:text-secondary">Secondary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-danger rounded-full peer" />
    <span className="peer-checked:text-danger">Danger</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-warning rounded-full peer" />
    <span className="peer-checked:text-warning">Warning</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-info rounded-full peer" />
    <span className="peer-checked:text-info">Info</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox text-dark rounded-full peer" />
    <span className="peer-checked:text-dark">Dark</span>
</label>

{/*outline*/}
<div>
<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-primary rounded-full peer" defaultChecked />
    <span className="peer-checked:text-primary">Primary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-success rounded-full peer" />
    <span className="peer-checked:text-success">Success</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-secondary rounded-full peer" />
    <span className="peer-checked:text-secondary">Secondary</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-danger rounded-full peer" />
    <span className="peer-checked:text-danger">Danger</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-warning rounded-full peer" />
    <span className="peer-checked:text-warning">Warning</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-info rounded-full peer" />
    <span className="peer-checked:text-info">Info</span>
</label>

<label className="inline-flex">
    <input type="checkbox" className="form-checkbox outline-dark rounded-full peer" />
    <span className="peer-checked:text-dark">Dark</span>
</label>`})})]})]})]}),a("div",{className:"space-y-8",id:"radio",children:[e("h4",{className:"badge bg-primary inline-block hover:top-0 text-base mb-0",children:"Radio"}),a("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code7"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_radio",className:"form-radio",defaultChecked:!0}),e("span",{children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_radio",className:"form-radio text-success"}),e("span",{children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_radio",className:"form-radio text-secondary"}),e("span",{children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_radio",className:"form-radio text-danger"}),e("span",{children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_radio",className:"form-radio text-warning"}),e("span",{children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_radio",className:"form-radio text-info"}),e("span",{children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_radio",className:"form-radio text-dark"}),e("span",{children:"Dark"})]})})]})}),l.includes("code7")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="radio" name="default_radio" className="form-radio" defaultChecked />
    <span>Primary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_radio" className="form-radio text-success" />
    <span>Success</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_radio" className="form-radio text-secondary" />
    <span>Secondary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_radio" className="form-radio text-danger" />
    <span>Danger</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_radio" className="form-radio text-warning" />
    <span>Warning</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_radio" className="form-radio text-info" />
    <span>Info</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_radio" className="form-radio text-dark" />
    <span>Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Square"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code8"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_radio",className:"form-radio rounded-none",defaultChecked:!0}),e("span",{children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_radio",className:"form-radio text-success rounded-none"}),e("span",{children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_radio",className:"form-radio text-secondary rounded-none"}),e("span",{children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_radio",className:"form-radio text-danger rounded-none"}),e("span",{children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_radio",className:"form-radio text-warning rounded-none"}),e("span",{children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_radio",className:"form-radio text-info rounded-none"}),e("span",{children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_radio",className:"form-radio text-dark rounded-none"}),e("span",{children:"Dark"})]})})]})}),l.includes("code8")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="radio" name="square_radio" className="form-radio rounded-none" defaultChecked />
    <span>Primary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_radio" className="form-radio text-success rounded-none" />
    <span>Success</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_radio" className="form-radio text-secondary rounded-none" />
    <span>Secondary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_radio" className="form-radio text-danger rounded-none" />
    <span>Danger</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_radio" className="form-radio text-warning rounded-none" />
    <span>Warning</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_radio" className="form-radio text-info rounded-none" />
    <span>Info</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" />
    <span>Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Outline"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code9"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"outline_radio",className:"form-radio outline-primary",defaultChecked:!0}),e("span",{children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"outline_radio",className:"form-radio outline-success"}),e("span",{children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"outline_radio",className:"form-radio outline-secondary"}),e("span",{children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"outline_radio",className:"form-radio outline-danger"}),e("span",{children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"outline_radio",className:"form-radio outline-warning"}),e("span",{children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"outline_radio",className:"form-radio outline-info"}),e("span",{children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"outline_radio",className:"form-radio outline-dark"}),e("span",{children:"Dark"})]})})]})}),l.includes("code9")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="radio" name="outline_radio" className="form-radio outline-primary" defaultChecked />
    <span>Primary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="outline_radio" className="form-radio outline-success" />
    <span>Success</span>
</label>

<label className="inline-flex">
    <input type="radio" name="outline_radio" className="form-radio outline-secondary" />
    <span>Secondary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="outline_radio" className="form-radio outline-danger" />
    <span>Danger</span>
</label>

<label className="inline-flex">
    <input type="radio" name="outline_radio" className="form-radio outline-warning" />
    <span>Warning</span>
</label>

<label className="inline-flex">
    <input type="radio" name="outline_radio" className="form-radio outline-info" />
    <span>Info</span>
</label>

<label className="inline-flex">
    <input type="radio" name="outline_radio" className="form-radio outline-dark" />
    <span>Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default Text Color"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code10"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_text_color",className:"form-radio peer",defaultChecked:!0}),e("span",{className:"peer-checked:text-primary",children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_text_color",className:"form-radio text-success peer"}),e("span",{className:"peer-checked:text-success",children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_text_color",className:"form-radio text-secondary peer"}),e("span",{className:"peer-checked:text-secondary",children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_text_color",className:"form-radio text-danger peer"}),e("span",{className:"peer-checked:text-danger",children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_text_color",className:"form-radio text-warning peer"}),e("span",{className:"peer-checked:text-warning",children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_text_color",className:"form-radio text-info peer"}),e("span",{className:"peer-checked:text-info",children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"default_text_color",className:"form-radio text-dark peer"}),e("span",{className:"peer-checked:text-dark",children:"Dark"})]})})]})}),l.includes("code10")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="radio" name="default_text_color" className="form-radio peer" defaultChecked />
    <span className="peer-checked:text-primary">Primary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_text_color" className="form-radio text-success peer" />
    <span className="peer-checked:text-success">Success</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_text_color" className="form-radio text-secondary peer" />
    <span className="peer-checked:text-secondary">Secondary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_text_color" className="form-radio text-danger peer" />
    <span className="peer-checked:text-danger">Danger</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_text_color" className="form-radio text-warning peer" />
    <span className="peer-checked:text-warning">Warning</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_text_color" className="form-radio text-info peer" />
    <span className="peer-checked:text-info">Info</span>
</label>

<label className="inline-flex">
    <input type="radio" name="default_text_color" className="form-radio text-dark peer" />
    <span className="peer-checked:text-dark">Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Square Text Color"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code11"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_text_radio",className:"form-radio rounded-none peer",defaultChecked:!0}),e("span",{className:"peer-checked:text-primary",children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_text_radio",className:"form-radio text-success rounded-none peer"}),e("span",{className:"peer-checked:text-success",children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_text_radio",className:"form-radio text-secondary rounded-none peer"}),e("span",{className:"peer-checked:text-secondary",children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_text_radio",className:"form-radio text-danger rounded-none peer"}),e("span",{className:"peer-checked:text-danger",children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_text_radio",className:"form-radio text-warning rounded-none peer"}),e("span",{className:"peer-checked:text-warning",children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_text_radio",className:"form-radio text-info rounded-none peer"}),e("span",{className:"peer-checked:text-info",children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"square_text_radio",className:"form-radio text-dark rounded-none peer"}),e("span",{className:"peer-checked:text-dark",children:"Dark"})]})})]})}),l.includes("code11")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="radio" name="square_text_radio" className="form-radio rounded-none peer" defaultChecked />
    <span className="peer-checked:text-primary">Primary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_text_radio" className="form-radio text-success rounded-none peer" />
    <span className="peer-checked:text-success">Success</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_text_radio" className="form-radio text-secondary rounded-none peer" />
    <span className="peer-checked:text-secondary">Secondary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_text_radio" className="form-radio text-danger rounded-none peer" />
    <span className="peer-checked:text-danger">Danger</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_text_radio" className="form-radio text-warning rounded-none peer" />
    <span className="peer-checked:text-warning">Warning</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_text_radio" className="form-radio text-info rounded-none peer" />
    <span className="peer-checked:text-info">Info</span>
</label>

<label className="inline-flex">
    <input type="radio" name="square_text_radio" className="form-radio text-dark rounded-none peer" />
    <span className="peer-checked:text-dark">Dark</span>
</label>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Outline Text Color"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code12"),children:a("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:a("div",{className:"space-y-2",children:[e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"classic_text_radio",className:"form-radio outline-primary peer",defaultChecked:!0}),e("span",{className:"peer-checked:text-primary",children:"Primary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"classic_text_radio",className:"form-radio outline-success peer"}),e("span",{className:"peer-checked:text-success",children:"Success"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"classic_text_radio",className:"form-radio outline-secondary peer"}),e("span",{className:"peer-checked:text-secondary",children:"Secondary"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"classic_text_radio",className:"form-radio outline-danger peer"}),e("span",{className:"peer-checked:text-danger",children:"Danger"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"classic_text_radio",className:"form-radio outline-warning peer"}),e("span",{className:"peer-checked:text-warning",children:"Warning"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"classic_text_radio",className:"form-radio outline-info peer"}),e("span",{className:"peer-checked:text-info",children:"Info"})]})}),e("div",{children:a("label",{className:"inline-flex",children:[e("input",{type:"radio",name:"classic_text_radio",className:"form-radio outline-dark peer"}),e("span",{className:"peer-checked:text-dark",children:"Dark"})]})})]})}),l.includes("code12")&&e(c,{children:e("pre",{className:"language-xml",children:`<label className="inline-flex">
    <input type="radio" name="classic_text_radio" className="form-radio outline-primary peer" defaultChecked />
    <span className="peer-checked:text-primary">Primary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="classic_text_radio" className="form-radio outline-success peer" />
    <span className="peer-checked:text-success">Success</span>
</label>

<label className="inline-flex">
    <input type="radio" name="classic_text_radio" className="form-radio outline-secondary peer" />
    <span className="peer-checked:text-secondary">Secondary</span>
</label>

<label className="inline-flex">
    <input type="radio" name="classic_text_radio" className="form-radio outline-danger peer" />
    <span className="peer-checked:text-danger">Danger</span>
</label>

<label className="inline-flex">
    <input type="radio" name="classic_text_radio" className="form-radio outline-warning peer" />
    <span className="peer-checked:text-warning">Warning</span>
</label>

<label className="inline-flex">
    <input type="radio" name="classic_text_radio" className="form-radio outline-info peer" />
    <span className="peer-checked:text-info">Info</span>
</label>

<label className="inline-flex">
    <input type="radio" name="classic_text_radio" className="form-radio outline-dark peer" />
    <span className="peer-checked:text-dark">Dark</span>
</label>`})})]})]})]})]})]})};export{N as default};
