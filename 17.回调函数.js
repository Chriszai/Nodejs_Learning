/*
使用 HTML-CSS-JS Prettify 进行格式化 
 */
function add(x, y) {
    console.log(1)
    setTimeout(function () {
        console.log(2)
        console.log('hello')
    }, 0)

    console.log(3)
    //到这里执行就结束了 不会等到前面的定时器
}
// 执行顺序永远都是132hello

function add(x, y) {
    var ret
    console.log(1)
    setTimeout(function () {
        console.log(2)
        console.log('hello')
    }, 0)

    console.log(3)
    return ret
    //到这里执行就结束了 不会等到前面的定时器
}

// 13 undefined 2 hello
// 注意凡是需要得到一个函数内部异步操作的结果
// setTimeout readFile writeFile ajax

function add(x, y, callback) {
    setTimeout(function () {
        var ret = x + y
        callback(ret)
    }, 1000)
}

add(10,20,function*(ret){
    console.log(ret)
    // 回调函数获取异步操作的结果
})
