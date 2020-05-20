# nodejs

[[toc]]

## 一般方法创建Node.js项目

### 核心命令

```bash
npm init
```

通过这个命令可以创建出一个package.json文件，用于存储项目的基本配置。

### 执行命令后会出现

```bash
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

```bash
├─models/
├─public/
├─routes/
├─views/
├─index.js
└─package.json
```

使用NPM安装依赖：express模块

```bash
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
```bash
node index.js
```

全局安装nodemon使node项目在修改后自动重启
```bash
npm i nodemon -g
```
运行命令开启项目
```bash
nodemon index.js
```



## 使用express-generator创建项目

### 全局安装express-generator
```bash
npm install -g express-generator
```

### 使用express-generator来创建项目
```bash
express [project name]
```

我们会看到文件夹会被自动创建，基本目录结构为：

```bash
   create : educat\
   create : educat\public\
   create : educat\public\javascripts\
   create : educat\public\images\
   create : educat\public\stylesheets\
   create : educat\public\stylesheets\style.css
   create : educat\routes\
   create : educat\routes\index.js
   create : educat\routes\users.js
   create : educat\views\
   create : educat\views\error.jade
   create : educat\views\index.jade
   create : educat\views\layout.jade
   create : educat\app.js
   create : educat\package.json
   create : educat\bin\
   create : educat\bin\www
```

### 运行项目

我们先安装依赖
```bash
cnpm install
```

运行项目
```bash
npm run start
```