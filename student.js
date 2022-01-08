const fs = require('fs')

/*
student.js
数据操作文件模块
职责:操作文件中的数据 之处理数据不关心业务 
 */

// 这里才是学习node的精华所在
// 封装异步api

var dbPath = './db.json'

exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //处理唯一id
        student.id = students[students.length - 1].id + 1

        //把用户传递的对象保存到数组中
        students.push(student)
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                //错误就把错误对象传递过去
                return callback(err)
            }
            // 成功就没错，所以错误对象是null
            callback(null)
        })
    })
}

exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //要修改谁 就把谁找出来
        // es6数组方法 find 需要接受一个函数作为参数
        // 当某个遍历项符合 符合条件并返回true时 会获取到到当前item
        var stu = students.find(function (item) {
            return item.id = id
        })
        callback(null, stu)
    })
}

exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //要修改谁 就把谁找出来
        // es6数组方法 find 需要接受一个函数作为参数
        // 当某个遍历项符合 符合条件并返回true时 会获取到到当前item
        var stu = students.find(function (item) {
            return item.id === parseInt(student.id)
        })

        // 写死了
        // stu.name = student.name
        // stu.age = student.age

        for (var key in student) {
            stu[key] = student[key]
        }

        // 写入文件
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                //错误就把错误对象传递过去
                return callback(err)
            }
            // 成功就没错，所以错误对象是null
            callback(null)
        })
    })
}

exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //findIndex 方法专门用来根据条件元素进行查找
        var deleteId = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })//返回值为元素下标

        students.splice(deleteId, 1)

        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                //错误就把错误对象传递过去
                return callback(err)
            }
            // 成功就没错，所以错误对象是null
            callback(null)
        })
    })
}
