<!--
 * @Author: wuz
 * @Date: 2021-06-07 01:31:41
 * @LastEditTime: 2021-06-07 13:29:17
 * @FilePath: /vue-music-next/src/App.vue
-->
<template>
  <m-header></m-header>
  <tab></tab>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script>
import Header from '@/components/header/header'
import Tab from '@/components/tab/tab'
export default {
  components: {
    MHeader: Header,
    Tab
  }
}
</script>
<style lang="scss">
</style>
