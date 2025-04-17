import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('vue-demo'),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
