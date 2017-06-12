<template>
<div>
  <div class="HomeNav ulSubNav">
      <!-- <div><router-link to="/Home/HomeNav1" class="SubNav text-secNav">最新</router-link></div>
      <div><router-link to="/Home/HomeNav2" class="SubNav text-secNav">热门</router-link></div>
      <div><router-link to="/Home/HomeNav3" class="SubNav text-secNav">礼物</router-link></div> -->
     <!--  <div v-bind:class="{active:isActive}" class="SubNav text-secNav">最新</div>-->
      <ul>
        <li class="SubNav text-secNav" v-for="(item,$index) in items" @click="selectStyle (item, $index) " :class="{'active':item.active}" >{{item.select}} </li>
      </ul>
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
import Vue from 'vue'
export default {
  name: 'HomeNav' ,
  data(){
    return{
      active: false,
      items: [
        {select:'最新'},
        {select:'热门'},
        {select:'礼物'},
        {select:'美食'},
        {select:'生活'},
        {select:'设计感'},
        {select:'家居'},
        {select:'数码'},
        {select:'阅读'},
        {select:'学生党'},
        {select:'学生党'},
        {select:'美妆'},
        {select:'护理'},
        {select:'运动'},
        {select:'户外'}
      ]
    }
  },
  　　methods: {
　　　　selectStyle (item, index) {
　　　　　　this.$nextTick(function () {
　　　　　　　　this.items.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'active',false);
　　　　　　　　});
　　　　　　　　Vue.set(item,'active',true);
                this.indexInfor(index);
　　　　　　});
　　　　},
        indexInfor:function (index){
          this.$http.post("http://localhost:3000/api/register/"+index,{emulateJSON:true})
          .then(function(rs){
            
          },function(rs){
            console.log('222',rs);
          })
        },
　　}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
