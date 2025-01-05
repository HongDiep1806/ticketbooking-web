import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FullTable from '@/components/FullTable.vue'
import DashBoard from '@/components/DashBoard.vue'
import MovieManagement from '@/components/MovieManagement.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: DashBoard
  },
  {
    path: '/table',
    name: "MovieTab;e",
    component: MovieManagement
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
