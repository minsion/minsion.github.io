import{n as s,h as e,c as a,w as t,i as o,o as l,a as r,b as i,t as n,j as c,d as u,k as p}from"./index-CE7gXyKD.js";import{r as d,_ as A}from"./watermark.Dpp_Cumi.js";import{_ as x}from"./uni-icons.tBNBx2EM.js";import{_ as m}from"./tool-list-wx.DlOztQ6t.js";import{_ as w}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-badge.BSmtmuwp.js";const I=w({data:()=>({shoucang:[{title:"收藏",path:"../../wx/favorites/index",icon:"../../static/wx/t07.png",else:[]},{title:"朋友圈",path:"../../wx/friendsCircle/person",icon:"../../static/wx/t01.png",else:[]}],shezhi:[{title:"设置",path:"../system/index",icon:"../../static/wx/t04.png",else:[]}]}),computed:{userInfo(){return this.$store.state.userInfo}},onLoad(){},onShow(){this.$store.dispatch("tabBarpull")},methods:{delete1(s){console.log(s)},goPersonDetail(){s({url:"../../wx/personDetail/index"})}}},[["render",function(s,w,I,f,g,h){const E=d(e("watermark"),A),C=u,F=o,U=p,R=d(e("uni-icons"),x),J=d(e("tool-list-wx"),m);return l(),a(F,{class:"bgColor"},{default:t((()=>[r(E),h.userInfo?(l(),a(F,{key:0,class:"person-wx"},{default:t((()=>[r(F,{class:"person-wx-user"},{default:t((()=>[r(C,{class:"person-wx-avatar",onClick:w[0]||(w[0]=e=>s.$fc.previewImagesolo(h.userInfo.portrait)),src:h.userInfo.portrait,mode:"aspectFill"},null,8,["src"]),r(F,{class:"person-wx-user-detail",onClick:h.goPersonDetail},{default:t((()=>[r(F,{class:"person-wx-nikename"},{default:t((()=>[i(n(h.userInfo.nickName),1)])),_:1}),r(F,{class:"person-wx-name"},{default:t((()=>[r(U,{class:"text"},{default:t((()=>[i("微聊号："+n(h.userInfo.chatNo),1)])),_:1}),r(C,{class:"person-wx-fcode",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAA8VJREFUaEPtmD1oFEEUx9+7gxRqwMLzK6IIiiBiI2JQC1OonY1GRFEkxcxcIBZGbI2lELUQk30T7hTUIqnERlDRgIJYqI2NguJ3QEEEEULWzJMJu7Kuuzd7l1xiYLdJbvbNm9/8983Me4MwTx+cp9yQg8/2l8sVzxXPqIAzVMrl8mZjzE5mLrl8FovF54ODg7fidt3d3YuMMQeMMWtcPpj5DSLe01qP1bKtCS6E6ETESwCwzDVg+J6Zr2mtj4W/pZQbEXGImbdn9YGInwHgiOd5o2l9UsGFEEsQ8SsAjCLi2VpOQudCCIGIxMwXtdYnbbuU8hEAbAaA/UR01wWvlNrFzA8A4DERpU42FTx0gIgdWaAjCrOdLBF1BOB//XaB2/dCiDOI2EdEqXx1gSul2pIG9jzvUz3gLj9NAWfmj1F4RLzoed5UWCQpLKX8R3EhRC8i9kf9MHO71vpJ0xTPwXPFY6suaVcJFlVvfIE2EuOFQuGvhW6MGW5ajGfZyuKLMWlxuvzM+K7iGjDrruLyMy3weXtyWlWUUqeZ+ZxLodh+/HRycnJPpVL5FnyB3Yh4lZlXZvUzrVwlHKRcLm8xxmybTnYohFhRKBT2zlp2mFWhubBz5uMzAIVSyva4HyJ6nOS7s7OzpVQqLRsfH/9erVZ/pI3vBBdCnEPEwwCwyjGJ7wDwkIj2Re2UUjeY2faPP9eJ6Gi8UUppC4jlAPCrtbV1cX9//8+kcV2FxFR6iYi3jTFTCVCqAohLmdkWHl+IaFNop5Qase0J/YaJ6FC0va+vrzA2NjYZtvm+31atVm1R8c9TE1xK+ZyZb2qtz2YJmZTTNjN4sAu9BID1APCBiFJLPRc4N1JIRPvUo3gWcUKbusCTchWb5hLRhdChPeL/S/B4Pg4AvbXApZRkq7EENT0iKtv2rq6u1paWli0xm7ee571taFdJUK8tDs7Mp7TW59MUt+1JpVq03FNKHWfmK3FwIlo7p+Cu2A2TqrhdQ8VysMLj8WoVfx8dgJlPuxRPAu/p6Sn5vn85kkrsahq4S7mkyab1idyfpLqdMcUbBVdK7bB9fd//WKlU3gVxH178NAX8BQDcJ6ITGaF3A8AdY8yGoaGhV7ZPcI03EvR/TUTrmg4eWTT2NKt5CcnMCxFxYzDRP/mKUuogMw8H4PY0XN108ECxepKs0WKxeGJgYOBD+IWEEB2IaO8M7WH3jIi22nd2cU5MTFQAwN4CLwSABcHf8P8RIkpKzqZcO7PDLCEyFzY5+GyrniueK55RgTxUMgo1Y2a/AdBJGFyTJogJAAAAAElFTkSuQmCC",mode:"aspectFill"}),r(R,{class:"person-wx-right",type:"right",size:"26",color:"#676767"})])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})):c("",!0),r(J,{list:s.fuwu},null,8,["list"]),r(J,{list:g.shoucang},null,8,["list"]),r(J,{list:g.shezhi},null,8,["list"])])),_:1})}],["__scopeId","data-v-2344762f"]]);export{I as default};