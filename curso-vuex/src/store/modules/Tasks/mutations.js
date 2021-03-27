let mutations = {
  ADD_TASK(state, task){
    state.tasks.push(task);
  },
  TOOGLE_TASK(state, task){
    task.completed = !task.completed;
  },
  ADD_PRODUCT_ID(state, products){
    state.products.push(products);
  }
}

export default mutations;