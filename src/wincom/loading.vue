<template lang="pug">
  div
    .cb-tips(v-if="isTips")
      .cb-tips-mask(v-if="showMask" @click="hideMask")
    
      slot(name="alert" v-if="alertInfo.msg" :title="alertInfo.title" :okTxt="alertInfo.okTxt" :msg="alertInfo.msg" :cb="hide")
        .cb-tips-box
          .cb-tips-title {{alertInfo.title}}
          .cb-tips-content
            .cb-tips-msg {{alertInfo.msg}}
            .cb-tips-op
              .cb-tips-btn(@click="hide(true)") {{alertInfo.okTxt}}
      
      slot(
        name="confirm"
        v-if="confirmInfo.msg"
        :title="confirmInfo.title"
        :okTxt="confirmInfo.okTxt"
        :cannelTxt="confirmInfo.cannelTxt"
        :msg="confirmInfo.msg"
        :cb="hide"
      )
        .cb-tips-box
          .cb-tips-title {{confirmInfo.title}}
          .cb-tips-content
            .cb-tips-msg {{confirmInfo.msg}}
            .cb-tips-op.cb-tips-op-confirm
              .cb-tips-btn(@click="hide(false)") {{confirmInfo.cannelTxt}}
            .cb-tips-op.cb-tips-op-confirm
              .cb-tips-btn(@click="hide(true)") {{confirmInfo.okTxt}}
      
      slot(name="prompt" v-if="promptInfo.msg" :title="promptInfo.title" :value="promptVal" :okTxt="promptInfo.okTxt" :msg="promptInfo.msg" :cb="hide")
        .cb-tips-box
          .cb-tips-title {{promptInfo.title}}
          .cb-tips-content
            .cb-tips-prompt
              |{{promptInfo.msg}}
              br/
              input.cb-tips-input(v-model="promptVal")
            .cb-tips-op
              .cb-tips-btn(@click="hide(promptVal)") {{promptInfo.okTxt}}
      
    .cb-tips-toast(v-if="toastInfo.msg")
      slot(name="toast" :msg="toastInfo.msg")
        .cb-tips-toast-msg {{toastInfo.msg}}
</template>

<script>
import extend from 'lodash/extend'
import isEmpty from 'lodash/isEmpty'
export default {
  name: 'CbTips',
  props: {
    alert: Object,
    confirm: Object,
    prompt: Object,
    toast: Object
  },
  watch: {
    alert (val) {
      this.confirmInfo = {}
      this.promptInfo = {}
      this.show('alert', val)
    },
    confirm (val) {
      this.alertInfo = {}
      this.promptInfo = {}
      this.show('confirm', val)
    },
    prompt (val) {
      this.alertInfo = {}
      this.confirmInfo = {}
      this.show('prompt', val)
    },
    toast (val) {
      this.showToast(val)
    }
  },
  data () {
    return {
      showMask: false,
      maskClose: false,
      isTips: false,
      alertInfo: {},
      confirmInfo: {},
      promptInfo: {},
      toastInfo: {},
      promptVal: '',
      timer: undefined
    }
  },
  created () {
    if (!isEmpty(this.alert)) {
      this.show('alert', this.alert)
    } else if (!isEmpty(this.confirm)) {
      this.show('confirm', this.confirm)
    } else if (!isEmpty(this.prompt)) {
      this.show('prompt', this.prompt)
    }
    if (!isEmpty(this.toast)) {
      this.showToast(this.toast)
    }
  },
  methods: {
    hide (type) {
      this.isTips = false
      if (this.alert.msg) {
        this.alertInfo = {}
        if (this.alert.cb) {
          this.$nextTick(() => {
            this.alert.cb(type)
          })
        }
      }
    },
    hideMask () {
      if (this.maskClose) this.hide(false)
    },
    show (type, msg) {
      // console.log(type, msg)
      const defaultTxt = {
        title: '提示',
        okTxt: '确认',
        cannelTxt: '取消'
      }
      const config = extend({}, defaultTxt, msg)
      if (config.msg) {
        this[type + 'Info'] = config  //赋值给type+'Info'数据,然后回显当前表框数据
        this.isTips = true
      }
    }
  }
}
</script>