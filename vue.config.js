/*
 * @Author: wuz
 * @Date: 2021-06-07 10:06:19
 * @LastEditTime: 2021-06-07 11:40:21
 * @FilePath: /vue-music-next/vue.config.js
 */
const registerRouter = require('./backend/router')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app)
    }
  }
}
