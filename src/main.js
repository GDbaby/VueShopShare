// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import validator from 'vue-validator'
import $ from 'jquery'

Vue.config.productionTip = false

// 路由拦截
router.beforeEach((to, from, next) => {
  const fullPath = to.fullPath
  if (fullPath === '/') {
    next({
      path: '/Home'
    })
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,validator,
  template: '<App/>',
  components: { App }
})
