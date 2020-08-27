# Swiper

## source code

```js
/**
   * 设置轮播
   */
  scrollFamilyBox(v, num = 4, time = 1, key = 'souWindScroll'){
  	  try {
		// 先拿到容器
		const dom = document.getElementById(v)
		dom.setAttribute('style', `transition:transform ${time}s ease 0s, opacity ${time}s ease 0s`)
		const childArray = document.getElementById(v).children
		console.log('childArray' + childArray)
		// 自容器单行高度
		const height = childArray[0].offsetHeight + 10
		// 得到子容器数量
  	    const length = childArray.length
		// 获取自定义属性值
		const attr = () => dom.getAttribute(key)
		const setAttr = value => dom.setAttribute(key, value)
		// 设置dom节点的css style
		const setTrans = value => dom.style.transform = `translate(0px, -${value}px)`
		// 判断souWindScroll属性是否存在，不存在则添加并设置初始值
		!attr() && setAttr(0)
  	    // 判断数据是否变化
  	    if (attr() != length) {
  	    // 节点数大于 num 开始轮播
  	      if(length > num) {
			window.clearInterval(interVal)
  	        const toMove = () => {
			  const _attr = attr() + 1
  	          (_attr + num < length) ? (setTrans(height * _attr) && setAttr(_attr)) : (setTrans(0) && setAttr(0))
  	        }
  	        const interVal = setInterval(toMove, 3000)
  	      }
  	    }
  	  } catch(e) {
  	    console.log('error', e)
  	  }
  }
  
```

## How to use

```js
scrollFamilyBox('familyScrollBox', 4, 2, 'hahahha')
```

