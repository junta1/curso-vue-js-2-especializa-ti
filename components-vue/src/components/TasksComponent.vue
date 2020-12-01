<template>
  <div>
    <h2>{{ title }}</h2>

    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>

    <button @click="callParent">Pai</button>
  </div>
</template>

<script>
export default {
  props: ["items", "title"],
  data() {
    return {};
  },
  methods: {
    callParent() {
      alert('filho')
      this.$emit('calledParent');
    },
  },
};
</script>

<style scoped>
</style>