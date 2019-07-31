<template>
  <div>
    <div class="footer">
      <ul class="footer-cont">
       <li v-for="i,index in dataObj" :key="index" @click="getList(i.children)">{{i.displayName}}</li>
      </ul>
    </div>
  </div>
</template>
<style type="text/css" media="screen" scoped lang="scss">
  .footer {
    height: 44px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
    ul {
      display:flex;
    }
  }
  .footer-cont li {
    flex:1;
    line-height: 44px;
    font-size: 20px;
    color: #ff8000;
    text-align: center;
  }  
</style>  
<script>
export default {
	name: 'navf',
	props:['dataObj'],
	methods: {
		getList(obj){
			this.$emit('sendObj',obj)
		}
	}
}
</script>