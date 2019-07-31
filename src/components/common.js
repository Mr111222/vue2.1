/*
* @Author: 智
* @Date:   2018-07-03 09:13:38
* @Last Modified by:   智
* @Last Modified time: 2018-07-12 17:03:57
*/

const fn = {
	getName : function(name){
		this.name = name;
		console.log(name,123)
	}
} 

fn.prototype = {
	getYear:function(year){
		console.log(`我叫${this.name},今年${year}岁`)
	}
}


var obj = {
	ge1:function (x){
		alert(x)
	},
	get2:function (x){
		alert(`我是${x}`)
	}
}


var get1 = function (x){
	alert(x)
}

var get2  = function (x) {
	alert(`我是${x}`)
}

export default fn //只能导出一个 
// export {get1,get2} //可以import  {}  from ''  来获取每一项


// export const s1 = '小明1';
// export const s2 = '小明2';
// export const s3 = '小明3';
// export const s4 = '小明4';
// export const s5 = '小明5';
// export const s6 = '小明6';  //这样可以这样获取   import   *   as   names   from ''   names为所有对象的合集