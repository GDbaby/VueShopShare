<template>
  <div id="app">
    <div class="head" id="commonHead">
      <div class="head-header">
        <div class="head-menu-left">
         <a href="/"><img src="./components/image/logoTit.png" class="logoTit"></a>
          <ul id="Nav">
            <!-- <a class="navItem text-nav" v-for="todo in navs">{{todo.nav}}</a> -->
            <li class="pull-left"><router-link to="/Home" class="navItem text-nav">首页</router-link></li>
            <li class="pull-left"><router-link to="/Find" class="navItem text-nav">发现</router-link></li>
            <li class="pull-left"><router-link to="/Good" class="navItem text-nav">好物</router-link></li>
          </ul>
          <div style="clear: both;"></div>
        </div>
        <div class="head-menu-right">
          <input type="text" class="searchIpt bz" placeholder="搜索你想要的">
          <input type="button" class="loginBtn mainbg" value="登录 / 注册">
        </div>
      </div>    
    </div>
    <router-view></router-view>
    <div class="sideBox">
      <div class="side-fixed-menu">
        <div class="menu-item" id="backToTop">
          <i class="bt-iconfont if-back-to-top"></i>
          <p class="toTopText">返回顶部</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/page/Footer.vue'
export default {
  name: 'app',
    components: {
    'Footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
