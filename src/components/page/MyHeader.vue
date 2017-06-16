<template>
  <div>
    <div class="commonHead">
      <div class="head-header">
        <div class="head-menu-left">
         <a href="/"><img src="../image/logoTit.png" class="logoTit"></a>
          <ul id="Nav">
            <!-- <a class="navItem text-nav" v-for="todo in navs">{{todo.nav}}</a> -->
            <li class="pull-left"><router-link to="/Home" class="navItem text-nav">首页</router-link></li>
            <li class="pull-left"><router-link to="/Find" class="navItem text-nav">发现</router-link></li>
            <li class="pull-left"><router-link to="/Good" class="navItem text-nav">好物</router-link></li>
            <li class="pull-left"><router-link to="/write" class="navItem text-nav">写文章</router-link></li>
          </ul>
          <div style="clear: both;"></div>
        </div>
        <div class="head-menu-right">
          <input type="text" class="searchIpt bz" placeholder="搜索你想要的">
          <input type="button" class="loginBtn mainbg" value="登录 / 注册" @click='showModel'>
        </div>
      </div>
    </div>
    <login v-show='LoginIsShow'></login>

    <div class="sideBox">
      <div class="side-fixed-menu">
        <div class="menu-item" id="backToTop" @click="backTop">
          <i class="bt-iconfont if-back-to-top"></i>
          <p class="toTopText">返回顶部</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import '../style/login.css'
import {showBack, animate} from '../../js/mUtils.js'
import login from '../page/login.vue'


  export default{
    name:'MyHeader',
    components: {
    'login':login,
    },
    data(){
      return{
        LoginIsShow:false,
      }
    },
    methods:{
       showModel:function(){
        this.LoginIsShow = !this.LoginIsShow;
      },
      backTop:function(){
        animate(document.body, {scrollTop: '0'}, 400,'ease-out');
      },
    }
	}
</script>
