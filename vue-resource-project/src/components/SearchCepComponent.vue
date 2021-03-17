<template>
    <div>
        <h1 v-text="title"></h1>
        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Informe o CEP" v-model="cep">
            <button type="submit">Buscar CEP</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Busca Cep com Vue JS',
            cep: ''
        }
    },
    methods: {
        onSubmit(){
            this.$http.get('https://api.postmon.com.br/v1/' + this.cep)
            .then(response => {
                console.log(response.body)
            }, error => console.log(error))
        }
    }
}
</script>

<style scoped>

</style>
