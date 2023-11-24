import './assets/main.css'

import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AuthenticationService from './services/AuthenticationService'

const app = createApp(App)

app.use(createPinia())
app.use(createMetaManager())
app.use(router)

app.provide<AuthenticationService>(
  AuthenticationService.SERVICE_NAME,
  new AuthenticationService(router)
)

app.mount('#app')
