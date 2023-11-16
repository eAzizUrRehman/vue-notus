<template>
  <div class="w-full sticky top-0 z-50 shadow-md bg-white">
    <transition name="fade">
      <div
        v-if="showNavbar"
        :class="{
          'fixed top-0 left-0 w-full z-50 bg-white shadow-lg': showNavbar,
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
      <div class="bg-download-dim-black h-screen">
        <Help />
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
  Help,
  Footer,
} from "../sections/download";
export default {
  data() {
    return {
      showNavbar: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      this.showNavbar = scrollPosition >= 100;
      console.log(this.showNavbar);
    },
  },

  components: {
    Navbar,
    QuickLinks,
    Hero,
    ProductDescription,
    Help,
    Footer,
  },
};
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
