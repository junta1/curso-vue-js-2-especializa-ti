import Vue from 'vue';
import Vuex from 'vuex';
import Tasks from './modules/Tasks/index';
import Products from './modules/Products/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    Tasks,
    Products
  }
});