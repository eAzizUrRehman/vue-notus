<template>
  <div class="">
    <div class="w-full sticky top-0 z-50 bg-navbar-gray">
      <Navbar />
    </div>
    <div class="">
      <div class="docs-container flex">
        <div class="min-w-[15.2%] bg-sidebar-green ">
          <Sidebar />
        </div>
        <div class="w-full ">
          <CentralContent />
          <!-- <router-view /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, CentralContent } from "../sections/docs";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Sidebar,
    CentralContent,
  },
};
</script>
