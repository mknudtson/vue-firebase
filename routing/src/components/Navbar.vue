<template>
    <nav class="main-nav">
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link :to="{ name: 'About'}">About</router-link></li>
            <!-- to change where this link leads, just go to index.js and update the path  -->
            <!-- this is useful if you have the same link in a lot of places - just update it from one central location to update it everywhere -->
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {

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

