<template>
  <div>
    <h1 v-text="title"></h1>
    <form @submit.prevent="onSubmit">
      <div :class="{'has-error': error}">
        <input type="text" placeholder="CEP:" v-model="cep">
        <button type="submit">Buscar</button>
        
        <div v-if="error" v-text="error"></div>
      </div>
    </form>

    <div v-if="preloader">
      <img src="../assets/preloader.gif" alt="Carregando..">
    </div>


    <div v-if="address.cep">
      <p>Cep: {{address.cep}}</p>
      <p>Bairro: {{address.bairro}}</p>
      <p>Logradouro: {{address.logradouro}}</p>
      <p>Cidade: {{address.localidade}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: 'Busca CEP',
      cep: '',
      address: {},
      preloader: false,
      error: ''
    }
  },
  methods: {
    onSubmit(){
      this.preloader = true;
      this.reset();

      axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
      .then(response => {
        console.log(response.data);

        if(response.data.erro){
          return this.error = 'Cep inválido';
        }

        this.address = response.data;
      })
      .catch(error => {
        console.log(error);
        this.error = '404';
      })
      .finally(() => {
        this.preloader = false;
      });
    },
    reset(){
      this.error = '';
      this.address = {};
    }
  },
}
</script>

<style scoped>
.has-error{color: rgb(184, 33, 33);}
.has-error input{border: 1px solid rgb(184, 33, 33);}
</style>