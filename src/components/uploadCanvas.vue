<template>
	<div>
		<input capture="video" @change="handleImgUpload" id="ids" type="file" />
		<img src=""  alt="" id="imgs">
	</div>
</template>
<script>
	export default {
		methods:{
			handleImgUpload(){
				var eleFile = document.getElementById('ids');

				// 压缩图片需要的一些元素和对象
				var reader = new FileReader(),
				    img = new Image();

				// 选择的文件对象
				var file = null;

				file = event.target.files[0];
				// 选择的文件是图片
				if(file.type.indexOf("image") == 0) {
				    reader.readAsDataURL(file);
				}else {
					alert('文件格式不对')
					 reader.readAsDataURL();
				}

				// 文件base64化，以便获知图片原始尺寸
				reader.onload = function(e) {
				    img.src = e.target.result;
				};

				// 缩放图片需要的canvas
				var canvas = document.createElement('canvas');
				var context = canvas.getContext('2d');

				// base64地址图片加载完毕后
				img.onload = function() {
				    // 图片原始尺寸
				    var originWidth = this.width;
				    var originHeight = this.height;
				    // 最大尺寸限制
				    var maxWidth = 400,
				        maxHeight = 400;
				    // 目标尺寸
				    var targetWidth = originWidth,
				        targetHeight = originHeight;
				    // 图片尺寸超过400x400的限制
				    if(originWidth > maxWidth || originHeight > maxHeight) {
				        if(originWidth / originHeight > maxWidth / maxHeight) {
				            // 更宽，按照宽度限定尺寸
				            targetWidth = maxWidth;
				            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
				        } else {
				            targetHeight = maxHeight;
				            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
				        }
				    }

				    // canvas对图片进行缩放
				    canvas.width = targetWidth;
				    canvas.height = targetHeight;
				    // 清除画布
				    context.clearRect(0, 0, targetWidth, targetHeight);
				    // 图片压缩
				    context.drawImage(img, 0, 0, targetWidth, targetHeight);
				    document.getElementById('imgs').src = canvas.toDataURL("image/png");
				    // canvas转为blob并上传
				    canvas.toBlob(function(blob){
				    	console.log(blob)
				    },file.type || 'image/png')

				}
			}
		}
	}
</script>		