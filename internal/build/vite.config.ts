import {defineConfig}from 'vite'
import vue from '@vitejs/plugin-vue';
import fs from 'node:fs'
import path from 'node:path'
import  * as compiler from 'vue/compiler-sfc'  //处理单文件组件的
// 出入口路径
import {ENTRY,OUTPUT_DIR,TYPES,TSWEBCONFIG,GLOB_PATTERN, EPROOT} from '../build-constants'

// vite插件
import {Plugin}from 'vite'
import {Project}from 'ts-morph' //用于ts编译 ts界的babel （第三方库）
import glob from 'fast-glob' //用于匹配文件 （第三方库）

const vitePluginsTypes = ():Plugin=>{
return{
    name:"vite-plugins-types",
    apply:'build', //调用build命令后 打完包之后就走closeBundle这个钩子
     closeBundle:async()=> {
        console.log('打完包了');
        console.log(TYPES);
        
        const project = new Project({
            compilerOptions:{
                emitDeclarationOnly:true, //只生成声明文件
                outDir:TYPES, //输出目录
                skipLibCheck:true, //跳过库 (d.ts)检查
            },
            tsConfigFilePath:TSWEBCONFIG,//ts配置文件
            skipAddingFilesFromTsConfig:true, //跳过从tsconfig这种添加的文件
        })
     
        // 把packages下的所有文件扫出来 
        // []第一个参数是扫描的规则，第二个参数是排除的目录
        // onlyFiles只扫描文件
        // absolute读取绝对路径
        const files= await glob([GLOB_PATTERN,'!fs-design/**/*'],{cwd:EPROOT,onlyFiles:true,absolute:true})
        // 处理 fs-design 里的文件
        const epPaths = await glob([GLOB_PATTERN],{cwd:ENTRY,onlyFiles:true}) //[ 'component.ts', 'index.ts' ]
        
           // 需要添加源文件
        files.forEach((file)=>{
            // 匹配vue文件
            if(file.endsWith('.vue')){
                // 把vue文件里的ts文件提取出来
                const content = fs.readFileSync(file,'utf-8')
                const sfc = compiler.parse(content) 
                const {scriptSetup,script }=sfc.descriptor //结构出来
                // script为了支持选项式api写法 scriptSetup为了支持组合式api写法
                if(script||scriptSetup){
                    let tscode = script?.content ?? '' //处理setup 函数模式
                    if(scriptSetup){ // 
                        // tscode += scriptSetup.content 无法直接使用 因为有 defineProps 这种编译宏 所以要手动解析一下
                        tscode += compiler?.compileScript(sfc.descriptor,{id:'xxx'}).content //手动解析一下 id:'xxx'随便写没吊用单不能省略
                        // 添加到源代码
                        const lang= sfc.descriptor.scriptSetup? 'ts' :'js'
                        // 假装是个ts文件
                        project.createSourceFile('${path,relative(process.cwd(),file)}.${lang}',tscode) //通过代码生成声明文件
                    }
                }
            }else{
                // ts文件
                project.addSourceFileAtPath(file) //直接添加进去
            }
        })     
        epPaths.forEach((file)=>{
            project.addSourceFileAtPath(path.resolve(ENTRY,file))
        })
        // 这里就可以生成声明文件了
        project.emit({
            emitOnlyDtsFiles:true, //只生成声明文件
        }) 
    },
}
}

export default defineConfig({
    plugins:[vue(),vitePluginsTypes()],
    build:{
        // 打包入口
        lib:{
            entry:ENTRY,
            // 多规范兼容
            formats:['es','umd','cjs','iife'],
            // 打包后的文件名
            name:'FsDesignUi',
            fileName(format, entryName) {
                return `${entryName}.${format}.js`
            },
        },
        // 打包出口
        outDir:OUTPUT_DIR,
        // rolluo配置
        rollupOptions:{
            // 忽略打包 vue 
            external:['vue'],
            // 输出时 把vue改为Vue否则iife引入时会报错找不到Vue
            output:{
                globals:{
                    vue:'Vue'
                }
            }
        }
    }
})