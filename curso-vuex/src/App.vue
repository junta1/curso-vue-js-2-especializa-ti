<template>
  <div id="app" class="container">
    <router-link to="/" >Home</router-link>
    <router-link to="/tasks" >Tarefas ({{totalTasks}}/{{totalTasksNotCompleted}})</router-link>
    <router-link to="/products">Products</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed:{
    totalTasksNotCompleted(){
      return this.$store.getters.tasksNotCompleted.length;
    },
    totalTasks(){
      return this.$store.getters.sortedtasks.length;
    }
  }
}
</script>

<style>
</style>
