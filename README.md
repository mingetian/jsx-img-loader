### 为什么使用loader
- 省去了react中jsx语法 需要require和import图片的繁琐
- imgSource 可以缩短你代码中使用时候的url长度
- loader会自动帮你把图片require到项目中。@是必须要添加的前缀 
### 安装loader
npm install jsx-img-loader --save-dev

或者

yarn add jsx-img-loader --save-dev

### webpack中配置示例
```
{
	test: /\.js$/,
	use: ['babel-loader',{
		loader: 'jsx-img-loader',
		options:{
			imgSource: './static/img'
		}
	}],
	exclude: /node_modules/,
	include: path.resolve(__dirname,'src')
},
```
### 代码中使用1
```
<img src="@1.png" alt="图片"/>
```
### 代码中使用2
```
const imgUrl = "@1.png"

...

<img src={imgUrl} alt="图片"/>
```

### 配置参数
imgSource 指定资源路径可以相对路径和绝对路径 以便于代码中简洁书写