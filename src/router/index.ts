import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UserInfo from '../views/UserInfo.vue'
import Statistics from '../views/Statistics.vue'
import Record from '../views/Record.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/record'
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '/record',
    name: 'Record',
    component: Record
  },
]

const router = new VueRouter({
  routes
})

export default router
