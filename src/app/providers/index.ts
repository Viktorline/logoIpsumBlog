import { createPinia } from 'pinia'
import router from '../router'
import type { App } from 'vue'

export function setupAppProviders(app: App) {
  app.use(createPinia())
  app.use(router)
}
