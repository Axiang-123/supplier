import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
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
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginVue.vue')
  },
  {
    path: '/',
    name: 'homeTo',
    component: () => import('../views/page/LayOut.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
