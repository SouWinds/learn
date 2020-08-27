# fewFill

当数据不够的情况，自行填充特殊数据格式的数据

```js
/**
   * 数组数量不够则填充
   */
  fewNumToFull(array = [], num = 4, fills){
	  const fillLength = num - array.length
	  if(fillLength > 0) new Array(fillLength).fill(fills || null).forEach(item => array.push(item))
	  return array
  }
```

```js
fewNumToFull([1,5,9,3], 5, 10)
// return [1,5,9,3,10]
```

