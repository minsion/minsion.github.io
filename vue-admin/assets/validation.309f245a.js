import{b6 as Ee,r as L,b7 as Ce,$ as J,b8 as ne,a7 as ue,a0 as Ve,c as S,g as t,b9 as Le,ba as Re,Q as de,O as ce,a8 as pe,d as Pe,u as ze,o as v,b as _,e,f as Z,j as M,N as B,y as q,G as w,H as z,D as b,X as D,w as Y,a5 as Te,W as le}from"./index.ddf2ada6.js";import{c as je,_ as W}from"./codePreview.b8512f6b.js";import{S as qe}from"./sweetalert2.all.06de7800.js";import{I as Ae}from"./icon-bell.2ecf9464.js";import{I as H}from"./icon-code.a018a24c.js";function fe(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(r).reduce((a,s)=>(o.includes(s)||(a[s]=t(r[s])),a),{})}function se(r){return typeof r=="function"}function Ue(r){return Le(r)||Re(r)}function ge(r,o,a){let s=r;const n=o.split(".");for(let p=0;p<n.length;p++){if(!s[n[p]])return a;s=s[n[p]]}return s}function ie(r,o,a){return S(()=>r.some(s=>ge(o,s,{[a]:!1})[a]))}function ve(r,o,a){return S(()=>r.reduce((s,n)=>{const p=ge(o,n,{[a]:!1})[a]||[];return s.concat(p)},[]))}function xe(r,o,a,s){return r.call(s,t(o),t(a),s)}function _e(r){return r.$valid!==void 0?!r.$valid:!r}function Oe(r,o,a,s,n,p,N){let{$lazy:d,$rewardEarly:g}=n,c=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],$=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,E=arguments.length>10?arguments[10]:void 0;const k=L(!!s.value),l=L(0);a.value=!1;const y=J([o,s].concat(c,E),()=>{if(d&&!s.value||g&&!f.value&&!a.value)return;let u;try{u=xe(r,o,$,N)}catch(V){u=Promise.reject(V)}l.value++,a.value=!!l.value,k.value=!1,Promise.resolve(u).then(V=>{l.value--,a.value=!!l.value,p.value=V,k.value=_e(V)}).catch(V=>{l.value--,a.value=!!l.value,p.value=V,k.value=!0})},{immediate:!0,deep:typeof o=="object"});return{$invalid:k,$unwatch:y}}function Ge(r,o,a,s,n,p,N,d){let{$lazy:g,$rewardEarly:c}=s;const $=()=>({}),f=S(()=>{if(g&&!a.value||c&&!d.value)return!1;let E=!0;try{const k=xe(r,o,N,p);n.value=k,E=_e(k)}catch(k){n.value=k}return E});return{$unwatch:$,$invalid:f}}function Ze(r,o,a,s,n,p,N,d,g,c,$){const f=L(!1),E=r.$params||{},k=L(null);let l,y;r.$async?{$invalid:l,$unwatch:y}=Oe(r.$validator,o,f,a,s,k,n,r.$watchTargets,g,c,$):{$invalid:l,$unwatch:y}=Ge(r.$validator,o,a,s,k,n,g,c);const u=r.$message;return{$message:se(u)?S(()=>u(fe({$pending:f,$invalid:l,$params:fe(E),$model:o,$response:k,$validator:p,$propertyPath:d,$property:N}))):u||"",$params:E,$pending:f,$invalid:l,$response:k,$unwatch:y}}function Ie(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o=t(r),a=Object.keys(o),s={},n={},p={};let N=null;return a.forEach(d=>{const g=o[d];switch(!0){case se(g.$validator):s[d]=g;break;case se(g):s[d]={$validator:g};break;case d==="$validationGroups":N=g;break;case d.startsWith("$"):p[d]=g;break;default:n[d]=g}}),{rules:s,nestedValidators:n,config:p,validationGroups:N}}function Me(){}const Be="__root";function Ne(r,o,a){if(a)return o?o(r()):r();try{var s=Promise.resolve(r());return o?s.then(o):s}catch(n){return Promise.reject(n)}}function De(r,o){return Ne(r,Me,o)}function Ye(r,o){var a=r();return a&&a.then?a.then(o):o(a)}function We(r){return function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];try{return Promise.resolve(r.apply(this,o))}catch(s){return Promise.reject(s)}}}function He(r,o,a,s,n,p,N,d,g){const c=Object.keys(r),$=s.get(n,r),f=L(!1),E=L(!1),k=L(0);if($){if(!$.$partial)return $;$.$unwatch(),f.value=$.$dirty.value}const l={$dirty:f,$path:n,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return c.length?(c.forEach(y=>{l[y]=Ze(r[y],o,l.$dirty,p,N,y,a,n,g,E,k)}),l.$externalResults=S(()=>d.value?[].concat(d.value).map((y,u)=>({$propertyPath:n,$property:a,$validator:"$externalResults",$uid:`${n}-externalResult-${u}`,$message:y,$params:{},$response:null,$pending:!1})):[]),l.$invalid=S(()=>{const y=c.some(u=>t(l[u].$invalid));return E.value=y,!!l.$externalResults.value.length||y}),l.$pending=S(()=>c.some(y=>t(l[y].$pending))),l.$error=S(()=>l.$dirty.value?l.$pending.value||l.$invalid.value:!1),l.$silentErrors=S(()=>c.filter(y=>t(l[y].$invalid)).map(y=>{const u=l[y];return ue({$propertyPath:n,$property:a,$validator:y,$uid:`${n}-${y}`,$message:u.$message,$params:u.$params,$response:u.$response,$pending:u.$pending})}).concat(l.$externalResults.value)),l.$errors=S(()=>l.$dirty.value?l.$silentErrors.value:[]),l.$unwatch=()=>c.forEach(y=>{l[y].$unwatch()}),l.$commit=()=>{E.value=!0,k.value=Date.now()},s.set(n,r,l),l):($&&s.set(n,r,l),l)}function Qe(r,o,a,s,n,p,N){const d=Object.keys(r);return d.length?d.reduce((g,c)=>(g[c]=me({validations:r[c],state:o,key:c,parentKey:a,resultsCache:s,globalConfig:n,instance:p,externalResults:N}),g),{}):{}}function Xe(r,o,a){const s=S(()=>[o,a].filter(l=>l).reduce((l,y)=>l.concat(Object.values(t(y))),[])),n=S({get(){return r.$dirty.value||(s.value.length?s.value.every(l=>l.$dirty):!1)},set(l){r.$dirty.value=l}}),p=S(()=>{const l=t(r.$silentErrors)||[],y=s.value.filter(u=>(t(u).$silentErrors||[]).length).reduce((u,V)=>u.concat(...V.$silentErrors),[]);return l.concat(y)}),N=S(()=>{const l=t(r.$errors)||[],y=s.value.filter(u=>(t(u).$errors||[]).length).reduce((u,V)=>u.concat(...V.$errors),[]);return l.concat(y)}),d=S(()=>s.value.some(l=>l.$invalid)||t(r.$invalid)||!1),g=S(()=>s.value.some(l=>t(l.$pending))||t(r.$pending)||!1),c=S(()=>s.value.some(l=>l.$dirty)||s.value.some(l=>l.$anyDirty)||n.value),$=S(()=>n.value?g.value||d.value:!1),f=()=>{r.$touch(),s.value.forEach(l=>{l.$touch()})},E=()=>{r.$commit(),s.value.forEach(l=>{l.$commit()})},k=()=>{r.$reset(),s.value.forEach(l=>{l.$reset()})};return s.value.length&&s.value.every(l=>l.$dirty)&&f(),{$dirty:n,$errors:N,$invalid:d,$anyDirty:c,$error:$,$pending:g,$touch:f,$reset:k,$silentErrors:p,$commit:E}}function me(r){const o=We(function(){return Q(),Ye(function(){if(u.$rewardEarly)return i(),De(pe)},function(){return Ne(pe,function(){return new Promise(P=>{if(!x.value)return P(!T.value);const G=J(x,()=>{P(!T.value),G()})})})})});let{validations:a,state:s,key:n,parentKey:p,childResults:N,resultsCache:d,globalConfig:g={},instance:c,externalResults:$}=r;const f=p?`${p}.${n}`:n,{rules:E,nestedValidators:k,config:l,validationGroups:y}=Ie(a),u=Object.assign({},g,l),V=n?S(()=>{const P=t(s);return P?t(P[n]):void 0}):s,R=Object.assign({},t($)||{}),F=S(()=>{const P=t($);return n?P?t(P[n]):void 0:P}),K=He(E,V,n,d,f,u,c,F,s),h=Qe(k,V,f,d,u,c,F),ee={};y&&Object.entries(y).forEach(P=>{let[G,O]=P;ee[G]={$invalid:ie(O,h,"$invalid"),$error:ie(O,h,"$error"),$pending:ie(O,h,"$pending"),$errors:ve(O,h,"$errors"),$silentErrors:ve(O,h,"$silentErrors")}});const{$dirty:j,$errors:ae,$invalid:T,$anyDirty:C,$error:oe,$pending:x,$touch:Q,$reset:U,$silentErrors:te,$commit:i}=Xe(K,h,N),m=n?S({get:()=>t(V),set:P=>{j.value=!0;const G=t(s),O=t($);O&&(O[n]=R[n]),ne(G[n])?G[n].value=P:G[n]=P}}):null;n&&u.$autoDirty&&J(V,()=>{j.value||Q();const P=t($);P&&(P[n]=R[n])},{flush:"sync"});function we(P){return(N.value||{})[P]}function Se(){ne($)?$.value=R:Object.keys(R).length===0?Object.keys($).forEach(P=>{delete $[P]}):Object.assign($,R)}return ue(Object.assign({},K,{$model:m,$dirty:j,$error:oe,$errors:ae,$invalid:T,$anyDirty:C,$pending:x,$touch:Q,$reset:U,$path:f||Be,$silentErrors:te,$validate:o,$commit:i},N&&{$getResultsForChild:we,$clearExternalResults:Se,$validationGroups:ee},h))}class Je{constructor(){this.storage=new Map}set(o,a,s){this.storage.set(o,{rules:a,result:s})}checkRulesValidity(o,a,s){const n=Object.keys(s),p=Object.keys(a);return p.length!==n.length||!p.every(d=>n.includes(d))?!1:p.every(d=>a[d].$params?Object.keys(a[d].$params).every(g=>t(s[d].$params[g])===t(a[d].$params[g])):!0)}get(o,a){const s=this.storage.get(o);if(!s)return;const{rules:n,result:p}=s,N=this.checkRulesValidity(o,a,n),d=p.$unwatch?p.$unwatch:()=>({});return N?p:{$dirty:p.$dirty,$partial:!0,$unwatch:d}}}const re={COLLECT_ALL:!0,COLLECT_NONE:!1},be=Symbol("vuelidate#injectChildResults"),$e=Symbol("vuelidate#removeChildResults");function Ke(r){let{$scope:o,instance:a}=r;const s={},n=L([]),p=S(()=>n.value.reduce(($,f)=>($[f]=t(s[f]),$),{}));function N($,f){let{$registerAs:E,$scope:k,$stopPropagation:l}=f;l||o===re.COLLECT_NONE||k===re.COLLECT_NONE||o!==re.COLLECT_ALL&&o!==k||(s[E]=$,n.value.push(E))}a.__vuelidateInjectInstances=[].concat(a.__vuelidateInjectInstances||[],N);function d($){n.value=n.value.filter(f=>f!==$),delete s[$]}a.__vuelidateRemoveInstances=[].concat(a.__vuelidateRemoveInstances||[],d);const g=de(be,[]);ce(be,a.__vuelidateInjectInstances);const c=de($e,[]);return ce($e,a.__vuelidateRemoveInstances),{childResults:p,sendValidationResultsToParent:g,removeValidationResultsFromParent:c}}function ke(r){return new Proxy(r,{get(o,a){return typeof o[a]=="object"?ke(o[a]):S(()=>o[a])}})}let he=0;function X(r,o){var a;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(s=r,r=void 0,o=void 0);let{$registerAs:n,$scope:p=re.COLLECT_ALL,$stopPropagation:N,$externalResults:d,currentVueInstance:g}=s;const c=g||((a=Ee())===null||a===void 0?void 0:a.proxy),$=c?c.$options:{};n||(he+=1,n=`_vuelidate_${he}`);const f=L({}),E=new Je,{childResults:k,sendValidationResultsToParent:l,removeValidationResultsFromParent:y}=c?Ke({$scope:p,instance:c}):{childResults:L({})};if(!r&&$.validations){const u=$.validations;o=L({}),Ce(()=>{o.value=c,J(()=>se(u)?u.call(o.value,new ke(o.value)):u,V=>{f.value=me({validations:V,state:o,childResults:k,resultsCache:E,globalConfig:s,instance:c,externalResults:d||c.vuelidateExternalResults})},{immediate:!0})}),s=$.validationsConfig||s}else{const u=ne(r)||Ue(r)?r:ue(r||{});J(u,V=>{f.value=me({validations:V,state:o,childResults:k,resultsCache:E,globalConfig:s,instance:c!=null?c:{},externalResults:d})},{immediate:!0})}return c&&(l.forEach(u=>u(f,{$registerAs:n,$scope:p,$stopPropagation:N})),Ve(()=>y.forEach(u=>u(n)))),S(()=>Object.assign({},t(f.value),k.value))}const Fe=r=>{if(r=t(r),Array.isArray(r))return!!r.length;if(r==null)return!1;if(r===!1)return!0;if(r instanceof Date)return!isNaN(r.getTime());if(typeof r=="object"){for(let o in r)return!0;return!1}return!!String(r).length};function I(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return s=>(s=t(s),!Fe(s)||o.every(n=>n.test(s)))}I(/^[a-zA-Z]*$/);I(/^[a-zA-Z0-9]*$/);I(/^\d*(\.\d+)?$/);const et=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var tt=I(et),rt={$validator:tt,$message:"Value is not a valid email address",$params:{type:"email"}};function st(r){return typeof r=="string"&&(r=r.trim()),Fe(r)}var A={$validator:st,$message:"Value is required",$params:{type:"required"}};function at(r){return o=>t(o)===t(r)}function ye(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"other";return{$validator:at(r),$message:a=>`The value must be equal to the ${o} value`,$params:{equalTo:r,otherName:o,type:"sameAs"}}}const ot=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;I(ot);I(/(^[0-9]*$)|(^-[0-9]+$)/);I(/^[-]?\d*(\.\d+)?$/);const lt=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Forms")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Validation")])],-1),it={class:"pt-5 space-y-8"},nt={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},mt={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},ut=e("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),dt=e("a",{href:"https://www.npmjs.com/package/vuelidate",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/vuelidate",-1),ct={class:"grid grid-cols-1 xl:grid-cols-2 gap-6"},pt={class:"panel"},ft={class:"flex items-center justify-between mb-5"},vt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),bt={class:"flex items-center"},$t={class:"mb-5"},ht=e("label",{for:"fullName"},"Full Name",-1),yt={key:0,class:"text-[#1abc9c] mt-1"},gt={key:1,class:"text-danger mt-1"},xt=e("button",{type:"submit",class:"btn btn-primary !mt-6"},"Submit Form",-1),_t=e("pre",null,`<!-- basic -->
<form class="space-y-5" @submit.prevent="submitForm1()">
  <div :class="{ 'has-error': $v1.form1.name.$error, 'has-success': isSubmitForm1 && !$v1.form1.name.$error }">
    <label for="fullName">Full Name</label>
    <input id="fullName" type="text" placeholder="Enter Full Name" class="form-input" v-model="form1.name" />
    <template v-if="isSubmitForm1 && !$v1.form1.name.$error">
      <p class="text-[#1abc9c] mt-1">Looks Good!</p>
    </template>
    <template v-if="isSubmitForm1 && $v1.form1.name.$error">
      <p class="text-danger mt-1">Please fill the Name</p>
    </template>
  </div>
  <button type="submit" class="btn btn-primary !mt-6">Submit Form</button>
</form>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { required, email, sameAs } from '@vuelidate/validators';
  const form1 = ref({
    name: '',
  });
  const isSubmitForm1 = ref(false);
  const rules1 = {
    form1: {
      name: { required },
    },
  };
  const $v1 = useVuelidate(rules1, { form1 });
  const submitForm1 = () => {
    isSubmitForm1.value = true;
    $v1.value.form1.$touch();
    if ($v1.value.form1.$invalid) {
      return false;
    }
    //form validated success
    showMessage('Form submitted successfully.');
  };
<\/script>
`,-1),Nt={class:"panel"},kt={class:"flex items-center justify-between mb-5"},Ft=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Email",-1),wt={class:"flex items-center"},St={class:"mb-5"},Et=e("label",{for:"Email"},"Email",-1),Ct={key:0,class:"text-[#1abc9c] mt-1"},Vt={key:1,class:"text-danger mt-1"},Lt=e("button",{type:"submit",class:"btn btn-primary !mt-6"},"Submit Form",-1),Rt=e("pre",null,`<!-- email -->
<form class="space-y-5" @submit.prevent="submitForm2()">
  <div :class="{ 'has-error': $v2.form2.email.$error, 'has-success': isSubmitForm2 && !$v2.form2.email.$error }">
    <label for="Email">Email</label>
    <input id="Email" type="text" placeholder="Enter Email" class="form-input" v-model="form2.email" />
    <template v-if="isSubmitForm2 && !$v2.form2.email.$error">
      <p class="text-[#1abc9c] mt-1">Looks Good!</p>
    </template>
    <template v-if="isSubmitForm2 && $v2.form2.email.$error">
      <p class="text-danger mt-1">Please fill the Email</p>
    </template>
  </div>
  <button type="submit" class="btn btn-primary !mt-6">Submit Form</button>
</form>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { required, email, sameAs } from '@vuelidate/validators';

  const form2 = ref({
    email: '',
  });
  const isSubmitForm2 = ref(false);
  const rules2 = {
    form2: {
      email: { required, email },
    },
  };
  const $v2 = useVuelidate(rules2, { form2 });
  const submitForm2 = () => {
    isSubmitForm2.value = true;
    $v2.value.form2.$touch();
    if ($v2.value.form2.$invalid) {
      return false;
    }
    //form validated success
    showMessage('Form submitted successfully.');
  };
<\/script>
`,-1),Pt={class:"panel"},zt={class:"flex items-center justify-between mb-5"},Tt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Select",-1),jt={class:"flex items-center"},qt={class:"mb-5"},At=e("option",{value:""},"Open this select menu",-1),Ut=e("option",{value:"1"},"One",-1),Ot=e("option",{value:"2"},"Two",-1),Gt=e("option",{value:"3"},"Three",-1),Zt=[At,Ut,Ot,Gt],It={key:0,class:"text-[#1abc9c] mt-1"},Mt={key:1,class:"text-danger mt-1"},Bt=e("button",{type:"submit",class:"btn btn-primary !mt-6"},"Submit Form",-1),Dt=e("pre",null,`<!-- select -->
<form class="space-y-5" @submit.prevent="submitForm3()">
  <div :class="{ 'has-error': $v3.form3.select.$error, 'has-success': isSubmitForm3 && !$v3.form3.select.$error }">
    <select class="form-select text-white-dark" v-model="form3.select">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <template v-if="isSubmitForm3 && !$v3.form3.select.$error">
      <p class="text-[#1abc9c] mt-1">Example valid custom select feedback</p>
    </template>
    <template v-if="isSubmitForm3 && $v3.form3.select.$error">
      <p class="text-danger mt-1">Please Select the field</p>
    </template>
  </div>
  <button type="submit" class="btn btn-primary !mt-6">Submit Form</button>
</form>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { required, email, sameAs } from '@vuelidate/validators';

  const form3 = ref({
    select: '',
  });
  const isSubmitForm3 = ref(false);
  const rules3 = {
    form3: {
      select: { required },
    },
  };
  const $v3 = useVuelidate(rules3, { form3 });
  const submitForm3 = () => {
    isSubmitForm3.value = true;
    $v3.value.form3.$touch();
    if ($v3.value.form3.$invalid) {
      return false;
    }
    //form validated success
    showMessage('Form submitted successfully.');
  };
<\/script>
`,-1),Yt={class:"panel"},Wt={class:"flex items-center justify-between mb-5"},Ht=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Custom Styles",-1),Qt={class:"flex items-center"},Xt={class:"mb-5"},Jt={class:"grid grid-cols-1 md:grid-cols-3 gap-5"},Kt=e("label",{for:"customFname"},"First Name",-1),er={key:0,class:"text-[#1abc9c] mt-1"},tr={key:1,class:"text-danger mt-1"},rr=e("label",{for:"customLname"},"Last name",-1),sr={key:0,class:"text-[#1abc9c] mt-1"},ar={key:1,class:"text-danger mt-1"},or=e("label",{for:"customeEmail"},"Username",-1),lr={class:"flex"},ir=e("div",{class:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"}," @ ",-1),nr={key:0,class:"text-[#1abc9c] mt-1"},mr={key:1,class:"text-danger mt-1"},ur={class:"grid grid-cols-1 md:grid-cols-4 gap-5"},dr=e("label",{for:"customeCity"},"City",-1),cr={key:0,class:"text-[#1abc9c] mt-1"},pr={key:1,class:"text-danger mt-1"},fr=e("label",{for:"customeState"},"State",-1),vr={key:0,class:"text-[#1abc9c] mt-1"},br={key:1,class:"text-danger mt-1"},$r=e("label",{for:"customeZip"},"Zip",-1),hr={key:0,class:"text-[#1abc9c] mt-1"},yr={key:1,class:"text-danger mt-1"},gr={class:"inline-flex cursor-pointer mt-1"},xr=e("span",{class:"text-white-dark"},"Agree to terms and conditions",-1),_r={key:0,class:"text-danger mt-1"},Nr=e("button",{type:"submit",class:"btn btn-primary !mt-6"},"Submit Form",-1),kr=e("pre",null,`<!-- custom styles -->
<form class="space-y-5" @submit.prevent="submitForm4()">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div :class="{ 'has-error': $v4.form4.firstName.$error, 'has-success': isSubmitForm4 && !$v4.form4.firstName.$error }">
      <label for="customFname">First Name</label>
      <input id="customFname" type="text" placeholder="Enter First Name" class="form-input" v-model="form4.firstName" />
      <template v-if="isSubmitForm4 && !$v4.form4.firstName.$error">
        <p class="text-[#1abc9c] mt-1">Looks Good!</p>
      </template>
      <template v-if="isSubmitForm4 && $v4.form4.firstName.$error">
        <p class="text-danger mt-1">Please fill the first name</p>
      </template>
    </div>
    <div :class="{ 'has-error': $v4.form4.lastName.$error, 'has-success': isSubmitForm4 && !$v4.form4.lastName.$error }">
      <label for="customLname">Last name</label>
      <input id="customLname" type="text" placeholder="Enter Last Name" class="form-input" v-model="form4.lastName" />
      <template v-if="isSubmitForm4 && !$v4.form4.lastName.$error">
        <p class="text-[#1abc9c] mt-1">Looks Good!</p>
      </template>
      <template v-if="isSubmitForm4 && $v4.form4.lastName.$error">
        <p class="text-danger mt-1">Please fill the last name</p>
      </template>
    </div>
    <div :class="{ 'has-error': $v4.form4.userName.$error, 'has-success': isSubmitForm4 && !$v4.form4.userName.$error }">
      <label for="customeEmail">Username</label>
      <div class="flex">
        <div
          class="
            bg-[#eee]
            flex
            justify-center
            items-center
            ltr:rounded-l-md
            rtl:rounded-r-md
            px-3
            font-semibold
            border
            ltr:border-r-0
            rtl:border-l-0
            border-[#e0e6ed]
            dark:border-[#17263c] dark:bg-[#1b2e4b]
          "
        >
          @
        </div>
        <input id="customeEmail" type="text" placeholder="Enter Username" class="form-input ltr:rounded-l-none rtl:rounded-r-none" v-model="form4.userName" />
      </div>
      <template v-if="isSubmitForm4 && !$v4.form4.userName.$error">
        <p class="text-[#1abc9c] mt-1">Looks Good!</p>
      </template>
      <template v-if="isSubmitForm4 && $v4.form4.userName.$error">
        <p class="text-danger mt-1">Please choose a userName</p>
      </template>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
    <div class="md:col-span-2" :class="{ 'has-error': $v4.form4.city.$error, 'has-success': isSubmitForm4 && !$v4.form4.city.$error }">
      <label for="customeCity">City</label>
      <input id="customeCity" type="text" placeholder="Enter City" class="form-input" v-model="form4.city" />
      <template v-if="isSubmitForm4 && !$v4.form4.city.$error">
        <p class="text-[#1abc9c] mt-1">Looks Good!</p>
      </template>
      <template v-if="isSubmitForm4 && $v4.form4.city.$error">
        <p class="text-danger mt-1">Please provide a valid city</p>
      </template>
    </div>
    <div :class="{ 'has-error': $v4.form4.state.$error, 'has-success': isSubmitForm4 && !$v4.form4.state.$error }">
      <label for="customeState">State</label>
      <input id="customeState" type="text" placeholder="Enter State" class="form-input" v-model="form4.state" />
      <template v-if="isSubmitForm4 && !$v4.form4.state.$error">
        <p class="text-[#1abc9c] mt-1">Looks Good!</p>
      </template>
      <template v-if="isSubmitForm4 && $v4.form4.state.$error">
        <p class="text-danger mt-1">Please provide a valid state</p>
      </template>
    </div>
    <div :class="{ 'has-error': $v4.form4.zip.$error, 'has-success': isSubmitForm4 && !$v4.form4.zip.$error }">
      <label for="customeZip">Zip</label>
      <input id="customeZip" type="text" placeholder="Enter Zip" class="form-input" v-model="form4.zip" />
      <template v-if="isSubmitForm4 && !$v4.form4.zip.$error">
        <p class="text-[#1abc9c] mt-1">Looks Good!</p>
      </template>
      <template v-if="isSubmitForm4 && $v4.form4.zip.$error">
        <p class="text-danger mt-1">Please provide a valid zip</p>
      </template>
    </div>
  </div>
  <div :class="{ 'has-error': $v4.form4.isTerms.$error, 'has-success': isSubmitForm4 && !$v4.form4.isTerms.$error }">
    <label class="inline-flex cursor-pointer mt-1">
      <input type="checkbox" class="form-checkbox" v-model="form4.isTerms" />
      <span class="text-white-dark">Agree to terms and conditions</span>
    </label>
    <template v-if="isSubmitForm4 && $v4.form4.isTerms.$error">
      <p class="text-danger mt-1">You must agree before submitting.</p>
    </template>
  </div>
  <button type="submit" class="btn btn-primary !mt-6">Submit Form</button>
</form>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { required, email, sameAs } from '@vuelidate/validators';

  const form4 = ref({
    firstName: 'Shaun',
    lastName: 'Park',
    userName: '',
    city: '',
    state: '',
    zip: '',
    isTerms: false,
  });
  const isSubmitForm4 = ref(false);
  const rules4 = {
    form4: {
      firstName: { required },
      lastName: { required },
      userName: { required },
      city: { required },
      state: { required },
      zip: { required },
      isTerms: {
        sameAsRawValue: sameAs(true),
      },
    },
  };
  const $v4 = useVuelidate(rules4, { form4 });
  const submitForm4 = () => {
    isSubmitForm4.value = true;
    $v4.value.form4.$touch();
    if ($v4.value.form4.$invalid) {
      return false;
    }
    //form validated success
    showMessage('Form submitted successfully.');
  };

<\/script>
`,-1),Fr={class:"panel"},wr={class:"flex items-center justify-between mb-5"},Sr=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Browser Default",-1),Er={class:"flex items-center"},Cr={class:"mb-5"},Vr={class:"grid grid-cols-1 md:grid-cols-3 gap-5"},Lr=e("label",{for:"browserFname"},"First Name",-1),Rr=e("label",{for:"browserLname"},"Last name",-1),Pr=e("label",{for:"browserEmail"},"Username",-1),zr={class:"flex"},Tr=e("div",{class:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"}," @ ",-1),jr={class:"grid grid-cols-1 md:grid-cols-4 gap-5"},qr={class:"md:col-span-2"},Ar=e("label",{for:"browserCity"},"City",-1),Ur=e("label",{for:"browserState"},"State",-1),Or=e("label",{for:"browserZip"},"Zip",-1),Gr={class:"flex items-center cursor-pointer mt-1"},Zr=e("span",{class:"text-white-dark"},"Agree to terms and conditions",-1),Ir=e("button",{type:"submit",class:"btn btn-primary !mt-6"},"Submit Form",-1),Mr=e("pre",null,`<!-- browser default -->
<form class="space-y-5" @submit.prevent="submitForm5()">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div>
      <label for="browserFname">First Name</label>
      <input id="browserFname" type="text" placeholder="Enter First Name" v-model="form5.firstName" class="form-input" required />
    </div>
    <div>
      <label for="browserLname">Last name</label>
      <input id="browserLname" type="text" placeholder="Enter Last name" v-model="form5.lastName" class="form-input" required />
    </div>
    <div>
      <label for="browserEmail">Username</label>
      <div class="flex">
        <div
          class="
            bg-[#eee]
            flex
            justify-center
            items-center
            ltr:rounded-l-md
            rtl:rounded-r-md
            px-3
            font-semibold
            border
            ltr:border-r-0
            rtl:border-l-0
            border-[#e0e6ed]
            dark:border-[#17263c] dark:bg-[#1b2e4b]
          "
        >
          @
        </div>
        <input id="browserEmail" type="text" placeholder="Enter Username" v-model="form5.userName" class="form-input ltr:rounded-l-none rtl:rounded-r-none" required />
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
    <div class="md:col-span-2">
      <label for="browserCity">City</label>
      <input id="browserCity" type="text" placeholder="Enter City" v-model="form5.city" class="form-input" required />
    </div>
    <div>
      <label for="browserState">State</label>
      <input id="browserState" type="text" placeholder="Enter State" v-model="form5.state" class="form-input" required />
    </div>
    <div>
      <label for="browserZip">Zip</label>
      <input id="browserZip" type="text" placeholder="Enter Zip" v-model="form5.zip" class="form-input" required />
    </div>
  </div>
  <div>
    <label class="flex items-center cursor-pointer mt-1">
      <input type="checkbox" class="form-checkbox" v-model="form5.isTerms" required />
      <span class="text-white-dark">Agree to terms and conditions</span>
    </label>
  </div>
  <button type="submit" class="btn btn-primary !mt-6">Submit Form</button>
</form>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { required, email, sameAs } from '@vuelidate/validators';

  const form5 = ref({
    firstName: 'Shaun',
    lastName: 'Park',
    userName: '',
    city: '',
    state: '',
    zip: '',
    isTerms: false,
  });
  const submitForm5 = () => {
    //form validated success
    showMessage('Form submitted successfully.');
  };
<\/script>
`,-1),Br={class:"panel"},Dr={class:"flex items-center justify-between mb-5"},Yr=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Tooltips",-1),Wr={class:"flex items-center"},Hr={class:"mb-5"},Qr={class:"grid grid-cols-1 md:grid-cols-3 gap-5"},Xr=e("label",{for:"tlpFname"},"First Name",-1),Jr={key:0,class:"text-white bg-[#1abc9c] py-1 px-2 rounded"},Kr={key:1,class:"text-white bg-danger py-1 px-2 rounded"},es=e("label",{for:"tlpLname"},"Last name",-1),ts={key:0,class:"text-white bg-[#1abc9c] py-1 px-2 rounded"},rs={key:1,class:"text-white bg-danger py-1 px-2 rounded"},ss=e("label",{for:"tlpEmail"},"Username",-1),as={class:"flex"},os=e("div",{class:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]"}," @ ",-1),ls={class:"mt-2"},is={key:0,class:"text-white bg-[#1abc9c] py-1 px-2 rounded"},ns={key:1,class:"text-white bg-danger py-1 px-2 rounded"},ms={class:"grid grid-cols-1 md:grid-cols-4 gap-5"},us=e("label",{for:"tlpCity"},"City",-1),ds={key:0,class:"text-white bg-[#1abc9c] py-1 px-2 rounded"},cs={key:1,class:"text-white bg-danger py-1 px-2 rounded"},ps=e("label",{for:"tlpState"},"State",-1),fs={key:0,class:"text-white bg-[#1abc9c] py-1 px-2 rounded"},vs={key:1,class:"text-white bg-danger py-1 px-2 rounded"},bs=e("label",{for:"tlpZip"},"Zip",-1),$s={key:0,class:"text-white bg-[#1abc9c] py-1 px-2 rounded"},hs={key:1,class:"text-white bg-danger py-1 px-2 rounded"},ys={class:"flex items-center cursor-pointer"},gs=e("span",{class:"text-white-dark"},"Agree to terms and conditions",-1),xs={key:0,class:"mt-2"},_s=e("span",{class:"text-white bg-danger py-1 px-2 rounded"},"You must agree before submitting.",-1),Ns=[_s],ks=e("button",{type:"submit",class:"btn btn-primary !mt-6"},"Submit Form",-1),Fs=e("pre",null,`<!-- tooltips -->
<form class="space-y-5" @submit.prevent="submitForm6()">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div :class="{ 'has-error': $v6.form6.firstName.$error, 'has-success': isSubmitForm6 && !$v6.form6.firstName.$error }">
      <label for="tlpFname">First Name</label>
      <input id="tlpFname" type="text" placeholder="Enter First Name" class="form-input mb-2" v-model="form6.firstName" />
      <template v-if="isSubmitForm6 && !$v6.form6.firstName.$error">
        <span class="text-white bg-[#1abc9c] py-1 px-2 rounded">Looks Good!</span>
      </template>
      <template v-if="isSubmitForm6 && $v6.form6.firstName.$error">
        <span class="text-white bg-danger py-1 px-2 rounded">Please fill the first Name</span>
      </template>
    </div>
    <div :class="{ 'has-error': $v6.form6.lastName.$error, 'has-success': isSubmitForm6 && !$v6.form6.lastName.$error }">
      <label for="tlpLname">Last name</label>
      <input id="tlpLname" type="text" placeholder="Enter Last Name" class="form-input mb-2" v-model="form6.lastName" />
      <template v-if="isSubmitForm6 && !$v6.form6.lastName.$error">
        <span class="text-white bg-[#1abc9c] py-1 px-2 rounded">Looks Good!</span>
      </template>
      <template v-if="isSubmitForm6 && $v6.form6.lastName.$error">
        <span class="text-white bg-danger py-1 px-2 rounded">Please fill the last Name</span>
      </template>
    </div>
    <div :class="{ 'has-error': $v6.form6.userName.$error, 'has-success': isSubmitForm6 && !$v6.form6.userName.$error }">
      <label for="tlpEmail">Username</label>
      <div class="flex">
        <div
          class="
            bg-[#eee]
            flex
            justify-center
            items-center
            ltr:rounded-l-md
            rtl:rounded-r-md
            px-3
            font-semibold
            border
            ltr:border-r-0
            rtl:border-l-0
            border-[#e0e6ed]
            dark:border-[#17263c] dark:bg-[#1b2e4b]
          "
        >
          @
        </div>
        <input id="tlpEmail" type="text" placeholder="Enter Username" class="form-input ltr:rounded-l-none rtl:rounded-r-none" v-model="form6.userName" />
      </div>
      <div class="mt-2">
        <template v-if="isSubmitForm6 && !$v6.form6.userName.$error">
          <span class="text-white bg-[#1abc9c] py-1 px-2 rounded">Looks Good!</span>
        </template>
        <template v-if="isSubmitForm6 && $v6.form6.userName.$error">
          <span class="text-white bg-danger py-1 px-2 rounded">Please choose a userName.</span>
        </template>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
    <div class="md:col-span-2" :class="{ 'has-error': $v6.form6.city.$error, 'has-success': isSubmitForm6 && !$v6.form6.city.$error }">
      <label for="tlpCity">City</label>
      <input id="tlpCity" type="text" placeholder="Enter City" class="form-input mb-2" v-model="form6.city" />
      <template v-if="isSubmitForm6 && !$v6.form6.city.$error">
        <span class="text-white bg-[#1abc9c] py-1 px-2 rounded">Looks Good!</span>
      </template>
      <template v-if="isSubmitForm6 && $v6.form6.city.$error">
        <span class="text-white bg-danger py-1 px-2 rounded">Please provide a valid city.</span>
      </template>
    </div>
    <div :class="{ 'has-error': $v6.form6.state.$error, 'has-success': isSubmitForm6 && !$v6.form6.state.$error }">
      <label for="tlpState">State</label>
      <input id="tlpState" type="text" placeholder="Enter State" class="form-input mb-2" v-model="form6.state" />
      <template v-if="isSubmitForm6 && !$v6.form6.state.$error">
        <span class="text-white bg-[#1abc9c] py-1 px-2 rounded">Looks Good!</span>
      </template>
      <template v-if="isSubmitForm6 && $v6.form6.state.$error">
        <span class="text-white bg-danger py-1 px-2 rounded">Please provide a valid state.</span>
      </template>
    </div>
    <div :class="{ 'has-error': $v6.form6.zip.$error, 'has-success': isSubmitForm6 && !$v6.form6.zip.$error }">
      <label for="tlpZip">Zip</label>
      <input id="tlpZip" type="text" placeholder="Enter Zip" class="form-input mb-2" v-model="form6.zip" />
      <template v-if="isSubmitForm6 && !$v6.form6.zip.$error">
        <span class="text-white bg-[#1abc9c] py-1 px-2 rounded">Looks Good!</span>
      </template>
      <template v-if="isSubmitForm6 && $v6.form6.zip.$error">
        <span class="text-white bg-danger py-1 px-2 rounded">Please provide a valid Zip.</span>
      </template>
    </div>
  </div>
  <div :class="{ 'has-error': $v6.form6.isTerms.$error, 'has-success': isSubmitForm6 && !$v6.form6.isTerms.$error }">
    <label class="flex items-center cursor-pointer">
      <input type="checkbox" class="form-checkbox" v-model="form6.isTerms" />
      <span class="text-white-dark">Agree to terms and conditions</span>
    </label>
    <template v-if="isSubmitForm6 && $v6.form6.isTerms.$error">
      <div class="mt-2">
        <span class="text-white bg-danger py-1 px-2 rounded">You must agree before submitting.</span>
      </div>
    </template>
  </div>
  <button type="submit" class="btn btn-primary !mt-6">Submit Form</button>
</form>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { required, email, sameAs } from '@vuelidate/validators';
  const form6 = ref({
    firstName: 'Shaun',
    lastName: 'Park',
    userName: '',
    city: '',
    state: '',
    zip: '',
    isTerms: false,
  });
  const isSubmitForm6 = ref(false);
  const rules6 = {
    form6: {
      firstName: { required },
      lastName: { required },
      userName: { required },
      city: { required },
      state: { required },
      zip: { required },
      isTerms: {
        sameAsRawValue: sameAs(true),
      },
    },
  };
  const $v6 = useVuelidate(rules6, { form6 });
  const submitForm6 = () => {
    isSubmitForm6.value = true;
    $v6.value.form6.$touch();
    if ($v6.value.form6.$invalid) {
      return false;
    }
    //form validated success
    showMessage('Form submitted successfully.');
  };
<\/script>
`,-1),Ls=Pe({__name:"validation",setup(r){ze({title:"Form Validation"});const{codeArr:o,toggleCode:a}=je(),s=L({name:""}),n=L(!1),N=X({form1:{name:{required:A}}},{form1:s}),d=()=>{if(n.value=!0,N.value.form1.$touch(),N.value.form1.$invalid)return!1;U("Form submitted successfully.")},g=L({email:""}),c=L(!1),f=X({form2:{email:{required:A,email:rt}}},{form2:g}),E=()=>{if(c.value=!0,f.value.form2.$touch(),f.value.form2.$invalid)return!1;U("Form submitted successfully.")},k=L({select:""}),l=L(!1),u=X({form3:{select:{required:A}}},{form3:k}),V=()=>{if(l.value=!0,u.value.form3.$touch(),u.value.form3.$invalid)return!1;U("Form submitted successfully.")},R=L({firstName:"Shaun",lastName:"Park",userName:"",city:"",state:"",zip:"",isTerms:!1}),F=L(!1),K={form4:{firstName:{required:A},lastName:{required:A},userName:{required:A},city:{required:A},state:{required:A},zip:{required:A},isTerms:{sameAsRawValue:ye(!0)}}},h=X(K,{form4:R}),ee=()=>{if(F.value=!0,h.value.form4.$touch(),h.value.form4.$invalid)return!1;U("Form submitted successfully.")},j=L({firstName:"Shaun",lastName:"Park",userName:"",city:"",state:"",zip:"",isTerms:!1}),ae=()=>{U("Form submitted successfully.")},T=L({firstName:"Shaun",lastName:"Park",userName:"",city:"",state:"",zip:"",isTerms:!1}),C=L(!1),oe={form6:{firstName:{required:A},lastName:{required:A},userName:{required:A},city:{required:A},state:{required:A},zip:{required:A},isTerms:{sameAsRawValue:ye(!0)}}},x=X(oe,{form6:T}),Q=()=>{if(C.value=!0,x.value.form6.$touch(),x.value.form6.$invalid)return!1;U("Form submitted successfully.")},U=(te="",i="success")=>{qe.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:i,title:te,padding:"10px 20px"})};return(te,i)=>(v(),_("div",null,[lt,e("div",it,[e("div",nt,[e("div",mt,[Z(Ae)]),ut,dt]),e("div",ct,[e("div",pt,[e("div",ft,[vt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[0]||(i[0]=m=>t(a)("code1"))},[e("span",bt,[Z(H,{class:"me-2"}),M(" Code ")])])]),e("div",$t,[e("form",{class:"space-y-5",onSubmit:i[2]||(i[2]=B(m=>d(),["prevent"]))},[e("div",{class:q({"has-error":t(N).form1.name.$error,"has-success":n.value&&!t(N).form1.name.$error})},[ht,w(e("input",{id:"fullName",type:"text",placeholder:"Enter Full Name",class:"form-input","onUpdate:modelValue":i[1]||(i[1]=m=>s.value.name=m)},null,512),[[z,s.value.name]]),n.value&&!t(N).form1.name.$error?(v(),_("p",yt,"Looks Good!")):b("",!0),n.value&&t(N).form1.name.$error?(v(),_("p",gt,"Please fill the Name")):b("",!0)],2),xt],32)]),t(o).includes("code1")?(v(),D(W,{key:0},{default:Y(()=>[_t]),_:1})):b("",!0)]),e("div",Nt,[e("div",kt,[Ft,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[3]||(i[3]=m=>t(a)("code2"))},[e("span",wt,[Z(H,{class:"me-2"}),M(" Code ")])])]),e("div",St,[e("form",{class:"space-y-5",onSubmit:i[5]||(i[5]=B(m=>E(),["prevent"]))},[e("div",{class:q({"has-error":t(f).form2.email.$error,"has-success":c.value&&!t(f).form2.email.$error})},[Et,w(e("input",{id:"Email",type:"text",placeholder:"Enter Email",class:"form-input","onUpdate:modelValue":i[4]||(i[4]=m=>g.value.email=m)},null,512),[[z,g.value.email]]),c.value&&!t(f).form2.email.$error?(v(),_("p",Ct,"Looks Good!")):b("",!0),c.value&&t(f).form2.email.$error?(v(),_("p",Vt,"Please fill the Email")):b("",!0)],2),Lt],32)]),t(o).includes("code2")?(v(),D(W,{key:0},{default:Y(()=>[Rt]),_:1})):b("",!0)]),e("div",Pt,[e("div",zt,[Tt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[6]||(i[6]=m=>t(a)("code3"))},[e("span",jt,[Z(H,{class:"me-2"}),M(" Code ")])])]),e("div",qt,[e("form",{class:"space-y-5",onSubmit:i[8]||(i[8]=B(m=>V(),["prevent"]))},[e("div",{class:q({"has-error":t(u).form3.select.$error,"has-success":l.value&&!t(u).form3.select.$error})},[w(e("select",{class:"form-select text-white-dark","onUpdate:modelValue":i[7]||(i[7]=m=>k.value.select=m)},Zt,512),[[Te,k.value.select]]),l.value&&!t(u).form3.select.$error?(v(),_("p",It,"Example valid custom select feedback")):b("",!0),l.value&&t(u).form3.select.$error?(v(),_("p",Mt,"Please Select the field")):b("",!0)],2),Bt],32)]),t(o).includes("code3")?(v(),D(W,{key:0},{default:Y(()=>[Dt]),_:1})):b("",!0)]),e("div",Yt,[e("div",Wt,[Ht,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[9]||(i[9]=m=>t(a)("code4"))},[e("span",Qt,[Z(H,{class:"me-2"}),M(" Code ")])])]),e("div",Xt,[e("form",{class:"space-y-5",onSubmit:i[17]||(i[17]=B(m=>ee(),["prevent"]))},[e("div",Jt,[e("div",{class:q({"has-error":t(h).form4.firstName.$error,"has-success":F.value&&!t(h).form4.firstName.$error})},[Kt,w(e("input",{id:"customFname",type:"text",placeholder:"Enter First Name",class:"form-input","onUpdate:modelValue":i[10]||(i[10]=m=>R.value.firstName=m)},null,512),[[z,R.value.firstName]]),F.value&&!t(h).form4.firstName.$error?(v(),_("p",er,"Looks Good!")):b("",!0),F.value&&t(h).form4.firstName.$error?(v(),_("p",tr,"Please fill the first name")):b("",!0)],2),e("div",{class:q({"has-error":t(h).form4.lastName.$error,"has-success":F.value&&!t(h).form4.lastName.$error})},[rr,w(e("input",{id:"customLname",type:"text",placeholder:"Enter Last Name",class:"form-input","onUpdate:modelValue":i[11]||(i[11]=m=>R.value.lastName=m)},null,512),[[z,R.value.lastName]]),F.value&&!t(h).form4.lastName.$error?(v(),_("p",sr,"Looks Good!")):b("",!0),F.value&&t(h).form4.lastName.$error?(v(),_("p",ar,"Please fill the last name")):b("",!0)],2),e("div",{class:q({"has-error":t(h).form4.userName.$error,"has-success":F.value&&!t(h).form4.userName.$error})},[or,e("div",lr,[ir,w(e("input",{id:"customeEmail",type:"text",placeholder:"Enter Username",class:"form-input ltr:rounded-l-none rtl:rounded-r-none","onUpdate:modelValue":i[12]||(i[12]=m=>R.value.userName=m)},null,512),[[z,R.value.userName]])]),F.value&&!t(h).form4.userName.$error?(v(),_("p",nr,"Looks Good!")):b("",!0),F.value&&t(h).form4.userName.$error?(v(),_("p",mr,"Please choose a userName")):b("",!0)],2)]),e("div",ur,[e("div",{class:q(["md:col-span-2",{"has-error":t(h).form4.city.$error,"has-success":F.value&&!t(h).form4.city.$error}])},[dr,w(e("input",{id:"customeCity",type:"text",placeholder:"Enter City",class:"form-input","onUpdate:modelValue":i[13]||(i[13]=m=>R.value.city=m)},null,512),[[z,R.value.city]]),F.value&&!t(h).form4.city.$error?(v(),_("p",cr,"Looks Good!")):b("",!0),F.value&&t(h).form4.city.$error?(v(),_("p",pr,"Please provide a valid city")):b("",!0)],2),e("div",{class:q({"has-error":t(h).form4.state.$error,"has-success":F.value&&!t(h).form4.state.$error})},[fr,w(e("input",{id:"customeState",type:"text",placeholder:"Enter State",class:"form-input","onUpdate:modelValue":i[14]||(i[14]=m=>R.value.state=m)},null,512),[[z,R.value.state]]),F.value&&!t(h).form4.state.$error?(v(),_("p",vr,"Looks Good!")):b("",!0),F.value&&t(h).form4.state.$error?(v(),_("p",br,"Please provide a valid state")):b("",!0)],2),e("div",{class:q({"has-error":t(h).form4.zip.$error,"has-success":F.value&&!t(h).form4.zip.$error})},[$r,w(e("input",{id:"customeZip",type:"text",placeholder:"Enter Zip",class:"form-input","onUpdate:modelValue":i[15]||(i[15]=m=>R.value.zip=m)},null,512),[[z,R.value.zip]]),F.value&&!t(h).form4.zip.$error?(v(),_("p",hr,"Looks Good!")):b("",!0),F.value&&t(h).form4.zip.$error?(v(),_("p",yr,"Please provide a valid zip")):b("",!0)],2)]),e("div",{class:q({"has-error":t(h).form4.isTerms.$error,"has-success":F.value&&!t(h).form4.isTerms.$error})},[e("label",gr,[w(e("input",{type:"checkbox",class:"form-checkbox","onUpdate:modelValue":i[16]||(i[16]=m=>R.value.isTerms=m)},null,512),[[le,R.value.isTerms]]),xr]),F.value&&t(h).form4.isTerms.$error?(v(),_("p",_r,"You must agree before submitting.")):b("",!0)],2),Nr],32)]),t(o).includes("code4")?(v(),D(W,{key:0},{default:Y(()=>[kr]),_:1})):b("",!0)]),e("div",Fr,[e("div",wr,[Sr,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[18]||(i[18]=m=>t(a)("code5"))},[e("span",Er,[Z(H,{class:"me-2"}),M(" Code ")])])]),e("div",Cr,[e("form",{class:"space-y-5",onSubmit:i[26]||(i[26]=B(m=>ae(),["prevent"]))},[e("div",Vr,[e("div",null,[Lr,w(e("input",{id:"browserFname",type:"text",placeholder:"Enter First Name","onUpdate:modelValue":i[19]||(i[19]=m=>j.value.firstName=m),class:"form-input",required:""},null,512),[[z,j.value.firstName]])]),e("div",null,[Rr,w(e("input",{id:"browserLname",type:"text",placeholder:"Enter Last name","onUpdate:modelValue":i[20]||(i[20]=m=>j.value.lastName=m),class:"form-input",required:""},null,512),[[z,j.value.lastName]])]),e("div",null,[Pr,e("div",zr,[Tr,w(e("input",{id:"browserEmail",type:"text",placeholder:"Enter Username","onUpdate:modelValue":i[21]||(i[21]=m=>j.value.userName=m),class:"form-input ltr:rounded-l-none rtl:rounded-r-none",required:""},null,512),[[z,j.value.userName]])])])]),e("div",jr,[e("div",qr,[Ar,w(e("input",{id:"browserCity",type:"text",placeholder:"Enter City","onUpdate:modelValue":i[22]||(i[22]=m=>j.value.city=m),class:"form-input",required:""},null,512),[[z,j.value.city]])]),e("div",null,[Ur,w(e("input",{id:"browserState",type:"text",placeholder:"Enter State","onUpdate:modelValue":i[23]||(i[23]=m=>j.value.state=m),class:"form-input",required:""},null,512),[[z,j.value.state]])]),e("div",null,[Or,w(e("input",{id:"browserZip",type:"text",placeholder:"Enter Zip","onUpdate:modelValue":i[24]||(i[24]=m=>j.value.zip=m),class:"form-input",required:""},null,512),[[z,j.value.zip]])])]),e("div",null,[e("label",Gr,[w(e("input",{type:"checkbox",class:"form-checkbox","onUpdate:modelValue":i[25]||(i[25]=m=>j.value.isTerms=m),required:""},null,512),[[le,j.value.isTerms]]),Zr])]),Ir],32)]),t(o).includes("code5")?(v(),D(W,{key:0},{default:Y(()=>[Mr]),_:1})):b("",!0)]),e("div",Br,[e("div",Dr,[Yr,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[27]||(i[27]=m=>t(a)("code6"))},[e("span",Wr,[Z(H,{class:"me-2"}),M(" Code ")])])]),e("div",Hr,[e("form",{class:"space-y-5",onSubmit:i[35]||(i[35]=B(m=>Q(),["prevent"]))},[e("div",Qr,[e("div",{class:q({"has-error":t(x).form6.firstName.$error,"has-success":C.value&&!t(x).form6.firstName.$error})},[Xr,w(e("input",{id:"tlpFname",type:"text",placeholder:"Enter First Name",class:"form-input mb-2","onUpdate:modelValue":i[28]||(i[28]=m=>T.value.firstName=m)},null,512),[[z,T.value.firstName]]),C.value&&!t(x).form6.firstName.$error?(v(),_("span",Jr,"Looks Good!")):b("",!0),C.value&&t(x).form6.firstName.$error?(v(),_("span",Kr,"Please fill the first Name")):b("",!0)],2),e("div",{class:q({"has-error":t(x).form6.lastName.$error,"has-success":C.value&&!t(x).form6.lastName.$error})},[es,w(e("input",{id:"tlpLname",type:"text",placeholder:"Enter Last Name",class:"form-input mb-2","onUpdate:modelValue":i[29]||(i[29]=m=>T.value.lastName=m)},null,512),[[z,T.value.lastName]]),C.value&&!t(x).form6.lastName.$error?(v(),_("span",ts,"Looks Good!")):b("",!0),C.value&&t(x).form6.lastName.$error?(v(),_("span",rs,"Please fill the last Name")):b("",!0)],2),e("div",{class:q({"has-error":t(x).form6.userName.$error,"has-success":C.value&&!t(x).form6.userName.$error})},[ss,e("div",as,[os,w(e("input",{id:"tlpEmail",type:"text",placeholder:"Enter Username",class:"form-input ltr:rounded-l-none rtl:rounded-r-none","onUpdate:modelValue":i[30]||(i[30]=m=>T.value.userName=m)},null,512),[[z,T.value.userName]])]),e("div",ls,[C.value&&!t(x).form6.userName.$error?(v(),_("span",is,"Looks Good!")):b("",!0),C.value&&t(x).form6.userName.$error?(v(),_("span",ns,"Please choose a userName.")):b("",!0)])],2)]),e("div",ms,[e("div",{class:q(["md:col-span-2",{"has-error":t(x).form6.city.$error,"has-success":C.value&&!t(x).form6.city.$error}])},[us,w(e("input",{id:"tlpCity",type:"text",placeholder:"Enter City",class:"form-input mb-2","onUpdate:modelValue":i[31]||(i[31]=m=>T.value.city=m)},null,512),[[z,T.value.city]]),C.value&&!t(x).form6.city.$error?(v(),_("span",ds,"Looks Good!")):b("",!0),C.value&&t(x).form6.city.$error?(v(),_("span",cs,"Please provide a valid city.")):b("",!0)],2),e("div",{class:q({"has-error":t(x).form6.state.$error,"has-success":C.value&&!t(x).form6.state.$error})},[ps,w(e("input",{id:"tlpState",type:"text",placeholder:"Enter State",class:"form-input mb-2","onUpdate:modelValue":i[32]||(i[32]=m=>T.value.state=m)},null,512),[[z,T.value.state]]),C.value&&!t(x).form6.state.$error?(v(),_("span",fs,"Looks Good!")):b("",!0),C.value&&t(x).form6.state.$error?(v(),_("span",vs,"Please provide a valid state.")):b("",!0)],2),e("div",{class:q({"has-error":t(x).form6.zip.$error,"has-success":C.value&&!t(x).form6.zip.$error})},[bs,w(e("input",{id:"tlpZip",type:"text",placeholder:"Enter Zip",class:"form-input mb-2","onUpdate:modelValue":i[33]||(i[33]=m=>T.value.zip=m)},null,512),[[z,T.value.zip]]),C.value&&!t(x).form6.zip.$error?(v(),_("span",$s,"Looks Good!")):b("",!0),C.value&&t(x).form6.zip.$error?(v(),_("span",hs,"Please provide a valid Zip.")):b("",!0)],2)]),e("div",{class:q({"has-error":t(x).form6.isTerms.$error,"has-success":C.value&&!t(x).form6.isTerms.$error})},[e("label",ys,[w(e("input",{type:"checkbox",class:"form-checkbox","onUpdate:modelValue":i[34]||(i[34]=m=>T.value.isTerms=m)},null,512),[[le,T.value.isTerms]]),gs]),C.value&&t(x).form6.isTerms.$error?(v(),_("div",xs,Ns)):b("",!0)],2),ks],32)]),t(o).includes("code6")?(v(),D(W,{key:0},{default:Y(()=>[Fs]),_:1})):b("",!0)])])])]))}});export{Ls as default};
