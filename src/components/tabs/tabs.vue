<template>
	<div>
		<ul class="uls">
			<li class="list-li" 
					:class="index-1 == keys ? 'active': '' " 
					v-for="(item, keys) in list" 
					:key="keys" 
					@click="toChange(keys)"
					>{{item}}
			</li>	
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'tabbs',
		props: {
			list: {
				type: [Array, Object, String, Number]
			},
			index:{
				type:[String, Number]
			},
			colors: {
				type: String
			}
		},
		methods: {
			toChange (val){
				this.$emit('change', val)
			}
		}
	}
</script>

<style type="text/css" lang="scss">
	.uls{
		display: flex;
		height:20px;
		li{
			flex:1;
			text-align: center;
			background: pink;
			color:#f40;
			margin: 0 10px;
		}
		.active{
			border-bottom:1px solid #246;
		}
	}
</style>