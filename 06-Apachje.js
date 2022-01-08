const fs = require('fs')
const http = require('http')

var server = http.createServer()

// 之前使用过apache服务器软件，所有存放在www目录中的资源都可通过网址浏览 
server.on('request', function (req, res) {
    // 一个请求对应一个响应
    const url = req.url
    if (url === '/') {
        fs.readFile('C:/app/www/index.html', function (err, data) {
            if (err) {
                res.end('no found')
            } else {

            }
            // return 两个作用
            // 阻止代码继续向后执行
            if (err) {
                return res.end('no found')
            }
            res.end(data)
        })
    }
    let filePath = '/index.html'
    if (url !== '/') {
        filePath = url;
    }

    fs.readFile(wwwDir + filePath, function (err, data) {
        // return 两个作用
        // 阻止代码继续向后执行
        if (err) {
            return res.end('no found')
        }
        res.end(data)
    })
})

server.listen(3000, function () {
    console.log("running...")
})