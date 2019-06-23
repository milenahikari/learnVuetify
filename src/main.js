import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

import App from './App.vue'
import VueRouter from './routes'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'md'
});

new Vue({
  render: h => h(App),
  router: VueRouter,
}).$mount('#app')
