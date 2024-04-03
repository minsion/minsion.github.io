import{Y as lt,Z as ct,d as ut,u as dt,r as Y,o as A,b as pt,e,f as x,g as E,j as g,G as z,H as G,X as V,w as I,D as B}from"./index.ddf2ada6.js";import{c as ft,_ as N}from"./codePreview.b8512f6b.js";import{S as mt}from"./sweetalert2.all.06de7800.js";import{I as yt}from"./icon-bell.2ecf9464.js";import{I as $}from"./icon-code.a018a24c.js";import{I as H}from"./icon-copy.b255042f.js";import{_ as X}from"./icon-pencil.vue_vue_type_script_setup_true_lang.cb68dcd0.js";var J={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(S,T){(function(C,b){S.exports=b()})(lt,function(){return function(){var L={686:function(f,s,t){t.d(s,{default:function(){return at}});var c=t(279),a=t.n(c),o=t(370),d=t.n(o),h=t(817),w=t.n(h);function m(u){try{return document.execCommand(u)}catch{return!1}}var v=function(r){var n=w()(r);return m("cut"),n},y=v;function k(u){var r=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[r?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(i,"px"),n.setAttribute("readonly",""),n.value=u,n}var F=function(r,n){var i=k(r);n.container.appendChild(i);var l=w()(i);return m("copy"),i.remove(),l},K=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},i="";return typeof r=="string"?i=F(r,n):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?i=F(r.value,n):(i=w()(r),m("copy")),i},R=K;function O(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(n){return typeof n}:O=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},O(u)}var Q=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.action,i=n===void 0?"copy":n,l=r.container,p=r.target,_=r.text;if(i!=="copy"&&i!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(p!==void 0)if(p&&O(p)==="object"&&p.nodeType===1){if(i==="copy"&&p.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(i==="cut"&&(p.hasAttribute("readonly")||p.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return R(_,{container:l});if(p)return i==="cut"?y(p):R(p,{container:l})},W=Q;function M(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?M=function(n){return typeof n}:M=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},M(u)}function q(u,r){if(!(u instanceof r))throw new TypeError("Cannot call a class as a function")}function U(u,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(u,i.key,i)}}function tt(u,r,n){return r&&U(u.prototype,r),n&&U(u,n),u}function et(u,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(r&&r.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),r&&D(u,r)}function D(u,r){return D=Object.setPrototypeOf||function(i,l){return i.__proto__=l,i},D(u,r)}function ot(u){var r=st();return function(){var i=P(u),l;if(r){var p=P(this).constructor;l=Reflect.construct(i,arguments,p)}else l=i.apply(this,arguments);return nt(this,l)}}function nt(u,r){return r&&(M(r)==="object"||typeof r=="function")?r:rt(u)}function rt(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function st(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function P(u){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},P(u)}function Z(u,r){var n="data-clipboard-".concat(u);if(!!r.hasAttribute(n))return r.getAttribute(n)}var it=function(u){et(n,u);var r=ot(n);function n(i,l){var p;return q(this,n),p=r.call(this),p.resolveOptions(l),p.listenClick(i),p}return tt(n,[{key:"resolveOptions",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof l.action=="function"?l.action:this.defaultAction,this.target=typeof l.target=="function"?l.target:this.defaultTarget,this.text=typeof l.text=="function"?l.text:this.defaultText,this.container=M(l.container)==="object"?l.container:document.body}},{key:"listenClick",value:function(l){var p=this;this.listener=d()(l,"click",function(_){return p.onClick(_)})}},{key:"onClick",value:function(l){var p=l.delegateTarget||l.currentTarget,_=this.action(p)||"copy",j=W({action:_,container:this.container,target:this.target(p),text:this.text(p)});this.emit(j?"success":"error",{action:_,text:j,trigger:p,clearSelection:function(){p&&p.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(l){return Z("action",l)}},{key:"defaultTarget",value:function(l){var p=Z("target",l);if(p)return document.querySelector(p)}},{key:"defaultText",value:function(l){return Z("text",l)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(l){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return R(l,p)}},{key:"cut",value:function(l){return y(l)}},{key:"isSupported",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],p=typeof l=="string"?[l]:l,_=!!document.queryCommandSupported;return p.forEach(function(j){_=_&&!!document.queryCommandSupported(j)}),_}}]),n}(a()),at=it},828:function(f){var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(a,o){for(;a&&a.nodeType!==s;){if(typeof a.matches=="function"&&a.matches(o))return a;a=a.parentNode}}f.exports=c},438:function(f,s,t){var c=t(828);function a(h,w,m,v,y){var k=d.apply(this,arguments);return h.addEventListener(m,k,y),{destroy:function(){h.removeEventListener(m,k,y)}}}function o(h,w,m,v,y){return typeof h.addEventListener=="function"?a.apply(null,arguments):typeof m=="function"?a.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(k){return a(k,w,m,v,y)}))}function d(h,w,m,v){return function(y){y.delegateTarget=c(y.target,w),y.delegateTarget&&v.call(h,y)}}f.exports=o},879:function(f,s){s.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},s.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||s.node(t[0]))},s.string=function(t){return typeof t=="string"||t instanceof String},s.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(f,s,t){var c=t(879),a=t(438);function o(m,v,y){if(!m&&!v&&!y)throw new Error("Missing required arguments");if(!c.string(v))throw new TypeError("Second argument must be a String");if(!c.fn(y))throw new TypeError("Third argument must be a Function");if(c.node(m))return d(m,v,y);if(c.nodeList(m))return h(m,v,y);if(c.string(m))return w(m,v,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function d(m,v,y){return m.addEventListener(v,y),{destroy:function(){m.removeEventListener(v,y)}}}function h(m,v,y){return Array.prototype.forEach.call(m,function(k){k.addEventListener(v,y)}),{destroy:function(){Array.prototype.forEach.call(m,function(k){k.removeEventListener(v,y)})}}}function w(m,v,y){return a(document.body,m,v,y)}f.exports=o},817:function(f){function s(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var a=t.hasAttribute("readonly");a||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),a||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),d=document.createRange();d.selectNodeContents(t),o.removeAllRanges(),o.addRange(d),c=o.toString()}return c}f.exports=s},279:function(f){function s(){}s.prototype={on:function(t,c,a){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:c,ctx:a}),this},once:function(t,c,a){var o=this;function d(){o.off(t,d),c.apply(a,arguments)}return d._=c,this.on(t,d,a)},emit:function(t){var c=[].slice.call(arguments,1),a=((this.e||(this.e={}))[t]||[]).slice(),o=0,d=a.length;for(o;o<d;o++)a[o].fn.apply(a[o].ctx,c);return this},off:function(t,c){var a=this.e||(this.e={}),o=a[t],d=[];if(o&&c)for(var h=0,w=o.length;h<w;h++)o[h].fn!==c&&o[h].fn._!==c&&d.push(o[h]);return d.length?a[t]=d:delete a[t],this}},f.exports=s,f.exports.TinyEmitter=s}},C={};function b(f){if(C[f])return C[f].exports;var s=C[f]={exports:{}};return L[f](s,s.exports,b),s.exports}return function(){b.n=function(f){var s=f&&f.__esModule?function(){return f.default}:function(){return f};return b.d(s,{a:s}),s}}(),function(){b.d=function(f,s){for(var t in s)b.o(s,t)&&!b.o(f,t)&&Object.defineProperty(f,t,{enumerable:!0,get:s[t]})}}(),function(){b.o=function(f,s){return Object.prototype.hasOwnProperty.call(f,s)}}(),b(686)}().default})})(J);const ht=ct(J.exports),vt=S=>{const T=(S==null?void 0:S.appendToBody)===void 0?!0:S.appendToBody;return{toClipboard(L,C){return new Promise((b,f)=>{const s=document.createElement("button"),t=new ht(s,{text:()=>L,action:()=>"copy",container:C!==void 0?C:document.body});t.on("success",c=>{t.destroy(),b(c)}),t.on("error",c=>{t.destroy(),f(c)}),T&&document.body.appendChild(s),s.click(),T&&document.body.removeChild(s)})}}},bt=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Forms")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Clipboard")])],-1),gt={class:"pt-5 space-y-8"},Ct={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},wt={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},xt=e("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),_t=e("a",{href:"https://www.npmjs.com/package/vue-clipboard3",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/vue-clipboard3",-1),kt={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},Lt={class:"panel"},Tt={class:"flex items-center justify-between mb-5"},Et=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Copy from input",-1),St={class:"flex items-center"},Mt={class:"mb-5"},At={class:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]"},Ht={class:"flex flex-wrap gap-2 mt-5"},Ot=e("pre",null,`<!-- copy from input -->
<form>
  <input type="text" class="form-input" v-model="message1" id="message1" />
  <div class="flex flex-wrap gap-2 mt-5">
    <button type="button" class="btn btn-primary" @click="copy(message1)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2">
        <path
          d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          opacity="0.5"
          d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>
      Copy from Input
    </button>
    <button type="button" class="btn btn-dark" @click="cut(message1)" @blur="message1 = ''">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2">
        <path
          d="M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          opacity="0.5"
          d="M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>
      Cut from Input
    </button>
  </div>
</form>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();
const copy = async (msg) => {
  if (msg) {
    await toClipboard(msg);
    showMessage('Copied successfully.');
  }
};

const cut = async (msg) => {
  if (msg) {
    await toClipboard(msg);
    showMessage('Cut successfully.');
  }
};
<\/script>
`,-1),Pt={class:"panel"},jt={class:"flex items-center justify-between mb-5"},Vt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Copy form Textarea",-1),It={class:"flex items-center"},Bt={class:"mb-5"},Nt={class:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]"},$t={class:"flex flex-wrap gap-2 mt-5"},Rt=e("pre",null,`<!-- copy from textare -->
<form>
  <textarea rows="3" wrap="soft" class="form-textarea" v-model="message2" id="message2"></textarea>
  <div class="flex flex-wrap gap-2 mt-5">
    <button type="button" class="btn btn-primary" @click="copy(message2)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2">
        <path
          d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          opacity="0.5"
          d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>
      Copy from Input
    </button>
    <button type="button" class="btn btn-dark" @click="cut(message2)" @blur="message2 = ''">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2">
        <path
          d="M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          opacity="0.5"
          d="M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>
      Cut from Input
    </button>
  </div>
</form>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();
const copy = async (msg) => {
  if (msg) {
    await toClipboard(msg);
    showMessage('Copied successfully.');
  }
};

const cut = async (msg) => {
  if (msg) {
    await toClipboard(msg);
    showMessage('Cut successfully.');
  }
};
<\/script>
`,-1),Dt={class:"panel"},Zt={class:"flex items-center justify-between mb-5"},Ft=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Copy Text from Paragraph",-1),Ut={class:"flex items-center"},Yt={class:"mb-5"},zt={class:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]"},Gt=e("p",{class:"mb-3 font-semibold"},[g("Here is your OTP "),e("span",{class:"text-2xl",id:"copyOTP"},"22991"),g(".")],-1),Xt=e("p",{class:"font-semibold"},"Please do not share it to anyone",-1),Jt={class:"flex flex-wrap gap-2 mt-5"},Kt=e("pre",null,`<!-- copy from paragraph -->
<form>
  <p class="mb-3 font-semibold">Here is your OTP <span class="text-2xl" id="copyOTP">22991</span>.</p>
  <p class="font-semibold">Please do not share it to anyone</p>
  <div class="flex flex-wrap gap-2 mt-5">
    <button type="button" class="btn btn-primary" @click="copy('22991')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2">
        <path
          d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          opacity="0.5"
          d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>
      Copy from Paragraph
    </button>
  </div>
</form>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();
const copy = async (msg) => {
  if (msg) {
    await toClipboard(msg);
    showMessage('Copied successfully.');
  }
};
<\/script>
`,-1),Qt={class:"panel"},Wt={class:"flex items-center justify-between mb-5"},qt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Copy Hidden Text (Advanced)",-1),te={class:"flex items-center"},ee={class:"mb-5"},oe={class:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]"},ne=e("p",{class:"mb-3 font-semibold"},[e("span",null," Link -> "),g(),e("span",{id:"copyLink"}," http://www.admin-dashboard.com/code")],-1),re=e("span",{class:"absolute opacity-0",id:"copyHiddenCode"},"2291",-1),se={class:"flex flex-wrap gap-2 mt-5"},ie=e("pre",null,`<!-- advanced -->
<form>
  <p class="mb-3 font-semibold"><span> Link -> </span> <span id="copyLink"> http://www.admin-dashboard.com/code</span></p>
  <span class="absolute opacity-0" id="copyHiddenCode">2291</span>
  <div class="flex flex-wrap gap-2 mt-5">
    <button type="button" class="btn btn-primary" @click="copy('http://www.admin-dashboard.com/code')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2">
        <path
          d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          opacity="0.5"
          d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>
      Copy Link
    </button>
    <button type="button" class="btn btn-dark" @click="copy('2291')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2">
        <path
          d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          opacity="0.5"
          d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>
      Copy Hidden Code
    </button>
  </div>
</form>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import useClipboard from 'vue-clipboard3';
const message1 = ref('http://www.admin-dashboard.com');
const message2 = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');

const { toClipboard } = useClipboard();
const copy = async (msg) => {
  if (msg) {
    await toClipboard(msg);
    showMessage('Copied successfully.');
  }
};
<\/script>
`,-1),ye=ut({__name:"clipboard",setup(S){dt({title:"Clipboard"});const{codeArr:T,toggleCode:L}=ft(),C=Y("http://www.admin-dashboard.com"),b=Y("Lorem ipsum dolor sit amet, consectetur adipiscing elit..."),{toClipboard:f}=vt(),s=async a=>{a&&(await f(a),c("Copied successfully."))},t=async a=>{a&&(await f(a),c("Cut successfully."))},c=(a="",o="success")=>{mt.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:o,title:a,padding:"10px 20px"})};return(a,o)=>(A(),pt("div",null,[bt,e("div",gt,[e("div",Ct,[e("div",wt,[x(yt)]),xt,_t]),e("div",kt,[e("div",Lt,[e("div",Tt,[Et,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[0]||(o[0]=d=>E(L)("code1"))},[e("span",St,[x($,{class:"me-2"}),g(" Code ")])])]),e("div",Mt,[e("div",At,[e("form",null,[z(e("input",{type:"text",class:"form-input","onUpdate:modelValue":o[1]||(o[1]=d=>C.value=d),id:"message1"},null,512),[[G,C.value]]),e("div",Ht,[e("button",{type:"button",class:"btn btn-primary",onClick:o[2]||(o[2]=d=>s(C.value))},[x(H,{class:"ltr:mr-2 rtl:ml-2"}),g(" Copy from Input ")]),e("button",{type:"button",class:"btn btn-dark",onClick:o[3]||(o[3]=d=>t(C.value)),onBlur:o[4]||(o[4]=d=>C.value="")},[x(X,{class:"ltr:mr-2 rtl:ml-2"}),g(" Cut from Input ")],32)])])])]),E(T).includes("code1")?(A(),V(N,{key:0},{default:I(()=>[Ot]),_:1})):B("",!0)]),e("div",Pt,[e("div",jt,[Vt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[5]||(o[5]=d=>E(L)("code2"))},[e("span",It,[x($,{class:"me-2"}),g(" Code ")])])]),e("div",Bt,[e("div",Nt,[e("form",null,[z(e("textarea",{rows:"3",wrap:"soft",class:"form-textarea","onUpdate:modelValue":o[6]||(o[6]=d=>b.value=d),id:"message2"},null,512),[[G,b.value]]),e("div",$t,[e("button",{type:"button",class:"btn btn-primary",onClick:o[7]||(o[7]=d=>s(b.value))},[x(H,{class:"ltr:mr-2 rtl:ml-2"}),g(" Copy from Input ")]),e("button",{type:"button",class:"btn btn-dark",onClick:o[8]||(o[8]=d=>t(b.value)),onBlur:o[9]||(o[9]=d=>b.value="")},[x(X,{class:"ltr:mr-2 rtl:ml-2"}),g(" Cut from Input ")],32)])])])]),E(T).includes("code2")?(A(),V(N,{key:0},{default:I(()=>[Rt]),_:1})):B("",!0)]),e("div",Dt,[e("div",Zt,[Ft,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[10]||(o[10]=d=>E(L)("code3"))},[e("span",Ut,[x($,{class:"me-2"}),g(" Code ")])])]),e("div",Yt,[e("div",zt,[e("form",null,[Gt,Xt,e("div",Jt,[e("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=d=>s("22991"))},[x(H,{class:"ltr:mr-2 rtl:ml-2"}),g(" Copy from Paragraph ")])])])])]),E(T).includes("code3")?(A(),V(N,{key:0},{default:I(()=>[Kt]),_:1})):B("",!0)]),e("div",Qt,[e("div",Wt,[qt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:o[12]||(o[12]=d=>E(L)("code4"))},[e("span",te,[x($,{class:"me-2"}),g(" Code ")])])]),e("div",ee,[e("div",oe,[e("form",null,[ne,re,e("div",se,[e("button",{type:"button",class:"btn btn-primary",onClick:o[13]||(o[13]=d=>s("http://www.admin-dashboard.com/code"))},[x(H,{class:"ltr:mr-2 rtl:ml-2"}),g(" Copy Link ")]),e("button",{type:"button",class:"btn btn-dark",onClick:o[14]||(o[14]=d=>s("2291"))},[x(H,{class:"ltr:mr-2 rtl:ml-2"}),g(" Copy Hidden Code ")])])])])]),E(T).includes("code4")?(A(),V(N,{key:0},{default:I(()=>[ie]),_:1})):B("",!0)])])])]))}});export{ye as default};
