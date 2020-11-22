# 使用全局变量
## package.json
  添加  "build--test":"node build/build-test.js"

## build 文件夹内创建文件 build-test.js,  
1.名称自定义，但是要与你package.json里面执行文件名称一致
2.文件内容与build.js大体一致，但是引入的webpackConfig文件路劲需要改变
	const webpackConfig = require('./webpack.test.conf')
3.在创建一个webpack.test.conf.js文件,名称自定义，上下文对应上即,内容与webpack.prod.conf.js内容基本一致，但是在
const env = require('../config/prod.env')	 这里需要指向你的test所对应的env文件

## config 文件夹内创建文件 test.env.js
1.内容为你所需要的的全局变量，比如我的
	'use strict'
	module.exports = {
	  NODE_ENV: '"testing"',
	  ENV_CONFIG: '"test"',
	  baseUrl: '/api/test'
	} 

## build 构建执行命令  npm run build--test,  此时就可以在.vue文件中获取到变量进行使用
computed: {
  version () {
    console.log(process.env)
    return process.env.baseUrl
  }
}