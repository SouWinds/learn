(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{368:function(s,t,a){"use strict";a.r(t);var n=a(43),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-js-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-是什么"}},[s._v("#")]),s._v(" Vue.js 是什么")]),s._v(" "),a("p",[s._v("Vue (读音 /vjuː/，类似于 "),a("strong",[s._v("view")]),s._v(") 是一套用于构建用户界面的"),a("strong",[s._v("渐进式框架")]),s._v("。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种"),a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#libraries--plugins",target:"_blank",rel:"noopener noreferrer"}},[s._v("支持类库"),a("OutboundLink")],1),s._v("结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。")]),s._v(" "),a("h2",{attrs:{id:"使用vue-cli创建vue项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vue-cli创建vue项目"}},[s._v("#")]),s._v(" 使用Vue-cli创建Vue项目")]),s._v(" "),a("p",[s._v("首先，安装Vue-cli脚手架工具")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vue-cli -g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用vue初始化基于webpack的新项目")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vue init webpack my-project\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("项目创建过程中会提示是否安装"),a("code",[s._v("eslint")]),s._v("，可以选择不安装，否则项目编译过程中出现各种代码格式的问题；")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("? Project name app\n? Project description A Vue.js project\n? Author\n? Vue build standalone\n? Install vue-router? Yes\n? Use ESLint to lint your code? No\n? Set up unit tests No\n? Setup e2e tests with Nightwatch? No\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("项目创建完成后，安装基础模块")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" myproject\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("模块安装时间有可能会很长，依赖与网速；")]),s._v(" "),a("p",[s._v("安装完成之后可在开发模式下运行项目并预览项目效果")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果项目可以正常启动，即可继续安装vue的辅助工具")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vue-router --save （路由管理模块）\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vuex --save （状态管理模块）\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vue-resource --save （网路请求模块）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"运行github上的vue项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行github上的vue项目"}},[s._v("#")]),s._v(" 运行GitHub上的Vue项目")]),s._v(" "),a("p",[s._v("通过GitHub下载相应的Vue项目到本地，解压后进入到文件夹，通过cmd进入到相关目录后运行如下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样就会安装好项目的相关依赖。然后输入运行项目命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安装vuejs常用模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装vuejs常用模块"}},[s._v("#")]),s._v(" 安装Vuejs常用模块")]),s._v(" "),a("h3",{attrs:{id:"常用模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用模块"}},[s._v("#")]),s._v(" 常用模块")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("模块名称")]),s._v(" "),a("th",[s._v("作用")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("地址")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("axios")]),s._v(" "),a("td",[s._v("Ajax请求定义")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1)])]),s._v(" "),a("tr",[a("td",[s._v("vue-router")]),s._v(" "),a("td",[s._v("vuejs项目路由")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1)])])])]),s._v(" "),a("h3",{attrs:{id:"模块的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块的安装"}},[s._v("#")]),s._v(" 模块的安装")]),s._v(" "),a("p",[s._v("安装模块可以很便捷的对项目进行功能的完善，快速的开发我们的项目。")]),s._v(" "),a("p",[s._v("我们以安装模块"),a("code",[s._v("axios")]),s._v("为例，首先我们打卡目录下的命令模式")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i axios --save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在命令输入完成后下载结束后即可完成模块的相关安装，此时我们会在"),a("code",[s._v("package.json")]),s._v("文件中的"),a("code",[s._v("dependencies")]),s._v("中会多出我们刚刚安装好的模块名称，以及版本号。")]),s._v(" "),a("p",[s._v("如果需要指定版本号进行安装，则")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i axios@版本号 --save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"卸载模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载模块"}},[s._v("#")]),s._v(" 卸载模块")]),s._v(" "),a("p",[s._v("还是以"),a("code",[s._v("axios")]),s._v("为例子")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall axios\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安装cnpm提高下载速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装cnpm提高下载速度"}},[s._v("#")]),s._v(" 安装CNPM提高下载速度")]),s._v(" "),a("p",[s._v("使用定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cnpm --registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接下来，就可以使用"),a("code",[s._v("cnpm")]),s._v("来代替之前的"),a("code",[s._v("npm")]),s._v("进行命令的输入了。")]),s._v(" "),a("h2",{attrs:{id:"vue-js项目编译dist静态文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js项目编译dist静态文件"}},[s._v("#")]),s._v(" Vue.js项目编译dist静态文件")]),s._v(" "),a("p",[s._v("核心命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"解决项目打包后显示为空白的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决项目打包后显示为空白的问题"}},[s._v("#")]),s._v(" 解决项目打包后显示为空白的问题")]),s._v(" "),a("p",[s._v("网上很多说自己的"),a("code",[s._v("VUE")]),s._v("项目通过"),a("code",[s._v("Webpack")]),s._v("打包生成的"),a("code",[s._v("list")]),s._v("文件，放到"),a("code",[s._v("HBulider")]),s._v("打包后，通过手机打开一片空白。这个主要原因是路径的问题。")]),s._v(" "),a("p",[s._v("1、记得改一下"),a("code",[s._v("config")]),s._v("下面的"),a("code",[s._v("index.js")]),s._v("中"),a("code",[s._v("bulid")]),s._v("模块导出的路径。因为"),a("code",[s._v("index.html")]),s._v("里边的内容都是通过"),a("code",[s._v("script")]),s._v("标签引入的，而你的路径不对，打开肯定是空白的。先看一下默认的路径。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  build"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    env"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./prod.env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    index"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../dist/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    assetsRoot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    assetsSubDirectory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'static'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    assetsPublicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    productionSourceMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tassetsPublicPath默认的是  ‘"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("’  也就是根目录。而我们的index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html和"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v("在同一级目录下面。  所以要改为  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./ "')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("2、另外还需要注意一点。"),a("code",[s._v("src")]),s._v("里边"),a("code",[s._v("router/index.js")]),s._v("路由配置里边默认模式是"),a("code",[s._v("hash")]),s._v("，如果你改成了"),a("code",[s._v("history")]),s._v("模式的话，打开也会是一片空白。所以改为"),a("code",[s._v("hash")]),s._v("或者直接把模式配置删除，让它默认的就行 。如果非要使用"),a("code",[s._v("history")]),s._v("模式的话，需要你在服务端加一个覆盖所有的情况的候选资源：如果URL匹配不到任何静态资源，则应该返回一个"),a("code",[s._v("index.html")]),s._v(",这个页面就是你"),a("code",[s._v("app")]),s._v("依赖页面。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// mode: 'history'  // 默认hash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"路由router-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由router-link"}},[s._v("#")]),s._v(" 路由router-link")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("<router-link>")]),s._v(" 组件支持用户在具有路由功能的应用中 (点击) 导航。 通过 "),a("code",[s._v("to")]),s._v(" 属性指定目标地址，默认渲染成带有正确链接的"),a("code",[s._v("<a>")]),s._v(" 标签，可以通过配置 "),a("code",[s._v("tag")]),s._v(" 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 "),a("code",[s._v("CSS")]),s._v(" 类名。")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 字符串 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Home"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 渲染结果 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Home"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 使用 v-bind 的 JS 表达式 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("v-bind:")]),s._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("home'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Home"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 不写 v-bind 也可以，就像绑定别的属性一样 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("home'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Home"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 同上 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("{ path: 'home' }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Home"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 命名的路由 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("{ name: 'user', params: { userId: 123 }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("User"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 带查询参数，下面的结果为 /register?plan=private --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("{ path: 'register', query: { plan: 'private' }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Register"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);