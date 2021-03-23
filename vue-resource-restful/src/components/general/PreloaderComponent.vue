<template>
  <div v-if="preloader">
    <img src="../../assets/preloader.gif" alt="preloader" class="preloader" />
  </div>
</template>

<script>
export default {
  props: {
    preloader: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped>
.preloader {
  max-width: 80px;
}
</style>