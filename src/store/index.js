/*
* @Author: 智
* @Date:   2018-05-17 08:46:24
* @Last Modified by:   智
* @Last Modified time: 2018-07-06 14:46:42
*/
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
	//actions, 我在这里注销的原因是添加了一个定时器，如果多文件的话，无法访问，所以把文件全部写到mutations里面
	modules:{ //mutations是模块，所以用modules对象包起来
		mutations
	}
	
})
