<template>
  <section
    class="container-tighter flex h-full flex-col-reverse items-end sm:flex-row"
  >
    <div
      class="mx-auto grid w-full grid-cols-1 gap-0 sm:mx-0 sm:w-1/2 lg:grid-cols-2 lg:gap-6"
    >
      <div v-for="column in javascriptComponents.columns" :key="column.id">
        <div
          v-for="card in column.cards"
          :key="card.id"
          :class="{
            'mt-0 lg:mt-12': card.id === 4,
            'mb-10': card.id !== 6
          }"
        >
          <div
            class="flex w-full flex-col items-center justify-center rounded-lg bg-black py-6 lg:py-8"
            :style="{ backgroundColor: '#' + card.bgColor }"
          >
            <img
              loading="lazy"
              :src="card.iconUrl"
              alt=""
              class="h-12 w-12 rounded-full lg:h-16 lg:w-16"
            />
            <h4
              class="mt-3 text-xs font-semibold tracking-wider text-tertiary-white lg:mt-4 lg:text-base"
            >
              {{ card.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mx-auto my-auto mb-32 w-fit scale-110 pb-0 pl-0 sm:mx-0 sm:mb-auto sm:w-1/2 sm:scale-100 sm:pl-10 md:pl-20 lg:pb-10 lg:pl-40"
    >
      <ContentDetailsCard :component="javascriptComponents" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { ContentDetailsCard } from '../../components'

export default {
  components: {
    ContentDetailsCard
  },
  methods: {
    bgColor() {
      return (card) => {
        return `bg-[#${card.bgColor}]`
      }
    }
  },
  computed: {
    ...mapState({
      javascriptComponents: (state) => state.javascriptComponents
    })
  }
}
</script>
