<template>
  <section class="w-full"></section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      productDescription: (state) => state.productDescription
    })
  }
}
</script>
