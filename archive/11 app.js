new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        title: 'Becoming a Vue mini pinscher',        
        name: 'Dooney'
    },
    methods: {
        updateName(e){
            // console.log(e.target.value) // target element i.e. input
            this.name = e.target.value // update name w/each key stroke
        }
    }
})