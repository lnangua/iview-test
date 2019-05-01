import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menuLeft from '../pages/menu/menuLeft'
import login from '../pages/login/login.vue'
//import dragAndDrop from '../pages/demo/dragAndDrop'
//import l10 from '../pages/menu/111.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menuLeft',
      name: 'menuLeft',
      component: menuLeft
    },
    {
      path: '/',
      name: 'login',
      component: login
    }

  ]
})
