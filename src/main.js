import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import * as filters from './filters/index'
import './assets/iconfont.css'
import plugin from  './plugins/index'
import Ele from 'element-ui'
// import Sok from 'sok888888'
import App from './app'


// import '@/assets/reset.scss'
import Message from './message/index'
Vue.use(Message)

import Loading from './wincom/index'
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
// Vue.prototype.$message = Message
Vue.use(iView)
Vue.use(Loading)
Vue.use(plugin,'')
Vue.use(Ele)


//注册为全局组件
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

axios.interceptors.request.use((config) => {
    console.log("请求前拦截！");
    return config;
}, (err) => {
    return Promise.reject(err);
});


const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

