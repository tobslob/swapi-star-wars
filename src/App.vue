<template>
  <div id="app">
    <Header />
    <Starships
      v-if="starships"
      :starships="starships"
    />
    <Planets
      v-if="planets"
      :planets="planets"
    />
    <Characters
      v-if="characters"
      :characters="characters"
    />
    <Footer />
  </div>
</template>

<script>
import Header from './components/views/Header'
import Starships from './components/views/Starships'
import Planets from './components/views/planets'
import Characters from './components/views/characters'
import Footer from './components/views/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Starships,
    Planets,
    Characters,
    Footer
  },
  data(){
    return {
      starships: [],
      planets: [],
      characters: [],
    };
  },
  mounted: function(){
    // fetch starships
    fetch('https://swapi.co/api/starships', {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((jsonData) => {
      this.starships = jsonData.results;
      this.starships = this.starships.splice(4);
    }).catch((error) => {
      throw error;
    })

    // fetch planets
    fetch('https://swapi.co/api/planets', {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((jsonData) => {
      this.planets = jsonData.results;
    }).catch((error) => {
      throw error;
    })

    // fetch characters
    fetch('https://swapi.co/api/people', {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((jsonData) => {
      this.characters = jsonData.results;
      this.characters = this.characters.splice(6)
    }).catch((error) => {
      throw error;
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
body,
html {
  height: 100%;
  margin: 0;
}
</style>
