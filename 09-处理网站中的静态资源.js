//app application
// 我们为了方便统一的处理所有静态资源 我们约定所有静态资源都存放在public目录中

const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

var comments = [
    {
        name: '张三',
        message: '今天天气不错',
        dataTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错2',
        dataTime: '2015-10-17'
    },
    {
        name: '张三3',
        message: '今天天气不错3',
        dataTime: '2015-10-18'
    },

]

/*
浏览器收到html相应内容后 就要从上到下依次解析
当再解析过程中，如果发现：link, script ,img, video,audio 等具有src或者
href属性标签（具有外链的资源标签）的时候，浏览器会自动对这些资源发起新的请求 
 */

/* 对于url具有用户动态填写的内容 需要使用url.parse方法 */

http.createServer(function (req, res) {
    const parseObj = url.parse(req.url, true)
    const pathname = parseObj.pathname
    if (pathname === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return res.end('404')
            }
            template.render(data.toString(), {
                comments: comments
            })
            res.end(data)// 若是需要操作字符串再转
        })
    } else if (pathname === '/pinglun') {
        //注意：这个时候无论/pinglun?xxx之后是什么都不需要担心
        // res.end(JSON.stringify(parseObj.query))
        var comment = parseObj.query
        comment.dataTime = '2017-11-2 17:11:22'
        comments.push(comment)
        // 服务器这个时候已经把数据存储好了 接下来就是让用户重新请求 
        /* 如何通过服务器重定向
        在状态码设置为302临时重定向
        statusCode
        在响应头中通过Location告诉客户端往哪重定向
        setHeader */
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    }
    else if (pathname.indexOf('/public/') === 0) {
        // 统一处理：如果请求路径是以public开头的，则认为你要获取public中的某个资源
        // 所以我们就直接把请求路径当作文件路径进行读取
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
                return res.end('404')
            }
            res.end(data)
        })
    }
}).listen(3000, function () {
    console.log('running...')
})
// 哪些资源可以被用户访问 那些布恩那个被用户访问，现在可以通过代码进行灵活处理 