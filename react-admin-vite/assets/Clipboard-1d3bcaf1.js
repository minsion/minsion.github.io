import{r as g,u as A,s as H,j as s,b as r,L as U}from"./index-8cd85ed0.js";import{C}from"./Highlight-f2825850.js";import{S as B}from"./sweetalert2.all-db9596c0.js";import{I as $}from"./IconBell-58d1c7ab.js";import{I as v}from"./IconCode-4ce6e9fe.js";import{I as h}from"./IconCopy-d00f42aa.js";import{I as _}from"./IconPencil-907d5dbd.js";var w={},q=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],o=0;o<t.rangeCount;o++)a.push(t.getRangeAt(o));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(n){t.addRange(n)}),e&&e.focus()}},z=q,S={"text/plain":"Text","text/html":"Url",default:"Text"},F="Copy to clipboard: #{key}, Enter";function K(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function V(t,e){var a,o,n,i,m,l,u=!1;e||(e={}),a=e.debug||!1;try{n=z(),i=document.createRange(),m=document.getSelection(),l=document.createElement("span"),l.textContent=t,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(p){if(p.stopPropagation(),e.format)if(p.preventDefault(),typeof p.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=S[e.format]||S.default;window.clipboardData.setData(c,t)}else p.clipboardData.clearData(),p.clipboardData.setData(e.format,t);e.onCopy&&(p.preventDefault(),e.onCopy(p.clipboardData))}),document.body.appendChild(l),i.selectNodeContents(l),m.addRange(i);var y=document.execCommand("copy");if(!y)throw new Error("copy command was unsuccessful");u=!0}catch(p){a&&console.error("unable to copy using execCommand: ",p),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(c){a&&console.error("unable to copy using clipboardData: ",c),a&&console.error("falling back to prompt"),o=K("message"in e?e.message:F),window.prompt(o,t)}}finally{m&&(typeof m.removeRange=="function"?m.removeRange(i):m.removeAllRanges()),l&&document.body.removeChild(l),n()}return u}var W=V;function k(t){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(t)}Object.defineProperty(w,"__esModule",{value:!0});w.CopyToClipboard=void 0;var x=E(g),X=E(W),G=["text","onCopy","options","children"];function E(t){return t&&t.__esModule?t:{default:t}}function j(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,o)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?j(Object(a),!0).forEach(function(o){P(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}function J(t,e){if(t==null)return{};var a=Q(t,e),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}function Q(t,e){if(t==null)return{};var a={},o=Object.keys(t),n,i;for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&(a[n]=t[n]);return a}function Y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Z(t,e,a){return e&&I(t.prototype,e),a&&I(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function ee(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}function T(t,e){return T=Object.setPrototypeOf||function(o,n){return o.__proto__=n,o},T(t,e)}function te(t){var e=ae();return function(){var o=N(t),n;if(e){var i=N(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return re(this,n)}}function re(t,e){if(e&&(k(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return M(t)}function M(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ae(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},N(t)}function P(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var R=function(t){ee(a,t);var e=te(a);function a(){var o;Y(this,a);for(var n=arguments.length,i=new Array(n),m=0;m<n;m++)i[m]=arguments[m];return o=e.call.apply(e,[this].concat(i)),P(M(o),"onClick",function(l){var u=o.props,y=u.text,p=u.onCopy,c=u.children,d=u.options,b=x.default.Children.only(c),L=(0,X.default)(y,d);p&&p(y,L),b&&b.props&&typeof b.props.onClick=="function"&&b.props.onClick(l)}),o}return Z(a,[{key:"render",value:function(){var n=this.props;n.text,n.onCopy,n.options;var i=n.children,m=J(n,G),l=x.default.Children.only(i);return x.default.cloneElement(l,D(D({},m),{},{onClick:this.onClick}))}}]),a}(x.default.PureComponent);w.CopyToClipboard=R;P(R,"defaultProps",{onCopy:void 0,options:void 0});var oe=w,O=oe.CopyToClipboard;O.CopyToClipboard=O;var f=O;const me=()=>{const t=A();g.useEffect(()=>{t(H("Clipboard"))});const[e,a]=g.useState([]),o=c=>{e.includes(c)?a(d=>d.filter(b=>b!==c)):a([...e,c])},[n,i]=g.useState("http://www.admin-dashboard.com"),[m,l]=g.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit..."),u="22991",y="http://www.admin-dashboard.com/code",p=(c="")=>{B.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:c||"Copied successfully.",padding:"10px 20px"})};return s("div",{children:[s("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[r("li",{children:r(U,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),r("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:r("span",{children:"Clipboard"})})]}),s("div",{className:"pt-5 space-y-8",children:[s("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[r("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:r($,{})}),r("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),r("a",{href:"https://www.npmjs.com/package/react-copy-to-clipboard",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-copy-to-clipboard"})]}),s("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[s("div",{className:"panel",id:"copy_from_input",children:[s("div",{className:"flex items-center justify-between mb-5",children:[r("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy from input"}),r("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code1"),children:s("span",{className:"flex items-center",children:[r(v,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:r("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:s("form",{children:[r("input",{type:"text",value:n,className:"form-input",onChange:c=>i(c.target.value)}),s("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[r(f.CopyToClipboard,{text:n,onCopy:(c,d)=>{d&&p()},children:s("button",{type:"button",className:"btn btn-primary",children:[r(h,{className:"ltr:mr-2 rtl:ml-2"}),"Copy from Input"]})}),r(f.CopyToClipboard,{text:n,onCopy:(c,d)=>{d&&p("Cut successfully.")},children:s("button",{type:"button",className:"btn btn-dark",value:n,onClick:()=>i(""),children:[r(_,{className:"ltr:mr-2 rtl:ml-2"}),"Cut from Input"]})})]})]})})}),e.includes("code1")&&r(C,{children:r("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message1, setMessage1] = useState<any>('http://www.admin-dashboard.com');

<form>
    <input type="text" value={message1} className="form-input" onChange={(e) => setMessage1(e.target.value)} />
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark" value={message1} onClick={() => setMessage1('')}>
                <svg>...</svg>
                Cut from Input
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),s("div",{className:"panel",id:"copy_from_textarea",children:[s("div",{className:"flex items-center justify-between mb-5",children:[r("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy form Textarea"}),r("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code2"),children:s("span",{className:"flex items-center",children:[r(v,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:r("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:s("form",{children:[r("textarea",{rows:3,wrap:"soft",className:"form-textarea",value:m,id:"message2",onChange:c=>l(c.target.value)}),s("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[r(f.CopyToClipboard,{text:m,onCopy:(c,d)=>{d&&p()},children:s("button",{type:"button",className:"btn btn-primary","data-clipboard-target":"#message2",children:[r(h,{className:"ltr:mr-2 rtl:ml-2"}),"Copy from Input"]})}),r(f.CopyToClipboard,{text:m,onCopy:(c,d)=>{d&&p("Cut successfully.")},children:s("button",{type:"button",className:"btn btn-dark ",onClick:()=>l(""),children:[r(_,{className:"ltr:mr-2 rtl:ml-2"}),"Cut from Input"]})})]})]})})}),e.includes("code2")&&r(C,{children:r("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message2, setMessage2] = useState<any>('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');

<form>
    <textarea rows={3} wrap="soft" className="form-textarea" value={message2} id="message2" onChange={(e) => setMessage2(e.target.value)}></textarea>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#message2">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark " onClick={() => setMessage2('')}>
                <svg>...</svg>
                Cut from Input
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),s("div",{className:"panel",id:"copy_from_paragraph",children:[s("div",{className:"flex items-center justify-between mb-5",children:[r("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy Text from Paragraph"}),r("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code3"),children:s("span",{className:"flex items-center",children:[r(v,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:r("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:s("form",{children:[s("p",{className:"mb-3 font-semibold",children:["Here is your OTP",r("span",{className:"text-2xl",id:"copyOTP",defaultValue:u,children:"22991"}),"."]}),r("p",{className:"font-semibold",children:"Please do not share it to anyone"}),r("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:r(f.CopyToClipboard,{text:u,onCopy:(c,d)=>{d&&p()},children:s("button",{type:"button",className:"btn btn-primary","data-clipboard-target":"#copyOTP",children:[r(h,{className:"ltr:mr-2 rtl:ml-2"}),"Copy from Paragraph"]})})})]})})}),e.includes("code3")&&r(C,{children:r("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message3 = '22991';

<form>
    <p className="mb-3 font-semibold">
        Here is your OTP
        <span className="text-2xl" id="copyOTP" defaultValue={message3}>
            22991
        </span>
        .
    </p>
    <p className="font-semibold">Please do not share it to anyone</p>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message3}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#copyOTP">
                <svg>...</svg>
                Copy from Paragraph
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),s("div",{className:"panel",id:"advanced",children:[s("div",{className:"flex items-center justify-between mb-5",children:[r("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy Hidden Text (Advanced)"}),r("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code4"),children:s("span",{className:"flex items-center",children:[r(v,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:r("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:s("form",{children:[s("p",{className:"mb-3 font-semibold",children:[s("span",{children:[" ","Link -> "," "]}),r("span",{id:"copyLink",children:" http://www.admin-dashboard.com/code"})]}),r("span",{className:"absolute opacity-0",id:"copyHiddenCode",children:"2291"}),s("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[r(f.CopyToClipboard,{text:y,onCopy:(c,d)=>{d&&p()},children:s("button",{type:"button",className:"btn btn-primary",children:[r(h,{className:"ltr:mr-2 rtl:ml-2"}),"Copy Link"]})}),r(f.CopyToClipboard,{text:"2291",onCopy:(c,d)=>{d&&p()},children:s("button",{type:"button",className:"btn btn-dark ",children:[r(h,{className:"ltr:mr-2 rtl:ml-2"}),"Copy Hidden Code"]})})]})]})})}),e.includes("code4")&&r(C,{children:r("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message4 = 'http://www.admin-dashboard.com/code';

<form>
    <p className="mb-3 font-semibold">
        <span> {'Link -> '} </span>
        <span id="copyLink"> http://www.admin-dashboard.com/code</span>
    </p>
    <span className="absolute opacity-0" id="copyHiddenCode">
        2291
    </span>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message4}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy Link
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={'2291'}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-dark ">
                <svg>...</svg>
                Copy Hidden Code
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]})]})]})]})};export{me as default};
