<template>
    <div class="view-profile">
        <h2>Profile for {{ userId }}</h2> <!-- from data property below (NOT parameter directly - they're a little different) -->
    </div>
</template>

<script>
export default {
    name: 'ViewProfile',
    data() {
        return {
            userId: this.$route.params.user_id // see index.js file - route features :userId where ":" indicates parameter - this binds the url for the user's profile page to the user's username 
            // params is built in
            // $route = current route (e.g. .../profile/123)
            // user_id = name given to route parameter inside router>index.js 
            // user-id is "declared" in router>index (":user_id" as a parameter)
            // for now, we can type anything in after /profile/ in the url to be the user ID
            // i am sure that when we have a database of real users it will not be this easy 
            // note if you jump directly from one profile to another the app does not update
            // why? b/c vue knows that we want the same component
            // so it recycles it
            // but it's using the same data - not being destroyed / not being recreated
        }
    }
}
</script>

<style>

</style>