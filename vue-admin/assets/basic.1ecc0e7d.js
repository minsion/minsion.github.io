import{c as h,_ as i}from"./codePreview.b8512f6b.js";import{d as b,u as x,o as n,b as v,e,g as s,f as a,j as r,X as d,w as c,D as p,k as f}from"./index.ddf2ada6.js";import{I as m}from"./icon-code.a018a24c.js";const _=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Forms")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Basic")])],-1),y={class:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6"},g={class:"panel"},k={class:"flex items-center justify-between mb-5"},w=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Text",-1),C={class:"flex items-center"},j=e("div",{class:"mb-5"},[e("form",null,[e("input",{type:"text",placeholder:"Some Text...",class:"form-input",required:""}),e("button",{type:"submit",class:"btn btn-primary mt-6"},"Submit")])],-1),S=e("pre",null,`<!-- input text -->
<form>
    <input type="text" placeholder="Some Text..." class="form-input" required />
    <button type="submit" class="btn btn-primary mt-6">Submit</button>
</form>
`,-1),E={class:"panel"},T={class:"flex items-center justify-between mb-5"},F=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Password",-1),I={class:"flex items-center"},O=e("div",{class:"mb-5"},[e("form",null,[e("input",{type:"password",placeholder:"Enter Password",class:"form-input",required:""}),e("button",{type:"submit",class:"btn btn-primary mt-6"},"Submit")])],-1),N=e("pre",null,`<!-- input password -->
<form>
    <input type="password" placeholder="Enter Password" class="form-input" required />
    <button type="submit" class="btn btn-primary mt-6">Submit</button>
</form>
`,-1),L={class:"panel"},$={class:"flex items-center justify-between mb-5"},q=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Email",-1),D={class:"flex items-center"},z=e("div",{class:"mb-5"},[e("form",null,[e("input",{type:"email",placeholder:"email@mail.com",class:"form-input",required:""}),e("button",{type:"submit",class:"btn btn-primary mt-6"},"Submit")])],-1),P=e("pre",null,`<!-- input email -->
<form>
    <input type="email" placeholder="email@mail.com" class="form-input" required />
    <button type="submit" class="btn btn-primary mt-6">Submit</button>
</form>
`,-1),R={class:"panel"},B={class:"flex items-center justify-between mb-5"},V=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Url",-1),A={class:"flex items-center"},M=e("div",{class:"mb-5"},[e("form",null,[e("input",{type:"url",placeholder:"https://dummyurl.com",class:"form-input",required:""}),e("button",{type:"submit",class:"btn btn-primary mt-6"},"Submit")])],-1),H=e("pre",null,`<!-- input url -->
<form>
    <input type="url" placeholder="https://dummyurl.com" class="form-input" required />
    <button type="submit" class="btn btn-primary mt-6">Submit</button>
</form>
`,-1),G={class:"panel"},Z={class:"flex items-center justify-between mb-5"},U=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Telephone",-1),W={class:"flex items-center"},X=e("div",{class:"mb-5"},[e("form",null,[e("input",{type:"tel",placeholder:"6-(666)-111-7777",class:"form-input",required:""}),e("button",{type:"submit",class:"btn btn-primary mt-6"},"Submit")])],-1),J=e("pre",null,`<!-- input telephone -->
<form>
    <input type="tel" placeholder="6-(666)-111-7777" class="form-input" required />
    <button type="submit" class="btn btn-primary mt-6">Submit</button>
</form>
`,-1),K={class:"panel"},Q={class:"flex items-center justify-between mb-5"},Y=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Search",-1),ee={class:"flex items-center"},te=e("div",{class:"mb-5"},[e("form",null,[e("input",{type:"search",placeholder:"Search...",class:"form-input",required:""}),e("button",{type:"button",class:"btn btn-primary mt-6"},"Submit")])],-1),se=e("pre",null,`<!-- input search -->
<form>
    <input type="search" placeholder="Search..." class="form-input" required />
    <button type="button" class="btn btn-primary mt-6">Submit</button>
