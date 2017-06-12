<template>
	<div class="loginContent">
		<div class="img-area"></div>
		<div class="log-reg-area reg-padding" >
			<div class="log-tell">
				<input type="text" class="log-ipt" placeholder="手机号">
			</div>
			<div class="log-code">
				<input type="text" class="log-ipt log-codeipt" placeholder="验证码">
				<input type="button" value="获取验证码" class="log-ipt log-codebtn">
			</div>
			<div class="log-pwd">
				<input type="text" class="log-ipt" placeholder="密码">
			</div>		
			<input type="button" class="log-ipt log-btn" value="注册">
			<router-link to="/Login" class="log-register">登录</router-link>
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
</template>
<script>
	export default{
		name:"Register"
	}
</script>