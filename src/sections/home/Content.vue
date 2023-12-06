<template>
  <section class="container-wider flex flex-col lg:flex-row">
    <div class="flex h-full w-full items-start justify-center lg:w-1/2">
      <div class="w-[35rem] rounded-lg bg-secondary-green lg:w-[25rem]">
        <img loading="lazy" :src="laptop" alt="" class="rounded-t-lg" />
        <div class="rounded-lg px-8 py-10 text-tertiary-white">
          <h2
            class="mb-2 text-center text-2xl font-bold tracking-wide sm:text-start md:text-lg"
          >
            {{ contentBanner.title }}
          </h2>
          <p
            class="text-center text-lg font-extralight sm:text-start md:text-sm"
          >
            {{ contentBanner.description }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="mx-auto grid w-full grid-cols-1 gap-x-20 gap-y-10 px-10 py-28 sm:grid-cols-2 lg:w-1/2"
    >
      <div v-for="contentCard in contentCards" :key="contentCard.id">
        <ContentCard :contentCard="contentCard" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { ContentCard } from '../../components'
import { laptop } from '../../assets/home'

export default {
  data() {
    return {
      laptop
    }
  },
  components: {
    ContentCard
  },
  computed: {
    ...mapState({
      contentCards: (state) => state.contentCards,
      contentBanner: (state) => state.contentBanner
    })
  }
}
</script>
