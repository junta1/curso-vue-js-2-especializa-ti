<template>
  <div>
    <h1>{{ title }}</h1>

    <form @submit.prevent="updateProduct">
      <div class="form-group" :class="{'has-warning': errorsValidation}">
        <input type="text" class="form-control" placeholder="Nome:" v-model="product.name" />
        
        <div v-if="errorsValidation.name">
          <p v-for="(error, index) in errorsValidation.name" :key="index" v-text="error"></p>
        </div>
      </div>
      
      <div class="form-group" :class="{'has-warning': errorsValidation}">
        <input type="text" class="form-control" placeholder="Descrição:" v-model="product.description" />
        <div v-if="errorsValidation.name">
          <p v-for="(error, index) in errorsValidation.description" :key="index" v-text="error"></p>
        </div>
      </div>

      <div>
        <button type="submit" class="btn btn-primary">Editar</button>
      </div>
    </form>

    <preloader-component :preloader="preloader"></preloader-component>

  </div>
</template>

<script>
import PreloaderComponent from '../general/PreloaderComponent'
export default {
  props:{
    id:{
      required: true,
      default: ''
    }
  },
  data() {
    return {
      title: "Editar produto",
      product: {
        name: "",
        description: "",
      },
      errorsValidation: [],
      preloader: false
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct(){
      this.preloader = true;
      this.$http.get(`http://localhost:8000/api/v1/products/${this.id}`)
        .then(response => {
          this.product = response.body;
          console.log(response.body);
        },(error) => {
            if (error.status == 404) {
              alert('Produto não encontrado!');
              this.$router.push('/product')
            }
          })
        .finally(() => {
          this.preloader = false
        });
    },
    updateProduct() {
      this.preloader = true
      this.$http
        .put(`http://localhost:8000/api/v1/products/${this.id}`, this.product)
        .then(
          (response) => {
            console.log(response.body);
            this.$router.push("/product");
          },
          (error) => {
            if (error.status == 422) {
              this.errorsValidation = error.body.errors;
              console.log(error);
            }
          }
        )
        .finally(() => {
          this.preloader = false
        });
    }
  },
  components:{
    PreloaderComponent
  }
};
</script>

<style scoped>
</style>