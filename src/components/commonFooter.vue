<template lang="html">
  <div class="footer zz">
    <ul class="footer-cont">
        <li><router-link to ="/zz">zz</router-link></li>
        <li><router-link to ="/mixin">mixin</router-link></li>
        <li><router-link to ="/vuex">vuex</router-link></li>
        <li><router-link to ="/mock">mock</router-link></li>
        <li><router-link to ="/scss">scss</router-link></li>
        <li><router-link to ="/fun">Fun</router-link></li>
        <li><router-link to ="/pug">Pug</router-link></li>
        <li><router-link to ="/com">Com</router-link></li>
        <li><router-link to ="/md">Md</router-link></li>
    </ul>
     <ul class="footer-cont">
        <li><router-link to="/slo">Slots</router-link></li>
        <li><router-link to="/render">Render</router-link></li>
        <li><router-link to="/uploads">Uploads</router-link></li>
        <li><router-link to="/xx">xx</router-link></li>
        <li><router-link to="/routers">Routers</router-link></li>
        <li><router-link to="/navs">navs</router-link></li>
        <li><router-link to="/vuexfn">VuexFn</router-link></li>
        <li><router-link to ="/Lodash">Lodash</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    height: 100px;
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
    float: left;
    width: 25%;
    height: 50px;
    line-height: 50px;
    color: #ff8000;
    text-align: center;
  }
  .footer-cont li .router-link-active {
    background-color: red;
    color:white;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
