<template>
  <div class="cb-paging">
    <select v-model="currentPageSize" v-if="total&&size!='mini'" @change="changeSize">
      <option :value="item" v-for="item in pageSizes" :key="item">{{item}}条/页</option>
    </select>
    <ul v-if="size!='mini'" :class="{'hasbackground':background,'smail': size=='smail'}">
      <li v-if="pageData.showFirst" @click="goTo(1)">{{prevText}}</li>
      <li v-for="(pn,index) in pageData.btns" :key="index" :class="{'active':pn===currentPage}" @click="goTo(pn)">{{pn}}</li>
      <li v-if="pageData.showLast" @click="goTo(pageData.allPage)">{{nextText}}</li>
    </ul>
    <slot name="info" :page-data="pageData" :page-size="pageSize" :change-page="outChange">
      <span>第 <input type="text" :value="pageData.localPage" @keyup="keyUp"> / {{pageData.allPage}} 页</span>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'CbPaging',
  props: {
    currentPage: { // 当前页码
      type: Number,
      default: 1
    },
    allPage: Number, // 总页数
    total: Number, // 总条数
    pageSize: { // 每页显示条数
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default () { return [10, 20, 50] }
    }, // 可选择的每页显示条数
    currentChange: Function, // 换页数
    sizeChange: Function, // 更换每页显示条数
    size: {
      type: String,
      default: 'normal' // 分页大小，normal, smail, mini
    },
    background: { // 显示背景
      type: Boolean,
      default: false
    },
    prevText: {
      type: String, // 上一页文字
      default: '<<'
    },
    nextText: {
      type: String, // 下一页文字
      default: '>>'
    }
  },
  data () {
    return {
      currentPageSize: this.pageSize,
      pageConfig: {
        range: {
          normal: [-3, 3],
          smail: [-2, 2],
          mini: false
        }
      }
    }
  },
  computed: {
    pageData () {
      const pageBtn = []
      let localPageNo = this.currentPage
      let maxPageNo
      let showFirst = true
      let showLast = true

      if (this.allPage) {
        maxPageNo = this.allPage
      } else if (this.total) {
        maxPageNo = Math.ceil(this.total / this.pageSize)
      } else {
        console.warn('缺少总页数设置')
        maxPageNo = 1
      }

      if (localPageNo < 1) localPageNo = 1
      if (localPageNo > maxPageNo) {
        localPageNo = maxPageNo
      }


      //控制显示按钮的数量
      let btnRange = this.pageConfig.range[this.size]
      if (btnRange) {
        for (let i = btnRange[0]; i <= btnRange[1]; i++) {
          let tlpn = localPageNo + i
          if (tlpn > 0 && tlpn <= maxPageNo) {
            pageBtn.push(tlpn)
          }
        }
      }
     

      if (pageBtn.indexOf(1) > -1) showFirst = false
      if (pageBtn.indexOf(maxPageNo) > -1) showLast = false
      return {
        btns: pageBtn,
        localPage: localPageNo,
        allPage: maxPageNo,
        showFirst,
        showLast
      }
    }
  },
  methods: {
    goTo (pageNo) {
      let localPageNo = pageNo
      if (this.currentPage === localPageNo) return
      const maxPageNo = this.allPage
      if (localPageNo > maxPageNo) localPageNo = maxPageNo
      if (localPageNo < 1) localPageNo = 1
      this.pageData.localPage = localPageNo
      this.currentChange(localPageNo)
    },
    outChange () {
      this.goTo(parseInt(this.pageData.localPage))
    },
    changeSize (e) {
      // console.log(e)
      this.sizeChange(this.currentPageSize)
    },
    keyUp (e) {
      const key = e.keyCode
      const val = parseInt(e.target.value)
      if (key === 38) {
        this.goTo(this.currentPage - 1)
        // this.prev()
      } else if (key === 40) {
        this.goTo(this.currentPage + 1)
        // this.next()
      } else if (key === 13) {
        let page = 1
        if (val > this.allPages) {
          page = this.allPages
        } else if (val <= 0) {
          page = 1
        } else {
          page = val
        }
        e.target.value = page
        this.goTo(page)
      }
    }
  }
}
</script>

<style type="text/css" lang="scss">
	.cb-paging {
	  height: 30px;
	  float: right;
	  margin-top: 8px;
	  clear: right;
	  height: 28px;
	  line-height: 28px;
	  input {
	    text-align: center;
	    border:1px solid #ddd;
	    color:#e8313e;
	    font-size:14px;
	    width:50px;
	    border-radius: 4px;
	  }
	  ul {
	    display: inline-block;
	    border:1px solid #ddd;
	    border-left:none;
	    li {
	      padding: 0 4px;
	      background: transparent;
	      vertical-align: top;
	      display: inline-block;
	      font-size: 13px;
	      min-width: 34px;
	      cursor: pointer;
	      box-sizing: border-box;
	      text-align: center;
	      margin: 0;
	      color:#e8313e;
	      border-left:1px solid #ddd;
	      &.active {
	        color:white;
	        background: #e8313e;
	        cursor: default;
	      }
	    }
	    &.hasbackground {
	      li {
	        margin: 0 5px;
	        background-color: #f4f4f5;
	        color: #606266;
	        min-width: 30px;
	        border-radius: 2px;
	        &.active {
	          background-color: #e8313e;
	          color: #fff;
	        }
	      }
	    }
	    &.smail {
	      li {
	        border-color: transparent;
	        font-size: 12px;
	        min-width: 22px;
	      }
	    }
	  }
	}
</style>