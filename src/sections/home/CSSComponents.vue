<template>
  <section
    class="container-tighter flex scale-100 flex-col sm:scale-110 md:scale-125 lg:scale-100 lg:flex-row"
  >
    <div class="mx-auto mb-20 w-fit lg:mx-0 lg:mb-0 lg:w-1/2">
      <ContentDetailsCard :component="cssComponents" />
    </div>
    <div
      class="relative mx-auto mt-20 block aspect-[13/10] w-[20rem] px-20 sm:w-[35rem] md:w-[38rem] lg:mx-0 lg:mt-0 lg:w-1/2"
    >
      <img
        loading="lazy"
        :src="excellentServices"
        alt=""
        class="absolute -top-28 left-4 w-36 rounded-lg shadow-lg sm:-top-20 sm:left-20 sm:w-48 md:w-56 lg:w-48"
      />
      <img
        loading="lazy"
        :src="github"
        alt=""
        class="absolute left-24 top-12 w-20 rounded shadow-lg sm:left-48 sm:top-32 sm:w-24 md:top-40 md:w-32 lg:top-32 lg:w-24"
      />
      <img
        loading="lazy"
        :src="rominaHadid"
        alt=""
        class="absolute right-0 w-32 rounded-lg shadow-lg sm:w-52 md:-top-6 md:w-60 lg:top-0 lg:w-48"
      />
      <img
        loading="lazy"
        :src="freeRevision"
        alt=""
        class="absolute -left-4 bottom-12 w-32 rounded-lg shadow-lg sm:-left-8 sm:bottom-16 sm:w-52 md:left-0 md:w-56 lg:-left-8 lg:w-52"
      />
      <img
        loading="lazy"
        :src="regular"
        alt=""
        class="absolute bottom-16 right-20 w-24 rounded-lg shadow-lg sm:bottom-32 sm:right-32 sm:w-36 md:bottom-36 md:w-40 lg:bottom-32 lg:w-32"
      />
      <img
        loading="lazy"
        :src="indigoMenu"
        alt=""
        class="absolute bottom-0 right-0 w-[95%] rounded-lg shadow-lg"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import {
  excellentServices,
  github,
  indigoMenu,
  regular,
  rominaHadid,
  freeRevision
} from '../../assets/home'
import { ContentDetailsCard } from '../../components'

export default {
  data() {
    return {
      excellentServices,
      github,
      indigoMenu,
      regular,
      rominaHadid,
      freeRevision
    }
  },
  components: {
    ContentDetailsCard
  },
  computed: {
    ...mapState({
      cssComponents: (state) => state.cssComponents
    })
  }
}
</script>
