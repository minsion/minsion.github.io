import{c as f,_ as a}from"./codePreview.b8512f6b.js";import{d as v,u as x,o as l,b as h,e,g as s,f as n,j as o,X as d,w as c,D as m,k as b}from"./index.ddf2ada6.js";import{I as p}from"./icon-code.a018a24c.js";const y=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Forms")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Layouts")])],-1),g={class:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6"},w={class:"panel"},k={class:"flex items-center justify-between mb-5"},_=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Stack Forms",-1),E={class:"flex items-center"},C=b('<div class="mb-5"><form class="space-y-5"><div><input type="email" placeholder="Enter Email" class="form-input"><span class="text-white-dark text-[11px] inline-block mt-1">We&#39;ll never share your email with anyone else.</span></div><div><input type="password" placeholder="Enter Password" class="form-input"></div><div><label class="inline-flex items-center mt-1 cursor-pointer"><input type="checkbox" class="form-checkbox"><span class="text-white-dark">Subscribe to weekly newsletter</span></label></div><button type="submit" class="btn btn-primary !mt-6">Submit</button></form></div>',1),P=e("pre",null,`<!-- stack forms -->
<form class="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email" class="form-input" />
        <span class="text-white-dark text-[11px] inline-block mt-1">We'll never share your email with anyone else.</span>
    </div>
    <div>
        <input type="password" placeholder="Enter Password" class="form-input" />
    </div>
    <div>
        <label class="inline-flex items-center mt-1 cursor-pointer">
            <input type="checkbox" class="form-checkbox" />
            <span class="text-white-dark"">Subscribe to weekly newsletter</span>
        </label>
    </div>
    <button type="submit" class="btn btn-primary !mt-6">Submit</button>
</form>
`,-1),S={class:"panel"},A={class:"flex items-center justify-between mb-5"},j=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Horizontal form",-1),F={class:"flex items-center"},N=b('<div class="mb-5"><form class="space-y-5"><div class="flex sm:flex-row flex-col"><label for="horizontalEmail" class="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Email</label><input id="horizontalEmail" type="email" placeholder="Enter Email" class="form-input flex-1"></div><div class="flex sm:flex-row flex-col"><label for="horizontalPassword" class="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Password</label><input id="horizontalPassword" type="password" placeholder="Enter Password" class="form-input flex-1"></div><div class="flex sm:flex-row flex-col"><label class="sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Choose Segements</label><div class="flex-1"><div class="mb-2"><label class="inline-flex mt-1 cursor-pointer"><input type="radio" name="segements" class="form-radio"><span class="text-white-dark">Segements 1</span></label></div><div class="mb-2"><label class="inline-flex mt-1 cursor-pointer"><input type="radio" name="segements" class="form-radio"><span class="text-white-dark">Segements 2</span></label></div><div><label class="inline-flex mt-1"><input type="radio" name="segements" class="form-radio" disabled><span class="text-white-dark">Segements 3 ( disabled )</span></label></div></div></div><div class="flex sm:flex-row flex-col"><label class="font-semibold sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Apply</label><label class="inline-flex mb-0 cursor-pointer"><input type="checkbox" class="form-checkbox"><span class="text-white-dark">Terms Conditions</span></label></div><button type="submit" class="btn btn-primary !mt-6">Submit</button></form></div>',1),z=e("pre",null,`<!-- horizontal form -->
<form class="space-y-5">
    <div class="flex sm:flex-row flex-col">
        <label for="horizontalEmail" class="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Email</label>
        <input id="horizontalEmail" type="email" placeholder="Enter Email" class="form-input flex-1" />
    </div>
    <div class="flex sm:flex-row flex-col">
        <label for="horizontalPassword" class="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Password</label>
        <input id="horizontalPassword" type="password" placeholder="Enter Password" class="form-input flex-1" />
    </div>
    <div class="flex sm:flex-row flex-col">
        <label class="sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Choose Segements</label>
        <div class="flex-1">
            <div class="mb-2">
                <label class="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" class="form-radio" />
                    <span class="text-white-dark"">Segements 1</span>
                </label>
            </div>
            <div class="mb-2">
                <label class="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" class="form-radio" />
                    <span class="text-white-dark"">Segements 2</span>
                </label>
            </div>
            <div>
                <label class="inline-flex mt-1">
                    <input type="radio" name="segements" class="form-radio" disabled />
                    <span class="text-white-dark"">Segements 3 ( disabled )</span>
                </label>
            </div>
        </div>
    </div>
    <div class="flex sm:flex-row flex-col">
        <label class="font-semibold text-white-dark sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Apply</label>
        <label class="inline-flex mb-0 cursor-pointer">
            <input type="checkbox" class="form-checkbox" />
            <span class="text-white-dark" relative">Terms Conditions</span>
        </label>
    </div>
    <button type="submit" class="btn btn-primary !mt-6">Submit</button>
