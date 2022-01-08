var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')

//创建服务应用程序 也就是之前的http.creatSever
var app = express()
//公开指定目录
// 可直接通过/public/xx 的方式访问 public目录中的所有资源了
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))

app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 把路由容器挂在到服务中
app.use(router)

//相当于server.listen
app.listen(3000, function () {
    console.log('app is running ')
})

// 此模块为入口模块
/*
职责：启动服务
做一些服务相关配置
模板引擎
body-parser解析表单post请求体
提供静态资源服务
 */