</form>
`,-1),ne={class:"panel"},le={class:"flex items-center justify-between mb-5"},oe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Range",-1),ie={class:"flex items-center"},ae=e("div",{class:"mb-5"},[e("form",null,[e("input",{type:"range",class:"w-full py-2.5",min:"0",max:"100"})])],-1),re=e("pre",null,`<!-- input range -->
<form>
    <input type="range" class="w-full py-2.5" min="0" max="100" />
</form>
`,-1),de={class:"panel"},ce={class:"flex items-center justify-between mb-5"},pe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input With Label",-1),me={class:"flex items-center"},ue=e("div",{class:"mb-5"},[e("form",null,[e("label",{for:"fullname"},"Full Name"),e("input",{id:"fullname",type:"text",placeholder:"Enter Full Name",value:"Alan Green",class:"form-input"})])],-1),fe=e("pre",null,`<!-- input with label -->
<form>
    <label for="fullname">Full Name</label>
    <input id="fullname" type="text"  placeholder="Enter Full Name" value="Alan Green" class="form-input" />
</form>
`,-1),he={class:"panel lg:row-span-3"},be={class:"flex items-center justify-between mb-5"},xe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Form controls",-1),ve={class:"flex items-center"},_e=f('<div class="mb-5"><form class="space-y-5"><div><label for="ctnEmail">Email address</label><input id="ctnEmail" type="email" placeholder="name@example.com" class="form-input" required></div><div><label for="ctnSelect1">Example select</label><select id="ctnSelect1" class="form-select text-white-dark" required><option>Open this select menu</option><option>One</option><option>Two</option><option>Three</option></select></div><div><label for="ctnSelect2">Example multiple select</label><select id="ctnSelect2" multiple class="form-multiselect text-white-dark" required><option>Open this select menu</option><option>One</option><option>Two</option><option>Three</option></select></div><div><label for="ctnTextarea">Example textarea</label><textarea id="ctnTextarea" rows="3" class="form-textarea" placeholder="Enter Address" required></textarea></div><div><label for="ctnFile">Example file input</label><input id="ctnFile" type="file" class="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary" required></div><button type="submit" class="btn btn-primary !mt-6">Submit</button></form></div>',1),ye=e("pre",null,`<!-- form controls -->
<form class="space-y-5">
    <div>
        <label for="ctnEmail">Email address</label>
        <input id="ctnEmail" type="email" placeholder="name@example.com" class="form-input" required />
    </div>
    <div>
        <label for="ctnSelect1">Example select</label>
        <select id="ctnSelect1" class="form-select text-white-dark" required>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
    <div>
        <label for="ctnSelect2">Example multiple select</label>
        <select id="ctnSelect2" multiple="multiple" class="form-multiselect text-white-dark" required>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
    <div>
        <label for="ctnTextarea">Example textarea</label>
        <textarea id="ctnTextarea" rows="3" class="form-textarea" placeholder="Enter Textarea" required></textarea>
    </div>
    <div>
        <label for="ctnFile">Example file input</label>
        <input id="ctnFile" type="file" class="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary" required />
    </div>
    <button type="submit" class="btn btn-primary !mt-6">Submit</button>
</form>
`,-1),ge={class:"panel"},ke={class:"flex items-center justify-between mb-5"},we=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Form grid",-1),Ce={class:"flex items-center"},je=f('<div class="mb-5"><form><div class="grid grid-cols-1 sm:flex justify-between gap-5"><input type="text" placeholder="Enter First Name" class="form-input"><input type="text" placeholder="Enter Last Name" class="form-input"></div><button type="button" class="btn btn-primary mt-6">Submit</button></form></div>',1),Se=e("pre",null,`<!-- form grid -->
<form>
    <div class="grid grid-cols-1 sm:flex justify-between gap-5">
        <input type="text" placeholder="Enter First Name" class="form-input" />
        <input type="text" placeholder="Enter Last Name" class="form-input" />
    </div>
    <button type="button" class="btn btn-primary mt-6">Submit</button>
