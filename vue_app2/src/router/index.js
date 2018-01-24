import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
