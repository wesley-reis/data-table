import { createRouter, createWebHistory } from 'vue-router'
import Components from '../views/Componentes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Components
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
