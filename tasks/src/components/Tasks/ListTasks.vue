<template>
  <div>
    <h2>{{title}}</h2>

<form class="form form-inline" @submit.prevent="onSubmit()">
    <input type="text" name="" id="" class="form-control" placeholder="Nome" v-model="task.name">
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>

    <table class="table table-dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th with="150px">Ações</th>
        </tr>
      </thead>
      <tbody v-for="(task, index) in tasks" :key="index">
        <tr>
          <td>{{task.id}}</td>
          <td>{{task.name }}</td>
          <td>
            <a href="#" @click.prevent="edit(index)" class="btn btn-info">Editar</a>
            <a href="" class="btn btn-danger">Deletar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Lista de Tarefas',
      tasks: [],
      task:
        {
        id: '',
        name: ''
        },
      updating: false,
      updatingIndex: ''
    }
  },
  methods:{
    onSubmit(){
      if(this.updating){
        return this.update();
      }
      return this.save()
    },
    save(){
      this.task.id = this.tasks.length + 1;      
      this.tasks.push(this.task);
      this.clearForm();      

    },
    edit(index){
      this.task = this.tasks[index];

      this.updatingIndex = index;

      this.updating = true;
    },
    update(){
      this.tasks[this.updatingIndex] = this.task;
      this.updating = false;
      this.clearForm();      
    },
    clearForm(){
      this.task = {
          id: '',
          name: ''
        }
    }
  }
}
</script>

<style scoped>
  
</style>