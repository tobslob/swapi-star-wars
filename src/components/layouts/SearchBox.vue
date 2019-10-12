<template>
  <div class="input-box">
    <font-awesome-icon :icon="['fas','search']" class="search-icon" />
    <input type="text" placeholder="Enter a search term" />
  </div>
</template>

<script>
export default {
  name: "SearchBox"
};
</script>

<style scoped>
input[type="text"] {
  padding: 10px;
  padding-bottom: 8px;
  padding-left: 50px;
  width: 700px;
  color: #000;
  background: #dad8d8;
  border-radius: 8px;
  outline: none;
  z-index: -1;
}
input[type="text"]::placeholder {
  font-size: 20px;
  color: #3e464c;
}
.search-icon {
  z-index: 10;
  color: white;
}
</style>
