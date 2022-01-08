// npm install art-template 不仅可以在浏览器使用 也可以在node中使用
// 在需要使用的模块中加载 art-template
// 查文档 使用模板引擎的API
var template = require('art-template')
template.render('模板字符串', 替换对象)

var ret = template.render('hello {{ name }}', {
    name: 'Jack'
})
console.log(ret)
// fs.readfile读到的data是二进制数据
// 模板引擎只认识{{}}

客户端渲染和服务端渲染
// 从上到下依次解析 客户端渲染
// 在解析的过程中，如果发现ajax请求 则在此发起新的请求
// 拿到响应结果
// 模板引擎渲染 
// 第一次请求拿到的是页面 第二次请求拿到的是数据

// 服务端渲染页面+数据一起发送 只需要一次请求
// 一般来讲不用刷新的代表客户端渲染 刷新了代表服务端