</form>
`,-1),Ee={class:"panel"},Te={class:"flex items-center justify-between mb-5"},Fe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Form row",-1),Ie={class:"flex items-center"},Oe=f('<div class="mb-5"><form><div class="grid grid-cols-1 sm:flex justify-between gap-5"><input type="text" placeholder="Enter First Name" class="form-input"><input type="text" placeholder="Enter Last Name" class="form-input"></div><button type="button" class="btn btn-primary mt-6">Submit</button></form></div>',1),Ne=e("pre",null,`<!-- form row -->
<form>
    <div class="grid grid-cols-1 sm:flex justify-between gap-5">
        <input type="text" placeholder="Enter First Name" class="form-input" />
        <input type="text" placeholder="Enter Last Name" class="form-input" />
    </div>
    <button type="button" class="btn btn-primary mt-6">Submit</button>
</form>
`,-1),Le={class:"panel"},$e={class:"flex items-center justify-between mb-5"},qe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Form groups",-1),De={class:"flex items-center"},ze=f('<div class="mb-5"><form class="space-y-5"><div><label for="groupFname">First Name</label><input id="groupFname" type="text" placeholder="Enter First Name" class="form-input"></div><div><label for="groupLname">Last Name</label><input id="groupLname" type="text" placeholder="Enter Last Name" class="form-input"></div><button type="button" class="btn btn-primary !mt-6">Submit</button></form></div>',1),Pe=e("pre",null,`<!-- form groups -->
<form class="space-y-5">
    <div>
        <label for="groupFname">Enter First Name</label>
        <input id="groupFname" type="text" placeholder="Enter First Name" class="form-input" />
    </div>
    <div>
        <label for="groupLname">Enter Last Name</label>
        <input id="groupLname" type="text" placeholder="Enter Last Name" class="form-input" />
    </div>
    <button type="button" class="btn btn-primary !mt-6">Submit</button>
</form>
`,-1),Re={class:"panel lg:col-span-2"},Be={class:"flex items-center justify-between mb-5"},Ve=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Column sizing",-1),Ae={class:"flex items-center"},Me=f('<div class="mb-5"><form><div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2"><input type="text" placeholder="Enter City" class="form-input lg:col-span-2"><input type="text" placeholder="Enter State" class="form-input"><input type="text" placeholder="Enter Zip" class="form-input"></div><button type="button" class="btn btn-primary mt-6">Submit</button></form></div>',1),He=e("pre",null,`<!-- column sizing -->
<form>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <input type="text" placeholder="Enter City" class="form-input lg:col-span-2" />
        <input type="text" placeholder="Enter State" class="form-input" />
        <input type="text" placeholder="Enter Zip" class="form-input" />
    </div>
    <button type="button" class="btn btn-primary mt-6">Submit</button>
</form>
`,-1),Ge={class:"panel"},Ze={class:"flex items-center justify-between mb-5"},Ue=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input with help text ( Default Left)",-1),We={class:"flex items-center"},Xe=e("div",{class:"mb-5"},[e("form",null,[e("div",null,[e("input",{type:"text",placeholder:"Enter First Name",class:"form-input"}),e("span",{class:"text-white-dark text-xs"},"I am the helper text.")])])],-1),Je=e("pre",null,`<!-- input with help text -->
<form>
    <div>
        <input type="text" placeholder="Enter First Name" class="form-input" />
        <span class="text-white-dark text-xs">I am the helper text.</span>
    </div>
</form>
`,-1),Ke={class:"panel"},Qe={class:"flex items-center justify-between mb-5"},Ye=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input with badge help text (Default Left)",-1),et={class:"flex items-center"},tt=e("div",{class:"mb-5"},[e("form",null,[e("div",null,[e("input",{type:"text",placeholder:"Enter First Name",class:"form-input mb-2"}),e("span",{class:"badge bg-primary text-xs hover:top-0"},"I am the helper text.")])])],-1),st=e("pre",null,`<!-- input with badge help text -->
<form>
    <div>
        <input type="text" placeholder="Enter First Name" class="form-input mb-2" />
        <span class="badge bg-primary text-xs hover:top-0">I am the helper text.</span>
    </div>
