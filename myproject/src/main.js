import Vue from 'vue' // rather than link remotely
import App from './App.vue'

// create global filter
Vue.filter('snippet', value => { // snippet being post.title
  if(!value || typeof(value) != 'string') return ''
  // we need a val - 1st tests whether there is any value at all
  // we need a str - 2nd tests whether it is a string value
  // if either of these unwanted cases, return empty str + break
  // otherwise... // slice out the first X chars and add a ...
  if (value[20] === ' ') {
    value = `${value.slice(0,19)}...`
  } else {
    value = `${value.slice(0,20)}...`
  } // prob not the most efficient way to do this
  return value // and pass them back
  // some are shorter because they're shorter than 20 chars.
})

new Vue({
  el: '#app', // control app element
  render: h => h(App) // h stands for html i think but renders whole thing - html, js, css
    // IMPORTANT
    // this takes App imported above and renders it to template - instaed of just writing in html - because for a whole app there will be a lot more html - and this html will be split up into vue files or vue component files
    // App.vue is one of these files - if you open it you see that there is a lot of html in it already
    // .vue extension = vue component file
    // h = > h(fileName) is an in-built(?) function from Vue.JS
})
