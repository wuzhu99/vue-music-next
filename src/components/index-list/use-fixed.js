/*
 * @Author: wuz
 * @Date: 2021-06-07 23:41:00
 * @LastEditTime: 2021-06-08 15:33:16
 * @FilePath: /vue-music-next/src/components/index-list/use-fixed.js
 */
import { ref, watch, nextTick, computed } from 'vue'
export default function useFixed(props) {
  const TITLE_HEIGHT = 30
  const groupRef = ref(null)
  const listHights = ref([])
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const distance = ref(0)

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return ''
    }
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })

  const fixedStyle = computed(() => {
    const distanceVal = distance.value
    const diff =
      distanceVal > 0 && distanceVal < TITLE_HEIGHT
        ? distanceVal - TITLE_HEIGHT
        : 0
    return { transform: `translate3d(0,${diff}px,0)` }
  })

  watch(
    () => props.data,
    async () => {
      await nextTick()
      calculate()
    }
  )

  watch(scrollY, y => {
    const listHeightsVal = listHights.value
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const heightTop = listHeightsVal[i]
      const heightBottom = listHeightsVal[i + 1]
      if (y >= heightTop && y <= heightBottom) {
        currentIndex.value = i
        distance.value = heightBottom - y
      }
    }
  })

  function calculate() {
    // 获取每个标题的高度范围
    const list = groupRef.value.children
    const listHeightsVal = listHights.value
    let height = 0

    listHeightsVal.length = 0
    listHeightsVal.push(height)

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHeightsVal.push(height)
    }
  }

  function onScroll(pos) {
    scrollY.value = -pos.y
  }

  return {
    groupRef,
    onScroll,
    fixedTitle,
    currentIndex,
    fixedStyle
  }
}
