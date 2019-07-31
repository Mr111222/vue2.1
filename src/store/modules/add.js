/*
* @Author: 智
* @Date:   2018-05-17 08:47:17
* @Last Modified by:   智
* @Last Modified time: 2018-07-07 18:18:40
*/
const state = {
	num: 0,
	shop_list: [{
        id: 1,
        name: '回锅肉',
        price: 22,
      }, {
        id: 2,
        name: '宫爆鸡丁',
        price: 24
      }, {
        id: 3,
        name: '炝炒土豆丝',
        price: 15
      }, {
        id: 4,
        name: '米饭',
        price: 1.5
      }, {
        id: 5,
        name: '面条',
        price: 2.5
      }],
      //添加到购物车的商品
      add_shop:[]
}

const mutations = {
	ADD (state) {
		state.num ++
	},
	INS (state) {
		state.num --
	},
	To(state,{id,name,price}){
        let record = state.add_shop.find(n=>n.id == id);
        if(!record){
            state.add_shop.push({
                id,
                name,
                price,
                num:1
            })
        }else {
            record.num++
        }
  },

  //清空购物车
  Clear(state){
  	state.add_shop = [];
  },
  //del
  Del(state,{id}) {//这个id来自于当前点击事件传过来的那个参数  shop 写成{id}利用的事ES6解构
  	state.add_shop.forEach((n,index)=>{
  		if(n.id == id){
  			state.add_shop.splice(index,1)
  		}
  	})
  }
}

const actions = {
	add (context, payload){
		context.commit('ADD', payload)
	},
	ins (context, payload) {
		context.commit('INS', payload)
	},
 	addToCart(context, payload){
 		context.commit('To', {id:payload.id,name:payload.name,price:payload.price})
 	},

 	//清空购物车
 	clearAll(context,payload) {
 		context.commit('Clear', payload)
 	},
 	del(context,payload) {
 		context.commit('Del',payload)
 	}
}




const getters = {
	getAdd:state => state.num,
	shopList:state => state.shop_list,
	carBuys:state => state.add_shop,


	//getAllnum
	getAllnum:(state,getters) => {
		let total = 0;
		getters.carBuys.forEach(n=>{
			total += n.num
		})
		return total
	},
	//getAllprice
	getAllprice:(state,getters)=>{
		let Allprice=0;
		getters.carBuys.forEach(n=>{
			Allprice += n.num*n.price
		})
		return Allprice
	}
}

console.log(gettes, 'getters')
module.exports = {
  state,
  mutations,
  actions,
  getters
}