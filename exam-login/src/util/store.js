import Vue from 'vue'
import Vuex from 'vuex'

Vue.use (Vuex)

export const store = new Vuex.Store({
  state: {
    islogin: false,
    currentId: "",
  },
  getters: {
    getIslogin: function (state) {
      return state.islogin;
    },
    getcurrentId: function (state) {
      return state.currentId;
    },
  },
  mutations: {
    isLoginTrue: function(state, payload) {
      return state.islogin = true
    },
    isLoginFalse: function(state, payload) {
      state.islogin = false
    },
    setCurrentId: function(state, payload) {
      state.currentId = payload
    },
  },
});
