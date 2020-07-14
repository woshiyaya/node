// 使用一个模块，必须先加载一个模块
const fs = require('fs');

// 异步读取文件
// 读取文件，获取文件里面的内容
// fs.readFile('文件名',[编码],(err,data)=>{
//   // 如果读取成功err为null；如果读取失败，err为一个错误对象
//   // 如果读取成功data就是读取的结果
// });

fs.readFile('path.js','utf-8',(err,data)=>{
  //  if(err){
  //    console.log(err);
  //    return
  //  }else{
  //    console.log(data.toString())
  //  }
  if (err) throw err;
  console.log(data);
})


// 异步写入文件
// 特点：1.如果没有文件会自动创建文件
//      2.如果文件中有内容会覆盖掉文件中的内容
// fs.writeFile('文件名','写入内容',(err)=>{
//   if(err) throw err;
//   console.log('写入成功');
// })

fs.writeFile('text.txt','哈哈',(err)=>{
  if(err) throw err;
  console.log('写入成功')
})


// 判断文件会否存在
// fs.access('文件名',(err)=>{
//   // 如果有错误，说明文件不存在；否则，文件存在
// })

fs.access('text.txt',(err)=>{
  if (err){
    console.log('文件不存在');
  }else{
    console.log('文件存在');
  }
})