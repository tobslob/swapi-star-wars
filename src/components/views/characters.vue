<template>
<div class="character">
    <div id="header">
        <h1>Popular Characters</h1>
    </div>
    <Characters 
    :characters="characters"
    />
    <CharacterMore />
</div>
</template>

<script>
import Characters from '../layouts/characters.layout'
import CharacterMore from '../layouts/character.layout.more';

export default {
    props: {
        characters: Array
    },
    components: {
        Characters,
        CharacterMore
    }
}
</script>

<style scoped>
.character {
    text-align: center;
}
.character h1{
    display: inline;
    color: #494956;
}
#header{
    margin: 60px
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

