import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vue-demo/*',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      redirect: '/vue-demo/',
    },
  ],
})

export default router
