<template>
	<div class="model">
		<div class="loginContent">
			<div class="img-area"></div>
			<validator name="validation1">
				<form novalidate class="log-reg-area">
					<div class="log-tell">
						<input type="text" class="log-ipt" placeholder="手机号">
					</div>
					<div class="log-pwd">
						<input type="text" class="log-ipt" placeholder="密码">
					</div>		
					<input type="button" class="log-ipt log-btn" value="登录">
					<router-link to="/Register" class="log-register">注册</router-link>
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
				</form>
			</validator>
		</div>
	</div>
</template>
<script>
import '../style/login.css'
	export default{
		name:"login"
	}
</script>