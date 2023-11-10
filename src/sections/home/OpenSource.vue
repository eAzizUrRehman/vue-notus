<template>
  <div
    class="container-tighter text-tertiary-white lg:scale-125 md:scale-110 scale-100"
  >
    <ContentDetailsCard :component="openSource" />
  </div>
</template>

<script>
import { ContentDetailsCard } from "../../components";
import store from "../../store";
export default {
  data() {
    return {};
  },
  components: { ContentDetailsCard },
  computed: {
    openSource() {
      return store.state.openSource;
    },
  },
};
</script>
