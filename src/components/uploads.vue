<template>
	<div class="upload">
		<detail-header title="Uploads"></detail-header>
			<Upload :src="'/api/imgs'" />
			<!-- <div>
				<p>Canvas</p>
				<p>Canvas</p>
				<p>Canvas</p>
				<p>Canvas</p>
				<p>Canvas</p>
				<p>Canvas</p>
				<p>Canvas</p>
				<p>Canvas</p>
				<p>Canvas</p>
				<p>Canvas</p>
			</div> -->
			<UploadCanvas :uploadUrl="'/api/imgs'" id="zz"/>
		<Footer/>
	</div>
</template>

<script>
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import Upload from '../components/uploadreadAsDataURL'
	import UploadCanvas from '../components/uploadCanvas'
	export default {
		name:'upload',
		data () {
			return {

			}
		},
		components:{
			Footer,
			DetailHeader,
			Upload,
			UploadCanvas
		}
		
	}
</script>