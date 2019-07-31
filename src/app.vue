<template>
  <div id="app">
    <Na v-show="isNa" :isVal="titleVal"></Na>  <!--  标题头控制,子组件通过this.$parent来进行控制 详情查看  fun.vue -->
    <div>
      <router-view /> 
    </div>
  </div>
</template>

<script>
  // import '@/assets/common.scss'
  import Na from '@/components/nana'
  export default {
    name: 'app',
    data() {
      return {
        isNa: false,
        titleVal: null
      }
    },
    components:{
      Na
    }
  };
</script>

<style type="text/css">
  *{
    margin:0;
    padding:0;
    list-style:none;
  }
</style>
