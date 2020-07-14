<template lang="html">
  <div class="container">
    <detail-header title="主页" isBackBtn />
    <div class="content">

      <ul class="cont-ul">
        <list v-for="(item,index) in list" :key="index" :price="item.price" :title="item.title" :img="item.img" :id="item.id"></list>
      </ul>
      <el-checkbox v-model="checked" @change="get">备选项</el-checkbox>
    </div>
    <div>
      <!-- <el-upload
        class="upload-demo"
        ref="upload"
        action="http://localhost:3000/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload> -->
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
    <common-footer></common-footer>
  </div>
</template>

<script>
import DetailHeader from '@/components/DetailHeader'
import CommonFooter from '@/components/commonFooter'
import List from '@/components/list'
export default {
  data () {
      return {
          checked: false,
          items: [],
          items1: [
            {price:123,id:1,title:'苹果1'},
            {price:123,id:2,title:'苹果2'},
            {price:123,id:3,title:'苹果3'},
            {price:123,id:4,title:'苹果4'},
          ],
          list:[],
          options: {
            // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
            target: 'http://localhost:3000/upload',
            testChunks: false
          },
          attrs: {
            accept: 'image/*'
          }
      }
  },
  components: {
    DetailHeader,
    CommonFooter,
    List
  },
  methods: {
   submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    get (val) {
      console.log(val, 'xx')
    }
  },
  created () {
    this.$http.get('http://localhost:3000/datas').then((data) => {
      this.items = data.data;
    })
    this.list = this.items.length>0 ? this.items :this.items1.concat(this.items1)
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1.8rem;
    background: #246;
  }
  .cont-ul {
    padding-top: 0.5rem;
    &:after{
      content: '';
      display: block;
      clear: both;
      width: 0;
      height: 0;
    }
  }


  .uploader-example {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader-example .uploader-btn {
    margin-right: 4px;
  }
  .uploader-example .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
