import DefaultTheme from 'vitepress/theme'
import type {Theme}from 'vitepress'
import * as fsDesign from '@fs-design/components'

console.log(fsDesign);

export default<Theme> { 
    ...DefaultTheme,
    enhanceApp({app}) {
        // 注册组件 name是组件里宏定义的
        app.component(fsDesign.Button.name as string,fsDesign.Button);
    }
}
