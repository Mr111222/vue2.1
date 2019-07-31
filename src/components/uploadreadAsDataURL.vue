<template>
    <div class="vue-uploader">
        <div class="file-list">
        	<span style="float:left">身份证正面</span>
            <section v-for="(file, index) of files" :key="index" class="file-item draggable-item">
                <img :src="file.src" alt="" ondragstart="return false;" class="upimg">
                <p class="file-name">{{file.name}}</p>
                <span class="file-remove" @click="remove(index)">+</span>
            </section>
            <section class="file-item">
                <div @click="add" class="add">
                    <span>+</span>
                </div>
            </section>
            <section class="upload-func">
	            <div class="operation-box">
	                <button @click="submit" :disabled="dis">{{btnVal}}</button>
	                <span>{{valmsg}}</span>
	            </div>
       		 </section>
        </div>
        <p v-show="someObject.type" style="color:red">{{someObject.message}}</p>
        <input type="file" accept="image/*" @change="fileChanged" ref="file" multiple="multiple">
    </div>
</template>
<script>
    export default {
        props: {
            src: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                status: 'ready',
                files: [],
                point: {},
                uploading: false,
                percent: 0,
                valmsg:'未上传',
                btnVal:'上传',
                dis:false,
                isErr:false,
                someObject:''
            }
        },
        methods: {
            add() {
                this.$refs.file.click()
            },
            submit() {
                if (this.files.length === 0) {
                    console.warn('no file!');
                    return
                }
                this.beforeAvatarUpload(this.files)
                const formData = new FormData()
                this.files.forEach((item) => {
                    formData.append(item.name, item.file)
                })
                const xhr = new XMLHttpRequest()
                xhr.upload.addEventListener('progress', this.uploadProgress, false)
                xhr.open('POST', this.src, true)
                this.uploading = true
                console.log(formData)
                xhr.send(formData)
                setTimeout(()=>{
                	this.status = 'finished'
                	this.valmsg = '已上传'
                	this.btnVal = '完成'
                	this.dis = true
                },1000)

                /*xhr.onload = () => {
                    this.uploading = false
                    if (xhr.status === 200 || xhr.status === 304) {
                        this.status = 'finished'
                        console.log('upload success!')
                    } else {
                        console.log(`error：error code ${xhr.status}`)
                    }
                }*/
            },
            beforeAvatarUpload(file) {   
      				var testmsg=file[0].name.substring(file[0].name.lastIndexOf('.')+1)                 
      				const extension = testmsg === 'jpg'  
      				const extension2 = testmsg === 'png'  
      				const isLt2M = file[0].size / 1024 / 1024 < 10  
      				if(!extension && !extension2) {  
      				  this.someObject = Object.assign({}, this.someObject, { message: '上传文件只能是 jpg、png格式!', type: 'warning' }) 
      				}  
      				if(!isLt2M) {   
      				  this.someObject = Object.assign({}, this.someObject, { message: '上传文件大小不能超过 10MB!', type: 'warning' }) 
      				}  
      				return extension || extension2 && isLt2M
            } ,
            remove(index) {
                this.files.splice(index, 1)
                this.someObject = Object.assign({}, this.someObject, { message: '', type: '' }) 
                this.dis = false
                this.valmsg = '未上传'
                this.btnVal = '上传'
            },
            fileChanged() {
                const list = this.$refs.file.files
                for (let i = 0; i < list.length; i++) {
                    if (!this.isContain(list[i])) {
                        const item = {
                            name: list[i].name,
                            size: list[i].size,
                            file: list[i]
                        }
                        this.html5Reader(list[i], item)
                        this.files.push(item)
                    }
                }
                this.$refs.file.value = ''
            },
            // 将图片文件转成BASE64格式
            html5Reader(file, item){
            	console.log(file,2222)
            	let img = new Image();
            	// 缩放图片需要的canvas
                const reader = new FileReader()
                reader.onload = (e) => {
                    	this.$set(item, 'src', e.target.result)
                }
                reader.readAsDataURL(file)
            },
            isContain(file) {
              return this.files.find((item) => item.name === file.name && item.size === file.size)
            },
            uploadProgress(evt) {
                const component = this
                if (evt.lengthComputable) {
                    const percentComplete = Math.round((evt.loaded * 100) / evt.total)
                    component.percent = percentComplete / 100
                } else {
                    console.warn('upload progress unable to compute')
                }
            }
        }
    }
</script>
<style type="text/css">
    @import '../assets/upload.css'
</style>
