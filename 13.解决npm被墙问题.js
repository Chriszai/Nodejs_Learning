// npm install --global cnpm
// for example: cnpm install jquery
// 如果不想安装cnpm又想使用淘宝服务器 
// npm install jquery --regitry=https://registry.npm.taobao.org

/* 每一次手动加参数很麻烦
npm config set registry https://registry.npm.taobao.org
 查看配置信息
 npm config list*/

//安装
//引包
var express = require('express')

//创建服务应用程序 也就是之前的http.creatSever
var app = express()
//公开指定目录
// 可直接通过/public/xx 的方式访问 public目录中的所有资源了
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))

// 当服务器收到get请求的后 执行回调处理函数
app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="  en">  
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>art-template</title>
    </head>
    <body>
    <h1>hello express</h1>
    </body>
    
    </html>`)
})

app.get('/about', function (req, res) {
    res.send('hello Express')
})

//相当于server.listen
app.listen(3000, function () {
    console.log('app is running ')
})