import{u as p,r as n,s as h,j as l,b as e,L as b}from"./index-21dbdbc4.js";import{C as r}from"./Highlight-44bb2925.js";import{I as s}from"./IconCode-7061e36d.js";const x=()=>{const m=p();n.useEffect(()=>{m(h("Layouts"))});const[a,d]=n.useState(["code1,code2,code3,code4,code5,code6,code7,code8"]),t=i=>{a.includes(i)?d(c=>c.filter(o=>o!==i)):d([...a,i])};return l("div",{children:[l("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(b,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Layouts"})})]}),l("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[l("div",{className:"panel",id:"stack_form",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Stack Forms"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>t("code1"),children:l("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:l("form",{className:"space-y-5",children:[l("div",{children:[e("input",{type:"email",placeholder:"Enter Email",className:"form-input"}),e("span",{className:"text-white-dark text-[11px] inline-block mt-1",children:"We'll never share your email with anyone else."})]}),e("div",{children:e("input",{type:"password",placeholder:"Enter Password",className:"form-input"})}),e("div",{children:l("label",{className:"inline-flex items-center mt-1 cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Subscribe to weekly newsletter"})]})}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),a.includes("code1")&&e(r,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email" className="form-input" />
        <span className="text-white-dark text-[11px] inline-block mt-1">We'll never share your email with anyone else.</span>
    </div>
    <div>
        <input type="password" placeholder="Enter Password" className="form-input" />
    </div>
    <div>
        <label className="inline-flex items-center mt-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Subscribe to weekly newsletter</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),l("div",{className:"panel",id:"horizontal_form",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Horizontal form"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>t("code2"),children:l("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:l("form",{className:"space-y-5",children:[l("div",{className:"flex sm:flex-row flex-col",children:[e("label",{htmlFor:"horizontalEmail",className:"mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Email"}),e("input",{id:"horizontalEmail",type:"email",placeholder:"Enter Email",className:"form-input flex-1"})]}),l("div",{className:"flex sm:flex-row flex-col",children:[e("label",{htmlFor:"horizontalPassword",className:"mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Password"}),e("input",{id:"horizontalPassword",type:"password",placeholder:"Enter Password",className:"form-input flex-1"})]}),l("div",{className:"flex sm:flex-row flex-col",children:[e("label",{className:"sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Choose Segements"}),l("div",{className:"flex-1",children:[e("div",{className:"mb-2",children:l("label",{className:"inline-flex mt-1 cursor-pointer",children:[e("input",{type:"radio",name:"segements",className:"form-radio"}),e("span",{className:"text-white-dark",children:"Segements 1"})]})}),e("div",{className:"mb-2",children:l("label",{className:"inline-flex mt-1 cursor-pointer",children:[e("input",{type:"radio",name:"segements",className:"form-radio"}),e("span",{className:"text-white-dark",children:"Segements 2"})]})}),e("div",{children:l("label",{className:"inline-flex mt-1",children:[e("input",{type:"radio",name:"segements",className:"form-radio",disabled:!0}),e("span",{className:"text-white-dark",children:"Segements 3 ( disabled )"})]})})]})]}),l("div",{className:"flex sm:flex-row flex-col",children:[e("label",{className:"font-semibold sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Apply"}),l("label",{className:"inline-flex mb-0 cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Terms Conditions"})]})]}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),a.includes("code2")&&e(r,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div className="flex sm:flex-row flex-col">
        <label htmlFor="horizontalEmail" className="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">
            Email
        </label>
        <input id="horizontalEmail" type="email" placeholder="Enter Email" className="form-input flex-1" />
    </div>
    <div className="flex sm:flex-row flex-col">
        <label htmlFor="horizontalPassword" className="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">
            Password
        </label>
        <input id="horizontalPassword" type="password" placeholder="Enter Password" className="form-input flex-1" />
    </div>
    <div className="flex sm:flex-row flex-col">
        <label className="sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Choose Segements</label>
        <div className="flex-1">
            <div className="mb-2">
                <label className="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" className="form-radio" />
                    <span className="text-white-dark">Segements 1</span>
                </label>
            </div>
            <div className="mb-2">
                <label className="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" className="form-radio" />
                    <span className="text-white-dark">Segements 2</span>
                </label>
            </div>
            <div>
                <label className="inline-flex mt-1">
                    <input type="radio" name="segements" className="form-radio" disabled />
                    <span className="text-white-dark">Segements 3 ( disabled )</span>
                </label>
            </div>
        </div>
    </div>
    <div className="flex sm:flex-row flex-col">
        <label className="font-semibold sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Apply</label>
        <label className="inline-flex mb-0 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Terms Conditions</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),l("div",{className:"panel",id:"registration_form",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Registration Forms"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>t("code3"),children:l("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:l("form",{className:"space-y-5",children:[e("div",{children:e("input",{type:"email",placeholder:"Enter Email Address *",className:"form-input"})}),e("div",{children:e("input",{type:"password",placeholder:"Enter Password *",className:"form-input"})}),e("div",{children:e("input",{type:"password",placeholder:"Enter Confirm Password *",className:"form-input"})}),e("div",{className:"!mt-2",children:e("span",{className:"text-white-dark text-[11px] inline-block",children:"*Required Fields"})}),e("div",{children:l("label",{className:"inline-flex cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Subscribe to weekly newsletter"})]})}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),a.includes("code3")&&e(r,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email Address *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Password *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Confirm Password *" className="form-input" />
    </div>
    <div className="!mt-2">
        <span className="text-white-dark text-[11px] inline-block">*Required Fields</span>
    </div>
    <div>
        <label className="inline-flex cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Subscribe to weekly newsletter</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),l("div",{className:"panel",id:"login_form",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Login Forms"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>t("code4"),children:l("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:l("form",{className:"space-y-5",children:[e("div",{children:e("input",{type:"text",placeholder:"Enter Full Name *",className:"form-input"})}),e("div",{children:e("input",{type:"email",placeholder:"Enter Email Address *",className:"form-input"})}),e("div",{children:e("input",{type:"password",placeholder:"Enter Password *",className:"form-input"})}),e("div",{className:"!mt-2",children:e("span",{className:"text-white-dark text-[11px] inline-block",children:"*Required Fields"})}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),a.includes("code4")&&e(r,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <input type="text" placeholder="Enter Full Name *" className="form-input" />
    </div>
    <div>
        <input type="email" placeholder="Enter Email Address *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Password *" className="form-input" />
    </div>
    <div className="!mt-2">
        <span className="text-white-dark text-[11px] inline-block">*Required Fields</span>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),l("div",{className:"panel",id:"forms_grid",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Forms Grid"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>t("code5"),children:l("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:l("form",{className:"space-y-5",children:[l("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l("div",{children:[e("label",{htmlFor:"gridEmail",children:"Email"}),e("input",{id:"gridEmail",type:"email",placeholder:"Enter Email",className:"form-input"})]}),l("div",{children:[e("label",{htmlFor:"gridPassword",children:"Password"}),e("input",{id:"gridPassword",type:"Password",placeholder:"Enter Password",className:"form-input"})]})]}),l("div",{children:[e("label",{htmlFor:"gridAddress1",children:"Address"}),e("input",{id:"gridAddress1",type:"text",placeholder:"Enter Address",defaultValue:"1234 Main St",className:"form-input"})]}),l("div",{children:[e("label",{htmlFor:"gridAddress2",children:"Address2"}),e("input",{id:"gridAddress2",type:"text",placeholder:"Enter Address2",defaultValue:"Apartment, studio, or floor",className:"form-input"})]}),l("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4",children:[l("div",{className:"md:col-span-2",children:[e("label",{htmlFor:"gridCity",children:"City"}),e("input",{id:"gridCity",type:"text",placeholder:"Enter City",className:"form-input"})]}),l("div",{children:[e("label",{htmlFor:"gridState",children:"State"}),l("select",{id:"gridState",className:"form-select text-white-dark",children:[e("option",{children:"Choose..."}),e("option",{children:"..."})]})]}),l("div",{children:[e("label",{htmlFor:"gridZip",children:"Zip"}),e("input",{id:"gridZip",type:"text",placeholder:"Enter Zip",className:"form-input"})]})]}),e("div",{children:l("label",{className:"flex items-center mt-1 cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Check me out"})]})}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),a.includes("code5")&&e(r,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
            <label htmlFor="gridEmail">Email</label>
            <input id="gridEmail" type="email" placeholder="Enter Email" className="form-input" />
        </div>
        <div>
            <label htmlFor="gridPassword">Password</label>
            <input id="gridPassword" type="Password" placeholder="Enter Password" className="form-input" />
        </div>
    </div>
    <div>
        <label htmlFor="gridAddress1">Address</label>
        <input id="gridAddress1" type="text" placeholder="Enter Address" defaultValue="1234 Main St" className="form-input" />
    </div>
    <div>
        <label htmlFor="gridAddress2">Address2</label>
        <input id="gridAddress2" type="text" placeholder="Enter Address2" defaultValue="Apartment, studio, or floor" className="form-input" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="md:col-span-2">
            <label htmlFor="gridCity">City</label>
            <input id="gridCity" type="text" placeholder="Enter City" className="form-input" />
        </div>
        <div>
            <label htmlFor="gridState">State</label>
            <select id="gridState" className="form-select text-white-dark">
                <option>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div>
            <label htmlFor="gridZip">Zip</label>
            <input id="gridZip" type="text" placeholder="Enter Zip" className="form-input" />
        </div>
    </div>
    <div>
        <label className="flex items-center mt-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Check me out</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),l("div",{className:"panel lg:col-span-2",id:"inline_form",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Inline Forms"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>t("code6"),children:l("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:l("div",{className:"flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto",children:[e("input",{type:"email",placeholder:"Jane Doe",className:"form-input flex-1"}),l("div",{className:"flex flex-1",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),e("div",{children:l("label",{className:"flex items-center",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Remember me"})]})}),e("button",{type:"submit",className:"btn btn-primary py-2.5",children:"Submit"})]})})}),a.includes("code6")&&e(r,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto">
        <input type="email" placeholder="Jane Doe" className="form-input flex-1" />
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
        <div>
            <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white-dark">Remember me</span>
            </label>
        </div>
        <button type="submit" className="btn btn-primary py-2.5">
            Submit
        </button>
    </div>
</form>`})})]}),l("div",{className:"panel lg:col-span-2",id:"auto_sizing",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Auto-sizing"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>t("code7"),children:l("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:l("div",{className:"flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto",children:[e("input",{type:"email",placeholder:"Jane Doe",className:"form-input flex-1"}),l("div",{className:"flex flex-1",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),e("div",{children:l("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Remember me"})]})}),e("button",{type:"submit",className:"btn btn-primary py-2.5",children:"Submit"})]})})}),a.includes("code7")&&e(r,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto">
        <input type="email" placeholder="Jane Doe" className="form-input flex-1" />
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
        <div>
            <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white-dark">Remember me</span>
            </label>
        </div>
        <button type="submit" className="btn btn-primary py-2.5">
            Submit
        </button>
    </div>
</form>`})})]}),l("div",{className:"panel lg:row-start-3 lg:col-start-2",id:"actions_buttons",children:[l("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Actions Buttons"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>t("code8"),children:l("span",{className:"flex items-center",children:[e(s,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:l("form",{className:"space-y-5",children:[l("div",{children:[e("label",{htmlFor:"actionName",children:"Full Name:"}),e("input",{id:"actionName",type:"text",placeholder:"Enter Full Name",className:"form-input"})]}),l("div",{children:[e("label",{htmlFor:"actionEmail",children:"Email:"}),l("div",{className:"flex flex-1",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e("input",{id:"actionEmail",type:"email",placeholder:"",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),l("div",{children:[e("label",{htmlFor:"actionWeb",children:"Website:"}),e("input",{id:"actionWeb",type:"text",placeholder:"https://",className:"form-input"})]}),l("div",{children:[e("label",{htmlFor:"actionPassword",children:"Password:"}),e("input",{id:"actionPassword",type:"password",placeholder:"Enter Password",className:"form-input"})]}),l("div",{children:[e("label",{htmlFor:"actionCpass",children:"Confirm Password:"}),e("input",{id:"actionCpass",type:"password",placeholder:"Enter Confirm Password",className:"form-input"})]}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),a.includes("code8")&&e(r,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <label htmlFor="actionName">Full Name:</label>
        <input id="actionName" type="text" placeholder="Enter Full Name" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionEmail">Email:</label>
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input id="actionEmail" type="email" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div>
        <label htmlFor="actionWeb">Website:</label>
        <input id="actionWeb" type="text" placeholder="https://" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionPassword">Password:</label>
        <input id="actionPassword" type="password" placeholder="Enter Password" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionCpass">Confirm Password:</label>
        <input id="actionCpass" type="password" placeholder="Enter Confirm Password" className="form-input" />
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]})]})]})};export{x as default};
