import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { routeConfigs, Routes } from '@/shared/constants/routes'

const routes: RouteRecordRaw[] = [
  ...routeConfigs.map((config) => ({
    path: config.path,
    name: config.name,
    component: config.component,
  })),
  {
    path: '/',
    redirect: Routes.MAIN,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
