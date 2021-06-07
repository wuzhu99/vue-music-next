/*
 * @Author: wuz
 * @Date: 2021-06-07 16:57:22
 * @LastEditTime: 2021-06-07 17:06:51
 * @FilePath: /vue-music-next/src/components/base/no-result/directive.js
 */
import NoResult from './no-result'
import createLoadingLikeDirective from '@/assets/js/create-loading-like-directive'

const noResultDirective = createLoadingLikeDirective(NoResult)

export default noResultDirective
