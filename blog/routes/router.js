const express = require('express')
const User = require('./models/user')
// npm i blueimp-md5
var md5 = require('blueimp-md5')
const router = express.Router()


router.get('/', function (req, res) {
    res.render('./index.html')
})

router.get('/regester', function (req, res) {
    res.render('./index.html')
})

router.post('/regester', function (req, res) {
    // npm i body-parser
    var body = req.body
    User.findOne({
        $or: [
            {
                email: body.email
            }, {
                nickname: body.nickname
            }
        ]
    }, function (err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务端错误'
            })
        }
        if (data) {
            //提供了一个方法
            return res.status(200).json({
                err_code: 1,
                message: '邮箱或密码已存在'
            })
        }

        // 为密码进行重复加密
        body.password = md5(md5(body.password))
        new User(body).save(function (err, user) {
            if (err) {
                return res.status(200).json({
                    err_code: 500,
                    message: '服务端错误'
                })
            }
            //json 方法自动把对象转为字符串发送给浏览器
            return res.status(200).json({
                err_code: 0,
                message: 'ok'
            })
        })
    })
})

router.get('/login', function (req, res) {
    res.render('./index.html')
})

router.post('/login', function (req, res) {

})

module.exports = router