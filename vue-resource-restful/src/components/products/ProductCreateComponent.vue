<template>
  <div>
    <h1>{{ title }}</h1>

    <form @submit.prevent="createProduct">
      <div class="form-group" :class="{'has-warning': errorsValidation}">
        <input type="text" class="form-control" placeholder="Nome:" v-model="product.name"/>
        
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
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </div>
    </form>

    <preloader-component :preloader="preloader"></preloader-component>

  </div>
</template>

<script>
import PreloaderComponent from '../general/PreloaderComponent'

export default {
  data() {
    return {
      title: "Cadastrar novo produto",
      product: {
        name: "",
        description: "",
      },
      errorsValidation: [],
      preloader: false
    };
  },
  methods: {
    createProduct() {
      this.preloader = true
      this.$http
        .post("http://localhost:8000/api/v1/products", this.product)
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
    },
  },
  components:{
    PreloaderComponent
  }
};
</script>

<style scoped>
</style>