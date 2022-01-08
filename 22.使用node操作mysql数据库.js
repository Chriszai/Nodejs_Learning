// npm i mysql
const { error } = require('console');
var mysql = require('mysql')

// 连接 数据库
var connection = mysql.createConnection({
    hose: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
})

// 2.连接数据库
connection.connect();

//执行数据操作 把大象放进冰箱
connection.query('SELECT * FROM `users'/* sql语句 */, function (err, results, fields) {
    if (err) throw error;
    console.log("The solution is:", results)
})

connection.end();

//////////////////////////////////////////////////////////////
var fs = require('fs')

fs.readFile('./data/c.txt', 'utf8', function (err, data) {
    if (err) {
        throw error
    }
    console.log(data)
})

//无法决定异步代码执行顺序 通过回调嵌套的方式