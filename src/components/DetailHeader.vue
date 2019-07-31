<template lang="html">
  <div class="head">
    <div class="header">
      <a href="javascript:;" class="go-back" @click="goBack" v-show="!isBackBtn">返回</a>
      <h4 class="header-cont">{{title}}<span v-show="isTitle" v-text="currentText"></span></h4>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.push({'path':'./'});
    }
  },
  props:{
    title:[String],
    isBackBtn:[Boolean],
    isTitle:[Boolean],
    currentText:[String]
  }
}
</script>

<style lang="scss" scoped>
  .head{
    height:40px;
  }
  .header{
    width:100%;
    height:40px;
    background-color: #fff;
    border-bottom: 2px solid #ccc;
    color:pink;
  }
  .header .go-back {
    width: 40px;
    height: 40px;
    text-align: center;
    color: #ccc;
    font-size: 20px;
    float: left;
    line-height: 40px;
    margin-left: 20px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .header .header-cont {
    text-align: center;
    line-height: 40px;
    font-size: 20px;
  }
</style>
