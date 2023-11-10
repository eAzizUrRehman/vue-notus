<template>
  <div class="w-full overflow-hidden">
    <div class="w-full sticky top-0 z-50 shadow-md bg-tertiary-white">
      <Navbar />
    </div>
    <div class="w-full">
      <Hero />
    </div>

    <div>
      <svg
        class="overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="fill-background-green"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
      <div class="w-full pb-[35rem] bg-background-green">
        <div class="w-full -translate-y-16">
          <Content />
        </div>
        <div class="w-full sm:mt-20 mt-0 sm:mb-60 mb-32">
          <CSSComponents />
        </div>
        <div class="w-full">
          <JavascriptComponents />
        </div>
        <div class="w-full sm:mt-60 mt-32">
          <ComplexDocumentation />
        </div>
      </div>
    </div>
    <div class="bg-background-gray github-background-img">
      <div
        class="w-full lg:-translate-y-72 -translate-y-96 md:block inline-block"
      >
        <BeautifulExamplePages />
      </div>
      <div class="w-full lg:ml-40 sm:ml-20">
        <OpenSource />
      </div>
      <div class="w-full translate-y-32">
        <StarterKit />
      </div>
    </div>
    <div class="w-full pt-96 bg-footer-green">
      <Footer />
    </div>
  </div>
</template>

<script>
import {
  Navbar,
  Hero,
  Content,
  CSSComponents,
  JavascriptComponents,
  ComplexDocumentation,
  BeautifulExamplePages,
  OpenSource,
  StarterKit,
  Footer,
} from "../sections/home";

import { triangle } from "../assets/home";
export default {
  data() {
    return { triangle };
  },
  components: {
    Navbar,
    Hero,
    Content,
    CSSComponents,
    JavascriptComponents,
    ComplexDocumentation,
    BeautifulExamplePages,
    OpenSource,
    StarterKit,
    Footer,
  },
};
</script>
