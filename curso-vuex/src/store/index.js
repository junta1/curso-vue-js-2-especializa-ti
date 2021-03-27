import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {name: 'Lavar Carro', completed: false},
      {name: 'Lavar Casa', completed: false},
      {name: 'Lavar Banheiro', completed: false},
      {name: 'Lavar Roupa', completed: false},
    ],
    products: []
  },
  mutations:{
    ADD_TASK(state, task){
      state.tasks.push(task);
    },
    ADD_PRODUCT_ID(state, products){
      state.products.push(products);
    },
    TOOGLE_TASK(state, task){
      task.completed = !task.completed;
    }
  },
  actions:{
    addTask(context, task){
      //Requisição ajax

      context.commit('ADD_TASK', task);
    }
  }
});