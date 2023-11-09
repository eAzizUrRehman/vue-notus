<template>
  <div class="container-tighter flex items-end">
    <div class="w-1/2 grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-0">
      <div v-for="column in javascriptComponents.columns" :key="column.id">
        <div
          v-for="card in column.cards"
          :key="card.id"
          :class="{
            'lg:mt-12 mt-0': card.id === 4,
            'mb-10': card.id !== 6,
          }"
        >
          <div
            class="w-full lg:py-8 py-6 flex flex-col justify-center items-center rounded-lg bg-black"
            :class="bgColor(card)"
          >
            <img
              :src="card.iconUrl"
              alt=""
              class="lg:w-16 w-12 lg:h-16 h-12 rounded-full"
            />
            <h4 class="lg:mt-4 mt-3 lg:text-base text-xs font-semibold text-tertiary-white tracking-wider">
              {{ card.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 lg:pl-40 md:pl-20 pl-10 lg:pb-10 pb-0 my-auto">
      <ContentDetailsCard :component="javascriptComponents" />
    </div>
  </div>
</template>

<script>
import {} from "../../assets/home";
import { ContentDetailsCard } from "../../components";
import store from "../../store";
export default {
  data() {
    return {};
  },
  components: {
    ContentDetailsCard,
  },
  methods: {
    bgColor() {
      return (card) => {
        return `bg-[#${card.bgColor}]`;
      };
    },
  },
  computed: {
    javascriptComponents() {
      return store.state.javascriptComponents;
    },
  },
};
</script>
