<!--
 * @Author: wuz
 * @Date: 2021-06-07 01:31:41
 * @LastEditTime: 2021-06-08 09:18:46
 * @FilePath: /vue-music-next/src/views/singer.vue
-->
<template>
  <div class="singer" v-loading="!singers.length">
    <IndexList :data="singers"></IndexList>
  </div>
</template>

<script>
import IndexList from '@/components/index-list/index-list.vue'
import { getSingerList } from '@/service/singer'
export default {
  components: {
    IndexList
  },
  data() {
    return {
      singers: []
    }
  },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
    console.log(result)
  }
}
</script>

<style>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
