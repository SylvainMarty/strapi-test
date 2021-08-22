import Vue from 'vue'
import VueRouter from 'vue-router'
import LeisureCenter from '../views/LeisureCenter.vue'
import Project from '../views/Project.vue'
import Location from '../views/Location.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/projects'
  },
  {
    path: '/leisure-centers',
    name: 'LeisureCenter',
    component: LeisureCenter
  },
  {
    path: '/projects',
    name: 'Project',
    component: Project
  },
  {
    path: '/locations',
    name: 'Location',
    component: Location
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
