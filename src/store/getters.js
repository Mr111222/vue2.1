/*
* @Author: 智
* @Date:   2018-07-06 13:50:59
* @Last Modified by:   智
* @Last Modified time: 2018-07-06 14:15:34
*/


const getters = {
	getAdd:state => state.num,
	shopList:state => state.shop_list,
	carBuys:state => state.add_shop,
	valsss:state => state.vals,

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

export default getters