new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        title: 'Becoming a Vue mini pinscher',
        showName: false,
        showAge: true
    },
    methods: {
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})