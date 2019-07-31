<template>
	<div class='zz'>
		<detail-header title="sass" />
		<div class="box">
				<div class="nax">
					<p>哈哈</p>
					<p>哈哈</p>
					<p>哈哈</p>
					<p>哈哈</p>
				</div>
				<div class="nav">
					<ul>
						<li><a href="#javascript:;">xxx</a></li>
						<li><a class="xx" href="#javascript:;">zzz</a></li>
						<li><a href="#javascript:;">xxx</a></li>
						<li><a href="#javascript:;">sss</a></li>
					</ul>
					<ul>
						<li><a href="#javascript:;">xxx</a></li>
						<li><a href="#javascript:;">zzz</a></li>
						<li><a href="#javascript:;">xxx</a></li>
						<li><a href="#javascript:;">sss</a></li>
					</ul>
				</div>
				<div class="main">
					我是sass
				</div>
				<div class="pages">
					<pageing 
						:allPage="allPage" 
						:pageSize="pageSize"  
						:currentPage="currentPage" 
						:currentChange="toPage"
					></pageing>
				</div>
			</div>
			<!-- notice组件 -->
			<div>
				<ulss 
					:list="list"  
					title="我是标题"
					titlecolor="#ccc"
					titlesize="20px"
					isBorder 
					time  
					colors="red" 
					titleicon='icon-koushao'
					listicon="icon-nanxing"
					></ulss>	
			</div>	

			<!--hint组件 -->
			<div>
				<hint 
					:list="list1"
					title="我是hint组件"
				></hint>
			</div>

			<!--input组件 -->
			<div>
				<inputs @vals="getValFn"></inputs>
			</div>
		<Footer/>
	</div>
</template>
<style type="text/css" media="screen" lang="scss" scoped>
	@import '../assets/common.scss';

	.box{
		width:100%;
	}
	.nav {
		height:4rem;
		border:1px solid #ccc;
		ul{
			display:flex;
			li{
				text-align:center;
				line-height:2rem;
				flex:1;
				float:left;
				a{
					&:hover { text-decoration: underline; }
					&.xx{
						color:red;
					}
				}
				&-del{
					color:blue;
				}
			}
		}
	}
	.main{
		height:4rem;
		color:$border-color;
		background:$border-color;
		text-align:center;
		line-height:4rem;
		//@include bgs(20px);
		@include border-line(1px,bottom);
	}
</style>


<script>
import DetailHeader from '@/components/DetailHeader'
import Footer from '@/components/commonFooter'
import pageing from '@/components/pags'
import Vue from 'vue'

Vue.component('ulss', {
	template:`
		<div>
			<div class="titles">
				<h3 :style="titlestyle">{{title}}</h3>
				<i class="iconfont icontitle" 
				   :class="titleicon"> 
				</i>
			</div>
				
			<div class="uls">
				<ul>
					<li v-for="(item,index) in list" 
						:class="times" 
						:style="{'border-bottom':
								isBorder 
								? 
								'1px solid #ccc'
								:
								'none',
								'border-color':colors
								}">
						
						<router-link to="/app/data">
							<i class="iconfont" 
								:class="listicon"
								v-show="times==='isTime' ? false : true">
							</i>
							{{item.content}}
						</router-link>
						<span>
							<i class="iconfont" 
								:class="listicon"
								v-show="times==='isTime' ? true : false">
							</i>
							{{item.time}}
						</span>
					</li>
				</ul>
			</div>
		</div>

	`,
	props:{
		title:{
			type:String,
			required:true
		},
		titlecolor:{
			type:String
		},
		titlesize:{
			type:String
		},
		list:{
			type:Array
		},
		isBorder:{
			type:Boolean,
			default:false
		},
		time:{
			type:Boolean,
			default:false
		},
		colors:{
			type:String,
			default:'#ccc'
		},
		titleicon:{
			type:String
		},
		listicon:{
			type: String,
			default:''
		}

	},
	computed:{
		times(){
			return this.time ? 'isTime' : 'noTime'
		},
		titlestyle() {
			var obj = {}
			obj.color = this.titlecolor
			obj.fontSize = this.titlesize
			return obj
		}
	}
})

