import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/skill',
      name: 'skill',
      component: () => import(/* webpackChunkName: "about" */ './views/Skill.vue')
    },
    {
      path: '/mycode',
      name: 'mycode',
      component: () => import(/* webpackChunkName: "about" */ './views/Mycode.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import(/* webpackChunkName: "about" */ './views/Work.vue')
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: () => import(/* webpackChunkName: "about" */ './views/Warehouse.vue')
    },
    {
      path: '/msg',
      name: 'msg',
      component: () => import(/* webpackChunkName: "about" */ './views/Msg.vue')
    }
  ]
})
