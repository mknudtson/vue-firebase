<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init' //  db = init.js file

export default {
  name: 'Index',
  data () {
    return {
      smoothies: []
    }
  },
  methods: {
    deleteSmoothie(id) {
      // console.log(id)
      // delete doc from firestore
      db.collection('smoothies').doc(id).delete()
      .then(() => {
        // delete locally
        this.smoothies = this.smoothies.filter(smoothie => { // not permanent deletion because the dummy data is re-rendered to the page every time it is loaded and we are not directly modifying the dummy data, we are filtering it
          return smoothie.id != id
        })
      })

    }
  },
  created(){ // when created
    // fetch data from the firestore
    db.collection('smoothies').get() // how firebase works
    .then(snapshot => { // in time of smoothies
      snapshot.forEach(doc => {
        let smoothie = doc.data() // to create a local binding
        smoothie.id = doc.id // to add this property to it
        this.smoothies.push(smoothie)
        // console.log(doc.data(), doc.id) // the property we want - remember to execute - plus the doc id (auto-generated)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
