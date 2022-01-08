/* 关系型数据库需要通过sql语言来操作
所有关系型数据库在操作之前都需要设计表结构

非关系型数据库就是key-value对
不需要设计表结构 可以存任何数据

启动mongod数据库方式：
mongod
mongodb默认使用执行mongod的磁盘进行存储 在该目录下/data/db 作为自己的数据
存储目录
所以新建一个/data/db

如果想要修改存储  路径
mongod --dbpath=数据存储目录数据

连接数据库方式：
mongo（该命令默认连接本机mongodb服务）
取消链接 输入 exit

基本命令：
show dbs 查看当前数据库列表
use 数据库名称 切换到指定数据库（如果没有会新建）
db 查看当前操作的数据库
db.students.inserOne({"name":"jack"}) 插入数据
show collections 查询集合 比如：students
*/