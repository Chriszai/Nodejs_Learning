// require 是一个方法
// 他的作用就是用来加载模块
// 在node中 模块有三种 具名的核心模块，例如fs， http
// 用户自己编写的文件模块
// 相对路径必须加./ 当遇到require后会加载并执行其中的代码
// 在node中 没有全局作用域，只有模块作用域 外部访问不到内部 内部也访问不到外部

require('01-写文件.js')
require('01-写文件')//两者相等

var foo = "abc";
// 在每个文件模块中都提供了一个对象，exports
// 你要做的就是把需要外部访问的资源挂载到exports中
exports.foo = foo;

