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
}
#header{
    margin-bottom: 80px
}
</style>
