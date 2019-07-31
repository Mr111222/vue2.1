import get from 'lodash/get'
import ElTab from './tab.vue'
import ElTabItem from './item.vue'

ElTab.install = function (Vue, options = {}) {
  if (!options.scoped) {
    Vue.component(options.name || ElTab.name, ElTab)
    Vue.component(get(options, 'children.Item.name') || ElTabItem.name, ElTabItem)
  }
}
ElTab.Item = ElTabItem

export default ElTab