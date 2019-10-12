<template>
  <div class="banner">
    <div class="logo">
      <img src="../../assets/logo.png" width="110px" />
    </div>
    <div class="banner-content">
      <div class="title">
        <img src="../../assets/logo.png" width="110px" />
        <span><b>Directory</b></span>
      </div>
      <p class="subtext">
        Find your favorite Characters, Films, Species,
        <br />Starships and Planets
      </p>
      <SearchBox />
    </div>
  </div>
</template>

<script>
import SearchBox from '../layouts/SearchBox';
export default {
  components: { SearchBox },
};
</script>

<style>
.banner {
  background-image: url("../../assets/hero-banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 90vh;
  align-content: center;
  margin-bottom: 60px;
}
.logo {
  position: absolute;
  margin-left: 30px;
  margin-top: 15px;
}
.title {
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
  display: inline;
  vertical-align: middle;
}
.title img{
  padding-bottom: 20px;
}
span{
 margin-left:12px;
 font-size:35px;
 font-weight: 900;
 font-family: sans-serif;
}
.banner-content{
  padding: 30vh;
  text-align: center;
}
.subtext{
  font-weight:bold;
  font-size: 20px;
  color: rgb(196, 196, 197);
  padding-top: 15px;
  padding-bottom: 15px
}
</style>
