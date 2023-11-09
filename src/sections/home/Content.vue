<template>
  <div class="container-wider flex lg:flex-row flex-col">
    <div class="lg:w-1/2 w-full h-full flex justify-center items-start">
      <div class="lg:w-[25rem] w-[35rem] bg-secondary-green rounded-lg">
        <img :src="laptop" alt="" class="rounded-t-lg" />
        <div class="py-10 px-8 text-tertiary-white rounded-lg">
          <h2
            class="font-bold md:text-lg text-2xl tracking-wide mb-2 sm:text-start text-center"
          >
            {{ contentBanner.title }}
          </h2>
          <p
            class="md:text-sm text-lg font-extralight sm:text-start text-center"
          >
            {{ contentBanner.description }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="lg:w-1/2 w-full grid sm:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 px-10 py-28 mx-auto"
    >
      <div v-for="contentCard in contentCards" :key="contentCard.id" class="">
        <ContentCard :contentCard="contentCard" />
      </div>
    </div>
  </div>
</template>

<script>
import { ContentCard } from "../../components";
import { laptop } from "../../assets/home";
import store from "../../store";

export default {
  data() {
    return {
      laptop,
    };
  },
  components: {
    ContentCard,
  },
  computed: {
    contentCards() {
      return store.state.contentCards;
    },
    contentBanner() {
      return store.state.contentBanner;
    },
  },
};
</script>
