<template>
    <nav class="main-nav">
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link :to="{ name: 'About'}">About</router-link></li>
            <!-- to change where this link leads, just go to index.js and update the path  -->
            <!-- this is useful if you have the same link in a lot of places - just update it from one central location to update it everywhere -->
        </ul>
        <h2>User Profiles</h2>
        <ul>
            <li v-for="(id, index) in userIds" :key="index">
            <!-- don't forget, to assign index value to key binding, pass in the index -->
                <router-link :to="{ name: 'ViewProfile', params: { user_id: id } }">
                <!-- see router > index.js -->
                <!-- name refers to component -->
                <!-- params refers to params (built in) - user_id binding is created in 'path' property for ViewProfile router link in index.js file -->
                    <span>Profile {{ id }} </span>
                    <!-- for some looped output - all the profiles -->
                    <!-- this has nothing to do with how user profiles are actually loaded so just keep that in mind -->
                </router-link>
            </li>
        </ul>
        <h2>Navigation Control</h2>
        <ul>
            <li><button @click="goBack">Go Back</button></li>
            <li><button @click="goHome">Redirect to Home</button></li>
            <li><button @click="goForward">Go Forward</button></li>
            <!-- use the vue router to nav to diff pgs programmatically, useful for example after user submits form to programmatically redirect them to the homepage -->
            <!-- this requires some imagination since all we are doing is clicking on links right now but we are using buttons to simulate form submissions and so on -->
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
            userIds: ['1', '2', '3', '4']
        }
    },
    methods: {
        goHome(){
            this.$router.push({ name: 'Home' })
            // not this.$route i.e. current route
            // router = nav hx
            // push is a method that pushes passed-in route to nav hx - adds to end of nav hx
            // name ids route
        },
        goBack(){
            this.$router.go(-1)
            // go is a method that takes an integer
        },
        goForward(){
            this.$router.go(1)
            // go is a method that takes an integer
        }
    }
}
</script>

<style>
ul{
    list-style-type: none;
    padding: 0;
}
a { /* because router links become anchor tags */
    color: #42b983;
}
li {
    display: inline-block;
    margin: 10px;
}
</style>

