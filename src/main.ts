import { createApp } from 'vue'
import App from './App.vue'
import { setupAppProviders } from './app/providers'
import './shared/styles/global.css'

const app = createApp(App)
setupAppProviders(app)
app.mount('#app')
