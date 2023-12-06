<template>
  <section>
    <div class="container-wider dim flex flex-col items-center">
      <h3 class="text-center text-3xl font-bold">
        {{ beautifulExamplePages.title }}
      </h3>
      <p class="mb-10 mt-6 max-w-lg text-center md:mb-20 md:max-w-2xl">
        {{ beautifulExamplePages.description }}
      </p>
    </div>
    <div
      class="container-wider flex flex-col items-center justify-center gap-16 px-6 lg:flex-row lg:gap-8"
    >
      <div
        v-for="page in beautifulExamplePages.pages"
        :key="page.id"
        class="mx-10 sm:mx-24 md:mx-32 lg:mx-0"
      >
        <h4
          class="mb-8 text-center text-2xl font-bold tracking-wider lg:mb-5 lg:text-lg"
          :class="
            page.id !== 1 ? 'text-tertiary-white lg:text-primary-gray' : ''
          "
        >
          {{ page.title }}
        </h4>
        <img
          loading="lazy"
          :src="page.imgUrl"
          alt=""
          class="transform rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-4"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { ContentDetailsCard } from '../../components'
export default {
  components: { ContentDetailsCard },
  computed: {
    ...mapState({
      beautifulExamplePages: (state) => state.beautifulExamplePages
    })
  }
}
</script>
