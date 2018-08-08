<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <input type="text" v-model="searchTerm"> <!-- update with every keystroke -->
        <div v-for="post in filteredPosts" :key="post.id">
            <p class="h">POST NUMBER {{ post.id }}</p>
            <p class="b">{{ post.title | snippet }}</p>
            <!-- snippet is alt name?  -->
                <div v-if="post.completed">
                    <p class="f">FINAL</p>
                </div>
                <div v-else>
                    <p class="f">DRAFT</p>
                </div>
        </div>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Blogs',
    data(){
        return{
            blogTitle: 'Blogs',
            posts: [],
                // could be called anything - take data from response to axios get method below and inject into array
                // modded in created lifecycle hook below.
            searchTerm: ''
        }
    },
    methods: {
        changeTitle(){
            this.blogTitle = 'Amazing Blog Site'
        }
    },
    computed: { // new key wd?
        filteredPosts(){
            return this.posts.filter(post => {
                return post.title.match(this.searchTerm)
            })
        }
        // filter out non-matches
        // this does work - type in a specific enough string
    },
    // lifecycle hooks...
        // .. are good for ... making sure certain things happen before other certain things happen?
        // ... have specific names
        // ... appear outside of custom methods
    // beforeCreate(){ // this is built-in
    //     alert('beforeCreate hook currently firing - until you click OK, hook wont be created') // DOM waiting
    // },
    // created(){ // this is built-in
    //     alert('created hook - until you click OK, DOM wont render') // DOM still waiting till you click OK to render
    // },
    // beforeUpdate(){
    //     alert('beforeUpdate hook - until you click OK, DOM wont be updated')
    // }
    // created is a good hook to get external data
    created(){
        axios.get('https://jsonplaceholder.typicode.com/todos/') // from https://jsonplaceholder.typicode.com/
        .then(response => {
            console.log(response)
            this.posts = response.data
        }).catch (err => {
            console.log(err)
            alert(err)
        })
        // axios.get(...)       goes out, gets data, comes back
        // .then(...{...})      fires when that is done 
        // local server > inspect > console > object > data > view dummy data
        // catch takes error message as param/arg
    }
}
</script>

<style>
.h {
    color: red;
    font-weight:bold;
}

.b {
    color: cornflowerblue;
    font-family: 'Courier New', Courier, monospace;
}

.f {
    color: navy;
    font-size: 0.5em;
}
</style>
