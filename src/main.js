// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex';
import store from './store';

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App),
}).$mount('#app')
