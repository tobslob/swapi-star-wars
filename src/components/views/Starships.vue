<template>
    <div class="starships">
        <div id="header">
          <h1>Popular Starships</h1>
        </div>
        <Starships 
        :starships="starships"
        />
        <StarshipMore />
    </div>
</template>

<script>
import Starships from '../../components/layouts/Starships.layout';
import StarshipMore from '../layouts/starships.layouts.more';
export default {
    props: {
        starships: Array
    },
    components: {
        Starships,
        StarshipMore
    }
}
</script>

<style scoped>
.starships{
    text-align: center;
}
.starships h1{
    display: inline;
    color: #494956;
    overflow: hidden;
}
#header{
    margin-bottom: 80px
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
