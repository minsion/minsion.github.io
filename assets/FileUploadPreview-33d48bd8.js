import{y as b,r as R,u as _e,s as be,j as _,b as o,L as ye,k as Ne}from"./index-08323c31.js";import{C as ee}from"./Highlight-9f01d9da.js";import{I as we}from"./IconBell-7a71d798.js";import{I as ae}from"./IconCode-e2412410.js";var ie={},G={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.getListFiles=a.getImage=a.getBase64=a.getAcceptTypeString=a.openFileDialog=void 0,a.openFileDialog=function(n){n.current&&n.current.click()},a.getAcceptTypeString=function(n,i){return n!=null&&n.length?n.map(function(s){return"."+s}).join(", "):i?"":"image/*"},a.getBase64=function(n){var i=new FileReader;return new Promise(function(s){i.addEventListener("load",function(){return s(String(i.result))}),i.readAsDataURL(n)})},a.getImage=function(n){var i=new Image;return new Promise(function(s){i.addEventListener("load",function(){return s(i)}),i.src=URL.createObjectURL(n)})},a.getListFiles=function(n,i){for(var s=[],m=0;m<n.length;m+=1)s.push(a.getBase64(n[m]));return Promise.all(s).then(function(e){var c=e.map(function(l,f){var t;return t={},t[i]=l,t.file=n[f],t});return c})}})(G);var ne={},E={};Object.defineProperty(E,"__esModule",{value:!0});E.DEFAULT_DATA_URL_KEY=E.INIT_MAX_NUMBER=E.DEFAULT_NULL_INDEX=void 0;E.DEFAULT_NULL_INDEX=-1;E.INIT_MAX_NUMBER=1e3;E.DEFAULT_DATA_URL_KEY="dataURL";(function(a){var n=b&&b.__awaiter||function(e,c,l,f){function t(r){return r instanceof l?r:new l(function(g){g(r)})}return new(l||(l=Promise))(function(r,g){function p(v){try{u(f.next(v))}catch(y){g(y)}}function w(v){try{u(f.throw(v))}catch(y){g(y)}}function u(v){v.done?r(v.value):t(v.value).then(p,w)}u((f=f.apply(e,c||[])).next())})},i=b&&b.__generator||function(e,c){var l={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},f,t,r,g;return g={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function p(u){return function(v){return w([u,v])}}function w(u){if(f)throw new TypeError("Generator is already executing.");for(;l;)try{if(f=1,t&&(r=u[0]&2?t.return:u[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,u[1])).done)return r;switch(t=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return l.label++,{value:u[1],done:!1};case 5:l.label++,t=u[1],u=[0];continue;case 7:u=l.ops.pop(),l.trys.pop();continue;default:if(r=l.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){l=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){l.label=u[1];break}if(u[0]===6&&l.label<r[1]){l.label=r[1],r=u;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(u);break}r[2]&&l.ops.pop(),l.trys.pop();continue}u=c.call(e,l)}catch(v){u=[6,v],t=0}finally{f=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}};Object.defineProperty(a,"__esModule",{value:!0}),a.getErrorValidation=a.isMaxNumberValid=a.isAcceptTypeValid=a.isMaxFileSizeValid=a.isImageValid=a.isResolutionValid=void 0;var s=E,m=G;a.isResolutionValid=function(e,c,l,f){if(l===void 0&&(l=0),f===void 0&&(f=1),!l||!f||!e.width||!e.height)return!0;switch(c){case"absolute":{if(e.width===l&&e.height===f)return!0;break}case"ratio":{var t=l/f;if(e.width/e.height===t)return!0;break}case"less":{if(e.width<=l&&e.height<=f)return!0;break}case"more":{if(e.width>=l&&e.height>=f)return!0;break}}return!1},a.isImageValid=function(e){return!!e.includes("image")},a.isMaxFileSizeValid=function(e,c){return c?e<=c:!0},a.isAcceptTypeValid=function(e,c){if(e&&e.length>0){var l=c.split(".").pop()||"";if(e.findIndex(function(f){return f.toLowerCase()===l.toLowerCase()})<0)return!1}return!0},a.isMaxNumberValid=function(e,c,l){if(c!==0&&!c)return!0;if(l===s.DEFAULT_NULL_INDEX){if(e<=c)return!0}else if(e<=c+1)return!0;return!1},a.getErrorValidation=function(e){var c=e.fileList,l=e.value,f=e.maxNumber,t=e.keyUpdate,r=e.acceptType,g=e.maxFileSize,p=e.resolutionType,w=e.resolutionWidth,u=e.resolutionHeight,v=e.allowNonImageType;return n(void 0,void 0,void 0,function(){var y,D,N,U,C;return i(this,function(I){switch(I.label){case 0:return y={},a.isMaxNumberValid(c.length+l.length,f,t)?[3,1]:(y.maxNumber=!0,[3,5]);case 1:D=0,I.label=2;case 2:return D<c.length?(N=c[D].file,N?!v&&!a.isImageValid(N.type)?(y.acceptType=!0,[3,5]):a.isAcceptTypeValid(r,N.name)?a.isMaxFileSizeValid(N.size,g)?p?[4,m.getImage(N)]:[3,4]:(y.maxFileSize=!0,[3,5]):(y.acceptType=!0,[3,5]):[3,4]):[3,5];case 3:if(U=I.sent(),C=a.isResolutionValid(U,p,w,u),!C)return y.resolution=!0,[3,5];I.label=4;case 4:return D+=1,[3,2];case 5:return Object.values(y).find(Boolean)?[2,y]:[2,null]}})})}})(ne);var Z=b&&b.__assign||function(){return Z=Object.assign||function(a){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var m in n)Object.prototype.hasOwnProperty.call(n,m)&&(a[m]=n[m])}return a},Z.apply(this,arguments)},Ie=b&&b.__createBinding||(Object.create?function(a,n,i,s){s===void 0&&(s=i),Object.defineProperty(a,s,{enumerable:!0,get:function(){return n[i]}})}:function(a,n,i,s){s===void 0&&(s=i),a[s]=n[i]}),Le=b&&b.__setModuleDefault||(Object.create?function(a,n){Object.defineProperty(a,"default",{enumerable:!0,value:n})}:function(a,n){a.default=n}),Ue=b&&b.__importStar||function(a){if(a&&a.__esModule)return a;var n={};if(a!=null)for(var i in a)i!=="default"&&Object.prototype.hasOwnProperty.call(a,i)&&Ie(n,a,i);return Le(n,a),n},X=b&&b.__awaiter||function(a,n,i,s){function m(e){return e instanceof i?e:new i(function(c){c(e)})}return new(i||(i=Promise))(function(e,c){function l(r){try{t(s.next(r))}catch(g){c(g)}}function f(r){try{t(s.throw(r))}catch(g){c(g)}}function t(r){r.done?e(r.value):m(r.value).then(l,f)}t((s=s.apply(a,n||[])).next())})},B=b&&b.__generator||function(a,n){var i={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},s,m,e,c;return c={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function l(t){return function(r){return f([t,r])}}function f(t){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,m&&(e=t[0]&2?m.return:t[0]?m.throw||((e=m.return)&&e.call(m),0):m.next)&&!(e=e.call(m,t[1])).done)return e;switch(m=0,e&&(t=[t[0]&2,e.value]),t[0]){case 0:case 1:e=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,m=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(e=i.trys,!(e=e.length>0&&e[e.length-1])&&(t[0]===6||t[0]===2)){i=0;continue}if(t[0]===3&&(!e||t[1]>e[0]&&t[1]<e[3])){i.label=t[1];break}if(t[0]===6&&i.label<e[1]){i.label=e[1],e=t;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(t);break}e[2]&&i.ops.pop(),i.trys.pop();continue}t=n.call(a,i)}catch(r){t=[6,r],m=0}finally{s=e=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}},z=b&&b.__spreadArrays||function(){for(var a=0,n=0,i=arguments.length;n<i;n++)a+=arguments[n].length;for(var s=Array(a),m=0,n=0;n<i;n++)for(var e=arguments[n],c=0,l=e.length;c<l;c++,m++)s[m]=e[c];return s};Object.defineProperty(ie,"__esModule",{value:!0});var L=Ue(R),K=G,De=ne,k=E,Ee=function(a){var n=a.value,i=n===void 0?[]:n,s=a.onChange,m=a.onError,e=a.children,c=a.dataURLKey,l=c===void 0?k.DEFAULT_DATA_URL_KEY:c,f=a.multiple,t=f===void 0?!1:f,r=a.maxNumber,g=r===void 0?k.INIT_MAX_NUMBER:r,p=a.acceptType,w=a.maxFileSize,u=a.resolutionWidth,v=a.resolutionHeight,y=a.resolutionType,D=a.inputProps,N=D===void 0?{}:D,U=a.allowNonImageType,C=U===void 0?!1:U,I=i||[],A=L.useRef(null),Y=L.useState(k.DEFAULT_NULL_INDEX),F=Y[0],j=Y[1],q=L.useState(null),H=q[0],J=q[1],Q=L.useState(!1),re=Q[0],P=Q[1],V=L.useCallback(function(){return K.openFileDialog(A)},[A]),le=L.useCallback(function(){j(k.DEFAULT_NULL_INDEX),V()},[V]),se=L.useCallback(function(){s==null||s([])},[s]),oe=function(d){var h=z(I);Array.isArray(d)?d.forEach(function(T){h.splice(T,1)}):h.splice(d,1),s==null||s(h)},ce=function(d){j(d),V()},ue=function(d){return X(void 0,void 0,void 0,function(){var h;return B(this,function(T){switch(T.label){case 0:return[4,De.getErrorValidation({fileList:d,maxFileSize:w,maxNumber:g,acceptType:p,keyUpdate:F,resolutionType:y,resolutionWidth:u,resolutionHeight:v,value:I,allowNonImageType:C})];case 1:return h=T.sent(),h?(J(h),m==null||m(h,d),[2,!1]):(H&&J(null),[2,!0])}})})},$=function(d){return X(void 0,void 0,void 0,function(){var h,T,x,S,W,M;return B(this,function(O){switch(O.label){case 0:return d?[4,K.getListFiles(d,l)]:[2];case 1:return h=O.sent(),h.length?[4,ue(h)]:[2];case 2:if(T=O.sent(),!T)return[2];if(S=[],F>k.DEFAULT_NULL_INDEX)W=h[0],x=z(I),x[F]=W,S.push(F);else if(t)for(x=z(I,h),M=I.length;M<x.length;M+=1)S.push(M);else x=[h[0]],S.push(0);return s==null||s(x,S),[2]}})})},de=function(d){return X(void 0,void 0,void 0,function(){return B(this,function(h){switch(h.label){case 0:return[4,$(d.target.files)];case 1:return h.sent(),F>k.DEFAULT_NULL_INDEX&&j(k.DEFAULT_NULL_INDEX),A.current&&(A.current.value=""),[2]}})})},me=L.useMemo(function(){return K.getAcceptTypeString(p,C)},[p,C]),fe=function(d){d.preventDefault(),d.stopPropagation()},ge=function(d){d.preventDefault(),d.stopPropagation(),d.dataTransfer.items&&d.dataTransfer.items.length>0&&P(!0)},pe=function(d){d.preventDefault(),d.stopPropagation(),P(!1)},ve=function(d){d.preventDefault(),d.stopPropagation(),P(!1),d.dataTransfer.files&&d.dataTransfer.files.length>0&&$(d.dataTransfer.files)},he=function(d){d.preventDefault(),d.stopPropagation(),d.dataTransfer.clearData()};return L.default.createElement(L.default.Fragment,null,L.default.createElement("input",Z({type:"file",accept:me,ref:A,multiple:t&&F===k.DEFAULT_NULL_INDEX,onChange:de,style:{display:"none"}},N)),e==null?void 0:e({imageList:I,onImageUpload:le,onImageRemoveAll:se,onImageUpdate:ce,onImageRemove:oe,errors:H,dragProps:{onDrop:ve,onDragEnter:ge,onDragLeave:pe,onDragOver:fe,onDragStart:he},isDragging:re}))},te=ie.default=Ee;const xe=()=>{const a=_e();R.useEffect(()=>{a(be("File Upload Preview"))});const[n,i]=R.useState([]),s=g=>{n.includes(g)?i(p=>p.filter(w=>w!==g)):i([...n,g])},[m,e]=R.useState([]),[c,l]=R.useState([]),f=69,t=(g,p)=>{e(g)},r=(g,p)=>{l(g)};return _("div",{children:[_("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[o("li",{children:o(ye,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),o("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:o("span",{children:"File Upload"})})]}),_("div",{className:"pt-5 space-y-8",children:[_("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[o("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:o(we,{})}),o("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),o("a",{href:"https://www.npmjs.com/package/react-images-uploading",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-images-uploading"})]}),_("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[_("div",{className:"panel",id:"single_file",children:[_("div",{className:"flex items-center justify-between mb-5",children:[o("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Single File Upload"}),o("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code1"),children:_("span",{className:"flex items-center",children:[o(ae,{className:"me-2"}),"Code"]})})]}),o("div",{className:"mb-5",children:_("div",{className:"custom-file-container","data-upload-id":"myFirstImage",children:[_("div",{className:"label-container",children:[o("label",{children:"Upload "}),o("button",{type:"button",className:"custom-file-container__image-clear",title:"Clear Image",onClick:()=>{e([])},children:"×"})]}),o("label",{className:"custom-file-container__custom-file"}),o("input",{type:"file",className:"custom-file-container__custom-file__custom-file-input",accept:"image/*"}),o("input",{type:"hidden",name:"MAX_FILE_SIZE",value:"10485760"}),o(te,{value:m,onChange:t,maxNumber:f,children:({imageList:g,onImageUpload:p,onImageRemoveAll:w,onImageUpdate:u,onImageRemove:v,isDragging:y,dragProps:D})=>_("div",{className:"upload__image-wrapper",children:[o("button",{className:"custom-file-container__custom-file__custom-file-control",onClick:p,children:"Choose File..."})," ",g.map((N,U)=>o("div",{className:"custom-file-container__image-preview relative",children:o("img",{src:N.dataURL,alt:"img",className:"m-auto"})},U))]})}),m.length===0?o("img",{src:"/assets/images/file-preview.svg",className:"max-w-md w-full m-auto",alt:""}):""]})}),n.includes("code1")&&o(ee,{children:o("pre",{className:"language-typescript",children:`import { useEffect, useState } from 'react';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const [images, setImages] = useState<any>([]);
const maxNumber = 69;

const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages(imageList as never[]);
};

<div className="custom-file-container" data-upload-id="myFirstImage">
    <div className="label-container">
        <label>Upload </label>
        <button
            type="button"
            className="custom-file-container__image-clear"
            title="Clear Image"
            onClick={() => {
                setImages([]);
            }}
        >
            ×
        </button>
    </div>
    <label className="custom-file-container__custom-file"></label>
    <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
    <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
            <div className="upload__image-wrapper">
                <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                    Choose File...
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                    <div key={index} className="custom-file-container__image-preview relative">
                        <img src={image.dataURL} alt="img" className="m-auto" />
                    </div>
                ))}
            </div>
        )}
    </ImageUploading>
    {images.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
</div>`})})]}),_("div",{className:"multiple-file-upload panel",children:[_("div",{className:"flex items-center justify-between mb-5",children:[o("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple File"}),o("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code2"),children:_("span",{className:"flex items-center",children:[o(ae,{className:"me-2"}),"Code"]})})]}),o("div",{className:"mb-5",children:_("div",{className:"custom-file-container","data-upload-id":"mySecondImage",children:[_("div",{className:"label-container",children:[o("label",{children:"Upload "}),o("button",{type:"button",className:"custom-file-container__image-clear",title:"Clear Image",onClick:()=>{l([])},children:"×"})]}),o("label",{className:"custom-file-container__custom-file"}),o("input",{type:"file",className:"custom-file-container__custom-file__custom-file-input",accept:"image/*"}),o("input",{type:"hidden",name:"MAX_FILE_SIZE",value:"10485760"}),o(te,{multiple:!0,value:c,onChange:r,maxNumber:f,children:({imageList:g,onImageUpload:p,onImageRemoveAll:w,onImageUpdate:u,onImageRemove:v,isDragging:y,dragProps:D})=>_("div",{className:"upload__image-wrapper",children:[o("button",{className:"custom-file-container__custom-file__custom-file-control",onClick:p,children:"Choose File..."})," ",o("div",{className:"grid gap-4 sm:grid-cols-3 grid-cols-1",children:g.map((N,U)=>_("div",{className:"custom-file-container__image-preview relative",children:[o("button",{type:"button",className:"custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0",title:"Clear Image",onClick:()=>v(U),children:o(Ne,{className:"w-3 h-3"})}),o("img",{src:N.dataURL,alt:"img",className:"object-cover shadow rounded w-full !max-h-48"})]},U))})]})}),c.length===0?o("img",{src:"/assets/images/file-preview.svg",className:"max-w-md w-full m-auto",alt:""}):""]})}),n.includes("code2")&&o(ee,{children:o("pre",{className:"language-typescript",children:`import { useEffect, useState } from 'react';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const [images2, setImages2] = useState<any>([]);
const maxNumber = 69;

const onChange2 = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages2(imageList as never[]);
};

<div className="custom-file-container" data-upload-id="mySecondImage">
    <div className="label-container">
        <label>Upload </label>
        <button
            type="button"
            className="custom-file-container__image-clear"
            title="Clear Image"
            onClick={() => {
                setImages2([]);
            }}
        >
            ×
        </button>
    </div>
    <label className="custom-file-container__custom-file"></label>
    <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
    <ImageUploading multiple value={images2} onChange={onChange2} maxNumber={maxNumber}>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
            <div className="upload__image-wrapper">
                <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                    Choose File...
                </button>
                &nbsp;
                <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
                    {imageList.map((image, index) => (
                        <div key={index} className="custom-file-container__image-preview relative">
                            <button
                                type="button"
                                className="custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0"
                                title="Clear Image"
                                onClick={() => onImageRemove(index)}
                            >
                                <svg>...</svg>
                            </button>
                            <img src={image.dataURL} alt="img" className="object-cover shadow rounded w-full !max-h-48" />
                        </div>
                    ))}
                </div>
            </div>
        )}
    </ImageUploading>
    {images2.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
</div>`})})]})]})]})]})};export{xe as default};
