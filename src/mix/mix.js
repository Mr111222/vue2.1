/*
* @Author: 智
* @Date:   2018-05-16 15:38:35
* @Last Modified by:   智
* @Last Modified time: 2018-05-16 16:06:56
*/


//把公共的逻辑放到mixin里面
export default {
	data () {
		return {
			isShow: false,
			errmsg: ''
		}
	},
  	methods: {
	    change: function() {
	     this.isShow = !this.isShow
	    },

	    //以下为桥应用,调取手机外部设备
	    bInit () {
	      try {
	        this.$bridge.init()
	      } catch (e) {
	        //this.$alert('初始化失败：错误' + e.message)
	        //this.errmsg =  e.message
	        console.log(this)
	        alert('初始化失败：错误111' + e.message)
	      }
	    },
	    // 登录相关
	    bLogin () {
	      this.$bridge.init(data => {
	        if (data === null) {
	          this.$alert('登录失败')
	        } else {
	          this.$alert('登陆成功')
	        }
	      })
	    },
	    bGetSessionState () {
	      this.$bridge.getSessionState(data => {
	        this.$alert(data)
	      })
	    },
	    // 键盘相关
	    bShowKeyboard () {
	      this.$bridge.showKeyboard('config')
	    },
	    bHideKeyboard () {
	      this.$bridge.hideKeyboard()
	    },
	    // 安全相关
	    bSignDataByNFC () {
	      this.$bridge.signDataByNFC('data', 'callback')
	    },
	    // 电话
	    bDial () {
	      this.$bridge.dial('data', 'callback')
	    },
	    // 数据相关
	    bGetLocalStorageItem () {
	      this.$bridge.getLocalStorageItem('data', 'callback')
	    },
	    bSetLocalStorageItem () {
	      this.$bridge.setLocalStorageItem('data', 'callback')
	    },
	    // 设备相关信息
	    bGetAllInfo () {
	      this.$bridge.getAllInfo('callback')
	    },
	    bGetSingleInfo () {
	      this.$bridge.getSingleInfo('data', 'callback')
	    },
	    bGetNetworkState () {
	      this.$bridge.getNetworkState('callback')
	    },
	    // GPS相关
	    bOpenGPSListener () {
	      this.$bridge.openGPSListener('config')
	    },
	    bCloseGPSListener () {
	      this.$bridge.closeGPSListener('config')
	    },
	    bOpenGPSOnce () {
	      this.$bridge.openGPSOnce('config')
	    },
	    bShowGPS () {
	      this.$bridge.showGPS('callback')
	    },
	    bShowMap () {
	      this.$bridge.showMap('callback')
	    },
	    // 二维码相关
	    bOpenScan () {
	      this.$bridge.openScan('callback')
	    },
	    bOpenEncode () {
	      this.$bridge.openEncode('data', 'callback')
	    },
	    // 相册相关
	    bShowCamera () {
	      this.$bridge.showCamera('callback')
	    },
	    bGetCameraImageData () {
	      this.$bridge.getCameraImageData('callback')
	    },
	    bGetCameraImagePath () {
	      this.$bridge.getCameraImagePath('callback')
	    },
	    bGetImageData () {
	      this.$bridge.getImageData('callback')
	    },
	    bGetImagePath () {
	      this.$bridge.getImagePath('callback')
	    },
	    // 摇一摇相关
	    bOpenShakeListener () {
	      this.$bridge.openShakeListener('config')
	    },
	    bCloseShakeListener () {
	      this.$bridge.closeShakeListener('config')
	    },
	    bOpenShakeOnce () {
	      this.$bridge.openShakeOnce('config')
	    },
	    bShowShake () {
	      this.$bridge.showShake('callback')
	    },
	    // 重力感应相关
	    bOpenGSensorListener () {
	      this.$bridge.openGSensorListener('config')
	    },
	    bCloseGSensorListener () {
	      this.$bridge.closeGSensorListener('config')
	    },
	    bOpenGSensorOnce () {
	      this.$bridge.openGSensorOnce('config')
	    },
	    bShowGSensor () {
	      this.$bridge.showGSensor('callback')
	    },
	    // 罗盘相关
	    bOpenCompassListener () {
	      this.$bridge.openCompassListener('config')
	    },
	    bCloseCompassListener () {
	      this.$bridge.closeCompassListener('config')
	    },
	    bOpenCompassOnce () {
	      this.$bridge.openCompassOnce('config')
	    },
	    bShowCompass () {
	      this.$bridge.showCompass('callback')
	    },
	    // url相关
	    bLoadUrl () {
	      this.$bridge.loadUrl('/index.html#/demo/demo1', {})
	    },
	    bOpenUrl () {
	      this.$bridge.openUrl('index.html#/demo/demo2', {}, result => {
	        this.$alert(JSON.stringify(result))
	      })
	    },
	    // 其他
	    bOpenActivity () {
	      // act 桥名称   param请求参数   callback回调函数  timeout桥接口有效时间，0表示永久
	      this.$bridge.openActivity('act', 'param', 'callback', 'timeout')
	    }
  	}
}

// 'init', 'login', 'getSessionState',
// 'showKeyboard', 'hideKeyboard', 'openActivity', 'signDataByNFC',
// 'dial', 'getLocalStorageItem', 'setLocalStorageItem',
// 'getAllInfo', 'getSingleInfo', 'getNetworkState',
// 'openGPSListener', 'closeGPSListener', 'openGPSOnce', 'showGPS', 'showMap',
// 'openScan', 'openEncode',
// 'showCamera', 'getCameraImageData', 'getCameraImagePath', 'getImageData', 'getImagePath',
// 'openShakeListener', 'closeShakeListener', 'openShakeOnce', 'showShake',
// 'openGSensorListener', 'closeGSensorListener', 'openGSensorOnce', 'showGSensor',
// 'openCompassListener', 'closeCompassListener', 'openCompassOnce', 'showCompass'
// 共37
