/*
* @Author: 智
* @Date:   2018-05-21 14:29:23
* @Last Modified by:   智
* @Last Modified time: 2018-07-12 10:48:05
*/
export const getMoney = value => {
  return '￥'+ value
}
export const dateServer = value => {
  return value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
}

export const dCurrency = value =>{
	return '￥'+value
}
export const dTofixed = value =>{
	var isNum = parseFloat(value);
	if( !isNum ){
	    alert("请输入数字")
	    return "请输入数字";
	} else {
	    var value = Math.round(isNum*100)/100;
	    var item = value.toString().split(".");
	    if(item.length == 1){
	        value = value.toString()+".00";
	        return value;
	    }
	    if(item.length > 1){
	        if(item[1].length < 2){
	            value = value.toString()+"0";
	        }
	        return value;
	    }
	}
}

// export {getMoney,dateServer,dCurrency,dTofixed}
