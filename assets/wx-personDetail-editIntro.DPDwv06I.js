import{U as r,s as t,h as e,c as o,w as s,i as a,o as i,a as m,b as n,I as l,p as u}from"./index-CE7gXyKD.js";import{r as d,_ as c}from"./watermark.Dpp_Cumi.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";const h=f({data:()=>({form:{intro:"",userId:""}}),onLoad(r){this.form.userId=r.userId,this.form.intro=r.intro},methods:{subform(e){var o=JSON.parse(JSON.stringify(this.form));this.$zmmFormCheck.check(o,{intro:{rules:[{checkType:"required",errorMsg:"请填写内容"}]}})?this.$http.request({url:"/my/editIntro",method:"POST",data:JSON.stringify(o),success:e=>{200==e.data.code&&r({delta:1}).then((()=>{t({title:"修改成功",icon:"success"}),this.$store.dispatch("get_UserInfo")}))}}):t({title:this.$zmmFormCheck.error,icon:"none",position:"bottom"})}},onNavigationBarButtonTap(r){if(0===r.index)this.subform()}},[["render",function(r,t,f,h,p,_){const k=d(e("watermark"),c),b=a,I=l,g=u;return i(),o(b,null,{default:s((()=>[m(k),m(g,{onSubmit:_.subform,class:"remarkForm"},{default:s((()=>[m(b,{class:"remarkForm-item"},{default:s((()=>[m(b,{class:"remarkForm-label"},{default:s((()=>[n("个性签名 (发表你的个性签名吧)")])),_:1}),m(I,{class:"remarkForm-input",placeholder:"个性签名",type:"text",modelValue:p.form.intro,"onUpdate:modelValue":t[0]||(t[0]=r=>p.form.intro=r)},null,8,["modelValue"])])),_:1})])),_:1},8,["onSubmit"])])),_:1})}],["__scopeId","data-v-5687c3c2"]]);export{h as default};