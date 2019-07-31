<template>
	<div>
		<detail-header title="vuexFn"></detail-header>
		<button @click="getAdds">点击修改</button>
		<p style="text-align:center;">{{xx|| '无数据'}}</p>
		<p style="text-align:center;">{{addsNum|| '无数据'}}</p>
		<p class="times" @click="beginTime(10)">{{vals}}</p>
		<button @click="getPsp">点击触发</button>
		<input type="text" placeholder="字数length触发dispatch" name="" v-model="modalValue" style="border:1px dashed #ccc;margin:10px auto; display:block;width:200px;">
		<Footer />
	</div>
</template>
<style type="text/css" media="screen">
	button {
		width:40%;
		display: block;
		margin:10px auto;
		font-size: 20px;
	}
	.times{
		width: 40%;
		height: 1rem;
		border:1px solid #ccc;
		margin:.1rem auto;
		line-height: 1rem;
		text-align: center;
	}
	
</style>
<script>
	import Vue from 'vue'
	import {mapState, mapMutations,mapActions,mapGetters} from 'vuex'
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	export default {
		name: 'vuexFn',
		data () {
			return {
				msg: 'com from Japan',
				modalValue: ''
			}
		},
		components: {
			DetailHeader,
			Footer
		},
		computed: {
			//vuex 实际用法
	    ...mapState({
	     xx: state => state.mutations.xx,
	     addsNum: state => state.mutations.num,
	     vals: state=>state.mutations.vals
	    }),
	    ...mapGetters(['valsss'])
		},
		mounted() {
			//this.beginTime(30)
		},
		methods: {
			...mapMutations(['getNum','adds']),
			...mapActions(['beginTime','getAdds']),
			getAdds () {
				this.adds()
			},
			getPsp () {
				this.$store.dispatch('getPsp',this.msg) // type msg数据
			},
			getusers(val){
				this.$http.post('https://www.liangzixiaoying.cn/users/list', {
				    pn:val
				})
				.then((response) => {
					if(response.status === 200){
						setTimeout(()=>{
							this.getNum(response.data.extend.list.list) //直接传参过去然后在vuex上替换
						},5000)
					}
				})  
			},
			getRanFn (min,max) { // 随机范围数产生
				return Math.floor(Math.random()*(max-min+1)+min)
			}
		},
		created () {
			this.getusers(1)
		},
		watch:{
			modalValue (old,newVal){
				if(old!=newVal && newVal.length+1 === 4){
					this.$store.dispatch('modalValue',this.modalValue)
					this.modalValue = ''
					return false
				}
			}
		}
	}
</script>