<template>
  <div>
    <div class="container-wider dim flex flex-col items-center">
      <h3 class="font-bold text-3xl">
        {{ beautifulExamplePages.title }}
      </h3>
      <p class="max-w-2xl mt-6 mb-20 text-center">
        {{ beautifulExamplePages.description }}
      </p>
    </div>
    <div class="container-wider px-6 flex gap-8">
      <div v-for="page in beautifulExamplePages.pages" :key="page.id">
        <h4 class="text-center mb-5 font-bold text-lg tracking-wider">
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
