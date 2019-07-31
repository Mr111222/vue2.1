<template lang="html">
  <div class="container">
    <detail-header title="主页" isBackBtn />
    <div class="content">

      <ul class="cont-ul">
        <list v-for="(item,index) in list" :key="index" :price="item.price" :title="item.title" :img="item.img" :id="item.id"></list>
      </ul>
      <el-checkbox v-model="checked" @change="get">备选项</el-checkbox>
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
          list:[]
      }
  },
  components: {
    DetailHeader,
    CommonFooter,
    List
  },
  methods: {
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
</style>