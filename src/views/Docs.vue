<template>
  <main class="">
    <div class="sticky top-0 z-50 w-full bg-navbar-gray">
      <Navbar />
    </div>
    <div class="">
      <div class="docs-container flex">
        <div class="min-w-[15.2%] bg-sidebar-green">
          <Sidebar />
        </div>
        <div class="w-full">
          <CentralContent />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Navbar, Sidebar, CentralContent } from '../sections/docs'
export default {
  components: {
    Navbar,
    Sidebar,
    CentralContent
  }
}
</script>
