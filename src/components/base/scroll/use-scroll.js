/*
 * @Author: wuz
 * @Date: 2021-06-07 13:50:24
 * @LastEditTime: 2021-06-07 14:10:47
 * @FilePath: /vue-music-next/src/components/base/scroll/use-scroll.js
 */
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)
  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })
  })
  onUnmounted(() => {
    scroll.value.destroy()
  })
  return { scroll }
}
