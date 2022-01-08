const fs = require('fs')
// 成功：写入成功
// error null
// 失败 error就是错误对象
fs.writeFile('./你好.md', '大家好，给大家介绍一下，我是nodejs', function (error) {
    //不允许使用部分特殊字符 否则会报错
    if (error) {
        console.log(error)
    } else {
        console.log('successful')
    }
})