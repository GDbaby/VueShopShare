<!--template>
	<div class="sideBox" v-on:click="backTop">
      <div class="side-fixed-menu">
        <div class="menu-item">
          <i class="bt-iconfont if-back-to-top"></i>
          <p class="toTopText">返回顶部</p>
        </div>
      </div>
    </div>
</template>
<script>
  import {showBack, animate} from '../../js/mUtils.js'
  export default{
    name: 'MyTop',
    data(){
      return {
        backTop:true,
      }
    },
    method:{
      backTop(){
       animate(document.body, {scrollTop: '0'}, 400,'ease-out');
      },
    }

  }
</script-->

