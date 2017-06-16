<template>
	<div class="model"  id="loginForm" v-show='isShow'>
		<div class="loginContent moveLogin" v-show='LoginIsShow'>
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
				<a class="log-register" v-on:click="RegisterIs">注册</a>
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

		<div class="loginContent" v-show='RegisterIsShow'>
			<div class="img-area"></div>
			<div class="log-reg-area reg-padding">
				<div class="log-tell">
					<input type="text" class="log-ipt" v-model="passerby.userId" maxlength="11" placeholder="手机号">
				</div>
				<div class="log-code">
					<input type="text" class="log-ipt log-codeipt" v-model="passerby.code" placeholder="验证码">
          <button class="log-ipt log-codebtn" @click="getCode" :disabled="disabled">{{ text }}</button>
        </div>
				<div class="log-pwd">
					<input type="password" class="log-ipt" v-model="passerby.password"  placeholder="密码">
				</div>
				<div class="err" v-text="wrongText2">1111</div>
				<input type="button" class="log-ipt log-btn" v-on:click="mobileRegister" value="注册">
				<a class="log-register" v-on:click="LoginIs">登录</a>
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
			</div>
		</div>


		<i class="model-close" v-on:click="hideModel"></i>
	</div>
</template>
<script>
import '../style/login.css'
import Vue from 'vue'
  export default{
    name:'Login',
    data(){
      return{
        isShow:true,
        wrongText:null,
        wrongText2:null,
        RegisterIsShow:false,
        LoginIsShow:true,
        userinfo:{},
        passerby:{},
        disabled: false,
        second: 60,
        text: '获取验证码'

      }
    },
    computed:{
      // 判断手机号
      LoginTelTest:function () {
        return /^1[3|4|5|7|8|9]\d{9}$/.test(this.userinfo.userId);
      },
      RegisterTelTest:function () {
        return /^1[3|4|5|7|8|9]\d{9}$/.test(this.passerby.userId);
      },
      rightpwdTest:function(){
        return /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,10}$/.test(this.passerby.password)
      }

    },
    methods:{
    	RegisterIs(){
    		this.RegisterIsShow=true;
    		this.LoginIsShow=false;
    	},
    	LoginIs(){
    		this.LoginIsShow=true;
    		this.RegisterIsShow=false;
    	},
      	mobileLogin(){
	        if(!this.userinfo.userId){
	          this.wrongText='手机不能为空1';
	          return
	        }else if(!(/^1[3|4|5|7|8|9]\d{9}$/.test(this.userinfo.userId))){
	          this.wrongText='手机号码格式不正确1';
	          return
	        }
	        else if(!this.userinfo.password){
	          this.wrongText='密码不能为空1';
	          return

	        }else{
	          this.wrongText='';
	          this.loginBtn();
	        }
      	},
      	loginBtn:function (event) {
	        this.$http.post("http://localhost:3000/api/login",this.userinfo,{emulateJSON:true})
	        .then(function(rs){
	          if(rs.data.state==0){
	            this.wrongText='账户不存在';
	          }else if(rs.data.state==1){
	            this.wrongText='用户名或密码错误';
	          }else if(rs.data.state==2){
	          	console.log('成功')
	          }
	          console.log(rs.data.state);
	        },function(rs){
	          console.log('222',rs);
	        })
      	},
      	// 注册判断
      	mobileRegister(){
 			    if(!this.passerby.userId){
	        	this.wrongText2='手机不能为空2';
	        	return
	        }else if(!(/^1[3|4|5|7|8|9]\d{9}$/.test(this.passerby.userId))){
	        	this.wrongText2='手机号码格式不正确2';
	        	return
	        }
	        else if(!this.passerby.password){
	         	this.wrongText2='密码不能为空2';
	        	return

	        }else if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,10}$/.test(this.passerby.password))){
	         	this.wrongText2='密码格式不正确2';
	        	return
	        }else{
	        	this.wrongText2='';
	        	console.log("注册正确");
	        	this.RegisterBtn();
	        }
      	},
      	// 注册按钮
      	RegisterBtn:function (event){
	        this.$http.post("http://localhost:3000/api/register",{emulateJSON:true})
	        .then(function(rs){
	          if(rs.data.state==0){
	            this.wrongText2='账户不存在';
	          }else if(rs.data.state==1){
	            this.wrongText2='用户名或密码错误';
	          }else if(rs.data.state==2){
	          	console.log('成功')
	          }0
	          console.log(rs.data.state);
	        },function(rs){
	          console.log('222',rs);
	        })
      	},
      getCode: function () {
        this.disabled = true;
        this.timer();
      },
      timer: function () {
        if (this.second > 1) {
          this.second--;
          this.text = this.second + 's 后重新获取';
          setTimeout(this.timer, 1000);
        }else{
          this.disabled = false;
          this.second = 60;
          this.text = '获取验证码';
        }
      },
      	hideModel:function(){
        	this.isShow = !this.isShow;
      	},


    },


}
</script>
