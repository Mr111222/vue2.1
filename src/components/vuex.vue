<template>
	<div>
		<detail-header title="vuex"></detail-header>
		<p style="text-align:center">我是vuex</p>
		<button type="button" @click="add">增加</button>
		<p style="text-align:center">{{getAdd}}</p>
		<p style="text-align:center">{{xx}}</p>
		<button type="button" @click="ins">减少</button>
		<button type="button" @click="test()">测试函数</button>
		<div class="product">
		    <h4>商品信息</h4>
		    <table width="400" border="1" style="margin:0 auto">
		      <thead>
		        <tr>
		          <th>id</th>
		          <th>名称</th>
		          <th>价格</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody text-align:center>
		        <tr v-for='(shop,index) in shopList' :key="index" style="text-align:center">
		          <td>{{shop.id}}</td>
		          <td>{{shop.name}}</td>
		          <td>{{shop.price | getMoney}}</td>
		          <td>
		            <div @click='addToCart(shop)' style="text-align:center">购买</div>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		</div>
	
		<div class="product">
		   <h4>购物车</h4>
		   <p v-if="carBuys.length == 0" style="text-align:center">购物车为空^_^</p>
		    <table border="1" style="margin:50px auto;" v-else>
		      <thead>
		        <tr>
		          <th>id</th>
		          <th>名称</th>
		          <th>价格</th>
		          <th>数量</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody text-align:center>
		        <tr v-for='(shop,index) in carBuys' :key="index">
		          <td>{{shop.id}}</td>
		          <td>{{shop.name}}</td>
		          <td>{{shop.price | getMoney}}</td>
		          <td>{{shop.num}}</td>
		          <td>
		          	 <div @click='del(shop)' class="btn btn-info">删除</div>
		          </td>
		        </tr>
		      </tbody>
		    </table>
			<div>
				<p>数量 : {{getAllnum}}</p>
				<p>总价 : {{getAllprice}}</p>
				<p><button @click="clearAll">清空购物车</button></p>
			</div>
		  </div>
		<Footer></Footer>
	</div>
</template>
<style type="text/css" media="screen">
	button {
		width:40%;
		display: block;
		margin:10px auto;
		font-size: 20px;
	}
</style>
<script>
	import {mapActions, mapGetters, mapState} from 'vuex'
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	export default {
		name: 'vuex',
		data () {
			return {}
		},
		components: {
			DetailHeader,
			Footer
		},
		methods: {
			test () {
				console.log(this)
			},
			...mapActions(['add','ins','addToCart','clearAll','del'])

		},
		computed: {
			...mapGetters(['getAdd','shopList','carBuys','getAllprice','getAllnum']),
			...mapState({
					xx: 'Ï'
			})
		}
	}
</script>