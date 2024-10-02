import { createApp } from 'vue'
import App from './App.vue'
import store from './config/store'
import router from './config/routes'

createApp(App).use(store).use(router).mount('#app')
