<!--
 * @Author: wuz
 * @Date: 2021-06-07 01:31:41
 * @LastEditTime: 2021-06-07 10:31:02
 * @FilePath: /vue-music-next/src/components/header/header.vue
-->
<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Sun Music</h1>
  </div>
</template>

<script>
export default {
  name: 'm-header'
}
</script>

<style scoped lang="scss">
.header {
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 32px;
    height: 32px;
    margin-right: 9px;
    @include bg-image('logo');
    background-size: 32px 32px;
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }
  .mine {
    position: absolute;
    top: 0;
    right: 0;
    .icon-mine {
      display: block;
      padding: 12px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
}
</style>
