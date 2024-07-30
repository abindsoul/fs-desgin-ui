import Button from './index.vue'
import type {App} from'vue'
// 按需引入
export { Button } 
// 全部引入
export default{
    install(app:App){
        app.component(Button.name as string,Button)
    }
}
