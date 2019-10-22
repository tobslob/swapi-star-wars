<template>
    <div>
        <div class="more-characters">
            <CharacterCard
                :v-if="moreCharacters"
                :characters="moreCharacters"
            />
        </div>
        <button @click="this.loadMore">VIEW MORE</button>
    </div>
</template>

<script>
import CharacterCard from './characterCard'
export default {
    props: {

    },
    data(){
        return {
            index: 1,
            moreCharacters: []
        }
    },
    components: {
        CharacterCard
    },
    methods: {
        increaseIndex(){
            return this.index++
        },
        loadMore(){
            this.increaseIndex();
            // fetch more characters
            fetch(`https://swapi.co/api/people/?page=${this.index}`, {
            method: 'get'
            }).then((response) => {
            return response.json()
            }).then((jsonData) => {
                this.moreCharacters = [...this.moreCharacters, ...jsonData.results.splice(4)];
            }).catch((error) => {
            throw error;
            })
        }
    }
}
</script>

<style scoped>
.more-characters {
    display: flex;
    flex-wrap: wrap;
}
button {
    width: 450px;
    height: 45px;
    border-color: grey;
    background-color: white;
    border-radius: 5px;
    margin: 0 0 70px 0;
}
</style>
