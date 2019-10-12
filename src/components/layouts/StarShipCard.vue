<template>
<div class="starship-lists">
  <div class="card"
  v-for="(starship, index) in starships"
  :key="index">
    <img :src="getImage()" alt="starship" style="width:100%; height:200px;" />
    <div class="inner">
      <div class="outer">
        <p class="title">{{starship.name}}</p>
        <p
          class="description"
        >These vessels are manufactured by the Corellian Engineering Corporation. While the CR90 would see initial use within the late Galactic Republic.</p>
          <button>
            Read More &nbsp;
          </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Starships",
  props: {
      starships: Array
  },
  methods: {
    getImage() {
      let randomInt = Math.floor((Math.random() * 6) + 1);
      return require(`../../assets/starship-${randomInt}.jpg`);
    },
  },
};
</script>

<style scoped>
.starship-lists{
  display: flex;
  flex-wrap: wrap;
}
.card {
  max-width: 350px;
  min-width: 300px;
  margin: auto;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  min-height: 170px;
  background: #e6e6e6;
}
.outer {
  position: absolute;
  width: 350px;
  min-width: 300px;
  min-height: 155px;
  background: #fafafa;
  margin-left: 5px;
  padding: 10px 20px 10px 10px;
  text-align: left;
}
.title {
  color: #3e464c;
  font-size: 15px;
  font-weight: 400;
}
.description {
  color: #3e464c;
  font-size: 12px;
  margin-top: 5px;
}
button {
  border: none;
  display: block;
  padding: 8px 14px;
  color: #3e464c;
  background-color: #e6e6e6;
  text-align: center;
  cursor: pointer;
  width: 110px;
  font-size: 12px;
  margin-top: 10px;
  float: right;
  outline: none;
}
a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}
button:hover {
  background-color: #000;
  color: #fff;
}
</style>
