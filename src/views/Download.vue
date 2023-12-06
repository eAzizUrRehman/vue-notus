<template>
  <div class="sticky top-0 z-50 w-full bg-white shadow-md">
    <transition name="fade">
      <div
        v-if="showNavbar"
        :class="{
          'fixed left-0 top-0 z-50 w-full bg-white shadow-lg': showNavbar
        }"
      >
        <Navbar />
      </div>
    </transition>
    <main>
      <div class="download-hero-gradient-color">
        <QuickLinks />
        <Hero />
      </div>
      <div class="download-container-wider w-full bg-white">
        <div class="w-full">
          <!-- <ProductDescription /> -->
        </div>
      </div>
      <div class="comment-background-img bg-download-dim-black pb-20">
        <Help />
        <SharingIsCaring />
      </div>
    </main>
    <div class="bg-footer-bg-color text-white">
      <Footer />
    </div>
  </div>
</template>

<script>
import {
  Navbar,
  QuickLinks,
  Hero,
  ProductDescription,
  SharingIsCaring,
  Help,
  Footer
} from '../sections/download'
export default {
  data() {
    return {
      showNavbar: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop

      this.showNavbar = scrollPosition >= 100
    }
  },
  components: {
    Navbar,
    QuickLinks,
    Hero,
    ProductDescription,
    SharingIsCaring,
    Help,
    Footer
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(-100%);
}
.download-hero-gradient-color {
  background: linear-gradient(-45deg, #209077 0%, #1ae28a 100%);
}
</style>
