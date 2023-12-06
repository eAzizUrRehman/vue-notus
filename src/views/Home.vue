<template>
  <main class="w-full overflow-hidden">
    <Hero />
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
      <div class="w-full bg-background-green pb-[35rem]">
        <div class="w-full -translate-y-16">
          <Content />
        </div>
        <div class="mb-32 mt-0 w-full sm:mb-60 sm:mt-20">
          <CSSComponents />
        </div>
        <div class="w-full">
          <JavascriptComponents />
        </div>
        <div class="mt-32 w-full sm:mt-60">
          <ComplexDocumentation />
        </div>
      </div>
    </div>
    <div class="github-background-img bg-background-gray">
      <div
        class="inline-block w-full -translate-y-96 md:block lg:-translate-y-72"
      >
        <BeautifulExamplePages />
      </div>
      <div class="w-full sm:ml-20 lg:ml-40">
        <OpenSource />
      </div>
      <div class="w-full translate-y-32">
        <StarterKit />
      </div>
    </div>
    <div class="w-full bg-footer-green pt-96">
      <Footer />
    </div>
  </main>
</template>

<script>
import {
  Hero,
  Content,
  CSSComponents,
  JavascriptComponents,
  ComplexDocumentation,
  BeautifulExamplePages,
  OpenSource,
  StarterKit,
  Footer
} from '../sections/home'

import { triangle } from '../assets/home'
export default {
  data() {
    return { triangle }
  },
  components: {
    Hero,
    Content,
    CSSComponents,
    JavascriptComponents,
    ComplexDocumentation,
    BeautifulExamplePages,
    OpenSource,
    StarterKit,
    Footer
  }
}
</script>
