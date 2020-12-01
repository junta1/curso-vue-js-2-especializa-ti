<template>
  <div>
    <form>
      <input type="text" placeholder="Nome" v-model="userData.name">
      {{userData.name}}
      <hr>
      <input type="email" placeholder="E-mail" v-model="userData.email">
      {{userData.email}}
      <hr>
      <input type="number" placeholder="Idade" v-model.number="userData.age">
      {{userData.age}}
      <hr>
      <input type="radio" name="sex" value="M" v-model="userData.sex"> Masculino
      <input type="radio" name="sex" value="F" v-model="userData.sex"> Feminino
      <p v-if="userData.sex">Sexo Selecionado: {{userData.sex}}</p>
      <hr>
      <select v-model="userData.state">
        <option value="">Selecioine o Estado</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="MG">Minas Gerais</option>
      </select>
      <div v-if="userData.state">Estado Selecionado: {{userData.state}}</div>
      <hr>
      <label for="agree">Concordo com os temos de uso</label>
      <input type="checkbox" id="agree">
      <hr>
      <textarea cols="30" rows="10" v-model="description"></textarea>
      <div style="white-space: pre;" v-text="description"></div>
      <hr>
      <button type="submit">Enviar Agora</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userData: {
        name:'',
        email:'',
        age:null,
        sex:'',
        state:'',
      },
      terms: true,
      description: '',
    }
  }
}
</script>

<style scoped>

</style>