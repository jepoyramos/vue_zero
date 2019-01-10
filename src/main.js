import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './App.vue'
// Vue Router
Vue.use(VueRouter)
//Route Components
const Foo = { template: '<div>foo Foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
//Router Instance
const router = new VueRouter({
  routes // short for `routes: routes`
})
Vue.config.productionTip = false
//Vue Instance
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
