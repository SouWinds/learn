# 景院裹裹

::: tip
功能：
在线快递代取小程序
:::

## 首页接口

::: tip
模块名称：index
:::

### 首页成交量获取接口

> 维护人员：平昔
> 创建时间：2019-10-27

#### 接口简介

首页渲染自动获取平台总成交量

#### 请求地址

/JYguoguo/api/OrderCount

#### 请求类型

Get

#### 请求参数

-

#### 返回正确JSON示例

```json
{
    "OrderNum": 1
}
```

#### 返回错误JSON示例

-

#### 备注说明

无
#### 修改日志

无

---


## 用户接口

::: tip
模块名称：user
:::

### 用户登录接口

> 维护人员：平昔
>
> 创建时间：2019-10-27

#### 接口简介

用户访问小程序自动请求后端登录接口，获取登录有效凭证Token

#### 请求地址

/JYguoguo/api/user/login

#### 请求类型

POST

#### 请求参数

|参数名	|类型	|必填	|描述	|默认值	|参考值|
| ------------- |:-------------:|:-------------:| ------------- |:-------------:|:-------------:|
| code | varchar | 是 | 微信的用户临时code，用于获取openid。 | - | 033K1K8l1D8xkn0luQ6l1vfL8l1K1K83 |

#### 返回正确JSON示例

```json
{
  id: "5daaf90a2caf941fa0b4a73a"
  openid: "oHWcK49u5Dqi27E5_JLgpZCcF_1I"
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVuaWQiOiJvSFdjSzQ5dTVEcWkyN0U1X0pMZ3BaQ2NGXzFJIiwiaWF0IjoxNTcyMTk1MzY2LCJleHAiOjE1NzIyMDI1NjZ9.U2lQ6-Jfd03BAzUbmNGdq3LimdIulwA6Gayu-hudr4A"
}
```
#### 返回错误JSON示例

```json
{
	"status": 401,
	"error": "认证码失效，请重新登录!"
}
```

#### 备注说明

无
#### 修改日志

无



---









### 用户个人资料提交接口

> 维护人员：平昔
>
> 创建时间：2019-10-28

#### 接口简介

用户更新个人资料信息

#### 请求地址

/JYguoguo/api/user/userinfo

#### 请求类型

GET/PUT

#### 请求参数

|参数名	|类型	|必填	|描述	|默认值	|参考值|
| ------------- |:-------------:|:-------------:| ------------- |:-------------:|:-------------:|
| phone | String | 否 | 用户手机号 | - | 18811512111 |
| learncode | String | 否 | 用户学号 | - | 170201010101 |
| weixin | String | 否 | 用户微信号 | - | px202020 |
| qq | String | 否 | 用户QQ号 | - | 1419673726 |
| address | String | 否 | 用户宿舍号 | - | 西2A303 |
| birthday | String | 否 | 用户生日 | - | 1998-06-10 |
| grade | String | 否 | 用户入学年份 | - | 2017 |
| tie | String | 否 | 用户系别 | - | 信息工程学院 |
| class | String | 否 | 用户班级 | - | 17计算机网络技术 |
| signature | String | 否 | 用户个性签名 | - | 快点科技真的还行 |

```json
{
  userid:5db5dca7ee3eb15ff02c225d,
  data:{
	  phone:18879013921,
	  learncode:170201040119,
	  weixin:,
	  qq:,
	  address:,
	  birthday:,
	  grade:,
	  tie:,
	  class:,
	  signature:,
  }
}
```

#### 返回正确JSON示例

```json
{
  -
}
```
#### 返回错误JSON示例

```json
{
	"success": false
}
```

#### 备注说明

无
#### 修改日志

无



---




广告接口（GET）：http://119.29.163.198:30002/JYguoguo/api/advertise
系统信息接口（GET）：http://119.29.163.198:30002/JYguoguo/api/system
快递公司列表接口（GET）：http://119.29.163.198:30002/JYguoguo/api/postinc
平台成交总数接口（GET）：http://119.29.163.198:30002/JYguoguo/api/OrderCount

POST需要传递参数
参数结构：
userid：
data：{
	数据字段在这里
}
用户信息更新接口（PUT）：http://119.29.163.198:30002/JYguoguo/api/user/userinfo
//用户基本信息
        phone: { type: String },        //用户手机号
        learncode: { type: String },    //用户学号
        weixin: { type: String },       //用户微信号
        qq: { type: String },           //用户QQ号
        address: { type: String },      //用户宿舍号
        birthday: { type: String },     //用户生日
        grade: { type: String },        //用户入学年份
        tie: { type: String },          //用户系别
        class: { type: String },        //用户班级
        signature: { type: String },    //用户个性签名
        guoguo: { type: Number },        //用户裹裹积分
用户信息获取接口（GET）：http://119.29.163.198:30002/JYguoguo/api/user/userinfo/:id
id为用户的userid