</form>
`,-1),R={class:"panel"},$={class:"flex items-center justify-between mb-5"},W=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Registration Forms",-1),Z={class:"flex items-center"},B=b('<div class="mb-5"><form class="space-y-5"><div><input type="email" placeholder="Enter Email Address *" class="form-input"></div><div><input type="password" placeholder="Enter Password *" class="form-input"></div><div><input type="password" placeholder="Enter Confirm Password *" class="form-input"></div><div class="!mt-2"><span class="text-white-dark text-[11px] inline-block">*Required Fields</span></div><div><label class="inline-flex cursor-pointer"><input type="checkbox" class="form-checkbox"><span class="text-white-dark">Subscribe to weekly newsletter</span></label></div><button type="submit" class="btn btn-primary !mt-6">Submit</button></form></div>',1),D=e("pre",null,`<!-- registration form -->
<form class="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email Address *" class="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Password *" class="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Confirm Password *" class="form-input" />
    </div>
    <div class="!mt-2">
        <span class="text-white-dark text-[11px] inline-block">*Required Fields</span>
    </div>
    <div>
        <label class="inline-flex cursor-pointer">
            <input type="checkbox" class="form-checkbox" />
            <span class="text-white-dark"">Subscribe to weekly newsletter</span>
        </label>
    </div>
    <button type="submit" class="btn btn-primary !mt-6">Submit</button>
</form>
`,-1),V={class:"panel"},q={class:"flex items-center justify-between mb-5"},J=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Login Forms",-1),U={class:"flex items-center"},I=b('<div class="mb-5"><form class="space-y-5"><div><input type="text" placeholder="Enter Full Name *" class="form-input"></div><div><input type="email" placeholder="Enter Email Address *" class="form-input"></div><div><input type="password" placeholder="Enter Password *" class="form-input"></div><div class="!mt-2"><span class="text-white-dark text-[11px] inline-block">*Required Fields</span></div><button type="submit" class="btn btn-primary !mt-6">Submit</button></form></div>',1),L=e("pre",null,`<!-- login form -->
<form class="space-y-5">
    <div>
        <input type="text" placeholder="Enter Full Name *" class="form-input" />
    </div>
    <div>
        <input type="email" placeholder="Enter Email address *" class="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Password *" class="form-input" />
    </div>
    <div class="!mt-2">
        <span class="text-white-dark text-[11px] inline-block">*Required Fields</span>
    </div>
    <button type="submit" class="btn btn-primary !mt-6">Submit</button>
