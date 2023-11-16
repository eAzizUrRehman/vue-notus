<template>
  <div class="w-full"></div>
</template>

<script>
export default {
  computed: {
    productDescription() {
      return this.$store.state.productDescription;
    },
  },
};
</script>
