import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home' // @/ meaning root directory / src fldr
import About from '@/components/About'
import ViewProfile from '@/components/ViewProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/profile/:user_id', // : to indicate parameter
      name: 'ViewProfile',
      component: ViewProfile
    }
  ]
})
