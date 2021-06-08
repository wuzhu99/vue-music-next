<!--
 * @Author: wuz
 * @Date: 2021-06-07 13:50:24
 * @LastEditTime: 2021-06-08 14:54:59
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
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const rootRef = ref(null)
    const scroll = useScroll(rootRef, props, emit)
    return { rootRef, scroll }
  }
}
</script>
