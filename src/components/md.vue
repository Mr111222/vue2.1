<template>
	<div class="mix">
		<detail-header title="Ceshi" />
		<main>
			<p class="ps">我是测试文件ps</p>
			<el-tab :index.sync="nowIndex" >
			      <el-tabs
			       class="flex-self"
			        v-for="item of 5"
			        :key="item"
			        >tab{{item}}</el-tabs
			      >
			    </el-tab>
			<div style="width:100%; height:50px; border:1px solid #ccc; margin-top:20px;">
							<!-- <Tab :index='nowIndex' :list="list" @change="changeFn"/> -->
							<p>{{nowIndex}}</p>
			</div>
			<!-- <button @click="toastFn('我是toast')">测试toast</button> -->
		</main>
		<Footer />
	</div>
</template>
<style type="text/css">
 .ps{
 	font-size: 40px;
 }
</style>
<script>
	import Vue from 'vue'
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import ElTab from '@/components/tabs/main'
	import Tab from '@/components/tabs/tabs' // 缺点不能自己定义内容 数据的展示不灵活
	Vue.use(ElTab)  // 组件内容部分使用了插槽，使用起来内容可以自定义
	export default {
		data () {
			return {
				nowIndex:1,
				list: 5
			}
		},
		methods:{
			toastFn (msg){
				this.$ZZplugin.toast.show(msg)
			},
			changeFn (val) {
				this.nowIndex  = val+1
			}
		},
		components:{
			Footer,
			DetailHeader,
			Tab
		}
	}
</script>