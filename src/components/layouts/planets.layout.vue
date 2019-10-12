<template>
    <div id="planet-list">
        <vue-glide :perView="3" :bullet="true" :bound="true" :rewind="false">
            <vue-glide-slide v-for="(planet, index) in planets" :key="index">
                <div class="planet-card">
                    <img :src="getImage()" alt="planet" style="width:80%; height:300px;" />
                    <div id="planet-name"><h3>{{planet.name}}</h3></div>
                </div>
            </vue-glide-slide>
        </vue-glide>
    </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
    props: {
        planets: Array
    },
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide
    },
    methods: {
    getImage() {
      let randomInt = Math.floor((Math.random() * 3) + 1);
      return require(`../../assets/planet-${randomInt}.jpg`);
    },
  },  
}
</script>

<style scoped>
.planet-card{
    text-align: center
}
#planet-name{
    background-color: black;
    width: 80%;
    height: 30px;
    display: inline-block;
}
#planet-name h3 {
    color: white;
}
</style>
