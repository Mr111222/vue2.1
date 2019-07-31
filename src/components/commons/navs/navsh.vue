<template>
  <div>
    <div class="main">
      <ul>
    			<li v-for="i,index in dataSub" :key="index"><a :href="i.pagePath">{{i.displayName}}</a></li>
      </ul>
    </div>
  </div>
</template>
<style type="text/css" media="screen" scoped lang="scss">
  .main{
    width:100%;
    ul{
      display:flex;
      li{
        flex:1;
        text-align:center;
        font-size:20px;
      }
    }
  }
</style>  
<script>
export default {
	name: 'navf',
	props:['dataSub']
}
</script>