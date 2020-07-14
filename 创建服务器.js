// 1.加载http模块
const http = require('http');
const fs = require('fs');
// 2.创建服务对象
const server = http.createServer();
// 3.监听端口，开启服务
server.listen('3000',()=>{
  console.log('服务开启啦')
})
// 4.处理浏览器的请求
// 4.1但是不作出响应
// server.on('request',()=>{
//   console.log('接收到了浏览器的请求,但是不作出响应');
// })

// 4.2做出响应
// server.on('request',(req,res)=>{
  // req和res都是对象
  // req和请求有关的
  // res和响应有关的

  // 如何做出响应：
  // 做出响应的方法
  // res.setHeader('content-type','text/html; charset=utf-8')
  // 响应状态码
  // res.statusCode = 404
  // 合并setHeader和statusCode
//   res.writeHead(200,{
//     'content-type':'text/html;charset=utf-8'
//   })
//   // 设置响应体
//   res.write('哈哈哈')
//   res.end("hello，我是服务器");
// })



// 针对请求的url做出响应
// 当浏览器发来请求时，不应该立即做出响应；应该先判断浏览器请求的是什么？
// req.url:请求的url
// req.method：请求方式
server.on('request',(req,res)=>{
  if(req.method==='GET'&& req.url==='/text.txt'){
    fs.readFile('./text.txt','utf-8',(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  }
})