</form>
`,-1),nt={class:"panel"},lt={class:"flex items-center justify-between mb-5"},ot=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input with block badge help text (Default Left)",-1),it={class:"flex items-center"},at=e("div",{class:"mb-5"},[e("form",null,[e("div",null,[e("input",{type:"text",placeholder:"Enter First Name",class:"form-input mb-2"}),e("span",{class:"badge bg-primary block text-xs hover:top-0"},"I am the helper text.")])])],-1),rt=e("pre",null,`<!-- input with block badge help text -->
<form>
    <div>
        <input type="text" placeholder="Enter First Name" class="form-input mb-2" />
        <span class="badge bg-primary block text-xs hover:top-0">I am the helper text.</span>
    </div>
</form>
`,-1),dt={class:"panel"},ct={class:"flex items-center justify-between mb-5"},pt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Inline Help text",-1),mt={class:"flex items-center"},ut=e("div",{class:"mb-5"},[e("form",null,[e("div",null,[e("label",{for:"Txtpassword"},"Password"),e("input",{id:"Txtpassword",type:"password",placeholder:"Enter Password",class:"form-input w-3/5"}),e("span",{class:"text-xs text-white-dark ltr:pl-2 rtl:pr-2"},"Min 8-20 char")])])],-1),ft=e("pre",null,`<!-- inline Help text -->
<form>
    <div>
        <label for="Txtpassword">Password</label>
        <input id="Txtpassword" type="password" placeholder="Enter Password" class="form-input w-3/5" />
        <span class="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Min 8-20 char</span>
    </div>
</form>
`,-1),ht={class:"panel lg:col-span-2"},bt={class:"flex items-center justify-between mb-5"},xt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Fields",-1),vt={class:"flex items-center"},_t=f('<div class="mb-5"><form><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><div><label for="inputLarge">Large Input</label><input id="inputLarge" type="text" placeholder="Large Input" class="form-input form-input-lg"></div><div><label for="inputDefault">Default Input</label><input id="inputDefault" type="text" placeholder="Default Input" class="form-input"></div><div><label for="inputSmall">Small Input</label><input id="inputSmall" type="text" placeholder="Small Input" class="form-input form-input-sm"></div></div></form></div>',1),yt=e("pre",null,`<!-- input fields -->
<form>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
            <label for="inputLarge">Large Input</label>
            <input id="inputLarge" type="text" placeholder="Large Input" class="form-input form-input-lg" />
        </div>
        <div>
            <label for="inputDefault">Default Input</label>
            <input id="inputDefault" type="text" placeholder="Default Input" class="form-input" />
        </div>
        <div>
            <label for="inputSmall">Small Input</label>
            <input id="inputSmall" type="text" placeholder="Small Input" class="form-input form-input-sm" />
        </div>
    </div>
</form>
`,-1),gt={class:"panel lg:col-span-2"},kt={class:"flex items-center justify-between mb-5"},wt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Select Field",-1),Ct={class:"flex items-center"},jt=f('<div class="mb-5"><form><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><div><select class="form-select form-select-lg text-white-dark"><option>Open this select menu</option><option>One</option><option>Two</option><option>Three</option></select></div><div><select class="form-select text-white-dark"><option>Open this select menu</option><option>One</option><option>Two</option><option>Three</option></select></div><div><select class="form-select form-select-sm text-white-dark"><option>Open this select menu</option><option>One</option><option>Two</option><option>Three</option></select></div></div></form></div>',1),St=e("pre",null,`<!-- select field -->
<form>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
            <select class="form-select form-select-lg text-white-dark">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </div>
        <div>
            <select class="form-select text-white-dark">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </div>
        <div>
            <select class="form-select form-select-sm text-white-dark">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </div>
    </div>
