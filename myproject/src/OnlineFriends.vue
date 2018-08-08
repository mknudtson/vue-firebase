<template>
    <div id="online-friends">
        <h2>Online Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <!-- loop through and show ONLY if online -->
            <!-- i think this is why we need a span itfp -->
            <span v-if="friend.online">{{ friend.name }}</span>
            <!-- implicit: if friend.online is TRUE -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineFriends',
    props: ['friends'],
    data () {
        return{
            //
        }
    }
}
</script>

<style>

</style>
