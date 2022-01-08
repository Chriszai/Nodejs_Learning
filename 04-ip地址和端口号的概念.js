// 计算机中只有一个物理网卡 而且在同一个局域网中，网卡的地址必须是唯一的
// 网卡是通过唯一的ip地址来进行定位的
// ip地址用来定位计算机
// 端口号用来定位应用程序（所有具有联网通信的软件都具有端口号）
const http = require('http');

const server = http.createServer();
server.on('request', function (request, response) {

    console.log('请求路径是' + request.url)
    console.log('请求客户端地址是', request.socket.remoteAddress, request.socket.remotePort);// ip地址 端口号
    // 端口号范围从0-65535之间 上线的时候使用80 浏览器默认使用80
    // http协议中content-type就是告诉对方 数据内容的类型 解决乱码问题
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')//设置编码格式 另一种格式是'text/html'
    response.end();

})

// 绑定端口号
server.listen(3000, function () {
    console.log('服务器启动成功')
})
/* 可以开启同时开启多个服务 但一定要确保不同服务占用的端口号不一致 不然会占用
在服务器默认发送的数据，默认是utf8内容，但是浏览器不知道utf8
浏览器在不知道服务器访问的响应内容编码的情况下 默认按照当前操作系统去解析 中文操作系统默认gdk
解决方法：告诉浏览器发送内容的编码格式*/
