import { createRouter, createWebHistory } from 'vue-router'
import DataTable from '../views/DataTable.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DataTable
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
