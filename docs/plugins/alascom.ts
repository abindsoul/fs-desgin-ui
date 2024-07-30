// markdown-it 插件把markdown 转换成 html 的插件
import  MarkDownIt from "markdown-it";
// 提供容器的插件
import mdContainer from "markdown-it-container";
import fs from "node:fs";
import path from "node:path";
export const alascom = (md:MarkDownIt) => { //这玩意是markdown-it的实现的 记得装一下
    // 注册后就可以拿到 markdown 的实例，可以在这里进行各种处理
    // 在 node 环境编译的
    // 开始编写自定义模块
    let fileName:any ;
    let title:any;
    md.use(mdContainer,'div',{ // 第二个参数是容器名称
        // 这里 demo 匹配md文档展示时要对应也写 demo
        validate: (params:any) => params.trim().match(/^demo\s*(.*)$/), // 匹配 demo 开头
        render: (tokens:any, index:any) => {
            // 获取info 的描述
            const sourceTitle =tokens[index]
           if(sourceTitle && sourceTitle.nesting===1){
               title = sourceTitle.info.trim().match(/^demo\s*(.*)$/)[1]
           }
            // 获取组件路径
           const sourceFile = tokens[index+2];
           let source:any; //匹配到的代码放这里
           if(sourceFile && sourceFile.type === 'inline' && sourceFile.level===2){
            // 读取文件内容
                source = fs.readFileSync(path.resolve(__dirname,`../examples/${sourceFile.content}.vue`))
                fileName = sourceFile.content;//记录一下路径方便后面用
                sourceFile.children[0].content='';
                return `<div class="example"><p>${title}</p>${source}</div>`
           }else{
                source = fs.readFileSync(path.resolve(__dirname,`../examples/${fileName}.vue`)).toString()
                return `<details>
                <summary>查看源代码</summary>
                <div class="example-code"><pre><code>${md.utils.escapeHtml(source)}</code></pre></div>\n
                </details>`;
           }
        }
    }) 
};
