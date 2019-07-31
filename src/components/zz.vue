<template>
	<div class='zz'>
		<detail-header title="组件通信"></detail-header>
			<p style="text-align:center">子组件向父组件传值</p>
			<Emit @on-xx="zz" :list='list'></Emit>
			<h2>{{vals}}</h2>
		<Footer/>
	<detail-header title="组件通信"></detail-header>
		<p style="text-align:center">子组件向父组件传值</p>
		<Emit @on-xx="zz" :list='list'></Emit>
		<h2>{{vals}}</h2>
	</div>
</template>
<style type="text/css" media="screen" lang="css" scoped>
	h2{
		width:80%;
		height: 200px;
		margin:200px auto;
		border:1px solid #234;
		font-size:18px;
	}
</style>

<script>
	import Emit from './emit'
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	export default {
		data(){
			return {
				vals:'',
				list:[1,2,3,4,5,6,7,8,9]
			}
		},
		components: {
			Emit:Emit,
			DetailHeader,
			Footer
		},
		created () {

		},
		methods: {
			zz(val){
				this.vals = `我是子组件的数值${val}`	
			}
		}
	}
</script>