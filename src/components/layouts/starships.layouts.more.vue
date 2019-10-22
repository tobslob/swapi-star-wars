<template>
    <div>
        <div class="more-starships">
            <StarShipCard
                :v-if="moreStarships"
                :starships="moreStarships"
            />
        </div>
        <button @click="this.loadMore">VIEW MORE</button>
    </div>
</template>

<script>
import StarShipCard from '../layouts/StarShipCard'
export default {
    components: {
        StarShipCard
    },
    data(){
        return{
            index: 1,
            moreStarships: []
        }
    },
    methods:{
        increaseIndex(){
            return this.index++
        },
        loadMore(){
            this.increaseIndex();
            // fetch more starships
            fetch(`https://swapi.co/api/starships/?page=${this.index}`, {
            method: 'get'
            }).then((response) => {
            return response.json()
            }).then((jsonData) => {
                this.moreStarships = [...this.moreStarships, ...jsonData.results.splice(4)];
            }).catch((error) => {
            throw error;
            })
        }
    },
}
</script>

<style scoped>
    .starship-lists{
        display: flex;
        flex-wrap: wrap;
    }
    button {
        width: 450px;
        height: 45px;
        border-color: grey;
        background-color: white;
        border-radius: 5px;
        margin: 30px 0 70px 0;
    }
</style>
