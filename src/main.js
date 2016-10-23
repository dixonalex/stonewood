// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// Vendor libraries
require('bootstrap-loader')

// Vue components
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Multifamily from './components/Multifamily/Multifamily'
import Residential from './components/Residential/Residential'
import Landing from './components/Landing'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/about', component: About },
  { path: '/residential', component: Residential },
  { path: '/multifamily', component: Multifamily },
  { path: '/contact-us', component: Contact },
  { path: '/', component: Landing }
]

const router = new VueRouter({
  routes // short for routes: routes
})

const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

app
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router
// }).$mount('#app')
