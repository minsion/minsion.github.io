import{u as p,r as c,s as h,j as t,b as e,L as u}from"./index-21dbdbc4.js";import{C as i}from"./Highlight-44bb2925.js";import{I as r}from"./IconCode-7061e36d.js";const x=()=>{const d=p();c.useEffect(()=>{d(h("Basic Forms"))});const[l,n]=c.useState([]),a=s=>{l.includes(s)?n(m=>m.filter(o=>o!==s)):n([...l,s])};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(u,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Basic"})})]}),t("div",{className:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Text"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code1"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[e("input",{type:"text",placeholder:"Some Text...",className:"form-input",required:!0}),e("button",{type:"submit",className:"btn btn-primary mt-6",children:"Submit"})]})}),l.includes("code1")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <input type="text" placeholder="Some Text..." className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Password"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code2"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[e("input",{type:"password",placeholder:"Enter Password",className:"form-input",required:!0}),e("button",{type:"submit",className:"btn btn-primary mt-6",children:"Submit"})]})}),l.includes("code2")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <input type="password" placeholder="Enter Password" className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Email"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code3"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[e("input",{type:"email",placeholder:"email@mail.com",className:"form-input",required:!0}),e("button",{type:"submit",className:"btn btn-primary mt-6",children:"Submit"})]})}),l.includes("code3")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <input type="email" placeholder="email@mail.com" className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Url"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code4"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[e("input",{type:"url",placeholder:"https://dummyurl.com",className:"form-input",required:!0}),e("button",{type:"submit",className:"btn btn-primary mt-6",children:"Submit"})]})}),l.includes("code4")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <input type="url" placeholder="https://dummyurl.com" className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Telephone"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code5"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[e("input",{type:"tel",placeholder:"6-(666)-111-7777",className:"form-input",required:!0}),e("button",{type:"submit",className:"btn btn-primary mt-6",children:"Submit"})]})}),l.includes("code5")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <input type="tel" placeholder="6-(666)-111-7777" className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Search"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code6"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[e("input",{type:"search",placeholder:"Search...",className:"form-input",required:!0}),e("button",{type:"button",className:"btn btn-primary mt-6",children:"Submit"})]})}),l.includes("code6")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <input type="search" placeholder="Search..." className="form-input" required />
    <button type="button" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Range"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code7"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:e("input",{type:"range",className:"w-full py-2.5",min:"0",max:"100"})})}),l.includes("code7")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <input type="range" className="w-full py-2.5" min="0" max="100" />
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input With Label"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code8"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[e("label",{htmlFor:"fullname",children:"Full Name"}),e("input",{id:"fullname",type:"text",placeholder:"Enter Full Name",defaultValue:"Alan Green",className:"form-input"})]})}),l.includes("code8")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <label htmlFor="fullname">Full Name</label>
    <input id="fullname" type="text" placeholder="Enter Full Name" defaultValue="Alan Green" className="form-input" />
