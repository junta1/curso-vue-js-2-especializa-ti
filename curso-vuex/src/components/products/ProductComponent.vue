<template>
  <div class="">
    <h1 v-text="title"></h1>
    <table class="table table-dark">
      <thead>
        <tr>
          <th>#id</th>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(product, index) in products.data" :key="index">
          <td>
            <input type="checkbox" id="id" :value="product.id" v-model="ids">
            <label for="id">{{product.id}}</label>
          </td>
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
        </tr>
      </tbody>
    </table>
    <pagination-component :pagination="products" @paginate="getProducts"></pagination-component>
    
    <span>IDS assinalados: {{ ids }}</span>

    <product-ids-component :ids="ids"></product-ids-component>

</div>
</template>

<script>
import PaginationComponent from '../general/PaginationComponent';
import ProductIdsComponent from '../products/ProductIdsComponent'; 
export default {
  data() {
    return {
      title: 'Lista de produtos para selecionar com checkbox',
      products: {},
      ids: [],
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    getProducts(){
      this.$http.get(`http://localhost:8000/api/v1/products?page=${this.products.current_page}`)
      .then(response => {
          this.products = response.body;
          console.log(response.body);
      },error=>{
          console.log(error);
      });
    },
    getIdSelected(id){
        this.ids = id;
        alert(ids);
        console.log(ids);
    }
  },
  components:{
    PaginationComponent,
    ProductIdsComponent
  }
}
</script>

<style scoped>

</style>