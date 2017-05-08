<template>
  <div class="home">
    <MyHeader></MyHeader>
      <div class="main">
        <div class="bannerBox">
          <div class="banner"></div>
        </div>
        <div class="mainContent">
          <HomeNav></HomeNav>
      </div>
    </div>
    <MyFooter></MyFooter>
    <MyTop></MyTop>
  </div>
</template>


<script>
import MyHeader from '../page/MyHeader.vue'
import MyFooter from '../page/MyFooter.vue'
import MyTop from '../page/MyTop.vue'
import HomeNav from './home/HomeNav.vue'
export default {
  name: 'Home',
  components: {
    'HomeNav': HomeNav,
    'MyHeader': MyHeader,
    'MyFooter': MyFooter,
    'MyTop': MyTop
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
