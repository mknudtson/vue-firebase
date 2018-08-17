import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home' // @/ meaning root directory / src fldr
import About from '@/components/About'
import ViewProfile from '@/components/ViewProfile' // import the component

Vue.use(Router) // similar to dragula set-up

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
    { // create the path, name and component to load
      path: '/profile/:user_id', // ":" indicates parameter - is implicitly a variable
      name: 'ViewProfile',
      component: ViewProfile
    }
  ]
})