</form>
`,-1),M={class:"panel"},T={class:"flex items-center justify-between mb-5"},G=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Forms Grid",-1),H={class:"flex items-center"},X=b('<div class="mb-5"><form class="space-y-5"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label for="gridEmail">Email</label><input id="gridEmail" type="email" placeholder="Enter Email" class="form-input"></div><div><label for="gridPassword">Password</label><input id="gridPassword" type="Password" placeholder="Enter Password" class="form-input"></div></div><div><label for="gridAddress1">Address</label><input id="gridAddress1" type="text" placeholder="Enter Address" value="1234 Main St" class="form-input"></div><div><label for="gridAddress2">Address2</label><input id="gridAddress2" type="text" placeholder="Enter Address2" value="Apartment, studio, or floor" class="form-input"></div><div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"><div class="md:col-span-2"><label for="gridCity">City</label><input id="gridCity" type="text" placeholder="Enter City" class="form-input"></div><div><label for="gridState">State</label><select id="gridState" class="form-select text-white-dark"><option>Choose...</option><option>...</option></select></div><div><label for="gridZip">Zip</label><input id="gridZip" type="text" placeholder="Enter Zip" class="form-input"></div></div><div><label class="flex items-center mt-1 cursor-pointer"><input type="checkbox" class="form-checkbox"><span class="text-white-dark">Check me out</span></label></div><button type="submit" class="btn btn-primary !mt-6">Submit</button></form></div>',1),K=e("pre",null,`<!-- forms grid -->
<form class="space-y-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
            <label for="gridEmail">Email</label>
            <input id="gridEmail" type="email" placeholder="Enter Email" class="form-input" />
        </div>
        <div>
            <label for="gridPassword">Password</label>
            <input id="gridPassword" type="Password" placeholder="Enter Password" class="form-input" />
        </div>
    </div>
    <div>
        <label for="gridAddress1">Address</label>
        <input id="gridAddress1" type="text" placeholder="Enter Address" value="1234 Main St" class="form-input" />
    </div>
    <div>
        <label for="gridAddress2">Address2</label>
        <input id="gridAddress2" type="text" placeholder="Enter Address2" value="Apartment, studio, or floor" class="form-input" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div class="md:col-span-2">
            <label for="gridCity">City</label>
            <input id="gridCity" type="text" placeholder="Enter City" class="form-input" />
        </div>
        <div>
            <label for="gridState">State</label>
            <select id="gridState" class="form-select text-white-dark">
                <option>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div>
            <label for="gridZip">Zip</label>
            <input id="gridZip" type="text" placeholder="Enter Zip" class="form-input" />
        </div>
    </div>
    <div>
        <label class="flex items-center mt-1 cursor-pointer">
            <input type="checkbox" class="form-checkbox" />
            <span class="text-white-dark"">Check me out</span>
        </label>
    </div>
    <button type="submit" class="btn btn-primary !mt-6">Submit</button>
</form>
`,-1),O={class:"panel lg:col-span-2"},Q={class:"flex items-center justify-between mb-5"},Y=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Inline Forms",-1),ee={class:"flex items-center"},te=b('<div class="mb-5"><form><div class="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto"><input type="email" placeholder="Jane Doe" class="form-input flex-1"><div class="flex flex-1"><div class="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"> @ </div><input type="text" placeholder="Username" class="form-input ltr:rounded-l-none rtl:rounded-r-none"></div><div><label class="flex items-center"><input type="checkbox" class="form-checkbox"><span class="text-white-dark">Remember me</span></label></div><button type="submit" class="btn btn-primary py-2.5">Submit</button></div></form></div>',1),se=e("pre",null,`<!-- inline form -->
<form>
    <div class="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto">
        <input type="email" placeholder="Jane Doe" class="form-input flex-1" />
        <div class="flex flex-1">
            <div class="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">@</div>
            <input type="text" placeholder="Username" class="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
        <div>
            <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="text-white-dark">Remember me</span>
            </label>
        </div>
        <button type="submit" class="btn btn-primary py-2.5">Submit</button>
    </div>
</form>
`,-1),le={class:"panel lg:col-span-2"},re={class:"flex items-center justify-between mb-5"},ie=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Auto-sizing",-1),ae={class:"flex items-center"},ne=b('<div class="mb-5"><form><div class="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto"><input type="email" placeholder="Jane Doe" class="form-input flex-1"><div class="flex flex-1"><div class="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"> @ </div><input type="text" placeholder="Username" class="form-input ltr:rounded-l-none rtl:rounded-r-none"></div><div><label class="flex items-center cursor-pointer"><input type="checkbox" class="form-checkbox"><span class="text-white-dark">Remember me</span></label></div><button type="submit" class="btn btn-primary py-2.5">Submit</button></div></form></div>',1),oe=e("pre",null,`<!-- auto sizing-->
<form>
<div class="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto">
    <input type="email" placeholder="Jane Doe" class="form-input flex-1" />
    <div class="flex flex-1">
        <div class="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">@</div>
        <input type="text" placeholder="Username" class="form-input ltr:rounded-l-none rtl:rounded-r-none" />
    </div>
    <div>
        <label class="flex items-center cursor-pointer">
            <input type="checkbox" class="form-checkbox" />
            <span class="text-white-dark">Remember me</span>
        </label>
    </div>
    <button type="submit" class="btn btn-primary py-2.5">Submit</button>
