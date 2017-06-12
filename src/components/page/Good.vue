<template>
	<div class="Good">
		<MyHeader></MyHeader>
		<div class="mainContent">
			<div class="goodSub">
				<div class="SubNav text-secNav">美妆</div>
				<div class="SubNav text-secNav">个护</div>
				<div class="SubNav text-secNav">食品</div>
				<div class="SubNav text-secNav">生活</div>
				<div class="SubNav text-secNav">数码</div>
				<div class="SubNav text-secNav">办公</div>
				<div class="SubNav text-secNav">鞋包</div>
				<div class="SubNav text-secNav">家电</div>
				<div class="SubNav text-secNav">运动</div>
				<div class="SubNav text-secNav">图书</div>
				<div class="SubNav text-secNav">搭配</div>
			</div>
			<div class="goodSecSub">
				<div class="SubNav text-secNavtit">个护分类：</div>
				<div class="SubNav text-secNav">面部护理</div>
				<div class="SubNav text-secNav">眼部护理</div>
				<div class="SubNav text-secNav">唇部护理</div>
				<div class="SubNav text-secNav">口腔护理</div>
				<div class="SubNav text-secNav">身体护理</div>
				<div class="SubNav text-secNav">美发护发</div>
				<div class="SubNav text-secNav">男士护理</div>
				<div class="SubNav text-secNav">女性卫生</div>
				<div class="SubNav text-secNav">洗护工具</div>
				<div class="SubNav text-secNav">其它护理</div>
			</div>
			<div class="goodCont">
				<div class="goodContHead">
					<div class="goodContLeft">
						<div class="goodContNav goodActive"><i class="bt-iconfont if-goods"></i>好物</div>
						<div class="goodContNav"><i class="bt-iconfont if-post"></i>晒单</div>
						<div class="goodContNav"><i class="bt-iconfont if-topic"></i>文章</div>
					</div>

					<ul class="goodContRight">
						<li class="sort"><div class="squ"></div>默认</li>
						<li class="sort"><div class="squ"></div>最受欢迎</li>
						<li class="sort"><div class="squ"></div>价格由高到低</li>
						<li class="sort"><div class="squ"></div>价格由低到高</li>
					</ul>
				</div>	
				<div class="goodProduct">
					<div class="goodProduct-list">
						<div class="pic">
							<img src="../image/w300.jpg" alt="">
						</div>
						<p class="list-tit">爱可按钮唇膏</p>
						<p class="info">
							<span class="price number-font">¥55.0</span>
							<span class="like"><i class="bt-iconfont if-like"></i>12076</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<MyFooter></MyFooter>	
		<MyTop></MyTop>
	</div>
</template>
<script>
import MyHeader from '../page/MyHeader.vue'
import MyFooter from '../page/MyFooter.vue'
import MyTop from '../page/MyTop.vue'
import '../style/good.css'
export default {
  name: 'Good',
  components: {
    'MyHeader': MyHeader,
    'MyFooter': MyFooter,
    'MyTop': MyTop
  }
}

</script>
