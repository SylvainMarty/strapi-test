import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LeisureCenter from '../views/LeisureCenter.vue'
import Project from '../views/Project.vue'
import Location from '../views/Location.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
