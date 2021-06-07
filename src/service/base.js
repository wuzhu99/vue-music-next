/*
 * @Author: wuz
 * @Date: 2021-06-07 11:32:28
 * @LastEditTime: 2021-06-07 11:32:55
 * @FilePath: /vue-music-next/src/serves/base.js
 */
import axios from 'axios'

const ERR_OK = 0
const baseURL = '/'

axios.defaults.baseURL = baseURL

export function get(url, params) {
  return axios
    .get(url, {
      params
    })
    .then(res => {
      const serverData = res.data
      if (serverData.code === ERR_OK) {
        return serverData.result
      }
    })
    .catch(e => {
      console.log(e)
    })
}
