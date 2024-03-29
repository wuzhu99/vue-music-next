/*
 * @Author: wuz
 * @Date: 2021-06-07 01:31:41
 * @LastEditTime: 2021-06-08 16:39:51
 * @FilePath: /vue-music-next/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () =>
      import('@/views/recommend' /* webpackChunkName: "recommend" */)
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('@/views/singer' /* webpackChunkName: "singer" */),
    children: [
      {
        path: ':id',
        component: () =>
          import(
            '@/views/singer-detail' /* webpackChunkName: "singer-detail" */
          )
      }
    ]
  },
  {
    path: '/top-list',
    name: 'Top-list',
    component: () =>
      import('@/views/top-list' /* webpackChunkName: "top-list" */)
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search' /* webpackChunkName: "search" */)
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
