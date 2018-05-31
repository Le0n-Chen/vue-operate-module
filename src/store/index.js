/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import operateState from './module/operateState.js'
const store = new Vuex.Store({
  state: {
  	show: false
  },
  modules: {
  	operate: operateState
  }
});
export default store