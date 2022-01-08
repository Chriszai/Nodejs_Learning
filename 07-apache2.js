const fs = require('fs')
const http = require('http')

var server = http.createServer()

// 之前使用过apache服务器软件，所有存放在www目录中的资源都可通过网址浏览 
server.on('request', function (req, res) {
    // 一个请求对应一个响应
    const url = req.url
    if (url === '/') {
        fs.readFile('C:/app/www/index.html', function (err, data) {// data默认二进制数据
            // return 两个作用
            // 阻止代码继续向后执行
            if (err) {
                return res.end('no found')
            }
            fs.readdir(wwwDir, function (err, files) {//得到该目录下的文件名 数组
                if (err) {
                    return res.end('no found')
                }
                var content = ''
                files.forEach(function (item) {
                    //使用&{}来引用变量
                    // 生成需要替换的内容
                    content += `
                    <tr>
                      <td>${item}</td>
                    </tr>
                    `
                })
            })
            // 替换
            data = data.toString();
            // 普通的字符串解析替换
            //data = data.replace('ddd', '苹果');
            data = data.replace('ddd', content);

            res.end(data)
        })
    }
})

server.listen(3000, function () {
    console.log("running...")
})