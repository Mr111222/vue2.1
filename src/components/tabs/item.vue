<template>
  <div class="el-tabs-item" :class="colors" @click="tabChangeFn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'el-tabs',
  data () {
    return {
      selected: false,
      color: ''
    }
  },
  computed: {
    isInGroup () {
      let parent = this.$parent
      console.log(parent.$options.name)
      while (parent) {
        if (parent.$options.name !== 'el-tab') {
          parent = parent.$parent
        } else {
          this._tabGroupList = parent
          return true
        }
      }
      return false
    },
    colors () {
      return this.selected ? 'el-selected-' + this.color : ''
    }
  },
  methods: {
    clickTab (selected, color) {
      this.selected = selected
      this.color = color
    },
    tabChangeFn () {
      if (this.disabled) return
      this.$nextTick(() => {
        if (this.isInGroup) {
          let index = this._tabGroupList.$children.indexOf(this)
          this._tabGroupList.emitEvent({item: this, current: index})
        }
      })
    }
  }
}
</script>
