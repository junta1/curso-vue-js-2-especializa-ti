<template>
  <div>
    <h1 v-text="title"></h1>
    <ul>
      <task-add-component></task-add-component>
      <li v-for="(task, index) in getTasks" :key="index">
        {{ task.name }}
      </li>

    </ul>
  </div>
</template>

<script>
import TaskAddComponent from './TaskAddComponent'
export default {
  data() {
    return {
      title: "Listas de tarefas",
    };
  },
  computed: {
    getTasks() {
      return this.$store.state.tasks;
    },
  },
  components:{
    TaskAddComponent
  }
};
</script>

<style scoped>
</style>