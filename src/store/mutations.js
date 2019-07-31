//通过点击事件来传递参数，在vuex中第一个参数一般为系统的参数(context,payload)等，第二个才是你点击传过来的参数(id,num,price)等

const state = {
	num: 100,
  xx: 'object',
	shop_list: [
    {
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
    } 
  ],
  //添加到购物车的商品
  add_shop:[],
  vals:'倒计时开始'
}

import * as type from './type.js'   //Es6解构
let timer;
const actions = {
  add (context, payload){
    context.commit(type.Add, payload)
  },
  ins (context, payload) {
    context.commit(type.Ins, payload)
  },
  addToCart(context, payload){ //context 是作为提交用的， payload是方法传递的那个参数值
    //console.log(payload) 该值为你所点击的那个对象
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
      context.commit(type.reduceCount)
    }, 1000)
  },
  stopCount () {
    if (timer) clearInterval(timer)
  },
  getPsp (context,payload) {
    console.log(payload)
  },
  // example watch
  modalValue (context,payload) {
    console.log(`内容是${payload}`)
  }
}

const mutations = {
  [type.Time](state,times) {
    state.vals = times
  },
  [type.reduceCount] (state) {
    if (state.vals > 0) {
         state.vals--
    }else{
      clearInterval(timer)
      state.vals = '倒计时结束'
    }
  },


  // add
	[type.Add] (state) {
		state.num ++
	},
	[type.Ins] (state) {
		state.num --
	},
	[type.To](state,{id,name,price}){
        let record = state.add_shop.find(n=>n.id == id); //判断当前商品是否存在，不存在push，存在num++
        if(!record){
            state.add_shop.push({
                id,
                name,
                price,
                num:1
            })
        }else {
            record.num++ //初始转态record为undefined  倘若添加了一次之后，将这个对象赋值给recoed
        }
  },

  //清空购物车
  [type.Clear](state){
  	state.add_shop = [];
  },
  //del
  [type.Del](state,{id,num}) {//这个id来自于当前点击事件传过来的那个参数  shop 写成{id}利用的事ES6解构
  	state.add_shop.forEach((n,index)=>{
  		if(n.id == id){
  			state.add_shop.splice(index,1)
  		}
  	})
  },
  //vueFn 实际用法
  getNum(state, num){
    state.xx = num
  },
  adds (state) {
    state.num++
  }
}


const getters = {
	getAdd:state => state.num,
	shopList:state => state.shop_list,
	carBuys:state => state.add_shop,
	valsss:state => state.vals,

	//getAllnum
	getAllnum:(state,getters) => {// getters参数为商品的总数量
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

export default {
  actions,
	mutations,
	state,
	getters,
}