const fs = require('fs')
/*
promise 是一个构造函数 
 */
console.log(1)
// 创建promise容器
// promise 本身不是异步，里面的代码是异步 一旦创建就开始执行其中的代码
let p1 = new Promise(function (resolve, reject) {
    console.log(2)
    fs.readFile('./data/a.txt', 'utf8', function (err, data) {
        console.log(3)
        if (err) {
            reject(err)//调用reject方法就相当于then方法第二个参数
        } else {
            resolve(data)//这里调用的resolve方法就是then方法传递的function
        }
    })
})

let p2 = new Promise(function (resolve, reject) {
    console.log(2)
    fs.readFile('./data/b.txt', 'utf8', function (err, data) {
        console.log(3)
        if (err) {
            reject(err)//调用reject方法就相当于then方法第二个参数
        } else {
            resolve(data)//这里调用的resolve方法就是then方法传递的function
        }
    })
})

console.log(4)//1243
p1.then(function (data) {
    //then方法接受的function就是resolve函数
    return p2 //我们可以return一个promise对象
}, function (err) {
    console.log('读取文件失败')
})
    .then(function (data) {
        return p3
    })
    .then(function (data) {

    })

