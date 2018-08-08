new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        title: 'Becoming a Vue mini pinscher',        
        name1: 'Dooney ',
        name2: 'Mokie ',
        url: 'http://www.youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet(time){
            return `Hello and good ${time}, ${this.name1} and ${this.name2}`
        }
    }
})