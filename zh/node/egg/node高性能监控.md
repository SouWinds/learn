- 监控[node性能平台]

安装runtime

```
npm i nodeinstall -g
nodeinstall --install-alinode ^3
```

安装依赖及配置

```
npm i egg-alinode --save
```

开启插件

```
// config/plugin.js
exports.alinode = {
  enable: true,
  package: 'egg-alinode',
};
复制代码
```

配置

```
// config/config.default.js
exports.alinode = {
  // 从 `Node.js 性能平台` 获取对应的接入参数
  appid: '<YOUR_APPID>',
  secret: '<YOUR_SECRET>',
};
复制代码
```

开启应用

```
npm start
```



暂未测试