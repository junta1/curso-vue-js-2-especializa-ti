<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <tasks-component @calledParent="answerSon" :items="items" :title="title"></tasks-component>
    <list-items-component :title="title" :items="items"></list-items-component>
  </div>
</template>

<script>
import TasksComponent from "./components/TasksComponent";
import ListItemsComponent from "./components/ListItemsComponent";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: "Lista de Tarefas",
      items: ["arroz", "feijão"],
    };
  },
  components: {
    TasksComponent,
    ListItemsComponent,
  },
  methods:{
    answerSon(){
      alert('pai');
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
