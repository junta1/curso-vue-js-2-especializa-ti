<template lang="pug">
  <div>
    <h1>{{title}}</h1>

    <router-link to="/product/create" class="btn btn-info btn-crea" >Cadastrar Produto</router-link>

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

    <pagination-component :pagination="products" @paginate="getProducts"></pagination-component>
    //- <ul class="pagination">
    //-   <li v-if="products.current_page - 1 >= 1" class="page-item">
    //-     <a href="#" class="page-link" @click.prevent="pagination(products.current_page - 1)">Voltar</a>
    //-   </li>
    //-   <li v-if="products.current_page < products.last_page" class="page-item">
    //-     <a href="#" class="page-link" @click.prevent="pagination(products.current_page + 1)">Pŕoxima página</a>
    //-   </li>
    //- </ul>

    <div v-if="preloader">
      <img src="../../assets/preloader.gif" alt="preloader" class="preloader">
    </div>

  </div>
</template>

<script>
import PaginationComponent from '../general/PaginationComponent'

export default {
  data() {
    return {
      title: 'Lista de produtos',
      products: {},
      preloader: false,
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    getProducts(){
      this.preloader = true

      this.$http.get(`http://localhost:8000/api/v1/products?page=${this.products.current_page}`)
      .then(response => {
        this.products = response.body
        console.log(this.products)
      },error =>{
        console.log(error)
      }).finally(() => this.preloader = false)
    },
    pagination(pageNumber){
      this.products.current_page = pageNumber

      this.getProducts()
    }
  },
  components:{
    PaginationComponent
  }
}
</script>

<style scoped>
.btn-crea{
  margin: 10px 0;
}
</style>