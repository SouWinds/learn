---
prev: false
next: ./2
---
# Vue.js 是什么

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

## 使用Vue-cli创建Vue项目

首先，安装Vue-cli脚手架工具

```bash
npm install vue-cli -g
```
使用vue初始化基于webpack的新项目

```bash
vue init webpack my-project
```

项目创建过程中会提示是否安装`eslint`，可以选择不安装，否则项目编译过程中出现各种代码格式的问题；

```bash
? Project name app
? Project description A Vue.js project
? Author
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
```
项目创建完成后，安装基础模块

```bash
cd myproject
npm install
```

模块安装时间有可能会很长，依赖与网速；

安装完成之后可在开发模式下运行项目并预览项目效果

```bash
npm run dev
```

如果项目可以正常启动，即可继续安装vue的辅助工具

```bash
npm install vue-router --save （路由管理模块）
npm install vuex --save （状态管理模块）
npm install vue-resource --save （网路请求模块）
```

## 运行GitHub上的Vue项目

通过GitHub下载相应的Vue项目到本地，解压后进入到文件夹，通过cmd进入到相关目录后运行如下命令：

```bash
npm install
```

这样就会安装好项目的相关依赖。然后输入运行项目命令：

```bash
npm run dev
```

## 安装Vuejs常用模块

### 常用模块

| 模块名称 | 作用 | 地址 |
| ------------- |------------- |:-------------:|
| axios | Ajax请求定义 | [文档](https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)|
| vue-router | vuejs项目路由 | [文档](https://router.vuejs.org/zh/)|

### 模块的安装

安装模块可以很便捷的对项目进行功能的完善，快速的开发我们的项目。

我们以安装模块`axios`为例，首先我们打卡目录下的命令模式

```bash
npm i axios --save
```

在命令输入完成后下载结束后即可完成模块的相关安装，此时我们会在`package.json`文件中的`dependencies`中会多出我们刚刚安装好的模块名称，以及版本号。

如果需要指定版本号进行安装，则

```bash
npm i axios@版本号 --save
```

### 卸载模块

还是以`axios`为例子
```bash
npm uninstall axios
```

## 安装CNPM提高下载速度

使用定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

接下来，就可以使用`cnpm`来代替之前的`npm`进行命令的输入了。

## Vue.js项目编译dist静态文件

核心命令

```bash
npm run build
```

### 解决项目打包后显示为空白的问题

网上很多说自己的`VUE`项目通过`Webpack`打包生成的`list`文件，放到`HBulider`打包后，通过手机打开一片空白。这个主要原因是路径的问题。

1、记得改一下`config`下面的`index.js`中`bulid`模块导出的路径。因为`index.html`里边的内容都是通过`script`标签引入的，而你的路径不对，打开肯定是空白的。先看一下默认的路径。

```js
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
	assetsPublicPath默认的是  ‘/’  也就是根目录。而我们的index.html和static在同一级目录下面。  所以要改为  "./ "
```

2、另外还需要注意一点。`src`里边`router/index.js`路由配置里边默认模式是`hash`，如果你改成了`history`模式的话，打开也会是一片空白。所以改为`hash`或者直接把模式配置删除，让它默认的就行 。如果非要使用`history`模式的话，需要你在服务端加一个覆盖所有的情况的候选资源：如果URL匹配不到任何静态资源，则应该返回一个`index.html`,这个页面就是你`app`依赖页面。

```js
// mode: 'history'  // 默认hash
```

## 路由router-link

> `<router-link>` 组件支持用户在具有路由功能的应用中 (点击) 导航。 通过 `to` 属性指定目标地址，默认渲染成带有正确链接的`<a>` 标签，可以通过配置 `tag` 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 `CSS` 类名。

```html
<!-- 字符串 -->
<router-link to="home">Home</router-link>
<!-- 渲染结果 -->
<a href="home">Home</a>

<!-- 使用 v-bind 的 JS 表达式 -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
<router-link :to="'home'">Home</router-link>

<!-- 同上 -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 带查询参数，下面的结果为 /register?plan=private -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>

```