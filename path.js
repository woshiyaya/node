// 要想调用模块的方法，必须先要加载模块
const path = require("path")
// console.log(path)

// path的方法使用：获取url文件的后缀
console.log(path.extname('1.2.3.4.png'))

// path的方法使用：拼接路径
console.log(path.join('a','b','c'))