</div>
</form>
`,-1),de={class:"panel lg:row-start-3 lg:col-start-2"},ce={class:"flex items-center justify-between mb-5"},me=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Actions Buttons",-1),pe={class:"flex items-center"},be=b('<div class="mb-5"><form class="space-y-5"><div><label for="actionName">Full Name:</label><input id="actionName" type="text" placeholder="Enter Full Name" class="form-input"></div><div><label for="actionEmail">Email:</label><div class="flex flex-1"><div class="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"> @ </div><input id="actionEmail" type="email" placeholder="" class="form-input ltr:rounded-l-none rtl:rounded-r-none"></div></div><div><label for="actionWeb">Website:</label><input id="actionWeb" type="text" placeholder="https://" class="form-input"></div><div><label for="actionPassword">Password:</label><input id="actionPassword" type="password" placeholder="Enter Password" class="form-input"></div><div><label for="actionCpass">Confirm Password:</label><input id="actionCpass" type="password" placeholder="Enter Confirm Password" class="form-input"></div><button type="submit" class="btn btn-primary !mt-6">Submit</button></form></div>',1),ue=e("pre",null,`<!-- action button -->
<form class="space-y-5">
    <div>
        <label for="actionName">Full Name:</label>
        <input id="actionName" type="text" placeholder="Enter Full Name" class="form-input" />
    </div>
    <div>
        <label for="actionEmail">Email:</label>
        <div class="flex flex-1">
            <div class="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">@</div>
            <input id="actionEmail" type="email" placeholder="" class="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div>
        <label for="actionWeb">Website:</label>
        <input id="actionWeb" type="text" placeholder="https://" class="form-input" />
    </div>
    <div>
        <label for="actionPassword">Password:</label>
        <input id="actionPassword" type="password" placeholder="Enter Password" class="form-input" />
    </div>
    <div>
        <label for="actionCpass">Confirm Password:</label>
        <input id="actionCpass" type="password" placeholder="Enter Confirm Password" class="form-input" />
    </div>
    <button type="submit" class="btn btn-primary !mt-6">Submit</button>
</form>
`,-1),ge=v({__name:"layouts",setup(fe){x({title:"Form Layouts"});const{codeArr:r,toggleCode:i}=f();return(ve,t)=>(l(),h("div",null,[y,e("div",g,[e("div",w,[e("div",k,[_,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=u=>s(i)("code1"))},[e("span",E,[n(p,{class:"me-2"}),o(" Code ")])])]),C,s(r).includes("code1")?(l(),d(a,{key:0},{default:c(()=>[P]),_:1})):m("",!0)]),e("div",S,[e("div",A,[j,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[1]||(t[1]=u=>s(i)("code2"))},[e("span",F,[n(p,{class:"me-2"}),o(" Code ")])])]),N,s(r).includes("code2")?(l(),d(a,{key:0},{default:c(()=>[z]),_:1})):m("",!0)]),e("div",R,[e("div",$,[W,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=u=>s(i)("code3"))},[e("span",Z,[n(p,{class:"me-2"}),o(" Code ")])])]),B,s(r).includes("code3")?(l(),d(a,{key:0},{default:c(()=>[D]),_:1})):m("",!0)]),e("div",V,[e("div",q,[J,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[3]||(t[3]=u=>s(i)("code4"))},[e("span",U,[n(p,{class:"me-2"}),o(" Code ")])])]),I,s(r).includes("code4")?(l(),d(a,{key:0},{default:c(()=>[L]),_:1})):m("",!0)]),e("div",M,[e("div",T,[G,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[4]||(t[4]=u=>s(i)("code5"))},[e("span",H,[n(p,{class:"me-2"}),o(" Code ")])])]),X,s(r).includes("code5")?(l(),d(a,{key:0},{default:c(()=>[K]),_:1})):m("",!0)]),e("div",O,[e("div",Q,[Y,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[5]||(t[5]=u=>s(i)("code6"))},[e("span",ee,[n(p,{class:"me-2"}),o(" Code ")])])]),te,s(r).includes("code6")?(l(),d(a,{key:0},{default:c(()=>[se]),_:1})):m("",!0)]),e("div",le,[e("div",re,[ie,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[6]||(t[6]=u=>s(i)("code7"))},[e("span",ae,[n(p,{class:"me-2"}),o(" Code ")])])]),ne,s(r).includes("code7")?(l(),d(a,{key:0},{default:c(()=>[oe]),_:1})):m("",!0)]),e("div",de,[e("div",ce,[me,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[7]||(t[7]=u=>s(i)("code8"))},[e("span",pe,[n(p,{class:"me-2"}),o(" Code ")])])]),be,s(r).includes("code8")?(l(),d(a,{key:0},{default:c(()=>[ue]),_:1})):m("",!0)])])]))}});export{ge as default};
