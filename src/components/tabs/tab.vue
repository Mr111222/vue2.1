<template>
  <div class="el-tab">
    <div class="el-tabs" :class="{ 'el-tab-scrollable': scrollable }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'el-tab',
  props: {
    // 是否支持滑动
    scrollable: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  watch: {
    index () {
      this.changeTab(this.$children, {item: this.$children[this.index], current: this.index})
    }
  },
  mounted () {
    this.changeTab(this.$children, {item: this.$children[this.index], current: this.index})
  },
  methods: {
    changeTab (child, event) {
      child.forEach(child => {
        let name = child.$options.name
        if (name === 'el-tabs') {
          child.clickTab(child.$parent.$children.indexOf(child) === event.current, this.color)
        }
      })
    },
    emitEvent (event) {
      console.log(event, 'event')
      this.changeTab(this.$children, event)
      this.$emit('update:index', event.current)
    }
  }
}
</script>


























<style type="text/css" lang="scss">

  $primary: #dc2335;
  $info: #409eff;
  $success: #67c23a;
  $warning: #ff9900;
  $error: #f56c6c;
  $light: #f0f0f0;
  $gray: #888b91;

  $colorlist : (
    'primary': $primary,
    'info': $info,
    'success': $success,
    'warning': $warning,
    'error': $error,
    'light': $light,
    'gray': $gray);


  @each $i, $color in $colorlist {
      .el-selected-#{$i}{
        color: $color;
        border-bottom: solid 2px $color;
        height: 42px;
      }
  }
  
.el-tab {
  width: 100%;
  height: 44px;
  overflow: hidden;
  .el-tabs {
    position: relative;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    padding-bottom: 17px;
  }
  .el-tab-scrollable {
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    box-sizing: content-box;
  }
}



// el-tabs-item
el-tabs-item, .el-tabs-item {
  flex: 1;
  float: left;
}

.el-tabs-item {
  height: 44px;
  font-size: 14px;
  color: #666;
  background: #fff;
}

</style>

