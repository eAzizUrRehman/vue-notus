<template>
  <div class="w-full font-Poppins text-primary-gray">
    <div
      v-if="isNotDocsRoute && isNotDownloadRoute"
      class="w-full sticky top-0 z-50 shadow-md bg-tertiary-white"
    >
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./sections/Navbar.vue";

export default {
 
  components: {
    Navbar,
  },
  computed: {
    isNotDocsRoute() {
      return !this.$route.path.startsWith("/docs");
    },
    isNotDownloadRoute() {
      return !this.$route.path.startsWith("/download");
    },
  },
};
</script>
