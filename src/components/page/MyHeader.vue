<template>
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
          <router-link to="/Login">
            <input type="button" class="loginBtn mainbg" value="登录 / 注册">
          </router-link>
        </div>
      </div>    
    </div>
</template>
<script>
	export default{
		name:'MyHeader'
	}
</script>