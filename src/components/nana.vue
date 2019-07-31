<template>
	<div class="na" v-html="isVal"></div>
</template>
<script type="text/javascript">
	export default {
		name: 'Nana',
		data () {
			return {
				nana: 'nana'
			}
		},
		props:{
			isVal:[String, Number]
		}
	}
</script>
<style lang="scss">
	.na{
		height:40px;
		color:red;
		text-align: center;
		line-height: 40px;
		background: #ccc;
	}
</style>