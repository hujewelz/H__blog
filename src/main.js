// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './routes'
import VueRouter from 'vue-router'

/* eslint-disable no-new */
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  // el: '#app',
  // data: {
  //   currentRoute: window.location.pathname
  // },
  // computed: {
  //   ViewComponent () {
  //     const matchingView = routes[this.currentRoute]
  //     console.log('this.currentRoute:' + this.currentRoute + ',' + matchingView)
  //     return matchingView
  //       ? require('./components/' + matchingView + '.vue')
  //       : require('./components/404.vue')
  //   }
  // },
  // render (h) {
  //   return h(this.ViewComponent)
  // }
  router
}).$mount('#app')

// window.addEventListener('popstate', () => {
//   app.currentRoute = window.location.pathname
// })
