Javascript 基础

# Document

## 设置dom节点属性

```js
// 原生js
设置属性.setAttribute("属性","值")
获取属性.getAt

tribute("属性")
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

