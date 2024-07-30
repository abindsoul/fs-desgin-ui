// 打包入口文件
import components from './component'
import type {App} from 'vue'
export default {
    // 写个开关 如果注册过就不管了
    version:'1.0.0',
    isInstall:false,
    install(app:App){
        if(this.isInstall) return
        // 把每个组件遍历
        components.forEach((item:any)=>{
            app.use(item)
        })
        this.isInstall=true
        console.log('fs-design已注册')
    }
}