import AlertFn from './loading.vue'
import Vue from 'vue'
import extend from 'lodash/extend'

function creatGlobalTips (Vue, template) {
  const div = document.createElement('div')
  div.innerHTML = `<global-alert v-if="showTips" :alert="alert"/>` //global-alert只是一个自定义标签，为的是指定组件使用
  document.body.appendChild(div)

  const tips = new Vue({
    el: div,
    components: { globalAlert: template }, //global-alert 在这里指定传入的组件
    data: {
      showTips: false,
      alert: {}
    }
  })

  return {
    getStatus () {
      return tips.showTips
    },
    hide () {
      tips.showTips = false
    },
    show (type, msg) {
      if (msg) {
        tips.showTips = true
        tips[type] = {msg:msg}
        //tips[type] = extend({}, msg)   ===   tips[type] = {msg:msg}
      } else if (msg) {
        tips.showTips = true
        tips.showTips = true
        tips[type] = extend({}, msg)
        //tips[type] = {msg:msg}
      }
    }
  }
}







let tipsInstance;
function showAlert (msg = {}) {
  tipsInstance.show('alert', msg)
}

AlertFn.install=function(Vue, options = {}){
    Vue.component(options.name || AlertFn.name, AlertFn) //组件名称取组件的name
    tipsInstance = creatGlobalTips(Vue,AlertFn)
    Vue.prototype.$alert = showAlert
}




export default AlertFn  //导出组件