Vue.component('hint', {
	template:`
		<div class="hint" stylt="overflow-x:hidden;">
			<div class="hint-bg" :style="{background:bg,color:colors}">
				<div class="hint-title">
					<h2 :style="{fontSize:titlesize}">{{title}}</h2>
				</div>
				<div class="hint-list" ref='uls'>
					<ul> 
						<li
							v-show="index<nums"
							:style="{fontSize:listsize}"
							ref="lis"
							v-for="(item,index) in list"
							:key="index">
							<p>
								{{item.content}}
								<span v-if="item.spe">
									<a :href="item.spe.url" :class="item.spe.cla">{{item.spe.val}}</a>
								</span>
								
								<span v-if="item.hel">
									<a :href="item.hel.url" :class="item.hel.cla">{{item.hel.val}}</a>
								</span>
							</p>
							
						</li>
					</ul>
				</div>
			</div>
			<div class="tip-more-container" @click="isShow(list)" v-if="list.length>2">
			      <span class="tip-more">{{defaultVal}}</span>
			</div>
		</div>
	`,
	data(){
		return {
			isHide:false,
			liHeight:'',
			defaultVal:"更多",
			len:2,
			nums:2
		}
	},
	props:{
		list:{
			type:Array,
			required:true
		},
		title:{
			type:String,
			required:true
		},
		titlesize:{
			type:String
		},
		bg:{
			type:String,
			default:"#faf3ee"
		},
		colors:{
			type:String,
			default:"#988b83"
		},
		listsize:{
			type:String,
			default:'14px'
		}
	},
	methods:{
		isShow(list) {
			this.nums = list.length;
			this.isHide = !this.isHide
			var height = this.$refs.uls.offsetHeight
			if(this.isHide){
				this.$refs.uls.style.overflow = ''
				this.$refs.uls.style.height = 'auto'
				this.defaultVal = '收起'
			}else{
				this.nums = 2
				this.$refs.uls.style.overflow = 'hidden'
				this.defaultVal = '更多'
			}
		}
	},
	created(){
		this.$nextTick(()=>{
			this.$refs.uls.style.height = this.liHeight
			this.$refs.uls.style.overflow = 'hidden'
		})
	},
	mounted() {
		//this.liHeight = this.$refs.lis[0].offsetHeight*2+'px';
	}
	
})

Vue.component('inputs', {
	template:`
	<div>
		<input tupe="text" v-model="vals" @blur="blurFn" @focus="focusFn" />
		<span>{{Dsvals}}</span>
	</div>
	`,
	data(){
		return {
			vals:'',
			Dsvals:''
		}
	},
	methods:{
		blurFn(e){
			let num = parseFloat(e.target.value)
			if(num){
				this.vals = this.moneys(num)
				this.Dsvals = this.toUpper(num)
				this.$emit('vals',this.vals)
			}	
		},
		focusFn(){
			this.vals ? 
			this.vals = this.vals.replace(/\,/g,'')
			 : 
			''
		},
		smalltoBIG(n){    
	   			        var fraction = ['角', '分'];    
	   			        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];    
	   			        var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ];    
	   			        var head = n < 0? '欠': '';    
	   			        n = Math.abs(n);    
	   			      
	   			        var s = '';    
	   			      
	   			        for (var i = 0; i < fraction.length; i++){    
	   			            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');    
	   			        }    
	   			        s = s || '整';    
	   			        n = Math.floor(n);    
	   			      
	   			        for (var i = 0; i < unit[0].length && n > 0; i++){    
	   			            var p = '';    
	   			            for (var j = 0; j < unit[1].length && n > 0; j++){    
	   			                p = digit[n % 10] + unit[1][j] + p;    
	   			                n = Math.floor(n / 10);    
	   			            }    
	   			            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')  + unit[0][i] + s;    
	   			        }    
	   			        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');    
	   	},
	   	toUpper (value) {
	   	      if (value === '') return '零元整'
	   	      let amt = value
	   	      let intPos
	   	      let strOutput = ''
	   	      let strUnit = '仟佰拾万仟佰拾亿仟佰拾万仟佰拾元角分'
	   	      amt = !amt ? '000' : amt + '00'
	   	      intPos = amt.indexOf('.')
	   	      if (intPos >= 0) {
	   	        amt = amt.substring(0, intPos) + amt.substr(intPos + 1, 2)
	   	      }
	   	      strUnit = strUnit.substr(strUnit.length - amt.length)
	   	      for (let i = 0; i < amt.length; i++) {
	   	        strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(amt.substr(i, 1), 1) + strUnit.substr(i, 1)
	   	      }
	   	      return strOutput
	   	        .replace(/零[仟佰拾]/g, '零')
	   	        .replace(/零{2,}/g, '零')
	   	        .replace(/零([亿|万])/g, '$1')
	   	        .replace(/亿零{0,3}万/, '亿')
	   	        .replace(/零+元/, '元')
	   	        .replace(/零角零分$/, '整')
	   	        .replace(/角零分$/, '角')
	   	        .replace(/^元/, '零元')
	   	 },
	   	moneys(x){
	   		return x.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,'$1,')
	   	},
	}
})

