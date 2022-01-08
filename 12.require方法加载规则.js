/*
凡是第三方模块都必须通过npm来下载
使用 require('包名')来加载
不可能有任何一个第三方包和核心模块名字是一样的 
 */
var template = require('art-template')
// 先找到当前文件所处目录中的node_modules
// 再找node_modules/art-template
// 再找node_modules/art-template/package.json
// 再找package里面的main属性 其中记录了入口模块
// 最终加载的还是文件
/* 
注意：如果package中不存在main或入口模块没有 也会报错
或者找该目录下的index.js 或者继续往上的node_modules中找art-template
 */

/* 
npm init -y 跳过向导，快速生成
npm intall xxx -S    npm i xxx -S
npm uninstall xxx -S 删除的同时也会把依赖信息给清楚
npm help
npm 命令 --help*/