import Vue from 'vue'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import router from './router'
import store from './store'

import App from './App.vue'


Vue.use(iView);

Vue.prototype.url = "http://127.0.0.1:3000"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
