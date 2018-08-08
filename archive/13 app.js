new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        title: 'Becoming a Vue mini pinscher',        
        name: 'Dooney'
    },
    methods: {
        logMessage(){
            // always test that it works first with a simple action
            console.log("hello world")
        }
    }
})