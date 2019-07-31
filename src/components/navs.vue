<template>
  <div>
    <detail-header title="navs"></detail-header>
    <button @click="postFn">postFn</button>
    <button @click="getLogin">getLogin</button>
    <br>
    <button @click="getFn">getFn</button>
    <navH :dataSub="subObj"></navH>
    <navF :dataObj="dataObj.data"  @sendObj="getChild"></navF>

    <button @click="ajax1">ajax1</button>
    <br />
    <button @click="ajax2">ajax2</button>
    <br />
    <button @click="ajax3">ajax3</button>
    <br />
    <button @click="ajax4">ajax4</button>
    <br />
    <p>{{getM}}<---->{{getZ}}</p>
    <div class="box" ref="dragBox">
      <div ref="drag" class="boxDrage">拖拽</div>
    </div>
    <div class="upload" ref="upload">
      <i class="load" v-show = 'isLoad'></i>
      <ul class="uls">
        <li v-for="(i,index) in list" :class="i%2 === 0 ? 'odd' : 'even'">12345678{{i>10 ? 'new add' : ''}}</li>
      </ul>
    </div>
  </div>
</template>
<style type="text/css" lang="scss">
  .box{
    width:200px;
    height:200px;
    border:1px solid #ccc;
    position:relative;
    margin:10px auto;
    .boxDrage{
      position:absolute;
      left:0;
      top:0;
      width:50px;
      height:50px;
      background: pink;
      line-height: 50px;
      text-align: center;
      font-weight: bold;      
    }
  }
  .upload{
    width:200px;
    height:200px;
    margin:10px auto;
    overflow: hidden;
    text-align:center;
    line-height:20px;
    border:1px solid #ccc;
    overflow-y:scroll;
    .odd{
      color:deeppink;
    }
    .even{
      background:#45cbab;
    }
    .load{
      &:after{
        content: '';
        width:20px;
        height:20px;
        display: inline-block;
        border:1px solid #54adc6;
        border-radius: 50px;
        border-left:none;
        clear:both;
        animation: rotateFn .5s linear infinite;
      }
    }
  }

  @keyframes rotateFn{
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
</style>
 
<script>
import DetailHeader from '@/components/DetailHeader'
import navH from '@/components/commons/navs/navsh'
import navF from '@/components/commons/navs/navsf'
import axios from 'axios'
import $ from 'jquery'
import {getZero, getMoney} from './commons/common'



const apiType = {
  mobile:'手机',
  computer:'电脑',
  car:'汽车',
  music:'音乐'
}
export default {
  name: 'navs',
  data () {
    return {
      dataObj: {
        "errCode": "00000",
        "errMsg": "",
        'data':[{'displayName':'我要开卡'},{'displayName':'我要申请'},]
      },
      subObj:'',
      disX:'',
      disY:'',
      isLoad: false,
      timer:null,
      list:10,
      boxHeight:''
    }
  },
  components: {
    DetailHeader,
    navH,
    navF
  },
  computed:{
    heights () {
      return $('.uls').height()
    },
    getM (){
      return getMoney(1000)
    },
    getZ () {
      return getZero(9)
    }
  },
  mounted (){
    this.$refs.drag.addEventListener('touchstart',this.onTouchStart.bind(this))
    this.$refs.drag.addEventListener('touchmove',this.onTouchMove.bind(this))
    this.$refs.drag.addEventListener('touchend',this.onTouchEnd.bind(this))
    this.$refs.upload.addEventListener('scroll',this.onScroll.bind(this))
  },
  methods: {
    //touch begin
    onTouchStart(e) {
      this.disX = e.changedTouches[0].clientX-this.$refs.drag.offsetLeft
      this.disY = e.changedTouches[0].clientY-this.$refs.drag.offsetTop
    },
    onTouchMove (e) {
      let resultX = e.changedTouches[0].clientX-this.disX
      let resultY = e.changedTouches[0].clientY-this.disY
      let left,top

      if(resultX<=0){
        left = 0
      }else if(resultX>150){
        left = 150
      }else{
        left = resultX
      }


      if(resultY<=0){
        top = 0
      }else if(resultY>150){
        top = 150
      }else{
        top = resultY
      }

      this.$refs.drag.style.left = left+'px'
      this.$refs.drag.style.top = top+'px'
    },
    onTouchEnd(){
      this.$refs.drag.removeEventListener('touchstart',null)
      this.$refs.drag.removeEventListener('touchmove',null)
      this.$refs.drag.removeEventListener('touchend',null)
    },
    //touch end
    onScroll () {
      const _this = this.$refs.upload
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(_this.scrollTop === 0){
        this.isLoad = true
        this.timer = setTimeout(()=>{
          this.isLoad = false
          this.list+=10
        },2000)
      }

    },
    getChild (x) {
     this.subObj = x
    },
    postFn () {
      let data = {name: 'asdasdasd'} // 参数默认
      this.getPostDataFn(data)
    },
    getFn () {
      this.getDataFn()
    },
    getPostDataFn (datas) {
      this.$http.post('/posts',datas)
          .then(res=>{
            console.log(res.data,'post')
          })
    },
    getLogin(){
      this.$http('/login').then(res=>{
        console.log(res, 'login')
      })
    },
    getDataFn(){
      let name="zz"; //参数默认
      this.$http(`/goods`,{
        params:{
          name: 'zz'
        }
      })
      .then(res=>{
        if (res.status === 200){
          console.log(res.data,'get')
        }
      })
    },
    getAjax(apiName,params){
        let obj = {};
        obj.apiName = apiName;
        obj.params = params;
        if(apiType[apiName]){
          console.log(`${apiType[apiName]}接口请求成功`)
          switch(apiName){
            case 'mobile' :
              return {
                name:'NOKIA',
                price:'1999',
                since:'2018',
                url:`api/${apiName}`
              }
            break;
            case 'music' :
            return {
              contury:'USA',
              name:'LadyGaga',
              age:'30',
              url:`api/${apiName}`
            }
            break;
            case 'computer' :
            return {
              contury:'USA',
              name:'Apple',
              model:'mac pro',
              url:`api/${apiName}`
            }
            break;
            case 'car' :
            return {
              name:'宝马',
              countey:'Germany',
              url:`api/${apiName}`
            }
            break;
          }
          
        }else{
          throw new Error(`cant resolve ${apiName}`)
        }
    },
    ajax1(){
      let datas = this.getAjax('mobile',{
        mobilePrice:'1999',
        mobileModal:'NOKIA 6'
      })
      if(datas){
        console.log(datas)
      }else{
        console.log(`解析接口失败`)
      }
    },
    ajax2(){
      let datas = this.getAjax('music',{
        singer:'LadyGaga',
        miusicName:'PoferFace'
      })
      if(datas){
        console.log(datas)
      }else{
        console.log(`解析接口失败`)
      }
    },
    ajax3(){
      let datas = this.getAjax('car',{
        name:'BMW',
        price:'$40000'
      })
      if(datas){
        console.log(datas)
      }else{
        console.log(`解析接口失败`)
      }
    },
    ajax4(){
      let datas = this.getAjax('computer',{
        name:'Apple',
        price:'￥12000'
      })
      if(datas){
        console.log(datas)
      }else{
        console.log(`解析接口失败`)
      }
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>
