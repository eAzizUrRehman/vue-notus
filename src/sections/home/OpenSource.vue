<template>
  <section
    class="container-tighter text-tertiary-white lg:scale-125 md:scale-110 scale-100"
  >
    <ContentDetailsCard :component="openSource" />
  </section>
</template>

<script>
import { mapState } from "vuex";
import { ContentDetailsCard } from "../../components";

export default {
  components: { ContentDetailsCard },
  computed: {
    ...mapState({
      openSource: (state) => state.openSource,
    }),
  },
};
</script>
