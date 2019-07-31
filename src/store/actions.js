import * as type from './type.js'   //Es6解构
let timer;
const actions = {
	add (context, payload){
		context.commit(type.Add, payload)
	},
	ins (context, payload) {
		context.commit(type.Ins, payload)
	},
 	addToCart(context, payload){
 		context.commit(type.To, {id:payload.id,name:payload.name,price:payload.price})
 	},

 	//清空购物车
 	clearAll(context,payload) {
 		context.commit(type.Clear, payload)
 	},
 	del(context,payload) {
 		context.commit(type.Del,payload)
 	},
 	beginTime(context,times){
 		if(timer) clearInterval(timer)

 		if(times) context.commit(type.Time,times)
 		timer = setInterval(() => {
      context.commit('reduceCount')
    }, 1000)
 	},
 	stopCount () {
    if (timer) clearInterval(timer)
  },
}


export default actions

