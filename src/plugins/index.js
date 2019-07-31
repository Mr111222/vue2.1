import toast from './plugin/toast.js'

export default {
	/**
	 * [自定义方法]
	 * 组件使用: this.$ZZplugin.toast
	 * 全局使用: vue.ZZplugin.toast
	 */
	install (Vue, options){
		const plugins = {
			toast
		};
		Vue.ZZplugin = plugins;
		Vue.prototype.$ZZplugin = plugins;
	}
}