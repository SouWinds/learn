# nodejs项目创建

[TOC]

## 核心命令

```
npm init
```

通过这个命令可以创建出一个package.json文件，用于存储项目的基本配置。

### 执行命令后会出现

```
D:\web\node\okadaGo>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (okadaGo)
Sorry, name can no longer contain capital letters.
name: (okadaGo) okada_go
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to D:\web\node\okadaGo\package.json:

{
  "name": "okada_go",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes)

D:\web\node\okadaGo>
```

---

## 创建基本文件

```
├─models/
├─public/
├─routes/
├─views/
├─index.js
└─package.json
```

使用NPM安装依赖：express模块

```
npm install express --save
```

创建好index.js文件之后，输入以下内容

```js
var express = require('express');
var app = express();

app.get('/', function(res, rep) {
    rep.send('Hello, word!');
});

app.listen(3000);
```
然后到控制台输入命令运行项目
```
node index.js
```

全局安装nodemon使node项目在修改后自动重启
```
npm i nodemon -g
```
运行命令开启项目
```
nodemon index.js
```