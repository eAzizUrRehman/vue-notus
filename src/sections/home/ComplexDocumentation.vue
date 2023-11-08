<template>
  <div class="container-tighter flex">
    <div class="w-1/3">
      <ContentDetailsCard :component="complexDocumentation" />
    </div>
    <div class="w-2/3 pl-32">
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
