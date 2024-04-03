import{r as oe,y as ce,w as me,u as ue,s as pe,j as r,b as e,L as fe}from"./index-8cd85ed0.js";import{C as te}from"./Highlight-f2825850.js";import{I as he}from"./IconBell-58d1c7ab.js";import{I as ae}from"./IconCode-4ce6e9fe.js";var de={},ke={get exports(){return de},set exports(ne){de=ne}};(function(ne,U){(function(se,f){ne.exports=f(oe)})(ce,function(se){return function(f){function i(m){if(d[m])return d[m].exports;var h=d[m]={exports:{},id:m,loaded:!1};return f[m].call(h.exports,h,h.exports,i),h.loaded=!0,h.exports}var d={};return i.m=f,i.c=d,i.p="",i(0)}([function(f,i,d){function m(o){return o&&o.__esModule?o:{default:o}}function h(o,t){var a={};for(var n in o)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);return a}function _(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function y(o,t){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?o:t}function C(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(o,t):o.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0}),i.conformToMask=void 0;var g=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o[n]=a[n])}return o},k=function(){function o(t,a){for(var n=0;n<a.length;n++){var p=a[n];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(t,p.key,p)}}return function(t,a,n){return a&&o(t.prototype,a),n&&o(t,n),t}}(),N=d(3);Object.defineProperty(i,"conformToMask",{enumerable:!0,get:function(){return m(N).default}});var b=d(11),l=m(b),v=d(9),s=m(v),w=d(5),K=m(w),T=d(2),R=function(o){function t(){var a;_(this,t);for(var n=arguments.length,p=Array(n),u=0;u<n;u++)p[u]=arguments[u];var c=y(this,(a=t.__proto__||Object.getPrototypeOf(t)).call.apply(a,[this].concat(p)));return c.setRef=c.setRef.bind(c),c.onBlur=c.onBlur.bind(c),c.onChange=c.onChange.bind(c),c}return C(t,o),k(t,[{key:"setRef",value:function(a){this.inputElement=a}},{key:"initTextMask",value:function(){var a=this.props,n=this.props.value;this.textMaskInputElement=(0,K.default)(g({inputElement:this.inputElement},a)),this.textMaskInputElement.update(n)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(a){var n=this.props,p=n.value,u=n.pipe,c=n.mask,J=n.guide,E=n.placeholderChar,B=n.showMask,M={guide:J,placeholderChar:E,showMask:B},$=typeof u=="function"&&typeof a.pipe=="function"?u.toString()!==a.pipe.toString():(0,T.isNil)(u)&&!(0,T.isNil)(a.pipe)||!(0,T.isNil)(u)&&(0,T.isNil)(a.pipe),j=c.toString()!==a.mask.toString(),D=Object.keys(M).some(function(O){return M[O]!==a[O]})||j||$,F=p!==this.inputElement.value;(F||D)&&this.initTextMask()}},{key:"render",value:function(){var n=this.props,p=n.render,u=h(n,["render"]);return delete u.mask,delete u.guide,delete u.pipe,delete u.placeholderChar,delete u.keepCharPositions,delete u.value,delete u.onBlur,delete u.onChange,delete u.showMask,p(this.setRef,g({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},u))}},{key:"onChange",value:function(a){this.textMaskInputElement.update(),typeof this.props.onChange=="function"&&this.props.onChange(a)}},{key:"onBlur",value:function(a){typeof this.props.onBlur=="function"&&this.props.onBlur(a)}}]),t}(l.default.PureComponent);i.default=R,R.propTypes={mask:s.default.oneOfType([s.default.array,s.default.func,s.default.bool,s.default.shape({mask:s.default.oneOfType([s.default.array,s.default.func]),pipe:s.default.func})]).isRequired,guide:s.default.bool,value:s.default.oneOfType([s.default.string,s.default.number]),pipe:s.default.func,placeholderChar:s.default.string,keepCharPositions:s.default.bool,showMask:s.default.bool},R.defaultProps={render:function(o,t){return l.default.createElement("input",g({ref:o},t))}}},function(f,i){Object.defineProperty(i,"__esModule",{value:!0}),i.placeholderChar="_",i.strFunction="function"},function(f,i,d){function m(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:N,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k.placeholderChar;if(!h(l))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(l.indexOf(v)!==-1)throw new Error(`Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.

`+("The placeholder character that was received is: "+JSON.stringify(v)+`

`)+("The mask that was received is: "+JSON.stringify(l)));return l.map(function(s){return s instanceof RegExp?v:s}).join("")}function h(l){return Array.isArray&&Array.isArray(l)||l instanceof Array}function _(l){return typeof l=="string"||l instanceof String}function y(l){return typeof l=="number"&&l.length===void 0&&!isNaN(l)}function C(l){return typeof l>"u"||l===null}function g(l){for(var v=[],s=void 0;s=l.indexOf(b),s!==-1;)v.push(s),l.splice(s,1);return{maskWithoutCaretTraps:l,indexes:v}}Object.defineProperty(i,"__esModule",{value:!0}),i.convertMaskToPlaceholder=m,i.isArray=h,i.isString=_,i.isNumber=y,i.isNil=C,i.processCaretTraps=g;var k=d(1),N=[],b="[]"},function(f,i,d){function m(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:g,N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C,b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(0,_.isArray)(N)){if((typeof N>"u"?"undefined":h(N))!==y.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");N=N(k,b),N=(0,_.processCaretTraps)(N).maskWithoutCaretTraps}var l=b.guide,v=l===void 0||l,s=b.previousConformedValue,w=s===void 0?g:s,K=b.placeholderChar,T=K===void 0?y.placeholderChar:K,R=b.placeholder,o=R===void 0?(0,_.convertMaskToPlaceholder)(N,T):R,t=b.currentCaretPosition,a=b.keepCharPositions,n=v===!1&&w!==void 0,p=k.length,u=w.length,c=o.length,J=N.length,E=p-u,B=E>0,M=t+(B?-E:0),$=M+Math.abs(E);if(a===!0&&!B){for(var j=g,D=M;D<$;D++)o[D]===T&&(j+=T);k=k.slice(0,M)+j+k.slice(M,p)}for(var F=k.split(g).map(function(L,q){return{char:L,isNew:q>=M&&q<$}}),O=p-1;O>=0;O--){var x=F[O].char;if(x!==T){var W=O>=M&&u===J;x===o[W?O-E:O]&&F.splice(O,1)}}var A=g,X=!1;e:for(var Q=0;Q<c;Q++){var Y=o[Q];if(Y===T){if(F.length>0)for(;F.length>0;){var ee=F.shift(),Z=ee.char,le=ee.isNew;if(Z===T&&n!==!0){A+=T;continue e}if(N[Q].test(Z)){if(a===!0&&le!==!1&&w!==g&&v!==!1&&B){for(var re=F.length,H=null,z=0;z<re;z++){var G=F[z];if(G.char!==T&&G.isNew===!1)break;if(G.char===T){H=z;break}}H!==null?(A+=Z,F.splice(H,1)):Q--}else A+=Z;continue e}X=!0}n===!1&&(A+=o.substr(Q,c));break}A+=Y}if(n&&B===!1){for(var S=null,P=0;P<A.length;P++)o[P]===T&&(S=P);A=S!==null?A.substr(0,S+1):g}return{conformedValue:A,meta:{someCharsRejected:X}}}Object.defineProperty(i,"__esModule",{value:!0});var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k};i.default=m;var _=d(2),y=d(1),C=[],g=""},function(f,i){function d(_){var y=_.previousConformedValue,C=y===void 0?h:y,g=_.previousPlaceholder,k=g===void 0?h:g,N=_.currentCaretPosition,b=N===void 0?0:N,l=_.conformedValue,v=_.rawValue,s=_.placeholderChar,w=_.placeholder,K=_.indexesOfPipedChars,T=K===void 0?m:K,R=_.caretTrapIndexes,o=R===void 0?m:R;if(b===0||!v.length)return 0;var t=v.length,a=C.length,n=w.length,p=l.length,u=t-a,c=u>0,J=a===0,E=u>1&&!c&&!J;if(E)return b;var B=c&&(C===l||l===w),M=0,$=void 0,j=void 0;if(B)M=b-u;else{var D=l.toLowerCase(),F=v.toLowerCase(),O=F.substr(0,b).split(h),x=O.filter(function(I){return D.indexOf(I)!==-1});j=x[x.length-1];var W=k.substr(0,x.length).split(h).filter(function(I){return I!==s}).length,A=w.substr(0,x.length).split(h).filter(function(I){return I!==s}).length,X=A!==W,Q=k[x.length-1]!==void 0&&w[x.length-2]!==void 0&&k[x.length-1]!==s&&k[x.length-1]!==w[x.length-1]&&k[x.length-1]===w[x.length-2];!c&&(X||Q)&&W>0&&w.indexOf(j)>-1&&v[b]!==void 0&&($=!0,j=v[b]);for(var Y=T.map(function(I){return D[I]}),ee=Y.filter(function(I){return I===j}).length,Z=x.filter(function(I){return I===j}).length,le=w.substr(0,w.indexOf(s)).split(h).filter(function(I,ie){return I===j&&v[ie]!==I}).length,re=le+Z+ee+($?1:0),H=0,z=0;z<p;z++){var G=D[z];if(M=z+1,G===j&&H++,H>=re)break}}if(c){for(var S=M,P=M;P<=n;P++)if(w[P]===s&&(S=P),w[P]===s||o.indexOf(P)!==-1||P===n)return S}else if($){for(var L=M-1;L>=0;L--)if(l[L]===j||o.indexOf(L)!==-1||L===0)return L}else for(var q=M;q>=0;q--)if(w[q-1]===s||o.indexOf(q)!==-1||q===0)return q}Object.defineProperty(i,"__esModule",{value:!0}),i.default=d;var m=[],h=""},function(f,i,d){function m(t){return t&&t.__esModule?t:{default:t}}function h(t){var a={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:a,update:function(n){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,u=p.inputElement,c=p.mask,J=p.guide,E=p.pipe,B=p.placeholderChar,M=B===void 0?s.placeholderChar:B,$=p.keepCharPositions,j=$!==void 0&&$,D=p.showMask,F=D!==void 0&&D;if(typeof n>"u"&&(n=u.value),n!==a.previousConformedValue){(typeof c>"u"?"undefined":g(c))===T&&c.pipe!==void 0&&c.mask!==void 0&&(E=c.pipe,c=c.mask);var O=void 0,x=void 0;if(c instanceof Array&&(O=(0,v.convertMaskToPlaceholder)(c,M)),c!==!1){var W=y(n),A=u.selectionEnd,X=a.previousConformedValue,Q=a.previousPlaceholder,Y=void 0;if((typeof c>"u"?"undefined":g(c))===s.strFunction){if(x=c(W,{currentCaretPosition:A,previousConformedValue:X,placeholderChar:M}),x===!1)return;var ee=(0,v.processCaretTraps)(x),Z=ee.maskWithoutCaretTraps,le=ee.indexes;x=Z,Y=le,O=(0,v.convertMaskToPlaceholder)(x,M)}else x=c;var re={previousConformedValue:X,guide:J,placeholderChar:M,pipe:E,placeholder:O,currentCaretPosition:A,keepCharPositions:j},H=(0,l.default)(W,x,re),z=H.conformedValue,G=(typeof E>"u"?"undefined":g(E))===s.strFunction,S={};G&&(S=E(z,C({rawValue:W},re)),S===!1?S={value:X,rejected:!0}:(0,v.isString)(S)&&(S={value:S}));var P=G?S.value:z,L=(0,N.default)({previousConformedValue:X,previousPlaceholder:Q,conformedValue:P,placeholder:O,rawValue:W,currentCaretPosition:A,placeholderChar:M,indexesOfPipedChars:S.indexesOfPipedChars,caretTrapIndexes:Y}),q=P===O&&L===0,I=F?O:w,ie=q?I:P;a.previousConformedValue=ie,a.previousPlaceholder=O,u.value!==ie&&(u.value=ie,_(u,L))}}}}}function _(t,a){document.activeElement===t&&(R?o(function(){return t.setSelectionRange(a,a,K)},0):t.setSelectionRange(a,a,K))}function y(t){if((0,v.isString)(t))return t;if((0,v.isNumber)(t))return String(t);if(t==null)return w;throw new Error(`The 'value' provided to Text Mask needs to be a string or a number. The value received was:

 `+JSON.stringify(t))}Object.defineProperty(i,"__esModule",{value:!0});var C=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&(t[p]=n[p])}return t},g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};i.default=h;var k=d(4),N=m(k),b=d(3),l=m(b),v=d(2),s=d(1),w="",K="none",T="object",R=typeof navigator<"u"&&/Android/i.test(navigator.userAgent),o=typeof requestAnimationFrame<"u"?requestAnimationFrame:setTimeout},function(f,i){function d(h){return function(){return h}}var m=function(){};m.thatReturns=d,m.thatReturnsFalse=d(!1),m.thatReturnsTrue=d(!0),m.thatReturnsNull=d(null),m.thatReturnsThis=function(){return this},m.thatReturnsArgument=function(h){return h},f.exports=m},function(f,i,d){function m(h,_,y,C,g,k,N,b){if(!h){var l;if(_===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[y,C,g,k,N,b],s=0;l=new Error(_.replace(/%s/g,function(){return v[s++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}f.exports=m},function(f,i,d){var m=d(6),h=d(7),_=d(10);f.exports=function(){function y(k,N,b,l,v,s){s!==_&&h(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function C(){return y}y.isRequired=y;var g={array:y,bool:y,func:y,number:y,object:y,string:y,symbol:y,any:y,arrayOf:C,element:y,instanceOf:C,node:y,objectOf:C,oneOf:C,oneOfType:C,shape:C,exact:C};return g.checkPropTypes=m,g.PropTypes=g,g}},function(f,i,d){f.exports=d(8)()},function(f,i){var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";f.exports=d},function(f,i){f.exports=se}])})})(ke);const V=me(de),be=()=>{const ne=ue();oe.useEffect(()=>{ne(pe("Input Mask"))});const[U,se]=oe.useState([]),f=i=>{U.includes(i)?se(d=>d.filter(m=>m!==i)):se([...U,i])};return r("div",{children:[r("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(fe,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Input Mask"})})]}),r("div",{className:"pt-5 space-y-8 flex-1",id:"basic",children:[r("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e(he,{})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://www.npmjs.com/package/react-text-mask",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-text-mask"})]}),r("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-6",children:[r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Static Mask Basic"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>f("code1"),children:r("span",{className:"flex items-center",children:[e(ae,{className:"me-2"}),"Code"]})})]}),r("div",{className:"mb-5",children:[r("p",{className:"text-white-dark mb-5",children:["Input mask are use with ",e("span",{className:"text-danger",children:"input"})," tags."]}),e("form",{children:r("fieldset",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r("div",{children:[e("label",{htmlFor:"staticMask1",className:"text-white-dark",children:`mask="'##-#######'" (99-9999999)`}),e(V,{id:"staticMask1",type:"text",placeholder:"__-_______",className:"form-input",mask:[/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[e("label",{htmlFor:"staticMask2",className:"text-white-dark",children:`mask="'AA-####'" (aa-9999)`}),e(V,{id:"staticMask2",type:"text",placeholder:"__-____",className:"form-input",mask:[/[a-z]/,/[a-z]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]})]})})]}),U.includes("code1")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="staticMask1" className="text-white-dark">
                mask="'##-#######'" (99-9999999)
            </label>
            <MaskedInput
                id="staticMask1"
                type="text"
                placeholder="__-_______"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="staticMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9999)
            </label>
            <MaskedInput id="staticMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Alternate masks"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>f("code2"),children:r("span",{className:"flex items-center",children:[e(ae,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r("div",{children:[e("label",{htmlFor:"altnMask1",className:"text-white-dark",children:`mask="'##.#'" (99.9)`}),e(V,{id:"altnMask1",type:"text",placeholder:"__._",className:"form-input",mask:[/[0-9]/,/[0-9]/,".",/[0-9]/]})]}),r("div",{children:[e("label",{htmlFor:"altnMask2",className:"text-white-dark",children:`mask="'##.##'" (99.99)`}),e(V,{id:"altnMask2",type:"text",placeholder:"__.__",className:"form-input",mask:[/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/]})]})]})})}),U.includes("code2")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="altnMask1" className="text-white-dark">
                mask="'##.#'" (99.9)
            </label>
            <MaskedInput id="altnMask1" type="text" placeholder="__._" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="altnMask2" className="text-white-dark">
                mask="'##.##'" (99.99)
            </label>
            <MaskedInput id="altnMask2" type="text" placeholder="__.__" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dynamic Syntax"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>f("code3"),children:r("span",{className:"flex items-center",children:[e(ae,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{className:"grid grid-cols-1 md:grid-cols-3 items-end gap-4",children:[r("div",{children:[r("label",{htmlFor:"dynamicMask1",className:"text-white-dark",children:[`mask="'#-AAA###'" (9-a`,"{1,3}","9","{1,3}",")"]}),e(V,{id:"dynamicMask1",type:"text",placeholder:"_-__",className:"form-input",mask:[/[0-9]/,"-",/[a-z]/,/[a-z]/,/[a-z]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[r("label",{htmlFor:"dynamicMask2",className:"text-white-dark",children:[`mask="'AA-####'" (aa-9`,"{1,4}",")"]}),e(V,{id:"dynamicMask2",type:"text",placeholder:"__-____",className:"form-input",mask:[/[a-z]/,/[a-z]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[r("label",{htmlFor:"dynamicMask3",className:"text-white-dark",children:[`mask="'AA-##'" (aa-9`,"{1,2}",")"]}),e(V,{id:"dynamicMask3",type:"text",placeholder:"__-__",className:"form-input",mask:[/[a-z]/,/[a-z]/,"-",/[0-9]/,/[0-9]/]})]})]})})}),U.includes("code3")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
        <div>
            <label htmlFor="dynamicMask1" className="text-white-dark">
                mask="'#-AAA###'" (9-a{'{1,3}'}9{'{1,3}'})
            </label>
            <MaskedInput
                id="dynamicMask1"
                type="text"
                placeholder="_-__"
                className="form-input"
                mask={[/[0-9]/, '-', /[a-z]/, /[a-z]/, /[a-z]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dynamicMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9{'{1,4}'})
            </label>
            <MaskedInput id="dynamicMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="dynamicMask3" className="text-white-dark">
                mask="'AA-##'" (aa-9{'{1,2}'})
            </label>
            <MaskedInput id="dynamicMask3" type="text" placeholder="__-__" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Date"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>f("code4"),children:r("span",{className:"flex items-center",children:[e(ae,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[r("div",{children:[e("label",{htmlFor:"dateMask1",className:"text-white-dark",children:`mask="'##/##/####'" (dd/mm/yyyy)`}),e(V,{id:"dateMask1",type:"text",placeholder:"__/__/____",className:"form-input",mask:[/[0-9]/,/[0-9]/,"/",/[0-9]/,/[0-9]/,"/",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[e("label",{htmlFor:"dateMask2",className:"text-white-dark",children:`mask="'##-##-####'" (99-99-9999)`}),e(V,{id:"dateMask2",type:"text",placeholder:"__-__-____",className:"form-input",mask:[/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),r("div",{children:[e("label",{htmlFor:"dateMask3",className:"text-white-dark",children:`mask="'## December, ####'" (99 December, 9999)`}),e(V,{id:"dateMask3",type:"text",placeholder:"__ December, ____",className:"form-input",mask:[/[0-9]/,/[0-9]/," ","D","e","c","e","m","b","e","r"," ",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]})]})})}),U.includes("code4")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
            <label htmlFor="dateMask1" className="text-white-dark">
                mask="'##/##/####'" (dd/mm/yyyy)
            </label>
            <MaskedInput
                id="dateMask1"
                type="text"
                placeholder="__/__/____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask2" className="text-white-dark">
                mask="'##-##-####'" (99-99-9999)
            </label>
            <MaskedInput
                id="dateMask2"
                type="text"
                placeholder="__-__-____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask3" className="text-white-dark">
                mask="'## December, ####'" (99 December, 9999)
            </label>
            <MaskedInput
                id="dateMask3"
                type="text"
                placeholder="__ December, ____"
                className="form-input"
                // mask={['99 December, 9999']}
                mask={[/[0-9]/, /[0-9]/, ' ', 'D', 'e', 'c', 'e', 'm', 'b', 'e', 'r', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"IP"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>f("code5"),children:r("span",{className:"flex items-center",children:[e(ae,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{children:[e("label",{htmlFor:"ipMask",className:"text-white-dark",children:`mask="'###.###.###.###'" (192.198.1.1)`}),e(V,{id:"ipMask",type:"text",placeholder:"___.___.___.___",className:"form-input",mask:[/[0-9]/,/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/,/[0-9]/]})]})})}),U.includes("code5")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="ipMask" className="text-white-dark">
            mask="'###.###.###.###'" (192.198.1.1)
        </label>
        <MaskedInput
            id="ipMask"
            type="text"
            placeholder="___.___.___.___"
            className="form-input"
            mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Phone"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>f("code6"),children:r("span",{className:"flex items-center",children:[e(ae,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{children:[e("label",{htmlFor:"phoneMask",className:"text-white-dark",children:`mask="'(###) ###-####'" ((999) 999-9999)`}),e(V,{id:"phoneMask",type:"text",placeholder:"(___) ___-____",className:"form-input",mask:["(",/[0-9]/,/[0-9]/,/[0-9]/,")"," ",/[0-9]/,/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]})})}),U.includes("code6")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="phoneMask" className="text-white-dark">
            mask="'(###) ###-####'" ((999) 999-9999)
        </label>
        <MaskedInput
            id="phoneMask"
            type="text"
            placeholder="(___) ___-____"
            className="form-input"
            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Currency"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>f("code7"),children:r("span",{className:"flex items-center",children:[e(ae,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:r("fieldset",{children:[e("label",{htmlFor:"currencyMask",className:"text-white-dark",children:"$999,9999,999.99"}),e(V,{id:"currencyMask",type:"text",placeholder:"$___,____,___.__",className:"form-input",mask:["$",/[0-9]/,/[0-9]/,/[0-9]/,",",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,",",/[0-9]/,/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/]})]})})}),U.includes("code7")&&e(te,{children:e("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="currencyMask" className="text-white-dark">
            $999,9999,999.99
        </label>
        <MaskedInput
            id="currencyMask"
            type="text"
            placeholder="$___,____,___.__"
            className="form-input"
            mask={['$', /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`})})]})]})]})]})};export{be as default};
