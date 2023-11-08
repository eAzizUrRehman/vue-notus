<template>
  <div class="container-tighter text-tertiary-white">
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
