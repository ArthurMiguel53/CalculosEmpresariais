import { createApp } from 'vue'
import main from './viewstructure.vue'
import './registerServiceWorker'
import router from './router'

createApp(main).use(router).mount('#app')
