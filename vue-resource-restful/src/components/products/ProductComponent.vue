<template lang="pug">
  <div>
    <h1>{{title}}</h1>

    <div class="row">
      <div class="col">
        <router-link to="/product/create" class="btn btn-info btn-crea" >Cadastrar Produto</router-link>
      </div>

      <div class="col">
        <product-search-component @search="searchProduct"></product-search-component>
      </div>
    </div>
    <div class="alert alert-danger text-center" v-if="confirmDeleteAlert">
      <h2>Deseja realmente deletar?</h2>
        <hr>
      <button class="btn btn-danger" @click.prevent="deleteProduct">Deletar Agora</button>
    </div>
    
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
            <router-link :to="{name: 'product.edit', params: {id: product.id}}" class="btn btn-info">Editar</router-link> 
            <a href="#" @click.prevent="confirmDelete(product.id)" class="btn btn-danger" >Deletar</a>
          </td>
        </tr>
      </tbody>
    </table>

    <pagination-component :pagination="products" @paginate="getProducts"></pagination-component>
    <preloader-component :preloader="preloader"></preloader-component>
  </div>
</template>

<script>
import PaginationComponent from '../general/PaginationComponent'
import PreloaderComponent from '../general/PreloaderComponent'
import ProductSearchComponent from './ProductSearchComponent'

export default {
  data() {
    return {
      title: 'Lista de produtos',
      products: {},
      preloader: false,
      confirmDeleteAlert: false,
      idProductDelete: 0,
      filter: ''
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    getProducts(){
      this.preloader = true

      this.$http.get(`http://localhost:8000/api/v1/products?page=${this.products.current_page}&filter=${this.filter}`)
      .then(response => {
        this.products = response.body
        console.log(this.products)
      },error =>{
        console.log(error)
      }).finally(() => this.preloader = false)
    },
    deleteProduct(){
      this.preloader = true

      this.$http.delete(`http://localhost:8000/api/v1/products/${this.idProductDelete}`)
      .then(response => {
        this.getProducts();
      },error =>{
        console.log(error)
      }).finally(() => {
        this.preloader = false,
        this.confirmDeleteAlert = false;
        })
    },
    confirmDelete(id){
      this.confirmDeleteAlert = true;

      this.idProductDelete = id;
    },
    searchProduct(filter){
      this.filter = filter;

      this.getProducts();
    }
  },
  components:{
    PaginationComponent,
    PreloaderComponent,
    ProductSearchComponent
  }
}
</script>

<style scoped>
.btn-crea{
  margin: 10px 0;
}
</style>