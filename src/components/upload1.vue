<template>
	<!--这个页面是ocr身份证正反面识别PEEAHCTV_EX，如果识别失败弹出提示框，是否手动补充身份信息，点击确定
		发送交易PEEAEACI_EX，存储返回是否补充身份信息标志，然后根据这个字段是否出现补充身份信息页面
	-->
        <div id="content">
        	<div class="imageBody">
					<div id="id_image_front" class="ibBlock">
					<input id="id_image_front_input" type="file" capture="camera"/>
					<img id="image_front" src="">
					<div class="cameraIcon"></div>
				</div>
				<p class="imageBody_tip">点击上传身份证人像面</p>
			</div>
			<div class="imageBody" style="margin-top: 30px;">
				<div id="id_image_back" class="ibBlock">
					<input id="id_image_back_input" type="file" capture="camera"/>
					<img id="image_back" src="">
					<div class="cameraIcon"></div>
				</div>
				<p class="imageBody_tip">点击上传身份证国徽面</p>
			</div>
			
			<div class="imgDemo">
				<div class="imgDemoTitle">拍摄示例</div>
				<ul class="imgDemoList">
					<li>
						<div>
							<img src="../assets/image/1.png" />
						</div>
						<div>
							<span class="iconfont" id="green">xx</span>
							标准拍摄
						</div>
					</li>
					<li>
						<div>
							<img src="../assets/image/1.png" />
						</div>
						<div>
							<span class="iconfont">&#xe60d;</span>
							边框缺失
						</div>
					</li>
					<li>
						<div>
							<img src="../assets/image/1.png" />
						</div>
						<div>
							<span class="iconfont">&#xe60d;</span>
							照片模糊
						</div>
					</li>
					<li>
						<div>
							<img src="../assets/image/1.png"/>
						</div>
						<div>
							<span class="iconfont">&#xe60d;</span>
							闪光强烈
						</div>
					</li>
				</ul>
			</div>
        	<div class="subbutn button" v-on:click="goNext"><button>下一步</button></div>
        	<page-status :loading="loading"></page-status>
        </div>        
</template>
<script>
	//import {axiosCommon,urlIntercept} from '@/libs/axiosCommon'
    export default{
        name : "checkID",
        components:{
        },
        data(){
            return {
            	'vuexACT_ID@vuex': ['vuexACT_ID'],
            	'sendData@share': ['sendData'],
            	'FILLFLAG@share': ['sendData.FILLFLAG'],
            	'ADRSINF@share': ['sendData.ADRSINF'],
            	'CTFORG@share': ['sendData.CTFORG'],
				ocrData:{
					image1:"",
					image2: ''
				},
				loading: false,
				total1: "",
				total2: ""
            }
        },
        methods:{
        	goNext () {
        		let self = this ;
        		//alert(self.total1);
        		if(self.ocrData.image1 !="" && self.ocrData.image2 !="" && self.total1 <= 1048576 && self.total2 <= 1048576){
        			if (self.loading) return
        			self.loading = true;
        			self.$nextTick(self.toPost());//获取更新后的dom
        		}else if(self.total1 > 1048576 || self.total2 > 1048576){
        			self.$toast("图片过大,请更换图片再上传");
        		}else{
        			self.$toast("请上传身份证正反面");
        		}
        	},
        	toPost () {
        		let self=this;
        		
        	}
        },
        created(){
        	document.title="身份证验证";
        	//commonFun.clearPadding();
        },
        mounted(){
        	/*上传身份证正反面*/
        		let self =this;
        		if(typeof(FileReader)=="undefined"){
					self.$alert("不支持图片上传");
				}else{
					let input1 = document.getElementById("id_image_front_input");
					input1.addEventListener("change",upload1,false);//表单变化 上传
						function upload1(){
							
						var file= this.files[0];
						//console.log('图片大小'+file.size);
						if(file.type!='image/png'&&file.type!='image/jpeg'&&file.type!='image/jpg'){
							self.$alert('图片格式不允许，请更换后重新操作');
							return false;
						}
						var read = new FileReader();
						read.readAsDataURL(file);
						read.onload = function(e){
							var showimg = document.getElementById("image_front");
							if(file.size < 700000){
								self.total1 = file.size;
								self.ocrData.image1 = this.result;
								showimg.setAttribute('src',self.ocrData.image1);
								showimg.style.display="block";
							}else{
								var img = document.createElement("img");
								img.setAttribute('src',this.result);
								img.onload = function(){
									//计算比例
									var scale 	= img.width	/ img.height;
									//重新设置宽度
									var width 	= parseInt(400);
									//重新设置高度
									var height 	= parseInt(width/scale);
									//创建canvas对象
									var canvas = document.createElement("canvas");
									var ctx = canvas.getContext("2d");
									//设置画图板宽度
									canvas.width = width;
									//设置画图板高度
									canvas.height = height;
									ctx.drawImage(img,0,0,width,height);
									var base64 = canvas.toDataURL('image/jpeg',1);// 图片通过base64转码
									//self.total1=commonFun.base64Size(base64);
									self.ocrData.image1 = base64;
									showimg.setAttribute('src',self.ocrData.image1);
									showimg.style.display="block"
								}
							}
						}
					};
					let input2 = document.getElementById("id_image_back_input");
					input2.addEventListener("change",upload2,false);//�?�仯 �ϴ�
						function upload2(){
							
						var file= this.files[0];
						//console.log('图片大小'+file.size);
						if(file.type!='image/png'&&file.type!='image/jpeg'&&file.type!='image/jpg'){
							self.$alert('图片格式不允许，请更换后重新操作');
							return false;
						}
						var read = new FileReader();
						read.readAsDataURL(file);
						read.onload = function(e){
							var showimg = document.getElementById("image_back");
							if(file.size < 700000){
								self.total2 = file.size;
								self.ocrData.image2 = this.result;
								showimg.setAttribute('src',self.ocrData.image2);
								showimg.style.display="block";
							}else{
								var img = document.createElement("img");
								img.setAttribute('src',this.result);
								img.onload = function(){
									//计算比例
									var scale 	= img.width	/ img.height;
									//重新设置宽度
									var width 	= parseInt(400);
									//重新设置高度
									var height 	= parseInt(width/scale);
									//创建canvas对象
									var canvas = document.createElement("canvas");
									var ctx = canvas.getContext("2d");
									//设置画图板宽度
									canvas.width = width;
									//设置画图板高度
									canvas.height = height;
									ctx.drawImage(img,0,0,width,height);
									var base64 = canvas.toDataURL('image/jpeg',1);// ͼƬͨ��base64ת��
									//self.total2=commonFun.base64Size(base64);
									//console.log(e.target.result); //ѹ��ǰ�ļ�
									self.ocrData.image2 = base64;
									showimg.setAttribute('src',self.ocrData.image2);
									showimg.style.display="block"
								}
							}
						}
					};
				}
        	
        }
    }
