<!--
 * @Author: wuz
 * @Date: 2021-06-08 16:38:20
 * @LastEditTime: 2021-06-08 16:38:22
 * @FilePath: /vue-music-next/src/views/singer-detail.vue
-->
<template>
  <div class="singer-detail">
    <music-list
      :songs="songs"
      :title="title"11
      :pic="pic"
      :loading="loading"
    ></music-list>
  </div>
</template>

<script>
import createDetailComponent from '@/assets/js/create-detail-component'
import { getSingerDetail } from '@/service/singer'
import { SINGER_KEY } from '@/assets/js/constant'

export default createDetailComponent(
  'singer-detail',
  SINGER_KEY,
  getSingerDetail
)
</script>

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
