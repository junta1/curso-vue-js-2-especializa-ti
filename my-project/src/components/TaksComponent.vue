<template>
  <div class="comp">
    <h1>{{title}}</h1>
    <table>
      <tr>
        <th>Nome</th>
        <th>Completa</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>{{task.name}}</td>
        <td>{{task.completed ? 'Sim' : 'Não' }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data()  {
    return {
      tasks: [
        {name: 'Lavar louça', completed: true},
        {name: 'Lavar carro', completed: false},
        {name: 'Lavar roupa', completed: true},
        {name: 'Lavar pratos', completed: false},
      ],
      title: 'Taks Component'
    }
  }
}
</script>

<style scoped>
.comp{
  border: 1px solid red;
  margin: 5px;
  padding: 5px;
}
</style>