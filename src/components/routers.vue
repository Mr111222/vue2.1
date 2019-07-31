<template>
	<div>
		<detail-header title="router"></detail-header>
		<div class="tabs">
			<div class="uls">
				<button @click="getFn">get请求</button>
				<br>
				<br>
				<button @click="testFn">测试请求</button>
				<br>	
				<button @click="postFn">post请求</button>
			</div>
			<div class="view">
					<router-view></router-view>	
			</div>
			<Footer />
		</div>
	</div>
</template>
<style scoped>
	.uls{
		float: left;
		border:1px solid #ccc;
	}
	ul li{
		line-height: 44px;
		text-align: center;
		background: pink;
	}
	.view{
		width:200px;
		height:400px;
		float: left;
	}
</style>
<script>
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	const baseUrl = 'http://localhost:3000'
	export default {
		data () {
			return {
				list:[{name:'choice1',},{name:'choice2'},{name:'choice3'},{name:'choice4'},{name:'choice5'},{name:'choice6'},{name:'choice7'},]
			}
		},
		components: {
			Footer,
			DetailHeader
		},
		methods: {
			async testFn() {
				let str = {"page": 10}
				let data = await this.$http(`${baseUrl}/ceshi`,{params: str})
				console.log(data.goods, 'data')
			},
			toRouterFn (x) {
				this.$router.push({path:`/routers/${x}/`})
			},
			getFn () {
				let str = {"name":"pps","age":20}
				this.$http(`${baseUrl}/cors2`, {
        params: str
      }).then(res=>{
					console.log(res, 'get')
				})
			},
			postFn () {
				let str = {"name":"pps","age":20}
				this.$http.post(`${baseUrl}/cors1`, str).then(res=>{
					console.log(res, 'post')
				})
			}
		}
	}
</script>