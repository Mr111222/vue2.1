<template>
	<div class="mix">
		<detail-header title="Lodash" />
		<main>
			<button @click="getLodash">getLodash</button>
		</main>
		<main>
			<p class="ps">123456788</p>
		</main>
		<Footer />
	</div>
</template>
<script>
	import DetailHeader from '../components/DetailHeader'
	import Footer from '../components/commonFooter'
	import _ from 'lodash'
	export default {
		name:'loda',
		data () {
			return {
				users: [
				  { 'user': 'barney',  'active': false },
				  { 'user': 'fred',    'active': false },
				  { 'user': 'pebbles', 'active': true },
				  { 'user': 'zz', 'active': false }
				]
			}
		},
		methods:{
			getLodash () {
				console.log(_)
			}
		},
		components:{
			Footer,
			DetailHeader
		},
		created () {
			// let _index0 = _.findIndex(this.users, function(o) { return o.user == 'zz'; }) //返回下标值
			// let _index1 = _.get(this.obj,'zz')
			// console.log(_index2,333) 
		}
	}
</script>