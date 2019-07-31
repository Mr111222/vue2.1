<template>
	<div>
		<detail-header title="mock服务"></detail-header>
		我是mock,<br />在控制台查看请求回的数据<br />
		{{fullname}}
		<button @click="changeName()">点击出发</button>
		<input type="text" v-model="vals" @blur="fns">
		<br />
		<ul>
			<li style="line-height: 20px; text-align: center;" :style="{'background':index%2 == 0 ? '#ccc' : 'pink'}" v-for="i,index in types" :key="index">{{i.typeName}}</li>
		</ul>
		<div>
			<Table 
				size="small" 
				stripe 
				:columns="columns" 
				:data="list">
			</Table>
			<Page 
				:total="total" 
				:page-size="pageSize" 
				@on-change="getList">
			</Page>	
		</div>
         
		<Footer />
	</div>
</template>
<script>
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import {queryFn} from '../components/es6'
	import axios from 'axios'
	var formData = new FormData();
	var opts = {
        method:"POST",   //请求方法
        body:formData,   //请求体
　　　　　headers: {
   　　　　 'Accept': 'application/json',
   　　　　 'Content-Type': 'application/json',
 　　　　 },
    }
	export default {
		data () {
			return {
				vals: '',
				pageIndex:1,
       			total:0,
       			pageSize:0,
       			value4:'',
				list:[],
				types: [],
				columns: [
		            {
		              type: "index",
		              width: 60,
		              align: "center",
		              title: "序号"
		            },
		        
		            {
		              title: "openId",
		              align: "center",
		              key:"openId"
		            },
		            {
		              title: "注册时间",
		              align: "center",
		              key: "createTimeStr",
		            }
		      	],
		      	firstname: 'xx',
		      	lastname: 'yy'

			}
		},
		components:{
			DetailHeader,
			Footer
		},
		methods:{
			async fns(){
				// await queryFn({tableName:this.vals})
			},
			//分页接口
			getusers(val){
				this.$http.post('https://www.liangzixiaoying.cn/users/list', {
				    pn:val
				})
				.then((response) => {
				   this.total =  response.data.extend.list.total
               	   this.pageSize = response.data.extend.list.pageSize
               	   this.list = response.data.extend.list.list
				})  
		    },
		    getList (val){
		        this.getusers(val);
		    },
		    //改变fullname，触发set
		    changeName () {
		    	this.fullname = 'helloword'
		    }


		},
		async created () {
			await this.getusers(1);

			// fetch get
			let ps = await fetch('https://www.liangzixiaoying.cn/mingNum/typeList')
			let {extend} = await ps.json()
			this.types = extend.mingNumberTypes


			// fetch post
			let ss = await fetch('https://www.liangzixiaoying.cn/meiJinnManage/list', {
				method:"POST", 
				body:JSON.stringify({pn:1}),    
				headers: { 
					'Content-Type': 'application/json'
				}
			})

	    let meiJinnManage = await ss.json()
			console.log(meiJinnManage, 'ssss')

		},
		computed:{
			fullname:{
				get: function () {
					return this.firstname +'---->'+ this.lastname
				},
				set: function (news) {
					var names = news.split(' ');
					this.firstname = names[0];
					this.lastname = names[names.length-1]
				}
			}
			
		}
	}
</script>