<template>
  <div class="input-box">
    <font-awesome-icon :icon="['fas','search']" class="search-icon" />
    <input type="text" placeholder="Enter a search term" />
  </div>
</template>

<script>
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);
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
}
input[type="text"]::placeholder {
  font-size: 20px;
  color: #3e464c;
}
</style>
