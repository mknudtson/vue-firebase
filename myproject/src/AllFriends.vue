<template>
    <div id="all-friends">
        <h2>All Friends</h2>
        <div v-for="(friend, index) in friends" :key="index"> <!-- loop through -->
        <!-- here without a key it is outputting a different div for each element without any unique id -->
        <!-- vue would rather assign an id to each div with a key -->
        <!-- so in v-for add param index to v-for and after v-for add v-bind [bind to each element] [:] that new param index -->
        <!-- now, each div will be assigned its index nbr -->
        <!-- however i don't see where the key property lives -->
            <span @click="unfriend(friend.name)">{{ friend.name }}</span> <!-- data > friends array element > name property value -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'AllFriends',
    // receiving props
    props: ['friends'], // matches binding in passing down props
    // now no need to store *friends* in data object below
    // it lives in App.vue, and it's passed down and received
    data () {
        return{
            //
        }
    },
    methods: {
        unfriend(name){
            this.$emit('delete', { name })
            // $emit enables parent component to listen for event
            // must also be @="[custom event function name]" in component element in parent and said custom event function in methods of parent (see parent)
            // delete is name for custom event
            // name = name: name
            // the magic of the custom event lives in the parent
            // this child element is just where you:
                // create the custom event
                // tie it to a dom element
                // pass the key ingrs to the parent element
        }
    }
}
</script>

<style>

</style>
