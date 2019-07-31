import get from 'lodash/get'
import Message from './message.vue'
import creatBox from './message.js'
let tipsIntance

function showMessage (msg = {}){
	tipsIntance.showMessage(msg)
}

Message.install = function (Vue, options = {}){
	Vue.component(options.name || Message.name, Message)
	if(options.global !== false){
		const template = get(options, 'template.default')
		if(template){
			tipsIntance = creatBox(Vue, template)
		}else{
			tipsIntance = creatBox(Vue, Message)
		}
		Vue.prototype.$toast = showMessage
	}
}
export default Message
