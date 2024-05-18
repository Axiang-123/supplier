import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('../views/page/HomePage.vue')
  },
  {
    path: '/404',
    name: 'errorName',
    component: () => import('../views/404/ErrorValue.vue'),
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/LoginVue.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