export default {
	data(){
		return {
			allPage: 12,
			total: 20,
			isBorder:true,
			isColor:'red',
			currentPage: 1,
			pageSize: 10,
			list:[
				{name:'z1',time:'2018-2-1',spe:{url:'www.xxx.com', val:'95588',cla:"spe"},hel:{url:'wwww.baidu.com',val:'点击查看帮助1'}, content:'我是文章1',spe:'95588',hel:"点击帮助"},
				{name:'z2',time:'2018-2-2',content:'我是文章2'},
				{name:'z3',time:'2018-2-3',content:'我是文章3'},
				{name:'z4',time:'2018-2-1',spe:{url:'www.xxx.com', val:'95588',cla:"spe"},content:'我是文章4'},
				{name:'z5',time:'2018-2-2',hel:{url:'wwww.baidu.com',val:'点击查看帮助1',cla:"hel"},content:'我是文章5'},
				{name:'z1',time:'2018-2-1',spe:{url:'www.xxx.com', val:'95588',cla:"spe"},hel:{url:'wwww.baidu.com',val:'点击查看帮助2',cla:"hel"}, content:'我是文章6'},
			],
			list1:[
				{name:'z1',time:'2018-2-1',spe:{url:'www.bai.com', val:'95588',cla:"spe"},hel:{url:'wwww.baidu.com',val:'点击查看帮助1'}, content:'1.我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我',spe:'95588',hel:"点击帮助"},
				{name:'z2',time:'2018-2-2',content:'2.我是文章2我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我'},
				{name:'z3',time:'2018-2-3',content:'3.我是文章3'},
				{name:'z4',time:'2018-2-1',spe:{url:'www.bai.com', val:'95588',cla:"spe"},content:'4.我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我我'},
				{name:'z5',time:'2018-2-2',hel:{url:'wwww.baidu.com',val:'点击查看帮助1',cla:"hel"},content:'我是文章5'},
				{name:'z1',time:'2018-2-1',spe:{url:'www.bai.com', val:'95588',cla:"spe"},hel:{url:'wwww.baidu.com',val:'点击查看帮助2',cla:"hel"}, content:'我是文章1'},
			],
		}
	},
	components: {
		DetailHeader,
		Footer,
		pageing
	},
	beforeMount (){
			this.$parent.isNa = true		
			this.$parent.titleVal = `<p>我是sass</p>`
	},
	methods: {
    	toPage (pageNo) {
	      this.currentPage = pageNo
	    },
	    sizeChange (size) {
	      this.size = size
	    },
	    getValFn(val){
	    	alert(val)
	    }
  	},
  	computed:{
  		
  		times() {
  			var times = false;
  			return times ? 'isTime' :'noTime'
  		},
  		circles() {
  			var circle = true;
  			return circle ? 'isCircle' :'noCircle'
  		}
  	}
	
}
</script>

<style lang="scss" media="screen">
	@import '../assets/uls.scss'
</style>