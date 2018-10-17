import Vue from 'vue'
import Vuex from 'vuex'

Vue.use (Vuex)

export const store = new Vuex.Store({
  state: {
    islogin: false,
  },
  getters: {
    getIslogin: function (state) {
      return state.islogin;
    },
  },
  mutations: {
    isLoginTrue: function(state, payload) {
      return state.islogin = true
    },
    isLoginFalse: function(state, payload) {
      state.islogin = false
    },
  },
});
