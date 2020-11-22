'use strict';
// import config from './config.js'
/*
 * 配置编译环境和线上环境之间的切换
 * BASE_URL: 域名地址
 */
console.log('NOW_ENV', process.env.NODE_ENV)
let BASE_URL = '' 


if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://dev' // 开发
} else if (process.env.NODE_ENV === 'testing') {
  BASE_URL = 'http://test' // 测试
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://production' // 环境
} else if (process.env.NODE_ENV === 'uat') {
  BASE_URL = 'http://uat' // 仿真环境
}

//导出
export default BASE_URL
 