<!--
 * @Author: wuz
 * @Date: 2021-06-07 16:57:22
 * @LastEditTime: 2021-06-07 23:29:24
 * @FilePath: /vue-music-next/src/components/base/no-result/no-result.vue
-->
<template>
  <div class="no-result" ref="rootRef">
    <div class="no-result-content">
      <div class="icon"></div>
      <p class="text">{{ title }}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'no-result',
  data() {
    return {
      title: '抱歉，没有结果'
      // minHeight: '200px'
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
.no-result {
  position: relative;
  margin-top: 50%;
  margin-left: 50%;
  transform: translate3d(-50%, -50%, 0);
  .no-result-content {
    text-align: center;
    .icon {
      width: 86px;
      height: 86px;
      margin: 0 auto;
      @include bg-image('no-result');
      background-size: 86px 86px;
    }
    .text {
      margin-top: 30px;
      font-size: $font-size-medium;
      color: $color-text-d;
    }
  }
}
</style>
