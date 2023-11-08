<template>
  <div class="container-tighter flex">
    <div class="w-1/2">
      <ContentDetailsCard :component="cssComponents" />
    </div>
    <div class="w-1/2 relative">
      <img
        :src="excellentServices"
        alt=""
        class="shadow-lg absolute w-48 rounded-lg left-20 -top-20"
      />
      <img
        :src="github"
        alt=""
        class="shadow-lg absolute w-24 top-32 left-48 rounded"
      />
      <img
        :src="rominaHadid"
        alt=""
        class="shadow-lg absolute w-48 right-0 rounded-lg"
      />
      <img
        :src="freeRevision"
        alt=""
        class="shadow-lg absolute w-52 bottom-16 -left-8 rounded-lg"
      />
      <img
        :src="regular"
        alt=""
        class="shadow-lg absolute w-32 bottom-32 right-32 rounded-lg"
      />
      <img
        :src="indigoMenu"
        alt=""
        class="shadow-lg absolute w-[95%] bottom-0 right-0 rounded-lg"
      />
    </div>
  </div>
</template>

<script>
import {
  excellentServices,
  github,
  indigoMenu,
  regular,
  rominaHadid,
  freeRevision,
} from "../../assets/home";
import { ContentDetailsCard } from "../../components";
import store from "../../store";
export default {
  data() {
    return {
      excellentServices,
      github,
      indigoMenu,
      regular,
      rominaHadid,
      freeRevision,
    };
  },
  components: {
    ContentDetailsCard,
  },
  computed: {
    cssComponents() {
      return store.state.cssComponents;
    },
  },
};
</script>
