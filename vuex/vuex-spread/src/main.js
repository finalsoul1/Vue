import Vue from 'vue'
import App from './App.vue'

import { store } from './util/store.js'

new Vue({
  el: '#app',
  // Vue 인스턴스에 등록한다.
  store,
  render: h => h(App)
})
