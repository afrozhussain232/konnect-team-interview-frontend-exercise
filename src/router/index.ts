import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PageHome.vue'),
    },
    {
      path: '/services/:id',
      name: 'ServiceDetails',
      component: () => import('../views/ServiceDetailsPage.vue'),
    },
  ],
})

export default router
