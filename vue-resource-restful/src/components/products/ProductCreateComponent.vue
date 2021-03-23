<template>
  <div>
    <h1>{{ title }}</h1>

    <form @submit.prevent="createProduct">
      <div>
        <input
          type="text"
          class="form-control"
          placeholder="Nome:"
          v-model="product.name"
        />
      </div>
      <div>
        <input
          type="text"
          class="form-control"
          placeholder="Descrição:"
          v-model="product.description"
        />
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Cadastrar novo produto",
      product: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    createProduct() {
      this.$http
        .post("http://localhost:8000/api/v1/products", this.product)
        .then(
          (response) => {
            console.log(response.body);
            this.$router.push('/product')
          },
          (error) => {
            console.log(error);
          }
        )
        .finally(() => console.log("Finalizou!"));
    },
  },
};
</script>

<style scoped>
</style>