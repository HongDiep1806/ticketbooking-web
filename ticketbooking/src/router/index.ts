import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FullTable from '@/components/FullTable.vue'
import DashBoard from '@/components/DashBoard.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: DashBoard
  },
  {
    path: '/table',
    name: "FullTable",
    component: FullTable
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
