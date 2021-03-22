<template>
  <div id="app" class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/product">Produtos</router-link>
    <router-link to="/product/create">Novo produto</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
.preloader{
  max-width: 80px;
}
</style>
