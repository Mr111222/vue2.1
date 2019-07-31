import axios from 'axios'
import $ from 'jquery'

function getZero(val){
	return val<10 ? '0'+val : ''+val 
}


function getMoney(val){
	return '$'+val
}

function RandomFn (min,max){
	return Math.floor(Math.random()*(max-min+1)+min)
}

const cityList = [
  {
    value: "beijing",
    label: "北京市"
  },
  {
    value: "shanghai",
    label: "上海市"
  },
  {
    value: "shenzhen",
    label: "深圳市"
  },
  {
    value: "hangzhou",
    label: "杭州市"
  },
  {
    value: "nanjing",
    label: "南京市"
  },
  {
    value: "chongqing",
    label: "重庆市"
  },
  
]

function setVal(obj,key){ 
	if(obj){
		obj.forEach(res=>{
			res[key] = RandomFn(1,100)
		})
	}
	return obj
}


function camelcaseToHyphen (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}


console.log(camelcaseToHyphen('border1234color'))


class A {
	constructor(...arg){
		this.names = 'pps';
		this.age = 20;
	}
}

class B extends A {
	constructor(...arg){
		super(...arg);
	}
}

var pp1 = new B()



// console.log(pp1.constructor.__proto__ == A)
// console.log(B.prototype.__proto__ == A.prototype)
/*
 	pp1.constructor == B
	B.__proto__ == A
 	pp1.constructor.__proto__ == A
	B.prototype.__proto__ == A.prototype
 */


// promise 示例
let testPromise =  new Promise((resolve, reject)=>{
	$.ajax({
		url: './api/login',
		success:function(res){
			if(res.data){
				setTimeout(()=>{
					resolve(res.data)
				},3000)
			}
		}
	})
})

testPromise.then(res=>{
	// console.log(res, 11111)
})
.catch(e=>{ // catch 在最后捕捉错误
	console.log(e)
})



// promise all方法 返回ajax数据
let p1 =  new Promise((resolve, reject)=>{
	$.ajax({
		url: './api/goods',
		success:function(res){
			if(res.data){
				setTimeout(()=>{
					resolve(res.data)
				},3000)
			}
		}
	})
})


let p2 =  new Promise((resolve, reject)=>{
	$.ajax({
		url: './api/login',
		success:function(res){
			if(res.data){
				setTimeout(()=>{
					resolve(res.data)
				},3000)
			}
		}
	})
})

Promise.all([p1, p2]).then(res=>{
	console.log(res)
}).catch(e=>{
	console.log(1)
})























/*
	模拟依赖注入
 */
var arr = {a:12, b:5, c:7, d:99,f:100}

function applyFn (c,f,d) {
	// console.log(arguments, 222)
}


var str = applyFn.toString().split('{')[0].split('(')[1].replace(/\s/g, '')
var newStr = str.substring(0,str.length-1).split(",")

for(var i=0;i<newStr.length; i++){
	newStr[i] = arr[newStr[i]]
}

applyFn.apply(null, newStr)

/*
	end
 */










export {
	getZero,
	getMoney,
	setVal
}