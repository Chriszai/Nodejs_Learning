const http = require('http');
const fs = require('fs')

const server = http.createServer();
server.on('request', function (req, res) {
    var url = req.url
    if (url === '/') {
        // 我们要发送的还是在文件中的内容
        fs.readFile('./resource/index.html', function (err, data) {
            if (err) {
                response.setHeader('Content-Type', 'text/plain; charset=utf-8')
                response.end('读取文件失败');
            }
            else {
                // res.end 支持两种
                response.setHeader('Content-Type', 'text/html; charset=utf-8')
                // 图片就不要指定编码了 否则会出错
                response.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
        res.end('')
    }
})

// 绑定端口号
server.listen(3000, function () {
    console.log('服务器启动成功')
})