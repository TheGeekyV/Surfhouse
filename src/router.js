import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Product',
      name: 'product',
      component: () => import('./views/product.vue')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
