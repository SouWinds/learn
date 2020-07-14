Javascript 基础

# Document

## 设置dom节点属性

```js
// 原生js
设置属性.setAttribute("属性","值")
获取属性.getAttribute("属性")
// jquery
设置属性.attr("属性","值")
获取属性.attr("属性")
```

## 获取子元素

```js
document.getElementById('xxx').children
```

More……….

# Object

## js获取对象长度

### Object.keys()

[Object.keys](http://yanhaijing.com/javascript/2015/05/08/member-of-object/)是[es5](http://yanhaijing.com/es5/)中新增的方法，用来获取对象自身可枚举的属性键。

```javascript
console.log(Object.keys(child));
// > ["b"]
```

### Object.getOwnPropertyNames()

[Object.getOwnPropertyNames](http://yanhaijing.com/javascript/2015/05/08/member-of-object/)也是[es5](http://yanhaijing.com/es5/)中新增的方法，用来获取对象自身的全部属性名。

```js
console.log(Object.getOwnPropertyNames(child));
// > ["b", "c"]
```

# 定时器

## setinterval

### 常规做法

```js
let T = null
// 定义定时器
T = setInterval(() => {}, 1000)
// 在合适的地方清理定时器
clearInterVal(T)
```
这种做法可以覆盖绝大多场景，但是面对 `react hooks` 又有了特别的做法！

### react hooks 做法

```js
// 定义hooks 储存值
const [interValState, setInterValState] = useState(null)
// 定义定时器
setInterValState(setInterval(() => {}, 1000))
// 在合适的地方清理定时器
clearInterVal(interValState)
setInterValState(null)
```

这是当时面对实时改变视图的验证码倒计时时运用到的逻辑。