<template>
	<div class="val">
		<input type="text" v-model="val">
		<ul>
			<li v-for="(i,index) in list" :key="index">来自父组件的数值{{i}}</li>
		</ul>
	</div>
</template>
<style type="text/css" media="screen" lang="css" scoped>
	.val{
		width:100%;
		height:40px;
	}
	.val input {
		width:50%;
		height:150px;
		font-size:18px;
		margin:20px auto;
		display: block;
	}
	.val ul {
		width:60%;
		margin:500px auto;
	}
</style>

<script>
	export default {
		name:'Emit',
		data(){
			return {
				val:''
			}
		},
		props:{
			list:[Array]
		},
		created(){
			console.log(this.list,123) //已经完成了数据的初始化
		},
		watch:{
			val(val){
				this.$emit('on-xx', val)
			}
		}
	}
</script>
