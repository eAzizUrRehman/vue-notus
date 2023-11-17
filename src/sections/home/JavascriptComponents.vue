<template>
  <section
    class="container-tighter h-full flex sm:flex-row flex-col-reverse items-end"
  >
    <div
      class="sm:w-1/2 w-full sm:mx-0 mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-0"
    >
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
            :style="{ backgroundColor: '#' + card.bgColor }"
          >
            <img
              loading="lazy"
              :src="card.iconUrl"
              alt=""
              class="lg:w-16 w-12 lg:h-16 h-12 rounded-full"
            />
            <h4
              class="lg:mt-4 mt-3 lg:text-base text-xs font-semibold text-tertiary-white tracking-wider"
            >
              {{ card.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div
      class="sm:w-1/2 w-fit sm:mx-0 mx-auto lg:pl-40 md:pl-20 sm:pl-10 pl-0 lg:pb-10 pb-0 my-auto sm:mb-auto mb-32 sm:scale-100 scale-110"
    >
      <ContentDetailsCard :component="javascriptComponents" />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { ContentDetailsCard } from "../../components";

export default {
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
    ...mapState({
      javascriptComponents: (state) => state.javascriptComponents,
    }),
  },
};
</script>
