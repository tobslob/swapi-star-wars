<template>
    <div class="planets">
        <div id="header">
          <h1>Popular Planets</h1>
        </div>
        <Planets
            v-if="planets.length > 3"
            :planets="planets"
        />
    </div>
</template>

<script>
import Planets from '../layouts/planets.layout'

export default {
    props: {
        planets: Array
    },
    components: {
        Planets
    }
}
</script>

<style scoped>
.planet {
    text-align: center;
}
.planets h1{
    display: inline;
    color: #494956;
}
#header{
    margin-bottom: 50px
}
#header h1:after{
    content: '';
    bottom: 0;
    left: 30%;
    right: 30%;
    height: 2px;
    background: grey;
    display: block;
    width: 10%;
    height: 4px;
    position: static;
    margin-left: 45%;
}
</style>
