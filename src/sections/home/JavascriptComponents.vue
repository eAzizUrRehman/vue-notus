<template>
  <div class="container-tighter flex items-end">
    <div class="w-1/2 grid grid-cols-2 gap-6">
      <div v-for="column in javascriptComponents.columns" :key="column.id">
        <div
          v-for="card in column.cards"
          :key="card.id"
          :class="{
            'mt-12': card.id === 4,
            'mb-10': card.id !== 6,
          }"
        >
          <div
            class="w-full py-8 flex flex-col justify-center items-center rounded-lg bg-black"
            :class="bgColor(card)"
          >
            <img :src="card.iconUrl" alt="" class="w-16 h-16 rounded-full" />
            <h4 class="mt-4 font-semibold text-tertiary-white tracking-wider">
              {{ card.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 pl-40 pb-10">
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
