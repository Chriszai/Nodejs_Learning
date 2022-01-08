const http = require('http');
//提供服务
// 发送请求
// 接受请求
// 处理请求
// 给反馈(发送相应)
// 注册request事件
const server = http.createServer();
server.on('request', function (request, response) {
    console.log(request.url)
    response.write('hello')
    response.write('nodejs')
    response.end('hello world')
    // 上面的方式比较麻烦
    // 可以直接使用end 既发送相应又结束
    // req.url 获取到的是端口号之后的那一部分路径 /a/b
    var url = response.url
    if (url === '/') {
        response.end('index page')
    } else if ('login page') {
        response.end('login page')
    } else {
        response.end('404')
    }
    var phone = [1, 2, 3]
    response.end(JSON.stringify(phone)) //只能发送字符串 若不是则需要转化成字符串j
})

// 绑定端口号
server.listen(3000, function () {
    console.log('服务器启动成功')
})
