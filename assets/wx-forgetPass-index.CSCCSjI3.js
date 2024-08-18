import{n as e,s as o,h as s,c as a,w as t,i as l,o as r,a as n,b as i,j as d,t as c,I as m,d as g,k as h,l as u,m as f,p}from"./index-CE7gXyKD.js";import{r as w,_ as x}from"./watermark.Dpp_Cumi.js";import{_ as k}from"./uni-icons.tBNBx2EM.js";import{_,a as y}from"./l04.BGrzyG5b.js";import{_ as b}from"./_plugin-vue_export-helper.BCo6x5W8.js";const C=b({data:()=>({code:"",loading:!1,timer:null,time:60,logintype:0,phone:"",cid:"",showPassword:!0,agree:!1}),onLoad(){},methods:{changePassword(){this.showPassword=!this.showPassword},goLogin(){e({url:"../login/index"})},goagreement(){this.$http.request({url:"/common/getAgreement",success:e=>{200==e.data.code&&window.open(e.data.data)}})},getMsgCode(){if(/^1[0-9]{10,10}$/.test(this.phone)){this.loading=!0,this.timer=setInterval((()=>{this.time--,this.time<=0&&(clearInterval(this.timer),this.loading=!1,this.time=60)}),1e3);var e={phone:this.phone,type:"3"};this.$http.request({url:"/auth/sendCode",method:"POST",data:JSON.stringify(e),success:e=>{200==e.data.code&&(this.code=e.data.data.code,o({title:"验证码已发送至你的手机",icon:"none"}))}})}else o({title:"请输入正确的手机号",icon:"none"})},rMathfloor:(e,o)=>Math.floor(Math.random()*(o-e+1))+e,sublogin(e){var s=e.detail.value,a=this.$zmmFormCheck.check(s,{phone:{rules:[{checkType:"required",errorMsg:"请填写手机号码"},{checkType:"phone",errorMsg:"请填写正确的手机号码"}]},password:{rules:[{checkType:"required",errorMsg:"请输入密码"},{checkType:"string",checkRule:"8,20",errorMsg:"至少输入8-20位"}]},code:{rules:[{checkType:"required",errorMsg:"请输入验证码"}]}});if(s.password=this.$md5.hex_md5(s.password),a){if(!this.agree)return void o({title:"请先同意《隐私及服务协议》",icon:"none"});this.$http.request({url:"/auth/forget",method:"POST",data:JSON.stringify(s),success:e=>{200==e.data.code&&o({title:"密码修改成功"})}})}else o({title:this.$zmmFormCheck.error,icon:"none",position:"bottom"})}}},[["render",function(e,o,b,C,M,v){const P=w(s("watermark"),x),T=l,$=m,j=w(s("uni-icons"),k),q=g,S=h,V=u,O=f,F=p;return r(),a(T,{class:"wx-login"},{default:t((()=>[n(P),n(T,{class:"wx-login-title"},{default:t((()=>[i("找回密码")])),_:1}),n(T,{class:"xw-login-form"},{default:t((()=>[n(F,{onSubmit:v.sublogin},{default:t((()=>[n(T,{class:"xw-login-form-item"},{default:t((()=>[n(T,{class:"xw-login-form-label"},{default:t((()=>[i("手机号")])),_:1}),n($,{class:"xw-login-form-input",maxlength:"11",placeholder:"请填写手机号",type:"text",name:"phone",modelValue:M.phone,"onUpdate:modelValue":o[0]||(o[0]=e=>M.phone=e)},null,8,["modelValue"]),M.phone.length>0?(r(),a(T,{key:0,class:"login-form-icon login-form-seepass",onClick:o[1]||(o[1]=e=>M.phone="")},{default:t((()=>[n(j,{type:"clear",size:"26",color:"#B9CCE0"})])),_:1})):d("",!0)])),_:1}),n(T,{class:"xw-login-form-item"},{default:t((()=>[n(T,{class:"xw-login-form-label"},{default:t((()=>[i("验证码")])),_:1}),n($,{class:"xw-login-form-input",placeholder:"请填写验证码",modelValue:M.code,"onUpdate:modelValue":o[2]||(o[2]=e=>M.code=e),name:"code",type:"text"},null,8,["modelValue"]),M.loading?(r(),a(T,{key:1,class:"wx-btn wx-btn-info"},{default:t((()=>[i(c(M.time)+"秒后重试",1)])),_:1})):(r(),a(T,{key:0,class:"wx-btn wx-btn-info",onClick:o[3]||(o[3]=e=>v.getMsgCode())},{default:t((()=>[i("获取验证码")])),_:1}))])),_:1}),n(T,{class:"xw-login-form-item"},{default:t((()=>[n(T,{class:"xw-login-form-label"},{default:t((()=>[i("新密码")])),_:1}),n($,{class:"xw-login-form-input",placeholder:"请输入密码",name:"password",password:M.showPassword,type:"text",value:""},null,8,["password"]),n(T,{class:"login-form-icon login-form-seepass",onClick:v.changePassword},{default:t((()=>[M.showPassword?(r(),a(q,{key:0,src:_,mode:"aspectFill"})):(r(),a(q,{key:1,src:y,mode:"aspectFill"}))])),_:1},8,["onClick"])])),_:1}),n(S,{class:"xw-login-form-code",onClick:v.goLogin},{default:t((()=>[i("已修改，去登录")])),_:1},8,["onClick"]),n(V,{class:"wx-btn wx-btn-info xw-login-form-btn","form-type":"submit"},{default:t((()=>[i("找回密码")])),_:1}),n(T,{class:"login-agree"},{default:t((()=>[n(T,{class:"login-agree-checkd"},{default:t((()=>[n(O,{onClick:o[4]||(o[4]=e=>M.agree=!M.agree),style:{transform:"scale(0.7)"},checked:M.agree},null,8,["checked"]),n(S,{class:"login-agree-btn",onClick:o[5]||(o[5]=e=>M.agree=!M.agree)},{default:t((()=>[i("已阅读并同意")])),_:1})])),_:1}),n(T,{class:"login-agree-text",onClick:o[6]||(o[6]=e=>v.goagreement())},{default:t((()=>[i("《隐私及服务协议》")])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})}],["__scopeId","data-v-ef3b9d87"]]);export{C as default};