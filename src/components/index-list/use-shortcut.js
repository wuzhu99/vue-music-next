/*
 * @Author: wuz
 * @Date: 2021-06-07 23:41:00
 * @LastEditTime: 2021-06-08 14:51:03
 * @FilePath: /vue-music-next/src/components/index-list/use-shortcut.js
 */
import { computed, ref } from 'vue'
export default function useShortcut(props, groupRef) {
  const ANCHOR_HEIGHT = 18
  const touch = {}
  const scrollRef = ref(null)

  const shortcutList = computed(() => {
    return props.data.map(item => {
      return item.title
    })
  })
  function onShortcutTouchStart(e) {
    const anchorIndex = parseInt(e.target.dataset.index)
    touch.anchorIndex = anchorIndex
    touch.y1 = e.touches[0].pageY
    scrollTo(anchorIndex)
  }

  function onShortcutTouchMove(e) {
    touch.y2 = e.touches[0].pageY
    const delta = ((touch.y2 - touch.y1) / ANCHOR_HEIGHT) | 0
    const anchorIndex = touch.anchorIndex + delta
    scrollTo(anchorIndex)
  }

  function scrollTo(index) {
    if (isNaN(index)) {
      return
    }
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    const targetEl = groupRef.value.children[index]
    const scroll = scrollRef.value.scroll
    scroll.scrollToElement(targetEl, 0)
  }

  return {
    scrollRef,
    shortcutList,
    onShortcutTouchStart,
    onShortcutTouchMove
  }
}
