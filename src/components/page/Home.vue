<template>
  <div class="home">
    <div class="main">
      <div class="bannerBox">
        <div class="banner"></div>
      </div>
      <div class="mainContent">
        <HomeNav></HomeNav>
    </div>
  </div>
    
  </div>
</template>


<script>
import HomeNav from './home/HomeNav.vue'
export default {
  components: {
    'HomeNav': HomeNav
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
