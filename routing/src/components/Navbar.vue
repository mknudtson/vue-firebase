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
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
            userIds: ['1', '2', '3', '4']
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
</style>

