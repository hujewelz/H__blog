// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './routes'
import VueRouter from 'vue-router'
import resource from 'vue-resource'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(resource)

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
