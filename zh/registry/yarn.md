# yarn

个人比较推荐使用yarn来管理包，安装依赖的过程就一个字“爽”！但是爽的背后就是yarn本身所含有的重度依赖缓存，好多时候也会带来一些困扰。

1.**临时修改**

```bash
yarn save 软件名 --registry https://registry.npm.taobao.org/
```

2.**全局修改**

```bash
yarn config set registry https://registry.npm.taobao.org/
```

3.**使用第三方软件快速修改**、**切换 yarn 镜像源**

```bash
yrm YARN registry manager
yrm 不仅可以快速切换镜像源，还可以测试自己网络访问不同源的速度

安装 yrm
npm install -g yrm
列出当前可用的所有镜像源
yrm ls

npm -----  https://registry.npmjs.org/
cnpm ----  http://r.cnpmjs.org/
taobao --  https://registry.npm.taobao.org/
nj ------  https://registry.nodejitsu.com/
rednpm -- http://registry.mirror.cqupt.edu.cn
skimdb -- https://skimdb.npmjs.com/registry
yarn ----  https://registry.yarnpkg.com

使用淘宝镜像源
yrm use taobao
测试访问速度
yrm test taobao
```