</form>`})})]}),t("div",{className:"panel lg:row-span-3",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Form controls"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code9"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[t("div",{children:[e("label",{htmlFor:"ctnEmail",children:"Email address"}),e("input",{id:"ctnEmail",type:"email",placeholder:"name@example.com",className:"form-input",required:!0})]}),t("div",{children:[e("label",{htmlFor:"ctnSelect1",children:"Example select"}),t("select",{id:"ctnSelect1",className:"form-select text-white-dark",required:!0,children:[e("option",{children:"Open this select menu"}),e("option",{children:"One"}),e("option",{children:"Two"}),e("option",{children:"Three"})]})]}),t("div",{children:[e("label",{htmlFor:"ctnSelect2",children:"Example multiple select"}),t("select",{id:"ctnSelect2",multiple:!0,className:"form-multiselect text-white-dark",required:!0,children:[e("option",{children:"Open this select menu"}),e("option",{children:"One"}),e("option",{children:"Two"}),e("option",{children:"Three"})]})]}),t("div",{children:[e("label",{htmlFor:"ctnTextarea",children:"Example textarea"}),e("textarea",{id:"ctnTextarea",rows:3,className:"form-textarea",placeholder:"Enter Address",required:!0})]}),t("div",{children:[e("label",{htmlFor:"ctnFile",children:"Example file input"}),e("input",{id:"ctnFile",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary",required:!0})]}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),l.includes("code9")&&e(i,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <label htmlFor="ctnEmail">Email address</label>
        <input id="ctnEmail" type="email" placeholder="name@example.com" className="form-input" required />
    </div>
    <div>
        <label htmlFor="ctnSelect1">Example select</label>
        <select id="ctnSelect1" className="form-select text-white-dark" required>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
    <div>
        <label htmlFor="ctnSelect2">Example multiple select</label>
        <select id="ctnSelect2" multiple className="form-multiselect text-white-dark" required>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
    <div>
        <label htmlFor="ctnTextarea">Example textarea</label>
        <textarea id="ctnTextarea" rows={3} className="form-textarea" placeholder="Enter Address" required></textarea>
    </div>
    <div>
        <label htmlFor="ctnFile">Example file input</label>
        <input
            id="ctnFile"
            type="file"
            className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
            required
        />
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Form grid"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code10"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[t("div",{className:"grid grid-cols-1 sm:flex justify-between gap-5",children:[e("input",{type:"text",placeholder:"Enter First Name",className:"form-input"}),e("input",{type:"text",placeholder:"Enter Last Name",className:"form-input"})]}),e("button",{type:"button",className:"btn btn-primary mt-6",children:"Submit"})]})}),l.includes("code10")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="grid grid-cols-1 sm:flex justify-between gap-5">
        <input type="text" placeholder="Enter First Name" className="form-input" />
        <input type="text" placeholder="Enter Last Name" className="form-input" />
    </div>
    <button type="button" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Form row"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code11"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[t("div",{className:"grid grid-cols-1 sm:flex justify-between gap-5",children:[e("input",{type:"text",placeholder:"Enter First Name",className:"form-input"}),e("input",{type:"text",placeholder:"Enter Last Name",className:"form-input"})]}),e("button",{type:"button",className:"btn btn-primary mt-6",children:"Submit"})]})}),l.includes("code11")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="grid grid-cols-1 sm:flex justify-between gap-5">
        <input type="text" placeholder="Enter First Name" className="form-input" />
        <input type="text" placeholder="Enter Last Name" className="form-input" />
    </div>
    <button type="button" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Form groups"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code12"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[t("div",{children:[e("label",{htmlFor:"groupFname",children:"First Name"}),e("input",{id:"groupFname",type:"text",placeholder:"Enter First Name",className:"form-input"})]}),t("div",{children:[e("label",{htmlFor:"groupLname",children:"Last Name"}),e("input",{id:"groupLname",type:"text",placeholder:"Enter Last Name",className:"form-input"})]}),e("button",{type:"button",className:"btn btn-primary !mt-6",children:"Submit"})]})}),l.includes("code12")&&e(i,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <label htmlFor="groupFname">First Name</label>
        <input id="groupFname" type="text" placeholder="Enter First Name" className="form-input" />
    </div>
    <div>
        <label htmlFor="groupLname">Last Name</label>
        <input id="groupLname" type="text" placeholder="Enter Last Name" className="form-input" />
    </div>
    <button type="button" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel lg:col-span-2",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Column sizing"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code13"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{children:[t("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2",children:[e("input",{type:"text",placeholder:"Enter City",className:"form-input lg:col-span-2"}),e("input",{type:"text",placeholder:"Enter State",className:"form-input"}),e("input",{type:"text",placeholder:"Enter Zip",className:"form-input"})]}),e("button",{type:"button",className:"btn btn-primary mt-6",children:"Submit"})]})}),l.includes("code13")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <input type="text" placeholder="Enter City" className="form-input lg:col-span-2" />
        <input type="text" placeholder="Enter State" className="form-input" />
        <input type="text" placeholder="Enter Zip" className="form-input" />
    </div>
    <button type="button" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input with help text ( Default Left)"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code14"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:t("div",{children:[e("input",{type:"text",placeholder:"Enter First Name",className:"form-input"}),e("span",{className:"text-white-dark text-xs",children:"I am the helper text."})]})})}),l.includes("code14")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div>
        <input type="text" placeholder="Enter First Name" className="form-input" />
        <span className="text-white-dark text-xs">I am the helper text.</span>
    </div>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input with badge help text (Default Left)"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code15"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:t("div",{children:[e("input",{type:"text",placeholder:"Enter First Name",className:"form-input mb-2"}),e("span",{className:"badge bg-primary text-xs hover:top-0",children:"I am the helper text."})]})})}),l.includes("code15")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div>
        <input type="text" placeholder="Enter First Name" className="form-input mb-2" />
        <span className="badge bg-primary text-xs hover:top-0">I am the helper text.</span>
    </div>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input with block badge help text (Default Left)"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code27"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:t("div",{children:[e("input",{type:"text",placeholder:"Enter First Name",className:"form-input mb-2"}),e("span",{className:"badge bg-primary block text-xs hover:top-0",children:"I am the helper text."})]})})}),l.includes("code27")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div>
        <input type="text" placeholder="Enter First Name" className="form-input mb-2" />
        <span className="badge bg-primary block text-xs hover:top-0">I am the helper text.</span>
    </div>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Inline Help text"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code16"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:t("div",{children:[e("label",{htmlFor:"Txtpassword",children:"Password"}),e("input",{id:"Txtpassword",type:"password",placeholder:"Enter Password",className:"form-input w-3/5"}),e("span",{className:"text-xs text-white-dark ltr:pl-2 rtl:pr-2",children:"Min 8-20 char"})]})})}),l.includes("code16")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div>
        <label htmlFor="Txtpassword">Password</label>
        <input id="Txtpassword" type="password" placeholder="Enter Password" className="form-input w-3/5" />
        <span className="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Min 8-20 char</span>
    </div>
</form>`})})]}),t("div",{className:"panel lg:col-span-2",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Fields"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code17"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:t("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t("div",{children:[e("label",{htmlFor:"inputLarge",children:"Large Input"}),e("input",{id:"inputLarge",type:"text",placeholder:"Large Input",className:"form-input form-input-lg"})]}),t("div",{children:[e("label",{htmlFor:"inputDefault",children:"Default Input"}),e("input",{id:"inputDefault",type:"text",placeholder:"Default Input",className:"form-input"})]}),t("div",{children:[e("label",{htmlFor:"inputSmall",children:"Small Input"}),e("input",{id:"inputSmall",type:"text",placeholder:"Small Input",className:"form-input form-input-sm"})]})]})})}),l.includes("code17")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
            <label htmlFor="inputLarge">Large Input</label>
            <input id="inputLarge" type="text" placeholder="Large Input" className="form-input form-input-lg" />
        </div>
        <div>
            <label htmlFor="inputDefault">Default Input</label>
            <input id="inputDefault" type="text" placeholder="Default Input" className="form-input" />
        </div>
        <div>
            <label htmlFor="inputSmall">Small Input</label>
            <input id="inputSmall" type="text" placeholder="Small Input" className="form-input form-input-sm" />
        </div>
    </div>
</form>`})})]}),t("div",{className:"panel lg:col-span-2",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Select Field"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code18"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:t("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e("div",{children:t("select",{className:"form-select form-select-lg text-white-dark",children:[e("option",{children:"Open this select menu"}),e("option",{children:"One"}),e("option",{children:"Two"}),e("option",{children:"Three"})]})}),e("div",{children:t("select",{className:"form-select text-white-dark",children:[e("option",{children:"Open this select menu"}),e("option",{children:"One"}),e("option",{children:"Two"}),e("option",{children:"Three"})]})}),e("div",{children:t("select",{className:"form-select form-select-sm text-white-dark",children:[e("option",{children:"Open this select menu"}),e("option",{children:"One"}),e("option",{children:"Two"}),e("option",{children:"Three"})]})})]})})}),l.includes("code18")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
            <select className="form-select form-select-lg text-white-dark">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </div>
        <div>
            <select className="form-select text-white-dark">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </div>
        <div>
            <select className="form-select form-select-sm text-white-dark">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </div>
    </div>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Horizontal form label sizing"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code19"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[t("div",{className:"sm:flex justify-between items-center gap-5 md:gap-20",children:[e("label",{htmlFor:"hrLargeinput",children:"Email"}),e("input",{id:"hrLargeinput",type:"email",placeholder:"name@example.com",className:"form-input py-2.5 text-base"})]}),t("div",{className:"sm:flex justify-between items-center gap-5 md:gap-20",children:[e("label",{htmlFor:"hrDefaultinput",children:"Email"}),e("input",{id:"hrDefaultinput",type:"email",placeholder:"name@example.com",className:"form-input"})]}),t("div",{className:"sm:flex justify-between items-center gap-5 md:gap-20",children:[e("label",{htmlFor:"hrSmallinput",children:"Email"}),e("input",{id:"hrSmallinput",type:"email",placeholder:"name@example.com",className:"form-input py-1.5 text-xs"})]})]})}),l.includes("code19")&&e(i,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div className="sm:flex justify-between items-center gap-5 md:gap-20">
        <label htmlFor="hrLargeinput">Email</label>
        <input id="hrLargeinput" type="email" placeholder="name@example.com" className="form-input py-2.5 text-base" />
    </div>
    <div className="sm:flex justify-between items-center gap-5 md:gap-20">
        <label htmlFor="hrDefaultinput">Email</label>
        <input id="hrDefaultinput" type="email" placeholder="name@example.com" className="form-input" />
    </div>
    <div className="sm:flex justify-between items-center gap-5 md:gap-20">
        <label htmlFor="hrSmallinput">Email</label>
        <input id="hrSmallinput" type="email" placeholder="name@example.com" className="form-input py-1.5 text-xs" />
    </div>
</form>`})})]}),t("div",{className:"panel lg:row-start-[14]",id:"readonly_input",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Readonly"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code20"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:e("div",{children:e("input",{type:"text",placeholder:"Readonly input here…",className:"form-input disabled:pointer-events-none",readOnly:!0})})})}),l.includes("code20")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div>
        <input type="text" placeholder="Readonly input here…" className="form-input disabled:pointer-events-none" readOnly />
    </div>
