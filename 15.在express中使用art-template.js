const bodyParser = require('body-parser')
var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')

var app = express()
app.use('/public/', express.static('./public/'))

// 第一个参数表示当以 .html结尾的文件的时候，使用art-template模板引擎
/*
express-art-template是专门用来在express中把art-template整合到express
中， 虽然外面不需要记载art-template但也必须安装 
原因就在于 express-art-template以来了 art-template 
 */
app.engine('html', require('express-art-template'))

// express为response 相应对象提供了一个方法：render
// render方法默认是不可用的，但是如果配置了模板引擎就可以使用 
// res.render('html模板名',{模板数据})
// 第一个参数不能写路径，默认回去项目中的views目录查找该模板
// 有一个约定：会把所有视图文件放到veiws 目录中

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//如果想要修改默认目录
app.set('views', render函数的默认路径)

app.get('/', function (req, res) {
    res.send('/ page')
    res.render('admin/index.html', {
        title: '管理系统'
    })
})

app.get('/post', function (req, res) {
    res.send('post page')
})

app.get('/pinglun', function (req, res) {
    console.log(req.query)
    res.redirect('/')
    // res.statusCode = 302
    // res.setHeader
})

//同一个路径可以请求多次
app.post('/post', function (req, res) {
    // req.query 只能拿get请求参数
    // 为了获取post请求体的api，我们需要使用一个第三方包：body-parser
    console.log(req.body)
    // readfile 第二个参数是可选的 传入utf8就是告诉它把读取到的文件直接按照utf8编码读取
    // 或者使用data.toString()
    fs.readFile('/db.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('Server error')
        }
        JSON.parse(data)
    })

})

app.listen(3000, function () {
    console.log('is ru nning...')
}) 