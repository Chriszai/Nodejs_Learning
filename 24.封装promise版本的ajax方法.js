function pGet(url, callback) {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest()
        oReq.onload = function () {
            callback && callback(JSON.parse(oReq.responseText))
            resolve(oReq.responseText)
        }

        oReq.onerror = function (err) {
            reject(err)
        }
        oReq.open("get", url, true)
        oReq.send()
    })
}

pGet('http://127.0.0.1:3000/users/4')
    .then(function (data) { console.log(data) },
        function (err) {

        })

User.findOne({ username: 'admin' })
    .then(function (user) {
        if (user) {
            console.log('用户已存在')
        } else {
            return new User({
                username: 'aaa',
                password: '123',
                email: 'dssda'
            }).save(function () { })
        }
    })
    .then(function (ret) {

    })