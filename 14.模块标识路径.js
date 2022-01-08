var fs = require('fs')

//所有文件读取的操作都是异步
// 文件操作中的相对路径可以省略 ./
// /data/a.txt 当前所处模块磁盘根目录
fs.readFile('data/a.txt', function (err, data) {
    if (err) {
        return console.log('failed')
    }
    console.log(data.toString())
})

const express = require('express')

const app = express()

//当省略第一个参数时，则可以通过省略/public的方式
app.use(express.static('./static/'))

app.get('/', function (req, res) {
    // res.end('hello')
    res.send('hello world')
})

app.listen(3000, function () {
    console.log('server is running')
})

// 使用nodemon app.js 会自动更新