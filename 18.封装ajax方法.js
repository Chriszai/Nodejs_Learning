function get(url, callback) {
    const xhr = new XMLHttpRequest()
    //当请求加载成功要调用的指定函数
    xhr.onload = function () {
        // console.log(xhr.responseText)
        callback(xhr.responseText)
    }
    xhr.open("get", url, true)
    xhr.send()
}


get('ss', function (data) {
    console.log(data)
})
// npm 5 以后的版本安装包不需要叫 --save参数 它会自动保存以来信息
// package-lock.json文件会保存node_modules中的所有包的信息
// 这样重新npm i的时候速度就可以提升

var arr = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" }
]

Array.prototype.myFind = function (conditionFunc) {
    for (var i = 0; i < this.length; i++) {
        if (conditionFunc(this[i], i)) {
            return this[i]
        }
    }
}

var ret = arr.myFind(function (itwem, index) {
    return itwem.id === 4
})

console.log(ret)