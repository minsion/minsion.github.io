import{J as t,s as e,U as s,h as a,c as o,w as i,y as r,i as l,o as d,a as n,b as u,t as c,j as p,k as h}from"./index-CE7gXyKD.js";import{r as f,_ as g}from"./watermark.Dpp_Cumi.js";import{_ as w}from"./uni-indexed-list-wx.Y7FQckb4.js";import{_ as m}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-badge.BSmtmuwp.js";import"./uni-icons.tBNBx2EM.js";const I=m({data:()=>({detail:{user:[]},list:[],select:[],windowTop:0,groupId:""}),onLoad(t){this.groupId=t.groupId},mounted(){this.getflist(),t({success:t=>{this.windowTop=t.windowTop}})},computed:{userInfo(){return this.$store.state.userInfo}},methods:{createGroup(){if(this.select.length<=0)e({title:"未选择",icon:"none"});else{for(var t=[],a=0;a<this.select.length;a++)t.push(this.select[a].data.userId);var o={groupId:this.groupId,list:t};this.$http.request({url:"/group/kickedGroup",method:"POST",data:JSON.stringify(o),success:t=>{200==t.data.code&&s({delta:1}).then((t=>{e({title:"已删除",icon:"none"})}))}})}},bindClick(t){this.select=t.select},getflist(){this.$http.request({url:"/group/getInfo/"+this.groupId,success:t=>{if(200==t.data.code){this.detail=t.data.data;for(var e=this.detail.user,s=[],a=0;a<e.length;a++){var o=e[a];o.userId!==this.userInfo.userId&&s.push({name:o.nickName,avatar:o.portrait,userId:o.userId})}this.list=this.$fc.sortList({list:s,key:"name"})}}})}}},[["render",function(t,e,s,m,I,k){const x=f(a("watermark"),g),_=f(a("uni-indexed-list-wx"),w),v=l,j=h;return d(),o(v,{class:"wx-createGroup",style:r("height: calc(100vh - "+I.windowTop+"px)")},{default:i((()=>[n(x),n(v,{class:"wx-createGroup-check"},{default:i((()=>[n(_,{showSelect:"",showAdd:!1,options:I.list,onClick:k.bindClick},null,8,["options","onClick"])])),_:1}),n(v,{class:"wx-createGroup-foot"},{default:i((()=>[n(v,{class:"wx-btn wx-btn-error",onClick:k.createGroup},{default:i((()=>[u(" 删除 "),I.select.length>0?(d(),o(j,{key:0},{default:i((()=>[u("("+c(I.select.length)+")",1)])),_:1})):p("",!0)])),_:1},8,["onClick"])])),_:1})])),_:1},8,["style"])}],["__scopeId","data-v-407a7e4e"]]);export{I as default};