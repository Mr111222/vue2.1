<template>
	<div>
		<div class="tabs">
			<p>{{msg}}</p>
			<button @click="change">点击获取</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Tabs1',
		data(){
			return {
				msg:'我是choice1'
			}
		},
		methods: {
			change () {
				console.log(this.msg)
			}
		}
	}
</script>