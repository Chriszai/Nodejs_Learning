/*
使用Node编写应用程序主要使用：
EcmaScript语言
和浏览器不一样 再node中没有bom、dom

核心模块：
fs http url path os

第三方模块：
art-template

自定义模块： 
自己创建的 除了第三方的其他都不用安装
 */
var foo = 'bar'
function add(x, y) {
    return x + y
}

exports.add = add
// exports 是一个对象

//在module对象中，有一个成员叫exports也是一个成员对象
// 也就是说在模块中有这么行代码 var exports = module.exports
// console.log(exports === module.exports) true/
var module = {
    exports: {
        foo: 'bar'
    }
}

module.exports.foo = 'bar'
module.exports.add = function (x, y) {
    return x + y
}
// 最后return的事module.exports
// return module.exports

module.exports = "hello"
exports.foo = 'bar'
//hello
