import nativeListen from './nativeListen.js'
import {listeNum,BridgeNum,errCode} from './listen.js'
import bridegMix from '../mix/mix.js'
// 在pug模板调用
export default {
	data() {
		return {
			obj:''
		}
	},
	mixins:[bridegMix],
	methods: {
		run (type) {
			console.log(`${BridgeNum.ID.key}----${type}`)
			//这里 引入相关桥操作返回数据  res  下面方法接收res同事处理数据
		},
		readFn (res) {
			console.log(res,'readFn')
		},
		backFn (res) {
			console.log(res,'backFn')
		},
		errorFn (res) {
			console.log(res,'errorFn')
		}
	},
	mounted () {
		nativeListen.addListen(listeNum.ID.IDREADCOM,this.readFn.bind(this));
		nativeListen.addListen(listeNum.ID.IDBACK,this.backFn.bind(this));
		nativeListen.addListen(listeNum.ID.IDERROR,this.errorFn.bind(this))
	},
	//页面卸载
	destroy () {
		nativeListen.removeListen(listeNum.ID.IDREADCOM,this.readFn.bind(this));
		nativeListen.removeListen(listeNum.ID.IDBACK,this.backFn.bind(this));
		nativeListen.removeListen(listeNum.ID.IDERROR,this.errorFn.bind(this))
	}
}