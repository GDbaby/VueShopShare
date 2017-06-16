import Vue from 'vue'
import Router from 'vue-router'
// import Axios from 'axios'
// import VueAxios from 'vue-axios'
import Vuerify from 'vuerify'
import VuerifyDirective from 'v-vuerify-next'
import Resource from 'vue-resource'
// import animate from 'vue2-animate'
import animate from 'animate.css'
import Home from '@/components/page/Home'
import Find from '@/components/page/Find'
import Good from '@/components/page/Good'
import Write from '@/components/page/Write'
// import Login from '@/components/page/Login'
// import Register from '@/components/page/Register'
import Test from '@/components/page/Test'
import '../components/style/include/head.css'
import '../components/style/common/common.css'
import '../components/style/index.css'

Vue.use(Resource)
// Vue.use(Axios)
// Vue.use(VueAxios)
Vue.use(Vuerify)
Vue.use(Router)
Vue.use(VuerifyDirective)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: Home,
    },
    {
      path: '/Find',
      component: Find
    },
    {
      path: '/Good',
      component: Good
    },
    {
      path: '/Write',
      component: Write
    },
    // {
    //   path: '/Login',
    //   component: Login
    // },
    // {
    //   path: '/Register',
    //   component: Register
    // },
    {
      path: '/Test',
      component: Test
    }
  ]
})
