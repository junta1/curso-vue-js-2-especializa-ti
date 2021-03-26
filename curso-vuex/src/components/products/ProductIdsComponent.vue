<template>
  <div>
    <form @submit.prevent="onSubmit">
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>

export default {
  props:{
    ids:{
      type: Array,
      default: [],
      required: true,
    }
  },
  data(){
    return {
    }
  },
  methods: {
    onSubmit(){
      this.$store.commit('ADD_PRODUCT_ID', this.ids);
    }
  },
}
</script>

<style scoped>

</style>