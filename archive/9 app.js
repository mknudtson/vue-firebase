new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        title: 'Becoming a Vue mini pinscher',        
        wage: 10
    },
    methods: {
        changeWage(amount){
            this.wage += amount; // wage = wage + amount
        }
    }
})