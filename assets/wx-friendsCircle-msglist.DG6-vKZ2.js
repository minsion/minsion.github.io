import{_ as e,n as t,K as s,U as a,s as l,h as i,c as o,w as n,i as r,o as c,a as d,N as p,O as u,P as f,b as m,t as _,j as x,d as h,k as w}from"./index-CE7gXyKD.js";import{r as y,_ as g}from"./watermark.Dpp_Cumi.js";import{_ as k}from"./bf.BE2RdUDc.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";const v=C({data:()=>({list:[]}),onLoad(){},onShow(){this.getlist()},onUnload(){},methods:{returnParse:e=>JSON.parse(e),openVideo(e){this.$fc.plusDownload({onlinePath:e}).then((e=>{this.$fc.plusOpenFile({filePath:e})}))},getlist(){this.$http.request({url:"/topic/noticeList",success:t=>{200==t.data.code&&(this.list=t.data.data,this.$store.commit("update_topicReply",{}),e("topicReply"))}})},godetail(e){t({url:"./detail?topicId="+e.topicId})}},onNavigationBarButtonTap(e){if(0===e.index)s({itemList:["清除消息列表"],success:e=>{if(0===e.tapIndex)this.$http.request({url:"/topic/clearNotice",success:e=>{200==e.data.code&&a({delta:1}).then((e=>{l({title:"清除成功",icon:"none"})}))}})}})}},[["render",function(e,t,s,a,l,C){const v=y(i("watermark"),g),P=h,T=w,I=r;return c(),o(I,{class:"wxnearby"},{default:n((()=>[d(v),(c(!0),p(f,null,u(l.list,((e,t)=>(c(),o(I,{class:"wxnearby-item",key:t,onClick:t=>C.godetail(e)},{default:n((()=>[d(I,{class:"person-wx-user"},{default:n((()=>[d(P,{class:"person-wx-avatar",src:e.portrait,mode:"aspectFill"},null,8,["src"]),d(I,{class:"wxnearby-item-content"},{default:n((()=>[d(I,{class:"person-wx-user-detail"},{default:n((()=>[d(I,{class:"person-wx-nikename"},{default:n((()=>[d(T,{class:"text"},{default:n((()=>[m(_(e.nickName),1)])),_:2},1024)])),_:2},1024),d(I,{class:"person-wx-textx"},{default:n((()=>[m(_(e.replyContent),1)])),_:2},1024),d(T,{class:"person-wx-name"},{default:n((()=>[m(_(e.replyTime),1)])),_:2},1024)])),_:2},1024),d(I,{class:"wxmsglist-right"},{default:n((()=>["TEXT"==e.topicType?(c(),o(I,{key:0,class:"ctext"},{default:n((()=>[d(T,null,{default:n((()=>[m(_(C.returnParse(e.topicContent).content),1)])),_:2},1024)])),_:2},1024)):x("",!0),"IMAGE"==e.topicType?(c(),o(P,{key:1,class:"wxmsglist-right-cimg",src:C.returnParse(e.topicContent).files[0].url,mode:"aspectFill"},null,8,["src"])):x("",!0),"VIDEO"==e.topicType?(c(),o(I,{key:2,class:"friendsCircle-content-video"},{default:n((()=>[d(P,{class:"friendsCircle-content-video-icon",src:k,mode:"aspectFill"}),d(P,{class:"friendsCircle-content-video-img",src:C.returnParse(e.topicContent).files[0].url,mode:"aspectFill"},null,8,["src"])])),_:2},1024)):x("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})}],["__scopeId","data-v-f496ae1d"]]);export{v as default};
