import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/pages/BlogPage.vue'),
  },
  {
    path: '/',
    redirect: '/main',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
