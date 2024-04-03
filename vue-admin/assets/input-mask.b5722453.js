import{c as f,_ as r}from"./codePreview.b8512f6b.js";import{d as u,u as v,o,b as x,e,f as d,g as s,j as i,G as l,X as n,w as m,D as p,U as y}from"./index.ddf2ada6.js";import{I as b}from"./icon-bell.2ecf9464.js";import{I as h}from"./icon-code.a018a24c.js";const g=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Forms")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Input Mask")])],-1),w={class:"pt-5 space-y-8"},M={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},A={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},C=e("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),j=e("a",{href:"https://www.npmjs.com/package/maska",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/maska",-1),D={class:"grid grid-cols-1 xl:grid-cols-2 gap-6"},$={class:"panel"},I={class:"flex items-center justify-between mb-5"},B=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Static Mask Basic",-1),N={class:"flex items-center"},V={class:"mb-5"},P=e("p",{class:"text-white-dark mb-5"},[i("Input mask are use with "),e("span",{class:"text-danger"},"input"),i(" tags.")],-1),S={class:"grid grid-cols-1 md:grid-cols-2 items-end gap-4"},E=e("label",{for:"staticMask1",class:"text-white-dark"},`v-maska="'##-#######'" (99-9999999)`,-1),F={id:"staticMask1",type:"text",placeholder:"__-_______",class:"form-input"},G=e("label",{for:"staticMask2",class:"text-white-dark"},`v-maska="'AA-####'" (aa-9999)`,-1),T={id:"staticMask2",type:"text",placeholder:"__-____",class:"form-input"},U=e("pre",null,`<!-- static mask basic -->
<form>
  <fieldset class="grid grid-cols-1 md:grid-cols-2 items-end gap-4">
    <div>
      <label for="staticMask1" class="text-white-dark">v-maska="'##-#######'" (99-9999999)</label>
      <input id="staticMask1" type="text" placeholder="__-_______" class="form-input" v-maska="'##-#######'" />
    </div>
    <div>
      <label for="staticMask2" class="text-white-dark">v-maska="'AA-####'" (aa-9999)</label>
      <input id="staticMask2" type="text" placeholder="__-____" class="form-input" v-maska="'aa-####'" />
    </div>
  </fieldset>
</form>
`,-1),X={class:"panel"},q={class:"flex items-center justify-between mb-5"},z=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Alternate masks",-1),H={class:"flex items-center"},J={class:"mb-5"},K={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},L=e("label",{for:"altnMask1",class:"text-white-dark"},`v-maska="'##.#'" (99.9)`,-1),O={id:"altnMask1",type:"text",placeholder:"__._",class:"form-input"},Q=e("label",{for:"altnMask2",class:"text-white-dark"},`v-maska="'##.##'" (99.99)`,-1),R={id:"altnMask2",type:"text",placeholder:"__.__",class:"form-input"},W=e("pre",null,`<!-- alternate masks -->
<form>
  <fieldset class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label for="altnMask1" class="text-white-dark">v-maska="'##.#'" (99.9)</label>
      <input id="altnMask1" type="text" placeholder="__._" class="form-input" v-maska="'##.#'" />
    </div>
    <div>
      <label for="altnMask2" class="text-white-dark">v-maska="'##.##'" (99.99)</label>
      <input id="altnMask2" type="text" placeholder="__.__" class="form-input" v-maska="'##.##'" />
    </div>
  </fieldset>
</form>
`,-1),Y={class:"panel"},Z={class:"flex items-center justify-between mb-5"},ee=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Dynamic Syntax",-1),te={class:"flex items-center"},se={class:"mb-5"},ae={class:"grid grid-cols-1 md:grid-cols-3 items-end gap-4"},le=e("label",{for:"dynamicMask1",class:"text-white-dark"},`v-maska="'#-AAA###'" (9-a{1,3}9{1,3})`,-1),ie={id:"dynamicMask1",type:"text",placeholder:"_-__",class:"form-input"},oe=e("label",{for:"dynamicMask2",class:"text-white-dark"},`v-maska="'AA-####'" (aa-9{1,4})`,-1),de={id:"dynamicMask2",type:"text",placeholder:"__-____",class:"form-input"},_e=e("label",{for:"dynamicMask3",class:"text-white-dark"},`v-maska="'AA-##'" (aa-9{1,2})`,-1),ce={id:"dynamicMask3",type:"text",placeholder:"__-__",class:"form-input"},re=e("pre",null,`<!-- dynamic syntax -->
<form>
  <fieldset class="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
    <div>
      <label for="dynamicMask1" class="text-white-dark">v-maska="'#-AAA###'" (9-a{1,3}9{1,3})</label>
      <input id="dynamicMask1" type="text" placeholder="_-__" class="form-input" v-maska="'#-AAA###'" />
    </div>
    <div>
      <label for="dynamicMask2" class="text-white-dark">v-maska="'AA-####'" (aa-9{1,4})</label>
      <input id="dynamicMask2" type="text" placeholder="__-____" class="form-input" v-maska="'AA-####'" />
    </div>
    <div>
      <label for="dynamicMask3" class="text-white-dark">v-maska="'AA-##'" (aa-9{1,2})</label>
      <input id="dynamicMask3" type="text" placeholder="__-__" class="form-input" v-maska="'AA-##'" />
    </div>
  </fieldset>
</form>
`,-1),ne={class:"panel"},me={class:"flex items-center justify-between mb-5"},pe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Date",-1),he={class:"flex items-center"},ke={class:"mb-5"},fe={class:"grid grid-cols-1 md:grid-cols-3 items-end gap-4"},ue=e("label",{for:"dateMask1",class:"text-white-dark"},`v-maska="'##/##/####'" (dd/mm/yyyy)`,-1),ve={id:"dateMask1",type:"text",placeholder:"__/__/____",class:"form-input"},xe=e("label",{for:"dateMask2",class:"text-white-dark"},`v-maska="'##-##-####'" (99-99-9999)`,-1),ye={id:"dateMask2",type:"text",placeholder:"__-__-____",class:"form-input"},be=e("label",{for:"dateMask3",class:"text-white-dark"},`v-maska="'## December, ####'" (99 December, 9999)`,-1),ge={id:"dateMask3",type:"text",placeholder:"__ December, ____",class:"form-input"},we=e("pre",null,`<!-- date -->
<form>
  <fieldset class="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
    <div>
      <label for="dateMask1" class="text-white-dark">v-maska="'##/##/####'" (dd/mm/yyyy)</label>
      <input id="dateMask1" type="text" placeholder="__/__/____" class="form-input" v-maska="'##/##/####'" />
    </div>
    <div>
      <label for="dateMask2" class="text-white-dark">v-maska="'##-##-####'" (99-99-9999)</label>
      <input id="dateMask2" type="text" placeholder="__-__-____" class="form-input" v-maska="'##-##-####'" />
    </div>
    <div>
      <label for="dateMask3" class="text-white-dark">v-maska="'## December, ####'" (99 December, 9999)</label>
      <input id="dateMask3" type="text" placeholder="__ December, ____" class="form-input" v-maska="'## December, ####'" />
    </div>
  </fieldset>
</form>
`,-1),Me={class:"panel"},Ae={class:"flex items-center justify-between mb-5"},Ce=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"IP",-1),je={class:"flex items-center"},De={class:"mb-5"},$e=e("label",{for:"ipMask",class:"text-white-dark"},`v-maska="'###.###.###.###'" (192.198.1.1)`,-1),Ie={id:"ipMask",type:"text",placeholder:"___.___.___.___",class:"form-input"},Be=e("pre",null,`<!-- ip -->
<form>
  <fieldset>
    <label for="ipMask" class="text-white-dark">v-maska="'###.###.###.###'" (192.198.1.1)</label>
    <input id="ipMask" type="text" placeholder="___.___.___.___" class="form-input" v-maska="'###.###.###.###'" />
  </fieldset>
</form>
`,-1),Ne={class:"panel"},Ve={class:"flex items-center justify-between mb-5"},Pe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Phone",-1),Se={class:"flex items-center"},Ee={class:"mb-5"},Fe=e("label",{for:"phoneMask",class:"text-white-dark"},`v-maska="'(###) ###-####'" ((999) 999-9999)`,-1),Ge={id:"phoneMask",type:"text",placeholder:"(___) ___-____",class:"form-input"},Te=e("pre",null,`<!-- phone -->
<form>
  <fieldset>
    <label for="phoneMask" class="text-white-dark">v-maska="'(###) ###-####'" ((999) 999-9999)</label>
    <input id="phoneMask" type="text" placeholder="(___) ___-____" class="form-input" v-maska="'(###) ###-####'" />
  </fieldset>
</form>
`,-1),Ue={class:"panel"},Xe={class:"flex items-center justify-between mb-5"},qe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Currency",-1),ze={class:"flex items-center"},He={class:"mb-5"},Je=e("label",{for:"currencyMask",class:"text-white-dark"},"$999,9999,999.99",-1),Ke={id:"currencyMask",type:"text",placeholder:"$___,____,___.__",class:"form-input"},Le=e("pre",null,`<!-- currency -->
<form>
  <fieldset>
    <label for="currencyMask" class="text-white-dark">$999,9999,999.99</label>
    <input id="currencyMask" type="text" placeholder="$___,____,___.__" class="form-input" v-maska="'$###,####,###.##'" />
  </fieldset>
</form>
`,-1),et=u({__name:"input-mask",setup(Oe){v({title:"Input Mask"});const{codeArr:_,toggleCode:c}=f();return(Qe,t)=>{const a=y("maska");return o(),x("div",null,[g,e("div",w,[e("div",M,[e("div",A,[d(b)]),C,j]),e("div",D,[e("div",$,[e("div",I,[B,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=k=>s(c)("code1"))},[e("span",N,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",V,[P,e("form",null,[e("fieldset",S,[e("div",null,[E,l(e("input",F,null,512),[[a,"##-#######"]])]),e("div",null,[G,l(e("input",T,null,512),[[a,"aa-####"]])])])])]),s(_).includes("code1")?(o(),n(r,{key:0},{default:m(()=>[U]),_:1})):p("",!0)]),e("div",X,[e("div",q,[z,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[1]||(t[1]=k=>s(c)("code2"))},[e("span",H,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",J,[e("form",null,[e("fieldset",K,[e("div",null,[L,l(e("input",O,null,512),[[a,"##.#"]])]),e("div",null,[Q,l(e("input",R,null,512),[[a,"##.##"]])])])])]),s(_).includes("code2")?(o(),n(r,{key:0},{default:m(()=>[W]),_:1})):p("",!0)]),e("div",Y,[e("div",Z,[ee,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=k=>s(c)("code3"))},[e("span",te,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",se,[e("form",null,[e("fieldset",ae,[e("div",null,[le,l(e("input",ie,null,512),[[a,"#-AAA###"]])]),e("div",null,[oe,l(e("input",de,null,512),[[a,"AA-####"]])]),e("div",null,[_e,l(e("input",ce,null,512),[[a,"AA-##"]])])])])]),s(_).includes("code3")?(o(),n(r,{key:0},{default:m(()=>[re]),_:1})):p("",!0)]),e("div",ne,[e("div",me,[pe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[3]||(t[3]=k=>s(c)("code4"))},[e("span",he,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",ke,[e("form",null,[e("fieldset",fe,[e("div",null,[ue,l(e("input",ve,null,512),[[a,"##/##/####"]])]),e("div",null,[xe,l(e("input",ye,null,512),[[a,"##-##-####"]])]),e("div",null,[be,l(e("input",ge,null,512),[[a,"## December, ####"]])])])])]),s(_).includes("code4")?(o(),n(r,{key:0},{default:m(()=>[we]),_:1})):p("",!0)]),e("div",Me,[e("div",Ae,[Ce,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[4]||(t[4]=k=>s(c)("code5"))},[e("span",je,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",De,[e("form",null,[e("fieldset",null,[$e,l(e("input",Ie,null,512),[[a,"###.###.###.###"]])])])]),s(_).includes("code5")?(o(),n(r,{key:0},{default:m(()=>[Be]),_:1})):p("",!0)]),e("div",Ne,[e("div",Ve,[Pe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[5]||(t[5]=k=>s(c)("code6"))},[e("span",Se,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",Ee,[e("form",null,[e("fieldset",null,[Fe,l(e("input",Ge,null,512),[[a,"(###) ###-####"]])])])]),s(_).includes("code6")?(o(),n(r,{key:0},{default:m(()=>[Te]),_:1})):p("",!0)]),e("div",Ue,[e("div",Xe,[qe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[6]||(t[6]=k=>s(c)("code7"))},[e("span",ze,[d(h,{class:"me-2"}),i(" Code ")])])]),e("div",He,[e("form",null,[e("fieldset",null,[Je,l(e("input",Ke,null,512),[[a,"$###,####,###.##"]])])])]),s(_).includes("code7")?(o(),n(r,{key:0},{default:m(()=>[Le]),_:1})):p("",!0)])])])])}}});export{et as default};
