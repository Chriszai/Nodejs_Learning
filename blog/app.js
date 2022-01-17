const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')

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

// 在node中有很多第三方模板引擎不止是art-template ejs、pug、handlebars
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router)

app.get('/', function (req, res) {
    res.render('index.html', {
        name: '张三'
    })
})

app.listen(5000, function () {
    console.log('is running')
})
// 文件相对路径指的是执行命令的终端相对路径 而不是文件本身 