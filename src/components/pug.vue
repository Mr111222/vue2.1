<template lang="pug">
	.fun
		DetailHeader(title="Pug")
		ul(class="zz" type="xx")
			li
				|我是好孩子
			li
				|我是好孩子
			li
				|我是好孩子
			li
				|我是好孩子
			li(class="lis")
				|我是好孩子 
			li
				|{{getNum}}
		#box
			button(class="btn" @click="open" style="margin:0 auto;") open
			button(class="btn" @click="read" style="margin:0 auto;") Read
			button(class="btn" @click="back" style="margin:0 auto;") Back
		Footer
</template>
<style type="text/css" lang="scss" media="screen" scoped>
	li{
		text-align:center;
		line-height:40px;
	}
	.lis{
		font-size: 40px;
	}
</style>
<script>
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import IdMixNative from '../libs/id.js'

	export default {
		name:'pug',
		data () {
			return {
				msg:"呵呵哒"
			}
		},
		computed: {
			getNum () {
				return this.$store.state.mutations.xx
			}
		},
		methods: {
		open () {
      	  this.run('open')
	    },
	    read () {
	      this.readFn('open')
	    },
	    back () {
	      this.backFn('back')
	    }
		},
		mixins:[IdMixNative],
		components:{
			DetailHeader,
			Footer
		},	
	}
</script>

