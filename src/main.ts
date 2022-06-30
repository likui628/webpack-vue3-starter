import App from './App.vue'
import { router } from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./style.css"

const app = createApp(App)
app.use(router)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')