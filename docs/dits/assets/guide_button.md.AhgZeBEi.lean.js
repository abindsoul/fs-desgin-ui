import{_ as i,c as o,j as a,I as t,w as s,a as e,D as d,o as l}from"./chunks/framework.DxrY5oaY.js";const O=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"guide/button.md","filePath":"guide/button.md"}'),u={name:"guide/button.md"},r=a("h1",{id:"button",tabindex:"-1"},[e("Button "),a("a",{class:"header-anchor",href:"#button","aria-label":'Permalink to "Button"'},"​")],-1),p=a("p",null,"常用的操作按钮",-1),f=a("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),c={class:"example"},b=a("p",null,"使用 type、plain、round 和 circle 来定义按钮的样式。",-1),y={style:{margin:"15px 0"}},_={style:{margin:"15px 0"}},g={style:{margin:"15px 0"}},m={style:{margin:"15px 0"}},h=a("p",null,null,-1),v=a("details",null,[a("summary",null,"查看源代码"),a("div",{class:"example-code"},[a("pre",null,[a("code",null,`<div style="margin: 15px 0;">
    <!-- 基础按钮 -->
    <fs-button>default</fs-button>
    <fs-button type="primary">primary</fs-button>
    <fs-button type="success">success</fs-button>
    <fs-button type="info">info</fs-button>
    <fs-button type="warning">warning</fs-button>
    <fs-button type="danger">danger</fs-button>
</div>
<div style="margin: 15px 0;">
    <!-- plain按钮 -->
    <fs-button plain>plain</fs-button>
    <fs-button type="primary" plain>primary</fs-button>
    <fs-button type="success" plain>success</fs-button>
    <fs-button type="info" plain>info</fs-button>
    <fs-button type="warning" plain>warning</fs-button>
    <fs-button type="danger" plain>danger</fs-button>
</div>
<div style="margin: 15px 0;">
    <!-- 圆角按钮 -->
    <fs-button round>round</fs-button>
    <fs-button type="primary" round>primary</fs-button>
    <fs-button type="success" round>success</fs-button>
    <fs-button type="info" round>info</fs-button>
    <fs-button type="warning" round>warning</fs-button>
    <fs-button type="danger" round>danger</fs-button>
</div>
<div style="margin: 15px 0;">
    <!-- 圆形按钮 -->
    <fs-button circle icon="search"></fs-button>
    <fs-button type="primary" circle icon="fa-pen-to-square"></fs-button>
    <fs-button type="success" circle icon="check"></fs-button>
    <fs-button type="info" circle icon="trash"></fs-button>
    <fs-button type="warning" circle icon="fa-envelope"></fs-button>
    <fs-button type="danger" circle icon="star"></fs-button>
</div>
`)])])],-1),w=a("h2",{id:"警用状态",tabindex:"-1"},[e("警用状态 "),a("a",{class:"header-anchor",href:"#警用状态","aria-label":'Permalink to "警用状态"'},"​")],-1),x={class:"example"},k=a("p",null,"使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。",-1),B={style:{margin:"15px 0"}},P={style:{margin:"15px 0"}},N=a("p",null,null,-1),$=a("details",null,[a("summary",null,"查看源代码"),a("div",{class:"example-code"},[a("pre",null,[a("code",null,`<div style="margin: 15px 0;">
    <!-- 基础 -->
    <fs-button disabled>default</fs-button>
    <fs-button type="primary" disabled>primary</fs-button>
    <fs-button type="success" disabled>success</fs-button>
    <fs-button type="info" disabled>info</fs-button>
    <fs-button type="warning" disabled>warning</fs-button>
    <fs-button type="danger" disabled>danger</fs-button>
</div>
<div style="margin: 15px 0;">
    <!-- plain -->
    <fs-button plain disabled>plain</fs-button>
    <fs-button type="primary" plain disabled>primary</fs-button>
    <fs-button type="success" plain disabled>success</fs-button>
    <fs-button type="info" plain disabled>info</fs-button>
    <fs-button type="warning" plain disabled>warning</fs-button>
    <fs-button type="danger" plain disabled>danger</fs-button>
</div>`)])])],-1);function V(q,C,D,j,E,I){const n=d("fs-button");return l(),o("div",null,[r,p,f,a("div",c,[b,a("div",y,[t(n,null,{default:s(()=>[e("default")]),_:1}),t(n,{type:"primary"},{default:s(()=>[e("primary")]),_:1}),t(n,{type:"success"},{default:s(()=>[e("success")]),_:1}),t(n,{type:"info"},{default:s(()=>[e("info")]),_:1}),t(n,{type:"warning"},{default:s(()=>[e("warning")]),_:1}),t(n,{type:"danger"},{default:s(()=>[e("danger")]),_:1})]),a("div",_,[t(n,{plain:""},{default:s(()=>[e("plain")]),_:1}),t(n,{type:"primary",plain:""},{default:s(()=>[e("primary")]),_:1}),t(n,{type:"success",plain:""},{default:s(()=>[e("success")]),_:1}),t(n,{type:"info",plain:""},{default:s(()=>[e("info")]),_:1}),t(n,{type:"warning",plain:""},{default:s(()=>[e("warning")]),_:1}),t(n,{type:"danger",plain:""},{default:s(()=>[e("danger")]),_:1})]),a("div",g,[t(n,{round:""},{default:s(()=>[e("round")]),_:1}),t(n,{type:"primary",round:""},{default:s(()=>[e("primary")]),_:1}),t(n,{type:"success",round:""},{default:s(()=>[e("success")]),_:1}),t(n,{type:"info",round:""},{default:s(()=>[e("info")]),_:1}),t(n,{type:"warning",round:""},{default:s(()=>[e("warning")]),_:1}),t(n,{type:"danger",round:""},{default:s(()=>[e("danger")]),_:1})]),a("div",m,[t(n,{circle:"",icon:"search"}),t(n,{type:"primary",circle:"",icon:"fa-pen-to-square"}),t(n,{type:"success",circle:"",icon:"check"}),t(n,{type:"info",circle:"",icon:"trash"}),t(n,{type:"warning",circle:"",icon:"fa-envelope"}),t(n,{type:"danger",circle:"",icon:"star"})])]),h,v,w,a("div",x,[k,a("div",B,[t(n,{disabled:""},{default:s(()=>[e("default")]),_:1}),t(n,{type:"primary",disabled:""},{default:s(()=>[e("primary")]),_:1}),t(n,{type:"success",disabled:""},{default:s(()=>[e("success")]),_:1}),t(n,{type:"info",disabled:""},{default:s(()=>[e("info")]),_:1}),t(n,{type:"warning",disabled:""},{default:s(()=>[e("warning")]),_:1}),t(n,{type:"danger",disabled:""},{default:s(()=>[e("danger")]),_:1})]),a("div",P,[t(n,{plain:"",disabled:""},{default:s(()=>[e("plain")]),_:1}),t(n,{type:"primary",plain:"",disabled:""},{default:s(()=>[e("primary")]),_:1}),t(n,{type:"success",plain:"",disabled:""},{default:s(()=>[e("success")]),_:1}),t(n,{type:"info",plain:"",disabled:""},{default:s(()=>[e("info")]),_:1}),t(n,{type:"warning",plain:"",disabled:""},{default:s(()=>[e("warning")]),_:1}),t(n,{type:"danger",plain:"",disabled:""},{default:s(()=>[e("danger")]),_:1})])]),N,$])}const S=i(u,[["render",V]]);export{O as __pageData,S as default};
