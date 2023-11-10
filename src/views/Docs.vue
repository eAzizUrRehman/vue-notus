<template>
  <div class="">
    <div class="w-full sticky top-0 z-50 bg-navbar-gray">
      <Navbar />
    </div>
    <div class="docs-container">
      <div class="max-w-[20%]">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar } from "../sections/docs";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
