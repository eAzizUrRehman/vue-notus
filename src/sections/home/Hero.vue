<template>
  <section
    class="container-wider max-w-1/2 flex h-screen max-h-[860px] scale-100 items-center justify-between bg-white sm:scale-110 lg:scale-100"
  >
    <div
      class="flex w-[71rem] flex-col items-start justify-start px-5 sm:pl-10 md:px-20 lg:px-0"
    >
      <h1
        class="dim max-w-xl text-3xl font-semibold leading-normal tracking-wide"
      >
        {{ hero.title }}
      </h1>
      <p class="text-md mb-10 mt-4 max-w-xl leading-relaxed tracking-wide">
        <span class="dim">
          {{ hero.description1 }}
        </span>
        <span>
          {{ hero.spanText }}
        </span>
        <span class="dim">
          {{ hero.description2 }}
        </span>
      </p>

      <div class="dim flex items-center justify-start gap-1.5">
        <Button :text="hero.buttonText1" bgColor="10B981" href="/" />
        <Button :text="hero.buttonText2" bgColor="334155" href="/" />
      </div>
    </div>
    <div class="hidden w-full lg:block">
      <img
        loading="lazy"
        :src="heroImg"
        alt=""
        class="translate-x-24 scale-110 object-cover"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { Button } from '../../components'
import { heroImg } from '../../assets/home'

export default {
  data() {
    return {
      heroImg
    }
  },
  components: {
    Button
  },
  computed: {
    ...mapState({
      hero: (state) => state.hero
    })
  }
}
</script>
