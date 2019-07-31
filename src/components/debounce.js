/*
* throttleFn-->节流函数概念就是限制函数调用的次数
* debounceFn-->去抖函数多次执行该函数并不是每次都执行，只执行最后一次就可以了
* 
*/

// const btn = document.getElementById('btn')

// btn.onclick = function(){
// 	debounceFn(callBack('inps'),2500)
// }

// function callBack (ids) {
// 	let val = document.getElementById(ids)
// 	console.log(val.innerHTML)
// }

function debounceFn(fn, delay){
	var timer
	return function (){
		var _this = this
		var _arg = arguments
		clearTimeout(timer)
		timer = setTimeout(function(){
			fn.apply(_this, _arg)
		},delay)
	}
}






function throttleFn (methods,delay){
	let timer
	let _methods = methods
	return function (){
		let _this = this
		let _args = arguments
		clearTimeout(timer)
		timer = setTimeout(function(){
			_methods.apply(_this,_args)
		},delay)
	}
}

// window.onscroll = throttleFn(onScroll, 50)
/*
 *
 *
 */
				// let objs = {}
				// Object.defineProperty('vals', objs, {
				// 	get(){
				// 		return objs
				// 	},
				// 	set(newVal){
				// 		ps.innerHTML = newVal
				// 		inps.value = newVal
				// 	}
				// })

				// inps.addEventListener('keyup',function(e){
				// 	obj.vals = e.target.value
				// })

/* 
 * deepClone
 */

function deepClone (objs){
	var res = isArray(objs) ? [] : {}
	for(i in objs){
		if(typeof (objs[i]) != 'object'){
			res[i] = objs[i]
		}else{
			res = deepClone(objs[i])
		}
	}
	return res
}

export {
	debounceFn,
	throttleFn,
	deepClone
}
