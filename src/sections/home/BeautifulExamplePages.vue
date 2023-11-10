<template>
  <div>
    <div class="container-wider dim flex flex-col items-center">
      <h3 class="font-bold text-3xl text-center">
        {{ beautifulExamplePages.title }}
      </h3>
      <p class="md:max-w-2xl max-w-lg mt-6 md:mb-20 mb-10 text-center">
        {{ beautifulExamplePages.description }}
      </p>
    </div>
    <div
      class="container-wider px-6 flex lg:flex-row flex-col justify-center items-center lg:gap-8 gap-16"
    >
      <div
        v-for="page in beautifulExamplePages.pages"
        :key="page.id"
        class="lg:mx-0 md:mx-32 sm:mx-24 mx-10"
      >
        <h4
          class="text-center lg:mb-5 mb-8 font-bold lg:text-lg text-2xl tracking-wider"
          :class="
            page.id !== 1 ? 'lg:text-primary-gray text-tertiary-white' : ''
          "
        >
          {{ page.title }}
        </h4>
        <img
          :src="page.imgUrl"
          alt=""
          class="rounded-xl hover:-translate-y-4 transform transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ContentDetailsCard } from "../../components";
import store from "../../store";
export default {
  data() {
    return {};
  },
  components: { ContentDetailsCard },
  computed: {
    beautifulExamplePages() {
      return store.state.beautifulExamplePages;
    },
  },
};
</script>
