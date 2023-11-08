<template>
  <div class="container-wider flex">
    <div class="w-1/2 h-full flex justify-center items-start">
      <div class="w-[25rem] h-[30rem] bg-secondary-green rounded-lg">
        <img :src="laptop" alt="" class="rounded-t-lg" />
        <div class="py-10 px-8 text-tertiary-white">
          <h2 class="font-bold text-lg tracking-wide mb-2">
            {{ contentBanner.title }}
          </h2>
          <p class="text-sm font-extralight">
            {{ contentBanner.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-1/2 grid grid-cols-2 gap-x-20 gap-y-10 px-10 py-28">
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
