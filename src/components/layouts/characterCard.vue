<template>
    <div class="character-card">
        <div class="card"
                v-for="(character, index) in characters" 
                :key="index">
            <img :src="getImage()" alt="Character"/>
            <div class="content">
                <h4>{{character.name}}</h4>
                <p id="gender"><em>Gender: {{character.gender}}</em></p>
                <p>{{details(character)}}</p>
            </div>
        </div>
    </div>   
</template>

<script>
export default {
    props: {
        characters: Array
    },
    methods: {
        getImage() {
            let randomInt = Math.floor((Math.random() * 4) + 1);
            return require(`../../assets/character-${randomInt}.jpg`);
        },
        details(character) {
            const msg = `${character.name} has a height of ${
                character.height
            } and a weight of ${character.mass}.
            ${character.gender === "male" ? "He" : "She"} has a ${
                character.skin_color
            } skin and with ${character.eye_color} eyes. and was born on ${
                character.birth_year
            }. ${character.gender === "male" ? "He" : "She"} has ${
                character.vehicles.length ? character.vehicles.length : "no"
            } vehicle(s) and owned ${
                character.starships.length ? character.starships.length : "no"
            } starships. ${
                character.gender === "male" ? "He" : "She"
            } has been seen to have featured in ${
                character.films.length ? character.films.length : "0"
            } films.`;
            return msg;
        }
    }
}
</script>

<style scoped>
.character-card img {
    width: 350px;
    height: 350px;
}
.character-card {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
}
.card {
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    height: 350px;
    background-color: #f7f7f7;
    margin: 30px auto;
}
.content {
    color: black;
    width: 250px;
    padding: 30px 5px 0 5px;
    text-align: left;
    color: #3e464c;
    font-size: 15px;
}
#gender {
    margin: auto auto 30px auto;
    font-family: cursive;
}
</style>
