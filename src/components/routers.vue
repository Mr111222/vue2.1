<template>
	<div>
		<detail-header title="router"></detail-header>
		<div class="tabs">
			<div class="uls">
				<ul>
					<li v-for="(i,index) in list" :key="index" @click="toRouterFn(i.name)">
						{{i.name}}	
					</li>
				</ul>
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
			toRouterFn (x) {
				this.$router.push({path:`/routers/${x}/`})
			}
		}
	}
</script>