</form>
`,-1),Et={class:"panel"},Tt={class:"flex items-center justify-between mb-5"},Ft=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Horizontal form label sizing",-1),It={class:"flex items-center"},Ot=f('<div class="mb-5"><form class="space-y-5"><div class="sm:flex justify-between items-center gap-5 md:gap-20"><label for="hrLargeinput">Email</label><input id="hrLargeinput" type="email" placeholder="name@example.com" class="form-input py-2.5 text-base"></div><div class="sm:flex justify-between items-center gap-5 md:gap-20"><label for="hrDefaultinput">Email</label><input id="hrDefaultinput" type="email" placeholder="name@example.com" class="form-input"></div><div class="sm:flex justify-between items-center gap-5 md:gap-20"><label for="hrSmallinput">Email</label><input id="hrSmallinput" type="email" placeholder="name@example.com" class="form-input py-1.5 text-xs"></div></form></div>',1),Nt=e("pre",null,`<!-- horizontal form label sizing -->
<form class="space-y-5">
    <div class="sm:flex justify-between items-center gap-5 md:gap-20">
        <label for="hrLargeinput">Email</label>
        <input id="hrLargeinput" type="email" placeholder="name@example.com" class="form-input py-2.5 text-base" />
    </div>
    <div class="sm:flex justify-between items-center gap-5 md:gap-20">
        <label for="hrDefaultinput">Email</label>
        <input id="hrDefaultinput" type="email" placeholder="name@example.com" class="form-input" />
    </div>
    <div class="sm:flex justify-between items-center gap-5 md:gap-20">
        <label for="hrSmallinput">Email</label>
        <input for="hrSmallinput" type="email" placeholder="name@example.com" class="form-input py-1.5 text-xs" />
    </div>
</form>
`,-1),Lt={class:"panel lg:row-start-[14]"},$t={class:"flex items-center justify-between mb-5"},qt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Input Readonly",-1),Dt={class:"flex items-center"},zt=e("div",{class:"mb-5"},[e("form",null,[e("div",null,[e("input",{type:"text",placeholder:"Readonly input here\u2026",class:"form-input disabled:pointer-events-none",readonly:""})])])],-1),Pt=e("pre",null,`<!-- input readonly -->
<form>
    <div>
        <input type="text" placeholder="Readonly input here\u2026" class="form-input disabled:pointer-events-none" readonly />
    </div>
</form>
`,-1),Rt={class:"panel"},Bt={class:"flex items-center justify-between mb-5"},Vt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Disabled Fields",-1),At={class:"flex items-center"},Mt=f('<div class="mb-5"><form class="space-y-5"><div><label for="disInput" class="text-white-dark">Disabled input</label><input id="disInput" type="text" placeholder="Readonly input here\u2026" class="form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled></div><div><label for="disSelect" class="text-white-dark">Disabled select menu</label><select id="disSelect" class="form-select disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] text-white-dark" disabled><option>Open this select menu</option><option>One</option><option>Two</option><option>Three</option></select></div><div><label class="flex items-center"><input type="checkbox" class="form-checkbox" disabled><span class="text-white-dark">Can&#39;t check this</span></label></div><button type="submit" class="btn btn-primary !mt-6 disabled:pointer-events-none disabled:opacity-60" disabled>Submit</button></form></div>',1),Ht=e("pre",null,`<!-- disabled fileds -->
<form class="space-y-5">
    <div>
        <label for="disInput" class="text-white-dark">Disabled input</label>
        <input id="disInput" type="text" placeholder="Readonly input here\u2026" class="form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled />
    </div>
    <div>
        <label for="disSelect" class="text-white-dark">Disabled select menu</label>
        <select id="disSelect" class="form-select disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] text-white-dark" disabled>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
    <div>
        <label class="flex items-center">
            <input type="checkbox" class="form-checkbox" disabled />
            <span class="text-white-dark"">Can't check this</span>
        </label>
    </div>
    <button type="submit" class="btn btn-primary !mt-6 disabled:pointer-events-none disabled:opacity-60" disabled>Submit</button>
</form>
`,-1),Gt={class:"panel"},Zt={class:"flex items-center justify-between mb-5"},Ut=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Checkboxes",-1),Wt={class:"flex items-center"},Xt=e("div",{class:"mb-5"},[e("form",null,[e("div",null,[e("label",{class:"flex items-center cursor-pointer"},[e("input",{type:"checkbox",class:"form-checkbox",checked:""}),e("span",{class:"text-white-dark"},"Checkbox")])])])],-1),Jt=e("pre",null,`<!-- checkboxes -->
<form>
    <div>
        <label class="flex items-center cursor-pointer">
            <input type="checkbox" class="form-checkbox" checked />
            <span class=" text-white-dark"">Checkbox</span>
        </label>
    </div>
