var mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost.test', { useMongoClient: true })

var Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_time: {
        type: Date,
        // 注意这里不要写Date.now()
        default: Date.now,
    },
    last_modified: {
        type: Date,
        // 注意这里不要写Date.now()
        default: Date.now,
    },
    avatar: {
        type: String,
        default: '/public/img/avatar_default.png'
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        nuem: [-1, 0, 1],
        default: 1
    },
    birthday: {
        type: Date
    },
    status: {
        type: Number,
        //无限制 是否可以评论 是否可以是要送
        enum: [0, 1, 2],
        default: 0
    }
})

module.exports = mongoose.module('User', userSchema)