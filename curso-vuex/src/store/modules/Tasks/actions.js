const actions = {
  addTask(context, task){
    //Requisição ajax

    context.commit('ADD_TASK', task);
  }
}

export default actions;