//引入express模块
var express = require('express');
// 创建对象app
var app = express();

// 对象app通过get方式访问目录“/”，执行函数
app.get('/', function(res, rep) {
    rep.send('Hello, word!');
});

// app监听端口3000
app.listen(3000);