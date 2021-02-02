import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sum',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'NewEntry',
    component: () => import(/* webpackChunkName: "core" */ '../components/InputField.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Overview.vue')
  },
  {
    path: '/dummy',
    name: 'Dummy',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dummy.vue')
  },
  { 
    path: "*", 
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
