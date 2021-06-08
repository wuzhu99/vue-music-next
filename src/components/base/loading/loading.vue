<!--
 * @Author: wuz
 * @Date: 2021-06-07 15:47:29
 * @LastEditTime: 2021-06-07 23:57:55
 * @FilePath: /vue-music-next/src/components/base/loading/loading.vue
-->
<template>
  <div class="loading" ref="rootRef">
    <div class="loading-content">
      <img width="24" height="24" src="./loading.gif" />
      <p class="desc">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      title: '正在载入...'
    }
  },
  methods: {
    setTitle(title) {
      this.title = title
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: relative;
  margin-top: 50%;
  margin-left: 50%;
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
