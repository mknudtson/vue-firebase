new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        title: 'Becoming a Vue mini pinscher',
        items: ['Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
        ninjas: [
            { name: 'Crystal', age: 25, belt: 'Black'},
            { name: 'Ryu', age: 30, belt: 'Brown'},
            { name: 'Kent', age: 35, belt: 'Orange'}
        ]
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