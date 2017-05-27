<template>
	<div class="model"  id="loginForm" v-show='isShow'> 
		<div class="loginContent moveLogin">
			<div class="img-area"></div> 
				<form class="log-reg-area">
					<div class="log-tell">
						<input type="text" class="log-ipt" v-model="userinfo.userId" maxlength="11" placeholder="手机号">
					</div>
					<div class="log-pwd">
						<input type="password" class="log-ipt" v-model="userinfo.password"  rangelength="(4,16)" placeholder="密码">
					</div>	
					<!-- <ul><li v-for="err in errors" v-text="err"></li></ul> -->
					<div class="err" v-text="wrongText">1111</div>
					<input v-on:click="mobileLogin" type="button" class="log-ipt log-btn" value="登录">
					<router-link to="/Register" class="log-register">注册</router-link>
					<div class="log-fast">
						<div class="log-fast-in">社交账号快速登录</div>
						<div class="log-bottom">
						<div class="log-left">
							<a href="">
								<i class="L-icon Weibo"></i>
								<p class="pt-10">微博</p>
							</a>
						</div>
						<div class="log-right">
							<a href="">
								<i class="L-icon qqContent"></i>
								<p class="pt-15">QQ</p>
							</a>
						</div>
						</div> 
					</div>
				</form>
		</div>
		<i class="model-close" v-on:click="hideModel"></i>
	</div>
</template>
<script>
import '../style/login.css'
import Vue from 'vue'
  export default{
    name:'MyHeader',
    data(){ 
      return{
        isShow:true,
        wrongText:null,
        userinfo:{}
      }
    },
    computed:{
      // 判断手机号
      rightTel:function () {
        return /^1[3|4|5|7|8|9]\d{9}$/.test(this.userinfo.userId);
      },
      rightpwd:function(){
        return /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,10}$/.test(this.userinfo.password)
      }

    },
    methods:{
      // showModel:function(){
      //   console.log(123450);
      //   this.isShow = !this.isShow;
      // },
      mobileLogin(){
        if(!this.userinfo.userId){
          this.wrongText='手机不能为空';
          return
        }else if (!this.rightTel) {
          this.wrongText='手机号码格式不正确';
          return
        }
        else if(!this.userinfo.password){
          this.wrongText='密码不能为空';
          return
        
        }else{
          this.wrongText='';
          this.loginBtn();
        }
      },
      loginBtn:function (event) {
        this.$http.post("http://localhost:3000/api/login",this.userinfo,{emulateJSON:true})
        .then(function(rs){
          if(rs.data.msg==true){
            console.log('登录成功')
          }else{
            this.wrongText='用户名或密码错误';
          }
        },function(rs){
          console.log('222',rs);
        })
      },
      hideModel:function(){
      	console.log('删除')
        this.isShow = !this.isShow;
      },
      
      
    }
    
  
	}
</script>