</form>`})})]}),t("div",{className:"panel",id:"disabled",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Disabled Fields"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code21"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[t("div",{children:[e("label",{htmlFor:"disInput",className:"text-white-dark",children:"Disabled input"}),e("input",{id:"disInput",type:"text",placeholder:"Readonly input here…",className:"form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})]}),t("div",{children:[e("label",{htmlFor:"disSelect",className:"text-white-dark",children:"Disabled select menu"}),t("select",{id:"disSelect",className:"form-select disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] text-white-dark",disabled:!0,children:[e("option",{children:"Open this select menu"}),e("option",{children:"One"}),e("option",{children:"Two"}),e("option",{children:"Three"})]})]}),e("div",{children:t("label",{className:"flex items-center",children:[e("input",{type:"checkbox",className:"form-checkbox",disabled:!0}),e("span",{className:"text-white-dark",children:"Can't check this"})]})}),e("button",{type:"submit",className:"btn btn-primary !mt-6 disabled:pointer-events-none disabled:opacity-60",disabled:!0,children:"Submit"})]})}),l.includes("code21")&&e(i,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <label htmlFor="disInput" className="text-white-dark">
            Disabled input
        </label>
        <input
            id="disInput"
            type="text"
            placeholder="Readonly input here…"
            className="form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
            disabled
        />
    </div>
    <div>
        <label htmlFor="disSelect" className="text-white-dark">
            Disabled select menu
        </label>
        <select id="disSelect" className="form-select disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] text-white-dark" disabled>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
    <div>
        <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" disabled />
            <span className="text-white-dark">Can't check this</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6 disabled:pointer-events-none disabled:opacity-60" disabled>
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Checkboxes"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code22"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:e("div",{children:t("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox",defaultChecked:!0}),e("span",{className:" text-white-dark",children:"Checkbox"})]})})})}),l.includes("code22")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div>
        <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="form-checkbox" defaultChecked />
            <span className=" text-white-dark">Checkbox</span>
        </label>
    </div>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Radio"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code23"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[e("div",{children:t("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"radio",name:"custom_radio2",className:"form-radio",defaultChecked:!0}),e("span",{className:"text-white-dark",children:"Toggle this custom radio"})]})}),e("div",{children:t("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"radio",name:"custom_radio2",className:"form-radio"}),e("span",{className:"text-white-dark",children:"Or toggle this other custom radio"})]})})]})}),l.includes("code23")&&e(i,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <label className="flex items-center cursor-pointer">
            <input type="radio" name="custom_radio2" className="form-radio" defaultChecked />
            <span className="text-white-dark">Toggle this custom radio</span>
        </label>
    </div>
    <div>
        <label className="flex items-center cursor-pointer">
            <input type="radio" name="custom_radio2" className="form-radio" />
            <span className="text-white-dark">Or toggle this other custom radio</span>
        </label>
    </div>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Disabled"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code24"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[e("div",{children:t("label",{className:"flex items-center",children:[e("input",{type:"checkbox",className:"form-checkbox",disabled:!0}),e("span",{className:" text-white-dark",children:"Check this custom checkbox"})]})}),e("div",{children:t("label",{className:"flex items-center",children:[e("input",{type:"radio",className:"form-radio",disabled:!0}),e("span",{className:"text-white-dark",children:"Toggle this custom radio"})]})})]})}),l.includes("code24")&&e(i,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" disabled />
            <span className=" text-white-dark">Check this custom checkbox</span>
        </label>
    </div>
    <div>
        <label className="flex items-center">
            <input type="radio" className="form-radio" disabled />
            <span className="text-white-dark">Toggle this custom radio</span>
        </label>
    </div>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Select menu"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code25"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:e("div",{children:t("select",{className:"form-select text-white-dark",children:[e("option",{children:"Open this select menu"}),e("option",{children:"One"}),e("option",{children:"Two"}),e("option",{children:"Three"})]})})})}),l.includes("code25")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div>
        <select className="form-select text-white-dark">
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiselect"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code26"),children:t("span",{className:"flex items-center",children:[e(r,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:e("div",{children:t("select",{size:4,multiple:!0,className:"form-multiselect text-white-dark !bg-none",children:[e("option",{children:"Open this select menu"}),e("option",{children:"One"}),e("option",{children:"Two"}),e("option",{children:"Three"}),e("option",{children:"Four"}),e("option",{children:"Five"})]})})})}),l.includes("code26")&&e(i,{children:e("pre",{className:"language-xml",children:`<form>
    <div>
        <select size={4} className="form-multiselect multiple text-white-dark !bg-none">
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
            <option>Four</option>
            <option>Five</option>
        </select>
    </div>
</form>`})})]})]})]})};export{x as default};
