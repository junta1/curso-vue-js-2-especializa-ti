import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/index'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
