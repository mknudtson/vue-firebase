<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <Blogs />
    <AllFriends :friends="friends" @delete="deleteFriend" /> <!-- custom event defined in child component - deleteFriend function defined in methods below -->
    <OnlineFriends :friends="friends" />
    <!-- such is step 1 of passing down props -->
    <!-- components must receive them as well -->
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Blogs from './Blogs'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'

export default {
  name: 'app',
  components: {
    Navbar,
    Blogs,
    OnlineFriends,
    AllFriends
  },
  data () {
    return {
      title: 'My first Vue app, wooo :)',
      friends: [ // want to output all to template
        { name: 'Mario', online: true },
        { name: 'Luigi', online: false },
        { name: 'Toad', online: true },
        { name: 'Princess', online: false }
      ]
    }
  },
  methods: {
    deleteFriend(payload){ // by convention
      // console.log(payload) // just testing!
      this.friends = this.friends.filter(friend => { // updating friends
        return friend.name !== payload.name // basically, filter loops through friends and returns them if they equal true to this statement, i.e. if it is true that the name property of the friend object is NOT equal to the name property of the "payload" object (the one that's been clicked on)
          // use filter to create a new array, then assign this new array as the new value of the binding
          // this seems like a cumbersome way of doing things
          // but maybe it is generally easier to create a pure array and then reassign
      })
      // filter being a built-in method
    }
  }

}
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
