<template>
	<div class="fun">
		<detail-header title="Com组件">	</detail-header>
		<div class="com">
			<p>我是cm</p>
			<names 
				query="age" 
				:list="list"
				@name="getName"
			></names>
			<names 
				query="sex" 
				:list="list"
				@name="getName"
			></names>
		</div>
		<router-link to="/tabs">Tabs</router-link>	
		<router-view></router-view>
		<div class="tabs">
			<tabs :data="data1" :columns="columns" stripe></tabs>	
		</div>
		<div>
			<pageing :allPage="allPage"  :currentPage="currentPage" :currentChange="toPage"></pageing>
		</div>
		<Footer/>
	</div>
</template>
<style type="text/css" lang="scss" media="screen">
	.com {
		marign-bottom:20px;
		.c-box{
			width:200px;
			height:200px;
			color:red;
			margin:auto;
			.ps{
				border:1px solid #456;
				height:44px;
				line-height:44px;
				text-align:center;
			}
			.lis {
				line-height: 40px;
				border-bottom:1px solid #ccc;
				a{
					width:100%;
					display:inline-block;
					text-aline:center;
					&:hover{
						background:red;
					}
				}
			}
		}
	}
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
<script>
	import Vue from 'vue' 
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import extend from 'lodash/extend'
	Vue.component('names', {
		template:`<div class="c-box">
				<p>主要是把选择的参数拼接到地址栏，然后自己在获取</p>
				<div>
					<p @click="clicks" class="ps">{{pp}}</p>
					<ul v-show="isSul">
						<li 
						class="lis"
						v-for="(item,index) in list" 
						:key="index" 
						@click="getLis(item)">
						<a href="javascript:;">{{item.name}}</a>
						</li>
					</ul>
				</div>
		</div>`,
		data:function (){
			return {
				msg:'1111111111111111111111',
				pp:'',
				isSul: false
			}
		},
		props:{
			query:[String],
			list:[Array]
		},
		methods:{
			clicks () {
				this.isSul = true;
			},
			getLis (item) {
				this.pp = item.name;
				this.$emit('name',item.name)
				this.isSul = false;
				var obj = {}
				if(this.query){
					obj[this.query] = item.name
				}
				
				var fin = extend({},this.$route.query,obj)
				this.$router.push({query:fin})
			}
			
		}
	})



	Vue.component('tabs',{
		template:`<div>
			<table border="1" width="300" style="margin:auto;">
				<thead>
					<tr>
						<th v-for="(item,index) in columns" :key="index">{{item.title}}</th>
					</tr>
				</thead>
				<tbody>
					<tr 
					v-for="(item,index) in data" 
					:key="index" 
					:style="{'background': index % 2 === 0 ? isColor : ''}"
					:class="index%2 === 0 ? 'ss' : 'xx'"
					>
						<th>{{item.id}}</th>
						<th>{{item.openId}}</th>
						<th>{{item.job}}</th>
					</tr>
				</tbody>
			</table>
		</div>`,
		data: function () {
			return {

			}
		},
		props:{
			columns:{
				type: Array,
				required: true
			},
			data:{
				type: Array,
				required: true
			},
			stripe: {
                type: Boolean,
                default: false
            },
		},
		methods: {
			change (){
				alert(12)
			}
		},
		computed: {
			isColor() {
				return this.stripe ? '#ccc' :'xxx'
			}
		}
	})


	Vue.component('pageing', {
		template:`
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
		`,
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
		data: function (){
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
		      // console.log('start', pageNo)
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
	})
	export default {
		name:'com',
		data () {
			return {
				list:[{name:"z1",age:1},{name:"z2",age:2},{name:"z3",age:3},{name:"z4",age:4},{name:"z5",age:5}],
				columns: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1:[],
				data: [
				        {
				            name: 'John Brown',
				            age: 18,
				            address: 'New York No. 1 Lake Park',
				            job: '工人',

				            
				        },
				        {
				            name: 'Jim Green',
				            age: 25,
				            address: 'London No. 1 Lake Park',
				            job: '老师',
				           
				        },
				        {
				            name: 'Joe Black',
				            age: 30,
				            address: 'Sydney No. 1 Lake Park',
				            job: '学生',
				           
				        },
				        {
				            name: 'Jon xx',
				            age: 26,
				            address: 'Ottawa No. 2 Lake Park',
				            job: '无业游民',
				           
				        },
				        {
				            name: 'Jon dd',
				            age: 29,
				            address: 'Ottawa No. 2 Lake Park',
				            job: '三和大神',
				           
				        },
				        {
				            name: 'Jon ss',
				            age: 40,
				            address: 'Ottawa No. 2 Lake Park',
				            job: '网友',
				           
				        },
				        {
				            name: 'Joe Black',
				            age: 30,
				            address: 'Sydney No. 1 Lake Park',
				            job: '学生',
				           
				        },
				        {
				            name: 'Jon ff',
				            age: 26,
				            address: 'Ottawa No. 2 Lake Park',
				            job: '无业游民',
				           
				        },
				        {
				            name: 'Jon dd',
				            age: 29,
				            address: 'Ottawa No. 2 Lake Park',
				            job: '三和大神',
				           
				        },
				        {
				            name: 'Jon bb',
				            age: 40,
				            address: 'Ottawa No. 2 Lake Park',
				            job: '网友',
				           
				        }
				],
				allPage: 10,
				total: 20,
				currentPage: 1,
				pageSize: 10
			}
		},
		components:{
			DetailHeader,
			Footer
		},
		created () {
			this.getusers(1)
		},
		beforeMount (){
			this.$parent.isNa = false
		},
		methods: {
			getName(name){
				console.log(name)
			},
			toPage (pageNo) {
			    this.getusers(pageNo)
			    this.currentPage = pageNo
			},
			sizeChange (size) {
			    console.log('size', size)
			    this.size = size
			},
			getusers(val){
				this.$http.post('https://www.liangzixiaoying.cn/users/list', {
				    pn:val
				})
				.then((response) => {
				   this.total =  response.data.extend.list.total //总条数
               	   //this.pageSize = response.data.extend.list.pageSize //每页显示的条数
               	   this.data1 = response.data.extend.list.list //每页数据
               	   this.allPage = response.data.extend.list.pages //总页数
				})  
		    }
		}
	}
</script>