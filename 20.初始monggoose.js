/*
使用mongoose基于mongoDB第三方包来操作
npm i mongoose 
 */
var mongoose = require('mongooe')

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    autor: String,
    comments: [{ body: String, data: Date }],
    date: { type: Date, default: Date.now, required: true },
    email: {
        type: String
    }
})
//连接 MongoDB数据库(可以不用存在)
// 它会在插入第一条数据后自动创建
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

mongoose.Promie = global.Promise

// 将一个文档架构发布为一个模型
// MongoDB是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
// 第一个参数：表示你的数据库名称，会自动变为小写复数 Cat= cats 集合
var Cat = mongoose.model('Cat', { name: String })//blogSchema

// 新增数据
var lili = new User({
    lili: "ss"
})

for (let i = 0; i < array.length; i++) {
    var kitty = new Cat({ name: 'cat' + i })

    // 持久化保存 kitty 实例
    kitty.save(function (err, ret) {
        if (err) {
            console.log(err)
        } else {
            console.log('meow')
        }
    })
    //实例化一个Cat
}

{
    qq: {
        uesrs: [
            { name: '张三', age: 15 },
            { name: 'lisi', age: 16 }
        ]
    }
}
// 查询数据
Cat.find({ // findOne 返回符合条件的第一个对象 若没有条件则返回第一个
    name: 'sz' // 条件
}, function (err, ret) {
    if (err) {
        console.log(err)
    } else {
        console.log(ret)
    }
})

// 删除数据
Cat.remove({ name: sz }, function (err, ret) {
    if (err) {
        console.log("删除失败")
    } else {
        console.log("删除成功 ")
    }
})

Cat.findByIdAndUpdata('516848484646', {
    password: '123'
}, function (err, ret) {
    if (err) {
        console.log('failed')
    }
    else {
        console.log('成功')
    }
})




