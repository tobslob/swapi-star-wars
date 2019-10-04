<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './components/Header.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
body,
html {
  height: 100%;
  margin: 0;
}
</style>
