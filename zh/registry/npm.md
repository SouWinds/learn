# npm

在`node`中会内置`npm`相关的包，但是默认镜像是国外的，速度不好，所有一般情况我们会切换成国内的镜像或者使用`cnpm`、`yarn`

### 设置镜像

1.**临时使用**(局部配置)

```bash
npm --registry https://registry.npm.taobao.org install express
1
```

2.**持久使用**(全局配置)

```bash
npm config set registry https://registry.npm.taobao.org
1
```

- 配置后可通过下面方式来验证是否成功`npm config get registry`
- 或`npm info express`

 4.**恢复使用**

```bash
npm config set registry https://registry.npmjs.org
```

### 国内优秀的镜像

**淘宝npm镜像**

 搜索地址：http://npm.taobao.org/

 registry地址：http://registry.npm.taobao.org/

**cnpmjs镜像**

 搜索地址：http://cnpmjs.org/

 registry地址：http://r.cnpmjs.org/

