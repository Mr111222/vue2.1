import extend from 'lodash/extend'
import isString from 'lodash/isString'
import isObject from 'lodash/isObject'

function creatBox(Vue, template){
	const divs = document.createElement('div')
	divs.innerHTML = `<message-box  :message="message" v-if="showTips" />` 
	document.body.appendChild(divs)

	const tips = new Vue({
		el:divs,
		components:{
			messageBox: template
		},
		data: {
	      showTips: false,
	      message: {}
	    }
	})

	return {
		showMessage (msg) {
			if (isString(msg)) {
				tips.showTips = true
				tips.message = extend({}, {msg})
			} else if (isObject(msg)) {
				tips.showTips = true
				tips.message = extend({}, msg)
			} else {
				console.error('message配置错误，请检查配置', msg)
			}
		}
	}


}


export default creatBox
