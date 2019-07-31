<template>
	<div class="fun">
		<detail-header title="render组件"></detail-header>
			<div>
				<p>render函数</p>
				<myRender1 level="2">
					pps
				</myRender1>
				<myRender2>
					我是render组件22222222222222222
				</myRender2>
				<myRender3></myRender3>	
			</div>
		<Footer/>
	</div>
</template>
<style type="text/css" media="screen" lang="scss">
	
</style>
<script>
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import Vue from 'vue'
	Vue.component('myRender1',{
		render:function(createElement){
			return createElement(
		      	'h' + this.level,
		      	[
			        createElement('a', {
			          attrs: { //标准html属性
			            name: 'zz',
			            href: '#' + 'www.baidu.com'
			          },
					  style:{
						  color:'blue'
					  },
			        }, this.$slots.default),
			        createElement('div',{
			        	class:{ //动态class   类似 :class
			        		isShow: this.show
			        	},
			        	style:{ //动态style  类似 :style
			        		color: this.show ? 'red' : 'blue'
			        	},
			        	attrs:{ //标准html属性
			        		id:'zz',
			        		class:'zz'
			        	},
			        	on:{ //给div绑定时间
			        		click:this.handleClick
			        	}
			        },this.$slots.default)
			     ]
		    )
		},
		props:{
			level:{
				type:[Number,String],
				required:true
			}
		},
		data(){
			return {
				show:true
			}
		},
		methods:{
			handleClick(){
				alert(12)
			}
		}
	})
	Vue.component('myRender2',{
		render:function(createElement){
			return createElement(
				'div',{
					class:{
						isShow:this.show
					},
					style:{
						color:this.show ? 'red' : 'blue'
					},
					attrs:{
						id:'zz'
					},
					on:{
						click:this.handleClick
					}
				},this.$slots.default //这里的文本可以自添加，也可以使用this.$slots.default，使用这个显示的就是myRender2组件中的文本
			)
		},
		data(){
			return {
				show:true
			}
		},
		methods:{
			handleClick(){
				alert(22)
			}
		}
	})
	
	Vue.component('myRender3',{
		render:function(createElement){
			return createElement(
				'div',[
					createElement('h2','我是h2标题'),
					createElement('p','我是p标记'),
				]
					
			)
		},
		data(){
			return {
				show:true
			}
		},
		methods:{
			handleClick(){
				alert(22)
			}
		}
	})
	
	export default {
		name:'Ren',
		data () {
			return {
				
			}
		},
		components:{
			DetailHeader,
			Footer
		}
	}
</script>