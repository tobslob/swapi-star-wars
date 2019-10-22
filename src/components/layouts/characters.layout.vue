<template>
    <CharacterCard 
    :characters="characters"
    />
</template>

<script>
import CharacterCard from '../layouts/characterCard.vue'
export default {
    props: {
        characters: Array
    },
    components: {
        CharacterCard,
    }
}
</script>

<style scoped>

</style>
