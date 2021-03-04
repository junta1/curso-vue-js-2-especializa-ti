<template>
  <div>
    <h2>{{ title }}</h2>

    <div class="row">
      <div class="col">
          <form class="form form-inline">
            <input type="text" class="form-control" placeholder="Encontrar" v-model="filter">
          </form>
      </div>

      <div class="col">
          <form class="form form-inline" @submit.prevent="onSubmit()">
            <input type="text" name="" id="" class="form-control" placeholder="Nome" v-model="task.name"/>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
      </div>
    </div>

    <table class="table table-dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th with="150px">Ações</th>
        </tr>
      </thead>
      <tbody v-for="(task, index) in filteredItems" :key="index">
        <tr>
          <td>{{ task.id }}</td>
          <td>{{ task.name }}</td>
          <td>
            <a href="#" @click.prevent="edit(task.id)" class="btn btn-info">Editar</a>
            <a href="" @click.prevent="deleteTask(task.id)" class="btn btn-danger">Deletar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Lista de Tarefas",
      tasks: [],
      task: {
        id: "",
        name: "",
      },
      updating: false,
      updatingIndex: "",
      filter: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.updating) {
        return this.update();
      }
      return this.save();
    },
    save() {
      this.task.id = this.tasks.length + 1;
      this.tasks.push(this.task);
      this.clearForm();
    },
    edit(id) {
      this.updatingIndex = this.findIndexItem(id);

      this.task = this.tasks[this.updatingIndex];

      this.updating = true;
    },
    update() {
      this.tasks[this.updatingIndex] = this.task;
      this.updating = false;
      this.clearForm();
    },
    clearForm() {
      this.task = {
        id: "",
        name: "",
      };
    },
    deleteTask(id) {
      let index = this.findIndexItem(id);
      this.tasks.splice(index, 1);
    },
    findIndexItem(id){
      for(let index = 0; index < this.tasks.length; index++){
        if(this.tasks[index].id === id){
          return index;
        }
      }
    }
  },
  computed: {
      filteredItems(){
        if(this.filter === ''){
            return this.tasks;
        }

        let vm =  this;

        return this.tasks.filter(task=> {
          return task.name.toLowerCase().indexOf(vm.filter.toLowerCase()) > - 1;
        });
      }
    }
};
</script>

<style scoped>
</style>
