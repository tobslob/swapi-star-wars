<template>
<StarShipCard 
  :starships="starships"
/>
</template>

<script>
import StarShipCard from '../layouts/StarShipCard'

export default {
  name: "Starships",
  components: {
    StarShipCard
  },  
  props: {
      starships: Array
    },
};
</script>

<style scoped>

</style>
