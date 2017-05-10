<template>
<div>
  <div class="HomeNav ulSubNav">
      <div><router-link to="/Home/HomeNav1" class="SubNav text-secNav">精选</router-link></div>
      <div><router-link to="/Home/HomeNav2" class="SubNav text-secNav">美妆</router-link></div>
      <div><router-link to="/Home/HomeNav3" class="SubNav text-secNav">美妆</router-link></div>
  </div>
  <div class="items">
    <div class="listItem">
      <div class="tipimg">
        <img src="../../image/pic.jpg" style="width:100%;">
      </div>  
      <div class="text-secBox-tit">网红面膜红黑榜</div>
      <div class="item-despt">
        <div class="item-nick">
          <div class="headimg">
            <img src="../../image/head.jpg" style="width:100%;">
          </div>
          <span class="text-light nickname">吃瓜少女biubiu</span>
        </div>
        <div class="item-like">
          <div class="headimg">
            <i class="bt-iconfont if-like pl"></i>
          </div>
          <span class="text-light">224</span>
        </div>
        <div class="item-read">
          <div class="headimg">
            <i class="bt-iconfont if-view"></i>
          </div>
          <span class="text-light">4244</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'HomeNav' 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
