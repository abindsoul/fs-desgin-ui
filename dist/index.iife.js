var FsDesignUi=function(n){"use strict";const s=n.defineComponent({__name:"index",props:{type:{type:String,default:"default"},text:{type:String,default:"按钮"}},setup(t){const e=t;return(r,c)=>(n.openBlock(),n.createElementBlock("button",null,n.toDisplayString(e.text),1))}}),o=[{install(t){t.component("fs-button",s)}}];return{version:"1.0.0",isInstall:!1,install(t){this.isInstall||(o.forEach(e=>{t.use(e)}),this.isInstall=!0,console.log("fs-design已注册"))}}}(Vue);
