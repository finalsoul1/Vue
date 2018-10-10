import Vue from 'vue'
import Router from 'vue-router'

import Home from '../component/home.vue'
import Login from '../component/login.vue'
import Register from '../component/register.vue'

Vue.use(Router)

export default new Router({
  routes : [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
})
