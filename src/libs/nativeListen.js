// 在pug模板调用
const  nativeListen = {
	addListen(type,cb,timeout){
		if(type && cb){
			window[type] = cb
			console.info('add listen ' + type + ' sucessed')
		}else{
			console.info('add listen ' + type + ' faild')
		}
	},
	removeListen (type,cb) {
		if(type) window[type] = undefined
		console.info('remove listen ' + type + ' sucessed')
	}
}


export default nativeListen