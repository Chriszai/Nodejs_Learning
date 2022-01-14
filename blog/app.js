const express = require('express')
const path = require('path')

const app = express()

app.use('/public', express.static(path.join(__dirname, './public')))
//获取当前成员模板所属目录的绝对路径
// __filename 动态获取当前文件的绝对路径
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))
//patha.basename('c:a/b/c/index.js)    index.js
//patha.basename('c:a/b/c/index.js,'.js')    index
//path.isAbsolute('c:/a/b/index.html') true
//path.parse('c:/a/b/index.html') 解析成对象 
//path.join('c:/a','b')  c:\\a\\b

app.get('', function (req, res) { 
    res.send('hello')
})

app.listen(5000, function () {
    console.log('is running')
})
// 文件相对路径指的是执行命令的终端相对路径 而不是文件本身