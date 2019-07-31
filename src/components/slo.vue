<template>
	<div class="fun">
		<detail-header title="Slot组件"></detail-header>
		<div>
			<p>单个slot</p>
			<mySlot1> 
				<p>分发的内容</p>
				<p>更多的内容</p>
			</mySlot1>
			<hr> 
			<p>具名slot</p>
			<mySlot2>
				<h2 slot="header">我是头部信息</h2>
				<p>我是内容1</p>
				<p>我是内容2</p>
				<div slot="footers">我是底部信息</div>
			</mySlot2>	
			<hr> 
			<p>作用域插槽1</p>
			<mySlot3>
				<template slot-scope="props">
					<p>来自父组件的内容</p>
					<p>{{props.msg}}</p>
				</template>
			</mySlot3>
			<hr> 


			
			<p>作用域插槽2</p>
			<lists :list="bookList">
				<template slot="book" slot-scope="props" >
					<li>{{props.vals}}</li>
				</template>
			</lists>
			
			<br />
			<div class="mes">
				 <div>
			        <button @click="warning">warning</button>
			    </div>
			</div>

		</div>
		<Footer/>
	</div>
</template>
<style type="text/css" media="screen" lang="scss">
	.slots{
		p{
			text-align:center;
		}
	}
</style>
<script>
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import Vue from 'vue'
	Vue.component('mySlot1',{
		template:`
			<div class="slots">
				<slot>
					<p>单个slot用法</p>
					<p>如果父组件没有内容，我会默认插入出现</p>  
				</slot>
			</div>
		`
	})


	Vue.component('mySlot2',{
		template:`
			<div>
				<div class="header">
					<slot name="header"></slot>
				</div>
				<div class="main">
					<slot>啊哈哈，我是单个slot，当内容为空的时候，我就会显示出来</slot>
				</div>
				<div class="footers">
					<slot name="footers"></slot>
				</div>
			</div>
		`
	})

	Vue.component('mySlot3',{
		template:`
			<div>
				<div class="mains">
					<slot msg="我是作用域插槽"></slot>
				</div>
			</div>
		`
	})

	Vue.component('lists',{
		template:`
			<div>
				<div>
					<ul>
						<slot 
							name="book"
							v-for="(item,index) in list"
							:vals="item.name"
						></slot>
					</ul>
				</div>
			</div>
		`,
		props:{
			list:{
				type:Array,
				default:function (){
					return []
				}
			}
		}
	})
	export default {
		name:'Slots',
		data () {
			return {
				msg:'我是slot',
				bookList:[
					{name:'vue.js指南'},
					{name:'angular.js指南'},
					{name:'react.js指南'}
				]
			}
		},
		components:{
			DetailHeader,
			Footer
		},
		methods:{
            warning () {
                this.$toast('toast');
            }
		}
		
	}
</script>