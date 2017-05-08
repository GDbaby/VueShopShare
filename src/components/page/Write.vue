<template>
	<div class="Write">
		<div class="commonHead WriteHead">
	      <div class="head-header">
	        <div class="head-menu-left">
	        	<a>原创文章</a>
	        </div>
	        <div class="head-menu-right">
	          <a class="w-save">保存</a>
	          <a class="w-preview">预览</a>
	          <input type="button" class="btn-release mainbg" value="发布">
	        </div>
	      </div>    
	    </div>
		<div class="article">
			<div class="article-tit">
				<input type="text" placeholder="标题" class="article-ipt">
			</div>
			<div class="article-operation">
				<div class="article-add">
					<i class="article-icons article-icons-add-img"></i>
					<span class="article-text">添加图片</span>
					<input type="file" class="file-btn">
				</div>
				<div class="article-add">
					<i class="article-icons article-icons-add-product"></i>
					<span class="article-text">添加商品</span>
				</div>
			</div>
			<div class="edit-content">
				<div class="edit-unit">
					<div class="edit-close">
						<i class="article-icons-close"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import '../style/write.css'
	export default{
		name:'Write'
	}
</script>
<style>

</style>