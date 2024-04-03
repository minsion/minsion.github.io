import{u as p,r as o,s as u,ad as b,a as c,j as s,b as e,D as f,F as x,d as w,ae as N,J as v,af as i}from"./index-db6af04d.js";const y=()=>{const t=p();o.useEffect(()=>{t(u("Unlock Box"))});const n=b(),d=c(a=>a.themeConfig.rtlClass)==="rtl",r=c(a=>a.themeConfig),m=a=>{g(a),a.toLowerCase()==="ae"?t(i("rtl")):t(i("ltr"))},[l,g]=o.useState(r.locale),h=()=>{n("/")};return s("div",{children:[e("div",{className:"absolute inset-0",children:e("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),s("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e("div",{className:"relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]",children:s("div",{className:"relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20",children:[e("div",{className:"absolute top-6 end-6",children:e("div",{className:"dropdown",children:e(f,{offset:[0,8],placement:`${d?"bottom-start":"bottom-end"}`,btnClassName:"flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black",button:s(x,{children:[e("div",{children:e("img",{src:`/assets/images/flags/${l.toUpperCase()}.svg`,alt:"image",className:"h-5 w-5 rounded-full object-cover"})}),e("div",{className:"text-base font-bold uppercase",children:l}),e("span",{className:"shrink-0",children:e(w,{})})]}),children:e("ul",{className:"!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]",children:r.languageList.map(a=>e("li",{children:s("button",{type:"button",className:`flex w-full hover:text-primary rounded-lg ${l===a.code?"bg-primary/10 text-primary":""}`,onClick:()=>{N.changeLanguage(a.code),m(a.code)},children:[e("img",{src:`/assets/images/flags/${a.code.toUpperCase()}.svg`,alt:"flag",className:"w-5 h-5 object-cover rounded-full"}),e("span",{className:"ltr:ml-3 rtl:mr-3",children:a.name})]})},a.code))})})})}),s("div",{className:"mx-auto w-full max-w-[440px]",children:[s("div",{className:"mb-10 flex items-center",children:[e("div",{className:"flex h-16 w-16 items-end justify-center overflow-hidden rounded-full bg-[#00AB55] ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/auth/user.png",className:"w-full object-cover",alt:"images"})}),s("div",{className:"flex-1",children:[e("h4",{className:"text-2xl dark:text-white",children:"Shaun Park"}),e("p",{className:"text-white-dark",children:"Enter your password to unlock your ID"})]})]}),s("form",{className:"space-y-5",onSubmit:h,children:[s("div",{children:[e("label",{htmlFor:"Password",className:"dark:text-white",children:"Password"}),s("div",{className:"relative text-white-dark",children:[e("input",{id:"Password",type:"password",placeholder:"Enter Password",className:"form-input ps-10 placeholder:text-white-dark"}),e("span",{className:"absolute start-4 top-1/2 -translate-y-1/2",children:e(v,{fill:!0})})]})]}),e("button",{type:"submit",className:"btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:"UNLOCK"})]})]})]})})]})]})};export{y as default};