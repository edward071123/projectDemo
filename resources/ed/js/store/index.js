import Vue from 'vue';
import Vuex from 'vuex';
import pkg from 'package'
import * as getters from './getters'
import app from './modules/app'
import menu from '../router/admin/menu'
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    menu
  },
  state: {
    pkg
  }
})

export default store
