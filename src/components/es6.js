export const name = 'z1'
export const sex = '男'
export const className = '二年级'
export const age = '20'

// import * as type from './funs'  ===> type.name===>z1

import axios from 'axios'
const fn1 = function (x) {
    console.log(x)
}
const fn2 = function () {
  console.log('fn2')
}
const queryFn = function (dataBody){
	axios.post('./app',{data:dataBody}).then(res=>{
		console.log(res)
	})
}
export {
  fn1,
  fn2,
  queryFn
}
// import {fn1, fn2} from './fns'  =====> fn1('ppps')
// ====== //



