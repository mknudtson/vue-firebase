new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        title: 'Becoming a Vue mini pinscher',        
        coords: {
            x: 0,
            y: 0 // changing these to 300 and 300 really has no effect
        }
    },
    methods: {
        logEvent(e){
            console.log(e); // so much info!! offset X, offset Y = mouse position
        },
        logCoords(e){ // note lack of ;s
            this.coords.x = e.offsetX // as mouse travels "east" X increases
            this.coords.y = e.offsetY // as mouse travels "south" Y increases / imagine potential for IA
        }
    }
})