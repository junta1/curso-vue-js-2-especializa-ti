const getters = {
  sortedtasks(state){
    let sorted = state.tasks;

    return sorted.sort(
      (a, b) => {
        if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()){
          return -1;
        }
        if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()){
          return 1;
        }

        return 0;
      }
    );
  },
  tasksNotCompleted(state){
    let tasks = state.tasks;

    let tasksNotCompleted = tasks.filter(
      (task) => {
        return !task.completed;
      }
    );

    return tasksNotCompleted;
  }
}

export default getters;