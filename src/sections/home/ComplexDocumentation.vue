<template>
  <section class="container-tighter flex flex-col gap-16 sm:gap-32 lg:flex-row">
    <div
      class="mx-auto w-fit scale-100 sm:scale-110 md:scale-125 lg:mx-0 lg:w-1/3 lg:scale-100"
    >
      <ContentDetailsCard :component="complexDocumentation" />
    </div>
    <div class="my-auto w-full pr-10 lg:mr-0 lg:w-2/3">
      <img
        loading="lazy"
        :src="badge"
        alt=""
        class="rounded-lg shadow-xl"
        style="transform: scale(1) perspective(1040px) rotateY(-11deg)"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { badge } from '../../assets/home'
import { ContentDetailsCard } from '../../components'

export default {
  data() {
    return { badge }
  },
  components: { ContentDetailsCard },
  computed: {
    ...mapState({
      complexDocumentation: (state) => state.complexDocumentation
    })
  }
}
</script>
