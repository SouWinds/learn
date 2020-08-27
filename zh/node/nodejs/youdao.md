
# 有道精品课链接分析，写入数据库


::: tip
功能：
有道精品课通过链接提取视频资料百度云
:::

## 业务逻辑

用户通过get方式表单提交有道精品课课程网址，例如：
```http
https://ke.youdao.com/course/detail/25810?inLoc=fp_pubCosPro_0&Pdt=CourseWeb
```
那么这个地址通过get方式获取到，在youdao.js文件中进行拆解
分别存储在如下两个变量中：
```js
id = 25810
url = https://ke.youdao.com/course/detail/25810?inLoc=fp_pubCosPro_0&Pdt=CourseWeb
```
然后后端接口实现从数据库获取相应ID数据，返回相关百度网盘分享网址给用户，从而实现业务功能

如果资料不存在，则跳转到该课程的资料发布页面，用户可在这个页面提交自己的对应分享信息
传入如下参数：
```http
yun = 链接: https://pan.baidu.com/s/1g4wPycrnfjgATNVWN-gz6A 提取码: i32x
```
后端通过请求来的数据获取到并存储在变量yun中，通过接口update即可执行相关数据上传操作
成功写入数据库，并返回相应的值给用户

## 接口测试

### 数据获取接口

```http
http://localhost:3000/youdao/get?url=https://ke.youdao.com/course/detail/25454?inLoc=vp_pro_tag410&Pdt=CourseWeb&keyfrom=course/recommend/24158
```

### 数据上传接口

```http
http://localhost:3000/youdao/update?url=https://ke.youdao.com/course/detail/25454?inLoc=vp_pro_tag410&Pdt=CourseWeb&keyfrom=course/recommend/24158&yun=%E9%93%BE%E6%8E%A5:%20https://pan.baidu.com/s/1cXQzqviGMFs4kk2yawtNog%20%E6%8F%90%E5%8F%96%E7%A0%81:%20c2z9
```

## 数据库设计

数据库连接信息在MySQL.js中，宝塔面板的默认账号密码都是admin
宝塔登录端口8888

数据库youdao，数据表course
| 键名          | 注释           |
| ------------- |:-------------:|
| id            | 主键，不可重复 |
| url           | 有道精品课URL存档 |
| temp          | 百度网盘分享网址有效状态 |

> 下一版本：开发功能用户发现网盘链接失效，然后可以对资源进行设置链接失效，并且用户还可以更新相关链接