</script>
<style  scope>
body,html{
	width: 100%;
	height: 100%;
}
#content{
	width: 100%;
	height: 100%;
	display: block;
	padding-top: 30px;
}
.imageBody{
	width: 50%;
	margin: 0 auto 0;
	text-align: center;
}
.ibBlock{
	width: 100%;
	height: 108px;
	border: 1px dashed #b2b2b2;
	position: relative;
	border-radius: 7px;
	overflow: hidden;

}
.ibBlock>input[type="file"]{
	width: 100%;
   	height: 100%;
  	border: 1px solid red;
  	opacity: 0; 
  	cursor: pointer;
  	position: absolute;
  	left: 0;
  	top: 0;
  	z-index: 10;
}
.ibBlock>img{
	position: absolute;
  	width: 100%;
  	height: 100%;
  	z-index: 2;
  	top: 0;
  	left: 0;
  	display: none;
}
.imageBody_tip{
	font-size: 15px;
	color: #888;
	margin-top: 15px;
	text-align: center;
}
.ibBlock>.cameraIcon{
	background-size: 100% 100%;
	width: 25px;
	height: 20.3px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.imgDemo{
	background: #fff;
	padding:10px 0;
	margin-top: 25px;
	color: #888;
	font-size: 12px;
}
.imgDemoList{
	overflow: hidden;
	padding-left: 0;
}
.imgDemoList>li{
	float: left;
	width: 22%;
	margin-left: 2.4%;
}
.imgDemoTitle{
	margin-left: 2.4%;
	margin-bottom: 10px;
}
.imgDemoList>li>div:nth-of-type(1){
	width: 100%;
	height: 40px;
	margin-bottom: 5px;
}
.imgDemoList>li>div:nth-of-type(1)>img{
	width: 100%;
	height: 100%;
}
.imgDemoList>li>div:nth-of-type(2)>.iconfont{
	color: #e60012;
}
.imgDemoList>li>div:nth-of-type(2)>#green{
	color: #00b755;
}
.subbutn{
	
	padding: 15px;
}
.subbutn button{
	background-color: #e65457;
}

</style>