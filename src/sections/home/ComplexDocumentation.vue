<template>
  <div class="container-tighter flex lg:flex-row flex-col gap-32">
    <div class="lg:w-1/3 w-fit lg:mx-0 mx-auto  ">
      <ContentDetailsCard :component="complexDocumentation" />
    </div>
    <div class="lg:w-2/3 w-full lg:mr-0 pr-10">
      <img
        :src="badge"
        alt=""
        class=" rounded-lg shadow-xl"
        style="transform: scale(1) perspective(1040px) rotateY(-11deg)"
      />
    </div>
  </div>
</template>

<script>
import { badge } from "../../assets/home";
import { ContentDetailsCard } from "../../components";
import store from "../../store";
export default {
  data() {
    return { badge };
  },
  components: { ContentDetailsCard },
  computed: {
    complexDocumentation() {
      return store.state.complexDocumentation;
    },
  },
};
</script>
