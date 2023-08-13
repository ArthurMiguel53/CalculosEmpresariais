import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import main from '../viewstructure.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: main
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
