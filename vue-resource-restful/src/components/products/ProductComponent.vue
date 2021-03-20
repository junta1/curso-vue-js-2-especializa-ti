<template lang="pug">
  <div>
    <h1>{{title}}</h1>

    <table class="table table-dark">
      <thead>
        <tr>
          <th>#id</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th with="200">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products.data" :key="index">
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>
            <a href="#" class="btn btn-info">Editar</a>
            <a href="#" class="btn btn-danger">Deletar</a>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="preloader">
      <img src="../../assets/preloader.gif" alt="preloader" class="preloader">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Lista de produtos',
      products: {},
      preloader: false
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    getProducts(){
      this.preloader = true

      this.$http.get('http://localhost:8000/api/v1/products')
      .then(response => {
        this.products = response.body
        console.log(this.products)
      },error =>{
        console.log(error)
      }).finally(() => this.preloader = false)
    }
  }
}
</script>

<style scoped>

</style>