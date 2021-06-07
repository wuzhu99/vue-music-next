/*
 * @Author: wuz
 * @Date: 2021-06-07 15:48:06
 * @LastEditTime: 2021-06-07 17:06:32
 * @FilePath: /vue-music-next/src/components/base/loading/directive.js
 */
import Loading from './loading'
import createLoadingLikeDirective from '@/assets/js/create-loading-like-directive'

const loadingDirective = createLoadingLikeDirective(Loading)

export default loadingDirective
