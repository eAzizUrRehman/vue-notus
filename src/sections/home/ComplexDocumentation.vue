<template>
  <section class="container-tighter flex lg:flex-row flex-col sm:gap-32 gap-16">
    <div
      class="lg:w-1/3 w-fit lg:mx-0 mx-auto lg:scale-100 md:scale-125 sm:scale-110 scale-100"
    >
      <ContentDetailsCard :component="complexDocumentation" />
    </div>
    <div class="lg:w-2/3 w-full my-auto lg:mr-0 pr-10">
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
import { mapState } from "vuex";
import { badge } from "../../assets/home";
import { ContentDetailsCard } from "../../components";

export default {
  data() {
    return { badge };
  },
  components: { ContentDetailsCard },
  computed: {
    ...mapState({
      complexDocumentation: (state) => state.complexDocumentation,
    }),
  },
};
</script>
