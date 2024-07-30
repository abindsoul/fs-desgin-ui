import { defineConfig } from 'vitepress'
// 引入插件
import  {alascom} from '../plugins/alascom'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fs-ui",
  description: "一个仿照element-plus的练手组件库",
  outDir: "./dits",
  base: "/fs-desgin-ui/dits/", 
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "https://raw.githubusercontent.com/abindsoul/blogPic/main/logo.png",
      dark: "https://raw.githubusercontent.com/abindsoul/blogPic/main/logo_hover.png",
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Button',
        items: [
          { text: '按钮组件', link: '/guide/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  
  markdown:{
    config(md){
      // 注册插件
      md.use(alascom)
    }
  }
})
