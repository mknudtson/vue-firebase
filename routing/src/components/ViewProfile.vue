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
            // to get around plm of not being able to jump directly from profile to profile...
            // ... ask vue to watch $route object (below)
            // when it changes, update the id and therefore the template
            // this is simply a workaround for the way that vue recycles components rather than recreate or destroy them
        }
    },
    methods: {
        updateId(){ // this function updates userId ... and it rapidly updates! (seems like a lot of work for something that i would think should be automatic)
            this.userId = this.$route.params.user_id
        }
    },
    watch: {
        $route: 'updateId' // when $route changes, fire this function
    }
}
</script>

<style>

</style>