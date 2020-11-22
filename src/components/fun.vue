<template>
	<div class="fun">
		<detail-header title="Fun">	</detail-header>
		<p>{{version}}</p>
		<div class="funBtn">
			<p>我是fun</p>
			<input v-model="pps"/>
			<button @click="get()">我是btn123</button>
			<button @click="getRoutesSex()">我是routerSex</button>
			<button @click="getRoutesAges()">我是routerAges</button>
			<button @click="testDe">debouce</button>
			<button @click="testTh">throttle</button>
		</div>
		<div>
			<ul style="width:200px;height:400px; line-height:30px;margin:0 auto">
				<li style="background:#ccc;text-align:center" v-for="(item,index) in list" :key="item.age" >{{item.name}}</li>
			</ul>
		</div>
		<div>
			<el-button @click="getFN">get</el-button>
		</div>
		
		<!-- <Footer/> -->
	</div>
</template>
<style type="text/css" media="screen">
	button{
		border:1px solid #ccc;
		width:auto;
		height:30px;
		border-radius: 5px; 
	}
</style>
<script>
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import fns from '../components/common.js'
	import extend from 'lodash/extend'
	import {debounceFn, throttleFn} from './debounce.js' 
	function conFn(){
		console.log(12)
	}
	let timer
	export default {
		name:'fun',
		data () {
			return {
				pps: '',
				isShow: false,
				name: '哈哈',
				getqusex: {},
				getquage: {},
				names:'name',
				ages:'age',
				list:[{name:"z1",age:1},{name:"z2",age:2},{name:"z3",age:3},{name:"z4",age:4},{name:"z5",age:5}]
			}
		},
		components:{
			DetailHeader,
			Footer
		},
		methods:{
			getFN (){
				this.$http('/api/xxx').then(res=>{
					console.log(res)
				})
			},
			testDe () {
				let num = Math.floor(Math.random()*100)
				this.getVal(num)
			},
			testTh(){
				window.onscroll = throttleFn(onScroll, 50)
			},
			get(){
					console.log(this.$parent, 999)
				fns.getName('zz')
			},
			getRoutesSex () {
				this.$router.push({query:{sex:'nv'}})
				this.getquage.sex = 'nv'
				let fin = extend({},this.getqusex,this.getquage)
				this.$router.push({query: fin})

			},
			getRoutesAges () {
				this.$router.push({query:{age:'20'}})	
				this.getquage.age = 20
				let fin = extend({},this.getquage,this.getqusex)
				this.$router.push({query: fin})
			},
			getVal(num){
				if(timer) clearTimeout(timer)
				timer = setTimeout(()=>{
					this.pps = num
				},1000)

			}
		},
		beforeMount (){
			this.$parent.isNa = true
      this.$parent.titleVal = '<p>我是nana</p>'
		},
		mounted () {
			console.log(this.$router.query)
		},
		computed: {
	    version () {
	      console.log(process.env, 999)
	      return process.env.ENV_CONFIG
	    }
	  }
		
	}
</script>