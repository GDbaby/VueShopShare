<template>
  <div class="Find">
    <div class="mainContent">
      <div class="findCont">
        
        <div class="navside">
          <p>发现</p>
          <ul class="navsideUl Artical-tit">
            <li class="navsideLi text-page-nav">文章</li>
            <li class="navsideLi text-page-nav">晒单</li>
          </ul>
        </div>
        <div class="rightSide">
          <div class="thumbnailPic">
            <img src="../image/secpic.jpg" class="fullPercent">
          </div>
          <div class="rS-descript">
            <div class="rS-Box">
              <p class="rS-tit">颠覆世界观的：体脂分析称 超级电子秤</p>
              <p class="rS-text">其实购买理由也比较偶然，因为在我的固有印象中，电子秤就是站在上面，等待一个孤独的数字，就如同满心欢喜期待的期末考试分数，但永远都不是自己期望的样子。</p>
            </div>  
            <div class="info">
              <div class="stat">
                <i class="bt-iconfont if-view"></i>1811<i class="bt-iconfont if-like pl"></i>32
              </div>
            </div>            
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../style/find.css'
export default {
  name: 'Find',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
