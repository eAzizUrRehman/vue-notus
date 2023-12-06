<template>
  <section
    class="container-tighter scale-100 text-tertiary-white md:scale-110 lg:scale-125"
  >
    <ContentDetailsCard :component="openSource" />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { ContentDetailsCard } from '../../components'

export default {
  components: { ContentDetailsCard },
  computed: {
    ...mapState({
      openSource: (state) => state.openSource
    })
  }
}
</script>
