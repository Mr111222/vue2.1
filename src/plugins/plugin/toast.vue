<template>
	<div class="toast" @click="pps">
		<span class="msg">{{msg}}</span>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
			msg:{
				type: String
			}
		},
		methods:{

		}
	}
</script>
<style type="text/css" lang="scss">
	.toast{
		width:100px;
		height:50px;
		background: #ccc;
		margin:50px auto;
		.msg{
			text-align:center;
			line-height: 50px;
		}
	}
</style>