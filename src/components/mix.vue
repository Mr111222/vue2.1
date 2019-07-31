<template>
	<div class="mix">
		<detail-header title="mixin">	</detail-header>
		<p v-show="isShow">我是mixin{{name}}</p>
		<button @click="change">点击显示</button>
		<button @click="bInit">点击获取登录信息</button>
		<p style="color:red;text-align:center; line-height:40px;font-size:20px;">{{errmsg}}</p>
		<button @click="Fns">xxxx</button>
		<button @click="comFns">comFns</button>
		<Footer/>
	</div>
</template>
<style type="text/css" media="screen" lang="scss">
	.mix button {
		width:40%;
		height:100px;
		margin:10px auto;
		font-size:28px;
		display: block;
		border:1px solid #ccc;
	}

	.menu-timeEndCard{
    height: 1.5rem;
    display: flex;
    background:#696445;
    align-items: center;
    justify-content: space-around;
    .menu-endCard {
      width: 1.05rem;
      height: 1.05rem;
    }
    .menu-time{
      margin-top: .07rem;
      width: 1rem;
    }
  }
  .menu-deviceNum{
    text-align: center;
    font-size: .16rem;
    color: rgba(244, 239, 255, 0.48);
  }
</style>
<script>
	import mix from '../mix/mix'
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import Clock from '../components/clock'
	import comFns from '../libs/common'
	let p1 = new comFns()

	export default {
		name:'mixin',
		data () {
			return {
				isShow: false,
				name: '哈哈',
				num:1
			}
		},
		methods: {
			Fns () {
				this.$alert('我是xxxx')
			},
			comFns () {
				this.num ++
				let s = p1.set(this.num)
				console.log(s, 456)
			}
		},
		components:{
			Footer,
			DetailHeader,
			Clock
		},
		mixins:[mix] //上面引入，然后这样调用，但是data里面的值要定义好

		
	}
</script>