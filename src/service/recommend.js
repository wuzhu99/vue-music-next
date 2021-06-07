/*
 * @Author: wuz
 * @Date: 2021-06-07 11:33:12
 * @LastEditTime: 2021-06-07 11:38:53
 * @FilePath: /vue-music-next/src/service/recommend.js
 */
import { get } from './base'

export function getRecommend() {
  return get('/api/getRecommend')
}

export function getAlbum(album) {
  return get('/api/getAlbum', {
    id: album.id
  })
}
