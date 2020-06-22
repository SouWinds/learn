# oner-io

记录自己使用oner-io容易忘记的点

## fit(response){}

可以对io请求到的数据做处理，免入侵代码，顶层处理数据！

```js
getFilterSelect: {
    mock: isMock,
    mockUrl: 'public/getFilterSelect',
    url: 'getFilterSelect',
		fit: response => {
      return {
		  success: response.success || response.code === 'OK',
		  content: {
			  content: {
				  list: response.content.content.list.filter(d => d.areaId && d.cityId && d.provinceId && d.villageId),
			  }
		  },
		  error: {
			message: response.message,
			code: response.code,
		  },
		}
    },
  },
```

