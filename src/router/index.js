import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    component: () => import("@/views/category/Category")
  },
  {
    path: '/shopping',
    component: () => import("@/views/shopping/Shopping")
  },
  {
    path: '/profile',
    component: () => import("@/views/profile/Profile")
  },
  {
    path: '/detail',
    component: () => import("@/views/detail/Detail")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