</form>
`,-1),Kt={class:"panel"},Qt={class:"flex items-center justify-between mb-5"},Yt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Radio",-1),es={class:"flex items-center"},ts=f('<div class="mb-5"><form class="space-y-5"><div><label class="flex items-center cursor-pointer"><input type="radio" name="custom_radio2" class="form-radio" checked><span class="text-white-dark">Toggle this custom radio</span></label></div><div><label class="flex items-center cursor-pointer"><input type="radio" name="custom_radio2" class="form-radio"><span class="text-white-dark">Or toggle this other custom radio</span></label></div></form></div>',1),ss=e("pre",null,`<!-- radio -->
<form class="space-y-5">
    <div>
        <label class="flex items-center cursor-pointer">
            <input type="radio" name="custom_radio2" class="form-radio" checked />
            <span class="text-white-dark"">Toggle this custom radio</span>
        </label>
    </div>
    <div>
        <label class="flex items-center cursor-pointer">
            <input type="radio" name="custom_radio2" class="form-radio" />
            <span class="text-white-dark"">Or toggle this other custom radio</span>
        </label>
    </div>
</form>
`,-1),ns={class:"panel"},ls={class:"flex items-center justify-between mb-5"},os=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Disabled",-1),is={class:"flex items-center"},as=f('<div class="mb-5"><form class="space-y-5"><div><label class="flex items-center"><input type="checkbox" class="form-checkbox" disabled><span class="text-white-dark">Check this custom checkbox</span></label></div><div><label class="flex items-center"><input type="radio" class="form-radio" disabled><span class="text-white-dark">Toggle this custom radio</span></label></div></form></div>',1),rs=e("pre",null,`<!-- disabled -->
<form class="space-y-5">
    <div>
        <label class="flex items-center">
            <input type="checkbox" class="form-checkbox" disabled />
            <span class=" text-white-dark"">Check this custom checkbox</span>
        </label>
    </div>
    <div>
        <label class="flex items-center">
            <input type="radio" class="form-radio" disabled />
            <span class="text-white-dark"">Toggle this custom radio</span>
        </label>
    </div>
</form>
`,-1),ds={class:"panel"},cs={class:"flex items-center justify-between mb-5"},ps=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Select menu",-1),ms={class:"flex items-center"},us=e("div",{class:"mb-5"},[e("form",null,[e("div",null,[e("select",{class:"form-select text-white-dark"},[e("option",null,"Open this select menu"),e("option",null,"One"),e("option",null,"Two"),e("option",null,"Three")])])])],-1),fs=e("pre",null,`<!-- select menu -->
<form>
    <div>
        <select class="form-select text-white-dark">
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
</form>
`,-1),hs={class:"panel"},bs={class:"flex items-center justify-between mb-5"},xs=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Multiselect",-1),vs={class:"flex items-center"},_s=e("div",{class:"mb-5"},[e("form",null,[e("div",null,[e("select",{size:"4",multiple:"",class:"form-multiselect text-white-dark !bg-none"},[e("option",null,"Open this select menu"),e("option",null,"One"),e("option",null,"Two"),e("option",null,"Three"),e("option",null,"Four"),e("option",null,"Five")])])])],-1),ys=e("pre",null,`<!-- multiselect -->
<form>
    <div>
        <select size="4" class="form-multiselect text-white-dark !bg-none">
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
            <option>Four</option>
            <option>Five</option>
        </select>
    </div>
