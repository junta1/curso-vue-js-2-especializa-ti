<template>
  <div class="comp">
    <h1>{{title}}</h1>
    <p>Teste</p>
    <span>Teste span</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Curso de Vue Js'
    }
  }
};
</script>

<style scoped>
p {
  color: red;
}

.comp {
  border: 1px solid yellow;
  margin: 5px;
  padding: 5px;
}
</style>