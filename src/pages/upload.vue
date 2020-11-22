<template>
	<div>
		<uploader :options="options" class="uploader-example">
          <uploader-unsupport></uploader-unsupport>
          <uploader-drop>
            <p>Drop files here to upload or</p>
            <uploader-btn>select files</uploader-btn>
            <uploader-btn :attrs="attrs">select images</uploader-btn>
            <uploader-btn :directory="true">select folder</uploader-btn>
          </uploader-drop>
          <uploader-list></uploader-list>
        </uploader>
    </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				options: {
          // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
          target: 'http://localhost:3000/upload',
          testChunks: false
        },
        attrs: {
          accept: ['.zip']
        }
			}
		}
	}
</script>