</form>
`,-1),Ss=b({__name:"basic",setup(gs){x({title:"Forms"});const{codeArr:l,toggleCode:o}=h();return(ks,t)=>(n(),v("div",null,[_,e("div",y,[e("div",g,[e("div",k,[w,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=u=>s(o)("code1"))},[e("span",C,[a(m,{class:"me-2"}),r(" Code ")])])]),j,s(l).includes("code1")?(n(),d(i,{key:0},{default:c(()=>[S]),_:1})):p("",!0)]),e("div",E,[e("div",T,[F,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[1]||(t[1]=u=>s(o)("code2"))},[e("span",I,[a(m,{class:"me-2"}),r(" Code ")])])]),O,s(l).includes("code2")?(n(),d(i,{key:0},{default:c(()=>[N]),_:1})):p("",!0)]),e("div",L,[e("div",$,[q,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=u=>s(o)("code3"))},[e("span",D,[a(m,{class:"me-2"}),r(" Code ")])])]),z,s(l).includes("code3")?(n(),d(i,{key:0},{default:c(()=>[P]),_:1})):p("",!0)]),e("div",R,[e("div",B,[V,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[3]||(t[3]=u=>s(o)("code4"))},[e("span",A,[a(m,{class:"me-2"}),r(" Code ")])])]),M,s(l).includes("code4")?(n(),d(i,{key:0},{default:c(()=>[H]),_:1})):p("",!0)]),e("div",G,[e("div",Z,[U,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[4]||(t[4]=u=>s(o)("code5"))},[e("span",W,[a(m,{class:"me-2"}),r(" Code ")])])]),X,s(l).includes("code5")?(n(),d(i,{key:0},{default:c(()=>[J]),_:1})):p("",!0)]),e("div",K,[e("div",Q,[Y,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[5]||(t[5]=u=>s(o)("code6"))},[e("span",ee,[a(m,{class:"me-2"}),r(" Code ")])])]),te,s(l).includes("code6")?(n(),d(i,{key:0},{default:c(()=>[se]),_:1})):p("",!0)]),e("div",ne,[e("div",le,[oe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[6]||(t[6]=u=>s(o)("code7"))},[e("span",ie,[a(m,{class:"me-2"}),r(" Code ")])])]),ae,s(l).includes("code7")?(n(),d(i,{key:0},{default:c(()=>[re]),_:1})):p("",!0)]),e("div",de,[e("div",ce,[pe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[7]||(t[7]=u=>s(o)("code8"))},[e("span",me,[a(m,{class:"me-2"}),r(" Code ")])])]),ue,s(l).includes("code8")?(n(),d(i,{key:0},{default:c(()=>[fe]),_:1})):p("",!0)]),e("div",he,[e("div",be,[xe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[8]||(t[8]=u=>s(o)("code9"))},[e("span",ve,[a(m,{class:"me-2"}),r(" Code ")])])]),_e,s(l).includes("code9")?(n(),d(i,{key:0},{default:c(()=>[ye]),_:1})):p("",!0)]),e("div",ge,[e("div",ke,[we,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[9]||(t[9]=u=>s(o)("code10"))},[e("span",Ce,[a(m,{class:"me-2"}),r(" Code ")])])]),je,s(l).includes("code10")?(n(),d(i,{key:0},{default:c(()=>[Se]),_:1})):p("",!0)]),e("div",Ee,[e("div",Te,[Fe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[10]||(t[10]=u=>s(o)("code11"))},[e("span",Ie,[a(m,{class:"me-2"}),r(" Code ")])])]),Oe,s(l).includes("code11")?(n(),d(i,{key:0},{default:c(()=>[Ne]),_:1})):p("",!0)]),e("div",Le,[e("div",$e,[qe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[11]||(t[11]=u=>s(o)("code12"))},[e("span",De,[a(m,{class:"me-2"}),r(" Code ")])])]),ze,s(l).includes("code12")?(n(),d(i,{key:0},{default:c(()=>[Pe]),_:1})):p("",!0)]),e("div",Re,[e("div",Be,[Ve,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[12]||(t[12]=u=>s(o)("code13"))},[e("span",Ae,[a(m,{class:"me-2"}),r(" Code ")])])]),Me,s(l).includes("code13")?(n(),d(i,{key:0},{default:c(()=>[He]),_:1})):p("",!0)]),e("div",Ge,[e("div",Ze,[Ue,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[13]||(t[13]=u=>s(o)("code14"))},[e("span",We,[a(m,{class:"me-2"}),r(" Code ")])])]),Xe,s(l).includes("code14")?(n(),d(i,{key:0},{default:c(()=>[Je]),_:1})):p("",!0)]),e("div",Ke,[e("div",Qe,[Ye,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[14]||(t[14]=u=>s(o)("code15"))},[e("span",et,[a(m,{class:"me-2"}),r(" Code ")])])]),tt,s(l).includes("code15")?(n(),d(i,{key:0},{default:c(()=>[st]),_:1})):p("",!0)]),e("div",nt,[e("div",lt,[ot,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[15]||(t[15]=u=>s(o)("code16"))},[e("span",it,[a(m,{class:"me-2"}),r(" Code ")])])]),at,s(l).includes("code16")?(n(),d(i,{key:0},{default:c(()=>[rt]),_:1})):p("",!0)]),e("div",dt,[e("div",ct,[pt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[16]||(t[16]=u=>s(o)("code17"))},[e("span",mt,[a(m,{class:"me-2"}),r(" Code ")])])]),ut,s(l).includes("code17")?(n(),d(i,{key:0},{default:c(()=>[ft]),_:1})):p("",!0)]),e("div",ht,[e("div",bt,[xt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[17]||(t[17]=u=>s(o)("code18"))},[e("span",vt,[a(m,{class:"me-2"}),r(" Code ")])])]),_t,s(l).includes("code18")?(n(),d(i,{key:0},{default:c(()=>[yt]),_:1})):p("",!0)]),e("div",gt,[e("div",kt,[wt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[18]||(t[18]=u=>s(o)("code19"))},[e("span",Ct,[a(m,{class:"me-2"}),r(" Code ")])])]),jt,s(l).includes("code19")?(n(),d(i,{key:0},{default:c(()=>[St]),_:1})):p("",!0)]),e("div",Et,[e("div",Tt,[Ft,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[19]||(t[19]=u=>s(o)("code20"))},[e("span",It,[a(m,{class:"me-2"}),r(" Code ")])])]),Ot,s(l).includes("code20")?(n(),d(i,{key:0},{default:c(()=>[Nt]),_:1})):p("",!0)]),e("div",Lt,[e("div",$t,[qt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[20]||(t[20]=u=>s(o)("code21"))},[e("span",Dt,[a(m,{class:"me-2"}),r(" Code ")])])]),zt,s(l).includes("code21")?(n(),d(i,{key:0},{default:c(()=>[Pt]),_:1})):p("",!0)]),e("div",Rt,[e("div",Bt,[Vt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[21]||(t[21]=u=>s(o)("code22"))},[e("span",At,[a(m,{class:"me-2"}),r(" Code ")])])]),Mt,s(l).includes("code22")?(n(),d(i,{key:0},{default:c(()=>[Ht]),_:1})):p("",!0)]),e("div",Gt,[e("div",Zt,[Ut,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[22]||(t[22]=u=>s(o)("code23"))},[e("span",Wt,[a(m,{class:"me-2"}),r(" Code ")])])]),Xt,s(l).includes("code23")?(n(),d(i,{key:0},{default:c(()=>[Jt]),_:1})):p("",!0)]),e("div",Kt,[e("div",Qt,[Yt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[23]||(t[23]=u=>s(o)("code24"))},[e("span",es,[a(m,{class:"me-2"}),r(" Code ")])])]),ts,s(l).includes("code24")?(n(),d(i,{key:0},{default:c(()=>[ss]),_:1})):p("",!0)]),e("div",ns,[e("div",ls,[os,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[24]||(t[24]=u=>s(o)("code25"))},[e("span",is,[a(m,{class:"me-2"}),r(" Code ")])])]),as,s(l).includes("code25")?(n(),d(i,{key:0},{default:c(()=>[rs]),_:1})):p("",!0)]),e("div",ds,[e("div",cs,[ps,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[25]||(t[25]=u=>s(o)("code26"))},[e("span",ms,[a(m,{class:"me-2"}),r(" Code ")])])]),us,s(l).includes("code26")?(n(),d(i,{key:0},{default:c(()=>[fs]),_:1})):p("",!0)]),e("div",hs,[e("div",bs,[xs,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[26]||(t[26]=u=>s(o)("code28"))},[e("span",vs,[a(m,{class:"me-2"}),r(" Code ")])])]),_s,s(l).includes("code28")?(n(),d(i,{key:0},{default:c(()=>[ys]),_:1})):p("",!0)])])]))}});export{Ss as default};
