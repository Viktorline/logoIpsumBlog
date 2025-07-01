export enum Routes {
  MAIN = '/main',
  BLOG = '/blog',
}

export interface NavigationItem {
  path: Routes
  name: string
  label: string
}

export interface RouteConfig {
  path: Routes
  name: string
  component: () => Promise<any>
}

export const navigationItems: NavigationItem[] = [
  {
    path: Routes.MAIN,
    name: 'Main',
    label: 'Главная',
  },
  {
    path: Routes.BLOG,
    name: 'Blog',
    label: 'Блог',
  },
]

export const routeConfigs: RouteConfig[] = [
  {
    path: Routes.MAIN,
    name: 'Main',
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: Routes.BLOG,
    name: 'Blog',
    component: () => import('@/pages/BlogPage.vue'),
  },
]
