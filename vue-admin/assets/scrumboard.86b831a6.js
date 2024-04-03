import{d as Z,u as tt,a as et,r as b,o as p,b as v,e as t,f as l,I as L,j as O,F as S,z as N,w as r,g as n,p as st,B as m,q as lt,D as at,T as U,a9 as ot,aa as it,a4 as $,N as z,G as w,H as C}from"./index.ddf2ada6.js";import{_ as nt}from"./carousel1.2da0475c.js";import{V as rt}from"./vue-draggable-next.esm-bundler.e36f707d.js";import{S as dt}from"./sweetalert2.all.06de7800.js";import{_ as ct}from"./icon-plus-circle.vue_vue_type_script_setup_true_lang.67340101.js";import{I as B}from"./icon-trash-lines.70f797dc.js";import{f as A,N as D,o as x,V as P,_ as E}from"./transition.669728c5.js";import"./dom.b01be108.js";import"./micro-task.926e0e8e.js";import"./open-closed.7a324678.js";const ut={class:"relative pt-5"},pt={class:"h-full -mx-2"},vt={class:"overflow-x-auto flex items-start flex-nowrap gap-5 px-2 pb-2"},mt={class:"flex justify-between mb-5"},ft={class:"text-base font-semibold"},bt={class:"flex items-center"},gt=["onClick"],_t={class:"dropdown"},ht={type:"button",class:"hover:text-primary"},yt=["onClick"],xt=["onClick"],kt=["onClick"],wt=["onClick"],Ct={class:"shadow bg-[#f4f4f4] dark:bg-white-dark/20 p-3 pb-5 rounded-md mb-5 space-y-3 cursor-move"},Tt={key:0,src:nt,alt:"images",class:"h-32 w-full object-cover rounded-md"},jt={class:"text-base font-medium"},It={class:"break-all"},St={class:"flex gap-2 items-center flex-wrap"},Nt={class:"ltr:ml-2 rtl:mr-2"},$t={key:1,class:"btn px-2 py-1 flex text-white-dark dark:border-white-dark/50 shadow-none"},At=t("span",{class:"ltr:ml-2 rtl:mr-2"},"No Tags",-1),Dt={class:"flex items-center justify-between"},Pt={class:"font-medium flex items-center hover:text-primary"},Et={class:"flex items-center"},Mt=["onClick"],Vt=["onClick"],Jt={class:"pt-3"},Lt=["onClick"],Ot={class:"fixed inset-0 overflow-y-auto"},Ut={class:"flex min-h-full items-center justify-center px-4 py-8"},zt={class:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"},Bt={class:"p-5"},qt=["onSubmit"],Ft={class:"grid gap-5"},Ht=t("label",{for:"title"},"Name",-1),Wt={class:"flex justify-end items-center mt-8"},Yt={type:"submit",class:"btn btn-primary ltr:ml-4 rtl:mr-4"},Gt={class:"fixed inset-0 overflow-y-auto"},Kt={class:"flex min-h-full items-center justify-center px-4 py-8"},Xt={class:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"},Qt={class:"p-5"},Rt=["onSubmit"],Zt={class:"grid gap-5"},te=t("label",{for:"taskTitle"},"Name",-1),ee=t("label",{for:"taskTag"},"Tag",-1),se=t("label",{for:"taskdesc"},"Description",-1),le={class:"flex justify-end items-center mt-8"},ae={type:"submit",class:"btn btn-primary ltr:ml-4 rtl:mr-4"},oe={class:"fixed inset-0 overflow-y-auto"},ie={class:"flex min-h-full items-center justify-center px-4 py-8"},ne=t("div",{class:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Delete Task ",-1),re={class:"p-5 text-center"},de={class:"text-white bg-danger ring-4 ring-danger/30 p-4 rounded-full w-fit mx-auto"},ce=t("div",{class:"text-base sm:w-3/4 mx-auto mt-5"},"Are you sure you want to delete Task?",-1),ue={class:"flex justify-center items-center mt-8"},we=Z({__name:"scrumboard",setup(pe){tt({title:"Scrumboard"});const q=et(),c=b({id:null,title:""}),a=b({projectId:null,id:null,title:"",description:"",tags:""}),T=b(null),g=b(!1),_=b(!1),h=b(!1),u=b([{id:1,title:"In Progress",tasks:[{projectId:1,id:1,title:"Creating a new Portfolio on Dribble",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",image:!0,date:" 08 Aug, 2020",tags:["designing"]},{projectId:1,id:2,title:"Singapore Team Meet",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",date:" 09 Aug, 2020",tags:["meeting"]}]},{id:2,title:"Pending",tasks:[{projectId:2,id:1,title:"Plan a trip to another country",description:"",date:" 10 Sep, 2020"}]},{id:3,title:"Complete",tasks:[{projectId:3,id:1,title:"Dinner with Kelly Young",description:"",date:" 08 Aug, 2020"},{projectId:3,id:2,title:"Launch New SEO Wordpress Theme ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:" 09 Aug, 2020"}]},{id:4,title:"Working",tasks:[]}]),M=(o=null)=>{setTimeout(()=>{c.value={id:null,title:""},o&&(c.value=JSON.parse(JSON.stringify(o))),g.value=!0})},F=()=>{if(!c.value.title)return y("Title is required.","error"),!1;if(c.value.id){const o=u.value.find(e=>e.id===c.value.id);o.title=c.value.title}else{const e={id:(u.value.length?u.value.reduce((f,s)=>s.id>f?s.id:f,u.value[0].id):0)+1,title:c.value.title,tasks:[]};u.value.push(e)}y("Project has been saved successfully."),g.value=!1},H=o=>{u.value=u.value.filter(e=>e.id!=o.id),y("Project has been deleted successfully.")},W=o=>{o.tasks=[]},j=(o,e=null)=>{a.value={projectId:null,id:null,title:"",description:"",tags:""},e&&(a.value=JSON.parse(JSON.stringify(e)),a.value.tags=a.value.tags?a.value.tags.toString():""),a.value.projectId=o,_.value=!0},Y=()=>{var e,f,s;if(!a.value.title)return y("Title is required.","error"),!1;const o=u.value.find(i=>i.id===a.value.projectId);if(a.value.id){const i=o.tasks.find(d=>d.id===a.value.id);i.title=a.value.title,i.description=a.value.description,i.tags=((e=a.value.tags)==null?void 0:e.length)>0?a.value.tags.split(","):[]}else{let i=0;(f=o.tasks)!=null&&f.length&&(i=o.tasks.reduce((V,J)=>J.id>V?J.id:V,o.tasks[0].id));const d=new Date,k=String(d.getDate()).padStart(2,"0"),I=String(d.getMonth()),X=d.getFullYear(),Q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],R={projectId:a.value.projectId,id:i+1,title:a.value.title,description:a.value.description,date:k+" "+Q[I]+", "+X,tags:((s=a.value.tags)==null?void 0:s.length)>0?a.value.tags.split(","):[]};o.tasks.push(R)}y("Task has been saved successfully."),_.value=!1},G=(o,e=null)=>{T.value=e,setTimeout(()=>{h.value=!0},10)},K=()=>{let o=u.value.find(e=>e.id===T.value.projectId);o.tasks=o.tasks.filter(e=>e.id!=T.value.id),y("Task has been deleted successfully."),h.value=!1},y=(o="",e="success")=>{dt.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:e,title:o,padding:"10px 20px"})};return(o,e)=>{const f=st("Popper");return p(),v("div",null,[t("div",null,[t("button",{type:"button",class:"btn btn-primary flex",onClick:e[0]||(e[0]=s=>M())},[l(L,{class:"w-5 h-5 ltr:mr-3 rtl:ml-3"}),O(" Add Project ")])]),t("div",ut,[t("div",pt,[t("div",vt,[(p(!0),v(S,null,N(u.value,s=>(p(),v("div",{key:s.id,class:"panel w-80 flex-none"},[t("div",mt,[t("h4",ft,m(s.title),1),t("div",bt,[t("button",{type:"button",class:"hover:text-primary ltr:mr-2 rtl:ml-2",onClick:i=>j(s.id)},[l(ct)],8,gt),t("div",_t,[l(f,{placement:n(q).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0"},{content:r(({close:i})=>[t("ul",{onClick:d=>i(),class:"text-black dark:text-white-dark whitespace-nowrap"},[t("li",null,[t("a",{href:"javascript:;",onClick:d=>M(s)},"Edit ",8,xt)]),t("li",null,[t("a",{href:"javascript:;",onClick:d=>H(s)},"Delete ",8,kt)]),t("li",null,[t("a",{href:"javascript:;",onClick:d=>W(s)},"Clear All ",8,wt)])],8,yt)]),default:r(()=>[t("button",ht,[l(lt,{class:"opacity-70 hover:opacity-100"})])]),_:2},1032,["placement"])])])]),l(n(rt),{class:"connect-sorting-content min-h-[150px]",group:"default","ghost-class":"sortable-ghost","drag-class":"sortable-drag",animation:200},{default:r(()=>[(p(!0),v(S,null,N(s.tasks,i=>{var d;return p(),v("div",{class:"sortable-list",key:s.id+""+i.id},[t("div",Ct,[i.image?(p(),v("img",Tt)):at("",!0),t("div",jt,m(i.title),1),t("p",It,m(i.description),1),t("div",St,[(d=i.tags)!=null&&d.length?(p(!0),v(S,{key:0},N(i.tags,(k,I)=>(p(),v("div",{key:I,class:"btn px-2 py-1 flex btn-outline-primary"},[l(U,{class:"shrink-0"}),t("span",Nt,m(k),1)]))),128)):(p(),v("div",$t,[l(U,{class:"shrink-0"}),At]))]),t("div",Dt,[t("div",Pt,[l(ot,{class:"ltr:mr-3 rtl:ml-3 shrink-0"}),t("span",null,m(i.date),1)]),t("div",Et,[t("button",{type:"button",class:"hover:text-info",onClick:k=>j(s.id,i)},[l(it,{class:"ltr:mr-3 rtl:ml-3"})],8,Mt),t("button",{type:"button",class:"hover:text-danger",onClick:k=>G(s.id,i)},[l(B)],8,Vt)])])])])}),128))]),_:2},1024),t("div",Jt,[t("button",{type:"button",class:"btn btn-primary mx-auto",onClick:i=>j(s.id)},[l(L),O(" Add Task ")],8,Lt)])]))),128))])])]),l(n(A),{appear:"",show:g.value,as:"template"},{default:r(()=>[l(n(D),{as:"div",onClose:e[4]||(e[4]=s=>g.value=!1),class:"relative z-[51]"},{default:r(()=>[l(n(x),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[l(n(P),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Ot,[t("div",Ut,[l(n(x),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[l(n(E),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:r(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[1]||(e[1]=s=>g.value=!1)},[l($)]),t("div",zt,m(c.value.id?"Edit Project":"Add Project"),1),t("div",Bt,[t("form",{onSubmit:z(F,["prevent"])},[t("div",Ft,[t("div",null,[Ht,w(t("input",{id:"title","onUpdate:modelValue":e[2]||(e[2]=s=>c.value.title=s),type:"text",class:"form-input mt-1",placeholder:"Enter Name"},null,512),[[C,c.value.title]])])]),t("div",Wt,[t("button",{type:"button",class:"btn btn-outline-danger",onClick:e[3]||(e[3]=s=>g.value=!1)},"Cancel"),t("button",Yt,m(c.value.id?"Update":"Add"),1)])],40,qt)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]),l(n(A),{appear:"",show:_.value,as:"template"},{default:r(()=>[l(n(D),{as:"div",onClose:e[10]||(e[10]=s=>_.value=!1),class:"relative z-[51]"},{default:r(()=>[l(n(x),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[l(n(P),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Gt,[t("div",Kt,[l(n(x),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[l(n(E),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:r(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[5]||(e[5]=s=>_.value=!1)},[l($)]),t("div",Xt,m(a.value.id?"Edit Task":"Add Task"),1),t("div",Qt,[t("form",{onSubmit:z(Y,["prevent"])},[t("div",Zt,[t("div",null,[te,w(t("input",{id:"taskTitle","onUpdate:modelValue":e[6]||(e[6]=s=>a.value.title=s),type:"text",class:"form-input",placeholder:"Enter Name"},null,512),[[C,a.value.title]])]),t("div",null,[ee,w(t("input",{id:"taskTag","onUpdate:modelValue":e[7]||(e[7]=s=>a.value.tags=s),type:"text",class:"form-input",placeholder:"Enter Tag"},null,512),[[C,a.value.tags]])]),t("div",null,[se,w(t("textarea",{id:"taskdesc","onUpdate:modelValue":e[8]||(e[8]=s=>a.value.description=s),class:"form-textarea min-h-[130px]",placeholder:"Enter Description"},null,512),[[C,a.value.description]])])]),t("div",le,[t("button",{type:"button",class:"btn btn-outline-danger",onClick:e[9]||(e[9]=s=>_.value=!1)},"Cancel"),t("button",ae,m(a.value.id?"Update":"Add"),1)])],40,Rt)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]),l(n(A),{appear:"",show:h.value,as:"template"},{default:r(()=>[l(n(D),{as:"div",onClose:e[14]||(e[14]=s=>h.value=!1),class:"relative z-[51]"},{default:r(()=>[l(n(x),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[l(n(P),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",oe,[t("div",ie,[l(n(x),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[l(n(E),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:r(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[11]||(e[11]=s=>h.value=!1)},[l($)]),ne,t("div",re,[t("div",de,[l(B)]),ce,t("div",ue,[t("button",{type:"button",class:"btn btn-outline-danger",onClick:e[12]||(e[12]=s=>h.value=!1)},"Cancel"),t("button",{type:"button",class:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:e[13]||(e[13]=s=>K())},"Delete")])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}});export{we as default};
