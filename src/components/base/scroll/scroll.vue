<!--
 * @Author: wuz
 * @Date: 2021-06-07 13:50:24
 * @LastEditTime: 2021-06-07 14:05:52
 * @FilePath: /vue-music-next/src/components/base/scroll/scroll.vue
-->
<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import useScroll from './use-scroll'
import { ref } from 'vue'

export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const rootRef = ref(null)
    useScroll(rootRef, props)
    return { rootRef }
  }
}
</script>
