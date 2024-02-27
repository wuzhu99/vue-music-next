<!--
 * @Author: wuz
 * @Date: 2021-06-07 15:47:29
 * @LastEditTime: 2021-06-08 16:27:16
 * @FilePath: /vue-music-next/src/components/base/loading/loading.vue
-->
<template>
  <div class="loading">
    <div class="loading-content">
      <img width="24" height="24" src="./loading.gif" />
      <p class="desc">{{ title }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'loading',
  setup() {
    const title = ref('正在载入...')

    function setTitle(title) {
      this.title = title
    }
    return {
      title,
      setTitle
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  .loading-content {
    text-align: center;
    .desc {
      line-height: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
}
</style>
