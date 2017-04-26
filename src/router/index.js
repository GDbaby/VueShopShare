import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Find from '@/components/page/Find'
import Good from '@/components/page/Good'
import '../components/style/include/head.css'
import '../components/style/common/common.css'
import '../components/style/index.css'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Find',
      component: Find
    },
    {
      path: '/Good',
      component: Good
    }
  ]
})
