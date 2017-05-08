<template>
	<div class="model">
		<div class="loginContent">
			<div class="img-area"></div>
			<div class="log-reg-area">
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
					<div>
						<a href="">
							<i class="Weibo"></i>
							<span>微博</span>
						</a>
						<a href="">
							<i class="qqContent"></i>
							<span>QQ</span>
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