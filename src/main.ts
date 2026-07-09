import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import './style.css'
import App from './App.vue'
const app = createApp(App)
app.use(createPinia())
const head = createHead()
app.use(head)
app.mount('#app')
