<template>
	<div>
		<div class="tostBox" v-if="isTips">
			<div class="tip-tost" v-if="messageInfo.msg">
				{{messageInfo.msg}}
			</div>	
		</div>
	</div>
</template>
<script type="text/javascript">
	import extend from 'lodash/extend'
	export default {
		name: 'Message',
		props:{
			message: Object
		},
		watch: {
			message (val) {
				if(val&&val.msg) this.showMessage(val)
			}
		},
		data () {
			return {
				isTips: false,
				messageInfo: {},
				timer: undefined
			}
		},
		created () {
			if(this.message && this.message.msg){
				this.showMessage(this.message)
			}
		},
		methods:{
			showMessage (msg) {
		      const defaultConfig = {
		        delay: 3000
		      }
		      const config = extend({}, defaultConfig, msg)
		      if (config.msg) {
		      	this.isTips = true
		        if (this.timer) clearTimeout(this.timer)
		        this.timer = setTimeout(() => {
		          this.messageInfo = {}
		          this.isTips = false
		        }, config.delay)
		        this.messageInfo = config
		      }
		    }
		}
	}
</script>

<style type="text/css" lang="scss" scoped>
	.tostBox{
		width:100%;
		height:100%;
		position: fixed;
		left:0;
		top:0;
		bottom:0;
		right:0;
		z-index: 999;
		.tip-tost{
			color:blue;
			text-align:center;
		}
	}
</style>